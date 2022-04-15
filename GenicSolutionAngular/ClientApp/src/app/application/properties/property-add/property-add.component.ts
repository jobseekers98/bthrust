import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/services/login.mudule';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GenicProfileService } from 'src/app/services/genicprofile.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['../property-list/property-list.component.css']
})
export class PropertyAddComponent implements OnInit, OnDestroy {
  addressresult: any;
  currentUser: Login;
  options = { componentRestrictions: { country: ['SG']}};
  lat: number;
  lng: number;
  zoom = 8;
  IsPostalSearch: boolean;
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
  createbuttontext: string;
  latlngOnZip: any;
  btnText = 'Add';
  countrylist: any;
  loader: boolean = false;
  constructor(
    public titleService: Title,
    private route1: ActivatedRoute,
    public service: PropertyService,
    private toastr: ToastrService,
    public genicprofileservice: GenicProfileService,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   this.countrylist = response.result;
                  }
    }}, error =>  console.log(error));
    this.IsPostalSearch = false;
    if (this.router.url === '/properties/property-edit') {
      if (!this.currentUser.Permissions.PropertyEdit) { this.router.navigate(['/dashboard']); }
      this.titleService.setTitle('Propert Edit | Genic Solution');
      if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
        this.router.navigate(['/properties']);
      }
      if (this.service.formData.Latitude === null) {
        this.lat = 0;
      } else {
        this.lat = Number(this.service.formData.Latitude);
      }
      if (this.service.formData.Longitude === null) {
        this.lng = 0;
      } else {
        this.lng = Number(this.service.formData.Longitude);
      }
      this.createbuttontext = 'Update';
      this.btnText = 'Edit';
    } else {
      if (!this.currentUser.Permissions.PropertyCreate) { this.router.navigate(['/dashboard']); }
      const id = this.route1.snapshot.queryParamMap.get('id');
      const name = this.route1.snapshot.queryParamMap.get('name');
      const companyName = this.route1.snapshot.queryParamMap.get('companyname');
      this.createbuttontext = 'Create';
      this.btnText = 'Add';
      this.service.formData.CustomerId = id;
      this.service.formData.CustomerName = name;
      this.service.formData.CompanyName = companyName;
      this.service.formData.PropertyId = 'PRO';
      this.lat = 1.3521;
      this.lng = 103.8198;
      this.titleService.setTitle('Propert Create | Genic Solution');
    }
  }
  ngOnDestroy() {
    this.service.SetAsDefaultValue();
  }

  public handleAddressChange(address: any) {
    this.service.formData.AddressStreet1 = '';
    this.service.formData.AddressStreet2 = '';
    this.service.formData.AddressCity = '';
    this.service.formData.AddressUnitNo = '';
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
     this.service.getAddressUsingPostalCode(Number(pc)).then(
          res => {
            this.addressresult = res.results;
          }
      );
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
  onSubmit() {
    this.loader = true;
    if (this.service.formData.Latitude === '' || this.service.formData.Latitude === null
     || this.service.formData.Longitude === '' || this.service.formData.Longitude === null) {
      this.service.getLatLongUsingZipCode(Number(this.service.formData.AddressZipCode)).subscribe(
        res => {
        this.latlngOnZip = res.results;
        this.service.formData.Latitude = this.latlngOnZip[0].geometry.location.lat;
        this.service.formData.Longitude = this.latlngOnZip[0].geometry.location.lng;
        }
      );
    }

    setTimeout(() => {
      if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
        this.insertrecord();
      } else {
        this.updaterecord();
      }
    }, 1000);
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  insertrecord() {
    this.service.postPropertyDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  const des = 'Property of customer : ' + this.service.formData.CustomerName +
                  ', is Added as : ' + this.service.formData.AddressStreet1 + ' ' +
                  this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo +
                  + this.service.formData.AddressCountry +
                  this.service.formData.AddressZipCode +
                  ' , by user : ' + this.currentUser.UserName;
                  const Activity = 'New propery added : ' + this.service.formData.AddressStreet1 + ' ' +
                  this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo +
                  + this.service.formData.AddressCountry +
                  this.service.formData.AddressZipCode;

                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Property', 
                  this.service.formData.Id, 'Added', des, Activity).subscribe();
                  this.router.navigate(['/properties']);
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }

  updaterecord() {
    this.service.putPropertyDetails(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                  this.toastr.success('success', response.MessageDescription);
                  const des = 'Property of customer : ' + this.service.formData.CustomerName +
                  ', is modified as : ' + this.service.formData.AddressStreet1 + ' ' +
                  this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo +
                + this.service.formData.AddressCountry +
                  this.service.formData.AddressZipCode +
                  ' , by user : ' + this.currentUser.UserName;
                  const Activity1 = 'Propery modified : ' + this.service.formData.AddressStreet1 + ' ' +
                  this.service.formData.AddressStreet2 + ' ' + this.service.formData.AddressUnitNo +
                  + this.service.formData.AddressCountry +
                  this.service.formData.AddressZipCode + ' on dated : ' + new Date();

                  this.logService.postUserLog(this.currentUser.Id, this.currentUser.UserName, 'Property',
                  this.service.formData.Id, 'Modify', des, Activity1).subscribe();
                  this.router.navigate(['/properties']);
                  }
                 if (response.Message === 'failure') {
                  this.toastr.warning('warning', response.MessageDescription);
                  }
      }}, error =>  console.log(error));
  }
}
