import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../services';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [``]
})
export class AuthComponent implements OnInit {
  currentUser: Login;
  title = 'ClientApp';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  localPrependUrl: string;
  constructor(
    public titleService: Title,
    public service: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
    ) {
        this.service.currentUser.subscribe(x => this.currentUser = x);
        this.localPrependUrl = environment.apiUrl;
        if (this.service.currentUserValue) {
         // this.router.navigate(['/']);
         }
    }
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          UserName: ['', Validators.required],
          Password: ['', Validators.required]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.titleService.setTitle('Login | Genic Solution');
  }
  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.error = '';
        this.submitted = true;
        if (this.loginForm.invalid) { return; }
        this.loading = true;
        this.service.login(this.f.UserName.value, this.f.Password.value).pipe(first()).subscribe(
                res => { this.router.navigate([this.returnUrl]); },
                error => {
                  switch (error.status) {
                          case 404 : this.toastr.warning('warning', this.ErrorMessage(error.status));
                                     this.error = this.ErrorMessage(error.status); break;
                          case 401 : this.toastr.warning('warning', this.ErrorMessage(error.status));
                                     this.error = this.ErrorMessage(error.status); break;
                          case 400 : this.toastr.warning('warning', this.ErrorMessage(error.status));
                                     this.error = this.ErrorMessage(error.status); break;
                          default : this.toastr.error('error', error.statusText); break;
                        }
                });
        this.loading = false;
    }

ErrorMessage(code: number): string {
  switch (code) {
    case 404: return 'Invalid username & password';
    case 401: return 'Your account is inactive';
    case 400: return 'Make sure your Username and Password should be Case Sensitive';
  }
}
}

