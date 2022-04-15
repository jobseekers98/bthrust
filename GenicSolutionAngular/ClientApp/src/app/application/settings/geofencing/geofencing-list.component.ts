import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GenicZoneService } from 'src/app/services/genic-zone.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { GenicZone } from 'src/app/services/genic-zone';

@Component({
  selector: 'app-geofencing-list',
  templateUrl: './geofencing-list.component.html',
  styleUrls: ['./geofencing.component.css']
})
export class GeofencingListComponent implements OnInit, AfterViewInit {
  TotalZoneCount: number;
  TotalActiveZoneCount: number;
  TotalInActiveZoneCount: number;

  constructor(
    public genicZoneServie: GenicZoneService,
    public location: Location,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.TotalZoneCount = 0;
    this.TotalActiveZoneCount = 0;
    this.TotalInActiveZoneCount = 0;
   }
  p = 1;
  ngOnInit() {
    this.genicZoneServie.localZoneList = [];
    this.genicZoneServie.GetGenicZone();
  }
  ngAfterViewInit() {
    setTimeout(() => {
    this.genicZoneServie.localZoneList = this.genicZoneServie.GenicZoneList;
    this.calculateTotalZone();
    }, 500);
  }
calculateTotalZone() {
  this.TotalZoneCount = this.genicZoneServie.localZoneList.length;
  this.TotalActiveZoneCount = this.genicZoneServie.localZoneList.filter(z => z.IsActive ===  true).length;
  this.TotalInActiveZoneCount = this.genicZoneServie.localZoneList.filter(z => z.IsActive ===  false).length;
}
  onsearchQuote(searchText) {
    this.genicZoneServie.localZoneList = this.genicZoneServie.GenicZoneList.filter(item =>
      item.CountryName.toLowerCase().match(searchText.toLowerCase()) ||
      item.ZoneName.toLowerCase().match(searchText.toLowerCase()));
  }
  changeZoneStatus(event, zoneId, index) {
    if (event.target.checked === true) {
      this.genicZoneServie.localZoneList[index].IsActive = true;
    } else {
      this.genicZoneServie.localZoneList[index].IsActive = false;
    }
    this.genicZoneServie.updateZoneStatus(zoneId, event.target.checked);
    this.calculateTotalZone();
  }
addNewZone() {
  setTimeout(() => {
    this.router.navigate(['/settings/geofencing']);
  }, 300);
}
removeGenicZone(zoneId, index) {
  if (window.confirm('Are you sure want to remove this zone?')) {
    this.genicZoneServie.removeGenicZone(zoneId).subscribe(
      res => {
        switch (res.status) {
          case 201:
            this.toastr.success('', 'Zone removed successfully!');
            setTimeout(() => {
              this.genicZoneServie.localZoneList.splice(index, 1);
              this.calculateTotalZone();
            }, 200);
            break;
          default:
            this.toastr.warning('', 'Something went wrong!');
        }
      },
      error => {
        switch (error.status) {
          case 201:
            this.toastr.warning('', 'Something went wrong!');
            break;
          default:
            this.toastr.warning('', 'Something went wrong!');
        }
      }
    );
  } else {
    return false;
  }
}
viewZoneData(q: GenicZone) {
this.genicZoneServie.setDefaultGenicZone();
this.genicZoneServie.GenicZoneData = Object.assign({}, q);
setTimeout(() => {
  this.router.navigate(['/settings/geofencing-view']);
}, 200);
}
}
