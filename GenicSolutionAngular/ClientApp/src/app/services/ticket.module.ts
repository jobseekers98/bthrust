import { ReminderBase } from './CommanExtendsClass.module';
import { Customer } from './customer.model';
import { Property } from './property.model';

export class Ticket {
    Id?: string;
    RecurringId?: number;
    TicketUniqueID?: number;
    TicketId?: string;
    CustomerId?: string;
    PropertyId?: string;
    CustomerName?: string;
    CustomerContactNo: string;
    CustomerEmail?: string;
    CustomerAddress?: string;
    CustomerCompanyName?: string;
    Title?: string;
    Description?: string;
    TicketType?: string;
    OneOffScheduled?: boolean;
    OneOffAppointmentDate?: string;
    OneOffStartTime?: string;
    OneOffEndTime?: string;
    AppointmentStart: string;
    AppointmentEnd: string;
    OneOffInvoice?: boolean;
    RecurringScheduled?: boolean;
    RecurringStartDate?: string;
    RecurringEndDate?: string;
    RecurringDuration?: number;
    RecurringVisitFrequency?: number;
    RecurringTotalVisit?: number;
    RecurringInvoice?: string;
    Status?: string;
    InternalNoteDescription?: string;
    TermsAndConditions?: string;
    InternalNoteQuote?: boolean;
    InternalNoteTicket?: boolean;
    InternalNoteInvoice?: boolean;
    InternalNoteAllowPayment?: boolean;
    WhenInvoiceClosed?: boolean;
    CreatedUtcDate?: string;
    Rescheduled?: boolean;
    Reallocate?: boolean;
    RequestId?: string;
    IsRequestExists?: boolean;
    Priority?: number;
    OverDueDays?: number;
    NetAmount?: number;
    InvoiceId?: string;
    InvoiceNo?: string;
    QuoteId?: string;
    TicketConvertedFrom?: string;
    TicketConvertedID?: string;
    Customers?: Customer;
    Properties?: Property;
    TicketTeams?: TicketTeam[];
    TicketTeamList?: TicketTeam[];
    TicketItems?: TicketItem[];
    TicketItemList?: TicketItem[];
    TicketAttachments?: TicketAttachment[];
    TicketAttachmentList?: TicketAttachment[];
    TicketWiseIssueType?: TicketWiseIssueType[];
    TicketClosedDate?: string;
    CreatedBy?: string;
    SMTPId?: number;
    DepartmentName?: string;
    TicketReminder?: TicketReminder[];
    Rating?: number;
    RatingFeedback?: string;
}
export class TicketTeam {
    Id?: number;
    TicketId?: string;
    EngineerId?: string;
    EngineerName?: string;
    EngineerLogo?: string;
    TicketAssignDate?: Date;
    Type?: number;
}
export class TicketItem {
    Id?: number;
    TicketId?: string;
    ItemName?: string;
    Type?: string;
    ItemDescription?: string;
    ItemQuantity?: number;
    ItemUnitCost?: number;
    ItemTotalCost?: number;
    IsPriseRevised?: boolean;
    ItemAddredBy?: boolean;
    ItemAddredById?: string;
    ItemAddredByName?: string;
    ItemBatch?: string;
    BatchQty?: string;
    UniqId?: string;
    InWarranty?: boolean;
    WarrantyDays?: number;
    InstallationDate?: Date;
    IsMaintance?: boolean;
    MaintanceRemarks?: string;
}
export class TicketAttachment {
    Id?: number;
    AttachmentName?: string;
    TicketId?: string;
    AttachmentPath?: string;
    AttachmentSize?: number;
}
export class TicketIssueType {
    Id?: number;
    Name?: string;
    IsAssigned: boolean;
}
export class TicketWiseIssueType {
    Id?: number;
    TicketId?: string;
    TicketIssueTypeId?: number;
    IssueTypeName?: string;
}
export class TicketTimer {
    ID?: number;
    EngineerID?: string;
    TicketID?: string;
    StartDate?: Date;
    EndDate?: Date;
    StartTime?: string;
    EndTime?: string;
    Status?: number;
    }
export class TicketReminder extends ReminderBase {
    Id?: number; 
    TicketId?: string;
}
export class TicketEquipment {
    Id: number;
    TicketId: string;
    Name: string;
    Remark: string;
    Quantity: number;
}
export class TicketEquipmentMasterData {
    Id: number;
    Name: string;
    IsActive: boolean;
}
export class TicketRecurringHelper {
    Id?: number;
    Type?: number;
    IsFor: number;
    RecurringStartDate?: string;
    RecurringDuration?: number;
    RecurringVisitFrequency?: number;
    SundayIsActive?: boolean;
    MondayIsActive?: boolean;
    TuesdayIsActive?: boolean;
    WednesdayIsActive?: boolean;
    ThursdayIsActive?: boolean;
    FridayIsActive?: boolean;
    SaturdayIsActive?: boolean;
    Date1?: boolean;
    Date2?: boolean;
    Date3?: boolean;
    Date4?: boolean;
    Date5?: boolean;
    Date6?: boolean;
    Date7?: boolean;
    Date8?: boolean;
    Date9?: boolean;
    Date10?: boolean;
    Date11?: boolean;
    Date12?: boolean;
    Date13?: boolean;
    Date14?: boolean;
    Date15?: boolean;
    Date16?: boolean;
    Date17?: boolean;
    Date18?: boolean;
    Date19?: boolean;
    Date20?: boolean;
    Date21?: boolean;
    Date22?: boolean;
    Date23?: boolean;
    Date24?: boolean;
    Date25?: boolean;
    Date26?: boolean;
    Date27?: boolean;
    Date28?: boolean;
    Date29?: boolean;
    Date30?: boolean;
    Date31?: boolean;
    }
