import { Injectable } from '@angular/core';
import { Invoice, InvoiceItem, InvoiceAttachment, PaymentSummary, InvoiceReminder } from './invoice.module';
import { Property } from './property.model';
import { Tax, Quote } from './quote.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from './ticket.module';
import { environment } from 'src/environments/environment';
import { identifierModuleUrl } from '@angular/compiler';
import { ArrayofKey } from './customer.model';
import { Payment, PaymentMode } from './payment.module';
import { DateTime } from 'luxon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  InvoiceData: Invoice;
  InvoiceList: Invoice[];

  InvoiceItemData: InvoiceItem;
  InvoiceItemList: InvoiceItem[];

  InvoiceAttachmentData: InvoiceAttachment;
  InvoiceAttachmentList: InvoiceAttachment[];

  InvoiceTicketData: Ticket;
  InvoiceTicketList: Ticket[];

  QuoteData: Quote;
  QuoteList: Quote[];

  PropertyList: Property[];

  TaxData: Tax;
  TaxList: Tax[];

  ArrayofKeys: ArrayofKey[];

  TotalPaymentData: Payment;
  PaymentData: Payment;
  PaymentList: Payment[];

  PaymentModeList: PaymentMode[];
  PaymentSummary: PaymentSummary;

  constructor(private http: HttpClient) {
    this.SetAsDefaultValue();
  }
  SetAsDefaultValue() {
    this.InvoiceList = [];
    this.InvoiceItemList = [];
    this.InvoiceAttachmentList = [];
    this.TaxList = [];
    this.InvoiceData = {
      Id: '00000000-0000-0000-0000-000000000000',
      InvoiceId: '',
      InvoiceTitle: '',
      Description: '',
      RefranceNo: '',
      InvoiceUniqueID: 0,
      CustomerId: '00000000-0000-0000-0000-000000000000',
      CustomerName: '',
      CompanyName: '',
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
      TaxName: '',
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
      ClientAccountBalance: true,
      LateStamp: true,
      Status: '', // 1= Draft, 2= SendOut, 3=cancelled
      SendOutStatus: '', // 1= paid , 2=unpaid , 3=overDue
      InvoiceConvertedFrom: '',
      InvoiceConvertedID: '00000000-0000-0000-0000-000000000000',
      InvoiceDate: null,
      InvoiceDueDate: null,
      CreatedUtcDate: null,
      ModifiedUtcDate: null,
      IsReady: false,
      TicketId: '',
      QuoteId: '',
      RequestId: '',
      Tickets: null,
      Customers: null,
      Properties: null,
      InvoiceItemList: [],
      InvoiceAttachmentList: []
    };
    this.InvoiceItemData = {
      Id: 0,
      InvoiceId: '',
      Type: 'Product',
      ItemName: '',
      Qty: null,
      UnitCost: null,
      Total: null,
      ItemDescription: '',
      UniqId: '',
      InWarranty: true,
      WarrantyDays: 0,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date())),
    };
    this.TaxData = {
      Id: 0,
      TaxName: '',
      TaxRate: 0,
      Status: true
    };
    this.InvoiceAttachmentData = {
      Id: 0,
      InvoiceId: '',
      AttachmentExtension: '',
      Attachment: '',
      AttachmentSize: 0,
      CreatedUtcDate: new Date(Date.parse(Date())),
      ModifiedUtcDate: new Date(Date.parse(Date())),
    };
    this.TaxList = [];
    this.InvoiceTicketData = new Ticket();
    this.QuoteData = new Quote();
    this.QuoteList = [];
    this.ArrayofKeys = [];
    this.PaymentData = {
      Id: '00000000-0000-0000-0000-000000000000',
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      InvoiceNo: '',
      PaymentAmount: 0,
      BalanceAmount: 0,
      PaymentDate: new Date(Date.parse(Date())),
      PModeId: 0,
      PaymentMethod: '',
      TransactionId: '',
      PaymentNote: '',
      CreatedDate: new Date(Date.parse(Date())),
      UpdatedDate: new Date(Date.parse(Date())),
      Status: '',
      SendOutStatus: '',
      PaymentModeList: []
    };
    this.TotalPaymentData = {
      Id: '00000000-0000-0000-0000-000000000000',
      InvoiceId: '00000000-0000-0000-0000-000000000000',
      InvoiceNo: '',
      PaymentAmount: 0,
      BalanceAmount: 0,
      PaymentDate: new Date(Date.parse(Date())),
      PModeId: 0,
      PaymentMethod: '',
      TransactionId: '',
      PaymentNote: '',
      CreatedDate: new Date(Date.parse(Date())),
      UpdatedDate: new Date(Date.parse(Date())),
      Status: '',
      SendOutStatus: '',
      PaymentModeList: []
    };
    this.PaymentList = [];
    this.PaymentModeList = [];
    this.PaymentSummary = new PaymentSummary();

  }
  // Get invoice list by customer id
  refreshInvoiceList(token: string) { // Id is a Guid
    this.http.get(environment.apiUrl + '/api/Invoices/Get/' + token).toPromise().then(res =>
      this.InvoiceList = res as Invoice[]);
  }
  refreshInvoiceBtId(id: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/' + id).pipe(map(response => {return response;}));
}
  refreshInvoiceById(invoiceId: string, t: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/GetInvoice/' + invoiceId + '/' + t).pipe(map(response => {return response;}));
 }
  refrestInvoiceListByCustomer(id: string) {
    this.http.get(environment.apiUrl + '/api/Customers/GetInvoiceByCustomer/' + id).toPromise().then(res =>
      this.InvoiceList = res as Invoice[]);
  }
  // Get invoice list by customer id
  getInvoiceTicketList(CustomerId: string, token: string) { // Id is a Guid
    return this.http.get(environment.apiUrl + '/api/Invoices/getInvoiceTicketList/' + CustomerId + '/' + token).pipe(map(response => {return response;}));
  }
  // Get Quote list by customer id
  getInvoiceQuoteList(CustomerId: string, token: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getInvoiceQuoteList/' + CustomerId + '/' + token).pipe(map(response => {return response;}));
  }
  // post quote attachment
  public postInvoiceAttachment() {
    return this.http.post(environment.apiUrl + '/api/Invoices/UploadInvoiceAttachment', this.InvoiceAttachmentData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  // Get: List of Quote Items
  getInvoiceAttachments(id: string, t: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getInvoiceAttachments/' + id + '/' + t).pipe(map(response => {return response;}));
  }
  // post temperaty invoice
  postTempInvoice(token: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/postInvoice/' + token, this.InvoiceData).pipe(map(response => {return response;}));
  }
  public refrestArrayofKeyslist(id: string) {
    this.http.get(environment.apiUrl + '/api/Invoices/GetArrayofKey/' + id).toPromise().then(
      res => this.ArrayofKeys = res as ArrayofKey[]);
  }
  // Insert ticket item list to invoice item list
  posTciketitemToInvoiceItemTicketId(TicketId: string, InvoiceId: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/postTicketItemToInvoiceItem/' + TicketId + '/' + InvoiceId, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }

    // Insert ticket Attachment list to invoice Attachment list
    posTciketAttachmentToInvoiceAttachment(TicketId: string, InvoiceId: string) {
      return this.http.post(environment.apiUrl + '/api/Invoices/postTicketAttachmentToInvoiceAttachment/' + TicketId + '/' + InvoiceId, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
      }).toPromise();
    }

  // Insert ticket item list to invoice item list
  posQuoteItemToInvoiceItem(QuoteId: string, InvoiceId: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/posQuoteItemToInvoiceItem/' + QuoteId + '/' + InvoiceId, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  // Ticket Team methods (api) Begin
  public postInvoiceItemDetails(t: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/posInvoiceItem/' + t, this.InvoiceItemData).pipe(map(response => {return response;}));
  }
  putInvoiceItemDetails() {
    return this.http.put(environment.apiUrl + '/api/Invoices/putInvoiceItem/' + this.InvoiceItemData.Id, this.InvoiceItemData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).pipe();
  }
  // Get: List of Quote Items
  getInvoiceItems(id: string, t: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/GetInvoiceItems/' + id + '/' + t).pipe(map(response => {return response;}));
  }
  public deleteInvoiceItems(id: number) {
    return this.http.delete(environment.apiUrl + '/api/Invoices/deleteInvoiceItem/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  // remove quote attachment
  deleteInvoiceAttachment(id: number) {
    return this.http.delete(environment.apiUrl + '/api/Invoices/deleteInvoiceAttachment/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  downoadInvoicePDF(QuoteId: string, token: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getInvoicePDF/' + QuoteId + '/' + token).pipe(map(Response => Response));
  }
  // post invoice
  putInvoice(t: string) {
    return this.http.put(environment.apiUrl + '/api/Invoices/putInvoice/' + t , this.InvoiceData).pipe(map(response => {return response;}));
  }
  UpdateInvoiceStatus(Id: string, Status: string) {
    return this.http.put(environment.apiUrl + '/api/Invoices/UpdateInvoiceStatus/' + Id + '/' + Status , null).pipe(map(response => {return response;}));
  }
  // Get: List of Payment Mode
  getPaymentModeDetails(t: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getPaymentMode/' + t).pipe(map(response => {return response;}));
  }
  // post payment
  postPayment(t: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/postPayment/' + t, this.PaymentData).pipe(map(response => {return response;}));
  }
  // post temperaty invoice
  getPaymentDetailsByInvoiceNo(InvoiceId: string, t: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getPaymentDetailsByInvoiceNo/' + InvoiceId + '/' + t).pipe(map(response => {return response;}));
  }
  // Edit payment
  getEditPaymentByInvoiceNo(InvoiceId: string) {
    this.http.get(environment.apiUrl + '/api/Invoices/getEditPaymentByInvoiceNo/' + InvoiceId).toPromise().then(res =>
      this.PaymentData = res as Payment);
  }

  // Get payment summary
  getPaymentSummary(InvoiceId: string) {
    return this.http.get(environment.apiUrl + '/api/Invoices/getPaymentSummary/' + InvoiceId).pipe(map(response => {return response;}));
  }
   // email payment receipt
   emailPaymentReceipt(id: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/EmailPaymentReceipt/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
  emailInvoiceCopy(Id: string) {
    return this.http.post(environment.apiUrl + '/api/Invoices/emailInvoiceCopy/' + Id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
    }).toPromise();
  }
   // validate Invoice no on change
   public ValidateInvoiceNo(InvoiceUniqueID: number) {
    return this.http.post(environment.apiUrl + '/api/Invoices/ValidateInvoiceNo/' + InvoiceUniqueID , null , {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response'
      }).pipe();
    }
}
