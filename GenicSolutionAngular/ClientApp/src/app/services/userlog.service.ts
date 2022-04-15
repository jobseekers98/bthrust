import { Injectable } from '@angular/core';
import { UserLog, LogParam, TicketTimeSheet } from '../services/userlog.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserlogService {
UserLogData: UserLog;
UserLogList: UserLog[];
UserLogLocalList: UserLog[];
LogParam: LogParam;
TicketTimeSheetList: TicketTimeSheet[];
  constructor(
    public http: HttpClient
  ) {
    this.UserLogData = {
      Id : '00000000-0000-0000-0000-000000000000',
      IP: '',
      UserId: '00000000-0000-0000-0000-000000000000',
      UserName: '',
      Module: '',
      ModuleId: '00000000-0000-0000-0000-000000000000',
      ActionType: '',
      Description: '',
      RecentDescription: '',
      LogDate: new Date(Date.parse(Date())),
      CreatedDate: new Date(Date.parse(Date())),
      ActivityTimeSpan: null
    };
    this.UserLogList = [];
    this.LogParam = {
      User: 'All',
      Module: 'All',
      Action: 'All',
      FromDate: new Date(Date.parse(Date())),
      ToDate: new Date(Date.parse(Date()))
    };
    this.TicketTimeSheetList = [];
   }
     // Get: userlog list Start now
     getUserLog(Token: string) {
      return this.http.get(environment.apiUrl + '/api/Log/getUserLogs/' + Token).pipe(map(response => {return response;}));
    }

  getTicketLogs(TicketId: string, Module: string, Token: string) {
    return this.http.get(environment.apiUrl + '/api/Log/getTicketLogs/' + TicketId + '/' + Module + '/' + Token).pipe(map(response => {return response;}));
  }

// post user log
  postUserLog(UserId: string, UserName: string, Module: string, ModuleId: string,
              ActionType: string, Description: string , RecentDescription: string ) {
    this.UserLogData.UserId = UserId;
    this.UserLogData.UserName = UserName;
    this.UserLogData.LogDate = new Date(Date.parse(Date()));
    this.UserLogData.CreatedDate = new Date(Date.parse(Date()));
    this.UserLogData.Module = Module;
    this.UserLogData.ModuleId = ModuleId;
    this.UserLogData.ActionType = ActionType;
    this.UserLogData.Description = Description;
    this.UserLogData.RecentDescription = RecentDescription;
    return this.http.post(environment.apiUrl + '/api/Log/postUserLog', this.UserLogData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      observe: 'response' }).pipe();
  }
// Get: Recent activity
getRecentActivities(Token: string) {
this.http.get(environment.apiUrl + '/api/Log/getRecentActivities/' + Token, ).toPromise().then(res =>
  this.UserLogList = res as UserLog[]);
}
// Get: time sheet
getTicketTimeSheet(TicketId: string, Token: string) {
  return this.http.get(environment.apiUrl + '/api/Log/GetTicketTimesheet/' + TicketId+ '/' +Token)
  .pipe(map(
    response => {
      return response;
  }));
}

// Get: Engineer time sheet
GetEngineerTicketTimesheet(EngineerId: string, Token: string) {
  return this.http.get(environment.apiUrl + '/api/Log/GetEngineerTicketTimesheet/' + EngineerId+ '/' +Token)
  .pipe(map(
    response => {
      return response;
  }));
}
}
