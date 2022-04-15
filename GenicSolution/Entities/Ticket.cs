using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Ticket
    {
        [Key]
        public Guid Id { get; set; }
        [DefaultValue(0)]
        public int RecurringId { get; set; }
        [DefaultValue(0)]
        public int TicketUniqueID { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketId { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string Title { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TicketType { get; set; }
        [DefaultValue(false)]
        public bool OneOffScheduled { get; set; }
        [Column(TypeName = "date")]
        public DateTime? OneOffAppointmentDate { get; set; }
        [Column(TypeName = "time(7)")]
        public TimeSpan? OneOffStartTime { get; set; }
        [Column(TypeName = "time(7)")]
        public TimeSpan? OneOffEndTime { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string AppointmentStart { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string AppointmentEnd { get; set; }
        [DefaultValue(false)]
        public bool OneOffInvoice { get; set; }
        [DefaultValue(false)]
        public bool RecurringScheduled { get; set; }
        [Column(TypeName = "date")]
        public DateTime? RecurringStartDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime? RecurringEndDate { get; set; }
        [DefaultValue(0)]
        public int RecurringDuration { get; set; }
        [DefaultValue(0)]
        public int RecurringVisitFrequency { get; set; }
        [DefaultValue(0)]
        public int RecurringTotalVisit { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string RecurringInvoice { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Status { get; set; }
        [DefaultValue(3)]
        public int Priority { get; set; }  /// 1=High, 2=Medium, 3=Low
        [DefaultValue(0)]
        public double NetAmount { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string InternalNoteDescription { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string TermsAndConditions { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Terms { get; set; }
        [DefaultValue(false)]
        public bool InternalNoteQuote { get; set; }
        [DefaultValue(false)]
        public bool InternalNoteTicket { get; set; }
        [DefaultValue(false)]
        public bool InternalNoteInvoice { get; set; }
        [DefaultValue(false)]
        public bool InternalNoteAllowPayment { get; set; }
        [DefaultValue(false)]
        public bool WhenInvoiceClosed { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? TicketClosedDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ModifiedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool Rescheduled { get; set; }
        [DefaultValue(false)]
        public bool Reallocate { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerContactNo { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerEmail { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerAddress { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerCompanyName { get; set; }
        [ForeignKey("Customer")]
        public Guid CustomerId { get; set; }
        [ForeignKey("Property")]
        public Guid PropertyId { get; set; }
        [ForeignKey("Invoice")]
        public Guid? InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string InvoiceNo { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string QuoteId { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketConvertedFrom { get; set; } /// Quote // Request
        public Guid? TicketConvertedID { get; set; }
        public Guid? CreatedBy { get; set; }
        [DefaultValue(0)]
        public int SMTPId { get; set; }
        [DefaultValue(0)]
        public int Rating { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string RatingFeedback { get; set; }
        public virtual ICollection<TicketTeam> TicketTeams { get; set; }
        public virtual ICollection<TicketItem> TicketItems { get; set; }
        public virtual ICollection<TicketAttachment> TicketAttachments { get; set; }
        public virtual ICollection<TicketWiseIssueType> TicketWiseIssueType { get; set; }
        public virtual ICollection<TicketReminder> TicketReminder { get; set; }
        public virtual ICollection<TicketEquipment> TicketEquipment { get; set; }
        
    }
    public class TicketTeam
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid? TicketId { get; set; }
        [ForeignKey("Engineer")]
        public virtual Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerLogo { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? AppointmentStartTime { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? AppointmentEndTime { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? TicketAssignDate { get; set; }
        [DefaultValue(true)]
        public bool IsFree { get; set; }
        [DefaultValue(0)]
        public int Type { get; set; }
    }
    public class TicketItem
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid TicketId { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string Type { get; set; } /// Product/Service
        [Column(TypeName = "NVarChar(255)")]
        public string ItemName { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string ItemDescription { get; set; }
        [DefaultValue(0)]
        public double ItemQuantity { get; set; }
        [DefaultValue(0)]
        public double ItemUnitCost { get; set; }
        [DefaultValue(0)]
        public double ItemTotalCost { get; set; }
        [DefaultValue(false)]
        public bool IsPriseRevised { get; set; }
        [DefaultValue(false)]
        public bool ItemAddredBy { get; set; } /// 0=Admin, 1=Engineer
        public Guid? ItemAddredById { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ItemAddredByName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ItemBatch { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string BatchQty { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UniqId { get; set; }
        [DefaultValue(true)]
        public bool InWarranty { get; set; }
        [DefaultValue(0)]
        public int WarrantyDays { get; set; }
        [Column(TypeName = "date")]
        public DateTime? InstallationDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool IsMaintance { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string MaintanceRemarks { get; set; }

    }
    public class TicketAttachment
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentName { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid TicketId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentPath { get; set; }
        [DefaultValue(0)]
        public long AttachmentSize { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
    }
    public class TicketIssueType
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Name { get; set; }
        [DefaultValue(false)]
        public bool IsAssigned { get; set; }
    }
    public class TicketTimer
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey("Engineer")]
        public virtual Guid EngineerId { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid TicketId { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? StartDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? EndDate { get; set; }
        [Column(TypeName = "NVarChar(20)")]
        public string StartTime { get; set; }
        [Column(TypeName = "NVarChar(20)")]
        public string EndTime { get; set; }
        [DefaultValue(0)]
        public int Status { get; set; } ///1 Status= Open ,2 status =close
        [Column(TypeName = "NVarChar(2048)")]
        public string Remarks { get; set; }
    }
    public class TicketRecurringHelper
    {
        [Key]
        public int Id { get; set; }
        [DefaultValue(0)]
        public int Type { get; set; } /// 1 = WEEK, 2 = MONTH
        [DefaultValue(1)]
        public int IsFor { get; set; } /// 1 = Ticket, 2 = Reminder
        [Column(TypeName = "date")]
        public DateTime RecurringStartDate { get; set; }
        [DefaultValue(0)]
        public int RecurringDuration { get; set; }
        [DefaultValue(0)]
        public int RecurringVisitFrequency { get; set; }
        [DefaultValue(false)]
        public bool SundayIsActive { get; set; }
        [DefaultValue(false)]
        public bool MondayIsActive { get; set; }
        [DefaultValue(false)]
        public bool TuesdayIsActive { get; set; }
        [DefaultValue(false)]
        public bool WednesdayIsActive { get; set; }
        [DefaultValue(false)]
        public bool ThursdayIsActive { get; set; }
        [DefaultValue(false)]
        public bool FridayIsActive { get; set; }
        [DefaultValue(false)]
        public bool SaturdayIsActive { get; set; }

        [DefaultValue(false)]
        public bool Date1 { get; set; }
        [DefaultValue(false)]
        public bool Date2 { get; set; }
        [DefaultValue(false)]
        public bool Date3 { get; set; }
        [DefaultValue(false)]
        public bool Date4 { get; set; }
        [DefaultValue(false)]
        public bool Date5 { get; set; }
        [DefaultValue(false)]
        public bool Date6 { get; set; }
        [DefaultValue(false)]
        public bool Date7 { get; set; }
        [DefaultValue(false)]
        public bool Date8 { get; set; }
        [DefaultValue(false)]
        public bool Date9 { get; set; }
        [DefaultValue(false)]
        public bool Date10 { get; set; }

        [DefaultValue(false)]
        public bool Date11 { get; set; }
        [DefaultValue(false)]
        public bool Date12 { get; set; }
        [DefaultValue(false)]
        public bool Date13 { get; set; }
        [DefaultValue(false)]
        public bool Date14 { get; set; }
        [DefaultValue(false)]
        public bool Date15 { get; set; }
        [DefaultValue(false)]
        public bool Date16 { get; set; }
        [DefaultValue(false)]
        public bool Date17 { get; set; }
        [DefaultValue(false)]
        public bool Date18 { get; set; }
        [DefaultValue(false)]
        public bool Date19 { get; set; }
        [DefaultValue(false)]
        public bool Date20 { get; set; }

        [DefaultValue(false)]
        public bool Date21 { get; set; }
        [DefaultValue(false)]
        public bool Date22 { get; set; }
        [DefaultValue(false)]
        public bool Date23 { get; set; }
        [DefaultValue(false)]
        public bool Date24 { get; set; }
        [DefaultValue(false)]
        public bool Date25 { get; set; }
        [DefaultValue(false)]
        public bool Date26 { get; set; }
        [DefaultValue(false)]
        public bool Date27 { get; set; }
        [DefaultValue(false)]
        public bool Date28 { get; set; }
        [DefaultValue(false)]
        public bool Date29 { get; set; }
        [DefaultValue(false)]
        public bool Date30 { get; set; }
        [DefaultValue(false)]
        public bool Date31 { get; set; }
    }
    public class TicketRecurringHelperDate
    {
        [Key]
        public int Id { get; set; }
        [DefaultValue(1)]
        public int IsFor { get; set; }
        [Column(TypeName = "date")]
        public DateTime Date { get; set; }
    }
    public class TicketWiseIssueType
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Ticket")]
        public Guid TicketId { get; set; }
        [ForeignKey("TicketIssueType")]
        public int TicketIssueTypeId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string IssueTypeName { get; set; }
    }
    public class EngineerLocation
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Engineer")]
        public virtual Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Latitude { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Longitude { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? LocationDate { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string LocationAddress { get; set; }
        [DefaultValue(false)]
        public bool LastLocation { get; set; }
    }
    public class TicketReminder : ReminderBase
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid TicketId { get; set; }
    }
    public class ReminderBase
    {
        [Column(TypeName = "NVarChar(1024)")]
        public string Subject { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Body { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string MailTo { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? RecurringStartDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? RecurringEndDate { get; set; }
        [DefaultValue(0)]
        public int Duration { get; set; } /// 0=One Time, 0 > Recurring
        [DefaultValue(0)]
        public int VisitFrequency { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ReminderDate { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
    }
    public class TicketEquipment
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Ticket")]
        public virtual Guid TicketId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Name { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Remark { get; set; }
        [DefaultValue(0)]
        public double Quantity { get; set; }
    }
    public class TicketEquipmentMasterData
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Name { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
    }
}
