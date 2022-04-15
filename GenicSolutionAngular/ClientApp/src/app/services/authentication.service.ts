import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login, Permission } from './login.mudule';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    loginData: Login;
    UserListForPermission: Login[];
    localLoginData: Login;
    Permission: Permission;
    PermissionData: Permission;
    private currentUserSubject: BehaviorSubject<Login>;
    public currentUser: Observable<Login>;
    private tokenExpirationTimer: any;
    private expiresIn: number;
    constructor(private http: HttpClient,  private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.loginData = new Login();
        this.UserListForPermission = [];
        this.PermissionData = new Permission();
        this.localLoginData = new Login();
        this.expiresIn = 60 * 60 * 9;
    }
    public get currentUserValue(): Login {
        return this.currentUserSubject.value;
    }
    login(UserName, Password) {
        this.loginData.UserName = UserName.toString().trim();
        this.loginData.Password = Password.toString().trim();
        this.loginData.Id = '00000000-0000-0000-0000-000000000000';
        return this.http.post<Login>(environment.apiUrl + '/api/Logins', this.loginData, {
             headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
            .pipe(map(user => {
                user.authdata = window.btoa(UserName + ':' + Password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.autoLogout(this.expiresIn * 1000);
                return user;
            }));
    }
    Drivelogin(token) {
        return this.http.get<Login>(environment.apiUrl + '/api/Logins/DriveLogins/' + token, {
             headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
            .pipe(map(res => {
                const response = res as any;
                if (response.Message === 'success') {
                    response.result.authdata = window.btoa('' + ':' + '');
                    localStorage.setItem('currentUser', JSON.stringify(response.result));
                    this.currentUserSubject.next(response.result);
                    this.autoLogout(this.expiresIn * 1000);
                    return res;
                  }
                  if (response.Message === 'failure') {
                    return res;
                } 
            }));
    }
logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        if (this.tokenExpirationTimer) { clearTimeout(this.tokenExpirationTimer); }
        this.tokenExpirationTimer = null;
        this.router.navigate(['/auth']);
    }
autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
    }, expirationDuration);
    }
GetUsersList(token) {
    return this.http.get(environment.apiUrl + '/api/Logins/GetUserList/' + token).pipe(map(Response => {return Response;}));
}
// change user Permission
changeUserStatus(token, UserId) {
    return this.http.put(environment.apiUrl + '/api/Logins/changeUserStatus/' + token + '/' + UserId, null).pipe(map(Response => {return Response;
}));
}

getPermissionData(Id: number) {
    return this.http.get(environment.apiUrl + '/api/Logins/GetUserWisePermissionList/' + Id)
        .pipe(map(
            Response => {
                return Response;
    }));
}
//   updateUserPermission() {
//     return this.http.put(environment.apiUrl + '/api/Logins/putUserPermissions', this.PermissionData)
//         .pipe(map(
//             Response => {
//                 return Response;
//     }));
// }
updateUserPermission(token, type) {
    return this.http.put(environment.apiUrl + '/api/Logins/putUserPermissions/' + token + '/' + type, this.PermissionData)
        .pipe(map(
            Response => {
                return Response;
    }));
}
updateUserProfile(token) {
    return this.http.put(environment.apiUrl + '/api/Logins/putUserProfile/' + token , this.localLoginData).pipe(map(Response => {return Response;}));
}

AddNewUserProfile1() {
   return  this.http.post(environment.apiUrl + '/api/Logins/AdNewUser', this.localLoginData).toPromise().then(res =>
      this.localLoginData = res as Login);
}

AddNewUserProfile(token: string) {
    return this.http.post(environment.apiUrl + '/api/Logins/AdNewUser/' + token, this.localLoginData)
        .pipe(map(
            Response => {
                return Response;
    }));
}
getengineerslist(Token: string) {
    return this.http.get(environment.apiUrl + '/api/Logins/GetEngineerList/' + Token).pipe(map(Response => {
        return Response;
      }));
}
getUserPermissions(t: string, userId: string) {
    return this.http.get(environment.apiUrl + '/api/Logins/GetPermissions/' + t + '/' + userId)
        .pipe(map(
            Response => {
                return Response;
    }));
}
}
