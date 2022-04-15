export class Tender {
    Id: string;
    PublishedDate?: string;
    TenderSourceId?: number;
    Buyer?: string;
    TenderName?: string;
    Quantity?: string;
    TenderRefNo?: string;
    TenderClosing?: string;
    Sitewalk: boolean;
    SitewalkDate?: string;
    SitewalkAddress?: string;
    SitewalkPOC?: string;
    ModeOfSubmissionId?: number;
    Workhead?: string;
    Remarks?: string;
    Status?: string;
    TenderSource?: string;
    ModeOfSubmission?: string;
}
export class TenderMasterData {
    Id: number;
    Name: string;
    Type: string;
}
export class TenderFilter {
    DateFrom?: string;
    DateTo?: string;
    Status?: string;
    WhichDate?: string;
    IsReady?: boolean;
}
