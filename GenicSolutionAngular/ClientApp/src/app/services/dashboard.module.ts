export class DashboardCustomer {CustomerCount: number;CustomerPer: number;CustomerAll: number;CustomerActive: number;CustomerTotalAmount: number;CustomerStatus: string;}
export class DashboardTicket {TicketCount: number;TicketPer: number;TicketAll: number;TicketRecurring: number;TicketTotalAmount: number;TicketStatus: string;}
export class DashboardTotal {TotalTicketOpen: number;TotalTicketTodayNew: number;TotalTicketClosedToday: number;TotalTicketOverDue: number;TotalEngneer: number;}
export class DashboardAverage {AvegareCount: number;AvegarePer: number;AvegarePerTicket: number;AverageStatus: string;}
export class DashboardTicketDue {TicketDueTimeToday: number;TicketDueTimeTomarrow: number;TicketDueTimeThisWeek: number;TicketDueTimeNextWeek: number;TicketDueTimeNextMonth: number;}
export class DashboardTicketChart {TicketChartTodayHeigh: number;TicketChartTodayMedium: number;TicketChartTodayLow: number;TicketChartTomarrowHeigh: number;TicketChartTomarrowMedium: number;TicketChartTomarrowLow: number;TicketChartThisWeekHeigh: number;TicketChartThisWeekMedium: number;TicketChartThisWeekLow: number;}
export class DashboardTicketPieChart {Count: number;TicketIssueTypeId: number;Name: string;}

export class EDTicket {TotalTicket: number;TotalOpenTicket: number;TotalNewTicketToday: number;TotalTicketClosedToday: number;TotalTicketOverDue: number;TotalUpcoming: number;}
export class EDTicketDue {TicketOverDue: number;TicketDueTimeToday: number;TicketDueTimeTomarrow: number;TicketDueTimeThisWeek: number;TicketDueTimeNextWeek: number;TicketDueTimeNextMonth: number;}
export class EDTicketChart {TicketChartTodayHeigh: number;TicketChartTodayMedium: number;TicketChartTodayLow: number;TicketChartTomarrowHeigh: number;TicketChartTomarrowMedium: number;TicketChartTomarrowLow: number;TicketChartThisWeekHeigh: number;TicketChartThisWeekMedium: number;TicketChartThisWeekLow: number;}

export class CDTicket extends EDTicket {}
export class CDTicketDue extends EDTicketDue {}
export class CDTicketChart extends EDTicketChart {}
