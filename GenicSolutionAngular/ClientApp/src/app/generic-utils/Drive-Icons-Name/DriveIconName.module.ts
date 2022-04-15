import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveIconsNameComponent } from './DriveIconName.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DriveIconsNameComponent],
  exports: [DriveIconsNameComponent]
})
export class DriveIconsNameModule {}
