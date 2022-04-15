import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenicProfile, GenicProfileCalendar, WebsiteParams, TicketFilter, GlobalFilter, ResourceFullCalendarSetting, PendingLeaveRequest, Smtpsetting, Country, EngineerAttendance, EngineerAttendanceImage } from './genicprofile.module';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GenicProfileService {
  formData: GenicProfile;
  GenicProfileCalendarData: GenicProfileCalendar;
  GenicProfileCalendarList: GenicProfileCalendar[];
  LeaveManagementList: GenicProfileCalendar[];
  TicketFilter: TicketFilter;
  GlobalFilter: GlobalFilter;
  WebsiteParam: WebsiteParams;
  ResourceFullCalendarSetting: ResourceFullCalendarSetting;
  PendingLeaveRequest: PendingLeaveRequest;
  CountryList: Country[];
  SmtpsettingData: Smtpsetting;
  SmtpsettingList: Smtpsetting[];
  EngineerAttendance: EngineerAttendance;
  EngineerAttendanceList: EngineerAttendance[];
  EngineerAttendanceImage: EngineerAttendanceImage;
  EngineerAttendanceImageList: EngineerAttendanceImage[];
  date = new Date();
  TODAY_DATE_IN_DATE = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
  TODAY_DATE_IN_STRING = this.TODAY_DATE_IN_DATE.getFullYear().toString().padStart(4, '0') + '-' +
    (this.TODAY_DATE_IN_DATE.getMonth() + 1).toString().padStart(2, '0') + '-' +
    this.TODAY_DATE_IN_DATE.getDate().toString().padStart(2, '0');
    NEXT_MONTH_DATE_IN_STRING = this.TODAY_DATE_IN_DATE.getFullYear().toString().padStart(4, '0') + '-' +
    (this.TODAY_DATE_IN_DATE.getMonth() + 2).toString().padStart(2, '0') + '-' +
    this.TODAY_DATE_IN_DATE.getDate().toString().padStart(2, '0');
  constructor(
    private http: HttpClient) {
    this.SetAsDefaultValue();
  }
 
  SetAsDefaultValue() {
    this.formData = {
      Id: 0,
      Name: '',
      Logo: '',
      Description: '',
      TicketPrefix: '',
      QuotePrefix: '',
      InvoicePrefix: '',
      ServicePrefix: '',
      CloserPrefix: '',
      ContactNumber: '',
      WhatsAppNumber: '',
      Email: '',
      AddressStreet1: '',
      AddressStreet2: '',
      AddressCity: '',
      AddressUnitNo: '',
      AddressState: '',
      AddressZipCode: '',
      AddressCountry: '',
      Latitude: '',
      Longitude: '',
      FacebookUrl: '',
      TwitterUrl: '',
      InstagramUrl: '',
      GoogleUrl: '',
      WebsiteUrl: '',
      SundayString: '',
      MondayString: '',
      TuesdayString: '',
      WednesdayString: '',
      ThursdayString: '',
      FridayString: '',
      SaturdayString: '',
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      TimeZone: 'Singapore Standard Time',
      TicketTermsConditions: '',
      QuoteTermsAndCondition: '',
      QuotationHeader: '',
      InvoiceHeader: '',
      ServiceHeader: '',
      BufferTime: 0,
      OTAfter: 18,
      WarrantyValidation: true,
      Geolocation: false,
      GeolocationAddress: false,
      GeolocationImage: false,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date()))
    };
    this.GenicProfileCalendarData = {
      Id: 0,
      GenicProfileId: 0,
      Date: null,
      Description: '',
      WorkType: 'Full Day',
      StartTime: '',
      EndTime: '',
      LeaveFor: 1,
      EngineerId: null,
      Status: '',
      EngineerName: '',
      IsWorking: false
    };
    this.WebsiteParam = {
      UrlPath: '',
      UrlString: ''
    };
    this.GenicProfileCalendarList = [];
    this.TicketFilter = {
      DateFrom: '',
      DateTo: '',
      CustomerId: [],
      EngineerId: [],
      DepartmentId: [],
      Status: [],
      IsReady: false,
      IsReadyQuote: false,
      IsReadyInvoice: false
    };
    this.GlobalFilter = {
      query: ''
    };
    this.PendingLeaveRequest = {
      Count: 0
    };
  }
  // Get ticket duration
  getGenicProfile(Token: string) {
    this.http.get(environment.apiUrl + '/api/GenicProfile/getGenicProfile/' + Token).toPromise().then(res =>
      this.formData = res as GenicProfile);
  }
  checkUserLimit(token: string, module1: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/CheckedUserLimit/' + token + '/' + module1).pipe(map(response => { return response; }));
  }
  postGenicProfileCompanyDetails(token: string, module1: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostGenicProfileCompanyDetails/' + token + '/' + module1, this.formData).pipe(map(response => { return response; }));
  }
  getFilterTicketListSync(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/GetFilterTickets/' + token, this.TicketFilter).pipe(map(response => { return response; }));
  }
  getFilterQuotationListSync(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/GetFilterQuatations/' + token, this.TicketFilter).pipe(map(response => { return response; }));
  }
  GlobalFilterSync(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/GlobalFilterSearch/' + token, this.GlobalFilter).pipe(map(response => { return response; }));
  }
  LeaveCalendarSync(token: string, year: number, month: number) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetLeaveCalendar/' + token + '/' + year + '/' + month).pipe(map(response => { return response; }));
  }
  LeaveCalendarForAdminSync(token: string, year: number, month: number) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetLeaveCalendarAdmin/' + token + '/' + year + '/' + month).pipe(map(response => { return response; }));
  }
  LeaveCalendarForAdminPostSync(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/GetLeaveCalendarAdmin/' + token, this.TicketFilter).pipe(map(response => { return response; }));
  }
  getPendingLeaveRequest(Token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/PendingLeaveRequest/' + Token).pipe(map(response => { return response; }));
  }
  updateHolidayStatus(id: number, Token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/LeaveCalendarStatusWorking/' + id + '/' + Token).pipe(map(Response => { return Response; }));
  }
  DisabledDateList(Token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/DisabledDateList/' + Token).pipe(map(Response => { return Response; }));
  }
  getGenicProfileCalendar(Token: string, Year: number) {
    this.http.get(environment.apiUrl + '/api/GenicProfile/GetGenicProfileCalendar/' + Token + '/' + Year).toPromise().then(res =>
      this.GenicProfileCalendarList = res as GenicProfileCalendar[]);
  }
  postGenicProfileCalendar(Token: string) {
    this.GenicProfileCalendarData.GenicProfileId = this.formData.Id;
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostGenicProfileCalendar/' + Token, this.GenicProfileCalendarData).pipe(map(Response => { return Response; }));
  }
  deleteGenicProfileCalendar(Token: string, Id: number) {
    return this.http.delete(environment.apiUrl + '/api/GenicProfile/DeleteGenicProfileCalendar/' + Token + '/' + Id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  approvedleave(Token: string, Id: number, status: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/ApprovedRejectLeave/' + Token + '/' + Id + '/' + status, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  approvedleaveAdmin(Token: string, Id: number, status: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/ApprovedRejectLeaveAdmin/' + Token + '/' + Id + '/' + status, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  cancelledLeaveRequest(Token: string, Id: number) {
    return this.http.delete(environment.apiUrl + '/api/GenicProfile/CancelledLeaveRequest/' + Token + '/' + Id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }


  //#region Country
  getCountryList(token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetCountry/' + token).pipe(map( response => response));
  }
  //#endregion

  //#region Engineer Attendance
  postEngineerAttendanceDetails(token: string, type: string) {
    return this.http.post(environment.apiUrl + '/api/app/EngineerProfile/EngineersAttendance/' + token + '/' + type, this.EngineerAttendance).pipe(map( response => response));
  }
  getAddressUsingLatLong(pc: number) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + pc +
    '&sensor=false&key=' + environment.googleapiKey).pipe(map( Response => Response));
  }
  //#endregion
}
