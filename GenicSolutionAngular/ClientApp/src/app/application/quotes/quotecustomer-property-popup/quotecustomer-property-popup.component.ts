import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Property } from 'src/app/services/property.model';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { PropertyService } from 'src/app/services/property.service';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthenticationService, Login } from 'src/app/services';
import { GenicProfileService } from 'src/app/services/genicprofile.service';

@Component({
  selector: 'app-quotecustomer-property-popup',
  templateUrl: './quotecustomer-property-popup.component.html',
  styleUrls: ['./quotecustomer-property-popup.component.css']
})
export class QuotecustomerPropertyPopupComponent implements OnInit {
  LocalPropertyList: Property[];
  localPrependUrl: string;
  isValidZipCode = true;
  isValidCountry = true;
  IsPropertyCreate = true;
  lat: number;
  lng: number;
  zoom = 8;
  IsPostalSearch: boolean;
  options = { componentRestrictions: {country: ['SG']}};
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
  currentUser: Login;
  countrylist: any;
  constructor(
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<QuotecustomerPropertyPopupComponent>,
    public quoterService: QuoteService,
    public service: PropertyService,
    public loginservice: AuthenticationService,
    public customerservice: CustomerService,
    public genicprofileservice: GenicProfileService
    ) {
      this.loginservice.currentUser.subscribe(x => this.currentUser = x);
      this.localPrependUrl = environment.apiUrl; }

  ngOnInit() {
    this.IsPropertyCreate = true;
    this.service.Propertylist = [];
    this.service.refrestPropertylistCustomerWise(this.currentUser.Token, this.customerservice.formData.Id).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                    this.service.Propertylist = this.service.locallist = response.result as Property[];
                    this.service.locallist = this.service.Propertylist.filter(x => x.IsActive === true);
                    this.service.formData.CustomerId = this.customerservice.formData.Id;
                  }
    }}, error =>  console.log(error));
  }
  onClick(x: Property) {
    if (x === undefined) {
      this.dialogRef.close();
    } else {
      this.dialogRef.close({x});
    }
  }
  onSubmit() {
    if (this.service.formData.AddressZipCode === '' ||
    this.service.formData.AddressZipCode === undefined) {
      this.isValidZipCode = false;
      this.toastr.warning('', 'ZipCode is required!');
      return false;
    }
    if (this.service.formData.AddressCountry === '' ||
     this.service.formData.AddressCountry === undefined) {
      this.isValidCountry = false;
      this.toastr.warning('', 'Country is required!');
      return false;
    }

    this.service.AddNewProperty()
    .subscribe( res => {
      if (res) {
        setTimeout(() => {
          this.toastr.success('', 'Property is added');
          this.service.Propertylist = res as [];
        }, 400);
        setTimeout(() => {
          this.service.locallist = this.service.Propertylist.filter(x => x.IsActive === true);
          }, 1000);
        this.IsPropertyCreate = true;
        setTimeout(() => {
          this.service.formData.AddressStreet1 = '';
          this.service.formData.AddressStreet2 = '';
          this.service.formData.AddressCity = '';
          this.service.formData.AddressState = '';
          this.service.formData.AddressUnitNo = '';
          this.service.formData.AddressZipCode = '';
        }, 1500);

      }
    }, error =>  console.log(error));
  }
  redirect() {
    this.IsPropertyCreate = false;
    this.genicprofileservice.getCountryList(this.currentUser.Token).subscribe( res => {
      if (res) { const response = res as any;
                 if (response.Message === 'success') {
                   this.countrylist = response.result;
                  }
    }}, error =>  console.log(error));
  }
  onBack() {
    this.IsPropertyCreate = true;
  }
  onkeypress(value: string) {
    this.LocalPropertyList = this.quoterService.PropertyList.filter(item =>
      item.CustomerName.toLowerCase().match(value.toLowerCase()) ||
      item.AddressCity.toLowerCase().match(value.toLowerCase()) ||
      item.AddressCountry.toLowerCase().match(value.toLowerCase()) ||
      item.AddressStreet1.toLowerCase().match(value.toLowerCase()) ||
      item.AddressStreet1.toLowerCase().match(value.toLowerCase()) ||
      item.AddressUnitNo.toLowerCase().match(value.toLowerCase()) ||
      item.AddressZipCode.toLowerCase().match(value.toLowerCase()));
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
}
