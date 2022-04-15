using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Notification
    {
        [Key]
        public Guid Id { get; set; }
        [DefaultValue(false)]
        public bool CreateTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool CreateTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool CreateTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool AllocateTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool AllocateTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool AllocateTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool ReAllocateTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool ReAllocateTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool ReAllocateTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool RescheduleTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool RescheduleTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool RescheduleTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool CompletionTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool CompletionTicketAdmin { get; set; }

        [DefaultValue(false)]
        public bool HoldTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool HoldTicketAdmin { get; set; }

        [DefaultValue(false)]
        public bool WorkOrderCustomer { get; set; }
        [DefaultValue(false)]
        public bool WorkOrderAdmin { get; set; }


        [DefaultValue(false)]
        public bool QuoteCustomer { get; set; }
        [DefaultValue(false)]
        public bool QuoteAdmin { get; set; }


        [DefaultValue(false)]
        public bool StartEndTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool StartEndTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool ReminRecurTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool ReminRecurTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool ReminRecurTicketAdmin { get; set; }

        [DefaultValue(false)]
        public bool DailyNosOfTicketEngineer { get; set; }


        [DefaultValue(false)]
        public bool CancelTicketCustomer { get; set; }
        [DefaultValue(false)]
        public bool CancelTicketEngineer { get; set; }
        [DefaultValue(false)]
        public bool CancelTicketAdmin { get; set; }


        [DefaultValue(false)]
        public bool OnServiceDayCustomer { get; set; }
        [DefaultValue(false)]
        public bool OnServiceDayEngineer { get; set; }
        [DefaultValue(false)]
        public bool OnServiceDayAdmin { get; set; }


        [DefaultValue(false)]
        public bool OnTheDayCustomer { get; set; }
        [DefaultValue(false)]
        public bool OnTheDayTicketAdmin { get; set; }
    }

    public class NotificationTemplate
    {
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TemplateName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ModuleName { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string CustomerMailBody { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string EngineerMailBody { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string MobileNotification { get; set; }
        [DefaultValue(false)]
        public bool IsRead { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string AdminMailBody { get; set; }
        public DateTime? CreatedDate { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
    }
    public class NotificationHistory
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public string Type { get; set; }
    }

}
