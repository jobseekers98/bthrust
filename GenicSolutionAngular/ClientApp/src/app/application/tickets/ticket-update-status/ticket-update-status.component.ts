import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-update-status',
  templateUrl: './ticket-update-status.component.html',
  styles: []
})
export class TicketUpdateStatusComponent implements OnInit {
  constructor(
    public ticketservice: TicketService,
    public dialogRef: MatDialogRef<TicketUpdateStatusComponent>
  ) { }

  ngOnInit() {
  }
  onSubmit(status: string) {
      if (status === undefined) {
        this.dialogRef.close();
      } else {
        this.dialogRef.close( { status } );
      }
    }
}
