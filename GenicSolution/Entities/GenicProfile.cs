using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class GenicProfile : BillingAddress
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(64)")]
        public string Name { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Logo { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TimeZone { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketPrefix { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string QuotePrefix { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string InvoicePrefix { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ServicePrefix { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string CloserPrefix { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string ContactNumber { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string WhatsAppNumber { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Email { get; set; }

        [Column(TypeName = "NVarChar(255)")]
        public string FacebookUrl { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string TwitterUrl { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string InstagramUrl { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string GoogleUrl { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string WebsiteUrl { get; set; }

        [Column(TypeName = "NVarChar(32)")]
        public string SundayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string MondayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TuesdayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string WednesdayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ThursdayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string FridayString { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string SaturdayString { get; set; }

        [DefaultValue(false)]
        public bool Sunday { get; set; }
        [DefaultValue(false)]
        public bool Monday { get; set; }
        [DefaultValue(false)]
        public bool Tuesday { get; set; }
        [DefaultValue(false)]
        public bool Wednesday { get; set; }
        [DefaultValue(false)]
        public bool Thursday { get; set; }
        [DefaultValue(false)]
        public bool Friday { get; set; }
        [DefaultValue(false)]
        public bool Saturday { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string TicketTermsConditions { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string QuotationHeader { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string InvoiceHeader { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ServiceHeader { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string QuoteTermsAndCondition { get; set; }
        public int BufferTime { get; set; }
        public int OTAfter { get; set; }
        [DefaultValue(false)]
        public bool WarrantyValidation { get; set; }
        [DefaultValue(1)]
        public int EngineerLength { get; set; }
        [DefaultValue(1)]
        public int CustomerLength { get; set; }
        [DefaultValue(1)]
        public int SubAdminLength { get; set; }
        [DefaultValue(false)]
        public bool Geolocation { get; set; }
        [DefaultValue(false)]
        public bool GeolocationAddress { get; set; }
        [DefaultValue(false)]
        public bool GeolocationImage { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? ModifiedUtcDate { get; set; }
    }
    public class GenicProfileCalendar
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("GenicProfile")]
        public virtual int GenicProfileId { get; set; }
        [Column(TypeName = "date")]
        public DateTime Date { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Description { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string WorkType { get; set; }
        [Column(TypeName = "time(7)")]
        public TimeSpan? StartTime { get; set; }
        [Column(TypeName = "time(7)")]
        public TimeSpan? EndTime { get; set; }
        public int LeaveFor { get; set; } /// 1=Business Calendar, 2=Engineer Holiday
        public Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string Status { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerName { get; set; }
        [DefaultValue(false)]
        public bool IsWorking { get; set; }
    }
    public class GenicClients
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyCode { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CompanyUrl { get; set; }
        [DefaultValue(false)]
        public bool IsActive { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue(false)]
        public bool IsOffline { get; set; }
        public Guid Token { get; set; }

    }
    public class SMTPSettings
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string SMTPName { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string EmailProtocol { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string EmailEncryption { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string SMTPHost { get; set; }
        [DefaultValue(0)]
        public int SMTPPort { get; set; }
        [Column(TypeName = "NVarChar(64)")]
        public string SMTPEmail { get; set; }
        [Column(TypeName = "NVarChar(64)")]
        public string SMTPUsername { get; set; }
        [Column(TypeName = "NVarChar(64)")]
        public string SMTPPassword { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string EmailCharset { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EmailSignature { get; set; }
    }
    public class Country
    {
        [Key]
        public int CountryId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [Required(ErrorMessage = "Country name is required")]
        public string CountryName { get; set; }
    }
    public class UserLog
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string IP { get; set; }
        public Guid? UserId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UserName { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Module { get; set; }
        public Guid? ModuleId { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ActionType { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Description { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string RecentDescription { get; set; }
        public DateTime? LogDate { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
    public class TicketFilter
    {
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public List<Guid> CustomerId { get; set; }
        public List<Guid> EngineerId { get; set; }
        public List<int> DepartmentId { get; set; }
        public List<string> Status { get; set; }
    }
    public class QuoteFilter
    {
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public List<Guid> CustomerId { get; set; }
        public List<Guid> EngineerId { get; set; }
        public List<int> DepartmentId { get; set; }
        public List<int> Status { get; set; }
    }
    public class GlobalFilter
    {
        public string query { get; set; }
    }
}
