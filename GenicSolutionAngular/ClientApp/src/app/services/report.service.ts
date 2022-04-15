import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  ReportsFilter, ReportsWarranty, ReportsUnWarranty, ProductWarranty } from './report.module';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  ReportsFilter: ReportsFilter;

  ReportsWarranty: ReportsWarranty;
  ReportsWarrantyList: ReportsWarranty[];
  ReportsWarrantyListActive: ReportsWarranty[];
  ReportsWarrantyListExpire: ReportsWarranty[];

  ReportsUnWarrantyList: ReportsUnWarranty[];

  ProductWarranty: ProductWarranty;
  constructor(private http: HttpClient) {
    this.ProductWarranty = new ProductWarranty();
   }
    public refrestTicketReports(token: string, sdate: string, edate: string, type: string, eid: string, status) {
      return this.http.get(environment.apiUrl + '/api/Reports/TicketReports/' + token + '/' + sdate + '/' + edate +
      '/' + type + '/' + eid + '/' + status).pipe(map(
        response => {
        return response; }));
    }
    public refrestEngineerReports(token: string, sdate: string, edate: string, type: string) {
      return this.http.get(environment.apiUrl + '/api/Reports/EngineerReports/'  + token + '/' + sdate + '/' + edate +
      '/' + type ).pipe(map( response => {
        return response; }));
    }
    public refrestEngineerwiseReports(token: string, sdate: string, edate: string,eid: string ) {
      return this.http.get(environment.apiUrl + '/api/Reports/EngineerWiseReports/'  + token + '/' + sdate + '/' + edate + '/' + eid  ).pipe(map( response => {
        return response; }));
    }
    public refrestEngineerAttendanceReports(token: string, sdate: string, edate: string,eid: string ) {
      return this.http.get(environment.apiUrl + '/api/Reports/EngineerAttendanceReport/'  + token + '/' + sdate + '/' + edate + '/' + eid  ).pipe(map( response => {
        return response; }));
    }
    public refrestEngineerwise2Reports(token: string, sdate: string, edate: string,eid: string ) {
      return this.http.get(environment.apiUrl + '/api/Reports/EngineerWise2Reports/'  + token + '/' + sdate + '/' + edate + '/' + eid  ).pipe(map( response => {
        return response; }));
    }
    public refrestVisitsReports(token: string, sdate: string, edate: string, type: string, eid: string, tid: string) {
      return this.http.get(environment.apiUrl + '/api/Reports/Visits/'  + token + '/' + sdate + '/' + edate + '/' +
      type + '/' + eid + '/' + tid).pipe(map(
         response => {
        return response; }));
    }
    public refrestWarrantyList(token: string, SDate: string, EDate: string, CId: string, PId: string, UId: string) {
      return this.http.get(environment.apiUrl + '/api/Reports/Warranty/' + token + '/' + SDate + '/' + EDate + '/' +
                          CId + '/' + PId + '/' + UId).pipe(map(response => response));
  }
  public WarrantyForMaintance(token: string, CId: string, UId: string) {
    return this.http.get(environment.apiUrl + '/api/Reports/WarrantyForMaintance/' + token + '/' + CId + '/' + UId)
    .pipe(map(response => response));
}
  public refrestUnWarrantyList(token: string, strSearch: string) {
    return this.http.get(environment.apiUrl + '/api/Reports/WithOutWarranty/' + token + '/' + strSearch)
    .pipe(map(response => response));
}
getproductById(token: string, Id: number) {
  return this.http.get(environment.apiUrl + '/api/Tickets/GetTicketItemById/' + token + '/' + Id)
  .pipe(map(  response => response));
}
getproductwarrantyById(token: string, Id: number) {
  return this.http.get(environment.apiUrl + '/api/Products/GetProductWarrantyById/' + token + '/' + Id)
  .pipe(map(  response => response));
}
public postProductWarranty(token: string) {
  return this.http.post(environment.apiUrl + '/api/Products/AddItemInProduct/' + token, this.ProductWarranty, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
  }).pipe();
}
public putProductWarranty(token: string) {
  return this.http.put(environment.apiUrl + '/api/Products/UpdateItemInProduct/' + token, this.ProductWarranty, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
  }).pipe();
}
public deleteProductWarranty(token: string, id: number) {
  return this.http.delete(environment.apiUrl + '/api/Products/Deleteproductwarranty/' + token + '/' + id, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
  }).toPromise();
}
}

