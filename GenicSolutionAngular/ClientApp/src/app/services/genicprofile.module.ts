export class GenicProfile {
    Id?: number;
    Name?: string;
    Logo?: string;
    Description?: string;
    TicketPrefix?: string;
    QuotePrefix?: string;
    InvoicePrefix?: string;
    ServicePrefix?: string;
    CloserPrefix?: string;
    ContactNumber?: string;
    WhatsAppNumber?: string;
    Email?: string;
    AddressStreet1?: string;
    AddressStreet2?: string;
    AddressCity?: string;
    AddressUnitNo?: string;
    AddressState?: string;
    AddressZipCode?: string;
    AddressCountry?: string;
    Latitude?: string;
    Longitude?: string;
    FacebookUrl?: string;
    TwitterUrl?: string;
    InstagramUrl?: string;
    GoogleUrl?: string;
    WebsiteUrl?: string;
    SundayString?: string;
    MondayString?: string;
    TuesdayString?: string;
    WednesdayString?: string;
    ThursdayString?: string;
    FridayString?: string;
    SaturdayString?: string;
    Sunday?: boolean;
    Monday?: boolean;
    Tuesday?: boolean;
    Wednesday?: boolean;
    Thursday?: boolean;
    Friday?: boolean;
    Saturday?: boolean;
    TimeZone?: string;
    TicketTermsConditions?: string;
    QuotationHeader?: string;
    InvoiceHeader?: string;
    ServiceHeader?: string;
    QuoteTermsAndCondition?: string;
    BufferTime?: number;
    OTAfter: number;
    WarrantyValidation?: boolean;
    Geolocation?: boolean;
    GeolocationAddress?: boolean;
    GeolocationImage?: boolean;
    CreatedUtcDate?: Date;
    ModifiedUtcDate?: Date;
}
export class GenicProfileCalendar {
    Id?: number;
    GenicProfileId?: number;
    Date?: Date;
    Description?: string;
    WorkType?: string;
    StartTime?: string;
    EndTime?: string;
    LeaveFor?: number; /// 1=Business Calendar, 2=Engineer Holiday
    EngineerId?: string;
    Status?: string;
    EngineerName?: string;
    IsWorking?: boolean;
}
export class PendingLeaveRequest {
    Count?: number;
}
export class WebsiteParams {
    UrlPath?: string;
    UrlString?: string;
}
export class TicketFilter {
    DateFrom?: string;
    DateTo?: string;
    CustomerId?: any = [];
    EngineerId?: any = [];
    DepartmentId?: any = [];
    Status?: any = [];
    IsReady?: boolean;
    IsReadyQuote?: boolean;
    IsReadyInvoice?: boolean;
}
export class GlobalFilter {
    query: string;
}
export class ResourceFullCalendarSetting {
    start: string;
    end: string;
}
export class Country {
    CountryId: number;
    CountryName: string;
}
export class Smtpsetting {
    Id: number;
    SMTPName: string;
    EmailProtocol: string;
    EmailEncryption: string;
    SMTPHost: string;
    SMTPPort: string;
    SMTPEmail: string;
    SMTPUsername: string;
    SMTPPassword: string;
    EmailCharset: string;
    EmailSignature: string;
}
export class GenicDocExt {
    Id: number;
    ExtentionName: string;
    IsActive: boolean;
}
export class EngineerAttendance {
    Id: number;
    EngineerId: string;
    StartLatLong: string;
    EndLatLong: string;
    StartDate: string;
    StartAddress: string;
    EndDate: string;
    EndAddress: string;
    StartIP: string;
    EndIP: string;
    Remark: string;
    EngineerAttendanceImage: EngineerAttendanceImage[];
}
export class EngineerAttendanceImage {
    Id: number;
    EngineerAttendanceId: number;
    Image: string;
    Size: number;
    Ext: string;
    Status: string;
}