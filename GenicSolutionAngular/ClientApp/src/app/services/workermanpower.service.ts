import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { WorkerManpower, WorkerManpowerFilter, Workers, WorkerRestList, WorkerTeam, WorkerManpowerImage } from './workermanpower.module';

@Injectable({
  providedIn: 'root'
})
export class WorkerManpowerService {
  formData: WorkerManpower;
  WorkerManpowerList: WorkerManpower[];
  WorkerManpowerLocalList: WorkerManpower[];
  WorkersData: Workers;
  WorkersDataList: Workers[];
  WorkerRestData: WorkerRestList;
  WorkerRestList: WorkerRestList[];
  WorkerTeamData: WorkerTeam;
  WorkerTeamList: WorkerTeam[];
  WorkerManpowerFilterData: WorkerManpowerFilter;
  WorkerManpowerImageData: WorkerManpowerImage
  date = new Date();
  TODAY = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
  TODAY_START_DATE_IN_STRING = this.TODAY.getFullYear().toString().padStart(4, '0') + '-' +
  (this.TODAY.getMonth() + 1).toString().padStart(2, '0') + '-' +
  this.TODAY.getDate().toString().padStart(2, '0') + 'T08:00:00.000Z';
  TODAY_END_DATE_IN_STRING = this.TODAY.getFullYear().toString().padStart(4, '0') + '-' +
  (this.TODAY.getMonth() + 1).toString().padStart(2, '0') + '-' +
  this.TODAY.getDate().toString().padStart(2, '0') + 'T20:00:00.000Z';
  constructor(private http: HttpClient) {
    this.RunBlankModule();
  }
  RunBlankModule() {
    this.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      CustomerId: '00000000-0000-0000-0000-000000000000',
      CustomerName: '',
      PropertyId: '00000000-0000-0000-0000-000000000000',
      PropertyAddress: '',
      StartDate: null,
      EndDate: null,
      JobHeading: '',
      WorkerTeam: [],
      WorkerName: []
    };
    this.WorkersData = {
      Id: '00000000-0000-0000-0000-000000000000',
      Name: '',
      SkillSet: '',
      IsActive: true
    };
    this.WorkerRestData = {
      Id: 0,
      WorkersId: '',
      RestDate: ''
    };
    this.WorkerTeamData = {
      Id: 0,
      WorkerManpowerId: '00000000-0000-0000-0000-000000000000',
      WorkerId: '00000000-0000-0000-0000-000000000000'

    };
    this.WorkerManpowerFilterData = {
      CustomerId : [],
      WorkerId : [],
      Date: null,
      IsReady: false
    };
    this.WorkerManpowerList = [];
    this.WorkerManpowerLocalList = [];
    this.WorkersDataList = [];
    this.WorkerRestList = [];
    this.WorkerManpowerImageData = {
      Id: 0,
      Image1Data: '',
      Image2Data: '',
      HeaderText1: 'MANPOWER SCHEDULE',
      HeaderText2: 'OUR TEAM, OUR DREAM, OUR AIRFRESH',
      FotterText: 'This schedule is for internal staff distribution only. Anyone caught providing information to maincon or outsider will be severly dealt with immediate termination.',
      HeaderTextBackground: '#ffbf00',
      LeftTextBackground: '#ffcb00',
      RightTextBackground: '#ffcb00',
      FotterTextBackground: '#ffbf00',
      HeaderTextColor: '#000',
      LeftTextColor: '#000',
      RightTextColor: '#f00',
      FotterTextColor: '#000',
      UpdateBy: '00000000-0000-0000-0000-000000000000',
      UpdateDate:null
    };
  }
  /*******************************************************************************/
  getWorkerManpowerList(token: string) {
      return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetWorkerManpowerData/' + token).pipe(map(response => response));
  }
  getWorkerManpowerFilterList(token: string) {
    return this.http.post(environment.apiUrl + '/api/WorkerManpower/GetWorkerManpowerFilterData/' + token, this.WorkerManpowerFilterData)
    .pipe(map(response => response));
  }
  getWorkerManpowerDetailsById(token: string, Id: string, ) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetWorkerManpowerById/' + token + '/' + Id)
    .pipe(map(response => response));
  }
  copyWorkerManpowerDetailsById(token: string, Id: string, ) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/CopyWorkerManpowerDataById/' + token + '/' + Id)
    .pipe(map(response => response));
  }
  generateScheduleByDate(token: string, y: number, m: number, d: number) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GenerateScheduleByDate/' + token + '/' + y + '/' + m + '/' + d)
    .pipe(map(response => response));
    }
  putWorkerManpowerDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/WorkerManpower/PutWorkerManpowerData/' + token, this.formData)
    .pipe(map( response => response));
  }
  postWorkerManpowerDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/WorkerManpower/PostWorkerManpowerData/' + token, this.formData)
    .pipe(map( response => response));
  }
  SetWorkerListData(token: string, y: number, m: number, d: number) {
    return this.http.post(environment.apiUrl + '/api/WorkerManpower/SetWorkerListData/' + token + '/' + y + '/' + m + '/' + d,
     this.WorkerRestList).pipe(map( response => response));
  }
  CheckValidateWorkerIsFreeOrNot(token: string, sd: string, ed: string, workerId: string, Validate: boolean ) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/CheckValidateWorkerIsFreeOrNot/' +
    token + '/' + sd + '/' + ed + '/' + workerId + '/' + Validate)
    .pipe(map( response => response));
  }
  removeWorkerManpower(token: string, id: string) {
    return this.http.put(environment.apiUrl + '/api/WorkerManpower/RemoveWorkerManpowerData/' + token + '/' + id, null).pipe(map(response => response));
  }
  //#region Workers Data
  getWokersDataList(token: string) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetWorkerData/' + token).pipe(map(response => response));
    }
  getWokersFilterDataList(token: string, y: number, m: number, d: number) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetWorkerFilterData/' + token + '/' + y + '/' + m + '/' + d)
    .pipe(map(response => response));
    }
  putWokersDataDetails(token: string) {
      return this.http.put(environment.apiUrl + '/api/WorkerManpower/PutWorkerData/' + token, this.WorkersData)
      .pipe(map( response => response));
    }
  postWokersDataDetails(token: string) {
      return this.http.post(environment.apiUrl + '/api/WorkerManpower/PostWorkersData/' + token, this.WorkersData)
      .pipe(map( response => response));
    }
  putWorkerStatusUpdate(token: string, Id: string) {
    return this.http.put(environment.apiUrl + '/api/WorkerManpower/PutWorkerStatusUpdate/' + token + '/' + Id, null)
    .pipe(map( Response => Response));
  }
  //#endregion

  //#region Get schedule Image Data
  getScheduleHeaderImageData(token: string) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetScheduleHeaderImageData/' + token).pipe(map(response => response));
    }
  putScheduleHeaderImageData(token: string) {
    return this.http.put(environment.apiUrl + '/api/WorkerManpower/PutScheduleHeaderImageData/' + token, this.WorkerManpowerImageData)
    .pipe(map( Response => Response));
  }
 //#endregion

  //#endregion
  // #region Customer List
   getCustomerList(token: string) {
    return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetCustomerList/' + token).pipe(map(response => response));
    }
    getPropertyList(token: string, CustomerId: string) {
      return this.http.get(environment.apiUrl + '/api/WorkerManpower/GetPropertyList/' + token + '/' + CustomerId)
      .pipe(map(response => response));
      }
   //#endregion
}
