using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string ProductLogo { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ProductId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ProductName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ProductBrand { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ProductCategory { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
        [DefaultValue(0)]
        public double PurchasePrice { get; set; }
        [DefaultValue(0)]
        public double SalePrice { get; set; }
        [DefaultValue(0)]
        public double Quantity { get; set; }
        [DefaultValue(0)]
        public int LowStockTriggerQuantity { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime ModifiedUtcDate { get; set; }
        [Column(TypeName = "NVarChar(10)")]
        public string RuleType { get; set; }
        [DefaultValue(true)]
        public bool Status { get; set; }
        [DefaultValue(true)]
        public bool InWarranty { get; set; }
        [DefaultValue(0)]
        public int WarrantyDays { get; set; }
        public virtual ICollection<ItemofList> ItemofLists { get; set; }
    }

    public class ItemofList
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Product")]
        public virtual Guid ProductId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string BatchNo { get; set; }
        [DefaultValue(0)]
        public double AvailableQuantity { get; set; }
        public DateTime? ManufacturingDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        [DefaultValue(0)]
        public double UsedQty { get; set; }
        [DefaultValue(0)]
        public double TotalQty { get; set; }
        [DefaultValue(0)]
        public double HoldQty { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ProductUnit { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Remarks { get; set; }
    }
    public class ProductWarranty
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Product")]
        public Guid ProductId { get; set; }
        [ForeignKey("Customer")]
        public Guid CustomerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UniqId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Type { get; set; }
        [DefaultValue(0)]
        public int WarrantyDays { get; set; }
        [Column(TypeName = "date")]
        public DateTime? InstallationDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
    }

    public class Brand
    {
        [Key]
        public int BrandId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [Required(ErrorMessage = "Brand name is required")]
        public string BrandName { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string BrandLogo { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime ModifiedUtcDate { get; set; }
    }
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [Required(ErrorMessage = "Category name is required")]
        public string CategoryName { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime ModifiedUtcDate { get; set; }
    }
    public class Service
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ServiceId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ServiceName { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string ServiceDescription { get; set; }
        [DefaultValue(true)]
        public bool InWarranty { get; set; }
        [DefaultValue(0)]
        public int WarrantyDays { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime ModifiedUtcDate { get; set; }
    }
}
