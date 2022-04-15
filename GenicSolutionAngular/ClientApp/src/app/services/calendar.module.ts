// export class Calendar {
//     Count?: number;
//     EngineerId?: string;
//     EngineerName?: string;
//     EngineerLogo?: string;
//     EngineerMobile?: string;
//     RemaningTask?: number;
//     List?: {
//         Id?: string;
//         TicketId?: string;
//         OneOffAppointmentDate?: string;
//         CustomerAddress?: string;
//         Status?: string;
//         }
//     ;
// }
// export class CalendarTicket {
//     Id?: string;
//     TicketId?: string;
//     CustomerName?: string;
//     CustomerAddress?: string;
//     OneOffStartTime?: string;
//     OneOffEndTime?: string;
//     Latitude?: number;
//     Longitude?: number;
//     Status?: string;
// }

// export class CalendarTicketDetails extends  CalendarTicket {
//     Title?: string;
//     Description?: string;
//     CustomerContactNo?: string;
//     CustomerEmail?: string;
//     GenerateDate?: string;
//     List?: {
//         EngineerName?: string;
//         EngineerLogo?: string;
//         Type?: number;
//         };
//     Logs?: [{
//         RecentDescription?: string;
//         LogDate?: string;
//         }];
// }

// export class CalendarResource {
//     Id?: string;
//     CustomerId?: string;
//     EngineerId?: string;
//     Priority?: number;
//     Status?: string;
//     Date?: Date;
// }

export class RecourceParam  {
    TokenNo: string;
    CustomerId?: any = [] ;
    EngineerId?: any = [];
    Priority?: any = [];
    Status?: any = [];
  }
export class EngineerLocation {
    EngineerId?: string;
    EngineerName?: string;
    EngineerLogo?: string;
    Latitude?: number;
    Longitude?: number;
    LocationAddress?: string;
    LocationDate?: string;
}
