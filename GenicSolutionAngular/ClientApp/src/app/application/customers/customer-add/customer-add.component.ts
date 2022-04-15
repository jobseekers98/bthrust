import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationStart } from '@angular/router';
import { ArrayofKey, CustomerContactPerson, CustomerDepartment } from 'src/app/services/customer.model';
import { PropertyService } from 'src/app/services/property.service';
import * as EmailValidator from 'email-validator';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Property } from 'src/app/services/property.model';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { Title } from '@angular/platform-browser';
import { TicketIssueType } from 'src/app/services/ticket.module';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['../customer-add/customer-add.component.css']
})
export class CustomerAddComponent implements OnInit, AfterViewInit, OnDestroy {
  currentUser: Login;
  private routeSub: any;
  booltrue: true;
  options = {componentRestrictions: { country: ['SG']}};
  lat = 1.3521;
  lng = 103.8198;
  zoom = 8;
  street_number = '';
  route = '';
  neighborhood = '';
  sublocality_level_3 = '';
  sublocality_level_2 = '';
  sublocality_level_1 = '';
  locality = '';
  administrative_area_level_2 = '';
  administrative_area_level_1 = '';
  country = '';
  postal_code = '';
  addressresult: any;
  IsPostalSearch: boolean;
  localPrependUrl: string;
  CustomerLogoFile: any;
  Isnavigated: boolean;
  createbuttontext: string;
  arrayemailbutton: string;
  arrayphonebutton: string;
  isValid = true;
  isValidEmail = true;
  isValidEmailTitle = true;
  isValidPhone = true;
  isValidPhoneTitle = true;
  isValidTitle = true;
  isValidFirstname = true;
  isValidLastname = true;
  isValidCompanyname =true;
  morethen1property: boolean;
  btnText = 'Add';
  arraycontactbutton: string = 'Add';
  IsContactPersonAdd = true;
  isContactersonValid = true;
  isContactersonTitle = true;
  isContactersonFirstName = true;
  isContactersonLastName = true;
  CustomerDepartmentItems = [];
  CustomerDepartmentList = [];
  config = { displayKey: 'Name', search: true, limitTo: 5, height: '260', placeholder: 'Department'};
  smtplist: any;
  countrylist: any;
  loader: boolean = false;
  constructor(
    public titleService: Title,
    public service: CustomerService,
    public docservice: DocumentUploadService,
    public propertyservice: PropertyService,
    private toastr: ToastrService,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public genicprofileservice: GenicProfileService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.IsPostalSearch = false;
    this.Isnavigated = true;
    this.arrayemailbutton = 'Add';
    this.arrayphonebutton = 'Add';
    this.genicprofileservice.SmtpsettingList = [];
    this.service.EmailArrayList = [];
    this.service.MobileArrayList = [];
    this.propertyservice.Propertylist = [];
    this.service.CustomerContactPersonList = [];
    this.genicprofileservice.TicketFilter.IsReady = false;
    this.genicprofileservice.TicketFilter.IsReadyQuote = false;
    this.genicprofileservice.TicketFilter.IsReadyInvoice = false;
    this.service.SetAsDefaultValues();
    this.service.CustomerDepartmentTypeList = [];
    this.service.formData.CustomerDepartment = [];
  }
  ngOnInit() {
    if(this.service.formData === undefined) {
      this.service.SetAsDefaultValues();
    }
    if (!this.currentUser.Permissions.CustomerEdit) { this.router.navigate(['/dashboard']); }
    this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   this.countrylist = response.result;
                  }
    }}, error =>  console.log(error));
    if (this.router.url === '/customers/customer-add') {
      if (!this.currentUser.Permissions.CustomerCreate) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle('Customer Create | Genic Solution');
      this.service.createTemporaryCustomer(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                      this.service.formData = response.result;
                      this.loadOtherDetails();
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
      }}, error =>  console.log(error));
      this.createbuttontext = 'Create';
      this.btnText = 'Add';
    }
    const Id = window.location.pathname.split('/').pop();
    if (Id !== 'customer-add') {
      if (Id === '00000000-0000-0000-0000-000000000000' || Id === undefined) { this.router.navigate(['/customers']); }
      this.createbuttontext = 'Update';
      this.titleService.setTitle('Customer Edit | Genic Solution');
      this.service.getCustomerByIdSync(this.currentUser.Token, Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    this.service.formData = response.result;
                    }
                   if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                    }
        }}, error =>  console.log(error));
    }
    this.service.refrestCustomerWiseDepartmentList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   setTimeout(() => {
                    this.service.CustomerDepartmentTypeList = response.result as TicketIssueType[];
                    this.CustomerDepartmentList = this.service.CustomerDepartmentTypeList;
                    if (this.router.url !== '/customers/customer-add') {
                      this.CustomerDepartmentList = this.service.CustomerDepartmentTypeList;
                      this.service.formData.CustomerDepartment.forEach(w => {
                        let Obj: any;
                        Obj = new Object();
                        Obj.Id = w.SMTPSettingsId;
                        Obj.Name = w.SMTPName;
                        Obj.IsAssigned = false;
                        this.CustomerDepartmentItems.push(Obj);
                        Obj = new Object();
                      });
                    }
                   }, 2000);
                  }
      }}, error =>  console.log(error));
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!this.Isnavigated) {
          let Id = this.service.formData.Id;
          Swal.fire({
            title: 'keep it?',
            text: 'Are you sure you want to save this data?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, keep it!',
            cancelButtonText: 'No, delete it',
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                title: 'Keep it!',
                text: 'Your customer details is safe.',
                type: 'info',
                timer: 2000
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              this.service.deleteTemporaryCustomer(this.currentUser.Token, Id).subscribe( res => {
                if (res) { const response = res as any;
                           if (response.Message === 'success') {
                            Swal.fire({
                              title: 'Deleted!',
                              text: response.MessageDescription,
                              type: 'info',
                              timer: 2000,
                            });
                            }
                           if (response.Message === 'failure') {
                            Swal.fire({
                              title: 'Denied!',
                              text: response.MessageDescription,
                              type: 'warning',
                              timer: 5000,
                            });
                            }
              }}, error =>  console.log(error));
            }
          });
        }
      }
    });
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
      let moduleid = this.service.formData.Id;
      let remark = '';
      let type = 'customer';
        this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.toastr.info('upload successfully');
                      this.service.formData.CustomerLogo = response.MessageDescription;
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

  /// Remove Profile Image
  RemoveProfileImage() {
    this.loader = true;
    let t = this.currentUser.Token;
    let type = 'customer';
    let moduleid = this.service.formData.Id;
    let remark = '';
    this.docservice.RemoveDocument(t , type, moduleid, '', remark).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.info(response.MessageDescription);
                  this.service.formData.CustomerLogo = '';
                  this.loader = false;
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                  }
    }}, error =>  console.log(error));
    this.loader = false;
  }
  // loading = true;
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadOtherDetails();
      this.loadarrlist();
    }, 1000);
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.service.SetAsDefaultValues();
  }

  loadarrlist() {
    setTimeout(() => {
      this.service.MobileArrayList = this.service.ArrayofKeys.filter(x => x.Type === 'Phone');
      this.service.EmailArrayList = this.service.ArrayofKeys.filter(x => x.Type === 'Email');
    }, 1000);
  }
loadOtherDetails() {
  this.refrestArrayofKeyslist();
                      this.propertyservice.refrestPropertylistCustomerWise(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
                        if (res) { const response = res as any;
                                   if (response.Message === 'success') {
                                      this.propertyservice.Propertylist = this.propertyservice.locallist = response.result as Property[]
                                      if (this.propertyservice.Propertylist.length >= 1) {
                                        this.propertyservice.formData.Id = this.propertyservice.Propertylist[0].Id;
                                        this.propertyservice.formData.Latitude = this.propertyservice.Propertylist[0].Latitude;
                                        this.propertyservice.formData.Longitude = this.propertyservice.Propertylist[0].Longitude;
                                        this.propertyservice.formData.CustomerId = this.propertyservice.Propertylist[0].CustomerId;
                                        this.propertyservice.formData.CustomerName = this.propertyservice.Propertylist[0].CustomerName;
                                        this.propertyservice.formData.AddressStreet1 = this.propertyservice.Propertylist[0].AddressStreet1;
                                        this.propertyservice.formData.AddressStreet2 = this.propertyservice.Propertylist[0].AddressStreet2;
                                        // this.propertyservice.formData.AddressCity = this.propertyservice.Propertylist[0].AddressCity;
                                        // this.propertyservice.formData.AddressState = this.propertyservice.Propertylist[0].AddressState;
                                        this.propertyservice.formData.AddressUnitNo = this.propertyservice.Propertylist[0].AddressUnitNo;
                                        this.propertyservice.formData.AddressZipCode = this.propertyservice.Propertylist[0].AddressZipCode;
                                        this.propertyservice.formData.AddressCountry = this.propertyservice.Propertylist[0].AddressCountry;
                                      }
                                    }
                                   if (response.Message === 'failure') {
                                      this.toastr.warning('warning', response.MessageDescription);
                                    }
                      }}, error =>  console.log(error));
                      this.refrestContactPersonlist();
                      this.loadarrlist();
}
  onSubmit() {
    this.isValidTitle = true;
    this.isValidFirstname = true;
    if (this.service.formData.NameTitle === '') {
      this.toastr.warning('Warning', 'Please select Title a value');
      this.isValid = false;
      this.isValidTitle = false;
      return false;
    }
    if (this.service.formData.FirstName === '') {
      this.toastr.warning('Warning', 'Please enter first name');
      this.isValid = false;
      this.isValidFirstname = false;
      return false;
    }
    if (this.service.formData.CompanyName === '') {
      this.toastr.warning('Warning', 'Please enter company name');
      this.isValid = false;
      this.isValidCompanyname = false;
      return false;
    }
    if (this.service.formData.IsAddressSame) {
      this.service.formData.AddressStreet1 = this.propertyservice.formData.AddressStreet1;
      this.service.formData.AddressStreet2 = this.propertyservice.formData.AddressStreet2;
      // this.service.formData.AddressCity = this.propertyservice.formData.AddressCity;
      // this.service.formData.AddressState = this.propertyservice.formData.AddressState;
      this.service.formData.AddressUnitNo = this.propertyservice.formData.AddressUnitNo;
      this.service.formData.AddressZipCode = this.propertyservice.formData.AddressZipCode;
      this.service.formData.AddressCountry = this.propertyservice.formData.AddressCountry;
      this.service.formData.Latitude = this.propertyservice.formData.Latitude;
      this.service.formData.Longitude = this.propertyservice.formData.Longitude;
    }
    if (this.propertyservice.formData.AddressStreet1.length > 0 || this.propertyservice.formData.AddressStreet2.length > 0) {
      this.service.formData.Properties = [];
      this.service.formData.Properties.push({
        Id: '00000000-0000-0000-0000-000000000000',
        CustomerName: (this.service.formData.NameTitle + ' ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName).trim(),
        CustomerId: this.service.formData.Id,
        AddressStreet1: this.propertyservice.formData.AddressStreet1,
        AddressStreet2: this.propertyservice.formData.AddressStreet2,
        AddressZipCode: this.propertyservice.formData.AddressZipCode,
        AddressCountry: this.propertyservice.formData.AddressCountry,
        Latitude: this.propertyservice.formData.Latitude,
        Longitude: this.propertyservice.formData.Longitude,
        AddressUnitNo: this.propertyservice.formData.AddressUnitNo,
        AddressCity: '',
        AddressState: '',
        IsActive: true,
        CompanyName: this.service.formData.CompanyName,
        Remarks: '',
      });
    }
    if (this.service.EmailArrayList.length === 0) {
      this.toastr.warning('Warning', 'Please enter an email address');
      this.isValid = false;
      this.isValidEmail = false;
      this.isValidEmailTitle = false;
      return false;
    }
    if (this.service.MobileArrayList.length === 0) {
      this.toastr.warning('Warning', 'Please enter contact number');
      this.isValid = false;
      this.isValidPhone = false;
      this.isValidPhoneTitle = false;
      return false;
    }
    if (this.CustomerLogoFile !== undefined) {
      if (this.CustomerLogoFile.size >= 2000000) {
        this.toastr.info('size too large', 'Maximum logo size is 2MB');
        return false;
      }
    }
    if (this.CustomerLogoFile === undefined) {
      this.service.formData.CustomerLogo = '';
    }
    this.service.putCustomerDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   if (response.result === 'Insert') {
                    this.service.SetAsDefaultValues();
                    this.toastr.success('success', response.MessageDescription);
                    const des = 'Customer Name : ' + this.service.formData.FirstName + ' ' + this.service.formData.FirstName
                    + ' ' + this.service.formData.LastName + ', Company Name : ' + this.service.formData.CompanyName +
                    ', Address : ' + this.service.formData.AddressCity + ' ' + this.service.formData.AddressStreet1 + ' ' +
                    this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo + ' ' +
                    this.service.formData.AddressCountry + ' ' + this.service.formData.AddressZipCode +
                    ', has been added  by user ' + this.currentUser.UserName + 'and his company name is : ' + 
                    this.service.formData.CompanyName;
                    const Activity = ' New Customer : ' + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
                      + ' ' + this.service.formData.FirstName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                    this.service.formData.Id, 'Added', des, Activity).subscribe();
                    this.Isnavigated = true;
                    if (this.propertyservice.formData.AddressStreet1.length !== 0 ||
                      this.propertyservice.formData.AddressStreet2.length !== 0 ) {
                      this.propertyservice.formData.Id = '00000000-0000-0000-0000-000000000000';
                      this.propertyservice.formData.CustomerName = (this.service.formData.NameTitle + ' ' +
                                                                  this.service.formData.FirstName + ' ' +
                                                                  this.service.formData.LastName).trim();
                      this.propertyservice.formData.CustomerId = this.service.formData.Id;
                      this.propertyservice.formData.AddressUnitNo = '';
                      this.propertyservice.formData.AddressState = '';
                      this.propertyservice.formData.IsActive = true;
                      this.propertyservice.formData.CompanyName = this.service.formData.CompanyName;
                      this.propertyservice.formData.Remarks = '';
                      this.propertyservice.formData.PropertyId = 'PRO';
                      setTimeout(() => {
                        this.propertyservice.postPropertyDetails(this.currentUser.Token).subscribe( resp => {
                          if (res) { const responsep = resp as any;
                                    //  if (responsep.Message === 'success') {
                                    //   }
                                    //  if (responsep.Message === 'failure') {
                                    //   this.toastr.warning('warning', responsep.MessageDescription);
                                    //   }
                          }}, error =>  console.log(error));
                      }, 200);
                      setTimeout(() => {
                        this.propertyservice.SetAsDefaultValue();
                      }, 1000);
                    }
                    this.router.navigate(['/customers/']);
                   }
                   if (response.result === 'Update') {
                    this.service.SetAsDefaultValues();
                    this.toastr.success('success', response.MessageDescription);
                    const des1 = 'Customer Name : ' + this.service.formData.FirstName + ' ' + this.service.formData.FirstName
                    + ' ' + this.service.formData.LastName + ', Company Name : ' + this.service.formData.CompanyName +
                    ', Address : ' + this.service.formData.AddressCity + ' ' + this.service.formData.AddressStreet1 + ' ' +
                    this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo + ' ' +
                    this.service.formData.AddressCountry + ' ' + this.service.formData.AddressZipCode +
                    ', has been modified by user ' + this.currentUser.UserName + 'and his company name is : ' + 
                    this.service.formData.CompanyName;
                    const Activity1 = 'Details of Customer name : ' + this.service.formData.NameTitle + ' ' + 
                    this.service.formData.FirstName
                      + ' ' + this.service.formData.FirstName + ' is modified : on dated : ' + new Date(Date.parse(Date()));
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                    this.service.formData.Id, 'Modify', des1, Activity1).subscribe();
                    this.Isnavigated = true;
                    if (this.propertyservice.formData.AddressStreet1.length !== 0 ||
                      this.propertyservice.formData.AddressStreet2.length !== 0 ||
                      this.propertyservice.formData.AddressCity.length !== 0) {
                      if (this.propertyservice.Propertylist.length === 1) {
                        setTimeout(() => {
                          this.propertyservice.putPropertyDetails(this.currentUser.Token).subscribe( resp => {
                            if (res) { const responsep = resp as any;
                                      //  if (responsep.Message === 'success') {
                                      //   }
                                      //  if (responsep.Message === 'failure') {
                                      //   this.toastr.warning('warning', responsep.MessageDescription);
                                      //   }
                            }}, error =>  console.log(error));
                        }, 200);
                        setTimeout(() => {
                          this.propertyservice.SetAsDefaultValue();
                        }, 1000);
                      }
                    }
                    this.router.navigate(['/customers/']);
                    }
                  }
                 if (response.Message === 'failure') {
                  this.createbuttontext = 'Create';
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
  OnCancled() {
    this.router.navigate(['/customers/']);
  }
  refrestArrayofKeyslist() {
    this.service.refrestArrayofKeyslist(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.ArrayofKeys = response.result;
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  refrestContactPersonlist() {
    this.service.refrestContactPersonlist(this.currentUser.Token, this.service.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.CustomerContactPersonList = response.result as CustomerContactPerson[];
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  AddArrayList(id: number, key: string, value: string, type: string) {
    this.isValidEmail = true;
    this.isValidEmailTitle = true;
    this.isValidPhone = true;
    this.isValidPhoneTitle = true;
    if (type === 'Email') {
      if (key === '') {
        this.toastr.warning('Warning', 'Please select title of email');
        this.isValidEmailTitle = false;
        this.isValid = false;
        return false;
      }
    }
    if (type === 'Phone') {
      if (key === '') {
        this.toastr.warning('Warning', 'Please select title of phone no');
        this.isValidPhoneTitle = false;
        this.isValid = false;
        return false;
      }
    }
    if (value === '') {
      if (type === 'Email') {
        this.toastr.warning('Warning', 'Please enter an email');
        this.isValidEmail = false;
        this.isValid = false;
        return false;
      }
      if (type === 'Phone') {
        this.toastr.warning('Warning', 'Please enter phone number');
        this.isValidPhone = false;
        this.isValid = false;
        return false;
      }
    }
    if (type === 'Email') {
      if (!EmailValidator.validate(value)) {
        this.toastr.warning('Warning', 'Please enter a valid email');
        this.isValid = false;
        this.isValidEmail = false;
        return false;
      }
    }
    if (type === 'Phone') {
      let isphone = /^\d*$/.test(value);
      if (!isphone) {
        this.toastr.warning('Warning', 'Please enter a valid phone');
        this.isValid = false;
        this.isValidPhone = false;
        return false;
      }
    }
    this.service.ArrayofKey.Id = id;
    this.service.ArrayofKey.CustomerId = this.service.formData.Id;
    this.service.ArrayofKey.Key = key;
    this.service.ArrayofKey.Value = value;
    this.service.ArrayofKey.Type = type;
    if (id === 0) {
      this.service.postArrayofKeysDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
             if (response.Message === 'success') {
              const des = 'Contact details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
              ', has been Added by user ' + this.currentUser.UserName + 'and his company name is : '
              + this.service.formData.CompanyName + ', and his ' + type + 'is : ' + value;
            const Activity3 = type + ' : ' + value + ' is added to the Customer name : '
              + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
              + ' ' + this.service.formData.LastName + ' is added : on dated : ' + new Date(Date.parse(Date()));
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
            this.service.formData.Id, 'Added', des, Activity3).subscribe();
            this.refrestArrayofKeyslist();
            this.loadarrlist();
              }
             if (response.Message === 'failure') {
              this.toastr.warning('warning', response.MessageDescription);
              }
      }}, error =>  console.log(error));
    } else {
      this.service.putArrayofKeysDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
             if (response.Message === 'success') {
              const des = 'Contact details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
              ', has been modified by user ' + this.currentUser.UserName + 'and his company name is : '
              + this.service.formData.CompanyName + ', and his ' + this.service.ArrayofKey.Type + 'is : ' + this.service.ArrayofKey.Value;
            const Activity4 = type + ' : ' + value + ' is modified of Customer name : '
              + this.service.formData.NameTitle + ' ' + this.service.formData.FirstName
              + ' ' + this.service.formData.LastName + ', on dated : ' + new Date(Date.parse(Date()));
            this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
            this.service.formData.Id, 'Modify', des, Activity4).subscribe();
            this.refrestArrayofKeyslist();
            this.loadarrlist();
              }
             if (response.Message === 'failure') {
              this.toastr.warning('warning', response.MessageDescription);
              }
      }}, error =>  console.log(error));
    }
    if (this.service.ArrayofKey.Type === 'Email') {
      this.arrayemailbutton = 'Add';
      this.service.ArrayofKey.Id = 0;
      this.service.EmailArray.CustomerId = '00000000-0000-0000-0000-000000000000';
      this.service.EmailArray.Key = '';
      this.service.EmailArray.Value = '';
      this.service.EmailArray.Type = '';
    }
    if (this.service.ArrayofKey.Type === 'Phone') {
      this.arrayphonebutton = 'Add';
      this.service.ArrayofKey.Id = 0;
      this.service.MobileArray.CustomerId = '00000000-0000-0000-0000-000000000000';
      this.service.MobileArray.Key = '';
      this.service.MobileArray.Value = '';
      this.service.MobileArray.Type = '';
    }
    this.service.ArrayofKey.Id = 0;
    this.service.ArrayofKey.CustomerId = '00000000-0000-0000-0000-000000000000';
    this.service.ArrayofKey.Key = '';
    this.service.ArrayofKey.Value = '';
    this.service.ArrayofKey.Type = '';
    this.Isnavigated = false;
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }
  populateEmailArrayofKey(x: ArrayofKey) {
    this.service.EmailArray = Object.assign({}, x);
    this.arrayemailbutton = 'update';
  }
  populatePhoneArrayofKey(x: ArrayofKey) {
    this.service.MobileArray = Object.assign({}, x);
    this.arrayphonebutton = 'update';
  }
  deleteArrayofKey(id: number) {
    this.service.deleteArrayofKeysDetails(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.refrestArrayofKeyslist();
                  this.loadarrlist();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }

  billingaddresssame() {
    if (this.service.formData.IsAddressSame) {
      this.service.formData.AddressStreet1 = this.propertyservice.formData.AddressStreet1;
      this.service.formData.AddressStreet2 = this.propertyservice.formData.AddressStreet2;
      this.service.formData.AddressUnitNo = this.propertyservice.formData.AddressUnitNo;
      this.service.formData.AddressZipCode = this.propertyservice.formData.AddressZipCode;
      this.service.formData.AddressCountry = this.propertyservice.formData.AddressCountry;
    } else {
      this.service.formData.AddressStreet1 = '';
      this.service.formData.AddressStreet2 = '';
      this.service.formData.AddressCity = '';
      this.service.formData.AddressState = '';
      this.service.formData.AddressZipCode = '';
      this.service.formData.AddressCountry = '';
      this.service.formData.AddressUnitNo = '';
    }
  }

  public handleAddressChange(address: any, type: string) {
    this.service.formData.AddressStreet1 = '';
    this.service.formData.AddressStreet2 = '';
    this.service.formData.AddressUnitNo = '';
    this.service.formData.AddressZipCode = '';
    this.service.formData.AddressCountry = '';
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    address.address_components.forEach((element: any) => {
      switch (element.types[0]) {
        case 'postal_code': { this.postal_code = element.long_name; break; }
        case 'country': { this.country = element.long_name; break; }
        case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name + ' '; break; }
        case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name + ' '; break; }
        case 'locality': { this.locality = element.long_name + ' '; break; }
        case 'sublocality_level_1': { this.sublocality_level_1 = element.long_name + ' '; break; }
        case 'sublocality_level_2': { this.sublocality_level_2 = element.long_name + ' '; break; }
        case 'sublocality_level_3': { this.sublocality_level_3 = element.long_name + ' '; break; }
        case 'neighborhood': { this.neighborhood = element.long_name + ' '; break; }
        case 'route': { this.route = element.long_name + ' '; break; }
        case 'street_number': { this.street_number = element.long_name + ' '; break; }
      }
    });
    if (type === 'mailing') {
      this.propertyservice.formData.Latitude = this.lat.toString();
      this.propertyservice.formData.Longitude = this.lng.toString();
      this.propertyservice.formData.AddressStreet1 = this.street_number;
      this.propertyservice.formData.AddressStreet2 = this.route;
      this.propertyservice.formData.AddressCity = this.administrative_area_level_2 + this.sublocality_level_3 +
        this.sublocality_level_2 +
        this.sublocality_level_1 + this.neighborhood;
      this.propertyservice.formData.AddressState =  this.administrative_area_level_1 + this.locality;
      this.propertyservice.formData.AddressZipCode = this.postal_code;
      this.propertyservice.formData.AddressCountry = this.country;
      }
    if (type === 'billing') {
    this.service.formData.Latitude = this.lat.toString();
    this.service.formData.Longitude = this.lng.toString();
    this.service.formData.AddressStreet1 = this.street_number;
    this.service.formData.AddressStreet2 = this.route;
    this.service.formData.AddressCity = this.administrative_area_level_2 + this.sublocality_level_3 +
      this.sublocality_level_2 +
      this.sublocality_level_1 + this.neighborhood;
    this.service.formData.AddressState =  this.administrative_area_level_1 + this.locality;
    this.service.formData.AddressZipCode = this.postal_code;
    this.service.formData.AddressCountry = this.country;
    }
    this.street_number = '';
    this.route = '';
    this.administrative_area_level_2 = '';
    this.sublocality_level_3 = '';
    this.sublocality_level_2 = '';
    this.sublocality_level_1 = '';
    this.neighborhood = '';
    this.administrative_area_level_1 = '';
    this.locality = '';
    this.postal_code = '';
    this.country = '';
  }
  public findAddressByPostalCode(pc: string, type: string) {
    this.IsPostalSearch = true;
    if (pc.length === 6) {
      this.propertyservice.getAddressUsingPostalCode(Number(pc)).then(
        res => {
          this.addressresult = res.results;
        }
      );
      setTimeout(() => {
        if (this.addressresult.length > 0) {
          // tslint:disable-next-line: no-use-before-declare
          this.lat = this.addressresult[0].geometry.location.lat;
          this.lng = this.addressresult[0].geometry.location.lng;
          this.addressresult[0].address_components.forEach((element: any) => {
            switch (element.types[0]) {
              case 'postal_code': { this.postal_code = element.long_name; break; }
              case 'country': { this.country = element.long_name; break; }
              case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name + ' '; break; }
              case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name + ' '; break; }
              case 'locality': { this.locality = element.long_name + ' '; break; }
              case 'neighborhood': { this.neighborhood = element.long_name + ' '; break; }
            }
          });
          if (type === 'mailing') {
            this.propertyservice.formData.Latitude = this.lat.toString();
            this.propertyservice.formData.Longitude = this.lng.toString();
            this.propertyservice.formData.AddressCity = this.administrative_area_level_2 + this.neighborhood;
            this.propertyservice.formData.AddressState = this.administrative_area_level_1 + this.locality;
            this.propertyservice.formData.AddressZipCode = this.postal_code;
            this.propertyservice.formData.AddressCountry = this.country;
          }
          if (type === 'billing') {
            this.service.formData.Latitude = this.lat.toString();
            this.service.formData.Longitude = this.lng.toString();
            this.service.formData.AddressCity = this.administrative_area_level_2 + this.neighborhood;
            this.service.formData.AddressState = this.administrative_area_level_1 + this.locality;
            this.service.formData.AddressZipCode = this.postal_code;
            this.service.formData.AddressCountry = this.country;
          }
        }
        this.IsPostalSearch = false;
        this.street_number = '';
        this.route = '';
        this.administrative_area_level_2 = '';
        this.sublocality_level_3 = '';
        this.sublocality_level_2 = '';
        this.sublocality_level_1 = '';
        this.neighborhood = '';
        this.administrative_area_level_1 = '';
        this.locality = '';
        this.postal_code = '';
        this.country = '';
      }, 1000);
    }
  }
  AddContactPersonData() {
    if (this.service.CustomerContactPersonData.NameTitle === '') {
      this.toastr.warning('Warning', 'Please select contact person title');
      this.isContactersonTitle = false;
      this.isContactersonValid = false;
      return false;
    }
    if (this.service.CustomerContactPersonData.FirstName === '') {
      this.toastr.warning('Warning', 'Please enter first name');
      this.isContactersonFirstName = false;
      this.isContactersonValid = false;
      return false;
    }
    if (this.service.CustomerContactPersonData.LastName === '') {
      this.toastr.warning('Warning', 'Please enter last name');
      this.isContactersonLastName = false;
      this.isContactersonValid = false;
      return false;
    }
    this.isContactersonTitle = true;
    this.isContactersonFirstName = true;
    this.isContactersonLastName = true;
    if (this.IsContactPersonAdd) {
      this.service.postContactPersonDetails(this.currentUser.Token).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                    const des = 'Contact person details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                    ', has been Added by user ' + this.currentUser.UserName + 'and Contact person name is : '
                    + this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName +' Phone No is ' +
                    this.service.CustomerContactPersonData.Phone + ' Email is '+ this.service.CustomerContactPersonData.Email ;
                    const Activity3 = this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' is added to the Company : '
                      + this.service.formData.CompanyName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                    this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                    this.service.formData.Id, 'Added', des, Activity3).subscribe();
                    this.refrestContactPersonlist();
                    }
                   if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                    }
                    this.service.CustomerContactPersonData.Id = 0;
      this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
      this.service.CustomerContactPersonData.NameTitle = '';
      this.service.CustomerContactPersonData.FirstName = '';
      this.service.CustomerContactPersonData.LastName = '';
      this.service.CustomerContactPersonData.Email = '';
      this.service.CustomerContactPersonData.Phone = '';
      this.service.CustomerContactPersonData.IsDefaultContact = false;
      }}, error =>  console.log(error));
      } else {
        this.service.putContactPersonDetails(this.currentUser.Token).subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                      const des = 'Contact person details of Customer : ' + this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                      ', has been modified by user ' + this.currentUser.UserName + 'and Contact person name is : '
                      + this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName +' Phone No is ' +
                      this.service.CustomerContactPersonData.Phone + ' Email is '+ this.service.CustomerContactPersonData.Email ;
                      const Activity4 = this.service.CustomerContactPersonData.NameTitle + ' ' + this.service.CustomerContactPersonData.FirstName + ' ' + this.service.CustomerContactPersonData.LastName + ' is modified to the Company : '
                      + this.service.formData.CompanyName + ' is modified : on dated : ' + new Date(Date.parse(Date()));
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                      this.service.formData.Id, 'Modify', des, Activity4).subscribe();
                      this.refrestContactPersonlist();
                      }
                     if (response.Message === 'failure') {
                        this.toastr.warning('warning', response.MessageDescription);
                      }
        }}, error =>  console.log(error));
    this.service.CustomerContactPersonData.Id = 0;
    this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
    this.service.CustomerContactPersonData.NameTitle = '';
    this.service.CustomerContactPersonData.FirstName = '';
    this.service.CustomerContactPersonData.LastName = '';
    this.service.CustomerContactPersonData.Email = '';
    this.service.CustomerContactPersonData.Phone = '';
    this.service.CustomerContactPersonData.IsDefaultContact = false;
    this.IsContactPersonAdd = true;
    this.arraycontactbutton = 'Add';
    }
  }
  public PupulatcontactPerson(x: CustomerContactPerson) {
    this.IsContactPersonAdd = false;
    this.arraycontactbutton = 'Update';
    this.service.CustomerContactPersonData = Object.assign({}, x);
   }
   public RemovecontactPerson(id: number) {
    this.service.deleteContactPersonDetails(this.currentUser.Token, id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.refrestContactPersonlist();
                  }
                 if (response.Message === 'failure') {
                    this.toastr.warning('warning', response.MessageDescription);
                  }
    }}, error =>  console.log(error));
  }
  public AddDefaultContactPerson() {
    if (this.service.CustomerContactPersonList.length === 0) {
      if (this.service.formData.FirstName.length !== 0 && this.service.formData.LastName.length !== 0) {
        let emailarray: any = this.service.ArrayofKeys.filter(r => r.Type === 'Email' && r.IsDefault === true);
        if (emailarray.length === 1) {
          emailarray = emailarray[0].Value;
        } else {
          emailarray = null;
        }
        let phonearray: any = this.service.ArrayofKeys.filter(r => r.Type === 'Phone' && r.IsDefault === true);
        if (phonearray.length === 1) {
          phonearray = phonearray[0].Value;
        } else {
          phonearray = null;
        }
        this.service.CustomerContactPersonData.Id = 0;
        this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
        this.service.CustomerContactPersonData.NameTitle = this.service.formData.NameTitle;
        this.service.CustomerContactPersonData.FirstName = this.service.formData.FirstName;
        this.service.CustomerContactPersonData.LastName = this.service.formData.LastName;
        this.service.CustomerContactPersonData.Email = emailarray;
        this.service.CustomerContactPersonData.Phone = phonearray;
        this.service.CustomerContactPersonData.IsDefaultContact = true;

        setTimeout(() => {
          this.service.postContactPersonDetails(this.currentUser.Token).subscribe( res => {
            if (res) { const response = res as any;
                       if (response.Message === 'success') {
                        const des = 'Contact person details of Customer : ' +
                      this.service.formData.FirstName + ' ' + this.service.formData.LastName +
                        ', has been Added by user ' + this.currentUser.UserName + 'and Contact person name is : '
                        + this.service.CustomerContactPersonData.NameTitle + ' ' +
                        this.service.CustomerContactPersonData.FirstName + ' ' +
                        this.service.CustomerContactPersonData.LastName + ' Phone No is ' +
                        this.service.CustomerContactPersonData.Phone + ' Email is ' + this.service.CustomerContactPersonData.Email;
                      const Activity3 = this.service.CustomerContactPersonData.NameTitle + ' ' +
                      this.service.CustomerContactPersonData.FirstName + ' ' +
                      this.service.CustomerContactPersonData.LastName + ' is added to the Company : '
                        + this.service.formData.CompanyName + ' is added : on dated : ' + new Date(Date.parse(Date()));
                      this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Customer',
                        this.service.formData.Id, 'Added', des, Activity3).subscribe();
                        this.refrestContactPersonlist();
                        }
                       if (response.Message === 'failure') {
                          this.toastr.warning('warning', response.MessageDescription);
                        }
          this.service.CustomerContactPersonData.Id = 0;
          this.service.CustomerContactPersonData.CustomerId = this.service.formData.Id;
          this.service.CustomerContactPersonData.NameTitle = '';
          this.service.CustomerContactPersonData.FirstName = '';
          this.service.CustomerContactPersonData.LastName = '';
          this.service.CustomerContactPersonData.Email = '';
          this.service.CustomerContactPersonData.Phone = '';
          this.service.CustomerContactPersonData.IsDefaultContact = false;
          }}, error =>  console.log(error));
        }, 500);
      }
    }
  }
  public SetDefaultCntactPerson(n: number) {
    this.service.setdefaultContactPersonlist(n);
  }
  changeValue(event) {
    this.service.formData.CustomerDepartment = [];
    event.value.forEach(el => {
      this.service.formData.CustomerDepartment.push({
        Id: 0,
        CustomerId: this.service.formData.Id,
        SMTPSettingsId: Number(el.Id),
        SMTPName: el.Name
      });
      this.service.CustomerDepartmentData = new CustomerDepartment();
    });
    this.service.SetCustomerWiseDepartment(this.service.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success(response.MessageDescription);
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
}
