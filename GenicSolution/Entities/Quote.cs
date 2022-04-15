using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Quote
    {
        [Key]
        public Guid Id { get; set; }
        public string QuoteId { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string JobTitle { get; set; }
        [DefaultValue(0)]
        public int QuoteUniqueID { get; set; }
        [ForeignKey("Customer")]
        public Guid CustomerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerAddress { get; set; }
        [ForeignKey("Property")]
        public Guid PropertyId { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string CustomerContactNo { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerEmail { get; set; }
        [Column(TypeName = "NVarChar(max)")]
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
        [Column(TypeName = "NVarChar(max)")]
        public string InternalNotes { get; set; }
        [DefaultValue(0)]
        public bool ClientViewQty { get; set; }
        [DefaultValue(0)]
        public bool ClientViewUnitCost { get; set; }
        [DefaultValue(0)]
        public bool ClientViewLineItemTotal { get; set; }
        [DefaultValue(0)]
        public bool ClientViewTotal { get; set; }
        [DefaultValue(0)]
        public bool LinkToJob { get; set; }
        [DefaultValue(0)]
        public bool LinkToInvoice { get; set; }
        [DefaultValue(1)]
        public int Status { get; set; } /// 1= Draft, 2= Accepted, 3=Not Accepted, 4= Pending, 5=Cancelled
        [ForeignKey("Invoice")]
        public Guid? InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string InvoiceNo { get; set; }
        [ForeignKey("Ticket")]
        public Guid? TicketId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketNo { get; set; }
        [DefaultValue(0)]
        public int Rating { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ModifiedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string SalesRepresentative { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string PreparedBy { get; set; }
        public Guid? CreatedBy { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string DID { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string FAX { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CCName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CCContact { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string QuoteTermsAndCondition { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Attention { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentPDF { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string SalesPersonSignature { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string CustomerSignature { get; set; }
        [DefaultValue(0)]
        public int SMTPId { get; set; }
        public virtual ICollection<QuoteItem> QuoteItemList { get; set; }
        public virtual ICollection<QuoteAttachment> QuoteAttachmentList { get; set; }
        public virtual ICollection<Tax> TaxList { get; set; }
        public virtual ICollection<QuoteReminder> QuoteReminder { get; set; }
    }
    public class QuoteItem
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Quote")]
        public virtual Guid QuoteId { get; set; }
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
    public class QuoteAttachment
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Quote")]
        public virtual Guid QuoteId { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string Attachment { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentExtension { get; set; }
        [DefaultValue(0)]
        public long AttachmentSize { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
    }
    public class QuoteReminder : ReminderBase
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Quote")]
        public virtual Guid QuoteId { get; set; }
    }
}
