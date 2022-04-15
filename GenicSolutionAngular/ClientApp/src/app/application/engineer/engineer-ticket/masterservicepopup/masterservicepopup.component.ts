import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TicketWiseServiceForm } from 'src/app/services/serviceform.module';
import { TicketService } from 'src/app/services/ticket.service';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { CloserService } from 'src/app/services/closer.service';

@Component({
  selector: 'app-masterservicepopup',
  templateUrl: './masterservicepopup.component.html',
  styleUrls: ['./masterservicepopup.component.css']
})
export class MasterservicepopupComponent implements OnInit {
  tempFormName;
  currentUser: Login;
  TicketWiseServiceForm: TicketWiseServiceForm;
  constructor(
    private toastr: ToastrService,
    private service: ServiceformService,
    public closerService: CloserService,
    private ticketService: TicketService,
    public loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<MasterservicepopupComponent>,
    public logService: UserlogService,
    public genicProfile: GenicProfileService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.service.tempTicketwiseServiceFormList = [];
    this.tempFormName = '';
   }

    ngOnInit() {
      // this.LocalMasterServiceFormList = [];
      // this.genicProfile.getGenicProfile(this.currentUser.Token);
      // setTimeout(() => {
      //   this.service.getMasterServiceformList();
      //   this.LocalMasterServiceFormList = this.service.MasterServiceFormlist;
      // }, 800);
    }

    addMasterFormToArray(e, FormID, FormTitle, i, IIsHTML) {
      if (e.target.checked === true) {
        this.service.tempTicketwiseServiceFormList = [];
        setTimeout(() => {
          this.service.tempTicketwiseServiceFormList.push({
            TicketServiceID : 0,
            ServicePrefix: this.genicProfile.formData.ServicePrefix,
            MasterServiceFormID : FormID,
            Description: '',
            TicketId : this.ticketService.formData.Id,
            TicketNo : this.ticketService.formData.TicketId,
            IsActive: false,
            IsPreview: false,
            ServiceFormName : FormTitle,
            ServiceFormSequenceId: 0,
            ServiceDate: new Date(),
            TicketDate: new Date(),
            EngineerId: '00000000-0000-0000-0000-000000000000',
            EngineerName: '',
            IsHTML: IIsHTML,
            ClientformIdOnSave: i,
            CloserId: this.closerService.CloserDetailsData.CloserID
          });
        }, 500);
      this.service.TicketWiseServiceFormData.MasterServiceFormID = 0;
      this.service.TicketWiseServiceFormData.ServiceFormName = '';
    } else {
      return this.service.tempTicketwiseServiceFormList.splice(i, 1);
    }
    }
    public assignServiceForm() {
      if (this.service.tempTicketwiseServiceFormList.length > 0 ) {
        this.service.asignServiceformToTicket(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                      this.toastr.success('success', response.MessageDescription);
                      this.dialogRef.close();
                      setTimeout(() => {
                        this.service.getAssignedServiceFormListByTicket(this.currentUser.Token, this.ticketService.formData.Id).subscribe( res => {
                          if (res) { const response = res as any;
                                     if (response.Message === 'success') {
                                        this.service.TicketWiseServiceFormList = response.result;
                                      }
                        }}, error =>  console.log(error));
                        this.service.tempTicketwiseServiceFormList.forEach(el => {
                          this.tempFormName += el.ServiceFormName + ',' ;
                        });
                        const des = 'A Service form : ' + this.tempFormName + ', has been added to the ' + this.currentUser.Ticket + ' No ' +
                        this.ticketService.formData.TicketId + ', of Customer : ' + this.ticketService.formData.CustomerName +
                        ' by user : ' + this.currentUser.FullName;
                        const Activity =  'Service form :' + this.tempFormName + ' is added against ' + this.currentUser.Ticket + ' No : '
                        + this.ticketService.formData.TicketId;
                        this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Ticket,
                        this.ticketService.formData.Id, 'Added', des, Activity ).subscribe();
                      }, 200);
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                      }
        }}, error =>  console.log(error));
      } else {
        this.toastr.warning('warning', 'Select service form and try again.');
      }
    }
}
