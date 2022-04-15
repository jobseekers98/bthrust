import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CloserDetails, CloserAttachment, CloserAttachmentAduio } from '../services/closerDetails.module';
import { environment } from 'src/environments/environment';
import { TicketService } from './ticket.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloserService {
  CloserDetailsData: CloserDetails;
  CloserDetailsList: CloserDetails[];
  CloserAttachmentData: CloserAttachment;
  CloserAttachmentList: CloserAttachment[];
  CloserAttachmentAduioData: CloserAttachmentAduio;
  CloserAttachmentAduioList: CloserAttachmentAduio[];
  constructor(
    private http: HttpClient,
    private ticketService: TicketService
  ) {
    this.SetDefaultCloserDetailsData();
    this.CloserAttachmentData = {
      CAID: 0,
      CloserID: '00000000-0000-0000-0000-000000000000',
      AttachmentExtenstion: '',
      AttachmentFile: '',
      AttachmentSize: 0,
	  AttachmentExtenstionAfter: '',
      AttachmentFileAfter: '',
      AttachmentSizeAfter: 0,
      Remarks: '',
      CloserAttachmentAduioList: [],
    };
    this.CloserDetailsData.CloserAttachmentList = [];
    this.CloserAttachmentList = [];
    this.SetDefaultCloserAudio();
    this.CloserAttachmentAduioList = [];
  }
  SetDefaultCloserDetailsData() {
    this.CloserDetailsData = {
      CloserID: '00000000-0000-0000-0000-000000000000',
      CloserPrefix: '',
      TicketId: '00000000-0000-0000-0000-000000000000',
      TicketNo: '',
      TimerID: 0,
      EngineerId: '00000000-0000-0000-0000-000000000000',
      EnginnerName: '',
      CustomerSignature: '',
      EngineerSignature: '',
      StartDate: new Date(),
      EndDate: new Date(),
      StartTime: '',
      EndTime: '',
      TotalDuration: '',
      Remarks: '',
      TicketFlag: 'UPCOMING',
      IsReady: false,
      PaymentCollected: false,
      CloserAmount: 0,
      CloserGSTAmount: 0,
      CloserTotalAmount: 0,
      PaymentMode: 'SelectMode',
      AmountPaid: 0,
      PaymentRemarks: '',
      NameOfSignatory: '',
      ICNo: '',
      EngineerName: '',
      ServiceBy: '',
      attentionName: '',
      attentionEmail: '',
      otherAttentionName: '',
      IsTested: true,
      WithCustomerSignature: false,
      CheckedBy: '',
      CloserAttachmentList: []
    }
  }
  SetDefaultCloserAudio() {
    this.CloserAttachmentAduioData = {
      AttachmentAudioId: '00000000-0000-0000-0000-000000000000',
      CloserID: '00000000-0000-0000-0000-000000000000',
      CAID: 0,
      AttachmentAudioName: '',
      AudioAttachment: '',
      AudiotSize: 0,
      CreatedDate: new Date(),
    };
  }

  getTicketCloserLog(token: string, TicketId: string) {
    return this.http.get(environment.apiUrl + '/api/Tickets/getTicketCloserLog/' + token + '/' + TicketId).pipe(map(response => response));
  }
  getTicketCloserAttachmentList(token: string, CloserId: string) {
    return this.http.get(environment.apiUrl + '/api/Attachment/GetCloserAttachmentList/' + token + '/' + CloserId).pipe(map(response => response));
  }
  postTempTicketCloserDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Attachment/postCloserDetails/' + token, this.CloserDetailsData).pipe(map(response => response));
  }
  putTicketCloserDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Attachment/putCloserDetails/' + token, this.CloserDetailsData).pipe(map(response => response));
  }
  OverWriteCloserDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Attachment/OverWriteCloserDetails/' + token, this.CloserDetailsData).pipe(map(response => response));
  }
  PostCloserDetails(token: string) {
    return this.http.post(environment.apiUrl + '/api/Tickets/PostCloserData/' + token, this.CloserAttachmentData).pipe(map(response => response));
  }
  PutCloserDetails(token: string) {
    return this.http.put(environment.apiUrl + '/api/Tickets/PutCloserData/' + token, this.CloserAttachmentData).pipe(map(response => response));
  }
  removeCloserAttachment(token: string, CAID: number, CloserId: string) {
    return this.http.delete(environment.apiUrl + '/api/Attachment/deleteCloserAttachment/' + token + '/' + CAID + '/' + CloserId).pipe(map(response => response));
  }


  postCloserAttachmentAudioData(token: string) {
    return this.http.post(environment.apiUrl + '/api/Attachment/PostCloserAttachmentAudio/' + token, this.CloserAttachmentAduioData).pipe(map(response => response));
  }
  getCloserAttachmentAudioList(token: string, CloserId: string) {
    return this.http.get(environment.apiUrl + '/api/Attachment/GetCloserAttachmentAudio/' + token + '/' + CloserId).pipe(map(response => response));
  }
  removeAudioAttachment(token: string, AttachmentAudioId: string) {
    return this.http.delete(environment.apiUrl + '/api/Attachment/removeAudioAttachment/' + token + '/' + AttachmentAudioId).pipe(map(response => response));
  }
}
