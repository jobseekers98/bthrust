import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer, ArrayofKey, CustomerContactPerson, CustomerDepartment, CustomerDepartmentType } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TicketIssueType } from './ticket.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData: Customer;
  CustomerList: Customer[];
  LocalCustList: Customer[];
  CustomerLocalList: Customer[];
  ArrayofKey: ArrayofKey;
  ArrayofKeys: ArrayofKey[];
  MobileArray: ArrayofKey;
  EmailArray: ArrayofKey;
  MobileArrayList: ArrayofKey[];
  EmailArrayList: ArrayofKey[];
  CustomerContactPersonData: CustomerContactPerson;
  CustomerContactPersonList: CustomerContactPerson[];
  CustomerDepartmentData: CustomerDepartment;
  CustomerDepartmentList: CustomerDepartment[];
  CustomerDepartmentType: CustomerDepartmentType;
  CustomerDepartmentTypeList: CustomerDepartmentType[];
  constructor(private http: HttpClient) {
    this.SetAsDefaultValues();
   }
   SetAsDefaultValues() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      CustomerId: 'CUS',
      NameTitle: '',
      FirstName: '',
      LastName: '',
      CompanyName: '',
      ClientReminders: true,
      PrintEmailOnWorkOuder: true,
      ClientFollowUpEmails: true,
      UseCompanyNameAsPrimaryName: true,
      RefferdBy: '',
      AddressStreet1: '',
      AddressStreet2: '',
      AddressUnitNo: '',
      AddressCity: '',
      AddressState: '',
      AddressZipCode: '',
      AddressCountry: 'Singapore',
      Latitude: '',
      Longitude: '',
      Status: true,
      CustomerLogo: '',
      IsAddressSame: false,
      CreatedUtcDate: null,
      SMTPId: 0,
      ArrayofKeys: [],
      Properties: [],
      CustomerContactPerson: [],
      CustomerDepartment: []
    };
    this.ArrayofKey = {
      Id: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      Key: '',
      Value: '',
      Type: '',
      IsDefault: false
    };
    this.EmailArray = {
      Id: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      Key: '',
      Value: '',
      Type: '',
      IsDefault: false
    };
    this.MobileArray = {
      Id: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      Key: '',
      Value: '',
      Type: '',
      IsDefault: false
    };
    this.EmailArrayList = [];
    this.MobileArrayList = [];
    this.CustomerContactPersonData = {
      Id: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      NameTitle: '',
      FirstName: '',
      LastName: '',
      Phone: '',
      Email: '',
      IsDefaultContact: false
    };
    this.CustomerDepartmentType = {
      Id: 0,
      Name: '',
      IsAssigned: false
    };
    this.CustomerDepartmentData = {
      Id: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      SMTPSettingsId: 0,
      SMTPName: '',
    };
    this.CustomerDepartmentList = [];
   }
/*******************************************************************************/
// Customer ArrayofKey methods (api) Begin
public postArrayofKeysDetails(token: string) {
  return this.http.post(environment.apiUrl + '/api/Customers/PostArrayofKey/' + token, this.ArrayofKey).pipe(map(Response => {return Response;}));
}
public putArrayofKeysDetails(token: string) {
  return this.http.put(environment.apiUrl + '/api/Customers/PutArrayofKey/' + token, this.ArrayofKey).pipe(map(Response => {return Response;}));
}
deleteArrayofKeysDetails(token: string, Id: number) {
  return this.http.delete(environment.apiUrl + '/api/Customers/DeleteArrayofKey/' + token + '/' + Id).pipe(map(Response => {return Response;}));
}
refrestArrayofKeyslist(token: string, CId: string) {
  return this.http.get(environment.apiUrl + '/api/Customers/GetArrayofKey/' + token + '/' + CId).pipe(map(Response => {return Response;}));
}
// Customer ArrayofKey methods (api) End
/*******************************************************************************/



/*******************************************************************************/
///////// Customer methods Begin
  putCustomerDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Customers/PutCustomer/' + token, this.formData).pipe(map( response => response));
  }
  refrestCustomerList(token: string) {
    this.http.get(environment.apiUrl + '/api/Customers/GetCustomer/' + token).toPromise().then(res =>
    this.CustomerList = this.CustomerLocalList = res as Customer[]);
  }
  getCustomerListSync(token: string) {
    return this.http.get(environment.apiUrl + '/api/Customers/GetCustomer/' + token).pipe(map(Response => {return Response;}));
  }
  GetCustomerList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Customers/GetCustomerList/' + token).pipe(map(Response => {return Response;}));
  }
  getCustomerByIdSync(token: string, Id: string) {
    return this.http.get(environment.apiUrl + '/api/Customers/GetCustomerById/' + token + '/' + Id).pipe(map( Response => Response));
  }
  getCustomerListOnProperty(Id: string) {
    return this.http.get(environment.apiUrl + '/api/Customers/getCustomerListOnProperty/' + Id).pipe(map( Response => Response));
  }
  createTemporaryCustomer(token: string) {
    return this.http.post(environment.apiUrl + '/api/Customers/PostCustomer/' + token, this.formData).pipe(map( Response => Response));
  }
  deleteTemporaryCustomer(token: string, Id: string) {
    return this.http.delete(environment.apiUrl + '/api/Customers/' + token + '/' + Id).pipe(map(Response => Response));
  }
  putCustomerUpdateStatus(token: string) {
    return this.http.put(environment.apiUrl + '/api/Customers/PutCustomerStatusUpdate/' + token, null).pipe(map(Response => Response));
  }
  AddNewCustomer(token: string) {
    return this.http.post(environment.apiUrl + '/api/Customers/AddNewCustomer/' + token, this.formData).pipe(map(Response => {return Response;}));
  }
  AddNewContactPerson(token: string) {
    return this.http.post(environment.apiUrl + '/api/Customers/AddNewContactPerson/' + token , this.CustomerContactPersonData).pipe(map(Response => {return Response;}));
  }
  CustomerPasswordReset(CustomerId?: string, Token?: string) {
    return this.http.post(environment.apiUrl + '/api/Customers/CustomerPasswordResetByAdmin/' + CustomerId + '/' +Token , null).pipe(map(response => { return response;}));
  }
///////// Customer methods End
/*******************************************************************************/

/*******************************************************************************/
CustomerBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Customers/CustomerBulkUpload/' + UserId, this.formData).pipe(map( Response => {return Response;}));
}
ContactPersonBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Customers/ContactPersonBulkUpload/' + UserId, this.formData).pipe(map(Response => {return Response;}));
}
CustomerPropertyBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Properties/PropertyBulkUpload/' + UserId, this.formData).pipe(map(Response => {return Response;}));
}
ProductBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Products/ProductBulkUpload/' + UserId, this.formData).pipe(map(Response => {return Response;}));
}
ServiceBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Services/ServiceBulkUpload/' + UserId, this.formData).pipe(map(Response => {return Response;}));
}
ProductWarrantyBulkUpload(UserId) {
  return this.http.post(environment.apiUrl + '/api/Reports/WarrantyBulkUpload/' + UserId, this.formData).pipe(map(Response => {return Response;}));
}
/*******************************************************************************/





/*******************************************************************************/
postContactPersonDetails(token: string) {
  return this.http.post(environment.apiUrl + '/api/Customers/PostCustomerContactPerson/' + token, this.CustomerContactPersonData).pipe(map( response => response));
}
putContactPersonDetails(token: string) {
  return this.http.put(environment.apiUrl + '/api/Customers/PutCustomerContactPerson/' + token, this.CustomerContactPersonData).pipe(map( response => response));
}
deleteContactPersonDetails(token: string, id) {
  return this.http.delete(environment.apiUrl + '/api/Customers/DeleteContactPerson/' + token + '/' + id).pipe(map( response => response));
}
refrestContactPersonlist(token: string, Id: string) {
  return this.http.get(environment.apiUrl + '/api/Customers/GetCustomerContactPersony/' + token + '/' + Id).pipe(map( response => response));
}
public setdefaultContactPersonlist(id: number) {
  this.http.get(environment.apiUrl + '/api/Customers/SetDefaultCustomerContactPersony/' + id ).toPromise().then(
    res => this.CustomerContactPersonList = res as CustomerContactPerson[]);
}

// Customer ArrayofKey methods (api) End
/*******************************************************************************/

SetCustomerWiseDepartment(Id: string) {
  return this.http.post(environment.apiUrl + '/api/Customers/SetCustomerWiseDepartment/' + Id, this.formData.CustomerDepartment)
  .pipe(map( response => response));
}
refrestCustomerWiseDepartmentList(t: string) {
  return this.http.get(environment.apiUrl + '/api/Customers/GetDepartmentList/' + t).pipe(map( response => response));
}
refrestCustomerIdWiseDepartmentList(Id: string) {
  this.http.get(environment.apiUrl + '/api/Customers/GetDepartmentListByCustomer/' + Id).toPromise().then(res =>
    this.CustomerDepartmentTypeList = res as TicketIssueType[]);
}

//#region Customer
postCreateByCustomer(token: string, body: any) {
  return this.http.post(environment.apiUrl + '/api/Customers/CreateJobByCustomer/' + token, {
    'TicketId': body.Id,
    'Description': body.Description,
    'AppointmentStart': body.AppointmentStart,
    'AppointmentEnd': body.AppointmentEnd,
    'Status': body.Status,
    'PropertyId': body.PropertyId
  }).pipe(map( response => response));
}
postTicketAttachmentByCustomer(token: string, body: any) {
  return this.http.post(environment.apiUrl + '/api/Customers/UploadTicketAttachmentByCustomer/' + token, body).pipe(map( response => response));
}
//#endregion
}
