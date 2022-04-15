import { Injectable } from '@angular/core';
import { GenicZone, ZoneCoordinates, EngineerWiseZone } from './genic-zone';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenicZoneService {
  GenicZoneData: GenicZone;
  GenicZoneList: GenicZone[];
  localZoneList: GenicZone[]; // basicaly used for searching purpose.

  ZoneCoordinatesData: ZoneCoordinates;
  ZoneCoordinatesList: ZoneCoordinates[];

  EngineerWiseZoneList: GenicZone[];
  LocalEngineerWiseZoneList: GenicZone[];

  constructor(private http: HttpClient) {
    this.setDefaultGenicZone();
    this.setDefaultZoneCoordinates();

    this.GenicZoneList = [];
    this.ZoneCoordinatesList = [];
    this.localZoneList = [];
    this.EngineerWiseZoneList = [];
  }

  setDefaultGenicZone() {
    this.GenicZoneData = {
      ZoneId: 0,
      ZoneName: '',
      CountryName: 'Singapore',
      IsActive: true,
      IsAssigned: false,
      ZoneCoordinatesList: [],
    };
  }
  setDefaultZoneCoordinates() {
    this.ZoneCoordinatesData = {
      Id: 0,
      ZoneId: 0,
      Coordinates: '',
    };
  }

GetGenicZone() {
  this.http.get(environment.apiUrl + '/api/GenicZone/GetGenicZone').toPromise().then(res =>
    this.GenicZoneList = res as GenicZone[]);
}
postGenicZone() {
  return this.http.post(environment.apiUrl + '/api/GenicZone/postGenicZone' , this.GenicZoneData , {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).pipe();
}
updateZoneStatus(zoneId: number, Status: boolean) {
return this.http.put(environment.apiUrl + '/api/GenicZone/updateZoneStatus/' + zoneId + '/' + Status , {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' }).toPromise();
}

removeGenicZone(zoneId: number) {
  return this.http.delete(environment.apiUrl + '/api/GenicZone/removeGenicZone/' + zoneId , {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).pipe();
  }
// Get Zone list to assign an engineer
GetEngineerWiseZone(EngineerId?: string) {
  this.http.get(environment.apiUrl + '/api/GenicZone/GetEngineerWiseZone/' + EngineerId ).toPromise().then(res =>
    this.EngineerWiseZoneList = res as GenicZone[]);
}
}
