import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DownloadService } from 'src/app/services/downloads.service';
import { GenericService } from 'src/app/services/generic.service';
import { TicketIssueType } from 'src/app/services/ticket.module';

@Component({
  selector: 'app-ticket-issue-type',
  templateUrl: './ticket-issue-type.component.html',
  styleUrls: ['../settings.component.css']
})
export class TicketIssueTypeComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  createbuttontext: string;
  isValid = true;
  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
    public genicservice: GenericService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private downloadService: DownloadService,
  ) {this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
     this.refreshlist();
  }
  refreshlist() {
    this.genicservice.refrestTicketIssueTypelist(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.genicservice.TicketIssueTypelist = response.result as TicketIssueType[];
      }}, error =>  console.log(error));
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.genicservice.TicketIssueTypeformData.Id === 0) {
        this.genicservice.postTicketIssueTypeDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                        this.modal.dismissAll();
                        this.refreshlist();
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                      }
        }}, error =>  console.log(error));
      } else {
        this.genicservice.putTicketIssueTypeDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                        this.modal.dismissAll();
                        this.refreshlist();
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                      }
        }}, error =>  console.log(error));
      }
    }
  }
  validateForm() {
    this.isValid = true;
    if (this.genicservice.TicketIssueTypeformData.Name === '') {
      this.isValid = false;
    }
    return this.isValid;
  }
  pupulate(x?: TicketIssueType) {
    if (x == null) {
      this.createbuttontext = 'Create';
      this.genicservice.TicketIssueTypeformData = {
        Id: 0,
        Name: '',
        IsAssigned: false
      };
    } else {
      this.createbuttontext = 'Update';
      this.genicservice.TicketIssueTypeformData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 200);
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('ticketissuetype', this.currentUser.Token).then(blob => {
      saveAs(blob, this.currentUser.Ticket + 'issuetype_' + new Date().getTime() + '.xlsx');
    });
  }
}
