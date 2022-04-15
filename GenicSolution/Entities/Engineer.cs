using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class Engineer : BillingAddress
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string EngineerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerName { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string EngineerPhone { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerEmail { get; set; }
        [DefaultValue(0)]
        public int Type { get; set; } //0=Without Permissions, 1=Supervisor, 2=Foreman
        [DefaultValue(false)]
        public bool LoginAccess { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EmergencyName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EmergencyNumber { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EmergencyRelation { get; set; }
        [DefaultValue(false)]
        public bool Working { get; set; }
        [DefaultValue(false)]
        public bool IsActive { get; set; }
        [DefaultValue(false)]
        public bool IsReady { get; set; }
        [DefaultValue(false)]
        public bool AssignToOtherUser { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string CreateCustomer { get; set; }
        [Column(TypeName = "NVarChar(8)")]
        public string CreateForAllDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? CreatedUtcDate { get; set; }
        [DefaultValue("getutcdate()")]
        public DateTime? ModifiedUtcDate { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string EngineerLogo { get; set; }
        [Column(TypeName = "NVarChar(16)")]
        public string Color { get; set; }
        public virtual ICollection<TicketIssueType> EngineerWiseIssueTypeList { get; set; }
        public virtual ICollection<GenicZone> EngineerWiseZoneList { get; set; }
    }
    public class EngineerWiseIssueType
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("TicketIssueType")]
        public int TicketIssueTypeId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string IssueTypeName { get; set; }
        [ForeignKey("Engineer")]
        public Guid? EngineerId { get; set; }
    }
    public class EngineerAttendance
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Engineer")]
        public virtual Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(128)")]
        public string StartLatLong { get; set; }
        [Column(TypeName = "NVarChar(128)")]
        public string EndLatLong { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? StartDate { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string StartAddress { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? EndDate { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EndAddress { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string StartIP { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string EndIP { get; set; }
        [Column(TypeName = "NVarChar(512)")]
        public string Remark { get; set; }
        public virtual ICollection<EngineerAttendanceImage> EngineerAttendanceImage { get; set; }
    }
    public class EngineerAttendanceImage
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("EngineerAttendance")]
        public virtual int EngineerAttendanceId { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Image { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Ext { get; set; }
        [DefaultValue(0)]
        public long Size { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Status { get; set; }
    }
}
