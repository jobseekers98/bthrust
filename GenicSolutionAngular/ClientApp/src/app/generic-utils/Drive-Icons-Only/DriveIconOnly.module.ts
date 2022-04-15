import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveIconsOnlyComponent } from './DriveIconOnly.component';



@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DriveIconsOnlyComponent],
  exports: [DriveIconsOnlyComponent]
})
export class DriveIconsOnlyModule {}
