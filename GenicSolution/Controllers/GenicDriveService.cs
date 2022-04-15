using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using System;
using System.IO;
using System.Linq;
using System.Text;
using Tesseract;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenicDriveService : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public GenicDriveService(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        #region New Folder Create
        [HttpPost("[Action]")]
        public ActionResult CreateDriveFolder(GenicDrive obj)
        {
            try
            {
                string timezone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var PreviousFolderDetails = _context.GenicDrive.Where(f => f.UserId == obj.UserId && f.ParentId == obj.ParentId && f.Name == obj.Name && f.FolderType == 1).FirstOrDefault();
                if (PreviousFolderDetails == null)
                {
                    var userDetaild = _context.Login.Where(l => l.Id == obj.UserId).Select(l => l).FirstOrDefault();
                    obj.Id = Guid.NewGuid();
                    obj.OpenDate = obj.LastAccessTime;
                    obj.IsLocked = false;
                    obj.LockedBy = null;
                    obj.LockPassword = null;
                    obj.CreatedBy = userDetaild.Id;
                    obj.CreatedByName = userDetaild.FullName;
                    obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                    obj.UpdatedBy = userDetaild.Id;
                    obj.UpdatedByName = userDetaild.FullName;
                    obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                    obj.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
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
                    oModel.Action = "Created";
                    oModel.Activity = "created an item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------

                    return StatusCode(200, new { result = obj.Id.ToString(), Message = "success", MessageDescription = $"Folder {obj.Name} is created successfully." });
                }
                else
                {
                    DateTime dts = (DateTime)PreviousFolderDetails.LastAccessTime;
                    DateTime dte = (DateTime)obj.LastAccessTime;
                    if (dts.ToString("yyyyMMddhhmmss") == dte.ToString("yyyyMMddhhmmss"))
                    {
                        return StatusCode(200, new { result = PreviousFolderDetails.Id.ToString(), Message = "success", MessageDescription = $"Folder {PreviousFolderDetails.Name} is up to date." });
                    }
                    else
                    {
                        PreviousFolderDetails.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                        _context.Entry(PreviousFolderDetails).State = EntityState.Modified;
                        _context.SaveChanges();
                        return StatusCode(200, new { result = PreviousFolderDetails.Id.ToString(), Message = "success", MessageDescription = $"Folder {PreviousFolderDetails.Name} is updated successfully." });
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
        #region New File Create
        [HttpPost("[action]"), RequestSizeLimit(10000000)]
        [Obsolete]
        public ActionResult GenicDrivePostFile(GenicDrive obj)
        {
            try
            {
                string NewFileName;
                string timezone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var PreviousFilesDetails = _context.GenicDrive.Where(f => f.UserId == obj.UserId && f.ParentId == obj.ParentId && f.Name == obj.Name && f.FolderType == 2).FirstOrDefault();
                if (PreviousFilesDetails == null)
                {
                    if (obj.AttachmentName.Length > 0)
                    {
                        try
                        {
                            obj.AttachmentSize = obj.AttachmentSize / 1024;
                        }
                        catch { obj.AttachmentSize = 0; }
                        obj.Id = Guid.NewGuid();
                        var extention = _context.GenicFileExtenstion.Any(e => e.ExtentionName == obj.FileExtension && e.IsActive == true);
                        if (extention)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            string msg = string.Empty;
                            NewFileName = obj.Name + "." + obj.FileExtension;
                            string end_point = GlobalParameters.AWS_FOLDER + "/Drive/" + obj.Id + "/" + NewFileName;
                            bool isUploaded = awshelper.SendDriveToAWS(obj.AttachmentName, obj.FileExtension, end_point, out msg);
                            if (isUploaded) { obj.AttachmentName = msg; }
                            var userDetaild = _context.Login.Where(l => l.Id == obj.UserId).Select(l => l).FirstOrDefault();
                            obj.Name = obj.Name;
                            obj.CreatedBy = userDetaild.Id;
                            obj.CreatedByName = userDetaild.FullName;
                            obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                            obj.UpdatedBy = userDetaild.Id;
                            obj.UpdatedByName = userDetaild.FullName;
                            obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                            obj.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                            obj.OpenDate = obj.LastAccessTime;
                            obj.IsLocked = false;
                            obj.LockedBy = null;
                            obj.LockPassword = null;
                            _context.GenicDrive.Add(obj);
                            _context.SaveChanges();

                            try
                            {
                                // OCR Text Reader Start
                                string fullPath = obj.AttachmentName;
                                StringBuilder _sb = new StringBuilder();
                                GenicDriveText genicdrivetext = new GenicDriveText();
                                switch (obj.FileExtension.ToLower())
                                {
                                    case "png":
                                    case "jpg":
                                    case "jpeg":
                                        using (var engine = new TesseractEngine(System.IO.Path.Combine(_hostingEnvironment.ContentRootPath + "//tessdata"), "eng", EngineMode.Default))
                                        {
                                            using (var img = Pix.LoadFromFile(fullPath))
                                            {
                                                var page = engine.Process(img);
                                                genicdrivetext.Id = obj.Id;
                                                genicdrivetext.Text = page.GetText();
                                                genicdrivetext.Persentage = String.Format("{0:p}", page.GetMeanConfidence());
                                                _context.GenicDriveText.Add(genicdrivetext);
                                            }
                                        }
                                        break;
                                    case "pdf":
                                        using (PdfReader reader = new PdfReader(fullPath))
                                        {
                                            for (int i = 1; i <= reader.NumberOfPages; i++)
                                            {
                                                _sb.Append(PdfTextExtractor.GetTextFromPage(reader, i));
                                            }
                                            genicdrivetext.Id = obj.Id;
                                            genicdrivetext.Text = _sb.ToString();
                                            genicdrivetext.Persentage = "99.00%";
                                            _context.GenicDriveText.Add(genicdrivetext);
                                        }
                                        break;
                                    case "txt":
                                        var fileStream = new FileStream(fullPath, FileMode.Open, FileAccess.Read);
                                        using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
                                        {
                                            genicdrivetext.Id = obj.Id;
                                            genicdrivetext.Text = streamReader.ReadToEnd();
                                            genicdrivetext.Persentage = "99.00%";
                                            _context.GenicDriveText.Add(genicdrivetext);
                                        }
                                        break;
                                    case "doc":
                                    case "docx":
                                        Microsoft.Office.Interop.Word.Application word = new Microsoft.Office.Interop.Word.Application();
                                        object miss = System.Reflection.Missing.Value;
                                        object path = fullPath;
                                        object readOnly = true;
                                        Microsoft.Office.Interop.Word.Document docs = word.Documents.Open(ref path, ref miss, ref readOnly, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss);
                                        for (int i = 0; i < docs.Paragraphs.Count; i++)
                                        {
                                            _sb.Append(" \r\n " + docs.Paragraphs[i + 1].Range.Text.ToString());
                                        }
                                        genicdrivetext.Id = obj.Id;
                                        genicdrivetext.Text = _sb.ToString();
                                        genicdrivetext.Persentage = "99.00%";
                                        _context.GenicDriveText.Add(genicdrivetext);
                                        break;
                                    case "xls":
                                    case "xlsx":
                                    case "xlt":
                                    case "xlsm":
                                        FileInfo existingFile = new FileInfo(fullPath);
                                        using (ExcelPackage package = new ExcelPackage(existingFile))
                                        {
                                            ExcelWorksheet worksheet = package.Workbook.Worksheets[1];
                                            int colCount = worksheet.Dimension.End.Column;  //get Column Count
                                            int rowCount = worksheet.Dimension.End.Row;     //get row count
                                            for (int row = 1; row <= rowCount; row++)
                                            {
                                                for (int col = 1; col <= colCount; col++)
                                                {
                                                    _sb.Append(worksheet.Cells[row, col].Value?.ToString().Trim() + "    ");
                                                }
                                                _sb.Append(" \r\n ");
                                            }
                                            genicdrivetext.Id = obj.Id;
                                            genicdrivetext.Text = _sb.ToString();
                                            genicdrivetext.Persentage = "99.00%";
                                            _context.GenicDriveText.Add(genicdrivetext);
                                        }

                                        break;
                                }
                                _context.SaveChanges();
                            }
                            catch { }

                            //Start: Add log on folder color changed--------------------
                            DriveLog oModel = new DriveLog();
                            oModel.UserId = obj.UserId;
                            oModel.GenicDriveId = obj.Id;
                            oModel.DriveName = obj.Name;
                            oModel.DrivePath = obj.AttachmentName;
                            oModel.FolderType = obj.FolderType;
                            oModel.FileExtension = obj.FileExtension;
                            oModel.Action = "Uploaded";
                            oModel.Activity = "Uploaded an item ";
                            UpdateDriveLog(oModel);
                            //end Log Section----------------------------------
                        }
                        else
                        {
                            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = $"File format {obj.FileExtension} is not allowed." });
                        }
                    }
                    return StatusCode(200, new { result = obj.ParentId.ToString(), Message = "success", MessageDescription = $"File {obj.Name} is uploaded successfully." });
                }
                else
                {
                    DateTime dts = (DateTime)PreviousFilesDetails.LastAccessTime;
                    DateTime dte = (DateTime)obj.LastAccessTime;
                    if (dts.ToString("yyyyMMddhhmmss") == dte.ToString("yyyyMMddhhmmss"))
                    {
                        return StatusCode(200, new { result = obj.ParentId.ToString(), Message = "success", MessageDescription = $"File {obj.Name} is up to date." });
                    }
                    else
                    {
                        if (obj.AttachmentName.Length > 0)
                        {
                            try
                            {
                                obj.AttachmentSize = obj.AttachmentSize / 1024;
                            }
                            catch { obj.AttachmentSize = 0; }
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(PreviousFilesDetails.AttachmentName);
                            var extention = _context.GenicFileExtenstion.Any(e => e.ExtentionName == obj.FileExtension && e.IsActive == true);
                            if (extention)
                            {
                                AWSHelper awshelper2 = new AWSHelper();
                                string msg = string.Empty;
                                NewFileName = obj.Name + "." + obj.FileExtension;
                                string end_point = GlobalParameters.AWS_FOLDER + "/Drive/" + obj.Id + "/" + NewFileName;
                                bool isUploaded = awshelper2.SendDriveToAWS(obj.AttachmentName, obj.FileExtension, end_point, out msg);
                                if (isUploaded) { obj.AttachmentName = msg; }
                                var userDetaild = _context.Login.Where(l => l.Id == obj.UserId).Select(l => l).FirstOrDefault();
                                PreviousFilesDetails.AttachmentName = msg;
                                PreviousFilesDetails.Name = obj.Name;
                                PreviousFilesDetails.UpdatedBy = userDetaild.Id;
                                PreviousFilesDetails.UpdatedByName = userDetaild.FullName;
                                PreviousFilesDetails.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                                PreviousFilesDetails.LastAccessTime = obj.LastAccessTime;
                                PreviousFilesDetails.OpenDate = obj.LastAccessTime;
                                _context.Entry(PreviousFilesDetails).State = EntityState.Modified;
                                _context.SaveChanges();

                                try
                                {
                                    // OCR Text Reader Start
                                    string fullPath = msg;
                                    StringBuilder _sb = new StringBuilder();
                                    var genicdrivetext = _context.GenicDriveText.Where(f => f.Id == PreviousFilesDetails.Id).FirstOrDefault();
                                    switch (obj.FileExtension.ToLower())
                                    {
                                        case "png":
                                        case "jpg":
                                        case "jpeg":
                                            using (var engine = new TesseractEngine(System.IO.Path.Combine(_hostingEnvironment.ContentRootPath + "//tessdata"), "eng", EngineMode.Default))
                                            {
                                                using (var img = Pix.LoadFromFile(fullPath))
                                                {
                                                    var page = engine.Process(img);
                                                    genicdrivetext.Text = page.GetText();
                                                    genicdrivetext.Persentage = String.Format("{0:p}", page.GetMeanConfidence());
                                                    _context.Entry(genicdrivetext).State = EntityState.Modified;
                                                }
                                            }
                                            break;
                                        case "pdf":
                                            using (PdfReader reader = new PdfReader(fullPath))
                                            {
                                                for (int i = 1; i <= reader.NumberOfPages; i++)
                                                {
                                                    _sb.Append(PdfTextExtractor.GetTextFromPage(reader, i));
                                                }
                                                genicdrivetext.Text = _sb.ToString();
                                                genicdrivetext.Persentage = "99.00%";
                                                _context.Entry(genicdrivetext).State = EntityState.Modified;
                                            }
                                            break;
                                        case "txt":
                                            var fileStream = new FileStream(fullPath, FileMode.Open, FileAccess.Read);
                                            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
                                            {
                                                genicdrivetext.Text = streamReader.ReadToEnd();
                                                genicdrivetext.Persentage = "99.00%";
                                                _context.Entry(genicdrivetext).State = EntityState.Modified;
                                            }
                                            break;
                                        case "doc":
                                        case "docx":
                                            Microsoft.Office.Interop.Word.Application word = new Microsoft.Office.Interop.Word.Application();
                                            object miss = System.Reflection.Missing.Value;
                                            object path = fullPath;
                                            object readOnly = true;
                                            Microsoft.Office.Interop.Word.Document docs = word.Documents.Open(ref path, ref miss, ref readOnly, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss);
                                            for (int i = 0; i < docs.Paragraphs.Count; i++)
                                            {
                                                _sb.Append(" \r\n " + docs.Paragraphs[i + 1].Range.Text.ToString());
                                            }
                                            genicdrivetext.Text = _sb.ToString();
                                            genicdrivetext.Persentage = "99.00%";
                                            _context.Entry(genicdrivetext).State = EntityState.Modified;
                                            break;
                                        case "xls":
                                        case "xlsx":
                                        case "xlt":
                                        case "xlsm":
                                            FileInfo existingFile = new FileInfo(fullPath);
                                            using (ExcelPackage package = new ExcelPackage(existingFile))
                                            {
                                                ExcelWorksheet worksheet = package.Workbook.Worksheets[1];
                                                int colCount = worksheet.Dimension.End.Column;  //get Column Count
                                                int rowCount = worksheet.Dimension.End.Row;     //get row count
                                                for (int row = 1; row <= rowCount; row++)
                                                {
                                                    for (int col = 1; col <= colCount; col++)
                                                    {
                                                        _sb.Append(worksheet.Cells[row, col].Value?.ToString().Trim() + "    ");
                                                    }
                                                    _sb.Append(" \r\n ");
                                                }
                                                genicdrivetext.Text = _sb.ToString();
                                                genicdrivetext.Persentage = "99.00%";
                                                _context.Entry(genicdrivetext).State = EntityState.Modified;
                                            }

                                            break;
                                    }
                                    _context.SaveChanges();
                                }
                                catch { }

                                //Start: Add log on folder color changed--------------------
                                DriveLog oModel = new DriveLog();
                                oModel.UserId = obj.UserId;
                                oModel.GenicDriveId = obj.Id;
                                oModel.DriveName = obj.Name;
                                oModel.DrivePath = obj.AttachmentName;
                                oModel.FolderType = obj.FolderType;
                                oModel.FileExtension = obj.FileExtension;
                                oModel.Action = "Update";
                                oModel.Activity = "Update an item ";
                                UpdateDriveLog(oModel);
                                //end Log Section----------------------------------
                            }
                            else
                            {
                                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = $"File {PreviousFilesDetails.FileExtension} format not allowed." });
                            }
                        }
                        return StatusCode(200, new { result = obj.ParentId.ToString(), Message = "success", MessageDescription = $"File {PreviousFilesDetails.Name} is updated successfully." });
                    }
                }
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
        #region Drive Logs
        private void UpdateDriveLog(DriveLog obj)
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
        #endregion
    }
}
