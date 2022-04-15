export class ReminderBase {
    Subject: string;
    Body: string;
    MailTo: string;
    RecurringStartDate?: string;
    RecurringEndDate?: string;
    Duration: number;
    VisitFrequency: number;
    ReminderDate: string;
    IsActive: boolean;
}
