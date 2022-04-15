
export class ReportsFilter {
  Id: string;
  StartDate: string;
  EndDate: string;
  Status: string;
  Engineer: string;
  Department: number;
  Type: string;
}
export class ReportsWarranty {
  Id: number;
  ItemName: string;
  UniqId: string;
  InstallationDate: string;
  ExpiryDate: string;
  Status: string;
  CustomerId: string;
  ProductId: string;
  Customer: string;
  IsDateActive: boolean;
  IsFrom: string;
  TicketId: string;
  ItemUnitCost: string;
}
export class ProductWarranty {
  Id: number;
  UniqId: string;
  InstallationDate: string;
  ExpiryDate: string;
  CustomerId: string;
  ProductId: string;
  Type: string;
  WarrantyDays: number;
}
export class ReportsUnWarranty {
  Id: number;
  ItemName: string;
  TicketId: string;
  OneOffAppointmentDate: string;
  TicketClosedDate: string;
  Status: string;
  Customer: string;
  Type: string;
}
