import { Injectable } from '@angular/core';
import { Notification, NotificationTemplate } from './notification.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  NotificationData: Notification;
  NotificationTemplateData: NotificationTemplate;
  NotificationTemplateList: NotificationTemplate[];

  constructor(private http: HttpClient) {
    this.SetNotificationDefault();
    this.SetNotificationTemplateDefault();
    this.NotificationTemplateList = [];
   }

  SetNotificationDefault() {
    this.NotificationData = {
    Id: '00000000-0000-0000-0000-000000000000',
    CreateTicketCustomer: false,
    CreateTicketEngineer: false,
    CreateTicketAdmin: false,
    AllocateTicketCustomer: false,
    AllocateTicketEngineer: false,
    AllocateTicketAdmin: false,
    ReAllocateTicketCustomer: false,
    ReAllocateTicketEngineer: false,
    ReAllocateTicketAdmin: false,
    RescheduleTicketCustomer: false,
    RescheduleTicketEngineer: false,
    RescheduleTicketAdmin: false,
    CompletionTicketCustomer: false,
    CompletionTicketAdmin: false,
    HoldTicketCustomer: false,
    HoldTicketAdmin: false,
    WorkOrderCustomer: false,
    WorkOrderAdmin: false,
    QuoteCustomer: false,
    QuoteAdmin: false,
    StartEndTicketCustomer: false,
    StartEndTicketAdmin: false,
    ReminRecurTicketCustomer: false,
    ReminRecurTicketEngineer: false,
    ReminRecurTicketAdmin: false,
    DailyNosOfTicketEngineer: false,
    CancelTicketCustomer: false,
    CancelTicketEngineer: false,
    CancelTicketAdmin: false,
    OnServiceDayCustomer: false,
    OnServiceDayEngineer: false,
    OnServiceDayAdmin: false,
    OnTheDayCustomer: false,
    OnTheDayTicketAdmin: false
    }
  }
  SetNotificationTemplateDefault() {
    this.NotificationTemplateData = {
    Id: '00000000-0000-0000-0000-000000000000',
    TemplateName: '',
    ModuleName:'',
    CustomerMailBody: '',
    MobileNotification: '',
    IsRead: false,
    EngineerMailBody: '',
    AdminMailBody: '',
    IsActive: true
    }
  }
getNotification(token: string) {
  return this.http.get(environment.apiUrl + '/api/Notifications/GetModuleNotification/' + token)
      .pipe(map(
          Response => {
              return Response;
  }));
}

putNotificationDetails(token: string) {
  return this.http.put(environment.apiUrl + '/api/Notifications/putModuleNotifications/' + token, this.NotificationData)
  .pipe(map(
    response => {
      return response;
  }));
}

//-----------------------Email template Section ---------------------------------------------//
//get template list
getEmailTemplateList() {
  return this.http.get(environment.apiUrl + '/api/Notifications/getEmailTemplateList')
      .pipe(map(
          Response => {
              return Response;
  }));
}

//get template details
getEmailTemplate(Id) {
  return this.http.get(environment.apiUrl + '/api/Notifications/getEmailTemplate/' + Id)
      .pipe(map(
          Response => {
              return Response;
  }));
}
// Add Email template
AddEmailTemplate() {
  return this.http.post(environment.apiUrl + '/api/Notifications/AddEmailTemplate', this.NotificationTemplateData)
  .pipe(map(
    response => {
      return response;
  }));
}

// Update Email template
UpdateEmailTemplate() {
  return this.http.put(environment.apiUrl + '/api/Notifications/UpdateEmailTemplate', this.NotificationTemplateData)
  .pipe(map(
    response => {
      return response;
  }));
}
changeNotificationTemplateStatus(Id, CurrStatus) {
  return this.http.post(environment.apiUrl + '/api/Notifications/changeNotificationTemplateStatus/' + Id + '/' + CurrStatus , null , {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
  }).pipe();
}

// Send Quote Notification
quoteEmailNotification(QuoteId?: string, isCust?: boolean, isAdmin?: boolean, AdminId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/quoteEmailNotification/' + QuoteId + '/' +
  isCust + '/' + isAdmin + '/' + AdminId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
// Send Quote Notification
updateQuoteEmailNotification(QuoteId?: string, isCust?: boolean, isAdmin?: boolean, AdminId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/UpdatequoteEmailNotification/' + QuoteId + '/' +
   isCust + '/' + isAdmin + '/' + AdminId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Send Work order Notification
WorkOrderEmailNotification(CloserId?: string, AdminId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/WorkOrderEmailNotification/' + CloserId + '/' + AdminId, null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Send New Ticket  Notification
NewTicketEmailNotification(TicketId?: string, isCust?: boolean, isAdmin?: boolean, AdminId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/TicketEmailNotification/' + TicketId + '/' +
  isCust + '/' + isAdmin + '/' + AdminId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Re-Schedule ticket notification
ReScheduleTicketEmailNotification(oldEngList, TicketId?: string, AdminId?: string, OldDate?: Date, OldTime?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/ReScheduleTicketBodyTemplate/' + TicketId+ '/' + AdminId +'/' + OldDate + '/' + OldTime , oldEngList)
  .pipe(map(
    response => {
      return response;
  }));
}
//Completion ticket notification
StartTicketEmailNotification(TicketId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/StartTicketEmailNotification/' + TicketId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Completion ticket notification
CompletionTicketEmailNotification(CloserId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/CompletionTicketEmailNotification/' + CloserId, null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Completion ticket notification
HoldTicketEmailNotification(CloserId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/HoldTicketEmailNotification/' + CloserId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Cancelled ticket notification
CancelledTicketEmailNotification(TicketId?: string, AdminId?: string) {
  return this.http.post(environment.apiUrl + '/api/Notifications/CancelledTicketEmailNotification/' + TicketId+ '/' + AdminId , null)
  .pipe(map(
    response => {
      return response;
  }));
}
//Re-Allocation ticket notification
ReAllocationTicketEmailNotification(oldEngList, TicketId, isCust, isAdmin, AdminId) {
  return this.http.post(environment.apiUrl + '/api/Notifications/ReAllocationTicketEmailNotificationss/'
  + TicketId + '/' + isCust + '/' + isAdmin + '/' + AdminId , oldEngList)
  .pipe(map(
    response => {
      return response;
  }));
}
}
