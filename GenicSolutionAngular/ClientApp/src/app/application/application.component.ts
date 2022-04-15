import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenicProfileService } from '../services/genicprofile.service';
@Component({
  templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit {
  localPrependUrl: string;
  returnUrl: string;
  constructor(
    public genicProfile: GenicProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams[' returnUrl '] || '/';
    router.events.forEach((event) => {
      if (event['url'] !== undefined) {
        if (event['url'] === '/') {
          { 
            this.returnUrl = 'dashboard'; 
          }
          this.router.navigate([this.returnUrl]);
          }
      }
    });
  }

  ngOnInit(): void {
  //   if (this.returnUrl.length > 0) { this.returnUrl = 'dashboard'; }
  //   this.router.navigate([this.returnUrl]);
   }

}
