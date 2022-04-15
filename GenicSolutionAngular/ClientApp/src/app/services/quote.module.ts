import { ReminderBase } from "./CommanExtendsClass.module";

export class Quote {
    Id?: string;
    QuoteId?: string;
    JobTitle?: string;
    QuoteUniqueID?: number;
    CustomerId?: string; // Guid
    CustomerName?: string;
    CompanyName?: string;
    PropertyId?: string;
    CustomerContactNo?: string;
    CustomerEmail?: string;
    CustomerAddress?: string;
    ClientRemark?: string;
    SubTotal?: number;
    DiscountType?: number;
    DiscountTextValue?: number;
    DiscountAmount?: number;
    TaxId?: number;
    TaxRate?: number;
    TaxAmount?: number;
    ReqDepositeType?: number;
    ReqDepositeTextValue?: number;
    ReqDepositeAmount?: number;
    NetAmount?: number;
    InternalNotes?: string;
    ClientViewQty?: boolean;
    ClientViewUnitCost?: boolean;
    ClientViewLineItemTotal?: boolean;
    ClientViewTotal?: boolean;
    LinkToJob?: boolean;
    LinkToInvoice?: boolean;
    Status?: number; // 1= Draft, 2= Pending, 3=Accepted, 4= Rejected, 5=Cancelled
    InvoiceId?: string;
    InvoiceNo?: string;
    TicketId?: string;
    TicketNo?: string;
    Rating?: number;
    CreatedUtcDate?: Date;
    ModifiedUtcDate?: Date;
    IsReady?: boolean;
    SalesRepresentative?: string;
    PreparedBy?: string;
    CreatedBy?: string;
    DID?: string;
    FAX?: string;
    CCName?: string;
    CCContact?: string;
    QuoteTermsAndCondition?: string;
    Attention?: string;
    AttachmentPDF?: string;
    SalesPersonSignature?: string;
    CustomerSignature?: string;
    CustomerSignatureRemark?: string;
    QuoteItemList?: QuoteItem[];
    QuoteAttachmentList?: QuoteAttachment[];
    TaxList?: Tax[];
    SMTPId?: number;
    QuoteReminder?: QuoteReminder[];
}
export class QuoteItem {
    Id?: number;
    Type?: string;
    QuoteId?: string;
    ItemName?: string;
    Qty?: number;
    UnitCost?: number;
    Total?: number;
    ItemDescription?: string;
    CreatedUtcDate?: Date;
    ModifiedUtcDate?: Date;
    UniqId?: string;
    InWarranty?: boolean;
    WarrantyDays?: number;
}
export class QuoteAttachment {
    Id?: number;
    QuoteId?: string;
    AttachmentExtension: string;
    Attachment?: string;
    AttachmentSize?: number;
    CreatedUtcDate?: Date;
    ModifiedUtcDate?: Date;
}
export class QuoteSummary {
    TotalQuotaton?: number;
    AcceptedQuoteValue?: number;
    PendingQuoteValue?: number;
    RejectedQuoteValue?: number;
}
export class Tax {
    Id?: number;
    TaxName?: string;
    TaxRate?: number;
    Status?: boolean;
    IsDefault?: boolean;
    Description?: string;
}
export class QuoteReminder extends ReminderBase {
    Id?: number; 
    QuoteId?: string;
}
