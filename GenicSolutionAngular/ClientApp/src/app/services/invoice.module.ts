import { Ticket } from './ticket.module';
import { Customer } from './customer.model';
import { Property } from './property.model';
import { ReminderBase } from './CommanExtendsClass.module';

export class Invoice {
    Id: string;
    InvoiceId: string;
    InvoiceTitle: string;
    Description: string;
    RefranceNo: string;
    InvoiceUniqueID: number;
    CustomerId: string; // Guid
    CustomerName: string;
    CompanyName: string;
    PropertyId?: string;
    CustomerContactNo: string;
    CustomerEmail: string;
    CustomerAddress?: string;
    ClientRemark: string;
    SubTotal: number;
    DiscountType: number;
    DiscountTextValue: number;
    DiscountAmount: number;
    TaxId: number;
    TaxName: string;
    TaxRate: number;
    TaxAmount: number;
    ReqDepositeType: number;
    ReqDepositeTextValue: number;
    ReqDepositeAmount: number;
    NetAmount: number;
    InternalNotes: string;
    ClientViewQty: boolean;
    ClientViewUnitCost: boolean;
    ClientViewLineItemTotal: boolean;
    ClientAccountBalance: boolean;
    LateStamp: boolean;
    Status: string; // 1= Draft, 2= SendOut, 3=cancelled
    SendOutStatus: string; // 1= paid , 2=unpaid , 3=overDue
    InvoiceConvertedFrom: string;
    InvoiceConvertedID: string;
    InvoiceDate: string;
    InvoiceDueDate: string;
    CreatedUtcDate: string;
    ModifiedUtcDate: string;
    IsReady: boolean;
    TicketId: string;
    QuoteId: string;
    RequestId: string;
    Tickets?: Ticket;
    Customers?: Customer;
    Properties?: Property;
    InvoiceItemList: InvoiceItem[];
    InvoiceAttachmentList: InvoiceAttachment[];
    InvoiceReminder?: InvoiceReminder[];
}
export class InvoiceItem {
    Id: number;
    InvoiceId: string;
    ItemName: string;
    Type: string;
    Qty: number;
    UnitCost: number;
    Total: number;
    ItemDescription: string;
    UniqId?: string;
    InWarranty?: boolean;
    WarrantyDays?: number;
    CreatedUtcDate: Date;
    ModifiedUtcDate: Date;
}
export class InvoiceAttachment {
    Id: number;
    InvoiceId: string;
    AttachmentExtension: string;
    Attachment: string;
    AttachmentSize: number;
    CreatedUtcDate: Date;
    ModifiedUtcDate: Date;
}
export class InvociceSummary {
    TotalInvoice: number;
    DeliverInvoice: number;
    PendingInvoice: number;
    RejectedInvoice: number;
}
export class PaymentSummary {
    InvoiceId: string;
    InvoiceNo: number;
    InvoiceDate: Date;
    InvoiceAmount: number;
    PaymentDate: Date;
    PaymentAmount: number;
    PaymentMode: string;
}
export class InvoiceReminder extends ReminderBase {
    Id?: number; 
    InvoiceId?: string;
}
