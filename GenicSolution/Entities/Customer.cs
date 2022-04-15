using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Customer : BillingAddress
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string CustomerId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string NameTitle { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string FirstName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string LastName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [DefaultValue(false)]
        [Required]
        public bool ClientReminders { get; set; }
        [DefaultValue(false)]
        public bool ClientFollowUpEmails { get; set; }
        [DefaultValue(false)]
        public bool PrintEmailOnWorkOuder { get; set; }
        [DefaultValue(false)]
        public bool UseCompanyNameAsPrimaryName { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string RefferdBy { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string CustomerLogo { get; set; }
        [DefaultValue(true)]
        public bool Status { get; set; }
        [DefaultValue(false)]
        public bool IsAddressSame { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? ModifiedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        public virtual ICollection<ArrayofKey> ArrayofKeys { get; set; }
        public virtual ICollection<Property> Properties { get; set; }
        public virtual ICollection<CustomerContactPerson> CustomerContactPerson { get; set; }
        public virtual ICollection<CustomerDepartment> CustomerDepartment { get; set; }

    }
    public class BillingAddress
    {
        [Column(TypeName = "NVarChar(255)")]
        public string AddressStreet1 { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AddressStreet2 { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AddressCity { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AddressUnitNo { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AddressState { get; set; }
        [Column(TypeName = "NVarChar(6)")]
        public string AddressZipCode { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AddressCountry { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Latitude { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Longitude { get; set; }
    }
    public class ArrayofKey
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Key { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Value { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Type { get; set; }
        [DefaultValue(false)]
        public bool IsDefault { get; set; }
        [ForeignKey("Customer")]
        public virtual Guid CustomerId { get; set; }
    }
    public class CustomerContactPerson
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string NameTitle { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string FirstName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string LastName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Email { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Phone { get; set; }
        [DefaultValue(false)]
        public bool IsDefaultContact { get; set; }
        [ForeignKey("Customer")]
        public virtual Guid CustomerId { get; set; }
    }
    public class CustomerDepartment
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Customer")]
        public virtual Guid CustomerId { get; set; }
        [ForeignKey("SMTPSettings")]
        public int SMTPSettingsId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string SMTPName { get; set; }
    }
    public class Property : BillingAddress
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string PropertyId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Remarks { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedUtcDate { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ModifiedUtcDate { get; set; }
        [ForeignKey("Customer")]
        public virtual Guid CustomerId { get; set; }
    }
}
