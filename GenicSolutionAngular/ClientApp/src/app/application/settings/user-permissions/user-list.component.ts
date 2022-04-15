import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Login, Permission } from '../../../services';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { DownloadService } from 'src/app/services/downloads.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  totalUser = 0;
  activeUsers = 0;
  inActiveUsers = 0;
  currentUser: Login;
  data: any = [];
  constructor(public AuthService: AuthenticationService,
              public toastr: ToastrService,
              public router: Router,
              private downloadService: DownloadService,
              public loginservice: AuthenticationService,
              public genicprofileservice: GenicProfileService) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.load();
  }
  load() {
    if (this.dtElement !==  undefined && this.dtElement.dtInstance !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      }).catch(err => console.error(err));
    }
    this.AuthService.GetUsersList(this.currentUser.Token).subscribe( res => {
      if (res) { const response =  res as any;
                  this.data =  response.result;
                  this.dtTrigger.next();
                  this.totalUser = this.data.length;
                  this.activeUsers = this.data.filter(e => e.IsActive === true).length;
                  this.inActiveUsers = this.data.filter(e => e.IsActive === false).length;
      }}, error =>  console.log(error));
  }
  onUserStatusChange(Id: string) {
      this.AuthService.changeUserStatus(this.currentUser.Token, Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.load();
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                      this.load();
                    }
      }}, error =>  console.log(error));
  }
  openUserPermission(l: Login) {
    switch(l.Type){
      case 'SubAdmin': 
                    this.AuthService.localLoginData = Object.assign({}, l);
                    this.AuthService.getPermissionData(l.PermissionId).subscribe( res => {
                    if (res) { this.AuthService.PermissionData = res as Permission;
                              this.router.navigate(['/settings/user-permissions/allow-user-permissions']);
                    }}, error =>  console.log(error));
      break;
      case 'Engineer':
        this.router.navigate(['/engineers/engineer-edit/' + l.Id]);
      break;
    }
    
  }
  AddUser() {
    setTimeout(() => {
      this.AuthService.localLoginData = new Login();
      this.router.navigate(['/settings/user-permissions/add-new-user']);
   }, 500);
  }
  exportAsXLSX(): void {
    let exceldata = [];
    this.data.forEach(element => {
      exceldata.push ({ 
        'Username': element.UserName,
        'Full Name': element.FullName,
        'Email': element.Email,
        'Mobile': element.MobileNumber,
        'Type': element.Type,
        'Last Login': element.LastLoginUtcDate?.replace('T', ' ').replace('Z', ''),
        'Status': element.IsActive === true ? 'Active' : 'InActive'
      })
      });
      this.downloadService.exportAsExcelFile(exceldata, 'user_list');
    }
}
