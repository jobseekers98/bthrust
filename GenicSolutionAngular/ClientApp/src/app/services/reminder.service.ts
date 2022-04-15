import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TicketReminder } from './ticket.module';
import { QuoteReminder } from './quote.module';
import { InvoiceReminder } from './invoice.module';
@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  TicketReminder: TicketReminder;
  TicketReminderList: TicketReminder[];
  QuoteReminder: QuoteReminder;
  QuoteReminderList: QuoteReminder[];
  InvoiceReminder: InvoiceReminder;
  InvoiceReminderList: InvoiceReminder[];
  constructor(private http: HttpClient) {
    this.TicketReminder = {
      Id: 0,
      TicketId: '00000000-0000-0000-0000-000000000000',
      Subject: '',
      Body: '',
      MailTo: '',
      RecurringStartDate: null,
      RecurringEndDate: null,
      Duration: 0,
      VisitFrequency: 0,
      ReminderDate: null,
      IsActive: true
    }
    this.InvoiceReminder = {
      Id: 0,
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      Subject: '',
      Body: '',
      MailTo: '',
      RecurringStartDate: null,
      RecurringEndDate: null,
      Duration: 0,
      VisitFrequency: 0,
      ReminderDate: null,
      IsActive: true
    }
    this.QuoteReminder = {
      Id: 0,
      QuoteId: '00000000-0000-0000-0000-000000000000',
      Subject: '',
      Body: '',
      MailTo: '',
      RecurringStartDate: null,
      RecurringEndDate: null,
      Duration: 0,
      VisitFrequency: 0,
      ReminderDate: null,
      IsActive: true
    }
   }
  public getReminder(t: string, r: string, type: string) {
    return this.http.get(environment.apiUrl + '/api/Reminder/GetReminders/' + t + '/' + r + '/' + type).pipe(map(response => {return response;}));
  }
  public getAllReminders(t: string, type: string) {
    return this.http.get(environment.apiUrl + '/api/Reminder/GetAllReminders/' + t + '/' + type).pipe(map(response => {return response;}));
  }
  public putReminderStatus(t: string, id: number, type: string) {
    return this.http.put(environment.apiUrl + '/api/Reminder/PutReminderStatus/' + t + '/' + id + '/' + type, null).pipe(map(response => {return response;}));
  }
  public postQuoteReminder(t: string, type: string) {
    return this.http.post(environment.apiUrl + '/api/Reminder/PostReminder/' + t + '/' + type, this.QuoteReminder).pipe(map(response => {return response;}));
  }
  public removeQuoteReminder(t: string, id: number, qid: string, type: string) {
    return this.http.delete(environment.apiUrl + '/api/Reminder/DeleteQuotationReminder/' + t + '/' + id  + '/' + qid + '/' + type).pipe(map(response => {return response;}));
  }
}

