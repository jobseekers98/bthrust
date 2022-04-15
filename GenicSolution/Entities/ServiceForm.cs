using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class TicketWiseServiceForm
    {
        [Key]
        public int TicketServiceID { get; set; }
        [DefaultValue(0)]
        public int MasterServiceFormID { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ServiceFormName { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Description { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string TicketNo { get; set; }
        public Guid TicketId { get; set; }
        [DefaultValue(false)]
        public bool IsActive { get; set; }
        [DefaultValue(false)]
        public bool IsPreview { get; set; }
        [DefaultValue(0)]
        public int ServiceFormSequenceId { get; set; }
        public DateTime? ServiceDate { get; set; }
        public DateTime? TicketDate { get; set; }
        public Guid EngineerId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string EngineerName { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ServicePrefix { get; set; }
        [DefaultValue(false)]
        public bool IsHTML { get; set; }
        [DefaultValue(0)]
        public int ClientformIdOnSave { get; set; }
        [DefaultValue(0)]
        public int SerialNo { get; set; }
        public Guid CloserId { get; set; }
    }
    public class FSMServiceForm
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string SelectOne { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string MaintenanceContract { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string Request { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string Diagnose { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string JobDone { get; set; }
        [Column(TypeName = "NVarChar(1024)")]
        public string Remark { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string ServiceTicketStatus { get; set; }
        [ForeignKey("CloserDetails")]
        public virtual Guid CloserId { get; set; }
    }
}
