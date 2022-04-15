import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { TicketService } from 'src/app/services/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
@Component({
  selector: 'app-ticket-allocate-list-popup',
  templateUrl: './ticket-allocate-list-popup.component.html'
})
export class TicketAllocateListPopupComponent implements OnInit {
  currentUser: Login;
  localPrependUrl: string;
  constructor(public service: EngineerService,
              public ticketservice: TicketService,
              public loginservice: AuthenticationService,
              private toastr: ToastrService,
              public logService: UserlogService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl;
     }

  ngOnInit() {
    this.service.EngineerLocalList = [];
    setTimeout(() => {
    let stime = this.ticketservice.formData.AppointmentStart.replace('-', '').replace('-', '');
    stime = stime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
    let etime = this.ticketservice.formData.AppointmentEnd.replace('-', '').replace('-', '');
    etime = etime.replace(':', '').replace(':', '').replace('T', '').replace('Z', '');
    this.service.refrestUnallocatedTimeEngineerList(stime, etime, this.currentUser.Token);
    }, 200);
    setTimeout(() => {
      this.CheckedUncheckedEngineerList();
    }, 500);
  }
  onkeypresssearchengineer(value: string) {
    this.service.EngineerLocalList = this.service.Engineerlist.filter(item =>
    item.EngineerName.toLowerCase().match(value.toLowerCase()) ||
    item.EngineerName.toLowerCase().match(value.toLowerCase()) ||
    item.EngineerName.toLowerCase().match(value.toLowerCase()));
    setTimeout(() => {
      this.CheckedUncheckedEngineerList();
    }, 100);
}
  /***********************************************************************************************************/
  /////// Ticket Team Begin
  public AddEngineersToTicket(e: boolean, engineerid: string, engineername: string, logo: string) {
    if (this.ticketservice.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.toastr.warning('warning', 'Please select a customer first');
      return false;
    }
    this.ticketservice.TicketTeam.Id = 0;
    this.ticketservice.TicketTeam.TicketId = this.ticketservice.formData.Id;
    this.ticketservice.TicketTeam.EngineerId = engineerid;
    this.ticketservice.TicketTeam.EngineerName = engineername;
    this.ticketservice.TicketTeam.EngineerLogo = logo;
    if (Boolean(e)) {
      this.ticketservice.postTicketTeamDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.refrestTicketTeamlist();
                    this.toastr.info(response.MessageDescription);
                    const des5 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', is added to the ' + this.currentUser.Ticket + ' No ' +
                    this.ticketservice.formData.TicketId +
                      ' by user ' + this.currentUser.FullName;
                    const Activity5 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', is added to the ' + this.currentUser.Ticket + ' No ' +
                    this.ticketservice.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName, this.currentUser.Ticket,
                    this.service.formData.Id, 'Added', des5, Activity5).subscribe();
                    this.ticketservice.TicketTeam.Id = 0;
                    this.ticketservice.TicketTeam.TicketId = '';
                    this.ticketservice.TicketTeam.EngineerId = '';
                    this.ticketservice.TicketTeam.EngineerName = '';
                    this.ticketservice.TicketTeam.EngineerLogo = '';
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    } else {
      this.ticketservice.deleteTicketTeamDetails(this.ticketservice.formData.Id, engineerid,this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.refrestTicketTeamlist();
                    this.toastr.info('info', engineername + ' is removed');
                    const des4 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', has been Removed from the ' + this.currentUser.Ticket + ' No ' +
                    this.ticketservice.formData.TicketId +
                     ' by user ' + this.currentUser.UserName;
                    const Activity4 = 'An ' + this.currentUser.Engineer + ' : ' + engineername + ', has been Removed from the ' + this.currentUser.Ticket + ' No ' +
                    this.ticketservice.formData.TicketId;
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.FullName, this.currentUser.Ticket,
                    this.ticketservice.formData.Id, 'Removed', des4, Activity4).subscribe(); 
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
    }
  }
  refrestTicketTeamlist() {
    this.ticketservice.refrestTicketTeamlist(this.ticketservice.formData.Id, this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.ticketservice.TicketTeamList = response.result;
                    this.CheckedUncheckedEngineerList();
                  }
    }}, error =>  console.log(error));
  }
  private CheckedUncheckedEngineerList() {
    let demoClasses = null; demoClasses = document.querySelectorAll('.engineer-list-class');
    demoClasses.forEach(element => {
      this.ticketservice.TicketTeamList.forEach(el => {
        if (element.id === el.EngineerId) {
          element.innerHTML = "<i style='cursor: no-drop;' class='fa fa-ban'></i>";
        }
      });
    });
  }
}
