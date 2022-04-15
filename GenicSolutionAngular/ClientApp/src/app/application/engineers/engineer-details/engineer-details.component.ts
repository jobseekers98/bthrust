import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { Engineer } from 'src/app/services/engineer.module';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { environment } from 'src/environments/environment';
import { GenicZone } from 'src/app/services/genic-zone';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EngineerViewGeofencingComponent } from '../engineer-add/engineer-view-geofencing.Component';
import { Ticket } from 'src/app/services/ticket.module';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
import { UserlogService } from 'src/app/services/userlog.service';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './engineer-details.component.html',
  styleUrls: ['../engineer-add/engineer-add.component.css']
})
export class EngineerDetailsComponent implements OnInit {
  formData: Engineer;
  localPrependUrl: string;
  currentUser: Login;
  constructor(
    public titleService: Title,
    public service: EngineerService,
    public logService: UserlogService,
    public ticketservice: TicketService,
    private router: Router,
    private dialog: MatDialog,
    public loginservice: AuthenticationService
    ) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
    }

  ngOnInit() {
    this.ticketservice.Ticketlist = [];
    const Id = window.location.pathname.split('/').pop();
    if (Id === '00000000-0000-0000-0000-000000000000') { this.router.navigate(['/engineers']);}
    this.titleService.setTitle(this.currentUser.Engineer + ' Details | Genic Solution');
    this.service.getEngineerById(this.currentUser.Token, Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.formData = response.result;
                  this.service.getEngineerTickets(this.currentUser.Token, Id).subscribe(
                    res => {
                      const response = res as any;
                      this.ticketservice.Ticketlist = [];
                      this.ticketservice.Ticketlist = response.result as Ticket[];
                    }, error => console.log(error));
                  }
      }}, error =>  console.log(error));
  }
  OpenZoneInPopup(z: GenicZone) {
    setTimeout(() => {
       this.OpenZonePopup(z);
    }, 100);
  }
  OpenZonePopup(z: GenicZone) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.panelClass = 'geoCustomMatClass';
    dialogConfig.data = {};
    this.dialog.open(EngineerViewGeofencingComponent, dialogConfig).afterClosed().subscribe(res => {
      });
  }

  ViewTicketDetails(x: Ticket) {
    this.ticketservice.formData =  Object.assign({}, x);
    this.router.navigate(['/tickets/ticket-view-detail']);
  }
  resetpassword() {
    Swal.fire({
      title: 'keep it?',
      text: 'Are you sure you want to reset password of ' + this.service.formData.EngineerName + '?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Cancel',
      cancelButtonColor: 'green',
      cancelButtonText: 'Continue',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Keep it!',
          text: 'Action is dismissed',
          type: 'info',
          timer: 2000
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.service.EngineerPasswordReset(this.service.formData.Id, this.currentUser.Token).subscribe( res => {
        if (res) {
            /// logs
            const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ', ' + this.currentUser.Engineer + ' Id : ' + this.service.formData.EngineerId +
               ', is password reset by user : ' + this.currentUser.UserName;
            const Activity = 'Password reset of ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' is successfully ';
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer,
            this.service.formData.Id, 'Modify', des, Activity).subscribe();
            /// logs
            const response = res as any;
            if (response.Message === 'success') {
              Swal.fire({
                title: 'Done!',
                showConfirmButton: false,
                text: 'Password is reset successfully.',
                type: 'success',
                timer: 2000,
              });
              setTimeout(() => {
                Swal.fire({
                  title: 'Done!',
                  text: 'New password is "Eng@1234"',
                  type: 'success',
                });
              }, 2100);
            }
            if (response.Message === 'failure') {
              Swal.fire({
                title: 'failure!',
                text: response.MessageDescription,
                type: 'warning',
              });
            }
            if (response.Message === 'error') {
              Swal.fire({
                title: 'error!',
                text: response.MessageDescription,
                type: 'error',
              });
            }
            
          }}, error =>  console.log(error));
      }
    });
  }
}
