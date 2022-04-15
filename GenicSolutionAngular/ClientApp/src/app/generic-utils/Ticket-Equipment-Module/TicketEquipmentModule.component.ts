import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketEquipment } from 'src/app/services/ticket.module';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'generic-ticket-equipment-module',
  template: `
                  <div class="kt-portlet kt-portlet--height-fluid kt-widget19">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">
                        Equipments
                        </h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="kt-portlet__body">
                      <div class="col">
                        <table class="table" *ngIf="data.length > 0">
                            <tr>
                                <th>Item Name</th><th>Quantity</th><th>Action</th>
                            </tr>
                            <tr *ngFor="let x of data; let i=index; async">
                                <td width="80%"><b>{{x.Name}}</b><br>{{x.Remark}}</td>
                                <td width="10%">{{x.Quantity}}</td>
                                <td width="10%">
                                <a href="javascript:;" title="edit" (click)="populateData(x.Id, x.Name, x.Remark, x.Quantity)"><i class="far fa-edit text-info"></i></a> &nbsp;&nbsp;
                                <a href="javascript:;" title="remove" (click)="removeData(x.Id, x.TicketId)"><i class="far fa-trash-alt text-danger"></i></a>
                            </td>
                            </tr>
                            <tr><td colspan="3"></td></tr>
                        </table>
                      </div>
                     </div>
                    </div>
                    <div class="row">
                      <div class="kt-portlet__body" style="padding-bottom: 0px !important;">
                        <div class="col-md-10">
                          <label>Select Equipment<span class="text-danger">*</span></label>
                          <div class="kt-widget19__wrapper" *ngIf="addItembtn === 'Add'">
                            <l-select2 name="product_formcontrol"
                            class="select2customcss" [options]="masterdata"
                            (valueChange)="WhenSelectChange($event)">
                            </l-select2>
                            </div>
                            <div class="kt-widget19__wrapper" *ngIf="addItembtn === 'Update'">
                                <label class="form-control" style="height: 50px;font-size: 18px;">
                                    {{service.TicketEquipment.Name}}
                                </label>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <label>Quantity<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <input type="number" class="form-control"
                                        name="Quantity" height="30px"
                                        #Quantity="ngModel"
                                        [(ngModel)]="service.TicketEquipment.Quantity" />
                             </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="kt-portlet__body" style="padding-top: 0px !important;padding-bottom: 0px !important;">
                      <div class="col-md-10">
                        <div class="form-group">
                        <textarea name="Remark"
                                      #Remark="ngModel"
                                      [(ngModel)]="service.TicketEquipment.Remark"
                                      class="form-control"
                                      placeholder="Remark"
                                      rows="2"></textarea>
                      </div>
                      </div>
                    </div>
                    </div>
                    <div class="row">
                      <div class="kt-portlet__body" style="padding-top: 0px !important;padding-bottom: 0px !important;">
                      <div class="col-md-2">
                        <div class="form-group">
                        <a href="javascript:;"
                          (click)="cancel()"
                              class="btn btn-secondary">
                            Cancel
                          </a>&nbsp;
                          <a href="javascript:;" *ngIf="!this.loading"
                          (click)="onSubmit()"
                              class="btn btn-brand">
                            {{addItembtn}} 
                          </a>
                          <a href="javascript:;" *ngIf="this.loading"
                              class="btn btn-brand">
                              <i class="fa fa-spinner fa-spin"></i>
                          </a>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>
  `,
  styles: [``]
})
export class TicketEquipmentModuleComponent implements OnInit {
  @Input() Id: string;
  @Input() Token: string;
  data: any;
  public masterdata: any;
  loading: boolean;
  isValid: boolean;
  isNameValid: boolean;
  isQuantityValid: boolean;
  addItembtn: string;
  constructor(
    public service: TicketService,
    private toastr: ToastrService
  ) {
    this.service.TicketEquipment = new TicketEquipment();
    this.service.TicketEquipmentList = [];
    this.loading = false;
    this.isValid = true;
    this.isNameValid = true;
    this.isQuantityValid = true;
    this.data = [];
    this.addItembtn = 'Add';
  } 
  ngOnInit() {
    this.InitialazeEMDropdown();
    this.InitiateObject();
    // this.service.getTicketEquipmentDataList(this.Token, this.Id).subscribe(res => {
    //   if (res) { const response = res as any;
    //     console.log(response);
    //     // if (response.Message === 'success') {
    //     //   this.data = [];
    //     //   this.data = response.result;
    //     // }
    //   }
    // }, error => console.log(error));
    setTimeout(() => {
      this.service.getTicketEquipmentDataList(this.Token, this.Id).subscribe(res => {
        if (res) {
          const response = res as any;
          if (response.Message === 'success') {
            this.data = [];
            this.data = response.result;
          }
        }
      }, error => console.log(error));
    }, 1000);
  }

  onSubmit() {
    if (this.validateForm()) {
      this.service.TicketEquipment.Quantity = Number(this.service.TicketEquipment.Quantity);
      this.service.TicketEquipment.TicketId = this.Id;
      this.loading = true;
      if (this.service.TicketEquipment.Id === 0) {
        this.service.postTicketEquipmentData(this.Token).subscribe(res => {
          if (res) {
            const response = res as any;
            if (response.Message === 'success') {
              this.toastr.success(response.MessageDescription);
              this.data = [];
              this.data = response.result;
              this.loading = false;
              this.InitialazeEMDropdown();
              this.InitiateObject();
            }
            if (response.Message === 'failure') {
              this.toastr.warning(response.MessageDescription);
              this.loading = false;
            }
          }
        }, error => console.log(error));
      } else {
        this.service.putTicketEquipmentData(this.Token).subscribe(res => {
          if (res) {
            const response = res as any;
            if (response.Message === 'success') {
              this.toastr.success(response.MessageDescription);
              this.data = [];
              this.data = response.result;
              this.loading = false;
              this.addItembtn = 'Add';
              this.InitialazeEMDropdown();
              this.InitiateObject();
            }
            if (response.Message === 'failure') {
              this.toastr.warning(response.MessageDescription);
              this.loading = false;
            }
          }
        }, error => console.log(error));
      }
    }
  }
  removeData(tId: string, EId: string) {
    this.service.removeTicketEquipmentData(this.Token, tId, EId).subscribe(res => {
      if (res) {
        const response = res as any;
        if (response.Message === 'success') {
          this.toastr.success(response.MessageDescription);
          this.data = [];
          this.data = response.result;
          this.InitiateObject();
          this.InitialazeEMDropdown();
        }
        if (response.Message === 'failure') {
          this.toastr.warning(response.MessageDescription);
        }
      }
    }, error => console.log(error));
  }
  populateData(Id: number, Name: string, remark: string, qty: number) {
    this.addItembtn = 'Update';
    this.service.TicketEquipment = new TicketEquipment();
    this.service.TicketEquipment.Id = Id;
    this.service.TicketEquipment.TicketId = this.Id;
    this.service.TicketEquipment.Name = Name;
    this.service.TicketEquipment.Remark = remark;
    this.service.TicketEquipment.Quantity = qty;
  }
  validateForm() {
    if (this.service.TicketEquipment.Quantity === undefined || this.service.TicketEquipment.Quantity === null) { this.service.TicketEquipment.Quantity = 0 }
    this.isValid = true;
    this.isNameValid = true;
    if (this.service.TicketEquipment.Name === null || this.service.TicketEquipment.Name === undefined || this.service.TicketEquipment.Name === '') {
      this.isNameValid = false;
      this.isValid = false;
      this.toastr.warning('warning', 'Please select equipment list!');
    }
    this.isQuantityValid = true;
    if (this.service.TicketEquipment.Quantity === null || this.service.TicketEquipment.Quantity === undefined) {
      this.isQuantityValid = false;
      this.isValid = false;
      this.toastr.warning('warning', 'Please enter quantity!');
    }
    if (this.service.TicketEquipment.Quantity === 0) {
      this.isQuantityValid = false;
      this.isValid = false;
      this.toastr.warning('warning', 'Quantity should be greater than 0!');
    }
    return this.isValid;
  }
  WhenSelectChange(e) {
    this.service.TicketEquipment = new TicketEquipment();
    this.service.TicketEquipment.Id = 0;
    this.service.TicketEquipment.TicketId = this.Id;
    this.service.TicketEquipment.Name = e.text;
    this.service.TicketEquipment.Remark = '';
    this.service.TicketEquipment.Quantity = 0;
  }
  cancel() {
    this.InitiateObject();
    this.InitialazeEMDropdown();
  }
  InitiateObject() {
    this.service.TicketEquipment = new TicketEquipment();
    this.service.TicketEquipment.Id = 0;
    this.service.TicketEquipment.TicketId = this.Id;
    this.service.TicketEquipment.Name = '';
    this.service.TicketEquipment.Remark = '';
    this.service.TicketEquipment.Quantity = 0;
  }
  InitialazeEMDropdown(): void {
    this.masterdata = {
      multiple: false,
      placeholder: 'Select Equipment',
      minimumInputLength: 2,
      ajax: {
        url: environment.apiUrl + '/api/TicketEquipment/GetEMForSelect2Dropdown/' + this.Token,
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            q: params.term,
            page: params.page
          };
        },
        processResults: function (data, params) {
          params.page = params.page || 1;
          return {
            results: data.items,
            pagination: {
              more: (params.page * 30) < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup; },
      templateResult: this.templateResult2,
      templateSelection: this.templateSelection2
    };
    this.addItembtn = 'Update';
    setTimeout(() => { this.addItembtn = 'Add'; }, 200);
  }
  // function for result template
  public templateResult2(repo) {
    if (repo.loading) { return repo.text; }
    return '<div class="select2-result-repository clearfix"><div class="select2-result-repository__meta">' +
      '<div class="select2-result-repository__title"><strong>' + repo.full_name + '</strong></div></div></div>';
  }
  templateSelection2(repo) {
    return repo.full_name || repo.text;
  }
}
