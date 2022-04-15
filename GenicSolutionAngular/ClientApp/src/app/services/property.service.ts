import { Injectable } from '@angular/core';
import { Property, InternalObject, AutoCaptureParms } from './property.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  formData: Property;
  InternalObject: InternalObject;
  Propertylist: Property[];
  locallist: Property[];
  AutoCaptureParms: AutoCaptureParms;
  constructor(private http: HttpClient) {
    this.SetAsDefaultValue();
    this.SetAutoCaptureBlank();
   }
   SetAsDefaultValue() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      CustomerId: '00000000-0000-0000-0000-000000000000',
      PropertyId: 'PRO',
      AddressStreet1: '',
      AddressStreet2: '',
      AddressUnitNo: '',
      AddressCity: '',
      AddressState: '',
      AddressZipCode: '',
      AddressCountry: 'Singapore',
      CustomerName: '',
      CompanyName: '',
      Latitude: '1.3521',
      Longitude: '103.8198',
      Remarks: '',
      TotalTicket: 0,
      IsActive: true
    };
    this.InternalObject = {
      TodayDate: null,
      Type: '',
      DateFrom: '',
      DateTo: ''
    };
    
   }
  SetAutoCaptureBlank(): void {
    this.AutoCaptureParms = {
      street_number: '',
      route: '',
      premise: '',
      administrative_area_level_2: '',
      sublocality: '',
      sublocality_level_3: '',
      sublocality_level_2: '',
      sublocality_level_1: '',
      neighborhood: '',
      administrative_area_level_1: '',
      locality: '',
      political: '',
      postal_code: '',
      country: '',
      lat: environment.lat,
      lng: environment.lng,
      zoom: environment.zoom,
      options: environment.options
    };
  }
   postPropertyDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Properties/' + token, this.formData).pipe(map( Response => Response));
  }
  putPropertyDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Properties/' + token, this.formData).pipe(map( Response => Response));
  }
  putPropertyUpdateStatus(token: string) {
    return this.http.put(environment.apiUrl + '/api/Properties/PutPropertyStatusActiveInactive/' + token, null)
    .pipe(map( Response => Response));
  }
  refrestPropertylist(token: string) {
    return this.http.get(environment.apiUrl + '/api/Properties/Get/' + token).pipe(map( Response => Response));
  }
  refrestPropertyById(id: string) {
    this.http.get(environment.apiUrl + '/api/Properties/' + id).toPromise().then(res =>
      this.Propertylist = this.locallist = res as Property[]);
  }
  refrestPropertylistCustomerWise(token: string, CId: string) {
    return this.http.get(environment.apiUrl + '/api/Properties/GetPropertyCustomerWise/' + token + '/' + CId).pipe(map( Response => Response));
  }
  getAddressUsingPostalCode(pc: number) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + pc +
     '&sensor=false&key=' + environment.googleapiKey).toPromise().then(res => res as any);
  }
  getLatLongUsingCountry(selectedCountry) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + selectedCountry +
     '&sensor=false&key=' + environment.googleapiKey).toPromise().then(res => res as any);
  }
  getPropertyData(Id: string) {
    this.http.get(environment.apiUrl + '/api/Properties/getPropertyDataByProperyId/' + Id).toPromise().then(res =>
      this.formData = res as Property);
  }
  getLatLongUsingZipCode(ZipCode): Observable<any> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + ZipCode +
     '&key=' + environment.googleapiKey).pipe(res => res as any);
  }
  AddNewProperty() {
    return this.http.post(environment.apiUrl + '/api/Properties/AddNewProperty', this.formData).pipe(map(Response => { return Response;}));
  }
  ClientTicketHistory(ticketId: string) {
    return this.http.get(environment.apiUrl + '/api/Properties/TicketHistoryViewDetails/' + ticketId).pipe(map(Response => { return Response;}));
  }
  getAddressUsingPostalCodeSync(pc: number) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + pc +
    '&sensor=false&key=' + environment.googleapiKey).pipe(map( Response => Response));
  }
  getAddressByLatLong(latlng: string): Observable<any> {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=' + environment.googleapiKey).pipe(res => res as any);
  }
  CustomerAddressLatLongGet(moduletype: string) {
    return this.http.get(environment.apiUrl + '/api/Properties/CustomerAddressLatLong/' + moduletype).pipe(map( Response => Response));
  }
  CustomerAddressLatLongGetUpdate(moduletype: string) {
    return this.http.put(environment.apiUrl + '/api/Properties/CustomerAddressLatLongUpdate/' + moduletype, this.formData)
    .pipe(map( Response => Response));
  }
}
