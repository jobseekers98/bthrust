import { Component, OnInit, OnDestroy } from '@angular/core';
import { EngineerService } from 'src/app/services/engineer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { PropertyService } from 'src/app/services/property.service';
import * as EmailValidator from 'email-validator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { GenicZone } from 'src/app/services/genic-zone';
import { EngineerViewGeofencingComponent } from './engineer-view-geofencing.Component';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { DocumentUploadService } from 'src/app/services/DocumentUpload.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-engineer-add',
  templateUrl: './engineer-add.component.html',
  styleUrls: ['./engineer-add.component.css']
})

export class EngineerAddComponent implements OnInit, OnDestroy {
  currentUser: Login;
  createbuttontext: string;
  isValid = true;
  isNameValid = true;
  isMobileValid = true;
  isEmailValid = true;
  isType = true;
  isEmergencyContactNo = true;
  options = {componentRestrictions: {country: ['SG']}};
  lat = 1.3521;
  lng = 103.8198;
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
  EngineerLogoFile: any;
  CertificationLogoFile: any;
  isImageBinary: boolean;
  localPrependUrl: string;
  progress: number;
  btnText = 'Add';
  countrylist: any;
  loader: boolean = false;
  isLimitOuver: boolean = false;
  msgh1: string;
  msgh2: string;
  constructor(
    public titleService: Title,
    public service: EngineerService,
    public logService: UserlogService,
    public docservice: DocumentUploadService,
    public loginservice: AuthenticationService,
    public propertyservice: PropertyService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,
    private genicprofile: GenicProfileService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.service.LocalEngineerWiseIssueTypeList = [];
  }

  ngOnInit() {
    this.genicprofile.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any; if (response.Message === 'success') { this.countrylist = response.result; }
    }}, error =>  console.log(error));
    if (this.router.url === '/engineers/engineer-add') {
      this.titleService.setTitle( this.currentUser.Engineer + ' Create | Genic Solution');
      if (!this.currentUser.Permissions.CustomerCreate) { this.router.navigate(['/dashboard']); }
      this.createbuttontext = 'Create';
      this.service.formData.Color = '#cccccc';
      this.btnText = 'Add';
      this.isImageBinary = true;
      setTimeout(() => {
        this.genicprofile.checkUserLimit(this.currentUser.Token, 'engineer').subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                      }
                      if (response.Message === 'warning') {
                          this.isLimitOuver = true;
                          this.msgh1 = response.h1;
                          this.msgh2 = response.h2;
                        }
          }}, error =>  console.log(error));
      }, 2000);
    }
	  const Id = window.location.pathname.split('/').pop();
    if (Id !== 'engineer-add') {
      if (Id === '00000000-0000-0000-0000-000000000000' || Id === undefined) { this.router.navigate(['/engineers']); }
      this.service.getEngineerById(this.currentUser.Token, Id).subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') { this.service.formData = response.result; }
                   this.titleService.setTitle( this.currentUser.Engineer + ' Edit | Genic Solution');
                   this.loginservice.getUserPermissions(this.currentUser.Token, this.service.formData.Id).subscribe( res => { 
                    const tempData: any = res;
                                     if (tempData.Message === 'success') {
                                      this.loginservice.PermissionData = tempData.result;
                                      }
                                    }, error =>  console.log(error));
        }}, error =>  console.log(error));
      this.createbuttontext = 'Update';
      this.btnText = 'Edit';
      this.isImageBinary = true;
	  }
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    let Base64String = reader.result.substr(reader.result);
    this.service.formData.EngineerLogo = Base64String.split(',')[1];
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
  pickedOnAdd(event, m) {
    this.isImageBinary = false;
    let fileList: FileList = event.target.files;
    const file: File = fileList[0];
    if(m === 'engineer') {
      this.EngineerLogoFile = file;
      this.handleInputChange(file);
    }
  }
  picked(event, m) {
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
      let type = m;
        this.docservice.uploadDocument(t , type, moduleid, '', remark, file).subscribe( res => {
          if (res) { const response = res as any;
                    if (response.Message === 'success') {
                      this.toastr.info('upload successfully');
                      if(m === 'engineer') { 
                        this.service.formData.EngineerLogo = response.MessageDescription;
                      }
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
  RemoveProfileImage(m) {
    this.loader = true;
    let t = this.currentUser.Token;
    let type = m;
    let moduleid = this.service.formData.Id;
    let remark = '';
    this.docservice.RemoveDocument(t , type, moduleid, '', remark).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.info(response.MessageDescription);
                  if(m === 'engineer') { 
                    this.service.formData.EngineerLogo = '';
                  }
                  this.loader = false;
                  }
                  if (response.Message === 'failure') {
                    this.toastr.warning(response.MessageDescription);
                    this.loader = false;
                  }
    }}, error =>  console.log(error));
    this.loader = false;
  }
  onSubmit() {
    this.isValid = true;
    this.isNameValid = true;
    this.isMobileValid = true;
    this.isEmailValid = true;
    this.service.formData.Type = Number(this.service.formData.Type);
    if (this.service.formData.EngineerName === '') {
      this.isValid = false;
      this.isNameValid = false;
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' name');
      return false;
    }
    if (this.service.formData.EngineerPhone === '') {
      this.isValid = false;
      this.isMobileValid = false;
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' mobile no');
      return false;
    }
    if (this.service.formData.EngineerPhone.length > 0) {
      let isphone = /^\d*$/.test(this.service.formData.EngineerPhone);
      if (!isphone) {
        this.toastr.warning('Warning', 'Please enter a valid phone');
        this.isValid = false;
        this.isMobileValid = false;
        return false;
      }
    }
    if (this.service.formData.EngineerEmail === '') {
      this.isValid = false;
      this.isEmailValid = false;
      this.toastr.warning('warning', 'Please enter ' + this.currentUser.Engineer.toLowerCase() + ' email');
      return false;
    }
    if (this.service.formData.EngineerEmail.length > 0) {
      if (!EmailValidator.validate(this.service.formData.EngineerEmail)) {
        this.toastr.warning('Warning', 'Please enter a valid email');
        this.isValid = false;
        this.isEmailValid = false;
        return false;
      }
    }
    if (this.service.formData.EngineerPhone === this.service.formData.EmergencyNumber) {
      this.isValid = false;
      this.isEmergencyContactNo = false;
      this.toastr.warning('warning', 'Emergency contact number should be different');
      return false;
    }
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      if (this.EngineerLogoFile !== undefined) {
        if (this.EngineerLogoFile.size >= 2000000) {
          this.toastr.info('size too large', 'Maximum logo size is 2MB');
          return false;
        }
      }
      if (this.EngineerLogoFile === undefined) {
        this.service.formData.EngineerLogo = '';
      }
      if (this.CertificationLogoFile !== undefined) {
        if (this.CertificationLogoFile.size >= 2000000) {
          this.toastr.info('size too large', 'Maximum logo size is 2MB');
          return false;
        }
      }
      this.insertrecord();
    } else {
      this.updaterecord();
    }
  }

  insertrecord() {
    this.createbuttontext = 'Loading...';
    this.service.postEngineerDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('Summited Successfully', 'New ' + this.currentUser.Engineer + ' Created');
                  this.service.formData.EngineerWiseZoneList = [];
                  const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + '(' + this.service.formData.Type + ')' +
                  ', Mobile No : ' + this.service.formData.EngineerPhone +
                    ', Email : ' + this.service.formData.EngineerEmail + ', is added by user : ' + this.currentUser.UserName;
                  const Activity = 'New ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' has been added ';
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer,
                  this.service.formData.Id, 'Added', des, Activity).subscribe();
                  this.router.navigate(['/engineers/']);
                  }
                 if (response.Message === 'failure') {
                  this.createbuttontext = 'Create';
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }

  updaterecord() {
    this.service.putEngineerDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('Summited Successfully', 'Update Record successfully');
                  this.service.formData.EngineerWiseZoneList = [];
                  const des = 'An ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + '(' + this.service.formData.Type + ')' +
                  ', Mobile No : ' + this.service.formData.EngineerPhone +
                    ', Email : ' + this.service.formData.EngineerEmail + ', is modified by user : ' + this.currentUser.UserName;
                  const Activity1 = 'Profile details of ' + this.currentUser.Engineer + ' : ' + this.service.formData.EngineerName + ' has been changed ';
                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, this.currentUser.Engineer,
                  this.service.formData.Id, 'Modify', des, Activity1).subscribe();
                  this.router.navigate(['/engineers/']);
                  }
                 if (response.Message === 'failure') {
                  this.createbuttontext = 'Create';
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }

  public handleAddressChange(address: any) {
    this.service.formData.AddressStreet1 = '';
    this.service.formData.AddressStreet2 = '';
    this.service.formData.AddressCity = '';
    this.service.formData.AddressState =  '';
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

    this.service.formData.Latitude = this.lat.toString();
    this.service.formData.Longitude = this.lng.toString();
    this.service.formData.AddressStreet1 = this.street_number + this.route;
    this.service.formData.AddressStreet2 =  this.administrative_area_level_2 + this.sublocality_level_3 +
    this.sublocality_level_2 +
    this.sublocality_level_1 + this.neighborhood + this.administrative_area_level_1;
    this.service.formData.AddressCity = '';
    this.service.formData.AddressState =  '';
    this.service.formData.AddressZipCode = this.postal_code;
    this.service.formData.AddressCountry = this.country;
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
  public findAddressByPostalCode(pc: string) {
    this.IsPostalSearch = true;
    if (pc.length === 6) {
     this.propertyservice.getAddressUsingPostalCode(Number(pc)).then(res => { this.addressresult = res.results; });
     setTimeout(() => {
        if (this.addressresult.length > 0) {
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
          this.service.formData.Latitude = this.lat.toString();
          this.service.formData.Longitude = this.lng.toString();
          this.service.formData.AddressStreet2 =  this.administrative_area_level_2 + this.sublocality_level_3 +
          this.sublocality_level_2 +
          this.sublocality_level_1 + this.neighborhood + this.administrative_area_level_1 + this.locality;
          this.service.formData.AddressCity = '';
          this.service.formData.AddressState = '';
          this.service.formData.AddressZipCode = this.postal_code;
          this.service.formData.AddressCountry = this.country;
        }
        this.IsPostalSearch = false;
      }, 1000);
    }
  }
  ngOnDestroy() {
    this.service.SetAsDefaultValues();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  }

  assignToEngIssueType(index) {
    this.service.LocalEngineerWiseIssueTypeList[index].IsAssigned = true;
  }
  removeToEngIssueType(index) {
    this.service.LocalEngineerWiseIssueTypeList[index].IsAssigned = false;
  }
  assignToEngZone(index) {
    // this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = true;
  }
  removeToEngZone(ZoneId, index) {
    // tslint:disable-next-line: max-line-length
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000' || this.service.formData.Id === undefined || this.service.formData.Id === null) {
      // this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = false;
    } else {
      // Swal.fire({
      //   title: 'Are you sure to remove this zone ?',
      //   text: 'All scheduled ticket belongs to this zone will be unallocated of this engineer !',
      //  // icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Remove'
      // }).then((result) => {
      //   if (result.value) {
      //     Swal.fire(
      //       'Removed!',
      //       'Zone removed and all scheduled tickets unallocated of this engineer',
      //       'success'
      //     );
      //   }
      // });
      //this.genicZoneService.LocalEngineerWiseZoneList[index].IsAssigned = false;
    }
  }
  OpenZoneInPopup(z: GenicZone) {
    setTimeout(() => {
       this.OpenZonePopup(z);
    }, 100);
  }
  OpenZonePopup(z: GenicZone) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.panelClass = 'geoCustomMatClass';
    dialogConfig.data = {};
   // dialogConfig.panelClass = 'geoCustomMatClass';
    //this.genicZoneService.setDefaultGenicZone();
    //this.genicZoneService.GenicZoneData = Object.assign({}, z);
    this.dialog.open(EngineerViewGeofencingComponent, dialogConfig).afterClosed().subscribe(res => {
      });
  }
  /// color event
  changeColorFolder(event) {
    this.service.formData.Color = event.color.hex;
  }
  savePermissions() {
    this.loginservice.updateUserPermission(this.currentUser.Token, 'engineer').subscribe(
      res => { const tempData: any = res;
               if (tempData.Message === 'success') {
                  this.toastr.success('', 'Permission updated successfully.');
                }
               if (tempData.Message === 'failure') {
                  this.toastr.error(tempData.MessageDescription);
                }
      }
    );
  }
}
