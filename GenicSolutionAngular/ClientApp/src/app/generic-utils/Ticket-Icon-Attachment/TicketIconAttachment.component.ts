import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'generic-ticket-icon-attachment',
  template: `
   	<div class="col-md-12" *ngIf="Status === 1">
        <img title="{{Name}}" style="width:100px;" src="{{localPrependUrl}}/assets/svg/{{ext}}.svg">
    </div>
    <div class="col-md-12" *ngIf="Status === 2">
        <div [ngSwitch]="ext">
              <div *ngSwitchCase="'png'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchCase="'jpg'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchCase="'jpeg'"><img title="{{Name}}" style="width:100px;" src="{{Path}}"></div>
              <div *ngSwitchDefault><img title="{{Name}}" style="width:100px;" src="{{localPrependUrl}}/assets/svg/{{ext}}.svg"></div>
        </div>
    </div>
  `
})
export class TicketIconAttachmentComponent implements OnInit {
  @Input() Name: string;
  @Input() Path: string;
  @Input() Status: number;
  localPrependUrl: string;
  ext: string;
  constructor() {
    this.localPrependUrl =  environment.apiUrl;
   }
   ngOnInit() { 
         if(this.Name?.length > 0) {
            this.ext = this.Name.toLowerCase().split('.').pop();
            } else { this.ext = 'noimage'; }
    }
}
