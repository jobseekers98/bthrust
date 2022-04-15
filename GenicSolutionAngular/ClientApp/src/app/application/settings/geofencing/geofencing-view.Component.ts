import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenicZoneService } from 'src/app/services/genic-zone.service';
import { MapLoaderService } from './map.loader';
import { PropertyService } from 'src/app/services/property.service';
declare var google: any;

@Component({
    selector: 'app-geofencing-view.Component',
    templateUrl: './geofencing-view.Component.html',
    styleUrls: ['./geofencing.component.css']
})
export class GeofencingViewComponent implements OnInit {
    map: any;
    drawingManager: any;
    alloverlays = [];
    selectedShape: any;
    addressresult: any;
    latitude: number;
    longitude: number;

    constructor(
        public genicZoneService: GenicZoneService,
        private toastr: ToastrService,
        private router: Router,
        public propertySerivce: PropertyService,
    ) { }

    ngOnInit() {
        if (this.genicZoneService.GenicZoneData.ZoneName === '' || this.genicZoneService.GenicZoneData.ZoneName === undefined) {
            this.router.navigate(['/settings/geofencing-list']);
        } else {
            this.loadMapOnView();
            MapLoaderService.load().then(() => {
              });
        }
    }
    loadMapOnView() {
        this.propertySerivce.getLatLongUsingCountry(this.genicZoneService.GenicZoneData.CountryName).then(
            res => {
                this.addressresult = res.results;
                setTimeout(() => {
                    this.latitude = this.addressresult[0].geometry.location.lat;
                    this.longitude = this.addressresult[0].geometry.location.lng;
                    this.drawPolygon();
                }, 500);
            }
        );
    }
    drawPolygon() {
        this.map = new google.maps.Map(document.getElementById('GeoMapId'), {
            center: { lat: this.latitude, lng: this.longitude },
            zoom: 5
        });

        this.genicZoneService.GenicZoneData.ZoneCoordinatesList.forEach(l => {
        // tslint:disable-next-line: prefer-const
        let shapeCoord = JSON.parse(l.Coordinates);
        // this code is used to polygon
        if (shapeCoord.shape === 'polygon') {
        // tslint:disable-next-line: prefer-const
        let s: any = JSON.parse(shapeCoord.path);
        let len = Object.keys(s).length;
        let flightPlanCoordinates: any;
        flightPlanCoordinates = [];
        let ffItem1: any; // this variable is used add end point of polygon
        let ffItem2: any; // this variable is used add end point of polygon
        let objLatLong = Object();
        for (let l = 0; l <= len - 1; l ++) {
            let pLenght = s[l].split(',');
            objLatLong.lat = Number(pLenght[0]);
            objLatLong.lng = Number(pLenght[1]);
            flightPlanCoordinates.push(objLatLong);

            if ( l === 0) {
                ffItem1 = Number(pLenght[0]);
                ffItem2 = Number(pLenght[1]);
            }

            objLatLong = new Object();
        }
        objLatLong.lat = Number(ffItem1);
        objLatLong.lng = Number(ffItem2);
        flightPlanCoordinates.push(objLatLong); // here we push end point of polygon
        objLatLong = new Object();
        ffItem1 = 0;
        ffItem2 = 0;
        // tslint:disable-next-line: prefer-const
        let polygonPath = new google.maps.Polygon({
            path: flightPlanCoordinates,
            geodesic: true,
            fillColor: '#0084cac7',
            strokeOpacity: 1.0,
            fillOpacity: 0.3,
            strokeColor: '#000000',
            strokeWeight: 0.58,
        });
        polygonPath.setMap(this.map);
        }
        // this code is used for rectangle
        if (shapeCoord.shape === 'rectangle') {
            // tslint:disable-next-line: prefer-const
            let tempBonds: any = JSON.parse(shapeCoord.bounds);
            let NorthEst = tempBonds.NE.split(',');
            let NorthEstOne = NorthEst[0];
            let NorthEstTow = NorthEst[1];

            let SouthWest = tempBonds.SW.split(',');
            let SouthWestOne = SouthWest[0];
            let SouthWestTwo = SouthWest[1];

            var rectanglePath = new google.maps.Rectangle({
                strokeOpacity: 1.0,
                strokeColor: '#000000',
                strokeWeight: 0.58,
                fillColor: '#0084cac7',
                fillOpacity: 0.3,
                map: this.map,
                bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(Number(SouthWestOne), Number(SouthWestTwo)),
                new google.maps.LatLng(Number(NorthEstOne), Number(NorthEstTow)))
                });
            rectanglePath.setMap(this.map);
        }
        // this code is used for circle
        if (shapeCoord.shape === 'circle') {
            const CurPosition = shapeCoord.Cb.split(',');
            const CurPositionLat = CurPosition[0];
            const CurPositionLng = CurPosition[1];
            const curtin = new google.maps.LatLng(Number(CurPositionLat), Number(CurPositionLng));
            const circle = new google.maps.Circle({
                center: curtin,
                path: google.maps.SymbolPath.CIRCLE,
                map: this.map,
                radius: Number(shapeCoord.radius),
                fillColor: '#0084cac7',
                fillOpacity: 0.3,
                strokeColor: '#000000',
                strokeWeight: 0.58,
            });
            circle.setMap(this.map);
        }
       });

    }
addNewZone() {
    setTimeout(() => {
      this.router.navigate(['/settings/geofencing']);
    }, 300);
  }
}
