using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{

    public class CloserDetails
    {
        [Key]
        public Guid CloserID { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string CloserPrefix { get; set; }
        [ForeignKey("Ticket")]
        public Guid TicketId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketNo { get; set; }
        [DefaultValue(0)]
        public int TimerID { get; set; }
        [ForeignKey("Engineer")]
        public Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EnginnerName { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string CustomerSignature { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string EngineerSignature { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string NameOfSignatory { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? StartDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? EndDate { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string StartTime { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string EndTime { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TotalDuration { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Remarks { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketFlag { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        [DefaultValue(true)]
        public bool PaymentCollected { get; set; }
        [DefaultValue(0)]
        public double CloserAmount { get; set; }
        [DefaultValue(0)]
        public double CloserGSTAmount { get; set; }
        [DefaultValue(0)]
        public double CloserTotalAmount { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string PaymentMode { get; set; }
        [DefaultValue(0)]
        public double AmountPaid { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string PaymentRemarks { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ICNo { get; set; }

        [Column(TypeName = "NVarChar(255)")]
        public string EngineerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ServiceBy { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string attentionName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string attentionEmail { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string otherAttentionName { get; set; }
        [DefaultValue(true)]
        public bool IsTested { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CheckedBy { get; set; }
        [DefaultValue(false)]
        public bool WithCustomerSignature { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CustomerSignatureDate { get; set; }
        public virtual ICollection<CloserAttachment> CloserAttachmentList { get; set; }
    }
    public class CloserAttachment
    {
        [Key]
        public int CAID { get; set; }
        [ForeignKey("CloserDetails")]
        public Guid CloserID { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentExtenstion { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string AttachmentFile { get; set; }
        [DefaultValue(0)]
        public long AttachmentSize { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Remarks { get; set; }
        public virtual ICollection<CloserAttachmentAduio> CloserAttachmentAduioList { get; set; }
    }
    public class CloserAttachmentAduio
    {
        [Key]
        public Guid AttachmentAudioId { get; set; }
        [ForeignKey("CloserDetails")]
        public Guid CloserID { get; set; }
        [ForeignKey("CloserAttachment")]
        public int CAID { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AttachmentAudioName { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string AudioAttachment { get; set; }
        [DefaultValue(0)]
        public long AudiotSize { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
