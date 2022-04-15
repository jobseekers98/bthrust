import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Engineer } from '../../../services/engineer.module';
import { EngineerService } from '../../../services/engineer.service';
import { Router } from '@angular/router';
import { DownloadService } from '../../../services/downloads.service';
import { environment } from 'src/environments/environment';
import { Login } from '../../../services/login.mudule';
import { AuthenticationService } from '../../../services/authentication.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs/internal/Subject';
import { saveAs } from 'file-saver';
import { DataTableDirective } from 'angular-datatables';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './engineer-list.component.html'
})
export class EngineerListComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  formData: Engineer;
  localPrependUrl: string;
  TotalEngineerCount: number;
  WorkingEngineerCount: number;
  NotworkingEngineerCount: number;
  dropdownbtnavgrev: string;
  isShowAddEngineerButton: boolean = false;
  tempEngineerList: any;
  tempEngineerList2: any;
  constructor(
    public titleService: Title,
    public service: EngineerService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService,
    private router: Router,
    private downloadService: DownloadService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.tempEngineerList = [];
    this.tempEngineerList2 = [];
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [5, 10, 25, 50, 75, 100] };
    this.dropdownbtnavgrev = 'All ' + this.currentUser.Engineer + 's';
    this.TotalEngineerCount = 0;
    this.WorkingEngineerCount = 0;
    this.NotworkingEngineerCount = 0;
  }

  ngOnInit() {
    this.titleService.setTitle(this.currentUser.Engineer + 's | Genic Solution');
    this.load();
  }
  load() {
    if (this.dtElement !== undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.refrestEngineerTableList(this.currentUser.Token).subscribe(res => {
      if (res) {
        const response = res as any;
        this.tempEngineerList = response.result;
        this.tempEngineerList2 = response.result;
        this.TotalEngineerCount = this.tempEngineerList.length;
        this.WorkingEngineerCount = this.tempEngineerList.filter(x => x.Working === true).length;
        this.NotworkingEngineerCount = this.tempEngineerList.filter(x => x.Working === false).length;
        this.dtTrigger.next();
      }
    }, error => console.log(error));
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
  OpenAddEngineerDialog() {
    this.service.SetAsDefaultValues();
    this.router.navigate(['/engineers/engineer-add/']);
  }

  pupulateengineer(x: string) {
    this.router.navigate(['/engineers/engineer-edit/' + x]);
  }
  FilterEngineers(value: number) {
    this.tempEngineerList2 = [];
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    }).catch(err => console.error(err));
    switch (value) {
      case 3:
        this.tempEngineerList2 = this.tempEngineerList.filter(x => x.Working === false);
        this.dropdownbtnavgrev = 'Notworking ' + this.currentUser.Engineer + 's';
        break;
      case 2:
        this.tempEngineerList2 = this.tempEngineerList.filter(x => x.Working === true);
        this.dropdownbtnavgrev = 'Working ' + this.currentUser.Engineer + 's';
        break;
      default:
        this.tempEngineerList2 = this.tempEngineerList;
        this.dropdownbtnavgrev = 'All ' + this.currentUser.Engineer + 's';
    }
    this.dtTrigger.next();
  }
  
  detailsengineer(x: string) {
    this.router.navigate(['/engineers/engineer-details/' + x]);
  }
  onEngineerStatusChange(e, id: string) {
    if (e.target.checked === true) {
      this.service.putEngineerWorkingOrNot(this.currentUser.Token, id).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            Swal.fire({
              title: 'Done!',
              text: 'Working status is change.',
              type: 'success',
              timer: 2000
            });
            this.load();
          }
          if (response.Message === 'failure') {
            Swal.fire({
              title: 'warning!',
              text: response.MessageDescription,
              type: 'warning',
              timer: 5000
            });
            this.load();
          }
        }
      }, error => console.log(error));
    } else {
      Swal.fire({
        title: 'Inactive ' + this.currentUser.Engineer + '?',
        text: 'Are you sure want to mark not working?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cancel',
        cancelButtonText: 'Yes, Mark!',
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'keep it!',
            text: 'Action is skip by you.',
            type: 'info',
            timer: 2000
          });
          this.load();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Aru you sure?',
            text: 'All ' + this.currentUser.Ticket.toLowerCase() + 's will be unassigned from this ' + this.currentUser.Engineer.toLowerCase() + '?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Cancel!',
            cancelButtonText: 'Yes, change it!',
          }).then((result2) => {
            if (result2.value) {
              this.load();
            } else if (result2.dismiss === Swal.DismissReason.cancel) {
              this.service.putEngineerWorkingOrNot(this.currentUser.Token, id).subscribe(res => {
                if (res) {
                  const response = res as any;
                  if (response.Message === 'success') {
                    Swal.fire({
                      title: 'Done!',
                      text: 'Working status is change.',
                      type: 'success',
                      timer: 2000
                    });
                    this.load();
                  }
                  if (response.Message === 'failure') {
                    Swal.fire({
                      title: 'warning!',
                      text: response.MessageDescription,
                      type: 'warning',
                      timer: 5000
                    });
                    this.load();
                  }
                }
              }, error => console.log(error));
            }
          });
        }
      });
    }
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('engineer', this.currentUser.Token).then(blob => {
      saveAs(blob, this.currentUser.Engineer + '_' + new Date().getTime() + '.xlsx');
    });
  }
}
