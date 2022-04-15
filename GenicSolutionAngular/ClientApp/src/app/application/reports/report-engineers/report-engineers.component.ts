import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { Subject } from 'rxjs/internal/Subject';
import { Login, AuthenticationService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { ReportsFilter } from 'src/app/services/report.module';
import { DataTableDirective } from 'angular-datatables';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-report-engineers',
  templateUrl: './report-engineers.component.html',
  styles: [],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class ReportEngineersComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  data: any;
  constructor(public service: ReportService,
    public titleService: Title,
              private downloadService: DownloadService,
              public loginservice: AuthenticationService,
              public genicprofileservice: GenicProfileService,
              private router: Router,
              private toastr: ToastrService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);
                this.data = [];
              }
  ngOnInit() {
    if (!this.currentUser.Permissions.ReportEngineer) { this.router.navigate(['/dashboard']); }
    this.titleService.setTitle('Report Engineer | Genic Solution');
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.service.ReportsFilter = new ReportsFilter();
    this.service.ReportsFilter.Department = 0;
    this.loaddata('00000000', '00000000', 'alldata');
  }
  loaddata(sdate: string, edate: string, type: string) {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestEngineerReports(this.currentUser.Token, sdate, edate, type).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.data = response.result;
                    this.dtTrigger.next();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  refreshEngineerData(datewise: string) {
    if (datewise === 'datewise') {
      if (this.service.ReportsFilter.StartDate === undefined) { this.toastr.warning('Please select From date'); return false; }
      if (this.service.ReportsFilter.EndDate === undefined) { this.toastr.warning('Please select to date'); return false; }
      const cursDate = this.service.ReportsFilter.StartDate;
      const cureDate = this.service.ReportsFilter.EndDate;
      const sDate = cursDate.split('T')[0].replace(/-/g, '');
      const eDate = cureDate.split('T')[0].replace(/-/g, '');
      this.loaddata(sDate, eDate, datewise);
    } else {
      this.service.ReportsFilter = new ReportsFilter();
      this.loaddata('00000000', '00000000', 'alldata');
    }
  }
  exportAsXLSX(): void {
    this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
  }
}
