export class Notification {
    Id: string;
    CreateTicketCustomer: boolean;
    CreateTicketEngineer: boolean;
    CreateTicketAdmin: boolean;
    AllocateTicketCustomer: boolean;
    AllocateTicketEngineer: boolean;
    AllocateTicketAdmin: boolean;
    ReAllocateTicketCustomer: boolean;
    ReAllocateTicketEngineer: boolean;
    ReAllocateTicketAdmin: boolean;
    RescheduleTicketCustomer: boolean;
    RescheduleTicketEngineer: boolean;
    RescheduleTicketAdmin: boolean;
    CompletionTicketCustomer: boolean;
    CompletionTicketAdmin: boolean;
    HoldTicketCustomer: boolean;
    HoldTicketAdmin: boolean;
    WorkOrderCustomer: boolean;
    WorkOrderAdmin: boolean;
    QuoteCustomer: boolean;
    QuoteAdmin: boolean;
    StartEndTicketCustomer: boolean;
    StartEndTicketAdmin: boolean;
    ReminRecurTicketCustomer: boolean;
    ReminRecurTicketEngineer: boolean;
    ReminRecurTicketAdmin: boolean;
    DailyNosOfTicketEngineer: boolean;
    CancelTicketCustomer: boolean;
    CancelTicketEngineer: boolean;
    CancelTicketAdmin: boolean;
    OnServiceDayCustomer: boolean;
    OnServiceDayEngineer: boolean;
    OnServiceDayAdmin: boolean;
    OnTheDayCustomer: boolean;
    OnTheDayTicketAdmin: boolean;
}

export class NotificationTemplate {
    Id: string;
    ModuleName: string;
    TemplateName: string;
    CustomerMailBody: string;
    MobileNotification: string;
    IsRead: boolean;
    EngineerMailBody: string;
    AdminMailBody: string;
    IsActive: boolean;
}
