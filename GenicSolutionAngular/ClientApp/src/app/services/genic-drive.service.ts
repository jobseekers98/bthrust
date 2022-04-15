import { Injectable } from '@angular/core';
import { GenicDrive, SharedDrive, DriveComment, DriveLog, GenicDriveUser, SearchMyDrive, SearchRecentDrive } from './genic-drive.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenicDriveService {
  GenicDriveFolderData: GenicDrive;
  GenicDriveFolderDataLocal: GenicDrive;
  GenicDriveFolderList: GenicDrive[];

  GenicDriveFolderAnFileList: GenicDrive[];
  GenicDriveMovableData: GenicDrive;

  GenicDriveFileData: GenicDrive;
  GenicDriveFileList: GenicDrive[];

  GenicDriveQuickAccessFileList: GenicDrive[];
  localGenicDriveBreadCrumb: GenicDrive[];

  SharedDriveData: SharedDrive;
  SharedDriveWithUsers: SharedDrive[];

  SharedDriveFolderList: GenicDrive[];
  SharedDriveFileList: GenicDrive[];

  DriveCommentData: DriveComment;
  DriveCommentList: DriveComment[];

  DriveLogData: DriveLog;
  DriveTodaysLogList: DriveLog[];
  DriveEarlierLogList: DriveLog[];

  GenicDriveUserList: GenicDriveUser[];

  BaseParentIdToMove: string;
  FileDataToOpenInPopup: GenicDrive;

  SearchMyDrive: SearchMyDrive;
  SearchRecentDrive: SearchRecentDrive;

  constructor(private http: HttpClient) {
    this.setDefaultGenicDrive();
    this.setDefaultGenicDriveFileData();
    this.setDefaultGenicDriveMovableData();
    this.setDefaultSharedDrive();
    this.setDefaultDriveComment();
    this.setDefaultDriveLog();
    this.setDefaultFileDataToOpenInPopup();
    this.GenicDriveFolderList = [];
    this.GenicDriveFileList = [];
    this.GenicDriveQuickAccessFileList = [];
    this.SharedDriveFolderList = [];
    this.SharedDriveFileList = [];
    this.DriveCommentList = [];
    this.DriveTodaysLogList = [];
    this.DriveEarlierLogList = [];
    this.GenicDriveFolderAnFileList = [];
    this.localGenicDriveBreadCrumb = [];
    this.GenicDriveUserList = [];
    this.SharedDriveWithUsers = [];
    this.BaseParentIdToMove = '00000000-0000-0000-0000-000000000000';
    this.SearchMyDrive = new SearchMyDrive();
    this.SearchRecentDrive = new SearchRecentDrive();
  }
  setDefaultGenicDrive() {
    this.GenicDriveFolderData = {
      Id: '00000000-0000-0000-0000-000000000000',
      UserId: null,
      Name: 'Untitled folder',
      ParentId: '00000000-0000-0000-0000-000000000000',
      AttachmentName: '',
      AttachmentSize: 0,
      FolderType: 1,
      IsFavourite: false,
      IsTrash: false,
      IsLocked: false,
      LockPassword: '',
      LockedBy: null,
      ColorCode: 'rgb(254, 146, 0)',
      CreatedDate: new Date(),
      CreatedBy: null,
      CreatedByName: '',
      UpdatedDate: new Date(),
      UpdatedBy: null,
      UpdatedByName: '',
      OpenDate: new Date(),
      FileExtension: '',
      Description: '',
      DriveCommentList: []
    };
  }
  setDefaultGenicDriveFileData() {
    this.GenicDriveFileData = {
      Id: '00000000-0000-0000-0000-000000000000',
      UserId: null,
      Name: '',
      ParentId: '00000000-0000-0000-0000-000000000000',
      AttachmentName: '',
      AttachmentSize: 0,
      FolderType: 1,
      IsFavourite: false,
      IsTrash: false,
      IsLocked: false,
      LockPassword: '',
      LockedBy: null,
      ColorCode: 'rgb(254, 146, 0)',
      CreatedDate: new Date(),
      CreatedBy: null,
      CreatedByName: '',
      UpdatedDate: new Date(),
      UpdatedBy: null,
      UpdatedByName: '',
      OpenDate: new Date(),
      FileExtension: '',
      Description: '',
      DriveCommentList: []
    };
  }
  setDefaultGenicDriveMovableData() {
    this.GenicDriveFolderData = {
      Id: '00000000-0000-0000-0000-000000000000',
      UserId: null,
      Name: 'Untitled folder',
      ParentId: '00000000-0000-0000-0000-000000000000',
      AttachmentName: '',
      AttachmentSize: 0,
      FolderType: 1,
      IsFavourite: false,
      IsTrash: false,
      IsLocked: false,
      LockPassword: '',
      LockedBy: null,
      ColorCode: 'rgb(254, 146, 0)',
      CreatedDate: new Date(),
      CreatedBy: null,
      CreatedByName: '',
      UpdatedDate: new Date(),
      UpdatedBy: null,
      UpdatedByName: '',
      OpenDate: new Date(),
      FileExtension: '',
      Description: '',
      DriveCommentList: []
    };
  }
  setDefaultFileDataToOpenInPopup() {
    this.FileDataToOpenInPopup = {
      Id: '00000000-0000-0000-0000-000000000000',
      UserId: null,
      Name: 'Untitled folder',
      ParentId: '00000000-0000-0000-0000-000000000000',
      AttachmentName: '',
      AttachmentSize: 0,
      FolderType: 1,
      IsFavourite: false,
      IsTrash: false,
      IsLocked: false,
      LockPassword: '',
      LockedBy: null,
      ColorCode: 'rgb(254, 146, 0)',
      CreatedDate: new Date(),
      CreatedBy: null,
      CreatedByName: '',
      UpdatedDate: new Date(),
      UpdatedBy: null,
      UpdatedByName: '',
      OpenDate: new Date(),
      FileExtension: '',
      Description: '',
      DriveCommentList: []
    };
  }
  setDefaultSharedDrive() {
    this.SharedDriveData = {
      Id: '00000000-0000-0000-0000-000000000000',
      GenicDriveId: null,
      SenderId: null,
      ToUserId: null,
      ToUserName: null,
      SendDate: new Date(),
      Remark: '',
      IsEdit: true,
      IsComment: true,
      IsView: true,
    };
  }
  setDefaultDriveComment() {
    this.DriveCommentData = {
      CommentId: '00000000-0000-0000-0000-000000000000',
      GenicDriveId: null,
      CommentedBy: null,
      Comment: '',
      CommentedDate: new Date(),
    };
  }
  setDefaultDriveLog() {
    this.DriveLogData = {
      LogId: '00000000-0000-0000-0000-000000000000',
      GenicDriveId: null,
      DriveName: null,
      FolderType: 1,
      FileExtension: '',
      UserId: null,
      UserName: null,
      DrivePath: null,
      Action: '',
      Activity: '',
      LogDate: new Date()
    };
  }
  //  -------Folder Section Start ----------------
  postCreateGenicFolder(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicDrives/CreateDriveFolder/' + token, this.GenicDriveFolderData)
    .pipe(map(response => response));
  }
  // Get Drive folder
  getDriveFolder(UserId: string, ParentId: string) {
    return this.http.get(environment.apiUrl + '/api/GenicDrives/getDriveFolder/' + UserId + '/' + ParentId)
      .toPromise().then(res =>
        this.GenicDriveFolderList = res as GenicDrive[]
      );
  }
  // Get Starred Drive folder
  getStarredDriveFolder(UserId: string, ParentId: string) {
    return this.http.get(environment.apiUrl + '/api/GenicDrives/getStarredDriveFolder/' + UserId + '/' + ParentId)
      .toPromise().then(res =>
        this.GenicDriveFolderList = res as GenicDrive[]
      );
  }
// Change folder color
ChangeDriveFolderColor(token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/ChangeDriveFolderColor/' + token, this.GenicDriveFolderData)
  .pipe(map(response => response));
}
// Move: Drive folder with sub folders
moveToTrashDriveFolder(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/MoveToTrashDriveFolder/' + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
// Restore: Drive folder with sub folders

restoreDriveFolder(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/restoreDriveFolder/' + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
// Remove: Drive folder with sub folders
removeDriveFolder(token: string, Id: string) {
return this.http.delete(environment.apiUrl + '/api/GenicDrives/RemoveDriveFolder/' + token + '/' + Id, {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' }).toPromise();
}
// Get Drive Trash folder
getTrashDriveFolder(UserId: string) {
return this.http.get(environment.apiUrl + '/api/GenicDrives/getTrashDriveFolder/' + UserId)
  .toPromise().then(res =>
    this.GenicDriveFolderList = res as GenicDrive[]
  );
}
// Add to star: Drive folder

AddToStarDriveFolder(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/AddToStarDriveFolder/' + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
// Remove star: from Drive folder
removeStarFromDriveFolder(UserId: string, Id: string) {
  return this.http.delete(environment.apiUrl + '/api/GenicDrives/removeStarFromDriveFolder/' + UserId + '/' + Id, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).toPromise();
}
// Change Drive Description
updateDriveDescription() {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/updateDriveDescription', this.GenicDriveFolderData , {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).toPromise();
}
// Get Folder and file list to move
getDriveFolderAndFileToMove(UserId: string, ParentId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getDriveFolderAndFileToMove/' + UserId + '/' + ParentId)
    .toPromise().then(res =>
      this.GenicDriveFolderAnFileList = res as GenicDrive[]
    );
}
// Post: Move drive or file within drive
onDriveMoveWithinDrive(token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/onDriveMoveWithinDrive/' + token, this.GenicDriveMovableData)
  .pipe(map(response => response));
}
// Get Drive User list
getUsersToShareDrive(UserId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getUsersToShareDrive/' + UserId)
    .toPromise().then(res =>
      this.GenicDriveUserList = res as GenicDriveUser[]
    );
}
postshareDrive(token: string) {
  return this.http.post(environment.apiUrl + '/api/GenicDrives/shareDrive/' + token, this.SharedDriveData)
  .pipe(map(response => response));
}
// Remove from Sharing drive file or folder
// removeFromSharingFolderOrFiles(UserId: string, Id: string) {
//   return this.http.delete(environment.apiUrl + '/api/GenicDrives/removeFromSharingFolderOrFiles/' + UserId + '/' + Id, {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
//     observe: 'response' }).toPromise();
// }
removeFromSharingFolderOrFiles(UserId: string, Id: string, token: string) {
  return this.http.delete(environment.apiUrl + '/api/GenicDrives/removeFromSharingFolderOrFiles/' + UserId + '/' + Id + '/' + token)
  .pipe(map(response => response));
}
// Get: Shared with me Drive folder
getSharedWithMeDriveFolder(UserId: string, ParentId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getSharedWithMeDriveFolder/' + UserId + '/' + ParentId)
    .toPromise().then(res =>
      this.SharedDriveFolderList = res as GenicDrive[]
    );
}

// Lock drive folder or file
addLockToFolderOrFiles(token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/addLockToFolderOrFiles/' + token, this.GenicDriveFolderData)
  .pipe(map(response => response));
}
// Un-Lock drive folder or file
unLockFolderOrFiles(token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/unLockFolderOrFiles/' + token, this.GenicDriveFolderData)
  .pipe(map(response => response));
}
// Get: Drive folder or file that shared with  user
// getUsersToSharedWithDrive(Id: string) {
//   return this.http.get(environment.apiUrl + '/api/GenicDrives/getDrivesToSharedWithUsers/' + Id )
//     .toPromise().then(res =>
//       this.SharedDriveWithUsers = res as SharedDrive[]
//     );
// }
getUsersToSharedWithDrive(Id: string, token: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getDrivesToSharedWithUsers/' + Id  + '/' + token)
  .pipe(map(response => response));
}
// Get: Today's drive log
getTodaysDroveLog(Id: string, token: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getTodaysDroveLog/' + Id  + '/' + token)
  .pipe(map(response => response));
}
// Get: Drive Earlier's log
getThisMonthDroveLog(Id: string, token: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getThisMonthDroveLog/' + Id  + '/' + token)
  .pipe(map(response => response));
}
// empty all trash files and folders
emptyAllTrashfilesFolders(UserId: string) {
  return this.http.delete(environment.apiUrl + '/api/GenicDrives/emptyAllTrashfilesFolders/' + UserId , {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).pipe();
}
// validate current password
validateCurrentDrivePassword(UserId: string, Id: string, CurrentPassword: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/validateCurrentDrivePassword/' + UserId + '/' + Id + '/' + CurrentPassword)
  .pipe(map(response => response));
}
GetMyDriveSearchedList(UserId: string, ParentId: string, SearchText) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/GetMyDriveSearchedList/' + UserId + '/' + ParentId + '/' + SearchText)
    .pipe(map(
      response => {
        return response;
      }));
}
// Search trash drive folder and file
GetTrashSearchedList(UserId: string, SearchText) {
return this.http.get(environment.apiUrl + '/api/GenicDrives/GetTrashSearchedList/' + UserId + '/' + SearchText)
.pipe(map(
  response => {
    return response;
  }));
}
// Search recent Drive files
GetRecentSearchedList(UserId: string, SearchText) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/GetRecentSearchedList/' + UserId + '/' + SearchText)
  .pipe(map(
    response => {
      return response;
    }));
}
// Search Favourite Drive files and folder
GetFavouriteSearchedList(UserId: string, ParentId: string, SearchText: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/GetFavouriteSearchedList/' + UserId + '/' + ParentId + '/' + SearchText)
    .toPromise().then(res =>
      this.SearchMyDrive = res as SearchMyDrive
    );
}
// Search Shared with me Drive files and folder
GetSharedWithMeSearchedList(UserId: string, ParentId: string, SearchText: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/GetSharedWithMeSearchedList/' + UserId + '/' + ParentId + '/' + SearchText)
    .pipe(map(
      response => {
        return response;
      }));
}
  // --------Folder section end ----------------







  // --------File Section Start ----------------
  getDriveFiles(UserId: string, ParentId: string) {
    return this.http.get(environment.apiUrl + '/api/GenicDrives/getDriveFiles/' + UserId + '/' + ParentId)
      .toPromise().then(res =>
        this.GenicDriveFileList = res as GenicDrive[]
      );
  }
  // Get: Starred Drive files
  getStarredDriveFiles(UserId: string, ParentId: string) {
    return this.http.get(environment.apiUrl + '/api/GenicDrives/getStarredDriveFiles/' + UserId + '/' + ParentId)
      .toPromise().then(res =>
        this.GenicDriveFileList = res as GenicDrive[]
      );
  }

  GenicDrivePostFile(token: string) {
    return this.http.post(environment.apiUrl + '/api/GenicDrives/GenicDrivePostFile/' + token, this.GenicDriveFileData)
    .pipe(map(response => response));
  }
// Get Quick Access Drive Files
getQuickAccessDriveFiles(UserId: string, ParentId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getQuickAccessDriveFiles/' + UserId + '/' + ParentId)
    .toPromise().then(res =>
      this.GenicDriveQuickAccessFileList = res as GenicDrive[]
    );
}
// Get: Trash File
getTrashDriveFiles(UserId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getTrashDriveFiles/' + UserId)
    .toPromise().then(res =>
      this.GenicDriveFileList = res as GenicDrive[]
    );
}
// Move: Drive folder with sub folders
moveToTrashDriveFile(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/MoveToTrashDriveFile/'  + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
 // Restore: Drive File
restoreDriveFile(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/restoreDriveFile/' + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
 // Remove: Drive folder with sub folders
removeDriveFile(token: string, Id: string) {
  return this.http.delete(environment.apiUrl + '/api/GenicDrives/RemoveDriveFile/' + token + '/' + Id , null)
  .pipe(map(response => response));
}
// Add to start: Drive file
AddToStarDriveFile(UserId: string, Id: string, token: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/AddToStarDriveFile/' + UserId + '/' + Id + '/' + token, null)
  .pipe(map(response => response));
}
// remove : Star from Drive file
removeStarFromDriveFile(UserId: string, Id: string) {
return this.http.delete(environment.apiUrl + '/api/GenicDrives/removeStarFromDriveFile/' + UserId + '/' + Id, {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' }).toPromise();
}
// Get: Shared with me Drive file
getSharedWithMeDriveFiles(UserId: string, ParentId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getSharedWithMeDriveFiles/' + UserId + '/' + ParentId)
    .toPromise().then(res =>
      this.SharedDriveFileList = res as GenicDrive[]
    );
}
// Restore: Drive folder with sub folders
openDriveFiles(UserId: string, Id: string) {
  return this.http.put(environment.apiUrl + '/api/GenicDrives/openDriveFiles/' + UserId + '/' + Id, null, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).toPromise();
}
// Get: Today open drive file list
getRecentTodayOpenDrivefiles(UserId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getRecentTodayDrivefiles/' + UserId)
    .toPromise().then(res =>
      this.GenicDriveFolderList = res as GenicDrive[]
    );
}
// Get: this month open drive file list
getRecentThisMonthOpenDrivefiles(UserId: string) {
  return this.http.get(environment.apiUrl + '/api/GenicDrives/getRecentThisMonthDrivefiles/' + UserId)
    .toPromise().then(res =>
      this.GenicDriveFolderAnFileList = res as GenicDrive[]
    );
}
// Download : Drive file
DownloadDriveFile(obj: GenicDrive) {
  return this.http.post(environment.apiUrl + '/api/GenicDrives/DownloadDriveFile', obj , {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' }).pipe();
}
  // ------File Section End -------------------
}
