import { Injectable } from '@angular/core';
import { 
  DashboardCustomer, DashboardTicket, DashboardTotal, DashboardTicketDue, DashboardTicketChart, DashboardTicketPieChart, DashboardAverage, 
  EDTicket, EDTicketChart, EDTicketDue, 
  CDTicket, CDTicketChart, CDTicketDue,
 } from './dashboard.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  DashBoardCustomer: DashboardCustomer;
  DashBoardTicket: DashboardTicket;
  DashboardTotal: DashboardTotal;
  DashboardAverage: DashboardAverage;
  DashboardTicketDue: DashboardTicketDue;
  DashboardTicketChart: DashboardTicketChart;
  DashboardTicketPieChart: DashboardTicketPieChart;
  DashboardTicketPieChartList: DashboardTicketPieChart[];

  // ** Engineers*/
  EDTicket: EDTicket; 
  EDTicketDue: EDTicketDue;
  EDTicketChart: EDTicketChart;

    // ** Customer*/
    CDTicket: CDTicket; 
    CDTicketDue: CDTicketDue;
    CDTicketChart: CDTicketChart;
  constructor(private http: HttpClient) {
    this.SetAsDefaultValues();
   }

  SetAsDefaultValues() {
    this.DashBoardCustomer = {CustomerCount: 0,CustomerPer: 0,CustomerAll: 0,CustomerActive: 0,CustomerTotalAmount: 0,CustomerStatus: 'success'};
    this.DashBoardTicket = {TicketCount: 0,TicketPer: 0,TicketAll: 0,TicketRecurring: 0,TicketTotalAmount: 0,TicketStatus: ''};
    this.DashboardTotal = {TotalTicketOpen: 0,TotalTicketTodayNew: 0,TotalTicketClosedToday: 0,TotalTicketOverDue: 0,TotalEngneer: 0,};
    this.DashboardAverage = {AvegareCount: 0,AvegarePer: 0,AvegarePerTicket: 0,AverageStatus: ''};
    this.DashboardTicketDue = {TicketDueTimeToday: 0,TicketDueTimeTomarrow: 0,TicketDueTimeThisWeek: 0,TicketDueTimeNextWeek: 0,TicketDueTimeNextMonth: 0};
    this.DashboardTicketChart = {TicketChartTodayHeigh: 0,TicketChartTodayMedium: 0,TicketChartTodayLow: 0,TicketChartTomarrowHeigh: 0,TicketChartTomarrowMedium: 0,TicketChartTomarrowLow: 0,TicketChartThisWeekHeigh: 0,TicketChartThisWeekMedium: 0,TicketChartThisWeekLow: 0};
    this.DashboardTicketPieChart = {Count: 0,TicketIssueTypeId: 0,Name: ''};

    this.EDTicket = {TotalTicket: 0,TotalOpenTicket: 0,TotalNewTicketToday: 0,TotalTicketClosedToday: 0,TotalTicketOverDue: 0,TotalUpcoming: 0};
    this.EDTicketDue = {TicketOverDue: 0,TicketDueTimeToday: 0,TicketDueTimeTomarrow: 0,TicketDueTimeThisWeek: 0,TicketDueTimeNextWeek: 0,TicketDueTimeNextMonth: 0};
    this.EDTicketChart = {TicketChartTodayHeigh: 0,TicketChartTodayMedium: 0,TicketChartTodayLow: 0,TicketChartTomarrowHeigh: 0,TicketChartTomarrowMedium: 0,TicketChartTomarrowLow: 0,TicketChartThisWeekHeigh: 0,TicketChartThisWeekMedium: 0,TicketChartThisWeekLow: 0};
    
    this.CDTicket = {TotalTicket: 0,TotalOpenTicket: 0,TotalNewTicketToday: 0,TotalTicketClosedToday: 0,TotalTicketOverDue: 0,TotalUpcoming: 0};
    this.CDTicketDue = {TicketOverDue: 0,TicketDueTimeToday: 0,TicketDueTimeTomarrow: 0,TicketDueTimeThisWeek: 0,TicketDueTimeNextWeek: 0,TicketDueTimeNextMonth: 0};
    this.CDTicketChart = {TicketChartTodayHeigh: 0,TicketChartTodayMedium: 0,TicketChartTodayLow: 0,TicketChartTomarrowHeigh: 0,TicketChartTomarrowMedium: 0,TicketChartTomarrowLow: 0,TicketChartThisWeekHeigh: 0,TicketChartThisWeekMedium: 0,TicketChartThisWeekLow: 0};
  }

  //#region Admin Dashboard methods (api) Begin
  public refrestDashboardCustomer(token: string, key?: string) {
    this.http.get(environment.apiUrl + '/api/DashBoard/Customer/' + token + '/' + key ).toPromise().then(
      res => this.DashBoardCustomer = res as DashboardCustomer);
  }
  public refrestDashboardTicket(token: string, key?: string) {
    this.http.get(environment.apiUrl + '/api/DashBoard/Ticket/' + token + '/' + key ).toPromise().then(
      res => this.DashBoardTicket = res as DashboardTicket);
  }
  public refrestDashboardTotal(token: string) {
    this.http.get(environment.apiUrl + '/api/DashBoard/Total/' + token ).toPromise().then(
      res => this.DashboardTotal = res as DashboardTotal);
  }
  public refrestDashboardAvegareRevenue(token: string, key?: string) {
    this.http.get(environment.apiUrl + '/api/DashBoard/AvegareRevenue/' + token + '/' + key).toPromise().then(
      res => this.DashboardAverage = res as DashboardAverage);
  }
  public refrestDashboardTicketDue(token: string) {
    this.http.get(environment.apiUrl + '/api/DashBoard/TicketDue/' + token ).toPromise().then(
      res => this.DashboardTicketDue = res as DashboardTicketDue);
  }
  public refrestDashboardTicketColumnChart(token: string) {
      return this.http.get(environment.apiUrl + '/api/DashBoard/TicketColumnChart/' + token).pipe(map( Response => Response));
  }
  public refrestDashboardTicketPieChartList(token: string) {
     return this.http.get(environment.apiUrl + '/api/DashBoard/TicketPieChart/' + token).pipe(map( Response => Response));
  }
  //#endregion Admin Dashboard methods (api) Begin


  //#region Engineer Dashboard methods (api) Begin
  public refrestEDTotal(id?: string) {
    return this.http.get(environment.apiUrl + '/api/DashBoard/EDTotal/' + id).pipe(map( Response => Response));
  }
  public refrestEDTicketDue(id?: string) {
    return this.http.get(environment.apiUrl + '/api/DashBoard/EDTicketDue/' + id).pipe(map( Response => Response));
  }
  public refrestEDTicketColumnChart(id?: string) {
      return this.http.get(environment.apiUrl + '/api/DashBoard/EDTicketColumnChart/' + id).pipe(map( Response => Response));
  }
  public refrestEDTicketPieChartList(id?: string) {
      return this.http.get(environment.apiUrl + '/api/DashBoard/EDTicketPieChart/' + id).pipe(map( Response => Response));
  }
 //#endregion Engineer Dashboard methods (api) Begin

  //#region Customer Dashboard methods (api) Begin
  public refrestCDTotal(id?: string) {
    return this.http.get(environment.apiUrl + '/api/DashBoard/CDTotal/' + id).pipe(map( Response => Response));
  }
  public refrestCDTicketDue(id?: string) {
    return this.http.get(environment.apiUrl + '/api/DashBoard/CDTicketDue/' + id).pipe(map( Response => Response));
  }
  public refrestCDTicketColumnChart(id?: string) {
      return this.http.get(environment.apiUrl + '/api/DashBoard/CDTicketColumnChart/' + id).pipe(map( Response => Response));
  }
  public refrestCDTicketPieChartList(id?: string) {
      return this.http.get(environment.apiUrl + '/api/DashBoard/CDTicketPieChart/' + id).pipe(map( Response => Response));
  }
 //#endregion Engineer Dashboard methods (api) Begin

 //#region 
  public getTicketheaderCount(token: string) {
    return this.http.get(environment.apiUrl + '/api/DashBoard/GetTicketHeaderCount/' + token).pipe(map( Response => Response));
  }
 //#endregion
}
