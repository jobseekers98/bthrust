import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { DownloadService } from 'src/app/services/downloads.service';
import { EngineerService } from 'src/app/services/engineer.service';
import { ReportService } from 'src/app/services/report.service';
import { Subject } from 'rxjs/internal/Subject';
import { DataTableDirective } from 'angular-datatables';
import { ReportsFilter } from 'src/app/services/report.module';
import { Engineer } from 'src/app/services/engineer.module';
import { ToastrService } from 'ngx-toastr';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Router } from '@angular/router';
import { Login, AuthenticationService } from 'src/app/services';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styles: [],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class VisitsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' +
             (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
             this.firstDay.getDate().toString().padStart(2, '0');

  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1 , 0);
  lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' +
            (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
            this.lastDay.getDate().toString().padStart(2, '0');
  currentUser: Login;
  data: any;
  ticketlist: any; ticketlisttemp: any;
  constructor(
    public service: ReportService,
    public titleService: Title,
    private downloadService: DownloadService,
    public engineerservice: EngineerService,
    public genicprofileservice: GenicProfileService,
    public loginservice: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.data = [];
    this.ticketlist = [];
    this.ticketlisttemp = [];
   }

  ngOnInit() {
    if (!this.currentUser.Permissions.ReportVisit) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Report Visits | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.engineerservice.getEngineerListSync(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.engineerservice.Engineerlist = response.result as Engineer[];
                    }
                   if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    }
        }}, error =>  console.log(error));
    this.service.ReportsFilter = new ReportsFilter();
    this.service.ReportsFilter.StartDate = this.firstdate;
    this.service.ReportsFilter.EndDate = this.lastdate;
    this.service.ReportsFilter.Status = 'ALL';
    this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsFilter.Id = '00000000-0000-0000-0000-000000000000';

    const cursDate = this.service.ReportsFilter.StartDate;
    const cureDate = this.service.ReportsFilter.EndDate;
    const sDate = cursDate.split('T')[0].replace(/-/g, '');
    const eDate = cureDate.split('T')[0].replace(/-/g, '');
    this.loaddata(sDate, eDate, this.service.ReportsFilter.Status, this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Id);
    setTimeout(() => {
      this.ticketlisttemp = this.ticketlist;
    }, 1000);
  }
  ngAfterViewInit() {
  }
  loaddata(sdate: string, edate: string, type: string, eid: string, tid: string) {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestVisitsReports(this.currentUser.Token, sdate, edate, type, eid, tid).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.data = response.result;
                  this.ticketlist = response.ticketlist;
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
      this.loaddata(sDate, eDate, this.service.ReportsFilter.Status, this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Id);
    } else {
      this.service.ReportsFilter = new ReportsFilter();
      this.service.ReportsFilter.StartDate = this.firstdate;
      this.service.ReportsFilter.EndDate = this.lastdate;
      this.service.ReportsFilter.Status = 'ALL';
      this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
      this.service.ReportsFilter.Id = '00000000-0000-0000-0000-000000000000';

      const sDate = this.firstdate.split('T')[0].replace(/-/g, '');
      const eDate = this.lastdate.split('T')[0].replace(/-/g, '');
      setTimeout(() => {
        this.loaddata(sDate, eDate, this.service.ReportsFilter.Status, this.service.ReportsFilter.Engineer, this.service.ReportsFilter.Id);
      }, 100);
    }
}
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
exportAsXLSX(): void {
  let exceldata = [];
  this.data.forEach(element => {
    exceldata.push ({ 
      'TicketId': element.TicketDetails.TicketId,
      'Status': element.TicketDetails.Status,
      'Ticket Type': element.TicketDetails.TicketType,
      'Scheduled Start': element.Scheduled.Start,
      'Scheduled End': element.Scheduled.End,
      'Scheduled Duration': element.Scheduled.Duration,
      'Visit Start': element.VisitStart,
      'Visit End': element.VisitEnd,
      'Visit Duration': element.VisitDuration,
      'Company': element.TicketDetails.CustomerCompanyName,
      'Company name': element.TicketDetails.CustomerName,
      'Company Email': element.TicketDetails.CustomerEmail,
      'Company Address': element.TicketDetails.CustomerAddress,
      'Engineers': element.VisitEngineerName,
    })
    });
    this.downloadService.exportAsExcelFile(exceldata, 'report_visits');
  }
}
