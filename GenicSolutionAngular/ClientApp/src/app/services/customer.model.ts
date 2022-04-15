import { Property } from './property.model';

export class Customer {
    Id?: string;
    CustomerId?: string;
    NameTitle?: string;
    FirstName?: string;
    LastName?: string;
    CompanyName?: string;
    ClientReminders?: boolean;
    PrintEmailOnWorkOuder?: boolean;
    ClientFollowUpEmails?: boolean;
    UseCompanyNameAsPrimaryName?: boolean;
    RefferdBy?: string;
    AddressStreet1?: string;
    AddressStreet2?: string;
    AddressUnitNo?: string;
    AddressCity?: string;
    AddressState?: string;
    AddressZipCode?: string;
    AddressCountry?: string;
    Latitude?: string;
    Longitude?: string;
    IsAddressSame?: boolean;
    CustomerLogo?: string;
    Status?: boolean; // 0=Suspended, 1=Active, 2=Cancelled, 3=All
    CreatedUtcDate?: Date;
    SMTPId?: number;
    ArrayofKeys?: ArrayofKey[];
    Properties?: Property[];
    CustomerContactPerson?: CustomerContactPerson[];
    CustomerDepartment?: CustomerDepartment[];
}
export class ArrayofKey {
    Id?: number;
    CustomerId?: string;
    Type?: string;
    Key?: string;
    Value?: string;
    IsDefault?: boolean;
}
export class CustomerContactPerson {
    Id?: number;
    CustomerId?: string;
    NameTitle?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    IsDefaultContact?: boolean;
}
export class CustomerDepartmentType {
    Id?: number;
    Name?: string;
    IsAssigned: boolean;
}
export class CustomerDepartment {
    Id?: number;
    CustomerId?: string;
    SMTPSettingsId?: number;
    SMTPName?: string;
}
