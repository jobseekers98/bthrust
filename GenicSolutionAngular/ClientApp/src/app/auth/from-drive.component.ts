import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../services';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  template: `
           <div *ngIf="loading" class="row" style="background-color: blue;font-size: 15px;color: white;">
              <div class="col text-center">
                <div class="spinner-grow text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>Authenticate...
              </div>
          </div>
          `,
  styles: [``]
})
export class FromDriveComponent implements OnInit {
  currentUser: Login;
  loading: boolean = false;
  constructor(
    public service: AuthenticationService,
    private router: Router,
    private route1: ActivatedRoute,
    private toastr: ToastrService
    ) {
        this.service.currentUser.subscribe(x => this.currentUser = x);
       
    }
    ngOnInit(): void {
      try {
      const token = this.route1.snapshot.queryParamMap.get('t');
      const aut = this.route1.snapshot.queryParamMap.get('a');
      if (token === null) { this.router.navigate(['/auth/']); }
      if (aut === null) { this.router.navigate(['/auth/']); }
      if (this.currentUser === null) {
          this.login(aut);
      } else {
        if(this.currentUser.Token === token) {
          this.router.navigate(['/dashboard/']);
          } else { this.login(aut); }
      } 
    }
    catch { this.router.navigate(['/auth/']); }
  }

  login(Id) {
    this.loading = true;
    this.service.Drivelogin(Id).subscribe(res => {
      if (res) { const response = res as any;
        if (response.Message === 'success') {
          this.router.navigate(['/dashboard/']);
          this.loading = false;
        }
        if (response.Message === 'failure') {
          this.toastr.warning(response.MessageDescription);
          this.loading = false;
          }
      }
    }, error => { console.log(error); this.loading = false;  });
  }
}

