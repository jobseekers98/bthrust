export class Property {
    Id?: string;
    CustomerId?: string;
    PropertyId?: string;
    AddressStreet1?: string;
    AddressStreet2?: string;
    AddressUnitNo?: string;
    AddressCity?: string;
    AddressState?: string;
    AddressZipCode?: string;
    AddressCountry?: string;
    CustomerName?: string;
    CompanyName?: string;
    TotalTicket?: number;
    Latitude?: string;
    Longitude?: string;
    Remarks?: string;
    IsActive?: boolean;
}
export class InternalObject {
    TodayDate?: string;
    Type?: string;
    DateFrom?: string;
    DateTo?: string;
}
export class AutoCaptureParms {
    street_number?: string;
    route?: string;
    premise?: string;
    administrative_area_level_2?: string;
    sublocality?: string;
    sublocality_level_3?: string;
    sublocality_level_2?: string;
    sublocality_level_1?: string;
    neighborhood?: string;
    administrative_area_level_1?: string;
    locality?: string;
    political?: string;
    postal_code?: string;
    country?: string;
    lat?: string | number;
    lng?: string | number;
    zoom?: number;
    options?: any;
}
