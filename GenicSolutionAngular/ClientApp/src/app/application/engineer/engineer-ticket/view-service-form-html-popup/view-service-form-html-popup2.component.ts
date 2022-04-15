import { Component, OnInit } from '@angular/core';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthenticationService, Login } from 'src/app/services';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { ServiceFormFilledPopupComponent } from '../service-form-filled-popup/service-form-filled-popup.component';
@Component({
  selector: 'app-view-service-form-html-popup',
  templateUrl: './view-service-form-html-popup.component.html',
  styleUrls: ['../service-form-filled-popup/service-form-filled-popup.component.css']
})
export class ViewServiceFormHTMLPopupComponent implements OnInit {
  localPrependUrl: string;
  currentUser: Login;
  damageparts: string;
  constructor(
     public dialogRef: MatDialogRef<ViewServiceFormHTMLPopupComponent>,
     public service: ServiceformService,
     public gpservice: GenicProfileService,
     public ticketService: TicketService,
     public loginservice: AuthenticationService,
     private router: Router,
     private dialog: MatDialog,
     private toastr: ToastrService,
     ) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      }
  ngOnInit() {
    if (this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.Id === null) {
      this.router.navigate(['/engineer/engineer-tickets']);
    }
    this.service.getFSMServiceFormById(this.currentUser.Token, this.service.TicketWiseServiceFormData.CloserId).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   console.log(response.result);
                  this.service.FSMServiceFormData = response.result;
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
  OnEdit() {
    this.service.TicketWiseServiceFormData = Object.assign({}, this.service.TicketWiseServiceFormData);
    this.service.FSMServiceFormData = Object.assign({}, this.service.FSMServiceFormData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1000px';
    dialogConfig.height = '700px';
    dialogConfig.data = {};
    this.dialog.open(ServiceFormFilledPopupComponent, dialogConfig).afterClosed().subscribe(res => {
      this.dialogRef.close();
    });
  }
   //#endregion
}
