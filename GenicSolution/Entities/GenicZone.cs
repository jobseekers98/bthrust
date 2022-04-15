using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class GenicZone
    {
        [Key]
        public int ZoneId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ZoneName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CountryName { get; set; }
        [DefaultValue(true)]
        public bool IsActive { get; set; }
        [DefaultValue(false)]
        public bool IsAssigned { get; set; }
        public virtual ICollection<ZoneCoordinates> ZoneCoordinatesList { get; set; }
    }
    public class ZoneCoordinates
    {
        [Key]
        public int Id { get; set; }
        [DefaultValue(0)]
        public int ZoneId { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Coordinates { get; set; }
    }
    public class EngineerWiseZone
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("GenicZone")]
        public int ZoneId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ZoneName { get; set; }
        [ForeignKey("Engineer")]
        public Guid? EngineerId { get; set; }
    }
}
