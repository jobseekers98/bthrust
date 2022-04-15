using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tesseract;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenicDrivesController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;

        [Obsolete]
        public GenicDrivesController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        #region Folder Section Start
        [HttpPost("[Action]/{token}")]
        public async Task<ActionResult> CreateDriveFolder(GenicDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                if (obj.Id.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var userDetaild = _context.Login.Where(l => l.Id == obj.UserId).Select(l => l).FirstOrDefault();
                    obj.Id = Guid.NewGuid();
                    obj.UpdatedBy = null;
                    obj.UpdatedDate = null;
                    obj.OpenDate = null;
                    obj.IsLocked = false;
                    obj.LockedBy = null;
                    obj.LockPassword = null;
                    obj.CreatedByName = userDetaild.FullName;
                    obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj);
                    await _context.SaveChangesAsync();

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
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Folder created successfully." });
                    //}
                }
                else
                {
                    var result = (from f in _context.GenicDrive where f.Id == obj.Id && f.UserId == obj.UserId select f).FirstOrDefault();
                    if (result != null)
                    {
                        result.Name = obj.Name;
                        result.UpdatedBy = obj.UserId;
                        result.UpdatedByName = obj.UpdatedByName;
                        result.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.Entry(result).State = EntityState.Modified;
                        await _context.SaveChangesAsync();

                        //Start: Add log on folder renamed--------------------
                        DriveLog oModel = new DriveLog();
                        oModel.UserId = obj.UserId;
                        oModel.GenicDriveId = obj.Id;
                        oModel.DriveName = obj.Name;
                        oModel.DrivePath = obj.AttachmentName;
                        oModel.FolderType = obj.FolderType;
                        oModel.FileExtension = obj.FileExtension;
                        oModel.Action = "renamed";
                        oModel.Activity = "rename an item";
                        UpdateDriveLog(oModel);
                        //end Log Section----------------------------------
                        return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Drive renamed successfully!" });
                    }
                    else
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Something went wrong! or try after re-login" });
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        // Post drive Log 
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
        //Get: Drive folder
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getDriveFolder(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                        && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                        && f.FolderType == 1
                                        && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId  &&
                                        f.ParentId == ParentId
                                              && f.FolderType == 1
                                              && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Get: Drive folder
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getStarredDriveFolder(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                          && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                          && f.FolderType == 1
                                          && f.IsTrash == false
                                          && f.IsFavourite == true
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                              //f.UserId == UserId && 
                                              f.ParentId == ParentId
                                              && f.FolderType == 1
                                              && f.IsTrash == false
                                        //&& f.IsFavourite == true
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Change: Drive Folder Color
        [HttpPut("[Action]/{token}")]
        public async Task<ActionResult<GenicDrive>> ChangeDriveFolderColor(GenicDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == obj.Id && f.UserId == obj.UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    genicDrive.ColorCode = obj.ColorCode;
                    genicDrive.UpdatedByName = obj.UpdatedByName;
                    genicDrive.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = obj.UserId;
                    oModel.GenicDriveId = obj.Id;
                    oModel.DriveName = obj.Name;
                    oModel.DrivePath = obj.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "color";
                    oModel.Activity = "color change of an item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Color changed successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Something went wrong! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Post: Add to Star Drive Folder
        //Post: Remove Star from Drive Folder
        [HttpDelete("[Action]/{UserId}/{Id}")]
        public async Task<ActionResult<GenicDrive>> removeStarFromDriveFolder(Guid? UserId, Guid? Id)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                genicDrive.IsFavourite = false;
                _context.Entry(genicDrive).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                //Start: Add log on folder color changed--------------------
                DriveLog oModel = new DriveLog();
                oModel.UserId = genicDrive.UserId;
                oModel.GenicDriveId = genicDrive.Id;
                oModel.DriveName = genicDrive.Name;
                oModel.DrivePath = genicDrive.AttachmentName;
                oModel.FolderType = genicDrive.FolderType;
                oModel.FileExtension = genicDrive.FileExtension;
                oModel.Action = "favourite";
                oModel.Activity = "an item removed from favourite";
                UpdateDriveLog(oModel);
                //end Log Section----------------------------------

                return StatusCode(201, "Folder stared unmarked!");
            }
            else
            {
                return NotFound();
            }
        }
        //Post: Move to trash Drive Folder
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult> MoveToTrashDriveFolder(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsTrash = true;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "trash";
                    oModel.Activity = "moved an item to the trash";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Folder moved to trash successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Something went wrong! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Post: restore Drive Folder
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult<GenicDrive>> restoreDriveFolder(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsTrash = false;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "restore";
                    oModel.Activity = "restored an item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Folder restored successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Something went wrong! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Get: Trash Drive folder
        [HttpGet("[Action]/{UserId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getTrashDriveFolder(Guid? UserId)
        {
            try
            {
                var result = await (from f in _context.GenicDrive
                                    where f.UserId == UserId
                                                              //&& f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                                              && f.FolderType == 1
                                                              && f.IsTrash == true
                                    orderby f.CreatedDate descending
                                    select f).ToListAsync();
                return result;

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Delete: Drive Folder
        [HttpPut("[action]/{token}/{DriveId}")]
        [Obsolete]
        public ActionResult RemoveDriveFolder(Guid token, Guid DriveId)
        {
            try
            {
                var userDetails = _context.Login.Where(x => x.Token == token).Select(x=> x).FirstOrDefault();
                if (userDetails == null)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive =  _context.GenicDrive.Where(f => f.Id == DriveId && f.UserId == userDetails.Id).FirstOrDefault();
                if (genicDrive != null)
                {
                    if(genicDrive.FolderType == 1)
                    {
                        this.RemoveFolderInDrive(DriveId);
                    }
                    if (genicDrive.FolderType == 2)
                    {
                        this.RemoveFileInDrive(DriveId);
                    }
                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "delete";
                    oModel.Activity = "permanently deleted item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "removed successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Something went wrong! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        [Obsolete]
        private void RemoveFolderInDrive(Guid Id)
        {
            try
            {
                Task.Yield();
                var directories = (from f in _context.GenicDrive where f.Id == Id && f.FolderType == 1 select f).ToList();
                var files = (from f in _context.GenicDrive where f.ParentId == Id && f.FolderType == 2 select f).ToList();
                if (files.Count > 0 || directories.Count > 0)
                {
                    foreach (var f in files)
                    {
                        _context.Remove(f);
                        _context.SaveChanges();
                        try
                        {
                            string path = System.IO.Path.Combine(_hostingEnvironment.WebRootPath, f.AttachmentName);
                            if (System.IO.File.Exists(path))
                            {
                                System.IO.File.Delete(path);
                            }
                        } catch { }
                    }
                    foreach (var d in directories)
                    {   
                        var innerdirectories = (from f in _context.GenicDrive where f.ParentId == d.Id && f.FolderType == 1 select f).FirstOrDefault();
                        _context.Remove(d);
                        _context.SaveChanges();
                        if (innerdirectories != null) { RemoveFolderInDrive(innerdirectories.Id); } 
                    }
                }
            }
            catch (Exception ex) { }

        }
        [Obsolete]
        private void RemoveFileInDrive(Guid Id)
        {
            try
            {
                Task.Yield();

                var files = (from f in _context.GenicDrive where f.Id == Id && f.FolderType == 2 select f).FirstOrDefault();
                if (files != null)
                {
                    _context.Remove(files);
                    _context.SaveChanges();
                    try
                    {
                        string path = System.IO.Path.Combine(_hostingEnvironment.WebRootPath, files.AttachmentName);
                        if (System.IO.File.Exists(path))
                        {
                            System.IO.File.Delete(path);
                        }
                    }
                    catch { }
                }
            }
            catch (Exception ex) { }

        }
        //Change: Drive Descripitoin
        [HttpPut("[Action]")]
        public async Task<ActionResult<GenicDrive>> updateDriveDescription(GenicDrive obj)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == obj.Id && f.UserId == obj.UserId).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                genicDrive.Description = obj.Description;
                genicDrive.UpdatedByName = obj.UpdatedByName;
                genicDrive.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                genicDrive.Description = obj.Description;
                _context.Entry(genicDrive).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                //Start: Add log on folder color changed--------------------
                DriveLog oModel = new DriveLog();
                oModel.UserId = genicDrive.UserId;
                oModel.GenicDriveId = genicDrive.Id;
                oModel.DriveName = genicDrive.Name;
                oModel.DrivePath = genicDrive.AttachmentName;
                oModel.FolderType = genicDrive.FolderType;
                oModel.FileExtension = genicDrive.FileExtension;
                oModel.Action = "edit";
                oModel.Activity = "edited an item";
                UpdateDriveLog(oModel);
                //end Log Section----------------------------------

                return StatusCode(201, "Description changed successfully!");
            }
            else
            {
                var genicDrive2 = await _context.SharedDrive.Where(f => f.GenicDriveId == obj.Id && f.ToUserId == obj.UpdatedBy).FirstOrDefaultAsync();
                if (genicDrive2 != null)
                {

                    genicDrive2.Remark = obj.Description;
                    _context.Entry(genicDrive2).State = EntityState.Modified;

                    var genicDrive3 = await _context.GenicDrive.Where(f => f.Id == obj.Id).FirstOrDefaultAsync();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    genicDrive3.UpdatedBy = obj.UpdatedBy;
                    genicDrive3.UpdatedByName = obj.UpdatedByName;
                    genicDrive3.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(genicDrive3).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive3.UserId;
                    oModel.GenicDriveId = genicDrive3.Id;
                    oModel.DriveName = genicDrive3.Name;
                    oModel.DrivePath = genicDrive3.AttachmentName;
                    oModel.FolderType = genicDrive3.FolderType;
                    oModel.FileExtension = genicDrive3.FileExtension;
                    oModel.Action = "edit";
                    oModel.Activity = "edited an item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------

                    return StatusCode(201, "Description changed successfully!");
                }
                else
                {
                    return NotFound();
                }
            }
        }
        //Get: Drive folder and file to move
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getDriveFolderAndFileToMove(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                              && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                              && f.IsTrash == false
                                        //&& f.FolderType == 1
                                        orderby f.FolderType ascending
                                        select f).ToListAsync();
                    foreach (var r in result)
                    {
                        var count = 0;
                        r.IsFavourite = false;
                        count = (from s in _context.SharedDrive where s.GenicDriveId == r.Id select s).Count();
                        if (count > 0)
                        {
                            r.IsFavourite = true;
                        }
                    }
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                              && f.ParentId == ParentId
                                              && f.IsTrash == false
                                        //&& f.FolderType == 1
                                        orderby f.FolderType ascending
                                        select f).ToListAsync();
                    foreach (var r in result)
                    {
                        var count = 0;
                        r.IsFavourite = false;
                        count = (from s in _context.SharedDrive where s.GenicDriveId == r.Id select s).Count();
                        if (count > 0)
                        {
                            r.IsFavourite = true;
                        }
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Post: Move drive or file within drive
        [HttpPut("[Action]/{token}")]
        public async Task<ActionResult<GenicDrive>> onDriveMoveWithinDrive(GenicDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == obj.Id && f.UserId == obj.UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    genicDrive.ParentId = obj.ParentId;
                    genicDrive.UpdatedByName = obj.UpdatedByName;
                    genicDrive.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    var parentfoldername = await _context.GenicDrive.Where(f => f.Id == obj.ParentId).Select(f => f.Name).FirstOrDefaultAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "move";
                    oModel.Activity = "moved an item to folder " + parentfoldername;
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Folder moved successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "success", MessageDescription = "Yor are not authorized to move!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Get:User list to share drive
        [HttpGet("[Action]/{UserId}")]
        public async Task<ActionResult> getUsersToShareDrive(Guid? UserId)
        {
            try
            {
                var result = await (from c in _context.Login
                                    where c.Id != UserId
                                    && c.Type != "Customer"
                                    orderby c.FullName ascending
                                    select new
                                    {
                                        Id = c.Id,
                                        Name = c.FullName,
                                        UserType = c.Type
                                    }).ToListAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Delete: Drive Folder 
        [HttpPost("[Action]/{token}")]
        public ActionResult shareDrive(SharedDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                if (_context.SharedDrive.Any(f => f.GenicDriveId == obj.GenicDriveId && (f.ToUserId == obj.ToUserId)))
                {
                    string msg = "";
                    int _type = (from g in _context.GenicDrive where g.Id == obj.GenicDriveId select g.FolderType).FirstOrDefault();

                    if (_type == 1) { msg = "Folder Already Shared with " + obj.ToUserName + "!"; }
                    if (_type == 2) { msg = "File Already Shared with " + obj.ToUserName + "!"; }

                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = msg });
                }
                else
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    obj.Id = Guid.NewGuid();
                    obj.SendDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.SharedDrive.Add(obj);
                    _context.SaveChanges();

                    //Start: Add log on folder color changed--------------------
                    var gd = (from f in _context.GenicDrive where f.Id == obj.GenicDriveId select f).FirstOrDefault();
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = obj.ToUserId;
                    oModel.GenicDriveId = obj.Id;
                    oModel.DriveName = gd.Name;
                    oModel.DrivePath = gd.AttachmentName;
                    oModel.FolderType = gd.FolderType;
                    oModel.FileExtension = gd.FileExtension;
                    oModel.Action = "share";
                    oModel.Activity = "share an item to " + obj.ToUserName;
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Shared with " + obj.ToUserName + "!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Remove from Sharing drive file or folder
        [HttpDelete("[Action]/{UserId}/{Id}")]
        public async Task<ActionResult<GenicDrive>> removeFromSharingFolderOrFiles(Guid? UserId, Guid? Id)
        {
            try
            {
                var genicDrive = await _context.SharedDrive.Where(f => f.GenicDriveId == Id && f.ToUserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    _context.SharedDrive.Remove(genicDrive);
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.ToUserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = (from f in _context.GenicDrive where f.Id == genicDrive.GenicDriveId select f.Name).FirstOrDefault();
                    oModel.DrivePath = (from f in _context.GenicDrive where f.Id == genicDrive.GenicDriveId select f.AttachmentName).FirstOrDefault();
                    oModel.FolderType = (from f in _context.GenicDrive where f.Id == genicDrive.GenicDriveId select f.FolderType).FirstOrDefault();
                    oModel.FileExtension = (from f in _context.GenicDrive where f.Id == genicDrive.GenicDriveId select f.FileExtension).FirstOrDefault();
                    oModel.Action = "remove";
                    oModel.Activity = "share removed from an item";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(204, new { result = "", Message = "failure", MessageDescription = "Folder removed successfully!" });
                }
                else
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "File not found! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Get: Shared with me Drive folder
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getSharedWithMeDriveFolder(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId && 
                                        f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                        && f.Id == (from s in _context.SharedDrive where s.GenicDriveId == f.Id && s.ToUserId == UserId select s.GenicDriveId).FirstOrDefault()
                                        && f.FolderType == 1
                                        && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();

                    foreach (var u in result)
                    {
                        u.Description = (from uu in _context.SharedDrive where uu.GenicDriveId == u.Id && uu.ToUserId == UserId select uu.Remark).FirstOrDefault();
                    }
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId &&
                                        f.ParentId == ParentId
                                        && f.FolderType == 1
                                        && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    foreach (var u in result)
                    {
                        u.Description = (from uu in _context.SharedDrive where uu.GenicDriveId == u.Id && uu.ToUserId == UserId select uu.Remark).FirstOrDefault();
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Change:Add lock to drive folder or files
        [HttpPut("[Action]/{token}")]
        public async Task<ActionResult> addLockToFolderOrFiles(GenicDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == obj.Id && f.UserId == obj.UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    genicDrive.IsLocked = true;
                    genicDrive.LockedBy = obj.LockedBy;
                    genicDrive.LockPassword = GlobalParameters.EncryptPassword(obj.LockPassword) + GlobalParameters.FixedPrimaryEncryptionSalt;
                    genicDrive.UpdatedByName = obj.UpdatedByName;
                    genicDrive.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "lock";
                    oModel.Activity = "locked an item ";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Drive locked successfully!" });
                }
                else
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "File not found! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Change:un lock to drive folder or files
        [HttpPut("[Action]/{token}")]
        public async Task<ActionResult> unLockFolderOrFiles(GenicDrive obj, Guid token)
        {
            try
            {
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == obj.Id && f.UserId == obj.UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsLocked = obj.IsLocked;
                    if (obj.LockPassword != null)
                    {
                        genicDrive.LockPassword = GlobalParameters.EncryptPassword(obj.LockPassword) + GlobalParameters.FixedPrimaryEncryptionSalt;
                        genicDrive.LockedBy = obj.LockedBy;
                    }
                    else
                    {
                        genicDrive.LockPassword = null;
                        genicDrive.LockedBy = null;
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    genicDrive.UpdatedByName = obj.UpdatedByName;
                    genicDrive.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "unlock";
                    oModel.Activity = "unlocked an item ";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Lock removed successfully!" });
                }
                else
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "File not found! or try after re-login" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Change: Validate current Password
        [HttpGet("[Action]/{UserId}/{Id}/{CurrentPassword}")]
        public async Task<ActionResult<GenicDrive>> validateCurrentDrivePassword(Guid? UserId, Guid? Id, string CurrentPassword)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId && f.LockPassword == (GlobalParameters.EncryptPassword(CurrentPassword) + GlobalParameters.FixedPrimaryEncryptionSalt)).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Password validated" });
            }
            else
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Invalid Password" });
            }
        }
        //Change: Drive Folder Color
        [HttpGet("[Action]/{Id}/{ConfirmPassword}")]
        public async Task<ActionResult<GenicDrive>> validateDrivePassword(Guid? Id, string ConfirmPassword)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.LockPassword == (GlobalParameters.EncryptPassword(ConfirmPassword) + GlobalParameters.FixedPrimaryEncryptionSalt)).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                return StatusCode(200, genicDrive);
            }
            else
            {
                return StatusCode(404, "Invalid Password");
            }
        }
        //Get: Drive folder or file that shared with user
        [HttpGet("[Action]/{Id}/{token}")]
        public async Task<ActionResult<IEnumerable<SharedDrive>>> getDrivesToSharedWithUsers(Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = await (from f in _context.SharedDrive
                                    where f.GenicDriveId == Id
                                    orderby f.ToUserName ascending
                                    select f).ToListAsync();
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }

            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Get: Today's drove log by drive id
        [HttpGet("[Action]/{Id}/{token}")]
        public async Task<ActionResult<IEnumerable<DriveLog>>> getTodaysDroveLog(Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = await (from f in _context.DriveLog
                                    where f.GenicDriveId == Id
                                    && f.LogDate.Value.Year == DateTime.UtcNow.Year
                                    && f.LogDate.Value.Month == DateTime.UtcNow.Month
                                    && f.LogDate.Value.Day == DateTime.UtcNow.Day
                                    orderby f.LogDate descending
                                    select f).ToListAsync();
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }

        }
        //Get: this month drove log by drive idgetThisMonthDroveLog
        [HttpGet("[Action]/{Id}/{token}")]
        public async Task<ActionResult<IEnumerable<DriveLog>>> getThisMonthDroveLog(Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = await (from f in _context.DriveLog
                                    where f.GenicDriveId == Id
                                    && f.LogDate.Value.Year == DateTime.UtcNow.Year
                                    && f.LogDate.Value.Month == DateTime.UtcNow.Month
                                    orderby f.LogDate descending
                                    select f).ToListAsync();
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }

        }

        //Post: remove from trash all file and folders
        [HttpDelete("[Action]/{UserId}")]
        [Obsolete]
        public async Task<ActionResult<GenicDrive>> emptyAllTrashfilesFolders(Guid? UserId)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.UserId == UserId && f.IsTrash == true).ToListAsync();
            if (genicDrive != null)
            {
                foreach (var i in genicDrive)
                {
                    _context.GenicDrive.Remove(i);
                    if (i.FolderType == 2)
                    {
                        //string oldpath = System.IO.Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.GenicDriveFolder + "//" + i.Id + "//" + i.Name);
                        //if (System.IO.File.Exists(oldpath))
                        //{
                        //    System.IO.File.Delete(oldpath);
                        //}
                    }
                }
                _context.SaveChanges();
                return StatusCode(201, "Folder moved to trash successfully!");
            }
            else
            {
                return NotFound();
            }
        }
        // Get My-drive Searched qucklist, folder list and file list 
        [HttpGet("[Action]/{UserId}/{ParentId}/{SearchText}")]
        public ActionResult GetMyDriveSearchedList(Guid UserId, Guid ParentId, string SearchText)
        {
            try
            {
                Task.Yield();
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = (from f in _context.GenicDrive
                                  select new
                                  {
                                      QuickList = (from l1 in _context.GenicDrive
                                                   join t1 in _context.GenicDriveText on l1.Id equals t1.Id
                                                   where l1.UserId == UserId
                                                   && (l1.Name.Contains(SearchText) || t1.Text.Contains(SearchText))
                                                   && l1.FolderType == 2
                                                   && l1.IsTrash == false
                                                   && l1.OpenDate != null
                                                   orderby l1.OpenDate descending
                                                   select l1).ToList(),
                                      FolderList = (from l2 in _context.GenicDrive
                                                    where l2.UserId == UserId
                                                    && (l2.Name.Contains(SearchText))
                                                    && l2.FolderType == 1
                                                    && l2.IsTrash == false
                                                    orderby l2.CreatedDate descending
                                                    select l2).ToList(),
                                      FileList = (from l3 in _context.GenicDrive
                                                  join t3 in _context.GenicDriveText on l3.Id equals t3.Id
                                                  where l3.UserId == UserId
                                                    && (l3.Name.Contains(SearchText) || t3.Text.Contains(SearchText))
                                                    && l3.FolderType == 2
                                                    && l3.IsTrash == false
                                                  orderby l3.CreatedDate descending
                                                  select l3).ToList(),

                                  }
                                  ).FirstOrDefault();
                    //foreach (var item in result.FileList)
                    //{
                    //    item.UpdatedByName = GetFileLoaction(item.Id);
                    //}
                    return StatusCode(200, result);
                }
                else
                {
                    var result = (from f in _context.GenicDrive
                                  select new
                                  {
                                      QuickList = (from l1 in _context.GenicDrive
                                                   join t1 in _context.GenicDriveText on l1.Id equals t1.Id
                                                   //where l1.ParentId == ParentId
                                                   where (l1.Name.Contains(SearchText) || t1.Text.Contains(SearchText))
                                                   && l1.FolderType == 2
                                                   && l1.IsTrash == false
                                                   && l1.OpenDate != null
                                                   orderby l1.OpenDate descending
                                                   select l1).ToList(),
                                      FolderList = (from l2 in _context.GenicDrive
                                                    join t2 in _context.GenicDriveText on l2.Id equals t2.Id
                                                    //where l2.ParentId == ParentId
                                                    where (l2.Name.Contains(SearchText) || t2.Text.Contains(SearchText))
                                                    && l2.FolderType == 1
                                                    && l2.IsTrash == false
                                                    orderby l2.CreatedDate descending
                                                    select l2).ToList(),
                                      FileList = (from l3 in _context.GenicDrive
                                                  join t3 in _context.GenicDriveText on l3.Id equals t3.Id
                                                  //where l3.ParentId == ParentId
                                                  where (l3.Name.Contains(SearchText) || t3.Text.Contains(SearchText))
                                                  && l3.FolderType == 2
                                                  && l3.IsTrash == false
                                                  orderby l3.CreatedDate descending
                                                  select l3).ToList(),
                                  }
                                   ).FirstOrDefault();
                    //foreach (var item in result.FileList)
                    //{
                    //    item.UpdatedByName = GetFileLoaction(item.Id);
                    //}
                    return StatusCode(200, result);
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }

        private string GetFileLoaction(Guid Id)
        {
            string returnStr = "";
            string rootId = Id.ToString();
            while (rootId != "00000000-0000-0000-0000-000000000000")
            {
                var strPath = (from f in _context.GenicDrive where f.Id == Id && f.FolderType == 2 select f).FirstOrDefault();
                var strPath1 = (from f in _context.GenicDrive where f.Id == strPath.ParentId && f.FolderType == 1 select f).FirstOrDefault();
                rootId = strPath1.ParentId.ToString();
                returnStr += strPath1.Name + " > ";
            }
            return returnStr;
        }
        // Get Trash Searched folder list and file list 
        [HttpGet("[Action]/{UserId}/{SearchText}")]
        public async Task<ActionResult> GetTrashSearchedList(Guid UserId, string SearchText)
        {
            try
            {

                var result = await (from ff in _context.GenicDrive
                                    select new
                                    {
                                        FileList = (from f in _context.GenicDrive
                                                    where f.UserId == UserId
                                                    && f.Name.Contains(SearchText)
                                                    && f.FolderType == 2
                                                    && f.IsTrash == true
                                                    orderby f.CreatedDate descending
                                                    select f).ToList(),
                                        FolderList = (from g in _context.GenicDrive
                                                      where g.UserId == UserId
                                                      && g.Name.Contains(SearchText)
                                                      && g.FolderType == 1
                                                      && g.IsTrash == true
                                                      orderby g.CreatedDate descending
                                                      select g).ToList(),
                                    }
                               ).FirstOrDefaultAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        // Get Recent Searched folder list and file list 
        [HttpGet("[Action]/{UserId}/{SearchText}")]
        public async Task<ActionResult> GetRecentSearchedList(Guid UserId, string SearchText)
        {
            try
            {
                var result = await (from ff in _context.GenicDrive
                                    select new
                                    {
                                        TodaysFileList = (from f in _context.GenicDrive
                                                          where f.UserId == UserId
                                                          && f.Name.Contains(SearchText)
                                                          && f.FolderType == 2
                                                          && f.IsTrash == false
                                                          && f.OpenDate.Value.Year == DateTime.UtcNow.Year
                                                          && f.OpenDate.Value.Month == DateTime.UtcNow.Month
                                                          && f.OpenDate.Value.Day == DateTime.UtcNow.Day
                                                          orderby f.OpenDate descending
                                                          select f).ToList(),
                                        EarlierMonthFileList = (from g in _context.GenicDrive
                                                                where g.UserId == UserId
                                                                && g.Name.Contains(SearchText)
                                                                && g.FolderType == 2
                                                                && g.IsTrash == false
                                                                && g.OpenDate.Value.Year == DateTime.UtcNow.Year
                                                                && g.OpenDate.Value.Month == DateTime.UtcNow.Month
                                                                orderby g.OpenDate descending
                                                                select g).ToList(),
                                    }
                               ).FirstOrDefaultAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        // Get Favourite Searched folder list and file list 
        [HttpGet("[Action]/{UserId}/{ParentId}/{SearchText}")]
        public async Task<ActionResult> GetFavouriteSearchedList(Guid UserId, Guid? ParentId, string SearchText)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from ff in _context.GenicDrive
                                        select new
                                        {
                                            FileList = (from f in _context.GenicDrive
                                                        where f.UserId == UserId
                                                        && f.Name.Contains(SearchText)
                                                        && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                                        && f.FolderType == 2
                                                        && f.IsTrash == false
                                                        && f.IsFavourite == true
                                                        orderby f.CreatedDate descending
                                                        select f).ToList(),
                                            FolderList = (from g in _context.GenicDrive
                                                          where g.UserId == UserId
                                                          && g.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                                          && g.Name.Contains(SearchText)
                                                          && g.FolderType == 1
                                                          && g.IsTrash == false
                                                          && g.IsFavourite == true
                                                          orderby g.CreatedDate descending
                                                          select g).ToList(),
                                        }
                                  ).FirstOrDefaultAsync();
                    return StatusCode(200, result);
                }
                else
                {
                    var result = await (from ff in _context.GenicDrive
                                        select new
                                        {
                                            FileList = (from f in _context.GenicDrive
                                                        where f.ParentId == ParentId
                                                        && f.FolderType == 2
                                                        && f.IsTrash == false
                                                        orderby f.CreatedDate descending
                                                        select f).ToList(),
                                            FolderList = (from g in _context.GenicDrive
                                                          where
                                                          g.ParentId == ParentId
                                                          && g.FolderType == 1
                                                          && g.IsTrash == false
                                                          orderby g.CreatedDate descending
                                                          select g).ToList(),
                                        }
                                   ).FirstOrDefaultAsync();
                    return StatusCode(200, result);
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        // Get Shared with me Searched folder list and file list 
        [HttpGet("[Action]/{UserId}/{ParentId}/{SearchText}")]
        public async Task<ActionResult> GetSharedWithMeSearchedList(Guid UserId, Guid? ParentId, string SearchText)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from ff in _context.GenicDrive
                                        select new
                                        {
                                            FileList = (from f in _context.GenicDrive
                                                        where
                                                        f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                                        && f.Name.Contains(SearchText)
                                                        && f.Id == (from s in _context.SharedDrive where s.GenicDriveId == f.Id && s.ToUserId == UserId select s.GenicDriveId).FirstOrDefault()
                                                        && f.FolderType == 2
                                                        && f.IsTrash == false
                                                        orderby f.CreatedDate descending
                                                        select f).ToList(),
                                            FolderList = (from g in _context.GenicDrive
                                                          where
                                                          g.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                                          && g.Name.Contains(SearchText)
                                                          && g.Id == (from s in _context.SharedDrive where s.GenicDriveId == g.Id && s.ToUserId == UserId select s.GenicDriveId).FirstOrDefault()
                                                          && g.FolderType == 1
                                                          && g.IsTrash == false
                                                          orderby g.CreatedDate descending
                                                          select g).ToList(),
                                        }
                                  ).FirstOrDefaultAsync();
                    return StatusCode(200, result);
                }
                else
                {
                    var result = await (from ff in _context.GenicDrive
                                        select new
                                        {
                                            FileList = (from f in _context.GenicDrive
                                                        where
                                                          f.Name.Contains(SearchText)
                                                          && f.ParentId == ParentId
                                                          && f.FolderType == 2
                                                          && f.IsTrash == false
                                                        orderby f.CreatedDate descending
                                                        select f).ToList(),
                                            FolderList = (from g in _context.GenicDrive
                                                          where
                                                          g.ParentId == ParentId
                                                          && g.Name.Contains(SearchText)
                                                          && g.FolderType == 1
                                                          && g.IsTrash == false
                                                          orderby g.CreatedDate descending
                                                          select g).ToList(),
                                        }
                                   ).FirstOrDefaultAsync();
                    return StatusCode(200, result);
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        #endregion Folder Section end

        #region File Section Start 
        // Post drive file
        [HttpPost("[action]/{token}"), RequestSizeLimit(10000000)]
        [Obsolete]
        public ActionResult<GenicDrive> GenicDrivePostFile(GenicDrive obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                string NewFileName;
                string timezone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                if (_context.GenicDrive.Any(f => f.Name == obj.Name + obj.FileExtension && (f.Id == obj.ParentId || obj.ParentId.ToString() == "00000000-0000-0000-0000-000000000000")))
                {
                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "File name already exist.." });
                }
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
                        var userDetaild = _context.Login.Where(l => l.Id == obj.UserId).Select(l => l).FirstOrDefault();
                        AWSHelper awshelper = new AWSHelper();
                        string msg = string.Empty;
                        NewFileName = obj.Name + "." + obj.FileExtension;
                        string end_point = GlobalParameters.AWS_FOLDER + "/Drive/" + obj.Id + "/" + NewFileName;
                        bool isUploaded = awshelper.SendDriveToAWS(obj.AttachmentName, obj.FileExtension, end_point, out msg);
                        if (isUploaded) { obj.AttachmentName = msg; }
                        obj.Name = obj.Name + "." + obj.FileExtension;
                        obj.CreatedByName = userDetaild.FullName;
                        obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                        obj.UpdatedDate = null;
                        obj.UpdatedBy = userDetaild.Id;
                        obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                        obj.UpdatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timezone);
                        obj.OpenDate = null;
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
                                    using (var engine = new TesseractEngine(System.IO.Path.Combine(_hostingEnvironment.WebRootPath + "//tessdata"), "eng", EngineMode.Default))
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
                                    //Microsoft.Office.Interop.Word.Application word = new Microsoft.Office.Interop.Word.Application();
                                    object miss = System.Reflection.Missing.Value;
                                    object path = fullPath;
                                    object readOnly = true;
                                    //Microsoft.Office.Interop.Word.Document docs = word.Documents.Open(ref path, ref miss, ref readOnly, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss, ref miss);
                                    //for (int i = 0; i < docs.Paragraphs.Count; i++)
                                    //{
                                    //    _sb.Append(" \r\n " + docs.Paragraphs[i + 1].Range.Text.ToString());
                                    //}
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
                                        //get the first worksheet in the workbook
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
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "File format not allowed.." });
                    }
                }
                return StatusCode(201, new { result = "", Message = "success", MessageDescription = "File uploaded successfully!" });
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        // Get: Drive files
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getDriveFiles(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                          && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                          && f.FolderType == 2
                                          && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId && 
                                          f.ParentId == ParentId
                                          && f.FolderType == 2
                                          && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        // Get: Starred Drive files
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getStarredDriveFiles(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where f.UserId == UserId
                                              && f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                              && f.FolderType == 2
                                              && f.IsTrash == false
                                              && f.IsFavourite == true
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        f.ParentId == ParentId
                                        && f.FolderType == 2
                                        && f.IsTrash == false
                                        && f.IsFavourite == true
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Post: Move to trash Drive File
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult<GenicDrive>> MoveToTrashDriveFile(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsTrash = true;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "trash";
                    oModel.Activity = "moved an item to the trash";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = genicDrive.Name + " File moved to trash successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "File not found or try after re-login!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Post: restore Drive File
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult<GenicDrive>> restoreDriveFile(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsTrash = false;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "restored";
                    oModel.Activity = "restored an items";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = genicDrive.Name + " restored successfully!" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "File not found or try after re-login!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Delete: Drive File permanentaly
        //[HttpDelete("[Action]/{DriveId}/{token}")]
        //[Obsolete]
        //public async Task<ActionResult<GenicDrive>> RemoveDriveFile(Guid DriveId, Guid token)
        //{
        //    try
        //    {
        //        bool IsTokenValid = _context.Login.Any(x => x.Token == token);
        //        if (!IsTokenValid)
        //        {
        //            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
        //        }
        //        var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
        //        if (genicDrive != null)
        //        {
        //            _context.GenicDrive.Remove(genicDrive);
        //            await _context.SaveChangesAsync();
        //            // Delete file attachment 
        //            string oldpath = System.IO.Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.GenicDriveFolder + "//" + Id + "//" + genicDrive.Name);
        //            if (System.IO.File.Exists(oldpath))
        //            {
        //                System.IO.File.Delete(oldpath);
        //            }
        //            // remove file from sharring with user
        //            var shareFolder = _context.SharedDrive.Where(f => f.GenicDriveId == Id).ToList();
        //            if (shareFolder != null)
        //            {
        //                foreach (var d in shareFolder)
        //                {
        //                    _context.SharedDrive.Remove(d);
        //                }
        //                _context.SaveChanges();
        //            }
        //            return StatusCode(204, new { result = "", Message = "success", MessageDescription = "File Removed parmanentaly Successfully!" });
        //        }
        //        else
        //        {
        //            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "File not found or try after re-login!" });
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
        //    }
        //}
        // Get: Trash Drive files
        [HttpGet("[Action]/{UserId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getTrashDriveFiles(Guid? UserId)
        {
            try
            {
                var result = await (from f in _context.GenicDrive
                                    where f.UserId == UserId
                                    && f.FolderType == 2
                                    && f.IsTrash == true
                                    orderby f.CreatedDate descending
                                    select f).ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Get Recent Drive files
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getQuickAccessDriveFiles(Guid? UserId, Guid? ParentId)
        {
            try
            {
                string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var result = await (from f in _context.GenicDrive
                                    where f.UserId == UserId
                                    && f.ParentId == ParentId
                                    && f.FolderType == 2
                                    && f.IsTrash == false
                                    && f.OpenDate != null
                                    orderby f.OpenDate descending
                                    select f).Take(10).ToListAsync();
                foreach (var item in result)
                {
                    int deltaHours = (GlobalParameters.GetSingaporeTimeZone(DateTime.Today, timeZone) - item.OpenDate.Value).Days;
                    if (deltaHours == 0)
                    {
                        int deltaHours1 = (GlobalParameters.GetSingaporeTimeZone(DateTime.Today, timeZone) - item.OpenDate.Value).Hours;
                        if (deltaHours1 == 0) { item.LockPassword = "You open just now"; }
                        else { item.LockPassword = "You open " + deltaHours1 + " hour ago"; }
                    }
                    else
                    {
                        if (deltaHours < 31)
                        {
                            int newweek = deltaHours / 7;
                            switch (deltaHours)
                            {
                                case 1: item.LockPassword = "You open yesterday"; break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    item.LockPassword = "You open " + deltaHours + " days ago"; break;
                                default:
                                    item.LockPassword = "You open " + newweek + " week ago"; break;
                            }
                        }
                        else
                        {
                            int newmonth = deltaHours / 30;
                            item.LockPassword = "You open " + newmonth + " month ago";

                        }
                    }
                }
                return result;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }


        }
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult<GenicDrive>> AddToStarDriveFolder(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsFavourite = true;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "favourite";
                    oModel.Activity = "marked an item as favourite";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = genicDrive.Name + " Added to Favourite. " });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Folder not found or try after re-login!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Post: Add to Star Drive File
        [HttpPut("[Action]/{UserId}/{Id}/{token}")]
        public async Task<ActionResult<GenicDrive>> AddToStarDriveFile(Guid? UserId, Guid? Id, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
                if (genicDrive != null)
                {
                    genicDrive.IsFavourite = true;
                    _context.Entry(genicDrive).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    //Start: Add log on folder color changed--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = genicDrive.UserId;
                    oModel.GenicDriveId = genicDrive.Id;
                    oModel.DriveName = genicDrive.Name;
                    oModel.DrivePath = genicDrive.AttachmentName;
                    oModel.FolderType = genicDrive.FolderType;
                    oModel.FileExtension = genicDrive.FileExtension;
                    oModel.Action = "favorite";
                    oModel.Activity = "an item as favorite";
                    UpdateDriveLog(oModel);
                    //end Log Section----------------------------------
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = genicDrive.Name + " Added to Favourite. " });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "File not found or try after re-login!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Post: Remove Star from Drive File
        [HttpDelete("[Action]/{UserId}/{Id}")]
        public async Task<ActionResult<GenicDrive>> removeStarFromDriveFile(Guid? UserId, Guid? Id)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                genicDrive.IsFavourite = false;
                _context.Entry(genicDrive).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                //Start: Add log on folder color changed--------------------
                DriveLog oModel = new DriveLog();
                oModel.UserId = genicDrive.UserId;
                oModel.GenicDriveId = genicDrive.Id;
                oModel.DriveName = genicDrive.Name;
                oModel.DrivePath = genicDrive.AttachmentName;
                oModel.FolderType = genicDrive.FolderType;
                oModel.FileExtension = genicDrive.FileExtension;
                oModel.Action = "favorite";
                oModel.Activity = "favorite removed from an item";
                UpdateDriveLog(oModel);
                //end Log Section----------------------------------

                return StatusCode(201, "Folder stared unmarked!");
            }
            else
            {
                return NotFound();
            }
        }
        //Get: Shared with me Drive file
        [HttpGet("[Action]/{UserId}/{ParentId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getSharedWithMeDriveFiles(Guid? UserId, Guid? ParentId)
        {
            try
            {
                if (ParentId.ToString() == "00000000-0000-0000-0000-000000000000")
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId && 
                                        f.ParentId.ToString() == "00000000-0000-0000-0000-000000000000"
                                        && f.Id == (from s in _context.SharedDrive where s.GenicDriveId == f.Id && s.ToUserId == UserId select s.GenicDriveId).FirstOrDefault()
                                        && f.FolderType == 2
                                        && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    foreach (var u in result)
                    {
                        u.Description = (from uu in _context.SharedDrive where uu.GenicDriveId == u.Id && uu.ToUserId == UserId select uu.Remark).FirstOrDefault();
                    }
                    return result;
                }
                else
                {
                    var result = await (from f in _context.GenicDrive
                                        where
                                        //f.UserId == UserId && 
                                        f.ParentId == ParentId
                                        && f.FolderType == 2
                                        && f.IsTrash == false
                                        orderby f.CreatedDate descending
                                        select f).ToListAsync();
                    foreach (var u in result)
                    {
                        u.Description = (from uu in _context.SharedDrive where uu.GenicDriveId == u.Id && uu.ToUserId == UserId select uu.Remark).FirstOrDefault();
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Post: open drive files and add to recent open and update open date
        [HttpPut("[Action]/{UserId}/{Id}")]
        public async Task<ActionResult<GenicDrive>> openDriveFiles(Guid? UserId, Guid? Id)
        {
            var genicDrive = await _context.GenicDrive.Where(f => f.Id == Id && f.UserId == UserId).FirstOrDefaultAsync();
            if (genicDrive != null)
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                genicDrive.OpenDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Entry(genicDrive).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return StatusCode(201, "file open successfully!");
            }
            else
            {
                return NotFound();
            }
        }
        // Get: Drive recent Today open drive files
        [HttpGet("[Action]/{UserId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getRecentTodayDrivefiles(Guid? UserId)
        {
            try
            {
                var result = await (from f in _context.GenicDrive
                                    where f.UserId == UserId
                                    && f.FolderType == 2
                                    && f.IsTrash == false
                                    && f.OpenDate.Value.Year == DateTime.UtcNow.Year
                                    && f.OpenDate.Value.Month == DateTime.UtcNow.Month
                                    && f.OpenDate.Value.Day == DateTime.UtcNow.Day
                                    orderby f.OpenDate descending
                                    select f).Take(15).ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        // Get: Drive recent this month opened drive files
        [HttpGet("[Action]/{UserId}")]
        public async Task<ActionResult<IEnumerable<GenicDrive>>> getRecentThisMonthDrivefiles(Guid? UserId)
        {
            try
            {
                var result = await (from f in _context.GenicDrive
                                    where f.UserId == UserId
                                    && f.FolderType == 2
                                    && f.IsTrash == false
                                    && f.OpenDate.Value.Year == DateTime.UtcNow.Year
                                     && f.OpenDate.Value.Month == DateTime.UtcNow.Month
                                    orderby f.OpenDate descending
                                    select f).Take(15).ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //[HttpPost("[Action]")]
        //public async Task<IActionResult> DownloadDriveFile(GenicDrive obj)
        //{
        //    var FilePath = Path.Combine(_hostingEnvironment.WebRootPath, obj.AttachmentName);  
        //    if (FilePath != null)
        //    {
        //        var memory = new MemoryStream();
        //        using (var stream = new FileStream(FilePath, FileMode.Open))
        //        {
        //            await stream.CopyToAsync(memory);
        //        }
        //        memory.Position = 0;
        //        var ext = Path.GetExtension(FilePath).ToLowerInvariant();
        //        return File(memory, GetMimeTypes()[ext], Path.GetFileName(FilePath));
        //    }
        //    else
        //    {
        //        return NotFound();
        //    }
        //}
        //private Dictionary<string, string> GetMimeTypes()
        //{
        //    return new Dictionary<string, string>
        //    {
        //        {".txt","text/pain" },
        //        {".pdf","application/pdf" },
        //        {".doc","application/vnd.ms-word" },
        //        {".docx","application/vnd.ms-word" },
        //        {".xls","application/vnd.ms-excel" },
        //        {".xlsx","application/vnd.openxmslformats-officedocument.spreadsheetml.sheet" },
        //        {".png","image/png" },
        //        {".jpg","image/jpeg" },
        //        {".jpeg","image/jpeg" },
        //        {".gif","text/gif" },
        //        {".csv","text/csv" },
        //        {".rar","application/x-rar" },
        //        {".zip","application/zip" }
        //    };
        //}
        #endregion File Section End
    }
}