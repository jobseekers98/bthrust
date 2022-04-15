using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenicSolution.Entities
{
    public class GenicDrive
    {
        [Key]
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string Name { get; set; }
        public Guid? ParentId { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string AttachmentName { get; set; }
        [DefaultValue(0)]
        public int AttachmentSize { get; set; }
        [DefaultValue(1)]
        public int FolderType { get; set; } // 1=Folder, 2 = file, 3= Zip
        [DefaultValue(false)]
        public bool IsFavourite { get; set; } // False= UnMarked, True= Marked
        [DefaultValue(false)]
        public bool IsTrash { get; set; } // False= UnTrash, True= Trash
        [DefaultValue(false)]
        public bool IsLocked { get; set; } // False= UnLock, True= Locked
        [Column(TypeName = "NVarChar(255)")]
        public string LockPassword { get; set; }
        public Guid? LockedBy { get; set; }
        [Column(TypeName = "NVarChar(24)")]
        [DefaultValue("rgb(254, 146, 0)")]
        public string ColorCode { get; set; }
        public DateTime? CreatedDate { get; set; }
        public Guid? CreatedBy { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string CreatedByName { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UpdatedByName { get; set; }
        public DateTime? OpenDate { get; set; }
        public DateTime? LastAccessTime { get; set; }
        [Column(TypeName = "NVarChar(10)")]
        public string FileExtension { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Description { get; set; }
    }
    public class SharedDrive
    {
        [Key]
        public Guid? Id { get; set; }
        public Guid? GenicDriveId { get; set; }
        public Guid? SenderId { get; set; }
        public Guid ToUserId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string ToUserName { get; set; }
        public DateTime? SendDate { get; set; }
        [Column(TypeName = "NVarChar(max)")]
        public string Remark { get; set; }
        [DefaultValue(1)]
        public bool IsEdit { get; set; } // 0= denide, 1= Allow
        [DefaultValue(1)]
        public bool IsComment { get; set; } // 0= denide, 1= Allow
        [DefaultValue(1)]
        public bool IsView { get; set; } // 0= denied, 1= Allow
    }
    public class DriveLog
    {
        [Key]
        public Guid LogId { get; set; }
        public Guid? GenicDriveId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string DriveName { get; set; }
        [DefaultValue(1)]
        public int FolderType { get; set; } // 1=Folder, 2 = file, 3= Zip
        [Column(TypeName = "NVarChar(10)")]
        public string FileExtension { get; set; }
        public Guid UserId { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string UserName { get; set; }
        [Column(TypeName = "NVarChar(255)")]
        public string DrivePath { get; set; }
        [Column(TypeName = "NVarChar(10)")] // Add, Modify, Delete
        public string Action { get; set; }
        [Column(TypeName = "NVarChar(2048)")]
        public string Activity { get; set; }
        public DateTime? LogDate { get; set; }
    }
    public class GenicFileExtenstion
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "NVarChar(10)")]
        public string ExtentionName { get; set; }
        [DefaultValue(false)]
        public bool IsActive { get; set; }
    }
    public class GenicDriveText
    {
        [Key]
        public Guid Id { get; set; }
        [Column(TypeName = "NVarChar(MAX)")]
        public string Text { get; set; }
        [Column(TypeName = "NVarChar(32)")]
        public string Persentage { get; set; }
    }
}
