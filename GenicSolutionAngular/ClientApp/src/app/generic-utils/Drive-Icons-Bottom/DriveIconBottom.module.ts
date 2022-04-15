import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveIconsBottomComponent } from './DriveIconBottom.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DriveIconsBottomComponent],
  exports: [DriveIconsBottomComponent]
})
export class DriveIconsBottomModule {}
