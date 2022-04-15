import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'generic-drive-icons-name',
  template: `
	   <span *ngIf="FolderType === 1">Drive Folder</span>
	   <span *ngIf="FolderType === 2">{{FileExtension.toUpperCase()}}</span>
  `
})
export class DriveIconsNameComponent {
  @Input() FileExtension: string;
  @Input() FolderType: number;
}
