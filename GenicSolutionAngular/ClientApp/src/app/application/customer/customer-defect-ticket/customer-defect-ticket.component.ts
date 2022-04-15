import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { ReportService } from 'src/app/services/report.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageCompressService } from 'ngx-image-compress';
import { TicketAttachment } from 'src/app/services/ticket.module';
import Swal from 'sweetalert2';
import { CustomerService } from 'src/app/services/customer.service';
import { PropertyService } from 'src/app/services/property.service';
@Component({
  templateUrl: './customer-defect-ticket.component.html',
  styleUrls: ['../../customers/customer-add/customer-add.component.css'],
})
export class CustomerDefectTicketComponent implements OnInit , OnDestroy {
  @ViewChild('modalAttachment', { static: true }) modalAttachment: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  isValid: boolean;
  isPropertyValid: boolean;
  isDescriptionValid: boolean;
  attachmentLocalURL: string;
  itIsNewRequest: boolean;
  meridian = true;
  ListAButton: string; ListAindex = 0; ListAIsValid: boolean;
  currentUTCDate = new Date();
  localdate = new Date(Date.UTC(this.currentUTCDate.getFullYear(), this.currentUTCDate.getMonth(), this.currentUTCDate.getDate(), 8, 0, 0));
  minDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 1), day: Number(this.currentUTCDate.getDate()) };
  maxDate = { year: Number(this.currentUTCDate.getFullYear()), month: Number(this.currentUTCDate.getMonth() + 2), day: Number(this.currentUTCDate.getDate()) };
  date: {year: number, month: number};
  loading: boolean;
  timer: any;
  constructor(
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public ticketService: TicketService,
    public customerservice: CustomerService,
    public propertyservice: PropertyService,
    public service: ReportService,
    private toastr: ToastrService,
    private modal: NgbModal,
    private imageCompress: NgxImageCompressService,
    private router: Router
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.isValid = true;
    this.isDescriptionValid = true;
    this.isPropertyValid = true;
    this.itIsNewRequest = true;
    this.loading = false;
    this.attachmentLocalURL = 'assets/users/NoImage.png';
    this.ticketService.TicketAttachmentList = [];
  }

  ngOnInit() {
    this.RequestIsValid();
    if(this.itIsNewRequest) {
      this.propertyservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.currentUser.Id).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            this.propertyservice.Propertylist = response.result;
          }
        }
      }, error => console.log(error));
    }
    this.timer = setInterval(() => {
      console.info(this.ticketService.formData);
      if(this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000') {
        this.ticketService.formData.Status = 'NEW JOB REQUEST';
        this.itIsNewRequest = true;
      }
    }, 3000);
  }
  onSubmit() {
    if (this.validateForm()) {
      this.customerservice.postCreateByCustomer(this.currentUser.Token, this.ticketService.formData).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            Swal.fire({
              title: 'Done!',
              html: response.MessageDescription,
              type: 'success',
              timer: 10000
            });
            this.loading = false;
            this.uploadTicketAttachment(response.result);
          }
          if (response.Message === 'failure') {
            Swal.fire({
              title: 'warning!',
              text: response.MessageDescription,
              type: 'warning',
              timer: 5000
            });
            this.loading = false;
          }
        }
      }, error => console.log(error));
    }
  }
  uploadTicketAttachment(tId: string) {
    if(this.ticketService.TicketAttachmentList.length > 0) {
      this.ticketService.TicketAttachmentList.forEach(element => {
        element.TicketId = tId
      });
      this.customerservice.postTicketAttachmentByCustomer(this.currentUser.Token, this.ticketService.TicketAttachmentList).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            Swal.fire({
              title: 'Done!',
              html: response.MessageDescription,
              type: 'success',
              timer: 10000
            });
            this.router.navigate(['/customer/customer-dashboard/']);
          }
        }
      }, error => console.log(error));
    } else { this.router.navigate(['/customer/customer-dashboard/']); }
    setTimeout(() => { this.router.navigate(['/customer/customer-dashboard/']); }, 10000);
  }
  //#region Attachment
  openmodelattachment() {
    this.ListAButton = 'Add';
    this.ticketService.TicketAttachment = new TicketAttachment();
    this.ticketService.TicketAttachment.Id = 0;
    this.ticketService.TicketAttachment.TicketId = this.ticketService.formData.Id;
    this.ticketService.TicketAttachment.AttachmentName = '';
    this.ticketService.TicketAttachment.AttachmentPath = '';
    this.ticketService.TicketAttachment.AttachmentSize = 0;
    this.modal.open(this.modalAttachment, { size: 'sm' });
    this.attachmentLocalURL = 'assets/users/NoImage.png';
  }
  public AddAttachment() {
    this.ListAIsValid = true;
    if (this.ticketService.TicketAttachment.AttachmentName.length === 0) { this.toastr.warning('Please add attachment'); this.ListAIsValid = false; return false; }
   
    if (this.ListAButton === 'Add') {
      this.ticketService.TicketAttachmentList.push({
        Id: 0,
        TicketId: this.ticketService.formData.Id,
        AttachmentName: this.ticketService.TicketAttachment.AttachmentName,
        AttachmentSize: this.ticketService.TicketAttachment.AttachmentSize,
        AttachmentPath: this.ticketService.TicketAttachment.AttachmentPath
      });
    }
    if (this.ListAButton === 'Update') {
      this.ticketService.TicketAttachmentList[this.ListAindex] = {
        Id: 0,
        TicketId: this.ticketService.formData.Id,
        AttachmentName: this.ticketService.TicketAttachment.AttachmentName,
        AttachmentSize: this.ticketService.TicketAttachment.AttachmentSize,
        AttachmentPath: this.ticketService.TicketAttachment.AttachmentPath
      };
      this.ListAButton = 'Add';
    }
    this.modal.dismissAll();
  }
  public EditAttachment(i: number) {
    this.ListAButton = 'Update';
    this.ListAindex = i;
    this.modal.open(this.modalAttachment, { size: 'sm' });
    this.attachmentLocalURL = 'data:image/' + this.ticketService.TicketAttachmentList[i].AttachmentName +
    ';base64,' + this.ticketService.TicketAttachmentList[i].AttachmentPath
    return this.ticketService.TicketAttachment = {
      Id: 0,
        TicketId: this.ticketService.TicketAttachmentList[i].TicketId,
        AttachmentName: this.ticketService.TicketAttachmentList[i].AttachmentName,
        AttachmentSize: this.ticketService.TicketAttachmentList[i].AttachmentSize,
        AttachmentPath: this.ticketService.TicketAttachmentList[i].AttachmentPath
    };
  }
  handleAttachment() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.ticketService.TicketAttachment.AttachmentName = image.split('/')[1].split(';')[0];
      this.imageCompress.compressFile(image, orientation, 50, 100).then(
        result => {
          this.ticketService.TicketAttachment.AttachmentSize = this.imageCompress.byteCount(result);
          if (this.ticketService.TicketAttachment.AttachmentSize >= 2000000) {
            this.toastr.info('size too large', 'Maximum size is 2MB');
            this.ticketService.TicketAttachment.AttachmentSize = null;
            this.ticketService.TicketAttachment.AttachmentName = null;
            this.ticketService.TicketAttachment.AttachmentPath = null;
            return false;
          }
          this.attachmentLocalURL = result;
          this.ticketService.TicketAttachment.AttachmentPath = this.attachmentLocalURL.split(',')[1];
        }
      );
    });
  }
  //#endregion
  validateForm() {
    this.loading = true;
    this.isValid = true;
    this.isDescriptionValid = true;
    if (this.ticketService.formData.Description === null || this.ticketService.formData.Description === undefined ||
      this.ticketService.formData.Description === '') {
      this.isDescriptionValid = false;
      this.isValid = false;
      this.loading = false;
      this.toastr.warning('warning', 'Please enter description!');
    }
    if(this.itIsNewRequest) {
      this.isPropertyValid = true;
      if (this.ticketService.formData.PropertyId === '00000000-0000-0000-0000-000000000000') {
        this.toastr.warning('warning', 'Please select property');
        this.isPropertyValid = false;
        this.loading = false;
        return false;
      }
      if (this.ticketService.formData.AppointmentStart === null) {
        this.toastr.warning('warning', 'Please select appointment date');
        this.loading = false;
        return false;
      }
    }
    return this.isValid;
  }
    RequestIsValid() {
    if (this.ticketService.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.itIsNewRequest = true;
      this.ticketService.formData.Description = '';
      this.ticketService.formData.Status = 'NEW JOB REQUEST';
    } else {
      this.itIsNewRequest = false;
      this.ticketService.formData.Description = '';
    }
  }
  selectDate() {
    this.ticketService.formData.AppointmentEnd = this.ticketService.formData.AppointmentStart;
    this.ticketService.formData.AppointmentStart = this.ticketService.formData.AppointmentStart.split('T')[0] + 'T10:00:00Z';
    this.ticketService.formData.AppointmentEnd = this.ticketService.formData.AppointmentStart.split('T')[0] + 'T11:00:00Z';
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
