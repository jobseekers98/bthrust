export class Login {
    Id?: string;
    UserName?: string;
    FullName?: string;
    MobileNumber?: string;
    Email?: string;
    Password?: string;
    Type?: string;
    Designation?: number;
    Token?: string;
    VTSToken?: string;
    Logo?: string;
    Logo64Bit?: string;
    PermissionId?: number;
    CreatedUtcDate?: Date;
    ModifiedUtcDate?: Date;
    authdata?: string;
    Permissions?: Permission;
    IsActive?: boolean;
    SMTPId?: number;
    Ticket: string;
    Engineer: string;
    Product: string;
}
export class ForgetPassword {
    UserName?: string;
    OTP?: string;
    OldPassword?: string;
    NewPassword?: string;
    ConfirmPassword?: string;
}

export class Permission {
    Id: number;
    DashboardAdmin?: boolean;

    DriveView?: boolean;
    DriveCreate?: boolean;
    DriveEdit?: boolean;
    DriveRemove?: boolean;

    CustomerView?: boolean;
    CustomerCreate?: boolean;
    CustomerEdit?: boolean;
    CustomerRemove?: boolean;

    CalendarView?: boolean;
    ResourceView?: boolean;
    MapView?: boolean;
    LiveTracking?: boolean;

    PropertyView?: boolean;
    PropertyCreate?: boolean;
    PropertyEdit?: boolean;
    PropertyRemove?: boolean;

    QuoteView?: boolean;
    QuoteCreate?: boolean;
    QuoteEdit?: boolean;
    QuoteRemove?: boolean;

    InvoiceView?: boolean;
    InvoiceCreate?: boolean;
    InvoiceEdit?: boolean;
    InvoiceRemove?: boolean;

    TicketView?: boolean;
    TicketCreate?: boolean;
    TicketEdit?: boolean;
    TicketRemove?: boolean;

    ReportTicket?: boolean;
    ReportEngineer?: boolean;
    ReportVisit?: boolean;

    EngineerView?: boolean;
    EngineerCreate?: boolean;
    EngineerEdit?: boolean;
    EngineerRemove?: boolean;

    ProductView?: boolean;
    ProductCreate?: boolean;
    ProductEdit?: boolean;
    ProductRemove?: boolean;
    ProductWarranty?: boolean;

    ServiceView?: boolean;
    ServiceCreate?: boolean;
    ServiceEdit?: boolean;
    ServiceRemove?: boolean;
    IsProductOnly?: boolean;

    SettingView?: boolean;

    BrandView?: boolean;
    BrandCreate?: boolean;
    BrandEdit?: boolean;
    BrandRemove?: boolean;

    CategoryView?: boolean;
    CategoryCreate?: boolean;
    CategoryEdit?: boolean;
    CategoryRemove?: boolean;

    TaxView?: boolean;
    TaxCreate?: boolean;
    TaxEdit?: boolean;
    TaxRemove?: boolean;

    IssueTypeView?: boolean;
    IssueTypeCreate?: boolean;
    IssueTypeEdit?: boolean;
    IssueTypeRemove?: boolean;

    PaymentView?: boolean;
    PaymentCreate?: boolean;
    PaymentEdit?: boolean;
    PaymentRemove?: boolean;

    SMTPSettingView?: boolean;
    SMTPSettingCreate?: boolean;
    SMTPSettingEdit?: boolean;
    SMTPSettingRemove?: boolean;

    LogView?: boolean;

    UserView?: boolean;
    UserCreate?: boolean;
    UserEdit?: boolean;
    UserRemove?: boolean;

    NotificationView?: boolean;
    NotificationCreate?: boolean;
    NotificationEdit?: boolean;
    NotificationRemove?: boolean;

    TemplateView?: boolean;
    TemplateCreate?: boolean;
    TemplateEdit?: boolean;
    TemplateRemove?: boolean;

    GeofencingView?: boolean;
    EnableZoneCreate?: boolean;
    EnableZoneEdit?: boolean;
    EnableZoneRemove?: boolean;

    EngineerType?: boolean; // 0=Normal, 1= supervisor, 2=Foreman
    EngineerLeave?: boolean;
    CanEngineerCreateTicket?: boolean;

    DashboardEngineer?: boolean;
    EngineerProfileView?: boolean;
    EngineerTicketView?: boolean;
    EngineerTimesheetView?: boolean;
    CloserEdit?: boolean;

    AllowReceivePayment?: boolean;
    AllowCustomerName?: boolean;
    IsRequiredCustomerName?: boolean;
    GoogleCalendar?: boolean;
    GeoLocation?: boolean;
}