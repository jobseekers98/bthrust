export class Product {
    Id?: string;
    ProductLogo?: string;
    ProductId?: string;
    ProductName?: string;
    ProductBrand?: string;
    ProductCategory?: string;
    Description?: string;
    PurchasePrice?: number;
    SalePrice?: number;
    Quantity?: number;
    LowStockTriggerQuantity?: number;
    RuleType?: string;
    Status: boolean;
    InWarranty?: boolean;
    WarrantyDays?: number;
    ItemofLists?: ItemofList[];
    ProductMovementList: ProductMovement[];
}
export class ItemofList {
    Id?: number;
    ProductId?: string;
    BatchNo?: string;
    AvailableQuantity?: number; // available qty
    ManufacturingDate?: Date;
    ExpiryDate?: Date;
    UsedQty?: number;
    TotalQty?: number;
    HoldQty?: number;
    ProductUnit?: string;
    tempQty: number;
    Remarks: string;
}
export class ProductMovement {
    Id: number;
    ProductId: string;
    ProductCode: string;
    ProductName: string;
    TicketId: string;
    QuoteId: string;
    InvoiceId: string;
    JobDate: Date;
    CustomerName: string;
    CustomerAddress: string;
    UsedQty: number;
    QtyAvailable: number;
    QtyHold: number;
    QtyTotal: number;
    MovementDate: Date;
}
export class Brand {
    BrandId: number;
    BrandName: string;
    BrandLogo: string;
}
export class Category {
    CategoryId: number;
    CategoryName: string;
}
export class Service {
    Id?: string;
    ServiceId?: string;
    ServiceName?: string;
    ServiceDescription?: string;
    InWarranty?: boolean;
    WarrantyDays?: number;
    IsActive: boolean;
}