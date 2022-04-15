import { Component, Input } from '@angular/core';

@Component({
 // tslint:disable-next-line: component-selector
  selector: 'generic-drive-icons-bottom',
  template: `
	<h2 class="quick-bottom-h2" [ngSwitch]="Name.split('.')[1].toString().toLowerCase()" title="{{Name}}">
		<i *ngSwitchCase="'pdf'" class="fa fa-file-pdf" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'jpg'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'jpeg'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'png'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'xls'" class="fas fa-file-excel" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'xlsx'" class="fas fa-file-excel" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'doc'" class="fas fa-file-word" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'docx'" class="fas fa-file-word" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'txt'" class="fas fa-file-alt" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'csv'" class="fas fa-file-alt" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<ng-content *ngIf="Name.length < 14; then desc1; else desc2"></ng-content>
		<ng-template #desc1>{{ Name }}</ng-template>
		<ng-template #desc2>{{ Name.substring(0,5) }}...{{ Name.substr(-5) }}
		</ng-template>
	</h2>
  `,
  styles: [`
  .quick-bottom-h2{padding:7px;background-color:white;border-bottom-right-radius: 8px;border-bottom-left-radius: 8px;}
  .quick-bottom-h2{font-size:11px;font-weight:600;padding-bottom:0px;margin-bottom:5px;padding-top:0px;}
  .quick-bottom-h2 i{color:green;padding-right:5px;padding-bottom:5px;font-size:13px;}
  `]
})
export class DriveIconsBottomComponent {
  @Input() Name: string;
  @Input() ColorCode: string;
}
