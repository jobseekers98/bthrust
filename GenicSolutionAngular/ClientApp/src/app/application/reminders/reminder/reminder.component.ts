import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { ReminderService } from 'src/app/services/reminder.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
@Component({
  templateUrl: './reminder.component.html',
  styleUrls: [],
})
export class ReminderComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  currentUser: Login;
  dropdownbtnavgrev: string;
  trname: string;
  dropdowntype: string;
  dropdowntypevalue: number;
  data: any;
  tempdata: any;
  constructor(
    public titleService: Title,
    public reminderservice: ReminderService,
    public loginservice: AuthenticationService,
    private toastr: ToastrService
  ) {
    this.dropdownbtnavgrev = 'Ticket Reminders';
    this.dropdowntype = 'Active Reminders';
    this.dropdowntypevalue = 1;
    this.trname = 'ticket';
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.dtOptions = { pagingType: 'full_numbers', paging: true, ordering: false, lengthMenu: [10, 25, 50, 75, 100] };
  }

  ngOnInit() {
    this.reminderservice.getAllReminders(this.currentUser.Token, 'ticket').subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.data = [];
          this.tempdata = [];
          this.data = response.result;
          this.tempdata = response.result;
          this.dtTrigger.next();
          this.changetype(this.dropdowntypevalue);
        }
      }
    }, error => console.log(error));
    this.titleService.setTitle(this.dropdownbtnavgrev + ' | Genic Solution');
  }

  loadData(t: string) {
    this.trname = t;
    this.dropdownbtnavgrev = t;
    this.reminderservice.getAllReminders(this.currentUser.Token, t).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.data = [];
          this.tempdata = [];
          this.data = response.result;
          this.tempdata = response.result;
          this.changetype(this.dropdowntypevalue);
        }
      }
    }, error => console.log(error));
    switch (t) {
      case 'ticket': this.dropdownbtnavgrev = 'Ticket Reminders'; break;
      case 'quote': this.dropdownbtnavgrev = 'Quotation Reminders'; break;
      case 'invoice': this.dropdownbtnavgrev = 'Invoice Reminders'; break;
      case 'warranty': this.dropdownbtnavgrev = 'Warranty Reminders'; break;
    }
  }
  changetype(t: number) {
    this.dropdowntypevalue = t;
    switch (t) {
      case 0: this.dropdowntype = 'InActive Reminders'; this.data = this.tempdata.filter(s => s.IsActive === false); break;
      case 1: this.dropdowntype = 'Active Reminders'; this.data = this.tempdata.filter(s => s.IsActive === true); break;
      case 2: this.dropdowntype = 'All Reminders'; this.data = this.tempdata; break;
      default: this.dropdowntype = 'All Reminders'; this.data = this.tempdata; break;
    }
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  onWorkerStatusChange(e, id: number, index) {
    let type = '';
        switch (this.dropdownbtnavgrev) {
          case 'Ticket Reminders': type = 'ticket'; break;
          case 'Quotation Reminders': type = 'quote'; break;
          case 'Invoice Reminders': type = 'invoice'; break;
          case 'Warranty Reminders': type = 'warranty'; break;
          default: type = 'ticket'; break;
        }
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once a reminder is inactive you cannot revert it?',
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#f8bb86',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cancel',
      cancelButtonText: 'Yes, Inactive Reminder!',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'keep it!',
          text: 'Action is skip by you.',
          type: 'info',
          timer: 2000
        });
        this.loadData(type);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.reminderservice.putReminderStatus(this.currentUser.Token, id, type).subscribe(res => {
          if (res) {
            const response = res as any;
            if (response.Message === 'success') {
              this.toastr.success('success', response.MessageDescription);
              this.data[index].IsActive = e.target.checked;
              this.loadData(type);
            }
          }
        }, error => console.log(error));
      }
    });
  }
}
