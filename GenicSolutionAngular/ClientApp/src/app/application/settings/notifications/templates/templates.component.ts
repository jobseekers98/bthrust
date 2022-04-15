import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { GenicProfileService } from 'src/app/services/genicprofile.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: []
})
export class TemplatesComponent implements OnInit {
  p = 1;
  constructor(
    private route: Router,
    public toastr: ToastrService,
    public genicprofileservice: GenicProfileService,
    public notifyService: NotificationService) { }

  ngOnInit() {
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.getEmailTemplateList();
  }
// Get email template list
getEmailTemplateList() {
  this.notifyService.getEmailTemplateList()
  .subscribe( res => {
    if (res) {
      let tempList: any = [];
      tempList = res;
      this.notifyService.NotificationTemplateList = tempList;
    }
  }, error =>  console.log(error));
}
// Add template
addTemplate() {
  this.route.navigate(['settings/notifications/add-template']);
}
// Edit Notification
openNotification(Id) {
  this.route.navigate(['settings/notifications/edit-template',Id]);
}
// Back to notificaiton list
back() {
  this.route.navigate(['/settings/notifications']);
}
onTemplateStatusChange(Id: string, index) {
  const CurrStatus = this.notifyService.NotificationTemplateList[index].IsActive;
  this.notifyService.changeNotificationTemplateStatus(Id, CurrStatus).subscribe(
    res => {
      switch (res.status) {
        case 201:
        this.toastr.success('', 'Status changed successfully.');
        break;
        case 404:
        this.toastr.warning('', 'Something went wrong');
        break;
        default: this.toastr.error('error', res.statusText); break;
      }
    }, err => { console.log(err); });
}
// Open Template
openNotificationTemplate(Id) {
  this.notifyService.getEmailTemplate(Id)
  .subscribe( res => {
    if (res) {
      let tempObj: any = new Object();
      tempObj = res;
      this.notifyService.NotificationTemplateData = tempObj;
      this.route.navigate(['/settings/notifications/edit-template']);
    }
  }, error =>  console.log(error));
}
}
