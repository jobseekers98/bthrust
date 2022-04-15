import { Component, OnInit } from '@angular/core';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthenticationService, Login } from 'src/app/services';
import { MatDialogRef } from '@angular/material/dialog';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-service-form-filled-popup',
  templateUrl: './service-form-filled-popup.component.html',
  styleUrls: ['./service-form-filled-popup.component.css']
})
export class ServiceFormFilledPopupComponent implements OnInit {
  localPrependUrl: string;
  currentUser: Login;
  loading: boolean;
  showForm: boolean;
  IsAddMakeModel: string;
  isdescriptionValid = true;
  Itemindex = 0;
  damageparts: string;
  showOther = false;
  List1 = []; ListItems1 = [];
  List1Config = { displayKey: 'Name', search: true, limitTo: 20, show: 5 , placeholder: 'Select'};
  constructor(
     public dialogRef: MatDialogRef<ServiceFormFilledPopupComponent>,
     public service: ServiceformService,
     public gpservice: GenicProfileService,
     public ticketService: TicketService,
     public loginservice: AuthenticationService,
     private router: Router,
     private toastr: ToastrService
     ) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
      this.loading = false;
      this.showForm = false;
      }
  ngOnInit() {
    if (this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000' || this.ticketService.formData.Id === null) {
      this.router.navigate(['/engineer/engineer-tickets']);
    }
    setTimeout(() => {
      this.service.FSMServiceFormData.Request = this.ticketService.formData.Description;
    }, 1000);
    this.IsAddMakeModel = 'Add';
  }

  callSubmit(ispreview: boolean) {
    this.isdescriptionValid = true;
    if (this.service.FSMServiceFormData.SelectOne === '' || this.service.FSMServiceFormData.SelectOne === undefined || this.service.FSMServiceFormData.SelectOne === null) { 
      this.toastr.warning('please select one of the following');
      this.isdescriptionValid = false;
      return false; 
    }
    this.loading = true;
    setTimeout(() => {
      this.service.FSMServiceFormData.CloserId = this.service.TicketWiseServiceFormData.CloserId;
      const tid = this.service.TicketWiseServiceFormData.TicketId;
      const sid = this.service.TicketWiseServiceFormData.ServiceFormSequenceId;
        if (this.service.FSMServiceFormData.Id === 0) {
          this.service.postFSMServiceFormDetails(this.currentUser.Token, tid, sid, ispreview).subscribe( res => {
            if (res) { const response = res as any;
                       if (response.Message === 'success') {
                        this.toastr.success(response.MessageDescription);
                        this.dialogRef.close();
                        this.loading = false;
                        }
                       if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                        this.loading = false;
                        }
            }}, error =>  console.log(error));
        } else {
          this.service.putFSMServiceFormDetails(this.currentUser.Token, tid, ispreview).subscribe( res => {
            if (res) { const response = res as any;
                       if (response.Message === 'success') {
                        this.toastr.success(response.MessageDescription);
                        this.dialogRef.close();
                        this.loading = false;
                        this.service.TicketWiseServiceFormList = [];
                        setTimeout(() => {
                          this.service.getAssignedServiceFormListByTicket(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
                            if (res) { const response = res as any;
                                       if (response.Message === 'success') {
                                          this.service.TicketWiseServiceFormList = response.result;
                                        }
                          }}, error =>  console.log(error));
                        }, 2000);
                        }
                       if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                        this.loading = false;
                        }
            }}, error =>  console.log(error));
        }
    }, 500);
  }
  selectDesc(e: any) {
    if(e.target.value === 'Other'){
    this.showOther = true ;
    } else { this.showOther = false ; }
  }
  OnSubmit(ispreview: boolean) {
    if(!ispreview) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You can't edit after submission, do you want to continue?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Submit!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.value) {
         this.callSubmit(ispreview);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
 
        }
      });
    } else {
      this.callSubmit(ispreview);
    }
  }
}
