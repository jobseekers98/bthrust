import { Injectable } from '@angular/core';
import { Ticket } from './ticket.module';
import { FSMServiceForm, TicketWiseServiceForm } from './serviceform.module';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/services/login.mudule';
import { CloserDetails } from './closerDetails.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceformService {
  currentUser: Login;
  TicketForData: Ticket;
  Ticketlist: Ticket[];
  TicketWiseServiceFormList: TicketWiseServiceForm[];
  TicketWiseServiceFormData: TicketWiseServiceForm;
  tempTicketwiseServiceFormList: TicketWiseServiceForm[];
  CloserDetailsData: CloserDetails;
  FSMServiceFormData: FSMServiceForm;
  constructor(private http: HttpClient, public loginservice: AuthenticationService) {
    this.TicketWiseServiceFormData = {
      TicketServiceID: 0,
      MasterServiceFormID: 0,
      ServicePrefix: '',
      ServiceFormName: '',
      Description: '',
      TicketId: '00000000-0000-0000-0000-000000000000',
      TicketNo: '',
      IsActive: false,
      IsPreview: true,
      ServiceFormSequenceId: 0,
      ServiceDate: new Date(),
      TicketDate: new Date(),
      EngineerId: '00000000-0000-0000-0000-000000000000',
      EngineerName: '',
      IsHTML: false,
      ClientformIdOnSave: 0,
      CloserId: '00000000-0000-0000-0000-000000000000'
    };
    
    this.CloserDetailsData = new CloserDetails();
    this.SetBlankServiceFormValue();
  }
  SetBlankServiceFormValue() {
    this.FSMServiceFormData = {
      Id: 0,
      SelectOne: 'Service Call',
      MaintenanceContract: 'No',
      Request: '',
      Diagnose: '',
      JobDone: '',
      Remark: '',
      ServiceTicketStatus: 'Pending',
      CloserId:''
    };
  }
  removeAssignedServiceForm(token: string, Id: string) {
    return this.http.delete(environment.apiUrl + '/api/Services/DeleteAssignedServiceForm/' + token + '/' + Id).pipe(map(response => response));
  }
  asignServiceformToTicket(token: string) {
    return this.http.post(environment.apiUrl + '/api/Services/asignServiceformToTicket/' + token, this.tempTicketwiseServiceFormList).pipe(map(response => response));
  }
  getAssignedServiceFormListByTicket(token: string, TicketId: string) {
    return this.http.get(environment.apiUrl + '/api/Services/GetAssignedServiceFormByTicket/' + token + '/' + TicketId).pipe(map(response => response));
  }
  // GET: Closer Details form cliend service form
  getCloserDetailsFormServiceForm(TicketId: string) {
    this.http.get(environment.apiUrl + '/api/Services/getCloserDetailsFormServiceForm/' + TicketId).toPromise().then(res => this.CloserDetailsData = res as CloserDetails);
  }
  downoadServiceFormPDF(CloserId) {
    return this.http.get(environment.apiUrl + '/api/Services/getServiceFormPDF/' + CloserId).pipe(map(Response => {return Response;}));
  }
  // downloadFileXHR(filePath, fileName) {
  //   var xhh = new XMLHttpRequest()
  //   xhh.setRequestHeader('Accept', '*/*');
  //   xhh.open('get', filePath)
  //   xhh.responseType = 'blob'
  //   xhh.onreadystatechange = function () {
  //     if (xhh.readyState === 4 && xhh.status === 200) {
  //       var blob = new Blob([xhh.response])
  //       var csvUrl = URL.createObjectURL(blob)
  //       var link = document.createElement('a')
  //       link.href = csvUrl
  //       link.download = fileName
  //       link.click()
  //     }
  //   }
  //   xhh.send()
  // }

  // //#region Hypercom Service Form
  // postServiceformData(token: string, TicketId: string, EngineerId: string, ServiceFormSequenceId: number) {
  //   return this.http.post(environment.apiUrl + '/api/Services/postServiceForm/' + token + '/'
  //   + TicketId + '/' + EngineerId + '/' + ServiceFormSequenceId, this.formDataList, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  //     observe: 'response' }).pipe();
  // }
  // viewServiceFormDetails(MasterServiceFormId: number, ServiceFormSequenceId: number, TicketId: string, EngineerId: string) {
  //   return this.http.get(environment.apiUrl + '/api/Services/viewServiceFormDetails/' + MasterServiceFormId + '/' + ServiceFormSequenceId + '/' + TicketId + '/' + EngineerId).pipe(map(Response => Response));
  // }
  // getServiceForm(id: number) {
  //   return this.http.get(environment.apiUrl + '/api/Services/getServiceForm/' + id).pipe(map(Response => Response));
  // }
  // getMasterServiceformList(token: string) {
  //   return this.http.get(environment.apiUrl + '/api/Services/GetMasterServiceForm/' + token).pipe(map(Response => Response));
  // }
  CheckServiceFormStatus(token: string, closerid: string) {
    return this.http.get(environment.apiUrl + '/api/Services/CheckServiceFormStatus/' + token + '/' + closerid)
    .pipe(map(Response => Response));
  }
  // //#endregion

//#region FSM Service Form
getFSMServiceFormById(token: string, Id: string, ) {
  return this.http.get(environment.apiUrl + '/api/Services/GetServiceFormById/' + token + '/' + Id).pipe(map(response => response));
}
putFSMServiceFormDetails(token: string,  TicketId: string, ispreview: boolean) {
  return this.http.put(environment.apiUrl + '/api/Services/PutServiceForm/' + token + '/' + TicketId + '/' + ispreview, this.FSMServiceFormData).pipe(map( response => response));
}
postFSMServiceFormDetails(token: string, TicketId: string, SequenceId: number, ispreview: boolean) {
  return this.http.post(environment.apiUrl + '/api/Services/PostServiceForm/' + token + '/' + TicketId + '/' + SequenceId + '/' + ispreview, this.FSMServiceFormData)
  .pipe(map( response => response));
}
//#endregion
}
