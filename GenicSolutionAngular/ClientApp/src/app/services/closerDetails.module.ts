export class CloserDetails {
    CloserID: string;
    CloserPrefix: string;
    TicketId: string;
    TicketNo: string;
    TimerID: number;
    EngineerId: string;
    EnginnerName: string;
    CustomerSignature: string;
    EngineerSignature: string;
    StartDate: Date;
    EndDate: Date;
    StartTime: string;
    EndTime: string;
    TotalDuration: string;
    Remarks: string;
    TicketFlag: string;
    IsReady: boolean;
    PaymentCollected: boolean;
    CloserAmount?: number;
    CloserGSTAmount?: number;
    CloserTotalAmount?: number;
    PaymentMode?: string;
    AmountPaid?: number;
    PaymentRemarks?: string;
    NameOfSignatory?:string;
    ICNo?:string;
    EngineerName?: string;
    ServiceBy?: string;
    attentionName?: string;
    attentionEmail?: string;
    otherAttentionName?: string;
    IsTested: boolean;
    CheckedBy?: string;
    WithCustomerSignature: boolean;
    CloserAttachmentList: CloserAttachment[];
}
export class CloserAttachment {
    CAID: number;
    CloserID: string;
    AttachmentExtenstion: string;
    AttachmentFile: string;
    AttachmentSize: number;
	AttachmentExtenstionAfter: string;
    AttachmentFileAfter: string;
    AttachmentSizeAfter: number;
    Remarks: string;
    CloserAttachmentAduioList: CloserAttachmentAduio[];
}
export class CloserAttachmentAduio {
    AttachmentAudioId: string;
    CloserID?: string;
    CAID: number;
    AttachmentAudioName: string;
    AudioAttachment: string;
    AudiotSize: number;
    CreatedDate: Date;
}
