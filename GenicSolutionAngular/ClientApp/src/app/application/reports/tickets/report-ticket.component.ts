import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DownloadService } from 'src/app/services/downloads.service';
import { ReportService } from 'src/app/services/report.service';
import { Subject } from 'rxjs/internal/Subject';
import { Login, AuthenticationService } from 'src/app/services';
import { ReportsFilter } from 'src/app/services/report.module';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './report-ticket.component.html',
  styles: [],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class ReportTicketComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subTotal: number;
  currentUser: Login;
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' +
             (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
             this.firstDay.getDate().toString().padStart(2, '0');

  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1 , 0);
  lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' +
            (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
            this.lastDay.getDate().toString().padStart(2, '0');
  data: any;
  customerlist: any; customerlisttemp: any;
  constructor(public service: ReportService,
    public titleService: Title,
              private downloadService: DownloadService,
              public genicprofileservice: GenicProfileService,
              private toastr: ToastrService,
              private router: Router,
              public loginservice: AuthenticationService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);
                this.data = [];
                this.customerlist = [];
              }

  ngOnInit() {
    if (!this.currentUser.Permissions.ReportTicket) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Report ' + this.currentUser.Ticket + ' | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };

    this.service.ReportsFilter = new ReportsFilter();
    this.service.ReportsFilter.StartDate = this.firstdate;
    this.service.ReportsFilter.EndDate = this.lastdate;
    this.service.ReportsFilter.Status = 'ALL';
    this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsFilter.Type = 'One-Off Ticket';
    this.service.ReportsFilter.Department = 0;

    const cursDate = this.service.ReportsFilter.StartDate;
    const cureDate = this.service.ReportsFilter.EndDate;
    const sDate = cursDate.split('T')[0].replace(/-/g, '');
    const eDate = cureDate.split('T')[0].replace(/-/g, '');
    this.loaddata(sDate, eDate, 'false', this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Status);
    setTimeout(() => {
      this.customerlisttemp = this.customerlist;
    }, 1000);
  }

  loaddata(sdate: string, edate: string, type: string, eid: string, status) {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestTicketReports(this.currentUser.Token, sdate, edate, type, eid, status).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.data = response.result;
                    this.customerlist = response.customerlist;
                    this.dtTrigger.next();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  refreshVisitsList(isSearch: boolean) {
    if (isSearch) {
      if (this.service.ReportsFilter.StartDate === '00000000') { this.toastr.warning('Please select From date'); return false; }
      if (this.service.ReportsFilter.EndDate === '00000000') { this.toastr.warning('Please select to date'); return false; }
      const cursDate = this.service.ReportsFilter.StartDate;
      const cureDate = this.service.ReportsFilter.EndDate;
      const sDate = cursDate.split('T')[0].replace(/-/g, '');
      const eDate = cureDate.split('T')[0].replace(/-/g, '');

      let ticketType: boolean;
      if (this.service.ReportsFilter.Type === 'One-Off Ticket') {
        ticketType = false;
      } else {
        ticketType = true;
      }
      this.loaddata(sDate, eDate, ticketType.toString(), this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Status);
    } else {
      this.service.ReportsFilter = new ReportsFilter();
      this.service.ReportsFilter.StartDate = this.firstdate;
      this.service.ReportsFilter.EndDate = this.lastdate;
      this.service.ReportsFilter.Status = 'ALL';
      this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
      this.service.ReportsFilter.Type = 'One-Off Ticket';
      this.service.ReportsFilter.Department = 0 ;
      const sDate = this.firstdate.split('T')[0].replace(/-/g, '');
      const eDate = this.lastdate.split('T')[0].replace(/-/g, '');
      setTimeout(() => {
        this.loaddata(sDate, eDate, isSearch.toString(), this.service.ReportsFilter.Engineer,
          this.service.ReportsFilter.Status);
      }, 100);
    }
}
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  exportAsXLSX(): void {
   this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Ticket + '-oneoff');
  }
}
