export class Payment {
    Id: string;
    InvoiceId: string;
    InvoiceNo: string;
    PaymentAmount: number;
    BalanceAmount: number;
    PaymentDate: Date;
    PModeId: number;
    PaymentMethod: string;
    TransactionId: string;
    PaymentNote: string;
    CreatedDate: Date;
    UpdatedDate: Date;
    PaymentModeList: PaymentMode[];
    Status: string;
    SendOutStatus: string;
}
export class PaymentMode {
    Id: number;
    ModeName: string;
    Status: boolean;
    CreatedDate: Date;
    UpdatedDate: Date;
}
