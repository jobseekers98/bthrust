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
import { EngineerService } from 'src/app/services/engineer.service';
import { Engineer } from 'src/app/services/engineer.module';
@Component({
  selector: 'app-report-engineer-time-sheet',
  templateUrl: './report-engineer-time-sheet.component.html',
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class ReportEngineerTimeSheetComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  data: any;
  datae: any;
  indx = -1;
  isClick = false;
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  firstdate = this.firstDay.getFullYear().toString().padStart(4, '0') + '-' +
             (this.firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
             this.firstDay.getDate().toString().padStart(2, '0');

  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1 , 0);
  lastdate = this.lastDay.getFullYear().toString().padStart(4, '0') + '-' +
            (this.lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' +
            this.lastDay.getDate().toString().padStart(2, '0');
  constructor(public service: ReportService,
              public engineerservice: EngineerService,
              private downloadService: DownloadService,
              public loginservice: AuthenticationService,
              public genicprofileservice: GenicProfileService,
              private router: Router,
              private toastr: ToastrService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);;
                this.data = [];
                this.datae = [];
              }
  ngOnInit() {
    if (!this.currentUser.Permissions.ReportEngineer) { this.router.navigate(['/dashboard']); }
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
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
    this.service.ReportsFilter.Department = 0;
    this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsFilter.StartDate = this.firstdate;
    this.service.ReportsFilter.EndDate = this.lastdate;
  }
  loaddata(sdate: string, edate: string) {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestEngineerwiseReports(this.currentUser.Token, sdate, edate,this.service.ReportsFilter.Engineer).subscribe( res => {
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
  refreshEngineerData() {
    this.isClick = false;
    this.indx = -1;
    if (this.service.ReportsFilter.StartDate === undefined) { this.toastr.warning('Please select From date'); return false; }
    if (this.service.ReportsFilter.EndDate === undefined) { this.toastr.warning('Please select to date'); return false; }
    const cursDate = this.service.ReportsFilter.StartDate;
    const cureDate = this.service.ReportsFilter.EndDate;
    const sDate = cursDate.split('T')[0].replace(/-/g, '');
    const eDate = cureDate.split('T')[0].replace(/-/g, '');
    this.loaddata(sDate, eDate);
  }
  getEngineerWise2Reports(EId: string, i: number) {
    if (this.service.ReportsFilter.StartDate === undefined) { this.toastr.warning('Please select From date'); return false; }
    if (this.service.ReportsFilter.EndDate === undefined) { this.toastr.warning('Please select to date'); return false; }
    this.indx = i;
    this.isClick = true;
    const cursDate = this.service.ReportsFilter.StartDate;
    const cureDate = this.service.ReportsFilter.EndDate;
    const sDate = cursDate.split('T')[0].replace(/-/g, '');
    const eDate = cureDate.split('T')[0].replace(/-/g, '');
    this.service.refrestEngineerwise2Reports(this.currentUser.Token, sDate, eDate, EId).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.datae = response.result;
                  }
    }}, error =>  console.log(error));
  }
  exportAsXLSX(): void {
    this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
  }
}
