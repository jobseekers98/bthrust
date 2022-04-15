using Microsoft.EntityFrameworkCore;

namespace GenicSolution.Entities
{
    public class EntityFrameworkDbContext : DbContext
    {
        public EntityFrameworkDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Login> Login { get; set; }
        public DbSet<LoginUsersOTP> LoginUsersOTP { get; set; }
        public DbSet<Permissions> Permissions { get; set; }


        /// <summary>
        /// Customer
        /// </summary>
        public DbSet<Customer> Customer { get; set; }
        public DbSet<CustomerDepartment> CustomerDepartment { get; set; }
        public DbSet<CustomerContactPerson> CustomerContactPerson { get; set; }
        public DbSet<ArrayofKey> ArrayofKey { get; set; }
        public DbSet<Property> Property { get; set; }


        /// <summary>
        /// Engineer
        /// </summary>
        public DbSet<Engineer> Engineer { get; set; }
        public DbSet<EngineerLocation> EngineerLocation { get; set; }
        public DbSet<EngineerAttendance> EngineerAttendance { get; set; }
        public DbSet<EngineerAttendanceImage> EngineerAttendanceImage { get; set; }
        public DbSet<GenicZone> GenicZone { get; set; }
        public DbSet<ZoneCoordinates> ZoneCoordinates { get; set; }
        public DbSet<EngineerWiseIssueType> EngineerWiseIssueType { get; set; }
        public DbSet<EngineerWiseZone> EngineerWiseZone { get; set; }

        /// <summary>
        /// Product and Service
        /// </summary>
        public DbSet<Service> Service { get; set; }
        public DbSet<Brand> Brand { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<ProductWarranty> ProductWarranty { get; set; }
        public DbSet<ItemofList> ItemofList { get; set; }

        /// <summary>
        /// Tickets
        /// </summary>
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<TicketTeam> TicketTeam { get; set; }
        public DbSet<TicketItem> TicketItem { get; set; }
        public DbSet<TicketAttachment> TicketAttachment { get; set; }
        public DbSet<TicketRecurringHelperDate> TicketRecurringHelperDate { get; set; }
        public DbSet<TicketWiseServiceForm> TicketWiseServiceForm { get; set; }
        public DbSet<TicketTimer> TicketTimer { get; set; }
        public DbSet<CloserDetails> CloserDetails { get; set; }
        public DbSet<CloserAttachment> CloserAttachment { get; set; }
        public DbSet<TicketIssueType> TicketIssueType { get; set; }
        public DbSet<CloserAttachmentAduio> CloserAttachmentAduio { get; set; }
        public DbSet<TicketWiseIssueType> TicketWiseIssueType { get; set; }
        public DbSet<TicketEquipment> TicketEquipment { get; set; }
        public DbSet<TicketEquipmentMasterData> TicketEquipmentMasterData { get; set; }


        /// <summary>
        /// Quote
        /// </summary>
        public DbSet<Quote> Quote { get; set; }
        public DbSet<QuoteItem> QuoteItem { get; set; }
        public DbSet<QuoteAttachment> QuoteAttachment { get; set; }

        /// <summary>
        /// Invoice
        /// </summary>
        public DbSet<Invoice> Invoice { get; set; }
        public DbSet<InvoiceItem> InvoiceItem { get; set; }
        public DbSet<InvoiceAttachment> InvoiceAttachment { get; set; }
        

        /// <summary>
        /// Payment
        /// </summary>
        public DbSet<Payment> Payment { get; set; }
        public DbSet<PaymentMode> PaymentMode { get; set; }


        /// <summary>
        /// SMTP Setting
        /// </summary>
        public DbSet<SMTPSettings> SMTPSettings { get; set; }
        public DbSet<UserLog> UserLog { get; set; }


        /// <summary>
        /// Genic Tables
        /// </summary>
        public DbSet<GenicProfile> GenicProfile { get; set; }
        public DbSet<GenicProfileCalendar> GenicProfileCalendar { get; set; }
        public DbSet<GenicFileExtenstion> GenicFileExtenstion { get; set; }
        public DbSet<GenicClients> GenicClients { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<Tax> Tax { get; set; }


        /// <summary>
        /// Drive
        /// </summary>
        public DbSet<GenicDrive> GenicDrive { get; set; }
        public DbSet<GenicDriveText> GenicDriveText { get; set; }
        public DbSet<SharedDrive> SharedDrive { get; set; }
        public DbSet<DriveLog> DriveLog { get; set; }

        /// <summary>
        /// Notification
        /// </summary>
        public DbSet<Notification> Notification { get; set; }
        public DbSet<NotificationTemplate> NotificationTemplate { get; set; }

        /// <summary>
        /// Service Form
        /// </summary>
        public DbSet<FSMServiceForm> FSMServiceForm { get; set; }

        /// <summary>
        /// Reminder Module
        /// </summary>
        public DbSet<TicketReminder> TicketReminder { get; set; }
        public DbSet<QuoteReminder> QuoteReminder { get; set; }
        public DbSet<InvoiceReminder> InvoiceReminder { get; set; }

    }
}
