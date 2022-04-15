export class UserLog {
    Id: string;
    IP: string;
    UserId: string;
    UserName: string;
    Module: string;
    ModuleId?: string;
    ActionType: string;
    Description: string;
    RecentDescription: string;
    LogDate: Date;
    CreatedDate: Date;
    ActivityTimeSpan?: string;
}
export class LogParam {
    User: string;
    Module: string;
    Action: string;
    FromDate?: Date;
    ToDate?: Date;
}
export class TicketTimeSheet {
    EngineerId: string;
    EngineerName: string;
    TicketId: string;
    Date: Date;
    StartDate: Date;
    EndDate: Date;
    CheckIn: string;
    CheckOut: string;
    TimeDiff: string;
}
