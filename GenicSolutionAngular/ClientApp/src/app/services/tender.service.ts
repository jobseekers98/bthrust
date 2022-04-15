import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Tender, TenderFilter, TenderMasterData } from './tender.module';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  formData: Tender;
  TenderList: Tender[];
  TenderLocalList: Tender[];
  TenderMasterData: TenderMasterData;
  TenderMasterDataList: TenderMasterData[];
  TenderMasterDataList1: TenderMasterData[];
  TenderMasterDataList2: TenderMasterData[];
  TenderFilterData: TenderFilter;
  constructor(private http: HttpClient) {
    this.RunBlankModule();
  }
  RunBlankModule() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      PublishedDate: null,
      TenderSourceId: 0,
      TenderName: '',
      Quantity: '',
      TenderRefNo: '',
      TenderClosing: null,
      Sitewalk: false,
      SitewalkDate: null,
      SitewalkAddress: '',
      SitewalkPOC: '',
      ModeOfSubmissionId: 0,
      Workhead: '',
      Remarks: '',
      Status: 'Submitted',
      TenderSource: '',
      Buyer: '',
      ModeOfSubmission: ''
    };
    this.TenderMasterData = {
      Id: 0,
      Name: '',
      Type: ''
    };
    this.TenderList = [];
    this.TenderLocalList = [];
    this.TenderMasterDataList = [];
    this.TenderFilterData = {
      DateFrom: '',
      DateTo: '',
      Status : '',
      WhichDate: '',
      IsReady: false
    };
  }
  /*******************************************************************************/
  getTenderList(token: string) {
      return this.http.get(environment.apiUrl + '/api/Tenders/GetTenderData/' + token).pipe(map(response => response));
  }
  getTenderFilterList(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tenders/GetTenderFilterData/' + token, this.TenderFilterData)
    .pipe(map(response => response));
  }
  getTenderDetailsById(token: string, Id: string, ) {
    return this.http.get(environment.apiUrl + '/api/Tenders/GetTenderById/' + token + '/' + Id).pipe(map(response => response));
  }
  putTenderDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tenders/PutTenderData/' + token, this.formData).pipe(map( response => response));
  }
  postTenderDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tenders/PostTenderData/' + token, this.formData).pipe(map( response => response));
  }
  removeTenderDetails(token: string, tenderid: string) {
    return this.http.put(environment.apiUrl + '/api/Tenders/RemoveTenderData/' + token + '/' + tenderid, null).pipe(map( response => response));
  }
  getTenderPDF(token: string) {
    return this.http.get(environment.apiUrl + '/api/Tenders/getTenderPDF/' + token).pipe(map(response => response));
  }

  //#region Teneder Master Data
  getTenderMasterDataList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Tenders/GetTenderMasterData/' + token).pipe(map(response => response));
    }
  putTenderMasterDataDetails(token: string) {
      return this.http.put(environment.apiUrl + '/api/Tenders/PutTenderMasterData/' + token, this.TenderMasterData)
      .pipe(map( response => response));
    }
  postTenderMasterDataDetails(token: string) {
      return this.http.post(environment.apiUrl + '/api/Tenders/PostTenderMasterData/' + token, this.TenderMasterData)
      .pipe(map( response => response));
    }
  //#endregion

  //#region Tender List for Calendar
    getTenderListForCalendar(token: string) {
      return this.http.get(environment.apiUrl + '/api/Tenders/GetTenderDataForCalendar/' + token).pipe(map(response => response));
    }
  //#endregion
   //#region Teneder Master Data
  //  getCustomerList(token: string) {
  //   return this.http.get(environment.apiUrl + '/api/Tenders/GetCustomerList/' + token).pipe(map(response => response));
  //   }
   //#endregion
}
