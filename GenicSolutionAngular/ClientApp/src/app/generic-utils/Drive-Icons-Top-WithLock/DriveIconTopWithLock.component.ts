import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'generic-drive-icons-top-with-lock',
  template: `
  <i *ngIf="IsLocked" class="fas fa-lock sharedLockByAdmin" [ngStyle]="{'color': ColorCode }" aria-hidden="true" title="Password Protect file" ></i>
   	<div [ngSwitch]="Name.split('.')[1].toString().toLowerCase()">
		<i *ngSwitchCase="'jpg'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'jpeg'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'png'" class="fa fa-file-image" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'pdf'" class="fa fa-file-pdf" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'xls'" class="fas fa-file-excel" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'xlsx'" class="fas fa-file-excel" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'doc'" class="fas fa-file-word" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'docx'" class="fas fa-file-word" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'txt'" class="fas fa-file-alt" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchCase="'csv'" class="fas fa-file-alt" [ngStyle]="{'color': ColorCode }" aria-hidden="true"></i>
		<i *ngSwitchDefault class="fa fa-folder" aria-hidden="true"></i>
	</div>
  `,
  styles: [`
 .sharedLockByAdmin { position: absolute;font-size: 12px;margin-left: 8px;margin-top: 9px;color: red !important; }
  `]
})
export class DriveIconsTopWithLockComponent {
  @Input() Name: string;
  @Input() ColorCode: string;
  @Input() IsLocked: boolean;
}
