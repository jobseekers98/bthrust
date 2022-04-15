import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class DownloadService {

  constructor(private http: HttpClient) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
   // console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'sheet1': worksheet }, SheetNames: ['sheet1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  downloadFromServer(Tmodule: string, Token: string) {
    return this.http.get(environment.apiUrl + '/api/attachment/Downloads/ExcelFile/' + Tmodule + '/' + Token,
     { responseType: 'blob' }).toPromise();
   }
   downloadZip(ParentId: string) {
    return this.http.get(environment.apiUrl + '/GenicService/Download/zip/' + ParentId ,
     { responseType: 'blob' }).toPromise();
   }
  //  downloadZipSync(ParentId: string) {
  //   return this.http.get(environment.apiUrl + '/GenicService/Download/zip/' + ParentId)
  //       .pipe(map(
  //           Response => {
  //               return Response;
  //   }));
  // }
}
