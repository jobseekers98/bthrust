import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/services/product.module';
import { ProductService } from 'src/app/services/product.service';
import { DownloadService } from 'src/app/services/downloads.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['../settings.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentUser: Login;
  localPrependUrl: string;
  createbuttontext: string;
  isValid = true;
  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
    public productservice: ProductService,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private downloadService: DownloadService,
  ) {this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
     this.refreshlist();
  }
  refreshlist() {
    this.productservice.refrestCategory(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
        this.productservice.CategoryList = response.result as Category[];
      }}, error =>  console.log(error));
  }
  onSubmit() {
    if (this.validateForm()) {
      if (this.productservice.CategoryformData.CategoryId === 0) {
        this.productservice.postCategoryDetails(this.currentUser.Token).subscribe( res => {
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
        this.productservice.putCategoryDetails(this.currentUser.Token).subscribe( res => {
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
    if (this.productservice.CategoryformData.CategoryName === '') {
      this.isValid = false;
    }
    return this.isValid;
  }
  pupulate(x?: Category) {
    if (x == null) {
      this.createbuttontext = 'Create';
      this.productservice.CategoryformData = {
        CategoryId: 0,
        CategoryName: ''
      };
    } else {
      this.createbuttontext = 'Update';
      this.productservice.CategoryformData = Object.assign({}, x);
    }
    setTimeout(() => {
      this.modal.open(this.modalContent, { size: 'md' });
    }, 200);
  }
  exportAsXLSX(): void {
    this.downloadService.downloadFromServer('category', this.currentUser.Token).then(blob => {
      saveAs(blob, 'category_' + new Date().getTime() + '.xlsx');
    });
  }
}
