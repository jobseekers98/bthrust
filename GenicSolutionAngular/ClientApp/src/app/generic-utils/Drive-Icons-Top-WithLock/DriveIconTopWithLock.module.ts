import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriveIconsTopWithLockComponent } from './DriveIconTopWithLock.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DriveIconsTopWithLockComponent],
  exports: [DriveIconsTopWithLockComponent]
})
export class DriveIconsTopWithLockModule {}
