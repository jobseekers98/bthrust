import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { environment } from 'src/environments/environment';
import { Login, AuthenticationService } from 'src/app/services';
import { ServiceformService } from 'src/app/services/serviceform.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-history-details',
  templateUrl: './ticket-history-details.component.html',
  styleUrls: ['./ticket-history-details.component.css']
})
export class TicketHistoryDetailsComponent implements OnInit {
  ResposeResult: any;
  localPrependUrl: string;
  currentUser: Login;
  constructor(public service: PropertyService,
    public titleService: Title,
              public loginservice: AuthenticationService,
              public serviceform: ServiceformService,
              public webParms: GenicProfileService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
   }
  ngOnInit() {
    this.ResposeResult = {};
    this.ResposeResult.TicketAttachment = [];
    this.ResposeResult.CustomerDetails = {};
    const Id = window.location.pathname.split('/').pop();
    this.service.ClientTicketHistory(Id).subscribe(res => {
      this.ResposeResult = res as any[];
    }, error =>  console.log(error));
    this.titleService.setTitle(this.currentUser.Ticket + ' History Details | Genic Solution');
  }

  serviceFormDownload(CloserId: string) {
    this.serviceform.downoadServiceFormPDF(CloserId)
    .subscribe(res => {
      const response = res as any;
      if (response.Message === 'success') {
        const a = $('<a>')
          .attr('href', response.Path)
    .attr("target", "_blank")
          .attr('download', 'Service.pdf')
          .appendTo('body');
        a[0].click();
        a.remove();
      }
      if (response.Message === 'failure') {
        console.log(response.MessageDescription)
      }
    }, error => console.log(error));
  }
}
