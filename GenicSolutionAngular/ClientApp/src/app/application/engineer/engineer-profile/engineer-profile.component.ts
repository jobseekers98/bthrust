import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services';
import { PropertyService } from 'src/app/services/property.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Engineer } from 'src/app/services/engineer.module';

@Component({
  selector: 'app-engineer-profile',
  templateUrl: './engineer-profile.component.html',
  styles: []
})
export class EngineerProfileComponent implements OnInit {
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
  isImageBinary: boolean;
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
  SynchronizationUrl: string;
  countrylist: any;
  showDetails3: boolean;
  constructor(
    private titleService: Title,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    private propertyservice: PropertyService,
    public service: EngineerService,
    private toastr: ToastrService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.service.getEngineerById(this.currentUser.Token, this.currentUser.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.service.formData = response.result as Engineer;
                  }
      }}, error =>  console.log(error));
    this.titleService.setTitle(this.currentUser.Engineer + ' Profile | Genic Solution');
    this.isImageBinary = true;
    setTimeout(() => {
      this.backgroundurl = this.localPrependUrl + '/' + this.service.formData.EngineerLogo;
      if (this.service.formData.Latitude.length > 0) {
        this.lat = Number(this.service.formData.Latitude);
        this.lng = Number(this.service.formData.Longitude);
      }
    }, 1000);
    const host = window.location.host;
    const subdomain = host.split('.')[0];
    this.SynchronizationUrl = 'https://fsm.bthrust.com.sg/Default?id=' + this.currentUser.Id.toLowerCase() + '&f=' + subdomain;
  }
  OnTabClick(s: string) {
    this.tabshow = s;
  }
  /// Convert base64strin image Begin
  _handleReaderLoaded(e) {
    let reader = e.target;
    let Base64String = reader.result.substr(reader.result);
    this.service.formData.EngineerLogo = Base64String.split(',')[1];
    console.log(this.service.formData.EngineerLogo);
  }
  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  picked(event) {
    this.isImageBinary = false;
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.EngineerLogoFile = file;
    this.handleInputChange(file);
  }
  /// End
  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
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
  onsubmitPasswordchange() {
    this.isValidChangePassword = true;
    this.isValidOldChangePassword = true;
    this.isValidNewChangePassword = true;
    this.isValidConfirmChangePassword = true;
    this.service.ForgetPassword.UserName = this.currentUser.UserName;
    if (this.service.ForgetPassword.OldPassword === '') {
      this.isValidChangePassword = false;
      this.isValidOldChangePassword = false;
      this.toastr.warning('warning', 'Please enter old password');
      return false;
    }
    if (this.service.ForgetPassword.NewPassword === '') {
      this.isValidChangePassword = false;
      this.isValidNewChangePassword = false;
      this.toastr.warning('warning', 'Please enter new password');
      return false;
    }
    if (this.service.ForgetPassword.ConfirmPassword === '') {
      this.isValidChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Please enter verify password');
      return false;
    }
    if (this.service.ForgetPassword.ConfirmPassword.length < 6) {
      this.isValidChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Minimum 6-to-16 characters Password length Required');
      return false;
    }
    if (this.service.ForgetPassword.NewPassword !== this.service.ForgetPassword.ConfirmPassword) {
      this.isValidChangePassword = false;
      this.isValidNewChangePassword = false;
      this.isValidConfirmChangePassword = false;
      this.toastr.warning('warning', 'Both password not match');
      return false;
    }
    this.service.putSelfEngineerPasswordChange(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                if (response.Message === 'success') {
                  this.toastr.success(response.MessageDescription);
                  this.service.ForgetPassword.OldPassword = '';
                  this.service.ForgetPassword.NewPassword = '';
                  this.service.ForgetPassword.ConfirmPassword = '';
                }
                if (response.Message === 'failure') {
                  this.toastr.warning(response.MessageDescription);
                }
      }}, error =>  console.log(error));
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
      // let address = this.propertyservice.getAddressUsingPostalCode(pc);
      let Unformataddress = this.propertyservice.getAddressUsingPostalCode(Number(pc));

      setTimeout(() => {
       // const address = Unformataddress.__zone_symbol__value.results[0];
       // const address = any;
        // console.log(address);
        // this.lat = address.geometry.location.lat;
        // this.lng = address.geometry.location.lng;
        // address.address_components.forEach((element: any) => {
        //   switch (element.types[0]) {
        //     case 'postal_code': { this.postal_code = element.long_name; break; }
        //     case 'country': { this.country = element.long_name; break; }
        //     case 'administrative_area_level_1': { this.administrative_area_level_1 = element.long_name; break; }
        //     case 'administrative_area_level_2': { this.administrative_area_level_2 = element.long_name; break; }
        //     case 'locality': { this.locality = element.long_name; break; }
        //   }
        //     });
        this.service.formData.Latitude = this.lat.toString();
        this.service.formData.Longitude = this.lng.toString();
        // this.service.formData.AddressStreet1 = this.street_number ;
        // this.service.formData.AddressStreet2 = this.route + ' ' + this.neighborhood;
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
