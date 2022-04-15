import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DownloadService } from 'src/app/services/downloads.service';
import { GenericService } from 'src/app/services/generic.service';
import { Tax } from 'src/app/services/quote.module';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['../settings.component.css']
})
export class TaxDetailsComponent implements OnInit {
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
    this.genicservice.refrestTaxlist(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.genicservice.Taxlist = response.result as Tax[];
      }}, error =>  console.log(error));
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.genicservice.TaxformData.Id === 0) {
        this.genicservice.postTaxDetails(this.currentUser.Token).subscribe( res => {
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
        this.genicservice.putTaxDetails(this.currentUser.Token).subscribe( res => {
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
    if (this.genicservice.TaxformData.TaxName === '') {
      this.isValid = false;
    }
    return this.isValid;
  }
  pupulate(x?: Tax) {
    if (x == null) {
      this.createbuttontext = 'Create';
      this.genicservice.TaxformData = {
        Id: 0,
        TaxName: '',
        TaxRate: 0,
        Status: true,
        IsDefault: false,
        Description: ''
      };
    } else {
      this.createbuttontext = 'Update';
      this.genicservice.TaxformData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 200);
  }
  onTaxStatusChange(id: string) {
    this.genicservice.putTaxUpdateStatus(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.refreshlist();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  onTaxDefaultApply(id: string) {
    this.genicservice.putTaxUpdateIsDefault(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.refreshlist();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('category', this.currentUser.Token).then(blob => {
      saveAs(blob, 'category_' + new Date().getTime() + '.xlsx');
    });
  }
  numberOnly(event): boolean {
    if (Number(event.target.value) === 0) {
      event.target.value = null;
    }
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (charCode === 46) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
