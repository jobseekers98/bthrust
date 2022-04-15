import { Injectable } from '@angular/core';
import { Engineer} from './engineer.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForgetPassword } from './login.mudule';
import { TicketIssueType } from './ticket.module';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  formData: Engineer;
  Engineerlist: Engineer[];
  EngineerLocalList: Engineer[];
  ForgetPassword: ForgetPassword;
  EngineerWiseIssueTypeList: TicketIssueType[];
  LocalEngineerWiseIssueTypeList: TicketIssueType[];
  constructor(private http: HttpClient) {
    this.SetAsDefaultValues();
  }
  SetAsDefaultValues() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      AttachmentPath: '',
      EngineerId: 'ENG',
      EngineerName: '',
      EngineerPhone: '',
      EngineerEmail: '',
      Type: 0,
      Working: true,
      LoginAccess: true,
      IsActive: false,
      CreateCustomer: 'Partial',
      CreateForAllDate: 'SameDate',
      AssignToOtherUser: false,
      AddressStreet1: '',
      AddressStreet2: '',
      AddressUnitNo: '',
      AddressCity: '',
      AddressState: '',
      AddressZipCode: '',
      AddressCountry: 'Singapore',
      Latitude: '',
      Longitude: '',
      EmergencyName: '',
      EmergencyNumber: '',
      EmergencyRelation: '',
      EngineerLogo: '',
      Color: '',
      EngineerWiseIssueTypeList: [],
      EngineerWiseZoneList: []
    };
    this.ForgetPassword = {
      UserName: '',
      OTP: '',
      NewPassword: '',
      OldPassword: '',
      ConfirmPassword: ''
    };
  }

  postEngineerDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Engineers/' + token, this.formData).pipe(map( response => response));
  }
  putEngineerDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Engineers/' + token, this.formData).pipe(map( response => response));
  }

  deleteEngineerProfileImage(Id: string) {
    return this.http.delete(environment.apiUrl + '/api/Engineers/' + Id, { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), observe: 'response' }).toPromise();
  }
  getEngineerListSync(token: string) {
    return this.http.get(environment.apiUrl + '/api/Engineers/GetEngineerList/' + token).pipe(map(Response => {return Response;}));
  }
  getEngineerById(token: string, EId: string) {
    return this.http.get(environment.apiUrl + '/api/Engineers/GetEngineerById/' + token + '/' + EId).pipe(map(Response => {return Response;}));
  }
  public releseTemporaryEngineerFromTicket(TicketId: string, Token: string, actiontype: string) {
    return this.http.get(environment.apiUrl + '/api/Engineers/ReleseTemporaryEngineerFromTicket/' + TicketId + '/' + Token + '/'
     + actiontype)
    .pipe(map( Response => Response));
  }
  refrestUnallocatedTimeEngineerList(stime: string, etime: string, Token: string) {
    this.http.get(environment.apiUrl + '/api/Engineers/UnallocatedEngineers/' + stime + '/' + etime + '/' + Token).toPromise().then(
      res => this.Engineerlist = this.EngineerLocalList = res as Engineer[]);
  }

  refrestEngineerTableList(Token: string) {
    return this.http.get(environment.apiUrl + '/api/Engineers/GetEngineerTable/' + Token).pipe(map(response => {return response;}));
}
getEngineerTickets(Token: string, EngineerId: string) {
  return this.http.get(environment.apiUrl + '/api/Tickets/GetEngineerTickets/' + Token  + '/' + EngineerId).pipe(map(response => {return response;}));
}
  refrestAssinedEngineersList(Token: string, TicketId: string) {
    this.http.get(environment.apiUrl + '/api/Engineers/AssinedEngineersList/' + Token + '/' + TicketId).toPromise().then(res =>
    this.Engineerlist = res as Engineer[]);
  }
  putEngineerWorkingOrNot(Token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/Engineers/PutEngineersWorkingOrNot/' + Token + '/' + Id , null,).pipe(map(response => {return response;}));
  }


  /*******************************************************************************/
  // Engineer Profile Update By Engineer Begin
  putSelfEngineerDetails(Token: string, update: string) {
    return this.http.put(environment.apiUrl + '/api/Engineers/EngineerSelfUpdate/' + Token + '/' + update, this.formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      observe: 'response' }).pipe();
  }
  putSelfEngineerPasswordChange(Token: string) {
      return this.http.post(environment.apiUrl + '/api/Engineers/PasswordChange/'  + Token , this.ForgetPassword).pipe(map(response => {return response;}));
  }

  // Get Zone list to assign an engineer
GetEngineerWiseTicketIssueType(EngineerId?: string) {
  this.http.get(environment.apiUrl + '/api/Engineers/GetEngineerWiseTicketIssueType/' + EngineerId ).toPromise().then(res =>
    this.EngineerWiseIssueTypeList = res as TicketIssueType[]);
}

EngineerPasswordReset(EngineerId?: string, Token?: string) {
  return this.http.post(environment.apiUrl + '/api/Engineers/EngineerPasswordResetByAdmin/' + EngineerId + '/' +
   Token , null).pipe(map(response => {return response;}));
}
  // Engineer Profile Update By Engineer End
  /*******************************************************************************/
}

