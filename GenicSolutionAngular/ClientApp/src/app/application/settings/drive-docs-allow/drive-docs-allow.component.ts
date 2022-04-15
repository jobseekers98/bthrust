import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { GenicDocExt } from 'src/app/services/genicprofile.module';
import { GenericService } from 'src/app/services/generic.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-drive-docs-allow',
  templateUrl: './drive-docs-allow.component.html',
  styleUrls: ['../settings.component.css']
})
export class DriveDocsAllowComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  AddButton: string;
  isValid: boolean;
  isValidName: boolean;
  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
    public service: GenericService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private downloadService: DownloadService,
  ) {this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [ 10, 25, 50, 75, 100 ] };
     this.isValid = false;
     this.AddButton = 'Add';
     this.refreshlist();
  }
  refreshlist() {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.service.getGenicDocExt(this.currentUser.Token).subscribe( res => {
      if (res) {
        const templist = res as any;
        this.service.GenicDocExtList = templist.result
        this.dtTrigger.next();
      }}, error =>  console.log(error));
  }
  pupulate(x?: GenicDocExt) {
    if (x == null) {
      this.service.GenicDocExtData = new GenicDocExt();
      this.service.GenicDocExtData.Id = 0;
      this.service.GenicDocExtData.ExtentionName = '';
      this.service.GenicDocExtData.IsActive = true;
      this.AddButton = 'Add';
    } else {
      this.service.GenicDocExtData = Object.assign({}, x);
      this.AddButton = 'Update';
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 500);
  }
  removesmtp(x: GenicDocExt) {
    Swal.fire({
      title: 'Remove',
      text: 'Are you sure you want to remove ' + x.ExtentionName,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Yes, remove it',
      cancelButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
           this.service.removeGenicDocExt(this.currentUser.Token, x.Id).subscribe( res => {
            if (res) {
              const respone = res as any;
              if (respone.Message === 'success') {
                this.toastr.success(respone.MessageDescription);
                this.refreshlist();
              } else {
                Swal.fire({
                  title: 'Keep it!',
                  text: respone.MessageDescription,
                  type: 'warning',
                  timer: 2000
                });
              }
            }}, error =>  console.log(error));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Your Leave request is safe.',
          type: 'info',
          timer: 2000
        });
      }
    });
  }
  /***************** SMTP Begin *******************/
  OnSubmit() {
    if (this.validateForm()) {
      if (this.service.GenicDocExtData.Id === 0) {
        this.service.postGenicDocExt(this.currentUser.Token).subscribe( res => {
          if (res) { const respone = res as any;
                     if (respone.Message === 'success') {
                      this.toastr.success(respone.MessageDescription);
                      this.refreshlist();
                      const des = 'A Document Extenstion ' + this.service.GenicDocExtData.ExtentionName + ' is added  by user : ' + this.currentUser.UserName + ' Extenstion Name : ' +
                      this.service.GenicDocExtData.ExtentionName + ' , is added by : ' + this.currentUser.UserName;
                      const Activity6 = 'A document extenstion ' + this.service.GenicDocExtData.ExtentionName + ' added';
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Document',
                      null, 'Added', des, Activity6).subscribe();
                     } else {
                      this.toastr.warning(respone.MessageDescription);
                     }
          }}, error =>  console.log(error));
      } else {
        this.service.putGenicDocExt(this.currentUser.Token).subscribe( res => {
          if (res) { const respone = res as any;
                     if (respone.Message === 'success') {
                    this.toastr.success(respone.MessageDescription);
                    this.refreshlist();
                    let st = this.service.GenicDocExtData.IsActive ? 'active': 'inactive';
                    const des = 'A Document Extenstion ' + this.service.GenicDocExtData.ExtentionName + ' is modify  by user : ' + this.currentUser.UserName + ' Extenstion Name : ' +
                      this.service.GenicDocExtData.ExtentionName + ' status change to ' + st + ' , is modify by : ' + this.currentUser.UserName;
                      const Activity6 = 'A document extenstion ' + this.service.GenicDocExtData.ExtentionName + ' modify';
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Document',
                        null, 'Modify', des, Activity6).subscribe();
                    } else {
                    this.toastr.warning(respone.MessageDescription);
                    }
          }}, error =>  console.log(error));
      }
      this.modal.dismissAll();
    }  else {
      this.toastr.warning('warning', 'All Fields are mandatory');
    }
  }
  validateForm(): boolean {
    this.isValid = true;
    this.isValidName = true;
    if (this.service.GenicDocExtData.ExtentionName === null || this.service.GenicDocExtData.ExtentionName === undefined ||
      this.service.GenicDocExtData.ExtentionName === '') {
      this.isValidName = false;
      this.isValid = false;
      this.toastr.warning('warning', 'Please enter a name!');
    }
    return this.isValid;
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('docsallow', this.currentUser.Token).then(blob => {
      saveAs(blob, 'docs_allow_' + new Date().getTime() + '.xlsx');
    });
  }
  /***************** SMTP End *******************/
}
