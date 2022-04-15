using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttachmentController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public AttachmentController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }
      
        [HttpPost("[action]/{token}")]
        [Obsolete]
        public async Task<ActionResult<CloserDetails>> postCloserDetails(CloserDetails CloserDetails, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    CloserDetails.IsReady = false;
                    var result = await (from c in _context.CloserDetails where c.IsReady == false && c.EngineerId == CloserDetails.EngineerId && c.TicketId == CloserDetails.TicketId select c).FirstOrDefaultAsync();
                    if (result == null)
                    {
                        var count = (from c in _context.CloserDetails select c).Count() + 1;
                        var prefix = (from c in _context.GenicProfile select c.CloserPrefix).FirstOrDefault();
                        if (prefix == null)
                        {
                            CloserDetails.CloserPrefix = "CLR" + count;
                        }
                        else
                        {
                            CloserDetails.CloserPrefix = prefix + count;
                        }
                        CloserDetails.CloserID = Guid.NewGuid();
                        CloserDetails.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        CloserDetails.EndDate = null;
                        CloserDetails.PaymentCollected = true;
                        _context.CloserDetails.Add(CloserDetails);
                       await  _context.SaveChangesAsync();
                    }
                    else
                    {
                        CloserDetails = result;
                    }
                    return StatusCode(200, new { result = CloserDetails, Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPut("[action]/{token}")]
        [Obsolete]
        public ActionResult<CloserDetails> putCloserDetails(CloserDetails CloserDetails, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && x.Type == "Engineer");
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                bool IsServiceFormExist = _context.TicketWiseServiceForm.Any(x => x.CloserId == CloserDetails.CloserID);
                if (!IsServiceFormExist)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Please Add Service Form first" });
                }
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                CloserDetails.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.Now, TimeZone);
                var TicketResult = (from e in _context.Ticket where e.Id == CloserDetails.TicketId select e).FirstOrDefault();
                var engineerModel = (from e in _context.Engineer where e.Id == CloserDetails.EngineerId select e).FirstOrDefault();
                if (TicketResult == null)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Ticket not found or something is wrong try again" });
                }
                else
                {
                    // update ticket status
                    TicketResult.Status = CloserDetails.TicketFlag;
                    if (CloserDetails.TicketFlag == "CLOSED")
                    {
                        TicketResult.TicketClosedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    }
                    _context.Entry(TicketResult).State = EntityState.Modified;
                    _context.SaveChanges();

                    // update end time in timer table
                    var timerModel = (from c in _context.TicketTimer where c.TicketId == TicketResult.Id && c.EndTime == null select c).FirstOrDefault();
                    timerModel.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                    timerModel.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    timerModel.Status = 2;
                    _context.Entry(timerModel).State = EntityState.Modified;
                    _context.SaveChanges();

                    // insert into closer details table
                    CloserDetails.TicketNo = TicketResult.TicketId;
                    CloserDetails.TimerID = timerModel.ID;
                    CloserDetails.StartDate = timerModel.StartDate;
                    CloserDetails.StartTime = timerModel.StartTime;
                    CloserDetails.EnginnerName = engineerModel.EngineerName;
                    CloserDetails.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    CloserDetails.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("h:mm:ss");

                    var duration = (timerModel.EndDate - timerModel.StartDate).ToString();
                    var ddd = duration.Split(".");
                    CloserDetails.TotalDuration = ddd[0].ToString();
                    if (CloserDetails.AmountPaid == 0) { CloserDetails.AmountPaid = 0; }
                    if (CloserDetails.CloserTotalAmount == 0) { CloserDetails.CloserTotalAmount = 0; }
                    if (CloserDetails.ICNo == null) { CloserDetails.ICNo = ""; }

                    #region save singnature Start
                    try
                    {
                        AWSHelper awshelper = new AWSHelper();
                        string msg = string.Empty;
                        string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + TicketResult.TicketId + "/" + CloserDetails.CloserPrefix + "/engineerSign-" + GlobalParameters.MillisecondsTimestamp() + ".jpeg";
                        bool isUploaded = awshelper.SendBase64ToAWS(CloserDetails.EngineerSignature, end_point, out msg);
                        if (isUploaded) { CloserDetails.EngineerSignature = msg; }

                        string end_point2 = GlobalParameters.AWS_FOLDER + "/Ticket/" + TicketResult.TicketId + "/" + CloserDetails.CloserPrefix + "/customerSign-" + GlobalParameters.MillisecondsTimestamp() + ".jpeg";
                        bool isUploaded2 = awshelper.SendBase64ToAWS(CloserDetails.CustomerSignature, end_point2, out msg);
                        if (isUploaded2) { CloserDetails.CustomerSignature = msg; }
                    }
                    catch(Exception ex) { }
                    #endregion save singnature end

                    if (!CloserDetails.PaymentCollected)
                    {
                        CloserDetails.CloserAmount = 0;
                        CloserDetails.CloserGSTAmount = 0;
                        CloserDetails.CloserTotalAmount = 0;
                        CloserDetails.PaymentMode = "";
                        CloserDetails.AmountPaid = 0;
                        CloserDetails.PaymentRemarks = "";
                    }
                    else
                    {
                        if (CloserDetails.AmountPaid == 0)
                        {
                            CloserDetails.AmountPaid = 0;
                        }
                        if (CloserDetails.PaymentRemarks == null)
                        {
                            CloserDetails.PaymentRemarks = "";
                        }
                    }
                    CloserDetails.IsReady = true;
                    _context.Entry(CloserDetails).State = EntityState.Modified;
                    _context.SaveChanges();

                    bool isReady = (from c in _context.CloserDetails where c.CloserID == CloserDetails.CloserID select c.IsReady).FirstOrDefault();
                    if (!isReady)
                    {
                        CloserDetails.IsReady = true;
                        _context.SaveChanges();
                    }
                    if (TicketResult.Status == "CLOSED")
                    {
                        try
                        {
                            var timerModelforeman = (from c in _context.TicketTimer where c.TicketId == TicketResult.Id && c.EndTime == null select c).ToList();
                            foreach (var item in timerModelforeman)
                            {
                                item.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                                item.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                item.Status = 2;
                                _context.Entry(item).State = EntityState.Modified;
                            }
                            var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketResult.Id select tt).ToList();
                            foreach (var item in ticketteam)
                            {
                                item.IsFree = true;
                                _context.Entry(item).State = EntityState.Modified;
                            }
                            _context.SaveChanges();
                            NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                            objMail.CompletionTicketBodyTemplate(CloserDetails.CloserID);
                            GenicDriveHelper gdh = new GenicDriveHelper(_context);
                            gdh.createWorkOrderinGenicDrive(TicketResult.CustomerId, CloserDetails.CloserID);

                            var garbagcloser = (from c in _context.CloserDetails where c.IsReady == false && c.TicketId == CloserDetails.TicketId select c).ToList();
                            foreach (var item in garbagcloser)
                            {
                                _context.Remove(item);
                                _context.SaveChanges();
                            }
                        }
                        catch { }
                        return StatusCode(202, new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Ticket Closed Successfully", Status = "closed" });
                    }
                    else if (TicketResult.Status == "HOLD")
                    {
                        try
                        {
                            var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketResult.Id select tt).ToList();
                            foreach (var item in ticketteam)
                            {
                                item.IsFree = true;
                                _context.Entry(item).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                            
                            NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                            objMail.HoldTicketBodyTemplate(CloserDetails.CloserID);
                            GenicDriveHelper gdh = new GenicDriveHelper(_context);
                            gdh.createWorkOrderinGenicDrive(TicketResult.CustomerId, CloserDetails.CloserID);
                        }
                        catch { }
                        return StatusCode(202, new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Ticket Hold Successfully", Status = "hold" });
                    }
                    return StatusCode(202, new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Ticket Closed Successfully", Status = "closed" });
                }
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
        [HttpPut("[action]/{token}")]
        public ActionResult<CloserDetails> OverWriteCloserDetails(CloserDetails CloserDetails, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var previousCloserDetails = (from c in _context.CloserDetails where c.CloserID == CloserDetails.CloserID select c).FirstOrDefault();
                var ticket = (from c in _context.Ticket where c.Id == previousCloserDetails.TicketId select c).FirstOrDefault();
                if (previousCloserDetails != null)
                {
                    var Cbase64Img = CloserDetails.CustomerSignature;
                    if (CloserDetails.WithCustomerSignature)
                    {
                        if (Cbase64Img.Length > 0)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            string msg = string.Empty;
                            string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + CloserDetails.CloserPrefix + "/customerSign-" + GlobalParameters.MillisecondsTimestamp() + ".jpeg";
                            bool isUploaded = awshelper.SendBase64ToAWS(CloserDetails.CustomerSignature, end_point, out msg);
                            if (isUploaded) { previousCloserDetails.CustomerSignature = msg; }
                        }
                        previousCloserDetails.WithCustomerSignature = true;
                        previousCloserDetails.CustomerSignatureDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                    }
                    var Ebase64Img = CloserDetails.EngineerSignature;
                    if (CloserDetails.IsTested)
                    {
                        if (Ebase64Img.Length > 0)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            string msg = string.Empty;
                            string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + CloserDetails.CloserPrefix + "/engineerSign-" + GlobalParameters.MillisecondsTimestamp() + ".jpeg";
                            bool isUploaded = awshelper.SendBase64ToAWS(CloserDetails.EngineerSignature, end_point, out msg);
                            if (isUploaded) { previousCloserDetails.EngineerSignature = msg; }
                        }
                    }
                    if (!string.IsNullOrEmpty(CloserDetails.NameOfSignatory))
                    {
                        previousCloserDetails.NameOfSignatory = CloserDetails.NameOfSignatory;
                    }
                    previousCloserDetails.Remarks = CloserDetails.Remarks;
                    _context.Entry(previousCloserDetails).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(200, new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Closer Details Successfully" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Closer not found" });
                }
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
        [HttpGet("[action]/{token}/{CloserID}")]
        public async Task<ActionResult> GetCloserAttachmentList(Guid token, Guid CloserID)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (CloserID == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        var result0 = new List<CloserAttachment>();
                        return StatusCode(200, new { result = result0, Message = "success", MessageDescription = "success" });
                    }
                    var result = await (from i in _context.CloserAttachment where i.CloserID == CloserID select i).ToListAsync();
                    foreach (var a in result)
                    {
                        a.CloserAttachmentAduioList = (from l in _context.CloserAttachmentAduio.Where(n => n.CAID == a.CAID && n.CloserID == a.CloserID) select l).ToList();
                    }
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        [HttpDelete("[action]/{token}/{CAID}/{CloserId}")]
        public ActionResult deleteCloserAttachment(Guid token, int CAID, Guid CloserId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var CloserAttachment = (from c in _context.CloserAttachment where c.CAID == CAID && c.CloserID == CloserId select c).FirstOrDefault(); 
                    if (CloserAttachment == null)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Attachment not found or already removed." });
                    }
                    if (string.IsNullOrEmpty(CloserAttachment.AttachmentFile))
                    {
                        AWSHelper awshelper = new AWSHelper();
                        awshelper.RemoveFromAWS(CloserAttachment.AttachmentFile);
                    }
                    _context.CloserAttachment.Remove(CloserAttachment);
                    _context.SaveChanges();
                    var AudioList = (from i in _context.CloserAttachmentAduio where i.CAID == CAID select i).ToList();
                    if (AudioList != null)
                    {
                        foreach (var a in AudioList)
                        {
                            if (string.IsNullOrEmpty(a.AttachmentAudioName))
                            {
                                AWSHelper awshelper = new AWSHelper();
                                awshelper.RemoveFromAWS(CloserAttachment.AttachmentFile);
                            }
                            _context.CloserAttachmentAduio.Remove(a);
                        }
                        _context.SaveChanges();
                    }
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Attachment removed successfully" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        #region Closer Attachment Audio
        [HttpPost("{action}/{token}")]
        public ActionResult PostCloserAttachmentAudio(Guid token, CloserAttachmentAduio closerattachmentaduio)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (closerattachmentaduio.AudioAttachment.Length > 0)
                    {
                        string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                        closerattachmentaduio.AttachmentAudioId = Guid.NewGuid();
                        closerattachmentaduio.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        var closer = (from cl in _context.CloserDetails where cl.CloserID == closerattachmentaduio.CloserID select cl).FirstOrDefault();
                        var ticket = (from t in _context.Ticket where t.Id == closer.TicketId select t.TicketId).FirstOrDefault();
                        AWSHelper awshelper = new AWSHelper();
                        string endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket + "/" + closer.CloserPrefix + "/" + GlobalParameters.MillisecondsTimestamp() + ".wav";
                        bool isUploaded = awshelper.SendBase64ToAWS(closerattachmentaduio.AudioAttachment, endPoint, out string msg);
                        if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                        else
                        {
                            closerattachmentaduio.AudioAttachment = msg;
                        }
                    }
                    _context.CloserAttachmentAduio.Add(closerattachmentaduio);
                    _context.SaveChanges();
                    return StatusCode(200, new { result="", Message = "success", MessageDescription = "closer audio saved successfully" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("{action}/{token}/{CloserId}")]
        public async Task<ActionResult> GetCloserAttachmentAudio(Guid token, Guid CloserId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.CloserAttachmentAduio.Where(x => x.CloserID == CloserId).OrderByDescending(a => a.CreatedDate).ToListAsync();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpDelete("[action]/{token}/{AttachmentAudioId}")]
        public async Task<ActionResult> removeAudioAttachment(Guid token, Guid AttachmentAudioId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var AudioList = (from i in _context.CloserAttachmentAduio where i.AttachmentAudioId == AttachmentAudioId select i).FirstOrDefault();
                    AWSHelper awshelper = new AWSHelper();
                    awshelper.RemoveFromAWS(AudioList.AudioAttachment);
                    _context.CloserAttachmentAduio.Remove(AudioList);
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
    }
}
