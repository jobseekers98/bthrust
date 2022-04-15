import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/login.mudule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['../property-list/property-list.component.css'],
  styles: [`.map-property agm-map{ height: 430px;}`]
})
export class PropertyDetailsComponent implements OnInit {
  lat: number;
  lng: number;
  currentUser: Login;
  constructor(
    public titleService: Title,
    private router: Router,
    public service: PropertyService,
    public loginservice: AuthenticationService
  ) { this.loginservice.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
    if (this.service.formData.Id === '00000000-0000-0000-0000-000000000000') {
      this.router.navigate(['/properties']);
      if (!this.currentUser.Permissions.PropertyView) { this.router.navigate(['/dashboard']); }
    }
    this.titleService.setTitle('Propert Details | Genic Solution');
    this.lat = 0; this.lng = 0;
    setTimeout(() => {
      this.lat = Number(this.service.formData.Latitude);
      this.lng = Number(this.service.formData.Longitude);
    }, 100);
  }

}
