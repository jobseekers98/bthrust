import { Component, OnInit } from '@angular/core';
import { CloserService } from 'src/app/services/closer.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';

@Component({
  selector: 'app-closerdetails',
  templateUrl: './closerdetails.component.html',
  styles: []
})
export class CloserdetailsComponent implements OnInit {
  localPrependUrl: string;
  currentUser: Login;
  rightImagePath: string = '/assets/images/rightImage.png';
  constructor(
    public closerService: CloserService,
    public webParms: GenicProfileService,
    public loginservice: AuthenticationService,
    private router: Router
  ) {
    this.localPrependUrl = environment.apiUrl;
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.webParms.getGenicProfile(this.currentUser.Token);
    if (this.closerService.CloserDetailsData.EnginnerName === null || this.closerService.CloserDetailsData.EnginnerName === undefined) {
      this.router.navigate(['/engineertickets/']);
    } else {
      const obj1 = this.closerService.CloserDetailsData.StartTime;
      this.closerService.CloserDetailsData.StartTime = obj1; // .split(':')[0] + ':' + obj1.split(':')[1];
      const obj2 = this.closerService.CloserDetailsData.EndTime;
      this.closerService.CloserDetailsData.EndTime = obj2; // .split(':')[0] + ':' + obj2.split(':')[1];
      this.getTicketCloserAttachmentList();
    }
  }
  getTicketCloserAttachmentList() {
    this.closerService.getTicketCloserAttachmentList(this.currentUser.Token, this.closerService.CloserDetailsData.CloserID).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.closerService.CloserAttachmentList = [];
                    this.closerService.CloserAttachmentList = response.result;
                  }
    }}, error =>  console.log(error));
  }
  downloadFile(id, attd) {
    let link = document.createElement("a");
    link.download = "filename";
    link.href = environment.apiUrl + '/CloserAttachment/' + id + '/' + attd;
    link.click();
}
}
