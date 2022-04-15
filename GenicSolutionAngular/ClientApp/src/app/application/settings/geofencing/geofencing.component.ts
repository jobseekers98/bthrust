import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserlogService } from 'src/app/services/userlog.service';
import { AuthenticationService, Login } from 'src/app/services';
import { PropertyService } from 'src/app/services/property.service';
import { GenicZoneService } from 'src/app/services/genic-zone.service';
import { MapLoaderService } from './map.loader';
declare var google: any;

@Component({
  selector: 'app-geofencing',
  templateUrl: './geofencing.component.html',
  styleUrls: ['./geofencing.component.css']
})

// If the map is not working click on - Open in New Window

export class GeofencingComponent implements OnInit, AfterViewInit {
  addressresult: any;
  map: any;
  drawingManager: any;
  alloverlays = [];
  selectedShape: any;
  currentUser: Login;
  // -----------ngx-google-map-helper End -------------------
  latitude: number;
  longitude: number;
  // --- validation part start --------
  IsZoneNameValid: boolean;
  IsValidCountry: boolean;
  IsZoneExists: boolean;
  // ------validation part end --------
  allOverlays: any;
  centerControlDiv: any;
  countrylist: any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    public logService: UserlogService,
    public loginservice: AuthenticationService,
    public propertySerivce: PropertyService,
    public genicZoneService: GenicZoneService
  ) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    // this.propertySerivce.countrylist = [];
    this.IsZoneNameValid = true;
    this.IsValidCountry = true;
    this.IsZoneExists = false;
    this.latitude = 1.352083;
    this.longitude = 103.819839;
    this.allOverlays = [];
  }
  ngOnInit() {
    this.genicZoneService.setDefaultGenicZone();
  }

  ngAfterViewInit() {
    MapLoaderService.load().then(() => {
      this.drawPolygon();
    });
    setTimeout(() => {
      //this.propertySerivce.getcountry();
    }, 500);
  }


  drawPolygon() {
    this.map = new google.maps.Map(document.getElementById('GeoMapId'), {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 8
    });

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        // drawingModes: ['polygon']
        drawingModes: [
          // google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },
      markerOptions: {
        icon: 'assets/images/beachflag.png'
      },
      circleOptions: {
        clickable: true,
        editable: true,
        draggable: true,
        fillColor: '#c0fbed45',
        fillOpacity: 0.2,
        strokeWeight: 3,
        zIndex: 1
      },
      polygonOptions: {
        clickable: true,
        draggable: true,
        editable: true,
        fillColor: '#c0fbed45',
        fillOpacity: 0.2,
        strokeWeight: 3,
        zIndex: 1
      },
      rectangleOptions: {
        clickable: true,
        draggable: true,
        editable: true,
        fillColor: '#c0fbed45',
        fillOpacity: 0.2,
        strokeWeight: 3,
        zIndex: 1
      }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      // Polygon drawn
      this.allOverlays.push(event);
      if (event.type === google.maps.drawing.OverlayType.CIRCLE) {
        this.drawingManager.setDrawingMode(null);
        // this is the coordinate, you can assign it to a variable or pass into another function.
        // alert(event.overlay.getPath().getArray());

        // tslint:disable-next-line: prefer-const
        let newShape = event.overlay;
        newShape.type = event.type;
        // tslint:disable-next-line: only-arrow-functions
        google.maps.event.addListener(newShape, 'click', () => {
          this.setSelection(newShape);
        });

        this.setSelection(newShape);

      } else if (event.type === google.maps.drawing.OverlayType.RECTANGLE) {
        //  this.alloverlays.push(event);
        this.drawingManager.setDrawingMode(null);
        // Write code to select the newly selected object.

        // tslint:disable-next-line: prefer-const
        let newShape = event.overlay;
        newShape.type = event.type;
        // tslint:disable-next-line: only-arrow-functions
        google.maps.event.addListener(newShape, 'click', () => {
          this.setSelection(newShape);
        });

        this.setSelection(newShape);
      } else if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        this.drawingManager.setDrawingMode(null);
        // this is the coordinate, you can assign it to a variable or pass into another function.
        // alert(event.overlay.getPath().getArray());

        // tslint:disable-next-line: prefer-const
        let newShape = event.overlay;
        newShape.type = event.type;
        // tslint:disable-next-line: only-arrow-functions
        google.maps.event.addListener(newShape, 'click', function () {
          this.setSelection(newShape);
        });

        this.setSelection(newShape);
      }

      // this.centerControlDiv = document.createElement('div');
      // var centerControl = new this.CenterControl(this.centerControlDiv, this.map);
      // this.centerControlDiv.index = 1;
      // this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(this.centerControlDiv);
  });
    // tslint:disable-next-line: only-arrow-functions
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.placeMarker(event.latLng);
      // console.log(event.latLng.toUrlValue(5));
    });
  }

  placeMarker(location) {
    // tslint:disable-next-line: prefer-const
    let marker = new google.maps.Marker({
      position: location,
      // tslint:disable-next-line: object-literal-shorthand
      map: this.map
    });

  }
  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
    if (shape.type === 'polygon') {
      // google.maps.event.addListener(this.selectedShape.getPath(), 'insert_at', this.getPolygonCoords(shape));
      // google.maps.event.addListener(this.selectedShape.getPath(), 'set_at', this.getPolygonCoords(shape));
    }
    this.updateCurSelText(shape);
  }
  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
    }
  }

  updateCurSelText(shape) {
    const obj = new Object();
    let posstr = '' + this.selectedShape.position;
    if (typeof this.selectedShape.position === 'object') {
      posstr = this.selectedShape.position.toUrlValue();
    }
    pathstr = '' + this.selectedShape.getPath;
    if (typeof this.selectedShape.getPath === 'function') {
      var coord = new Object();
      for (let i = 0; i < this.selectedShape.getPath().getLength(); i++) {
        coord[i] = this.selectedShape.getPath().getAt(i).toUrlValue(7);
      }
      var pathstr = JSON.stringify(coord);
    }
    let bndstr = '' + this.selectedShape.getBounds;
    let cntstr = '' + this.selectedShape.getBounds;
    if (typeof this.selectedShape.getBounds === 'function') {
      // tslint:disable-next-line: prefer-const
      var bound = new Object();
      // tslint:disable-next-line: prefer-const
      var tmpbounds = this.selectedShape.getBounds();
      cntstr = '' + tmpbounds.getCenter().toUrlValue();
      bound['NE'] = tmpbounds.getNorthEast().toUrlValue();
      bound['SW'] = tmpbounds.getSouthWest().toUrlValue();
      bndstr = JSON.stringify(bound);
    }
    let cntrstr = '' + this.selectedShape.getCenter;
    if (typeof this.selectedShape.getCenter === 'function') {
      cntrstr = '' + this.selectedShape.getCenter().toUrlValue();
    }
    let radstr = '' + this.selectedShape.getRadius;
    if (typeof this.selectedShape.getRadius === 'function') {
      radstr = '' + this.selectedShape.getRadius();
    }
    obj['shape'] = this.selectedShape.type;
    obj['pos'] = posstr;
    obj['path'] = pathstr;
    obj['bounds'] = bndstr;
    obj['Cb'] = cntstr;
    obj['radius'] = radstr;
    obj['Cr'] = cntrstr;
    // tslint:disable-next-line: prefer-const
    let jsonData = JSON.stringify(obj);

    this.genicZoneService.ZoneCoordinatesData.Coordinates = jsonData;
    this.genicZoneService.GenicZoneData.ZoneCoordinatesList.push(this.genicZoneService.ZoneCoordinatesData);
    this.genicZoneService.setDefaultZoneCoordinates();
    // console.log(jsonData);
    // document.getElementById('geofence').value = jsonData;
  }
  // get lat and long using country name
  getMapOnContry(selectedCountry) {
    if (selectedCountry === '' || selectedCountry === 0 || selectedCountry === '0') {
      this.IsValidCountry = false;
      return false;
    } else {
      this.IsValidCountry = true;
    }
    this.propertySerivce.getLatLongUsingCountry(selectedCountry).then(
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
  // --------on zone submit -----------------
  onZoneSumit() {
    setTimeout(() => {
      if (this.genicZoneService.GenicZoneData.ZoneName === '') {
        this.IsZoneNameValid = false;
        return false;
      }
      if (this.genicZoneService.GenicZoneData.CountryName === '' || this.genicZoneService.GenicZoneData.CountryName === '0') {
        this.IsValidCountry = false;
        return false;
      }
      if (this.genicZoneService.GenicZoneData.ZoneCoordinatesList.length <= 0) {
        this.toastr.warning('', 'Add zone first and try again later.');
        return false;
      }
      this.genicZoneService.postGenicZone().subscribe(
        res => {
          switch (res.status) {
            case 201:
              this.toastr.success('', 'Zone added successfully.');
              this.genicZoneService.setDefaultGenicZone();
              setTimeout(() => {
                this.genicZoneService.GetGenicZone();
                this.router.navigate(['/settings/geofencing-list']);
              }, 500);
              break;
            case 208:
              this.IsZoneExists = true;
              // this.toastr.warning('', 'Zone Name : "' + this.genicZoneService.GenicZoneData.ZoneName + '" already exists!!');
              break;
            default:
              this.toastr.warning('', 'Something went wrong!');
          }
        },
        err => {
          switch (err.status) {
            case 500:
              this.toastr.warning('', 'Something went wrong!');
              break;
            default:
              this.toastr.warning('', 'Something went wrong!');
          }
          this.toastr.error('', 'Something went wrong!');
        });
    }, 500);
  }
  validateZoneName(v) {
    this.IsZoneExists = false;
    if (v === '' || v === undefined || v === null) {
      this.IsZoneNameValid = false;
      return false;
    } else {
      this.IsZoneNameValid = true;
    }
  }


// CenterControl(controlDiv, map) {
//   // Set CSS for the control border.
//   const controlUI = document.createElement('div');
//   controlUI.style.backgroundColor = '#fff';
//   controlUI.style.border = '2px solid #fff';
//   controlUI.style.borderRadius = '3px';
//   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
//   controlUI.style.cursor = 'pointer';
//   controlUI.style.marginBottom = '22px';
//   controlUI.style.textAlign = 'center';
//   controlUI.title = 'Select to delete the shape';
//   controlDiv.appendChild(controlUI);

//   // Set CSS for the control interior.
//   const controlText = document.createElement('div');
//   controlText.style.color = 'rgb(25,25,25)';
//   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//   controlText.style.fontSize = '16px';
//   controlText.style.lineHeight = '38px';
//   controlText.style.paddingLeft = '5px';
//   controlText.style.paddingRight = '5px';
//   controlText.innerHTML = 'Delete Selected Area';
//   controlUI.appendChild(controlText);

//   // Setup the click event listeners: simply set the map to Chicago.
//   controlUI.addEventListener('click', () => {
//        this.deleteSelectedShape();
//   });

// }


deleteSelectedShape() {
    if (this.selectedShape) {
        this.selectedShape.setMap(null);
    }
}

setDrowingNull() {
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < this.allOverlays.length; i++) {
      this.allOverlays[i].overlay.setMap(null);
    }
    this.allOverlays = [];
    this.genicZoneService.GenicZoneData.ZoneCoordinatesList = [];
    this.genicZoneService.setDefaultZoneCoordinates();
}
}
