import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login, ForgetPassword } from './login.mudule';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData: Login;
  loginList: Login[];
  UserList: Login[];
  forgetpassword: ForgetPassword;

  constructor(private http: HttpClient) {
    this.loginData = {
      Id: '00000000-0000-0000-0000-000000000000',
      UserName: '',
      FullName: '',
      Password: '',
      Type: '',
      Designation: 0,
      Token: '00000000-0000-0000-0000-000000000000',
      VTSToken: '',
      Logo: '',
      SMTPId: 0,
      CreatedUtcDate: new Date(),
      ModifiedUtcDate: new Date(),
      Permissions: null,
      Ticket: 'Ticket',
      Engineer: 'Engineer',
      Product: 'Product'
    };
    this.forgetpassword = {
      UserName: '',
      OTP: '',
      NewPassword: '',
      OldPassword: '',
      ConfirmPassword: ''
    };
   }

   putPasswordChange(Token: string) {
      return this.http.post(environment.apiUrl + '/api/Logins/PasswordChange/'+ Token , this.forgetpassword,).pipe(map(Response => {return Response;}));
  }

  ForgotPasswordStep1() {
    return this.http.post(environment.apiUrl + '/api/Logins/ForgotPasswordStep1', this.forgetpassword).pipe(map(Response => {return Response;}));
    }
  ForgotPasswordStep2() {
    return this.http.post(environment.apiUrl + '/api/Logins/ForgotPasswordStep2', this.forgetpassword).pipe(map(Response => {
        return Response;
      }));
    }
  ForgotPasswordStep3() {
    return this.http.post(environment.apiUrl + '/api/Logins/ForgotPasswordStep3', this.forgetpassword).pipe(map(Response => {
        return Response;
      }));
    }
}
