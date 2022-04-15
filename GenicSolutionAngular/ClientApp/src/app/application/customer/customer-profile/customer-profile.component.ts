import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { ToastrService } from 'ngx-toastr';
import { PropertyService } from 'src/app/services/property.service';
import { Title } from '@angular/platform-browser';
import { Engineer } from 'src/app/services/engineer.module';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styles: []
})
export class CustomerProfileComponent implements OnInit {
  showDetails: boolean;
  localPrependUrl: string;
  backgroundurl: string;
  currentUser: Login;
  tabshow = 'Profile';
  isValid = true;
  isNameValid = true;
  isMobileValid = true;

  isValidChangePassword = true;
  isValidOldChangePassword = true;
  isValidNewChangePassword = true;
  isValidConfirmChangePassword = true;

  EngineerLogoFile: any;
  options = { componentRestrictions: {country: ['SG']}};
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
  countrylist: any;
  showDetails3: boolean;
  loader: boolean = true;
  constructor(
    private titleService: Title,
    public logService: UserlogService,
    public docservice: DocumentUploadService,
    public loginservice: AuthenticationService,
    private propertyservice: PropertyService,
    public service: CustomerService,
    private toastr: ToastrService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.service.getCustomerByIdSync(this.currentUser.Token, this.currentUser.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.formData = response.result as Engineer;
                  }
      }}, error =>  console.log(error));
    this.titleService.setTitle('Customer Profile | Genic Solution');
    setTimeout(() => {
      this.backgroundurl = this.localPrependUrl + '/' + this.service.formData.CustomerLogo;
      if (this.service.formData.Latitude.length > 0) {
        this.lat = Number(this.service.formData.Latitude);
        this.lng = Number(this.service.formData.Longitude);
      }
    }, 1000);
    this.service.formData.AddressCountry = 'Singapore';
  }
  OnTabClick(s: string) {
    this.tabshow = s;
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
  /// End
  onStrengthChanged(strength: number) {
    //console.log('password strength = ', strength);
  }
  onsubmit(t: string) {

  }
  onPasswordStrengShow() {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
  }

  public handleAddressChange(address: any) {
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    address.address_components.forEach((element: any) => {
      switch (element.types[0]) {
        case 'postal_code': { this.postal_code = element.long_name; break; }
        case 'country': { this.country = element.long_name; break; }
        case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name; break; }
        case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name; break; }
        case 'locality': { this.locality = element.long_name; break; }
        case 'sublocality_level_1': { this.sublocality_level_1 = element.long_name; break; }
        case 'sublocality_level_2': { this.sublocality_level_2 = element.long_name; break; }
        case 'sublocality_level_3': { this.sublocality_level_3 = element.long_name; break; }
        case 'neighborhood': { this.neighborhood = element.long_name; break; }
        case 'route': { this.route = element.long_name; break; }
        case 'street_number': { this.street_number = element.long_name; break; }
      }
    });
    this.service.formData.Latitude = this.lat.toString();
    this.service.formData.Longitude = this.lng.toString();
    this.service.formData.AddressStreet1 = this.street_number ;
    this.service.formData.AddressStreet2 = + ' ' + this.route;
    this.service.formData.AddressCity = this.sublocality_level_3 + ' ' +
    this.sublocality_level_2 + ' ' +
    this.sublocality_level_1 + ' ' + this.neighborhood;
    this.service.formData.AddressState = this.administrative_area_level_1 + ' ' + this.administrative_area_level_2 + ' ' + this.locality;
    this.service.formData.AddressZipCode = this.postal_code;
    this.service.formData.AddressCountry = this.country;
  }
  public findAddressByPostalCode(pc: string) {
    if (pc.toLocaleString().length === 6) {
      let Unformataddress = this.propertyservice.getAddressUsingPostalCode(Number(pc));

      setTimeout(() => {
        this.service.formData.Latitude = this.lat.toString();
        this.service.formData.Longitude = this.lng.toString();
        this.service.formData.AddressCity = this.neighborhood ;
        this.service.formData.AddressState = this.administrative_area_level_1 + ' ' +
                                              this.administrative_area_level_2 + ' ' +
                                              this.locality;
        this.service.formData.AddressZipCode = this.postal_code;
        this.service.formData.AddressCountry = this.country;
      }, 1000);
    }
  }
}
