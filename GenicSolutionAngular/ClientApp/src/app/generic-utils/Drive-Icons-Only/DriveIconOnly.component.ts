import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'generic-drive-icons-only',
  template: `
   	<span [ngSwitch]="FileExtension">
		<i *ngSwitchCase="'jpg'" class="fa fa-file-image" aria-hidden="true"></i>
		<i *ngSwitchCase="'jpeg'" class="fa fa-file-image" aria-hidden="true"></i>
		<i *ngSwitchCase="'png'" class="fa fa-file-image" aria-hidden="true"></i>
		<i *ngSwitchCase="'pdf'" class="fa fa-file-pdf" aria-hidden="true"></i>
		<i *ngSwitchCase="'xls'" class="fas fa-file-excel" aria-hidden="true"></i>
		<i *ngSwitchCase="'xlsx'" class="fas fa-file-excel" aria-hidden="true"></i>
		<i *ngSwitchCase="'doc'" class="fas fa-file-word" aria-hidden="true"></i>
		<i *ngSwitchCase="'docx'" class="fas fa-file-word" aria-hidden="true"></i>
		<i *ngSwitchCase="'txt'" class="fas fa-file-alt" aria-hidden="true"></i>
		<i *ngSwitchCase="'csv'" class="fas fa-file-alt" aria-hidden="true"></i>
		<i *ngSwitchDefault class="fa fa-folder" aria-hidden="true"></i>
</span>
  `
})
export class DriveIconsOnlyComponent {
  @Input() FileExtension: string;
}
