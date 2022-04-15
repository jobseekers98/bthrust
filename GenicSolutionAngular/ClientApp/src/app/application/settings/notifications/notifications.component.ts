import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenicProfileService } from '../../../services/genicprofile.service';
import { AuthenticationService, Login } from 'src/app/services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: []
})
export class NotificationsComponent implements OnInit {
  currentUser: Login;
  constructor(
    private router: Router,
    public loginservice: AuthenticationService,
    public notifigService: NotificationService,
    public genicprofileservice: GenicProfileService,
    public toastr: ToastrService) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.getNotificationData();
  }

getNotificationData() {
  this.notifigService.getNotification(this.currentUser.Token)
  .subscribe( res => {
    if(res) {
     let obj: any = new Object();
     obj = res;
     this.notifigService.NotificationData = obj;
    }
  }, error =>  console.log(error));
}

saveNotifications() {
  this.notifigService.putNotificationDetails(this.currentUser.Token).subscribe( res => {
    const response = res as any;
    if (response.Message === 'success') {
      this.toastr.success('success', response.MessageDescription);
      }
    if (response.Message === 'failure') {
      this.toastr.warning('warning', response.MessageDescription);
      }
  }, error =>  console.log(error));
}

back() {
  this.router.navigate(['/settings']);
}
}
