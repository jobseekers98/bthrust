import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TicketIssueType } from './ticket.module';
import { Tax } from './quote.module';
import { PaymentMode } from './payment.module';
import { map } from 'rxjs/operators';
import { Brand, Category } from './product.module';
import { Country, GenicDocExt, Smtpsetting } from './genicprofile.module';
@Injectable({
  providedIn: 'root'
})
export class GenericService {
  BrandformData: Brand;
  Brandlist: Brand[];
  countrylist: Country[];
  CategoryformData: Category;
  Categorylist: Category[];
  TicketIssueTypeformData: TicketIssueType;
  TicketIssueTypelist: TicketIssueType[];
  TaxformData: Tax;
  Taxlist: Tax[];
  PaymentModeData: PaymentMode;
  PaymentModelist: PaymentMode[];
  SmtpsettingData: Smtpsetting;
  SmtpsettingList: Smtpsetting[];
  GenicDocExtData: GenicDocExt;
  GenicDocExtList: GenicDocExt[];
  ratingcount: number = 0;
  constructor(private http: HttpClient) { }


  /// *******************************************************************************/
  // Category methods (api) Begin
  postCategoryDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Categories/PostCategory/' + token, this.CategoryformData)
    .pipe(map(response => response));
  }
  putCategoryDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Categories/PutCategory/' + token, this.CategoryformData)
    .pipe(map(response => response));
  }
  // deleteCategoryDetails(Id: number) {
  //   return this.http.delete(environment.apiUrl + '/api/Categories/' + Id , {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  //     observe: 'response' }).toPromise();
  // }
  refrestCategorylist(token: string) {
    return this.http.get(environment.apiUrl + '/api/Categories/GetCategory/' + token).pipe(map(response => response));
  }
  // Category methods (api) End
  /// *******************************************************************************/

  /// *******************************************************************************/
  // Ticket Issue Type (api) Begin
  postTicketIssueTypeDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostTicketIssueType/' + token, this.TicketIssueTypeformData).pipe(map(response => response));
  }
  putTicketIssueTypeDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutTicketIssueType/' + token, this.TicketIssueTypeformData).pipe(map(response => response));
  }
  refrestTicketIssueTypelist(token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetTicketIssueType/' + token).pipe(map(response => response));
  }
  // Ticket Issue Type (api) End
  /// *******************************************************************************/


  /// *******************************************************************************/
  // Tax (api) Begin
  postTaxDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostTax/' + token, this.TaxformData).pipe(map(response => response));
  }
  putTaxDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutTax/' + token, this.TaxformData).pipe(map(response => response));
  }
  refrestTaxlist(token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetTax/' + token).pipe(map(response => response));
  }
  putTaxUpdateStatus(token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutTaxStatusUpdate/' + token + '/' + Id, null).pipe(map(response => response));
  }
  putTaxUpdateIsDefault(token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutTaxIsDefaultUpdate/' + token + '/' + Id, null).pipe(map(response => response));
  }
   // Tax (api) End


  // Payment Mode (api) Begin
  postPaymentModeDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostPaymentMode/' + token, this.PaymentModeData).pipe(map(response => response));
  }
  putPaymentModeDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutPaymentMode/' + token, this.PaymentModeData).pipe(map(response => response));
  }
  refrestPaymentModelist(token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetPaymentMode/' + token).pipe(map(response => response));
  }
  putPaymentModeUpdateStatus(token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutPaymentModStatusUpdate/' + token + '/' + Id, this.PaymentModeData).pipe(map(response => response));
  }
  // Payment Mode (api) End
  /// *******************************************************************************/

    //#region  SMTPSettings
    postSMTPDetails(token: string) {
      return this.http.post(environment.apiUrl + '/api/SMTPSettings/' + token, this.SmtpsettingData).pipe(map(response => { return response; }));
    }
    putSMTPDetails(token: string) {
      return this.http.put(environment.apiUrl + '/api/SMTPSettings/' + token, this.SmtpsettingData).pipe(map(response => { return response; }));
    }
    refreshSMTPList(token: string) {
      return this.http.get(environment.apiUrl + '/api/SMTPSettings/' + token).pipe(map(response => { return response; }));
    }
    SMTPDetailsById(id: number, token: string) {
      return this.http.get(environment.apiUrl + '/api/SMTPSettings/GetSMTPDetaildById/' + id + '/' + token).pipe(map(response => { return response; }));
    }
    //#endregion

  //#region Genic Docs
  public getGenicDocExt(token: string) {
    return this.http.get(environment.apiUrl + '/api/GenicProfile/GetGenicDocExt/' + token).pipe(map(response => { return response; }));
  }
  public postGenicDocExt(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicProfile/PostGenicDocExt/' + token, this.GenicDocExtData).pipe(map(response => { return response; }));
  }
  public putGenicDocExt(token: string) {
    return this.http.put(environment.apiUrl + '/api/GenicProfile/PutGenicDocExt/' + token, this.GenicDocExtData).pipe(map(response => { return response; }));
  }
  public removeGenicDocExt(token: string, Id: number) {
    return this.http.delete(environment.apiUrl + '/api/GenicProfile/PutGenicDocExt/' + token + '/' + Id).pipe(map(response => { return response; }));
  }
  //#endregion

  //#region Rating
  getTicketFreedback(tid: string, rating: number, token: string) {
    return this.http.get(environment.apiUrl + '/api/app/EngineerProfile/GetTicketRating/' + tid +'/' + rating + '/' + token).pipe(map(response => { return response; }));
  }
  putTicketFreedback(tid: string, rating: number, ratingtext: string, token: string) {
    return this.http.put(environment.apiUrl + '/api/app/EngineerProfile/GetTicketRating/' + token, {
      'id': rating,
      'v1': ratingtext,
      'TicketId': tid
  }).pipe(map(response => response));
  }
  //#endregion
}
