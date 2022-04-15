import { GenicZone } from './genic-zone';
import { TicketIssueType } from './ticket.module';

export class Engineer {
    Id?: string;
    AttachmentPath?: string;
    EngineerId?: string;
    EngineerName?: string;
    EngineerPhone?: string;
    EngineerEmail?: string;
    Type?: number; // 0=Without Permissions, 1=Supervisor, 2=Foreman
    Working?: boolean;
    LoginAccess?: boolean;
    IsActive?: boolean;
    CreateCustomer?: string;
    CreateForAllDate?: string;
    AssignToOtherUser?: boolean;
    AddressStreet1?: string;
    AddressStreet2?: string;
    AddressUnitNo?: string;
    AddressCity?: string;
    AddressState?: string;
    AddressZipCode?: string;
    AddressCountry?: string;
    Latitude?: string;
    Longitude?: string;
    EmergencyName?: string;
    EmergencyNumber?: string;
    EmergencyRelation?: string;
    EngineerLogo?: string;
    Color?: string;
    EngineerWiseIssueTypeList?: TicketIssueType[];
    EngineerWiseZoneList?: GenicZone[];
}

export class EngineerWiseIssueType {
    Id: number;
    TicketIssueTypeId?: number;
    IssueTypeName: string;
    EngineerId?: string;
}
