using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Invoice
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string InvoiceTitle { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
        [DefaultValue(0)]
        public int InvoiceUniqueID { get; set; }
        [ForeignKey("Customer")]
        public Guid CustomerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyName { get; set; }
        [ForeignKey("Property")]
        public Guid PropertyId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerContactNo { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerEmail { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerAddress { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string ClientRemark { get; set; }
        [DefaultValue(0)]
        public double SubTotal { get; set; }
        [DefaultValue(0)]
        public int DiscountType { get; set; }
        [DefaultValue(0)]
        public double DiscountTextValue { get; set; }
        [DefaultValue(0)]
        public double DiscountAmount { get; set; }
        [ForeignKey("Tax")]
        public int? TaxId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TaxName { get; set; }
        [DefaultValue(0)]
        public double TaxRate { get; set; }
        [DefaultValue(0)]
        public double TaxAmount { get; set; }
        [DefaultValue(0)]
        public int ReqDepositeType { get; set; }
        [DefaultValue(0)]
        public int ReqDepositeTextValue { get; set; }
        [DefaultValue(0)]
        public double ReqDepositeAmount { get; set; }
        [DefaultValue(0)]
        public double NetAmount { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string InternalNotes { get; set; }
        [DefaultValue(false)]
        public bool ClientViewQty { get; set; }
        [DefaultValue(false)]
        public bool ClientViewUnitCost { get; set; }
        [DefaultValue(false)]
        public bool ClientViewLineItemTotal { get; set; }
        [DefaultValue(false)]
        public bool ClientAccountBalance { get; set; }
        [DefaultValue(false)]
        public bool LateStamp { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string Status { get; set; } // 1= Draft, 2= SendOutPaid, 3= SendOutUnPaid, 4 = SendOutOverDue, 5= PartiallyPaid  6=cancelled
        [Column(TypeName = "NVarChar(32)")]
        public string InvoiceConvertedFrom { get; set; }
        public Guid? InvoiceConvertedID { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? InvoiceDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? InvoiceDueDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ModifiedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        [Column(TypeName = "nvarchar(32)")]
        public string TicketId { get; set; }
        [Column(TypeName = "nvarchar(32)")]
        public string QuoteId { get; set; }
        [Column(TypeName = "nvarchar(32)")]
        public string RefranceNo { get; set; }
        [DefaultValue(0)]
        public int SMTPId { get; set; }
        public virtual ICollection<InvoiceItem> InvoiceItemList { get; set; }
        public virtual ICollection<InvoiceAttachment> InvoiceAttachmentList { get; set; }
        public virtual ICollection<InvoiceReminder> InvoiceReminder { get; set; }
    }
    public class InvoiceItem
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Invoice")]
        public virtual Guid InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string Type { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ItemName { get; set; }
        [DefaultValue(0)]
        public double Qty { get; set; }
        [DefaultValue(0)]
        public double UnitCost { get; set; }
        [DefaultValue(0)]
        public double Total { get; set; }
        [DefaultValue(false)]
        public bool IsPriseRevised { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string ItemDescription { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UniqId { get; set; }
        [DefaultValue(true)]
        public bool InWarranty { get; set; }
        [DefaultValue(0)]
        public int WarrantyDays { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ModifiedUtcDate { get; set; }
    }
    public class InvoiceAttachment
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Invoice")]
        public virtual Guid InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentExtension { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Attachment { get; set; }
        [DefaultValue(0)]
        public long AttachmentSize { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
    }
    public class InvoiceReminder : ReminderBase
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Invoice")]
        public virtual Guid InvoiceId { get; set; }
    }
}
