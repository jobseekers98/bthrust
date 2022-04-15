import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote, QuoteItem, QuoteAttachment, Tax, QuoteReminder } from './quote.module';
import { environment } from 'src/environments/environment';
import { Property } from './property.model';
import {Customer, ArrayofKey} from './customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  QuoteData: Quote;
  QuoteList: Quote[];
  QuoteLocalList: Quote[];

  QuoteItemData: QuoteItem;
  QuoteItemList: QuoteItem[];

  QuoteAttachmentData: QuoteAttachment;
  QuoteAttachmentList: QuoteAttachment[];

  PropertyList: Property[];
  TextData: Tax;
  TextList: Tax[];

  ArrayofKeys: ArrayofKey[];
  QuoteReminder: QuoteReminder;
  QuoteReminderList: QuoteReminder[];
  constructor(
    private http: HttpClient
  ) {
    this.SetAsDefaultValue();
  }
  SetAsDefaultValue() {
    this.QuoteList = [];
    this.QuoteItemList = [];
    this.QuoteAttachmentList = [];
    this.PropertyList = [];
    this.QuoteData = {
      Id: '00000000-0000-0000-0000-000000000000',
      QuoteId: '',
      JobTitle: '',
      QuoteUniqueID: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      CustomerName: 'Customer Name?',
      CompanyName: 'COMPANY NAME?',
      PropertyId: '00000000-0000-0000-0000-000000000000',
      CustomerContactNo: '',
      CustomerEmail: '',
      CustomerAddress: '',
      ClientRemark: '',
      SubTotal: 0,
      DiscountType: 0,
      DiscountTextValue: 0,
      DiscountAmount: 0,
      TaxId: 0,
      TaxRate: 0,
      TaxAmount: 0,
      ReqDepositeType: 0,
      ReqDepositeTextValue: 0,
      ReqDepositeAmount: 0,
      NetAmount: 0,
      InternalNotes: 'Should there be further clarifications required, please do not hesitate to contact the undersigned' +
      'We will gladly do our best to help you.' +
      'Yours faithfully',
      ClientViewQty: true,
      ClientViewUnitCost: true,
      ClientViewLineItemTotal: true,
      ClientViewTotal: true,
      LinkToJob: true,
      LinkToInvoice: true,
      Status: 1, // 1= Draft, 2= Sent, 3=Accepted, 4= Rejected, 5=Cancelled
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      InvoiceNo: '',
      TicketId: '00000000-0000-0000-0000-000000000000',
      TicketNo: '',
      Rating: 0,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date())),
      IsReady: false,
      SalesRepresentative: '',
      PreparedBy: '',
      DID: '',
      FAX: '',
      CCName: '',
      CCContact: '',
      CreatedBy: null,
      QuoteTermsAndCondition: '',
      Attention: '',
      SalesPersonSignature: '',
      CustomerSignature: '',
      CustomerSignatureRemark: '',
      QuoteItemList: [],
      QuoteAttachmentList: [],
      TaxList: [],
      SMTPId: 0
    };
    this.QuoteItemData = {
      Id: 0,
      Type: 'Product',
      QuoteId: '00000000-0000-0000-0000-000000000000',
      ItemName: '',
      Qty: null,
      UnitCost: null,
      Total: null,
      ItemDescription: '',
      UniqId: '',
      InWarranty: true,
      WarrantyDays: 365,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date())),
    };
    this.TextData = {
      Id: 0,
      TaxName: '',
      TaxRate: 0,
      Status: true,
      Description: '',
      IsDefault: false
    };
    this.QuoteAttachmentData = {
      Id: 0,
      QuoteId: '',
      AttachmentExtension: '',
      Attachment: '',
      AttachmentSize: 0,
      CreatedUtcDate: new Date(),
      ModifiedUtcDate: new Date()
    };
    this.TextList = [];
  }
  setDetaultQuoteData() {
    this.QuoteData = {
      Id: '00000000-0000-0000-0000-000000000000',
      QuoteId: '',
      JobTitle: '',
      QuoteUniqueID: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      CustomerName: 'Customer Name?',
      CompanyName: '',
      PropertyId: '00000000-0000-0000-0000-000000000000',
      CustomerContactNo: '',
      CustomerEmail: '',
      ClientRemark: '',
      SubTotal: 0,
      DiscountType: 0,
      DiscountTextValue: 0,
      DiscountAmount: 0,
      TaxId: 0,
      TaxRate: 0,
      TaxAmount: 0,
      ReqDepositeType: 0,
      ReqDepositeTextValue: 0,
      ReqDepositeAmount: 0,
      NetAmount: 0,
      InternalNotes: '',
      ClientViewQty: true,
      ClientViewUnitCost: true,
      ClientViewLineItemTotal: true,
      ClientViewTotal: true,
      LinkToJob: true,
      LinkToInvoice: true,
      Status: 1, // 1= Open, 2= Pending, 3=Accepted, 4= Delivered, 5=Cancelled, 0=Not Available
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      InvoiceNo: '',
      TicketId: '00000000-0000-0000-0000-000000000000',
      TicketNo: '',
      Rating: 0,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date())),
      IsReady: false,
      Attention: '',
      AttachmentPDF: '',
      CreatedBy: null,
      QuoteItemList: [],
      QuoteAttachmentList: [],
    };
  }
  getTaxList(token: string) {
    return this.http.get(environment.apiUrl + '/api/Quotes/GetTaxes/' + token).pipe(map(response => {return response; }));
  }
  // Get: List of Quotes
  getQuotes(token: string) {
    this.http.get(environment.apiUrl + '/api/Quotes/GetQuotes/' + token).toPromise().then(res =>
      this.QuoteList = this.QuoteLocalList = res as Quote[]);
  }
  getrefrestQuoteListSync(token: string) {
    return this.http.get(environment.apiUrl + '/api/Quotes/GetQuotes/' + token).pipe(map(response => {return response; }));
}
  refrestQuoteListByCustomer(id: string) {
    this.http.get(environment.apiUrl + '/api/Customers/GetQuotesByCustomer/' + id).toPromise().then(res =>
      this.QuoteList = this.QuoteLocalList = res as Quote[]);
  }
  // Get: List of Quote Items
  getQuoteItems(token: string, id: string) {
    return this.http.get(environment.apiUrl + '/api/Quotes/GetQuoteItems/' + token + '/' + id).pipe(map(response => response));
  }
  // Get: List of Quote Items
  getQuoteAttachments(id: string) {
    this.http.get(environment.apiUrl + '/api/Quotes/getQuoteAttachments/' + id).toPromise()
      .then(res => this.QuoteAttachmentList = res as QuoteAttachment[]);
  }
  // Get: Customer property
  getCustomerProperty(id: string) {
    this.http.get(environment.apiUrl + '/api/Quotes/getCustomerProperty/' + id).toPromise().then(res =>
      this.PropertyList = res as Property[]);
  }
  postTempQuote(token: string) {
    return this.http.post(environment.apiUrl + '/api/Quotes/postQuote/' + token, this.QuoteData).pipe(map(response => response));
  }
  public deleteTemporaryQuote(id: string) {
    return this.http.delete(environment.apiUrl + '/api/Quotes/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}), observe: 'response' }).toPromise();
  }
  putQuote(token: string) {
    return this.http.put(environment.apiUrl + '/api/Quotes/putQuote/' + token, this.QuoteData).pipe(map(response => response));
  }
     // Insert ticket item list to invoice item list
    copyQuotation(tempQuoteId?: string, fromQuoteId?: string) {
      return this.http.post(environment.apiUrl + '/api/Quotes/copyQuotation/' + tempQuoteId + '/' + fromQuoteId, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
      }).toPromise();
    }
  putQuoteItemDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Quotes/putQuoteItem/' + token , this.QuoteItemData).pipe(map(response => response));
  }
  // remove quote items
  deleteQuoteItem(token: string, id: number) {
    return this.http.delete(environment.apiUrl + '/api/Quotes/deleteQuoteItem/' + token + '/' + id).pipe(map(response => response));
  }
  // post quotation attachment
  public postQuoteItemDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Quotes/postQuoteItem/' + token , this.QuoteItemData).pipe(map(response => response));
  }
  UpdateQuoteStatus(Id: string, Status: number, token: string) {
    return this.http.put(environment.apiUrl + '/api/Quotes/UpdateQuoteStatus/' + Id + '/' + Status + '/' + token, null).pipe(map(response => response));
  }
  // Insert Quote item list to Ticket item list
  posQuoteItemToTicketItem(token: string, QuoteId: string, TicketId: string) {
    return this.http.post(environment.apiUrl + '/api/Quotes/posQuoteItemToTicketItem/' + token + '/' + QuoteId + '/' + TicketId, null).pipe(map(Response => {return Response;}));
  }
  emailQuoteCopy(Id: string, emailText: string) {
    return this.http.post(environment.apiUrl + '/api/Quotes/emailQuoteCopy/' + Id + '/' + emailText, null).pipe(map(Response => {return Response;}));
  }
  sendForClientSign(Id: string, emailText: string) {
    return this.http.post(environment.apiUrl + '/api/Quotes/SentQuoteLinkForSignature/' + Id + '/' + emailText, null).pipe(map(Response => {return Response;}));
  }
  // validate quote no on change
  public ValidateQuoteNo(QuoteUniqueID: number) {
    return this.http.post(environment.apiUrl + '/api/Quotes/ValidateQuoteNo/' + QuoteUniqueID , null , {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
      }).pipe();
    }
    public refrestArrayofKeyslist(id: string) {
      this.http.get(environment.apiUrl + '/api/Quotes/GetArrayofKey/' + id).toPromise().then(
        res => this.ArrayofKeys = res as ArrayofKey[]);
    }

downoadQuotationPDF(QuoteId: string, token: string) {
  return this.http.get(environment.apiUrl + '/api/Quotes/getQuotaionPDF/' + QuoteId + '/' + token).pipe(map(Response => Response));
}

getQuoteDetails(Id) {
  return this.http.get(environment.apiUrl + '/api/Quotes/GetQuote/' + Id).pipe(map(Response => {return Response;}));
}
getQuoteDetailsForSign(Id, token) {
  return this.http.get(environment.apiUrl + '/api/Quotes/GetQuoteForSign/' + Id + '/' + token).pipe(map(Response => {return Response;}));
}
updateQuoteSignature(Token: string) {
  return this.http.put(environment.apiUrl + '/api/Quotes/putQuoteSignature/' + Token, this.QuoteData).pipe(map(Response => {return Response;}));
}
updateQuoteSignaturewithRemark(Token: string) {
  return this.http.put(environment.apiUrl + '/api/Quotes/putQuoteSignatureWithRemarks/' + Token, this.QuoteData).pipe(map(Response => {return Response;}));
}
}
