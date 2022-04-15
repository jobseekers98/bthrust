import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-engineer',
  templateUrl: './ticket-engineer.component.html',
  styles: []
})
export class TicketEngineerComponent implements OnInit {
  currentUser: Login;
  localPrependUrl: string;
  constructor(public service: EngineerService,
              public ticketservice: TicketService,
              public loginservice: AuthenticationService,
              ) {
                this.loginservice.currentUser.subscribe(x => this.currentUser = x);
                this.localPrependUrl = environment.apiUrl;
              }
  ngOnInit() {
    this.service.Engineerlist = [];
    setTimeout(() => {
       this.service.refrestAssinedEngineersList(this.currentUser.Token, this.ticketservice.formData.Id);
    }, 200);
  }
}
