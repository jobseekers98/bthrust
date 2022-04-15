using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Login
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [Required(ErrorMessage = "User Name is required")]
        public string UserName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string FullName { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string MobileNumber { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Email { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Type { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Logo { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Logo64Bit { get; set; }
        [ForeignKey("Permissions")]
        public int? PermissionId { get; set; }
        public Guid? Token { get; set; }
        public Guid? DriveToken { get; set; }
        public Guid? AuthenticateToken { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string AppToken { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string DeviceId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Ostype { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Devicename { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Deviceversion { get; set; }
        [DefaultValue(false)]
        public bool TokenVerified { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? ModifiedUtcDate { get; set; }
        public int SMTPId { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? LastLoginUtcDate { get; set; }
        public virtual Permissions Permissions { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
    }
    public class Permissions
    {
        [Key]
        public int Id { get; set; }
        [DefaultValue(false)]
        public bool DashboardAdmin { get; set; }

        [DefaultValue(false)]
        public bool DriveView { get; set; }
        [DefaultValue(false)]
        public bool DriveCreate { get; set; }
        [DefaultValue(false)]
        public bool DriveEdit { get; set; }
        [DefaultValue(false)]
        public bool DriveRemove { get; set; }

        [DefaultValue(false)]
        public bool CustomerView { get; set; }
        [DefaultValue(false)]
        public bool CustomerCreate { get; set; }
        [DefaultValue(false)]
        public bool CustomerEdit { get; set; }
        [DefaultValue(false)]
        public bool CustomerRemove { get; set; }

        [DefaultValue(false)]
        public bool CalendarView { get; set; }
        [DefaultValue(false)]
        public bool ResourceView { get; set; }
        [DefaultValue(false)]
        public bool MapView { get; set; }
        [DefaultValue(false)]
        public bool LiveTracking { get; set; }
        [DefaultValue(false)]
        public bool PropertyView { get; set; }
        [DefaultValue(false)]
        public bool PropertyCreate { get; set; }
        [DefaultValue(false)]
        public bool PropertyEdit { get; set; }
        [DefaultValue(false)]
        public bool PropertyRemove { get; set; }
        [DefaultValue(false)]
        public bool QuoteView { get; set; }
        [DefaultValue(false)]
        public bool QuoteCreate { get; set; }
        [DefaultValue(false)]
        public bool QuoteEdit { get; set; }
        [DefaultValue(false)]
        public bool QuoteRemove { get; set; }
        [DefaultValue(false)]
        public bool InvoiceView { get; set; }
        [DefaultValue(false)]
        public bool InvoiceCreate { get; set; }
        [DefaultValue(false)]
        public bool InvoiceEdit { get; set; }
        [DefaultValue(false)]
        public bool InvoiceRemove { get; set; }
        [DefaultValue(false)]
        public bool TicketView { get; set; }
        [DefaultValue(false)]
        public bool TicketCreate { get; set; }
        [DefaultValue(false)]
        public bool TicketEdit { get; set; }
        [DefaultValue(false)]
        public bool TicketRemove { get; set; }
        [DefaultValue(false)]
        public bool EngineerView { get; set; }
        [DefaultValue(false)]
        public bool EngineerCreate { get; set; }
        [DefaultValue(false)]
        public bool EngineerEdit { get; set; }
        [DefaultValue(false)]
        public bool EngineerRemove { get; set; }
        [DefaultValue(false)]
        public bool ReportTicket { get; set; }
        [DefaultValue(false)]
        public bool ReportEngineer { get; set; }
        [DefaultValue(false)]
        public bool ReportVisit { get; set; }
        [DefaultValue(false)]
        public bool ProductView { get; set; }
        [DefaultValue(false)]
        public bool ProductCreate { get; set; }
        [DefaultValue(false)]
        public bool ProductEdit { get; set; }
        [DefaultValue(false)]
        public bool ProductRemove { get; set; }
        [DefaultValue(false)]
        public bool ProductWarranty { get; set; }
        [DefaultValue(false)]
        public bool ServiceView { get; set; }
        [DefaultValue(false)]
        public bool ServiceCreate { get; set; }
        [DefaultValue(false)]
        public bool ServiceEdit { get; set; }
        [DefaultValue(false)]
        public bool ServiceRemove { get; set; }
        [DefaultValue(false)]
        public bool SettingView { get; set; }
        [DefaultValue(false)]
        public bool BrandView { get; set; }
        [DefaultValue(false)]
        public bool BrandCreate { get; set; }
        [DefaultValue(false)]
        public bool BrandEdit { get; set; }
        [DefaultValue(false)]
        public bool BrandRemove { get; set; }
        [DefaultValue(false)]
        public bool CategoryView { get; set; }
        [DefaultValue(false)]
        public bool CategoryCreate { get; set; }
        [DefaultValue(false)]
        public bool CategoryEdit { get; set; }
        [DefaultValue(false)]
        public bool CategoryRemove { get; set; }
        [DefaultValue(false)]
        public bool IssueTypeView { get; set; }
        [DefaultValue(false)]
        public bool IssueTypeCreate { get; set; }
        [DefaultValue(false)]
        public bool IssueTypeEdit { get; set; }
        [DefaultValue(false)]
        public bool IssueTypeRemove { get; set; }
        [DefaultValue(false)]
        public bool PaymentView { get; set; }
        [DefaultValue(false)]
        public bool PaymentCreate { get; set; }
        [DefaultValue(false)]
        public bool PaymentEdit { get; set; }
        [DefaultValue(false)]
        public bool PaymentRemove { get; set; }
        [DefaultValue(false)]
        public bool SMTPSettingView { get; set; }
        [DefaultValue(false)]
        public bool SMTPSettingCreate { get; set; }
        [DefaultValue(false)]
        public bool SMTPSettingEdit { get; set; }
        [DefaultValue(false)]
        public bool SMTPSettingRemove { get; set; }
        [DefaultValue(false)]
        public bool GeofencingView { get; set; }
        [DefaultValue(false)]
        public bool EnableZoneCreate { get; set; }
        [DefaultValue(false)]
        public bool EnableZoneEdit { get; set; }
        [DefaultValue(false)]
        public bool EnableZoneRemove { get; set; }
        [DefaultValue(false)]
        public bool LogView { get; set; }
        [DefaultValue(false)]
        public bool UserView { get; set; }
        [DefaultValue(false)]
        public bool UserCreate { get; set; }
        [DefaultValue(false)]
        public bool UserEdit { get; set; }
        [DefaultValue(false)]
        public bool UserRemove { get; set; }

        [DefaultValue(false)]
        public bool DashboardEngineer { get; set; }
        [DefaultValue(false)]
        public bool EngineerProfileView { get; set; }
        [DefaultValue(false)]
        public bool EngineerTicketView { get; set; }
        [DefaultValue(false)]
        public bool EngineerTimesheetView { get; set; }

        [DefaultValue(false)]
        public bool GoogleCalendar { get; set; }
        [DefaultValue(false)]
        public bool EngineerLeave { get; set; }
        [DefaultValue(false)]
        public bool EngineerType { get; set; }
        [DefaultValue(true)]
        public bool AllowReceivePayment { get; set; }
        [DefaultValue(true)]
        public bool AllowCustomerName { get; set; }
        [DefaultValue(true)]
        public bool IsRequiredCustomerName { get; set; }
        [DefaultValue(false)]
        public bool TaxView { get; set; }
        [DefaultValue(false)]
        public bool TaxCreate { get; set; }
        [DefaultValue(false)]
        public bool TaxEdit { get; set; }
        [DefaultValue(false)]
        public bool TaxRemove { get; set; }



        [DefaultValue(false)]
        public bool NotificationView { get; set; }
        [DefaultValue(false)]
        public bool NotificationCreate { get; set; }
        [DefaultValue(false)]
        public bool NotificationEdit { get; set; }
        [DefaultValue(false)]
        public bool NotificationRemove { get; set; }

        [DefaultValue(false)]
        public bool TemplateView { get; set; }
        [DefaultValue(false)]
        public bool TemplateCreate { get; set; }
        [DefaultValue(false)]
        public bool TemplateEdit { get; set; }
        [DefaultValue(false)]
        public bool TemplateRemove { get; set; }
        [DefaultValue(false)]
        public bool IsProductOnly { get; set; }
        [DefaultValue(false)]
        public bool CanEngineerCreateTicket { get; set; }
        [DefaultValue(false)]
        public bool CloserEdit { get; set; }
        [DefaultValue(false)]
        public bool GeoLocation { get; set; }
    }
    public class LoginUsersOTP
    {
        [ForeignKey("Login")]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(4)")]
        public string OTP { get; set; }
        [DefaultValue(false)]
        public bool flag { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? Date { get; set; }
    }
    public class ForgetPassword
    {
        public string UserName { get; set; }
        public string OTP { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
