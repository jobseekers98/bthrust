export class GenicZone {
    ZoneId: number;
    ZoneName: string;
    CountryName: string;
    IsActive: boolean;
    IsAssigned: boolean;
    ZoneCoordinatesList: ZoneCoordinates[];
}
export class ZoneCoordinates {
    Id: number;
    ZoneId: number;
    Coordinates: string;
}
export class EngineerWiseZone {
    Id: number;
    ZoneId: number;
    ZoneName: string;
    EngineerId?: string;
}
