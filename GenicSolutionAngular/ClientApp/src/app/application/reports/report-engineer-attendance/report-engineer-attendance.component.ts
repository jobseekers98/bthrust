import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { NgbDateAdapter, NgbModal, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-report-engineer-attendance',
  templateUrl: './report-engineer-attendance.component.html',
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter }
],
})
export class ReportEngineerAttendanceComponent implements OnInit, OnDestroy {
  @ViewChild('modalpopup', { static: true }) modalpopup: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  data: any;
  tempImg: any;
  constructor(public service: ReportService,
              public engineerservice: EngineerService,
              private downloadService: DownloadService,
              public loginservice: AuthenticationService,
              public genicprofileservice: GenicProfileService,
              private router: Router,
              private modal: NgbModal,
              private toastr: ToastrService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);;
                this.data = [];
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
      }}, error =>  console.log(error));
    this.service.ReportsFilter = new ReportsFilter();
    this.service.ReportsFilter.Department = 0;
    this.service.ReportsFilter.Engineer = '00000000-0000-0000-0000-000000000000';
    this.service.ReportsFilter.StartDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
    this.service.ReportsFilter.EndDate = this.genicprofileservice.TODAY_DATE_IN_STRING;
  }
  loaddata(sdate: string, edate: string) {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestEngineerAttendanceReports(this.currentUser.Token, sdate, edate,this.service.ReportsFilter.Engineer).subscribe( res => {
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
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  refreshEngineerData() {
    if (this.service.ReportsFilter.StartDate === undefined) { this.toastr.warning('Please select From date'); return false; }
    if (this.service.ReportsFilter.EndDate === undefined) { this.toastr.warning('Please select to date'); return false; }
    const cursDate = this.service.ReportsFilter.StartDate;
    const cureDate = this.service.ReportsFilter.EndDate;
    const sDate = cursDate.split('T')[0].replace(/-/g, '');
    const eDate = cureDate.split('T')[0].replace(/-/g, '');
    this.loaddata(sDate, eDate);
  }
  openimg(x: any) {
    this.tempImg = new Object();
    this.tempImg = x;
    this.modal.open(this.modalpopup, { size: 'xl' });
  }
  closeimg() {
    this.modal.dismissAll();
  }
  exportAsXLSX(): void {
    this.downloadService.exportAsExcelFile(this.data, 'report_' + this.currentUser.Engineer + 's');
  }
}
