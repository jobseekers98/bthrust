import { Injectable } from '@angular/core';
import { RecourceParam, EngineerLocation } from './calendar.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  // CalenderData: Calendar;
  // CalenderList: Calendar[];
  EngineerLocation: EngineerLocation[];
  // CalendarTicketData: CalendarTicket;
  // CalendarTicketList?: CalendarTicket[];
  //CalendarResourceData: CalendarResource;
  ResourceParamData: RecourceParam;
  ResourceView: any;

  constructor(
    private http: HttpClient,
  ) { this.SetAsDefaultValues();
  }
  SetAsDefaultValues() {
    this.EngineerLocation = [];
    this.ResourceParamData = {
      TokenNo: '00000000-0000-0000-0000-000000000000',
      CustomerId : [],
      EngineerId : [],
      Priority: [],
      Status: []
    };
  }
  refrestEngineerMapList(Token: string, date: string) {
    return this.http.get(environment.apiUrl + '/api/Calendar/GetEngineerList/' + Token + '/' + date).pipe(map(response => response));
  }
  refrestGetEngineerLeftTaskList(Token: string, e: string, date: string) {
    return this.http.get(environment.apiUrl + '/api/Calendar/GetEngineerLeftTaskList/' + Token  + '/' + e + '/' + date).pipe(map(response => response));
  }
  refrestTicketMapList(Token: string, date: string) {
    return this.http.get(environment.apiUrl + '/api/Calendar/GetTicketList/' + Token + '/' + date ).pipe(map(response => response));
  }
  public refrestTicketDetailsMapList( token: string, TicketId: string) {
    return this.http.get(environment.apiUrl + '/api/Calendar/GetTicketDetails/' + token + '/' + TicketId).pipe(map(Response =>  Response));
  }
  public refrestResourceViewList1(token: string) {
    return this.http.post(environment.apiUrl + '/api/Calendar/GetResourceViewList/' + token , this.ResourceParamData).pipe(map(Response =>  Response));
  }
  refrestResourceViewList(token: string, obj: RecourceParam) {
    return this.http.post(environment.apiUrl + '/api/Calendar/GetResourceViewList/' + token, obj).pipe(map(Response =>  Response));
}
engineerlocation(Token: string) {
  return this.http.get(environment.apiUrl + '/api/Calendar/GetEngineerHistory/' + Token).pipe(map(Response =>  Response));
}
}
