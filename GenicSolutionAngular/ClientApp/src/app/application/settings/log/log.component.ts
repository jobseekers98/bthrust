import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { UserlogService } from '../../../services/userlog.service';
import { UserLog } from '../../../services/userlog.module';
import { NgbDateAdapter, NgbModal, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { Login, AuthenticationService } from '../../../services';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs/internal/Subject';
import { DataTableDirective } from 'angular-datatables';
import { NgbDateToStringAdapter } from 'src/app/ngb-date-to-string-adapter';
import { NgbTimeToStringAdapter } from 'src/app/ngb-time-to-string-adapter';
import { DownloadService } from 'src/app/services/downloads.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateToStringAdapter },
    { provide: NgbTimeAdapter, useClass: NgbTimeToStringAdapter },
  ],
})
export class LogComponent implements OnInit, OnDestroy {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isDtInitialized: boolean = false;
  LocalLogData: UserLog;
  LocalUsers: any[];
  currentUser: Login;
  localPrependUrl: string;
  data: any = [];
  constructor(
    public logService: UserlogService,
    private modal: NgbModal,
    private downloadService: DownloadService,
    public loginservice: AuthenticationService,
    public profileService: GenicProfileService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
   }

  ngOnInit() {
    this.profileService.TicketFilter.IsReady = false;
    this.profileService.TicketFilter.IsReadyQuote = false;
    this.profileService.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 5, 10, 25, 50, 75, 100 ] };
    this.logService.getUserLog(this.currentUser.Token).subscribe( res => {
      if (res) { this.logService.UserLogList = res as UserLog[];
                 this.distroyAndReloadTable();
                 setTimeout(() => {
                  this.LocalUsers = this.logService.UserLogList.map(item => item.UserName)
                  .filter((value, index, self) => self.indexOf(value) === index);
                 }, 1000);
      }}, error =>  console.log(error));
    this.profileService.getGenicProfile(this.currentUser.Token);
  }
  distroyAndReloadTable(): void {
    this.logService.getUserLog(this.currentUser.Token).subscribe( res => {
      if (res) {  const response = res as any;
                  this.data = this.logService.UserLogList = res as UserLog[];
                  if (this.isDtInitialized) {
                    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                        dtInstance.destroy();
                        this.dtTrigger.next();
                    }); } else {
                    this.isDtInitialized = true;
                    this.dtTrigger.next();
                }
      }
    }, error =>  console.log(error));
  }
  ReadMoreLog(i: UserLog) {
    this.LocalLogData = new UserLog();
    this.LocalLogData = i;
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
    loadUserLogOnChange() {
      this.data = [];
      // tslint:disable-next-line: max-line-length
      if (this.logService.LogParam.User === 'All' && this.logService.LogParam.Action === 'All' && this.logService.LogParam.Module === 'All') {
        this.data= this.logService.UserLogList;
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User === 'All' && this.logService.LogParam.Action === 'All' && this.logService.LogParam.Module !== 'All') {
        this.data = this.logService.UserLogList.filter(x => x.Module === this.logService.LogParam.Module);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User === 'All' && this.logService.LogParam.Action !== 'All' && this.logService.LogParam.Module === 'All') {
        this.data = this.logService.UserLogList.filter(x => x.ActionType === this.logService.LogParam.Action);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User === 'All' && this.logService.LogParam.Action !== 'All' && this.logService.LogParam.Module !== 'All') {
        // tslint:disable-next-line: max-line-length
        this.data = this.logService.UserLogList.filter(x => x.ActionType === this.logService.LogParam.Action && x.Module === this.logService.LogParam.Module);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User !== 'All' && this.logService.LogParam.Action !== 'All' && this.logService.LogParam.Module !== 'All') {
        // tslint:disable-next-line: max-line-length
        this.data = this.logService.UserLogList.filter(x => x.UserName === this.logService.LogParam.User && x.ActionType === this.logService.LogParam.Action && x.Module === this.logService.LogParam.Module);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User !== 'All' && this.logService.LogParam.Action !== 'All' && this.logService.LogParam.Module === 'All') {
        // tslint:disable-next-line: max-line-length
        this.data = this.logService.UserLogList.filter(x => x.UserName === this.logService.LogParam.User && x.ActionType === this.logService.LogParam.Action);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User !== 'All' && this.logService.LogParam.Action === 'All' && this.logService.LogParam.Module === 'All') {
        // tslint:disable-next-line: max-line-length
        this.data = this.logService.UserLogList.filter(x => x.UserName === this.logService.LogParam.User);
      // tslint:disable-next-line: max-line-length
      } else if (this.logService.LogParam.User !== 'All' && this.logService.LogParam.Action === 'All' && this.logService.LogParam.Module !== 'All') {
        // tslint:disable-next-line: max-line-length
        this.data = this.logService.UserLogList.filter(x => x.UserName === this.logService.LogParam.User && x.Module === this.logService.LogParam.Module);
      }
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        }); } else {
        this.isDtInitialized = true;
        this.dtTrigger.next();
    }
  }
  exportAsXLSX(): void {
    let exceldata = [];
    this.data.forEach(element => {
      exceldata.push ({ 
        'Username': element.UserName,
        'Module': element.Module,
        'ActionType': element.ActionType,
        'IP': element.IP,
        'LogDate': element.LogDate,
        'Description': element.Description
      })
      });
      this.downloadService.exportAsExcelFile(exceldata, 'user_logs');
    }
}
