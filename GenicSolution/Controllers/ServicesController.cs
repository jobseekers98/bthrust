using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public ServicesController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }
        #region Fine workz Service Form
        [HttpGet("[action]/{token}/{CloserId}")]
        public ActionResult GetServiceFormById(Guid token, Guid CloserId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = (from c in _context.FSMServiceForm where c.CloserId == CloserId select c).FirstOrDefault();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Service Form submitted successfully" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("[action]/{token}/{TicketId}/{ServiceFormSequenceId}/{IsPreview}")]
        public async Task<ActionResult> PostServiceForm(FSMServiceForm ef, Guid token, Guid TicketId, int ServiceFormSequenceId, bool IsPreview)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (ef.CloserId == null || ef.CloserId == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Closer Form Missing" });
                    }
                    else
                    {
                        _context.FSMServiceForm.Add(ef);
                        var engineerDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                        var ticket = (from c in _context.Ticket where c.IsReady == true && c.Id == TicketId select c).FirstOrDefault();
                        var resultEng = (from e in _context.Engineer where e.Id == engineerDetails.Id select e).FirstOrDefault();
                        var ticketWiseServiceform = (from c in _context.TicketWiseServiceForm where c.TicketId == TicketId && c.ServiceFormSequenceId == ServiceFormSequenceId && c.IsActive == false select c).FirstOrDefault();
                        var lastCloserdetails = (from cl in _context.CloserDetails where cl.TicketId == TicketId && cl.EngineerId == engineerDetails.Id select cl)
                            .OrderByDescending(cl => cl.StartDate).FirstOrDefault();
                        if (ticketWiseServiceform != null)
                        {
                            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                            ticketWiseServiceform.ServiceDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                            ticketWiseServiceform.TicketDate = ticket.OneOffAppointmentDate;
                            ticketWiseServiceform.EngineerId = resultEng.Id;
                            ticketWiseServiceform.EngineerName = resultEng.EngineerName;
                            ticketWiseServiceform.IsActive = true;
                            ticketWiseServiceform.TicketNo = ticket.TicketId;
                            ticketWiseServiceform.IsPreview = IsPreview;
                            if (lastCloserdetails != null)
                            {
                                ticketWiseServiceform.CloserId = lastCloserdetails.CloserID;
                            }
                            _context.Entry(ticketWiseServiceform).State = EntityState.Modified;
                            try
                            {
                                _context.SaveChanges();
                            }
                            catch (Exception ex) { }
                        }
                        await _context.SaveChangesAsync();
                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Service Form submitted successfully" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPut("[action]/{token}/{TicketId}/{IsPreview}")]
        public ActionResult PutServiceForm(FSMServiceForm asf, Guid token, Guid TicketId, bool IsPreview)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (asf.CloserId == null || asf.CloserId == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Closer Form Missing" });
                    }
                    else
                    {
                        _context.Entry(asf).State = EntityState.Modified;
                        _context.SaveChanges();
                        var ticketWiseServiceform = (from c in _context.TicketWiseServiceForm where c.CloserId == asf.CloserId select c).FirstOrDefault();
                        if (ticketWiseServiceform != null)
                        {
                            try
                            {
                                ticketWiseServiceform.IsPreview = IsPreview;
                                _context.Entry(ticketWiseServiceform).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                            catch (Exception ex) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() }); }
                        }
                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Service Form updated successfully" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}/{closerId}")]
        public ActionResult CheckServiceFormStatus(Guid token, Guid closerId)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token && x.Type == "Engineer");
            if (!IsTokenValid)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            var ServiceFormDetails = (from sf in _context.TicketWiseServiceForm where sf.CloserId == closerId select sf).FirstOrDefault();
            if (ServiceFormDetails == null)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please add a 'service form' first" });
            }
            if (!ServiceFormDetails.IsActive)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please submit the 'service form' first!" });
            }
            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
        }
        #endregion

        #region Service Form
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult> asignServiceformToTicket(List<TicketWiseServiceForm> TicketWiseServiceForm, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    foreach (var i in TicketWiseServiceForm)
                    {
                        var closerIdIsExist = (from c in _context.TicketWiseServiceForm where c.CloserId == i.CloserId select c).Any();
                        if (closerIdIsExist)
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please complete the closer details submission, after that you can assign new service form" });
                        }
                    }
                    foreach (var i in TicketWiseServiceForm)
                    {
                        int getSerialNo;
                        try
                        {
                            getSerialNo = (from s in _context.TicketWiseServiceForm select s.SerialNo).Max();
                        }
                        catch (Exception ee)
                        {
                            getSerialNo = 0;
                        }
                        var Count = (from c in _context.TicketWiseServiceForm where i.MasterServiceFormID == c.MasterServiceFormID && c.TicketId == i.TicketId select c).Count();
                        if (Count == 0)
                        {
                            i.ServiceFormSequenceId = 1;
                        }
                        else
                        {
                            var max = (from c in _context.TicketWiseServiceForm where i.MasterServiceFormID == c.MasterServiceFormID && c.TicketId == i.TicketId select c.ServiceFormSequenceId).Max();
                            i.ServiceFormSequenceId = max + 1;
                        }
                        i.IsActive = false;
                        i.TicketDate = null;
                        i.ServiceDate = null;
                        i.SerialNo = getSerialNo + 1;
                        _context.TicketWiseServiceForm.Add(i);
                        await _context.SaveChangesAsync();
                    }
                    return StatusCode(201, new { result="", Message = "success", MessageDescription = "Service form added successfully" });
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
        [HttpGet("[action]/{token}/{TicketId}")]
        public async Task<ActionResult> GetAssignedServiceFormByTicket(Guid token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.TicketWiseServiceForm.Where(a => a.TicketId == TicketId).OrderByDescending(a => a.ServiceFormSequenceId).ToListAsync();
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
        [HttpGet("[action]/{TicketId}")]
        public async Task<ActionResult<CloserDetails>> getCloserDetailsFormServiceForm(Guid? TicketId)
        {
            var CloserDetails = await _context.CloserDetails.Where(x => x.TicketId == TicketId && x.IsReady == true).OrderByDescending(u => u.StartDate).FirstOrDefaultAsync();
            if (CloserDetails == null)
            {
                return NotFound();
            }

            return CloserDetails;
        }
        [HttpDelete("{action}/{token}/{id}")]
        public async Task<ActionResult> DeleteAssignedServiceForm(Guid token, int id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var TicketWiseServiceForm = await _context.TicketWiseServiceForm.Where(a => a.TicketServiceID == id).FirstAsync();
                    if (TicketWiseServiceForm == null)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "service form not found or already removed" });
                    }
                    _context.TicketWiseServiceForm.Remove(TicketWiseServiceForm);
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result="", Message = "success", MessageDescription = "service form removed" });
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
        [HttpGet("[action]/{CloserId}")]
        [Obsolete]
        public ActionResult getServiceFormPDF(Guid CloserId)
        {
            try
            {
                var serviceform = (from sv in _context.TicketWiseServiceForm where sv.CloserId == CloserId select sv).FirstOrDefault();
                if (serviceform == null)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Service form missing" });
                }
                else
                {
                    MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                    MailSettings.GenerateServicePDF(CloserId);
                    string path = GlobalParameters.TicketPath(serviceform.TicketNo, serviceform.ServicePrefix + serviceform.TicketServiceID);
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "PDF Created successfully", Path = path });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }

        }
        #endregion

    }
}
