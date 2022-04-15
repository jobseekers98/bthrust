import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DocumentUploadService {
  constructor(private http: HttpClient) { }
  uploadDocument(token: string, access_type: string, guid: string, id: string, remark: string, file: File) {
    if (guid === '') { guid = '00000000-0000-0000-0000-000000000000'; }
    if (id === '') { id = '0'; }
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.apiUrl + '/api-aws-doc-upload', formData, {
      reportProgress: true,
      headers: {
        "ACCESS_KEY": environment.Accesskey,
        "ACCESS_TYPE": access_type,
        "ACCESS_TOKEN": token,
        "ACCESS_GUID": guid,
        "ACCESS_Id": id,
        "Remark": remark
      }
    }).pipe(map(response => response));
  }
  RemoveDocument(token: string, access_type: string, guid: string, id: string, remark: string) {
    if (guid === '') { guid = '00000000-0000-0000-0000-000000000000'; }
    if (id === '') { id = '0'; }
    return this.http.delete(environment.apiUrl + '/api-aws-doc-remove', {
      reportProgress: true,
      headers: {
        "ACCESS_KEY": environment.Accesskey,
        "ACCESS_TYPE": access_type,
        "ACCESS_TOKEN": token,
        "ACCESS_GUID": guid,
        "ACCESS_Id": id,
        "Remark": remark
      }
    }).pipe(map(response => response));
  }
  uploadDocuments(token: string, access_type: string, guid: string, id: string, remark: string, file: File) {
    if (guid === '') { guid = '00000000-0000-0000-0000-000000000000'; }
    if (id === '') { id = '0'; }
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.apiUrl + '/api-aws-doc-uploads', formData, {
      reportProgress: true,
      headers: {
        "ACCESS_KEY": environment.Accesskey,
        "ACCESS_TYPE": access_type,
        "ACCESS_TOKEN": token,
        "ACCESS_GUID": guid,
        "ACCESS_Id": id,
        "Remark": remark
      }
    }).pipe(map(response => response));
  }
  uploadBase64Document(token: string, access_type: string, guid: string, id: string, base64: string, name: string, size: string) {
    if (guid === '') { guid = '00000000-0000-0000-0000-000000000000'; }
    if (id === '') { id = '0'; }
    return this.http.post(environment.apiUrl + '/api-aws-doc-base64-upload',
      {
        "Base64": base64
      },
      {
        reportProgress: true,
        headers: {
          "ACCESS_KEY": environment.Accesskey,
          "ACCESS_TYPE": access_type,
          "ACCESS_TOKEN": token,
          "ACCESS_GUID": guid,
          "ACCESS_Id": id,
          "Base64Name": name,
          "Base64Size": size,
          'Content-Type': 'application/json'
        }
      }).pipe(map(response => response));
  }
}

