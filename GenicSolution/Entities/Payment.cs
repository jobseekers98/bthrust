using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Payment
    {
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Invoice")]
        public Guid InvoiceId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string InvoiceNo { get; set; }
        [DefaultValue(0)]
        public double PaymentAmount { get; set; }
        [DefaultValue(0)]
        public double BalanceAmount { get; set; }
        public DateTime? PaymentDate { get; set; }
        [ForeignKey("PaymentMode")]
        public int? PModeId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string PaymentMethod { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TransactionId { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string PaymentNote { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public virtual ICollection<PaymentMode> PaymentModeList { get; set; }
    }


    public class Tax
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TaxName { get; set; }
        [DefaultValue(0)]
        public double TaxRate { get; set; }
        [DefaultValue(true)]
        public bool Status { get; set; }
        [DefaultValue(true)]
        public bool IsDefault { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
    }

    public class PaymentMode
    {
        //public Guid Id { get; set; }
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ModeName { get; set; }
        [DefaultValue(true)]
        public bool Status { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
