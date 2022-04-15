import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveIconsBottomQuickAccessComponent } from './DriveIconBottomQuickAccess.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DriveIconsBottomQuickAccessComponent],
  exports: [DriveIconsBottomQuickAccessComponent]
})
export class DriveIconsBottomQuickAccessModule {}
