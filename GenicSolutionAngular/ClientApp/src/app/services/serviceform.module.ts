export class Serviceform {
    ServiceID: string;
    TicketId: string;
    TicketNo: string;
    TicketDate: Date;
    EngineerServiceSign: string;
    CustomerServiceSign: string;
    CompanyName: string;
    CustomerName: string ;
    SoNo: string;
    ServiceDate: Date;
    DateOfAccepted: Date;
    ContactNo: string;
    EmailID: string;
    EngineerId: string;
    EngineerName: string;
    StartTime: string;
    EndTime: string;
    ProblemDescription: string;
    PossibleCauses: string;
    OtherComments: string;
    Remark: string;
    ServiceFormListID: number;
    CreatedUtcDate: Date;
    ModifiedUtcDate: Date;
    InstallationTask1: boolean;
    InstallationTask2: boolean;
    InstallationTask3: boolean;
}
export class MasterSErviceForm {
    FormID: number;
    FormTitle: string;
    Description: string;
    IsActive: number;
}
export class TicketWiseServiceForm {
    TicketServiceID: number;
    MasterServiceFormID: number;
    ServicePrefix?: string;
    ServiceFormName: string;
    Description: string;
    TicketId: string;
    TicketNo: string;
    IsActive: boolean;
    ServiceFormSequenceId: number;
    ServiceDate: Date;
    TicketDate: Date;
    EngineerId?: string;
    EngineerName: string;
    IsHTML: boolean;
    IsPreview: boolean;
    ClientformIdOnSave: number;
    CloserId: string;
}
export class FSMServiceForm {
    Id: number;
    SelectOne: string;
    MaintenanceContract: string;
    Request: string;
    Diagnose: string;
    JobDone: string;
    Remark: string;
    ServiceTicketStatus: string;
    CloserId: string;
}

