import { Injectable } from '@angular/core';
import { Ticket, TicketTeam, TicketItem, TicketAttachment, TicketTimer,
  TicketIssueType, TicketRecurringHelper, TicketWiseIssueType, TicketEquipment, TicketEquipmentMasterData } from './ticket.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  formData: Ticket;
  Ticketlist: Ticket[];
  TicketLocalList: Ticket[];

  TicketTeam: TicketTeam;
  TicketTeamList: TicketTeam[];

  TicketItem: TicketItem;
  TicketItemList: TicketItem[];
  TicketItems: TicketItem[];

  TicketAttachment: TicketAttachment;
  TicketAttachmentList: TicketAttachment[];

  TicketIssueType: TicketIssueType;
  TicketIssueTypeList: TicketIssueType[];

  TicketWiseIssueTypeData: TicketWiseIssueType;
  TicketWiseIssueTypeList: TicketWiseIssueType[];

  public TicketTimerData: TicketTimer;
  public TicketTimerList: TicketTimer[];

  TicketRecurringHelper: TicketRecurringHelper;

  TicketEquipment: TicketEquipment;
  TicketEquipmentList: TicketEquipment[];
  TicketEquipmentMasterData: TicketEquipmentMasterData;
  TicketEquipmentMasterDataList: TicketEquipmentMasterData[];
  constructor(private http: HttpClient) {
    this.RunBlankModule();
  }
  RunBlankModule() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      RecurringId: 0,
      TicketUniqueID: 0,
      TicketId: '',
      CustomerId: '00000000-0000-0000-0000-000000000000',
      PropertyId: '00000000-0000-0000-0000-000000000000',
      RequestId: '00000000-0000-0000-0000-000000000000',
      CustomerName: 'CUSTOMER NAME',
      CustomerContactNo: '',
      CustomerEmail: '',
      CustomerAddress: '',
      CustomerCompanyName: 'COMPANY NAME?',
      Title: '',
      Description: '',
      TicketType: 'One-Off Ticket',
      OneOffScheduled: false,
      OneOffAppointmentDate: null,
      OneOffStartTime: null,
      OneOffEndTime: null,
      AppointmentStart: null,
      AppointmentEnd: null,
      OneOffInvoice: false,
      RecurringScheduled: false,
      RecurringStartDate: null,
      RecurringEndDate: null,
      RecurringDuration: 1,
      RecurringVisitFrequency: 1,
      RecurringTotalVisit: 0,
      RecurringInvoice: '',
      Status: '',
      InternalNoteDescription: '',
      TermsAndConditions: '',
      InternalNoteQuote: false,
      InternalNoteTicket: false,
      InternalNoteInvoice: false,
      InternalNoteAllowPayment: false,
      WhenInvoiceClosed: false,
      CreatedUtcDate: null,
      Rescheduled: false,
      Reallocate: false,
      IsRequestExists: false,
      Properties: null,
      Customers: null,
      TicketTeams: [],
      Priority: 0,
      OverDueDays: 0,
      NetAmount: 0,
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      InvoiceNo: '',
      QuoteId: '',
      TicketConvertedFrom: '',
      TicketConvertedID: '00000000-0000-0000-0000-000000000000',
      TicketTeamList: [],
      TicketItemList: [],
      TicketItems: [],
      TicketAttachmentList: [],
      TicketAttachments: [],
      TicketWiseIssueType: [],
      TicketClosedDate: null,
      CreatedBy: '00000000-0000-0000-0000-000000000000',
      SMTPId: 0,
      DepartmentName: '',
      Rating: 0,
      RatingFeedback: ''
    };
    this.TicketTeam = {
      Id: 0,
      TicketId: '',
      EngineerId: '',
      EngineerName: '',
      EngineerLogo: '',
      TicketAssignDate: null,
      Type: 0
    };
    this.TicketItem = {
      Id: 0,
      TicketId: '',
      ItemName: '',
      Type: 'Product',
      ItemDescription: '',
      ItemQuantity: null,
      ItemUnitCost: null,
      ItemTotalCost: null,
      IsPriseRevised: false,
      ItemAddredBy: false,
      ItemAddredById: '00000000-0000-0000-0000-000000000000',
      ItemAddredByName: '',
      ItemBatch: '',
      BatchQty: '',
      UniqId: '',
      InWarranty: true,
      WarrantyDays: 365,
      InstallationDate: null,
      IsMaintance: false,
      MaintanceRemarks: ''
    };
    this.TicketAttachment = {
      Id: 0,
      TicketId: '',
      AttachmentName: '',
      AttachmentPath: '',
      AttachmentSize: 0
    };
    this.TicketIssueType = {
      Id: 0,
      Name: '',
      IsAssigned: false
    };
    this.TicketWiseIssueTypeData = {
      Id: 0,
      TicketId: '00000000-0000-0000-0000-000000000000',
      TicketIssueTypeId: 0,
      IssueTypeName: '',
    };
    this.TicketTimerData = {
      ID: 0,
      EngineerID: '',
      TicketID: '',
      StartDate: new Date(),
      EndDate: new Date(),
      StartTime: '',
      EndTime: '',
      Status: 0,
    };
    this.TicketWiseIssueTypeList = [];
    this.TicketRecurringHelper = {
      Id: 0,
      Type: 0,
      IsFor: 1,
      RecurringStartDate: null,
      RecurringDuration: 0,
      RecurringVisitFrequency: 0,
      SundayIsActive: false,
      MondayIsActive: false,
      TuesdayIsActive: false,
      WednesdayIsActive: false,
      ThursdayIsActive: false,
      FridayIsActive: false,
      SaturdayIsActive: false,
      Date1: false,
      Date2: false,
      Date3: false,
      Date4: false,
      Date5: false,
      Date6: false,
      Date7: false,
      Date8: false,
      Date9: false,
      Date10: false,
      Date11: false,
      Date12: false,
      Date13: false,
      Date14: false,
      Date15: false,
      Date16: false,
      Date17: false,
      Date18: false,
      Date19: false,
      Date20: false,
      Date21: false,
      Date22: false,
      Date23: false,
      Date24: false,
      Date25: false,
      Date26: false,
      Date27: false,
      Date28: false,
      Date29: false,
      Date30: false,
      Date31: false,
    };
    this.TicketEquipment = {
      Id: 0,
      TicketId: '00000000-0000-0000-0000-000000000000',
      Name: '',
      Remark: '',
      Quantity: 0
    }
    this.TicketEquipmentList = [];
    this.TicketEquipmentMasterData = {
      Id: 0,
      Name: '',
      IsActive: true
    }
    this.TicketEquipmentMasterDataList = [];
  }
  /*******************************************************************************/
  putTicketDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutTicket/' + token, this.formData).pipe(map(response => response));
}
  refreshCalendarTicketList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Calendar/GetTicketforCalendar/' + token).pipe(map(response => response));
  }

  getUnAssignedTickets(token: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/GetUnAssignedTickets/' + token)
    .pipe(map(
      response => {
        return response;
      }));
  }
  getTicketById(token: string, Id: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/' + token + '/' + Id)
    .pipe(map(
      response => {
        return response;
      }));
}
  refrestTicketListByCustomer(id: string) {
    this.http.get(environment.apiUrl + '/api/Customers/GetTicketByCustomer/' + id).toPromise().then(res =>
      this.Ticketlist = res as Ticket[]);
  }
  refrestTicketIssueTypeList() {
    this.http.get(environment.apiUrl + '/api/Tickets/GetTicketIssueType').toPromise().then(res =>
      this.TicketIssueTypeList = res as TicketIssueType[]);
  }

  createTemporaryTicket(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/' + token, this.formData )
    .pipe(map( response => response));
  }
  copyTicketFromOtherTicket(ticketid: string, token: string) {
    this.http.get(environment.apiUrl + '/api/Tickets/CopyTicketFromOtherTicket/' + ticketid + '/' + token).toPromise().then(res =>
      this.formData = res as Ticket);
  }
  createTicketFromQuotation(QuotationId: string, token: string) {
    this.http.get(environment.apiUrl + '/api/Tickets/CreateTicketFromQuotation/' + QuotationId + '/' + token).toPromise().then(res =>
      this.formData = res as Ticket);
  }
  UpdateStatusOfTicket(tid: string, status: string, token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutUpdateStatusTicket/' + tid + '/' + status + '/' + token,
     null).pipe(map(response => response));
  }
  RescheduledTicket(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutRescheduledTicket/' + token, this.formData).pipe(map(response => { return response;}));
  }
  checkForemanIsWorkingOrNot(TicketId: string, EngineerId: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/checkForemanIsWorkingOrNot/' + TicketId + '/' + EngineerId)
    .pipe(map(
      response => {
        return response;
      }));
}
  ScheduledTicket() {
    this.http.put(environment.apiUrl + '/api/Tickets/PutScheduledTicket', this.formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  AssignedEngineerForAllTickets(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/AssignedEngineerForAllTickets/' + token, this.formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  // Ticket methods (api) End
  /*******************************************************************************/
  RescheduledTicketFromCalendar() {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutRescheduledCalendarTicket', this.formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  DatedragTicketFromCalendar() {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutDateDragCalendarFromMonthTicket', this.formData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  TicketRevertToUnscheduledFromCalendar(TicketId: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/TicketRevertToUnscheduledFromCalendar/' + TicketId, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  /*******************************************************************************/
  // Ticket Calendar methods (api) Begin

  // Ticket Calendar methods (api) End
  /*******************************************************************************/

  /*******************************************************************************/
  // Ticket Team methods (api) Begin
  public postTicketTeamDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/PostTicketTeam/' + token,this.TicketTeam).pipe(map(response => {return response;}));
  }
  public deleteTicketTeamDetails(tid: string, eid: string, token: string) {
    return this.http.delete(environment.apiUrl + '/api/Tickets/DeleteTicketTeam/'  + tid + '/' + eid + '/' + token).pipe(map(response => {return response;}));
  }
  public refrestTicketTeamlist(id: string, token: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/GetTicketTeam/' + id + '/' + token).pipe(map(response => {return response;}));
  }
  // Ticket Team methods (api) End
  /*******************************************************************************/



  /*******************************************************************************/
  // Ticket Line Item methods (api) Begin
  public postTicketItemDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/PostTicketItem/'  + token, this.TicketItem).pipe(map(response => {return response;}));
  }
  public OnEngProdSubmit(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/OnEngProdSubmit/'  + token, this.TicketItem).pipe(map(response => {return response;}));
  }
  public putTicketItemDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutTicketItem/'  + token, this.TicketItem).pipe(map(response => {return response;}));
  }
  public deleteTicketItemDetails(token: string, id: number) {
    return this.http.delete(environment.apiUrl + '/api/Tickets/Deleteticketitem/'  + token  + '/' + id).pipe(map(response => {return response;}));
  }
  public refrestTicketItemlist(token: string, id: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/GetTicketItem/'  + token  + '/' + id).pipe(map(response => {return response;}));
  }
   AddMaintanceItemInItemList(token: string, isFrom: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/AddMaintanceItemInItemList/' + token + '/' + isFrom, this.TicketItem ).pipe(map(response => {return response;}));
   }
  // Ticket Line Item methods (api) End
  /*******************************************************************************/


  /*******************************************************************************/
  // Ticket Line Item methods (api) Begin
  public refrestTicketAttachmentList(id: string) {
    this.http.get(environment.apiUrl + '/api/Tickets/GetTicketAttachment/' + id).toPromise().then(
      res => this.TicketAttachmentList = res as TicketAttachment[]);
  }
  // Ticket Line Item methods (api) End
  /*******************************************************************************/


  /*******************************************************************************/
  // Ticket Wise Issue Type methods (api) Begin
  postTTicketWiseIssueTypeDetails(Id: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/SetTicketWiseIssueType/' + Id, this.formData.TicketWiseIssueType)
    .pipe(map(Response => Response));
}
  // Ticket Wise Issue Type methods (api) End
  /*******************************************************************************/


  /*******************************************************************************/
  // Engineer-Ticket methods (api) Begin
  // Engineer Tickets only (api) Start
  // UpdateTicketTimer
  startTicketTimer(TicketID: string, EngineerID: string, validate: boolean) {
    return this.http.get(environment.apiUrl + '/api/Tickets/startTicketTimer/' + TicketID + '/' + EngineerID + '/' + validate).pipe(map(Response => {
        return Response;
      }));
}
  public stopTicketTimer(EngineerId: string, TicketId: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/stopTicketTimer/' + EngineerId + '/' + TicketId, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }

  getTimerDuration(TicketId: string, EngineerId: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/getTicketTimeDuration/' + TicketId + '/' + EngineerId).pipe(map(Response => {return Response;}));
  }
  // Get ticket duration
  public getTimerDiffrance(id: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/getTicketTimeDiffrance/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  // Engineer-Ticket methods (api) End
  /*******************************************************************************/


  /*******************************************************************************/
  // Calendar Map methods (api) Begin
  public refrestTicketListForCalendarMap(date: string) {
    this.http.get(environment.apiUrl + '/api/Calendar/GetCalendarMap/' + date).toPromise().then(res =>
      this.Ticketlist = res as Ticket[]);
  }
  public refrestTicketListForCalendarMapDateWise(datefrom: string, dateto, type: string) {
    this.http.get(environment.apiUrl + '/api/Calendar/GetCalendarMapWithStatus/' +
      datefrom + '/' + dateto + '/' + type).toPromise().then(res =>
        this.Ticketlist = res as Ticket[]);
  }
  // Calendar Map methods (api) End
  // validate Ticket nos. on change
  public ValidateTicketNo(TicketUniqueID: number) {
    return this.http.post(environment.apiUrl + '/api/Tickets/ValidateTicketNo/' + TicketUniqueID, null, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  /*******************************************************************************/



  /*******************************************************************************/
  // Ticket Recurring Helper methods (api) Begin
  putTicketRecurringHelperDetails(token: string, skippublickholiday: boolean) {
     return this.http.put(environment.apiUrl + '/api/Tickets/PutTicketRecurringHelper/' + token + '/' + skippublickholiday, this.TicketRecurringHelper ).pipe(map(response => {return response;}));
  }
  // Ticket Recurring Helper methods (api) End
  /*******************************************************************************/

  // On Ticket Cancel button Click
  onTicketCancelButtonClick(oldEngList, TicketId?: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/onTicketCancelButtonClick/' + TicketId , oldEngList).pipe(map(response => {return response;}));
  }

  // Resource view Ticket
  ResourceViewDraggableEvent(Token: string) {
    return this.http.put(environment.apiUrl + '/api/Calendar/ResourceViewDraggableEvent/' + Token, this.formData).pipe(map(response => {return response;}));
  }
  ResourceViewDropableEvent(Token: string) {
    return this.http.put(environment.apiUrl + '/api/Calendar/ResourceViewDropableEvent/' + Token, this.formData).pipe(map(response => {return response;}));
  }


  //#region Get Ticket user Wise
  getTickets(token: string, type: number) {
    return this.http.get(environment.apiUrl + '/api/Tickets/GetTickets/' + token + '/' + type).pipe(map(Response => {return Response;}));
  }
  //#endregion

  //#region Ticket Equipment
  getTicketEquipmentDataList(token: string, ticketId: string) {
    return this.http.get(environment.apiUrl + '/api/TicketEquipment/GetTicketEquipmentDataList/' + token + '/' + ticketId).pipe(map(response => response));
  }
  putTicketEquipmentData(token: string) {
    return this.http.put(environment.apiUrl + '/api/TicketEquipment/PutTicketEquipmentData/' + token, this.TicketEquipment).pipe(map( response => response));
  }
  postTicketEquipmentData(token: string) {
    return this.http.post(environment.apiUrl + '/api/TicketEquipment/PostTicketEquipmentData/' + token, this.TicketEquipment).pipe(map( response => response));
  }
  removeTicketEquipmentData(token: string, tId: string, EMId: string) {
    return this.http.delete(environment.apiUrl + '/api/TicketEquipment/DeleteTicketEquipmentData/' + token + '/' + tId + '/' + EMId).pipe(map(response => response));
  }
  //#endregion

  //#region Ticket Equipment Master Data
  getTicketEquipmentMasterDataList(token: string) {
    return this.http.get(environment.apiUrl + '/api/TicketEquipment/GetEMMasterData/' + token).pipe(map(response => response));
    }
  putTicketEquipmentMasterData(token: string) {
      return this.http.put(environment.apiUrl + '/api/TicketEquipment/PutEMMasterData/' + token, this.TicketEquipmentMasterData).pipe(map( response => response));
    }
  postTicketEquipmentMasterData(token: string) {
      return this.http.post(environment.apiUrl + '/api/TicketEquipment/PostEMMasterData/' + token, this.TicketEquipmentMasterData).pipe(map( response => response));
    }
  putTicketEquipmentMasterDataStatus(token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/TicketEquipment/PutEMMasterDataStatus/' + token + '/' + Id, null)
    .pipe(map( Response => Response));
  }
  //#endregion
}
