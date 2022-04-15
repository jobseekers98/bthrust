using System;
using System.Linq;

namespace GenicSolution.Entities.SMTPThread
{
    public class GenicDriveHelper
    {
        private static EntityFrameworkDbContext _context;
        public GenicDriveHelper(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        public void createWorkOrderinGenicDrive(Guid? customerid, Guid closerId)
        {
            try
            {
                var adminDetails = (from c in _context.Login where c.Type == "Admin" && c.IsActive == true select c).FirstOrDefault();
                var genicDriveIdForQuote = (from p in _context.GenicDrive where p.ParentId == customerid && p.Name == "Work Order" select p).FirstOrDefault();
                if (genicDriveIdForQuote != null)
                {
                    var serviceForm = (from c in _context.TicketWiseServiceForm where c.CloserId == closerId select c).FirstOrDefault();
                    string filePath = GlobalParameters.TicketPath(serviceForm.TicketNo, serviceForm.ServicePrefix + serviceForm.TicketServiceID);
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    GenicDrive obj = new GenicDrive();
                    obj.Id = Guid.NewGuid();
                    obj.AttachmentSize = 0;
                    obj.ColorCode = "rgb(254, 146, 0)";
                    obj.CreatedBy = adminDetails.Id;
                    obj.CreatedByName = adminDetails.FullName;
                    obj.Description = "Work Order " + serviceForm.TicketNo + "-" + serviceForm.ServicePrefix + serviceForm.TicketServiceID + ".pdf" + " is added";
                    obj.FolderType = 2;
                    obj.IsFavourite = false;
                    obj.IsLocked = false;
                    obj.IsTrash = false;
                    obj.LockedBy = null;
                    obj.LockPassword = null;
                    obj.Name = serviceForm.TicketNo + "-" + serviceForm.ServicePrefix + serviceForm.TicketServiceID + ".pdf";
                    obj.AttachmentName = filePath;
                    obj.FileExtension = "pdf";
                    obj.AttachmentSize = 0;
                    obj.OpenDate = null;
                    obj.ParentId = genicDriveIdForQuote.Id;
                    obj.UserId = adminDetails.Id;
                    obj.UpdatedBy = null;
                    obj.UpdatedDate = null;
                    obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = obj.UserId;
                    oModel.GenicDriveId = obj.Id;
                    oModel.DriveName = obj.Name;
                    oModel.DrivePath = obj.AttachmentName;
                    oModel.FolderType = obj.FolderType;
                    oModel.FileExtension = obj.FileExtension;
                    oModel.Action = "Uploaded";
                    oModel.Activity = "Work Order " + serviceForm.TicketNo + "-" + serviceForm.ServicePrefix + serviceForm.TicketServiceID + ".pdf" + " is uploaded";
                    UpdateDriveLog(oModel);
                }
            }
            catch { }
        }
        public void createQuotationInGenicDrive(Guid? customerid, Guid QuoteId, Guid Token)
        {
            try
            {
                var adminDetails = (from c in _context.Login where c.Token == Token && c.IsActive == true select c).FirstOrDefault();
                var genicDriveIdForQuote = (from p in _context.GenicDrive where p.ParentId == customerid && p.Name == "Quotations" select p).FirstOrDefault();
                if (genicDriveIdForQuote != null)
                {
                    var quoteDetails = (from c in _context.Quote where c.Id == QuoteId select c).FirstOrDefault();
                    string filePath = GlobalParameters.QuotePath(quoteDetails.QuoteId);
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    GenicDrive obj = new GenicDrive();
                    obj.Id = Guid.NewGuid();
                    obj.AttachmentName = "";
                    obj.AttachmentSize = 0;
                    obj.ColorCode = "rgb(254, 146, 0)";
                    obj.CreatedBy = adminDetails.Id;
                    obj.CreatedByName = adminDetails.FullName;
                    obj.Description = "Quotation " + quoteDetails.QuoteId + ".pdf is added";
                    obj.FolderType = 2;
                    obj.IsFavourite = false;
                    obj.IsLocked = false;
                    obj.IsTrash = false;
                    obj.LockedBy = null;
                    obj.LockPassword = null;
                    obj.Name = quoteDetails.QuoteId + ".pdf";
                    obj.AttachmentName = filePath;
                    obj.FileExtension = "pdf";
                    obj.AttachmentSize = 0;
                    obj.OpenDate = null;
                    obj.ParentId = genicDriveIdForQuote.Id;
                    obj.UserId = adminDetails.Id;
                    obj.UpdatedBy = null;
                    obj.UpdatedDate = null;
                    obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = obj.UserId;
                    oModel.GenicDriveId = obj.Id;
                    oModel.DriveName = obj.Name;
                    oModel.DrivePath = obj.AttachmentName;
                    oModel.FolderType = obj.FolderType;
                    oModel.FileExtension = obj.FileExtension;
                    oModel.Action = "Uploaded";
                    oModel.Activity = "Quotation " + quoteDetails.QuoteId + ".pdf is uploaded";
                    UpdateDriveLog(oModel);
                }
            }
            catch { }
        }
        public void uploadTicketAttachmentOnGenicDrive(Guid TicketId, Guid token, string filename, string ext, string fullpath)
        {
            try
            {
                var ticket = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                var adminDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                var genicDriveIdForQuote1 = (from p in _context.GenicDrive where p.ParentId == ticket.CustomerId && p.Name == "Work Order" select p).FirstOrDefault();
                if (genicDriveIdForQuote1 != null)
                {
                    var genicDriveIdForQuote2 = (from p in _context.GenicDrive where p.ParentId == genicDriveIdForQuote1.Id && p.Name == "Attachments" select p).FirstOrDefault();
                    if (genicDriveIdForQuote2 != null)
                    {
                        string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                        GenicDrive obj = new GenicDrive();
                        obj.Id = Guid.NewGuid();
                        obj.AttachmentName = "";
                        obj.AttachmentSize = 0;
                        obj.ColorCode = "rgb(254, 146, 0)";
                        obj.CreatedBy = adminDetails.Id;
                        obj.CreatedByName = adminDetails.FullName;
                        obj.Description = "An attachment " + filename + " is added";
                        obj.FolderType = 2;
                        obj.IsFavourite = false;
                        obj.IsLocked = false;
                        obj.IsTrash = false;
                        obj.LockedBy = null;
                        obj.LockPassword = null;
                        obj.Name = filename;
                        obj.AttachmentName = fullpath;
                        obj.FileExtension = ext;
                        obj.AttachmentSize = 0;
                        obj.OpenDate = null;
                        obj.ParentId = genicDriveIdForQuote2.Id;
                        obj.UserId = adminDetails.Id;
                        obj.UpdatedBy = null;
                        obj.UpdatedDate = null;
                        obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.GenicDrive.Add(obj);
                        _context.SaveChanges();

                        //Start: Add log on folder created--------------------
                        DriveLog oModel = new DriveLog();
                        oModel.UserId = obj.UserId;
                        oModel.GenicDriveId = obj.Id;
                        oModel.DriveName = obj.Name;
                        oModel.DrivePath = obj.AttachmentName;
                        oModel.FolderType = obj.FolderType;
                        oModel.FileExtension = obj.FileExtension;
                        oModel.Action = "Uploaded";
                        oModel.Activity = "An attachment " + filename + " is uploaded";
                        UpdateDriveLog(oModel);
                    }
                }
            }
            catch { }
        }
        public void uploadQuoteAttachmentOnGenicDrive(Guid QuoteId, Guid token, string filename, string ext, string fullpath)
        {
            try
            {
                var quote = (from c in _context.Quote where c.Id == QuoteId select c).FirstOrDefault();
                var adminDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                var genicDriveIdForQuote1 = (from p in _context.GenicDrive where p.ParentId == quote.CustomerId && p.Name == "Quotations" select p).FirstOrDefault();
                if (genicDriveIdForQuote1 != null)
                {
                    var genicDriveIdForQuote2 = (from p in _context.GenicDrive where p.ParentId == genicDriveIdForQuote1.Id && p.Name == "Attachments" select p).FirstOrDefault();
                    if (genicDriveIdForQuote2 != null)
                    {
                        string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                        GenicDrive obj = new GenicDrive();
                        obj.Id = Guid.NewGuid();
                        obj.AttachmentName = "";
                        obj.AttachmentSize = 0;
                        obj.ColorCode = "rgb(254, 146, 0)";
                        obj.CreatedBy = adminDetails.Id;
                        obj.CreatedByName = adminDetails.FullName;
                        obj.Description = "An attachment " + filename + " is added";
                        obj.FolderType = 2;
                        obj.IsFavourite = false;
                        obj.IsLocked = false;
                        obj.IsTrash = false;
                        obj.LockedBy = null;
                        obj.LockPassword = null;
                        obj.Name = filename;
                        obj.AttachmentName = fullpath;
                        obj.FileExtension = ext;
                        obj.AttachmentSize = 0;
                        obj.OpenDate = null;
                        obj.ParentId = genicDriveIdForQuote2.Id;
                        obj.UserId = adminDetails.Id;
                        obj.UpdatedBy = null;
                        obj.UpdatedDate = null;
                        obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.GenicDrive.Add(obj);
                        _context.SaveChanges();

                        //Start: Add log on folder created--------------------
                        DriveLog oModel = new DriveLog();
                        oModel.UserId = obj.UserId;
                        oModel.GenicDriveId = obj.Id;
                        oModel.DriveName = obj.Name;
                        oModel.DrivePath = obj.AttachmentName;
                        oModel.FolderType = obj.FolderType;
                        oModel.FileExtension = obj.FileExtension;
                        oModel.Action = "Uploaded";
                        oModel.Activity = "An attachment " + filename + " is uploaded";
                        UpdateDriveLog(oModel);
                    }
                }
            }
            catch { }
        }
        public void removeAttachmentOnGenicDrive(Guid id, Guid UserId, string filename)
        {
            //Start: Add log on folder created--------------------
            DriveLog oModel = new DriveLog();
            oModel.UserId = UserId;
            oModel.GenicDriveId = id;
            oModel.DriveName = filename;
            oModel.DrivePath = filename;
            oModel.FolderType = 2;
            oModel.FileExtension = "";
            oModel.Action = "Removed";
            oModel.Activity = "An attachment " + filename + " is Removed";
            UpdateDriveLog(oModel);
        }
        public void UpdateDriveLog(DriveLog obj)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                obj.LogId = Guid.NewGuid();
                obj.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.UserName = (from u in _context.Login where u.Id == obj.UserId select u.FullName).FirstOrDefault();
                _context.DriveLog.Add(obj);
                _context.SaveChanges();
            }
            catch (Exception) { }
        }

    }
}
