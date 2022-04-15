import { Component, OnInit } from '@angular/core';
import { Login, AuthenticationService } from '../../../services';
import { environment } from 'src/environments/environment';
import { GenicDriveService } from 'src/app/services/genic-drive.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { PropertyService } from 'src/app/services/property.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-attendance',
  templateUrl: './engineer-attendance.component.html',
  styleUrls: ['../../properties/property-list/property-list.component.css']
})
export class EngineerAttendanceComponent implements OnInit {
  currentUser: Login;
  localPrependUrl: string;
  createbuttontext: string;
  btnText = 'Add';
  countrylist: any;
  msg: string;
  Tmsg: string;
  daystatus: number = null; /// 0 = day start, 1 = stop day, 2 = start & stop done
  attachmentLocalURL: string;
  constructor(
    public service: PropertyService,
    public driveService: GenicDriveService,
    public loginservice: AuthenticationService,
    public genicfrofile: GenicProfileService,
    private toastr: ToastrService,
    private router: Router,
    private imageCompress: NgxImageCompressService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.localPrependUrl = environment.apiUrl;
    this.attachmentLocalURL = 'assets/users/NoImage.png';
    this.genicfrofile.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   this.countrylist = response.result;
                  }
    }}, error =>  console.log(error));
  }
  ngOnInit() {
    if (!this.genicfrofile.formData.Geolocation) { this.router.navigate(['/dashboard']); }
    this.SetAsDefaultValues();
    this.initialize();
  }
  initialize() : void {
    setTimeout(() => {
      try{
        this.genicfrofile.postEngineerAttendanceDetails(this.currentUser.Token, 'validate').subscribe( res => {
          if (res) { const response = res as any;
                     if (response.Message === 'success') {
                      this.msg = response.MessageDescription;
                      this.daystatus = response.Status;
                      this.Tmsg = response.Time;
                      this.service.SetAutoCaptureBlank();
                      this.SetAsDefaultValues();
                      this.SetBlankAddress();
                      }
                      if (response.Message === 'failure') {
                        this.msg = response.MessageDescription;
                        this.daystatus = response.Status;
                        this.Tmsg = response.Time;
                        this.service.SetAutoCaptureBlank();
                        this.SetAsDefaultValues();
                        this.SetBlankAddress();
                      }
          }}, error =>  console.log(error));
      } catch {}
    }, 1000);
  }
  getUserLocation(e) {
    const enb = Boolean(e.target.checked);
    if (enb) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
           this.service.AutoCaptureParms.lat = position.coords.latitude;
           this.service.AutoCaptureParms.lng = position.coords.longitude;
           this.service.getAddressByLatLong(this.service.AutoCaptureParms.lat.toString() + ',' + this.service.AutoCaptureParms.lng.toString()).subscribe( res => {
            if (res) { const result = res as any;
                        this.setvalues(result.results[0].address_components);
            }}, error =>  console.log(error));
          });
        } else { console.log("User not allow"); }
    }
  }
  public handleAddressChange(address: any) { 
    this.setvalues(address.address_components);
    this.service.AutoCaptureParms.lat = address.geometry.location.lat();
    this.service.AutoCaptureParms.lng = address.geometry.location.lng();
   }
  setvalues(result: any) {
    this.SetBlankAddress();
    result.forEach((element: any) => {
      switch (element.types[0]) {
        case 'postal_code': { this.service.AutoCaptureParms.postal_code = element.long_name; break; }
        case 'country': { this.service.AutoCaptureParms.country = element.long_name; break; }
        case 'administrative_area_level_1': { this.service.AutoCaptureParms.administrative_area_level_1 += element.long_name + ' '; break; }
        case 'administrative_area_level_2': { this.service.AutoCaptureParms.administrative_area_level_2 += element.long_name + ' '; break; }
        case 'locality': { this.service.AutoCaptureParms.locality += element.long_name + ' '; break; }
        case 'political': { this.service.AutoCaptureParms.political += element.long_name + ' '; break; }
        case 'sublocality': { this.service.AutoCaptureParms.sublocality += element.long_name + ' '; break; }
        case 'sublocality_level_1': { this.service.AutoCaptureParms.sublocality_level_1 += element.long_name + ' '; break; }
        case 'sublocality_level_2': { this.service.AutoCaptureParms.sublocality_level_2 += element.long_name + ' '; break; }
        case 'sublocality_level_3': { this.service.AutoCaptureParms.sublocality_level_3 += element.long_name + ' '; break; }
        case 'neighborhood': { this.service.AutoCaptureParms.neighborhood += element.long_name + ' '; break; }
        case 'route': { this.service.AutoCaptureParms.route += element.long_name + ' '; break; }
        case 'street_number': { this.service.AutoCaptureParms.street_number += element.long_name + ' '; break; }
        case 'premise': { this.service.AutoCaptureParms.premise += element.long_name + ' '; break; }
      }
    });
    this.service.formData.Latitude = this.service.AutoCaptureParms.lat.toString();
    this.service.formData.Longitude = this.service.AutoCaptureParms.lng.toString();
    if(this.service.AutoCaptureParms.premise.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.premise + ' '; }
    if(this.service.AutoCaptureParms.street_number.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.street_number + ' '; }
    if(this.service.AutoCaptureParms.route.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.route + ' '; }
    if(this.service.AutoCaptureParms.sublocality_level_3.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.sublocality_level_3 + ' '; }
    if(this.service.AutoCaptureParms.political.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.political + ' '; }
    if(this.service.AutoCaptureParms.sublocality.length > 0) { this.service.formData.AddressStreet1 += this.service.AutoCaptureParms.sublocality + ' '; }
    if(this.service.AutoCaptureParms.neighborhood.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.neighborhood + ' '; }
    if(this.service.AutoCaptureParms.locality.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.locality + ' '; }
    if(this.service.AutoCaptureParms.administrative_area_level_2.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.administrative_area_level_2 + ' '; }
    if(this.service.AutoCaptureParms.sublocality_level_2.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.sublocality_level_2 + ' '; }
    if(this.service.AutoCaptureParms.sublocality_level_1.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.sublocality_level_1 + ' '; }
    if(this.service.AutoCaptureParms.administrative_area_level_1.length > 0) { this.service.formData.AddressStreet2 += this.service.AutoCaptureParms.administrative_area_level_1 + ' '; }
    this.service.formData.AddressCity = '';
    this.service.formData.AddressState =  '';
    this.service.formData.AddressZipCode = this.service.AutoCaptureParms.postal_code;
    this.service.formData.AddressCountry = this.service.AutoCaptureParms.country;
    if(this.service.formData.AddressStreet1.length > 0) { this.genicfrofile.EngineerAttendance.StartAddress = this.service.formData.AddressStreet1 + ', '; }
    if(this.service.formData.AddressStreet2.length > 0) { this.genicfrofile.EngineerAttendance.StartAddress += this.service.formData.AddressStreet2 + ', '; }
    if(this.service.formData.AddressUnitNo.length > 0) { this.genicfrofile.EngineerAttendance.StartAddress += this.service.formData.AddressUnitNo + ', '; }
    if(this.service.formData.AddressCountry.length > 0) { this.genicfrofile.EngineerAttendance.StartAddress += this.service.formData.AddressCountry + ' '; }
    if(this.service.formData.AddressZipCode.length > 0) { this.genicfrofile.EngineerAttendance.StartAddress += this.service.formData.AddressZipCode; }
    this.genicfrofile.EngineerAttendance.EndAddress = this.genicfrofile.EngineerAttendance.StartAddress;
    this.genicfrofile.EngineerAttendance.StartLatLong = this.service.formData.Latitude + ',' + this.service.formData.Longitude;
    this.genicfrofile.EngineerAttendance.EndLatLong = this.genicfrofile.EngineerAttendance.StartLatLong;
    this.service.SetAutoCaptureBlank();
  }
  submit(t: string) {
    if(t === 'start') {
      if(this.genicfrofile.formData.GeolocationAddress){
      if(this.genicfrofile.EngineerAttendance.StartAddress.length === 0) { this.toastr.warning('Please choose adddress first'); return false; }
      }
      if(this.genicfrofile.formData.GeolocationImage){
      if(this.genicfrofile.EngineerAttendance.EngineerAttendanceImage.length === 0) { this.toastr.warning('Please choose a location image'); return false; }
      }
      this.genicfrofile.EngineerAttendance.Remark = this.service.formData.Remarks;
      this.daystatus = null;
      this.genicfrofile.postEngineerAttendanceDetails(this.currentUser.Token, 'start').subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                        Swal.fire({
                          title: response.Message,
                          text: response.MessageDescription,
                          type: 'info',
                          timer: 5000
                        });
                        this.initialize();
                    }
                    if (response.Message === 'failure') {
                      this.toastr.warning('warning', response.MessageDescription);
                      }
      }}, error =>  console.log(error));
    }
    if(t === 'stop') {
      if(this.genicfrofile.formData.GeolocationAddress){
      if(this.genicfrofile.EngineerAttendance.EndAddress.length === 0) { this.toastr.warning('Please choose adddress first'); return false; }
      }
      if(this.genicfrofile.formData.GeolocationImage){
      if(this.genicfrofile.EngineerAttendance.EngineerAttendanceImage.length === 0) { this.toastr.warning('Please choose a location image'); return false; }
      }
      this.genicfrofile.EngineerAttendance.Remark = this.service.formData.Remarks;
      this.daystatus = null;
      this.genicfrofile.postEngineerAttendanceDetails(this.currentUser.Token, 'stop').subscribe( res => {
        if (res) { const response = res as any;
                   if (response.Message === 'success') {
                        Swal.fire({
                          title: response.Message,
                          text: response.MessageDescription,
                          type: 'info',
                          timer: 5000
                        });
                        this.initialize();
                    }
      }}, error =>  console.log(error));
    }
  }
  handleAttachment() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.genicfrofile.EngineerAttendanceImage.Ext = image.split('/')[1].split(';')[0];
      this.imageCompress.compressFile(image, orientation, 50, 100).then(
        result => {
          this.genicfrofile.EngineerAttendanceImage.Size = this.imageCompress.byteCount(result);
          if (this.genicfrofile.EngineerAttendanceImage.Size >= 2000000) {
            this.toastr.info('size too large', 'Maximum size is 2MB');
            this.genicfrofile.EngineerAttendanceImage.Size = 0;
            this.genicfrofile.EngineerAttendanceImage.Image = null;
            this.genicfrofile.EngineerAttendanceImage.Ext = null;
            return false;
          }
          this.attachmentLocalURL = result;
          this.genicfrofile.EngineerAttendanceImage.Image = this.attachmentLocalURL.split(',')[1];
          this.genicfrofile.EngineerAttendance.EngineerAttendanceImage.push({
            Id: 0,
            EngineerAttendanceId: 0,
            Image: this.genicfrofile.EngineerAttendanceImage.Image,
            Size: this.genicfrofile.EngineerAttendanceImage.Size,
            Ext: this.genicfrofile.EngineerAttendanceImage.Ext,
            Status: ''
          });
        }
      );
    });
  }
  removeAttachment(k: number) {
    this.genicfrofile.EngineerAttendance.EngineerAttendanceImage.splice(k, 1);
  }
  SetAsDefaultValues(): void {
    this.genicfrofile.EngineerAttendance = {
          Id:0,
          EngineerId: this.currentUser.Id,
          StartLatLong: '',
          EndLatLong: '',
          StartDate: null,
          StartAddress: '',
          EndDate: null,
          EndAddress: '',
          StartIP: null,
          EndIP: null,
          Remark: '',
          EngineerAttendanceImage: []
    };
    this.genicfrofile.EngineerAttendanceImage = {
          Id: 0,
          EngineerAttendanceId: 0,
          Image: '',
          Size: 0,
          Ext: '',
          Status:''
    };
  }
  SetBlankAddress() : void {
    this.service.formData.AddressStreet1 = '';
    this.service.formData.AddressStreet2 = '';
    this.service.formData.AddressCity = '';
    this.service.formData.AddressUnitNo = '';
    this.service.formData.AddressState =  '';
    this.service.formData.AddressZipCode = '';
    this.service.formData.AddressCountry = '';
  }
}