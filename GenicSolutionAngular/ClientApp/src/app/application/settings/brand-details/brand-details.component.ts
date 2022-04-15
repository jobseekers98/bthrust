import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/services/product.module';
import { ProductService } from 'src/app/services/product.service';
import { DownloadService } from 'src/app/services/downloads.service';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['../settings.component.css']
})
export class BrandDetailsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  createbuttontext: string;
  isValid = true;
  loader: boolean = false;
  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
    public docservice: DocumentUploadService,
    public productservice: ProductService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private downloadService: DownloadService,
  ) {this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
     this.refreshlist();
  }
  refreshlist() {
    this.productservice.refrestBrand(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.productservice.BrandList = response.result as Brand[];
      }}, error =>  console.log(error));
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.productservice.BrandformData.BrandId === 0) {
        this.productservice.postBrandDetails(this.currentUser.Token).subscribe( res => {
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
        this.productservice.putBrandDetails(this.currentUser.Token).subscribe( res => {
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
    if (this.productservice.BrandformData.BrandName === '') {
      this.isValid = false;
    }
    return this.isValid;
  }
  pupulate(x?: Brand) {
    if (x == null) {
      this.createbuttontext = 'Create';
      this.productservice.BrandformData = {
        BrandId: 0,
        BrandName: '',
        BrandLogo: ''
      };
    } else {
      this.createbuttontext = 'Update';
      this.productservice.BrandformData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 200);
  }
  picked(event) {
    var pattern = /image-*/;
    let Files = event.target.files;
    let file = Files.item(0);
    if (!file.type.match(pattern)) {
      this.toastr.warning('', 'Invalid image format!'); return false;
    }
    let filExt = file.name.split('.');
    let Ext1 = filExt[1];
    if (Ext1 === 'png' || Ext1 === 'jpg' || Ext1 === 'jpeg') {
      this.loader = true;
      let t = this.currentUser.Token;
      let id = this.productservice.BrandformData.BrandId.toString();
      let remark = '';
      let type = 'brand';
        this.docservice.uploadDocument(t , type, '', id, remark, file).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.toastr.info('upload successfully');
                      this.productservice.BrandformData.BrandLogo = response.MessageDescription;
                      this.loader = false;
                      }
                      if (response.Message === 'failure') {
                        this.toastr.warning(response.MessageDescription);
                        this.loader = false;
                      }
        }}, error =>  console.log(error));
      this.loader = false;
    } else {
      this.toastr.warning('Invalid file format, select png, jpg, jpeg!');
      this.loader = false;
      return false;
    }
  }
  close() { this.modal.dismissAll(); }
  exportAsXLSXToBrand(): void {
    this.downloadService.downloadFromServer('brand', this.currentUser.Token).then(blob => {
      saveAs(blob, 'brand_' + new Date().getTime() + '.xlsx');
    });
  }
}
