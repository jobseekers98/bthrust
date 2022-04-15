import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DownloadService } from 'src/app/services/downloads.service';
import { GenericService } from 'src/app/services/generic.service';
import { PaymentMode } from 'src/app/services/payment.module';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['../settings.component.css']
})
export class PaymentModeComponent implements OnInit {
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
    this.genicservice.refrestPaymentModelist(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.genicservice.PaymentModelist = response.result as PaymentMode[];
      }}, error =>  console.log(error));
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.genicservice.PaymentModeData.Id === 0) {
        this.genicservice.postPaymentModeDetails(this.currentUser.Token).subscribe( res => {
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
        this.genicservice.putPaymentModeDetails(this.currentUser.Token).subscribe( res => {
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
    if (this.genicservice.PaymentModeData.ModeName === '') {
      this.isValid = false;
    }
    return this.isValid;
  }
  pupulate(x?: PaymentMode) {
    if (x == null) {
      this.createbuttontext = 'Create';
      this.genicservice.PaymentModeData = {
        Id: 0,
        ModeName: '',
        CreatedDate: null,
        Status: true,
        UpdatedDate: null
      };
    } else {
      this.createbuttontext = 'Update';
      this.genicservice.PaymentModeData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 200);
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('paymentmode', this.currentUser.Token).then(blob => {
      saveAs(blob, 'paymentmode_' + new Date().getTime() + '.xlsx');
    });
  }
}
