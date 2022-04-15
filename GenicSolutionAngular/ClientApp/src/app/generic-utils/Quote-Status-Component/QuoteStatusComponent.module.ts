import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuoteStatusComponent } from './QuoteStatusComponent.component';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QuoteStatusComponent],
  exports: [QuoteStatusComponent]
})
export class QuoteStatusComponentModule {}
