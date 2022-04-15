using GenicSolution.Entities;
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
    public class TicketsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public TicketsController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }


        [HttpGet("{token}/{TicketId}")]
        public ActionResult<Ticket> GetTicket(Guid token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = (from t in _context.Ticket
                                  where t.Id == TicketId
                                  select new
                                  {
                                      t.Id,
                                      t.TicketId,
                                      t.RecurringId,
                                      t.TicketUniqueID,
                                      t.Title,
                                      t.TicketConvertedFrom,
                                      t.Description,
                                      t.OneOffAppointmentDate,
                                      t.AppointmentStart,
                                      t.AppointmentEnd,
                                      t.OneOffStartTime,
                                      t.OneOffEndTime,
                                      t.NetAmount,
                                      t.Priority,
                                      t.Status,
                                      t.CustomerName,
                                      t.CustomerEmail,
                                      t.CustomerCompanyName,
                                      t.CustomerContactNo,
                                      t.CustomerAddress,
                                      t.InternalNoteDescription,
                                      t.RecurringDuration,
                                      t.RecurringVisitFrequency,
                                      t.RecurringTotalVisit,
                                      t.RecurringInvoice,
                                      t.CustomerId,
                                      t.PropertyId,
                                      t.Reallocate,
                                      t.Rescheduled,
                                      t.OneOffScheduled,
                                      t.InvoiceId,
                                      t.InvoiceNo,
                                      t.Terms,
                                      t.TermsAndConditions,
                                      t.TicketClosedDate,
                                      t.TicketType,
                                      t.TicketTeams,
                                      t.TicketItems,
                                      t.TicketAttachments,
                                      Customers = (from c in _context.Customer where c.Id == t.CustomerId select c).FirstOrDefault(),
                                      t.SMTPId,
                                      t.TicketWiseIssueType,
                                      t.ModifiedUtcDate,
                                      t.CreatedUtcDate,
                                      t.Rating,
                                      t.RatingFeedback
                                  }).FirstOrDefault();
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
        [HttpGet("[action]/{token}")]
        public ActionResult<ICollection<Ticket>> GetUnAssignedTickets(Guid token)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
            if (IsTokenValid)
            {
                var result = (from c in _context.Ticket where c.IsReady == true select c)
                .Include(c => c.TicketTeams).Where(c => c.TicketTeams.Count == 0).ToList();
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            else
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
        }
        [HttpPut("[action]/{token}")]
        public ActionResult<Ticket> PutTicket(Ticket ticket, Guid token)
        {
            try
            {
                var UserDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                if (UserDetails.Type == "SubAdmin") { ticket.SMTPId = UserDetails.SMTPId; }
                else
                {
                    if (ticket.SMTPId == 0)
                    {
                        int smtpid = _context.SMTPSettings.Select(e => e.Id).FirstOrDefault();
                        ticket.SMTPId = smtpid;
                    }
                }
                if (UserDetails != null)
                {
                    if (UserDetails.Type == "Engineer")
                    {
                        var IsExistEngineer = (from tt in _context.TicketTeam where tt.TicketId == ticket.Id && tt.EngineerId == UserDetails.Id select tt).Any();
                        if (!IsExistEngineer)
                        {
                            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer con't added in the ticket" });
                        }
                    }
                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    if (ticket.OneOffScheduled)
                    {
                        ticket.OneOffAppointmentDate = null;
                        ticket.Status = "UNSCHEDULED";

                        var teamdeleteifassined = (from c in _context.TicketTeam where c.TicketId == ticket.Id select c).ToList();
                        foreach (var item in teamdeleteifassined)
                        {
                            _context.Remove(item);
                            _context.SaveChanges();
                        }
                    }
                    else
                    {
                        if (ticket.Status == "UNSCHEDULED" || ticket.Status == "NEW JOB REQUEST" || ticket.Status == "DEFECT JOB")
                        {
                            ticket.Status = "UPCOMING";
                            _context.SaveChanges();
                        }
                    }
                    if (ticket.TicketConvertedFrom == "QUOTE")
                    {
                        var quote = (from q in _context.Quote where q.Id == ticket.TicketConvertedID select q).FirstOrDefault();
                        if (quote != null)
                        {
                            quote.TicketId = ticket.Id;
                            quote.TicketNo = ticket.TicketId;
                        }
                    }
                    else if (ticket.TicketConvertedFrom == "REQUEST") { }
                    var previousDetails = (from c in _context.Ticket where c.Id == ticket.Id select c).FirstOrDefault();
                    if (previousDetails.IsReady)
                    {
                        previousDetails.Title = ticket.Title;
                        previousDetails.Description = ticket.Description;
                        previousDetails.Status = ticket.Status;
                        previousDetails.Priority = ticket.Priority;
                        previousDetails.OneOffScheduled = ticket.OneOffScheduled;
                        previousDetails.Reallocate = false;
                        previousDetails.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                        previousDetails.OneOffStartTime = ticket.OneOffStartTime;
                        previousDetails.OneOffEndTime = ticket.OneOffEndTime;
                        previousDetails.AppointmentStart = ticket.AppointmentStart;
                        previousDetails.AppointmentEnd = ticket.AppointmentEnd;
                        previousDetails.InternalNoteDescription = ticket.InternalNoteDescription;
                        previousDetails.TermsAndConditions = ticket.TermsAndConditions;
                        previousDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                        previousDetails.CreatedBy = UserDetails.Id;
                        previousDetails.SMTPId = UserDetails.SMTPId;
                        _context.Entry(previousDetails).State = EntityState.Modified;
                        _context.SaveChanges();
                        return StatusCode(200, new { result = "Update", Message = "success", MessageDescription = "Update successfully" });
                    }
                    else
                    {
                        #region create one ticket
                        if (ticket.TicketType == "One-Off Ticket")
                        {

                            previousDetails.IsReady = true;
                            previousDetails.Title = ticket.Title;
                            previousDetails.Description = ticket.Description;
                            previousDetails.Status = ticket.Status;
                            previousDetails.Priority = ticket.Priority;
                            previousDetails.OneOffScheduled = ticket.OneOffScheduled;
                            previousDetails.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                            previousDetails.OneOffStartTime = ticket.OneOffStartTime;
                            previousDetails.OneOffEndTime = ticket.OneOffEndTime;
                            previousDetails.AppointmentStart = ticket.AppointmentStart;
                            previousDetails.AppointmentEnd = ticket.AppointmentEnd;
                            previousDetails.Reallocate = false;
                            previousDetails.InternalNoteDescription = ticket.InternalNoteDescription;
                            previousDetails.TermsAndConditions = ticket.TermsAndConditions;
                            previousDetails.CustomerId = ticket.CustomerId;
                            previousDetails.PropertyId = ticket.PropertyId;
                            previousDetails.CustomerName = ticket.CustomerName;
                            previousDetails.CustomerEmail = ticket.CustomerEmail;
                            previousDetails.CustomerAddress = ticket.CustomerAddress;
                            previousDetails.CustomerCompanyName = ticket.CustomerCompanyName;
                            previousDetails.CustomerContactNo = ticket.CustomerContactNo;
                            previousDetails.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            previousDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            previousDetails.CreatedBy = UserDetails.Id;
                            previousDetails.SMTPId = UserDetails.SMTPId;
                            string ab = string.Empty;
                            ab = previousDetails.TicketUniqueID.ToString("00000");
                            previousDetails.TicketId = GTimeZone.TicketPrefix + ab;
                            _context.Entry(previousDetails).State = EntityState.Modified;
                            _context.SaveChanges();

                            var ticketTeam = _context.TicketTeam.Where(c => c.TicketId == ticket.Id).ToList();
                            foreach (var item in ticketTeam)
                            {
                                try
                                {
                                    DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                                    DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                                    item.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                    item.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                    item.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                    item.IsFree = false;
                                    _context.Entry(item).State = EntityState.Modified;
                                    _context.SaveChanges();
                                }
                                catch { }
                            }
                        }


                        #endregion
                        #region create tickets according to calculate Total Visit
                        Task.Yield();
                        if (ticket.TicketType == "Recurring Ticket")
                        {
                            int totalticketCount = (from cn in _context.TicketRecurringHelperDate where cn.IsFor == 1 select cn.Id).Count();
                            if (totalticketCount > 0)
                            {
                                var dateList = (from cn in _context.TicketRecurringHelperDate where cn.IsFor == 1 select cn).OrderBy(x => x.Date).ToList();
                                int internalcount = 0;
                                string tickettempId = "";
                                foreach (var itemdate in dateList)
                                {
                                    if (internalcount == 0)
                                    {
                                        previousDetails.IsReady = true;
                                        tickettempId = ticket.TicketId;
                                        previousDetails.Title = ticket.Title;
                                        previousDetails.Description = ticket.Description;
                                        previousDetails.Status = ticket.Status;
                                        previousDetails.Priority = ticket.Priority;
                                        previousDetails.TicketType = "Recurring Ticket";
                                        previousDetails.OneOffScheduled = ticket.OneOffScheduled;
                                        previousDetails.TicketType = "Recurring Ticket";
                                        previousDetails.Reallocate = false;
                                        previousDetails.OneOffAppointmentDate = itemdate.Date;
                                        DateTime appstartdate = (DateTime)ticket.OneOffAppointmentDate;
                                        string appdate = itemdate.Date.ToString("yyyy-MM-dd");
                                        previousDetails.OneOffStartTime = ticket.OneOffStartTime;
                                        previousDetails.OneOffEndTime = ticket.OneOffEndTime;
                                        previousDetails.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z"; ;
                                        previousDetails.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                                        previousDetails.InternalNoteDescription = ticket.InternalNoteDescription;
                                        previousDetails.TermsAndConditions = ticket.TermsAndConditions;
                                        previousDetails.CustomerId = ticket.CustomerId;
                                        previousDetails.PropertyId = ticket.PropertyId;
                                        previousDetails.CustomerName = ticket.CustomerName;
                                        previousDetails.CustomerEmail = ticket.CustomerEmail;
                                        previousDetails.CustomerAddress = ticket.CustomerAddress;
                                        previousDetails.CustomerCompanyName = ticket.CustomerCompanyName;
                                        previousDetails.CustomerContactNo = ticket.CustomerContactNo;
                                        previousDetails.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                        previousDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                        previousDetails.TicketId = tickettempId + "-1"; ;
                                        previousDetails.CreatedBy = UserDetails.Id;
                                        previousDetails.SMTPId = UserDetails.SMTPId;
                                        _context.Entry(previousDetails).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        internalcount++;

                                        var ticketTeaminternal = _context.TicketTeam.Where(c => c.TicketId == ticket.Id).ToList();
                                        var removedList = ticketTeaminternal;
                                        foreach (var item in removedList)
                                        {
                                            _context.Remove(item);
                                            _context.SaveChanges();
                                        }
                                        foreach (var item in ticketTeaminternal)
                                        {
                                            try
                                            {
                                                DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                                                DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                                                if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)item.EngineerId))
                                                {
                                                    TicketTeam obj = new TicketTeam();
                                                    obj.TicketId = ticket.Id;
                                                    obj.EngineerId = item.EngineerId;
                                                    obj.EngineerName = item.EngineerName;
                                                    obj.EngineerLogo = item.EngineerLogo;
                                                    obj.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                                    obj.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                                    obj.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                                    obj.IsFree = false;
                                                    obj.Type = item.Type;
                                                    _context.TicketTeam.Add(obj);
                                                    _context.SaveChanges();
                                                }
                                            }
                                            catch (Exception ex) { }
                                        }
                                    }
                                    else
                                    {
                                        int uid = _context.Ticket.Count() + 1;
                                        Ticket RecurringTickets = new Ticket();
                                        RecurringTickets.TicketId = tickettempId + "-" + (internalcount + 1);
                                        RecurringTickets.TicketUniqueID = uid;
                                        RecurringTickets.Id = Guid.NewGuid();
                                        RecurringTickets.RecurringId = ticket.RecurringId;
                                        RecurringTickets.CustomerId = ticket.CustomerId;
                                        RecurringTickets.PropertyId = ticket.PropertyId;
                                        RecurringTickets.CustomerName = ticket.CustomerName;
                                        RecurringTickets.CustomerEmail = ticket.CustomerEmail;
                                        RecurringTickets.CustomerContactNo = ticket.CustomerContactNo;
                                        RecurringTickets.CustomerAddress = ticket.CustomerAddress;
                                        RecurringTickets.CustomerCompanyName = ticket.CustomerCompanyName;
                                        RecurringTickets.Priority = ticket.Priority;
                                        RecurringTickets.Title = ticket.Title;
                                        RecurringTickets.Description = ticket.Description;
                                        RecurringTickets.TicketType = ticket.TicketType;
                                        RecurringTickets.OneOffScheduled = false;
                                        RecurringTickets.OneOffAppointmentDate = itemdate.Date;
                                        DateTime appstartdate = (DateTime)RecurringTickets.OneOffAppointmentDate;
                                        string appdate = itemdate.Date.ToString("yyyy-MM-dd");
                                        RecurringTickets.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z";
                                        RecurringTickets.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                                        RecurringTickets.OneOffStartTime = ticket.OneOffStartTime;
                                        RecurringTickets.OneOffEndTime = ticket.OneOffEndTime;
                                        RecurringTickets.OneOffInvoice = ticket.OneOffInvoice;
                                        RecurringTickets.RecurringScheduled = ticket.RecurringScheduled;
                                        RecurringTickets.RecurringStartDate = ticket.RecurringStartDate;
                                        RecurringTickets.RecurringEndDate = ticket.RecurringEndDate;
                                        RecurringTickets.RecurringDuration = ticket.RecurringDuration;
                                        RecurringTickets.RecurringVisitFrequency = ticket.RecurringVisitFrequency;
                                        RecurringTickets.RecurringTotalVisit = ticket.RecurringTotalVisit;
                                        RecurringTickets.RecurringInvoice = ticket.RecurringInvoice;
                                        RecurringTickets.TermsAndConditions = ticket.TermsAndConditions;
                                        RecurringTickets.Status = ticket.Status;
                                        RecurringTickets.InternalNoteDescription = ticket.InternalNoteDescription;
                                        RecurringTickets.InternalNoteQuote = ticket.InternalNoteQuote;
                                        RecurringTickets.InternalNoteTicket = ticket.InternalNoteTicket;
                                        RecurringTickets.InternalNoteInvoice = ticket.InternalNoteInvoice;
                                        RecurringTickets.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                        RecurringTickets.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                        previousDetails.CreatedBy = UserDetails.Id;
                                        RecurringTickets.NetAmount = ticket.NetAmount;
                                        RecurringTickets.IsReady = true;
                                        RecurringTickets.SMTPId = ticket.SMTPId;
                                        _context.Ticket.Add(RecurringTickets);
                                        _context.SaveChanges();

                                        var ticketteam = (from c in _context.TicketTeam where c.TicketId == ticket.Id select c).ToList();
                                        foreach (var item in ticketteam)
                                        {
                                            DateTime d1 = DateTime.Parse(RecurringTickets.AppointmentStart).ToUniversalTime();
                                            DateTime d2 = DateTime.Parse(RecurringTickets.AppointmentEnd).ToUniversalTime();
                                            if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)item.EngineerId))
                                            {
                                                TicketTeam obj = new TicketTeam();
                                                obj.TicketId = RecurringTickets.Id;
                                                obj.EngineerId = item.EngineerId;
                                                obj.EngineerName = item.EngineerName;
                                                obj.EngineerLogo = item.EngineerLogo;
                                                obj.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                                obj.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                                obj.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                                obj.IsFree = false;
                                                obj.Type = item.Type;
                                                _context.TicketTeam.Add(obj);
                                                _context.SaveChanges();
                                            }
                                        }

                                        var ticketitem = (from c in _context.TicketItem where c.TicketId == ticket.Id select c).ToList();
                                        foreach (var item in ticketitem)
                                        {
                                            TicketItem obj = new TicketItem();
                                            obj.TicketId = RecurringTickets.Id;
                                            obj.ItemName = item.ItemName;
                                            obj.Type = item.Type;
                                            obj.ItemDescription = item.ItemDescription;
                                            obj.ItemQuantity = item.ItemQuantity;
                                            obj.ItemUnitCost = item.ItemUnitCost;
                                            obj.ItemTotalCost = item.ItemTotalCost;
                                            obj.ItemAddredBy = false;
                                            obj.ItemAddredById = item.ItemAddredById;
                                            obj.ItemAddredByName = item.ItemAddredByName;
                                            _context.TicketItem.Add(obj);
                                            _context.SaveChanges();
                                        }
                                        var ticketattachment = (from c in _context.TicketAttachment where c.TicketId == ticket.Id select c).ToList();
                                        foreach (var item in ticketattachment)
                                        {
                                            TicketAttachment obj = new TicketAttachment();
                                            obj.TicketId = RecurringTickets.Id;
                                            obj.AttachmentPath = item.AttachmentPath;
                                            obj.AttachmentSize = item.AttachmentSize;
                                            _context.TicketAttachment.Add(obj);
                                            _context.SaveChanges();
                                        }
                                        var ticketwiseissuetype = (from c in _context.TicketWiseIssueType where c.TicketId == ticket.Id select c).ToList();
                                        foreach (var item in ticketwiseissuetype)
                                        {
                                            TicketWiseIssueType obj = new TicketWiseIssueType();
                                            obj.Id = 0;
                                            obj.TicketId = RecurringTickets.Id;
                                            obj.TicketIssueTypeId = item.TicketIssueTypeId;
                                            obj.IssueTypeName = item.IssueTypeName;
                                            obj.IssueTypeName = item.IssueTypeName;
                                            _context.TicketWiseIssueType.Add(obj);
                                            _context.SaveChanges();
                                        }
                                        internalcount++;
                                    }
                                    _context.SaveChanges();
                                }
                            }
                            else
                            {
                                string tickettempId = "";
                                tickettempId = ticket.TicketId;
                                previousDetails.IsReady = true;
                                DateTime appstartdate1 = (DateTime)ticket.OneOffAppointmentDate;
                                string appdate1 = appstartdate1.Date.ToString("yyyy-MM-dd");
                                previousDetails.Title = ticket.Title;
                                previousDetails.TicketType = "Recurring Ticket";
                                previousDetails.Description = ticket.Description;
                                previousDetails.Status = ticket.Status;
                                previousDetails.Priority = ticket.Priority;
                                previousDetails.OneOffScheduled = ticket.OneOffScheduled;
                                previousDetails.Reallocate = false;
                                previousDetails.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                                previousDetails.OneOffStartTime = ticket.OneOffStartTime;
                                previousDetails.OneOffEndTime = ticket.OneOffEndTime;
                                previousDetails.AppointmentStart = appdate1 + "T" + ticket.OneOffStartTime + "Z"; ;
                                previousDetails.AppointmentEnd = appdate1 + "T" + ticket.OneOffEndTime + "Z";
                                previousDetails.InternalNoteDescription = ticket.InternalNoteDescription;
                                previousDetails.TermsAndConditions = ticket.TermsAndConditions;
                                previousDetails.CustomerId = ticket.CustomerId;
                                previousDetails.PropertyId = ticket.PropertyId;
                                previousDetails.CustomerName = ticket.CustomerName;
                                previousDetails.CustomerEmail = ticket.CustomerEmail;
                                previousDetails.CustomerAddress = ticket.CustomerAddress;
                                previousDetails.CustomerCompanyName = ticket.CustomerCompanyName;
                                previousDetails.CustomerContactNo = ticket.CustomerContactNo;
                                previousDetails.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                previousDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                previousDetails.CreatedBy = UserDetails.Id;
                                previousDetails.SMTPId = UserDetails.SMTPId;
                                previousDetails.TicketId = tickettempId + "-1";
                                _context.Entry(previousDetails).State = EntityState.Modified;
                                _context.SaveChanges();

                                var ticketteam = (from c in _context.TicketTeam where c.TicketId == ticket.Id select c).ToList();
                                for (int i = 1; i < ticket.RecurringTotalVisit; i++)
                                {
                                    int uid = _context.Ticket.Count() + 1;
                                    Ticket RecurringTickets = new Ticket();
                                    RecurringTickets.TicketId = tickettempId + "-" + (i + 1);
                                    RecurringTickets.Id = Guid.NewGuid();
                                    RecurringTickets.TicketUniqueID = uid;
                                    RecurringTickets.RecurringId = ticket.RecurringId;
                                    RecurringTickets.CustomerId = ticket.CustomerId;
                                    RecurringTickets.PropertyId = ticket.PropertyId;
                                    RecurringTickets.CustomerName = ticket.CustomerName;
                                    RecurringTickets.CustomerEmail = ticket.CustomerEmail;
                                    RecurringTickets.CustomerContactNo = ticket.CustomerContactNo;
                                    RecurringTickets.CustomerAddress = ticket.CustomerAddress;
                                    RecurringTickets.CustomerCompanyName = ticket.CustomerCompanyName;
                                    RecurringTickets.Priority = ticket.Priority;
                                    RecurringTickets.Title = ticket.Title;
                                    RecurringTickets.Description = ticket.Description;
                                    RecurringTickets.TicketType = "Recurring Ticket";
                                    RecurringTickets.OneOffScheduled = false;
                                    DateTime oneoffstartdate = (DateTime)ticket.RecurringStartDate;
                                    RecurringTickets.OneOffAppointmentDate = (DateTime?)oneoffstartdate.AddDays(i);
                                    DateTime appstartdate = (DateTime)RecurringTickets.OneOffAppointmentDate;
                                    string appdate = appstartdate.ToString("yyyy-MM-dd");
                                    RecurringTickets.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z";
                                    RecurringTickets.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                                    RecurringTickets.OneOffStartTime = ticket.OneOffStartTime;
                                    RecurringTickets.OneOffEndTime = ticket.OneOffEndTime;
                                    RecurringTickets.OneOffInvoice = ticket.OneOffInvoice;
                                    RecurringTickets.RecurringScheduled = ticket.RecurringScheduled;
                                    RecurringTickets.RecurringStartDate = ticket.RecurringStartDate;
                                    RecurringTickets.RecurringEndDate = ticket.RecurringEndDate;
                                    RecurringTickets.RecurringDuration = ticket.RecurringDuration;
                                    RecurringTickets.RecurringVisitFrequency = ticket.RecurringVisitFrequency;
                                    RecurringTickets.RecurringTotalVisit = ticket.RecurringTotalVisit;
                                    RecurringTickets.RecurringInvoice = ticket.RecurringInvoice;
                                    RecurringTickets.Status = ticket.Status;
                                    RecurringTickets.InternalNoteDescription = ticket.InternalNoteDescription;
                                    RecurringTickets.TermsAndConditions = ticket.TermsAndConditions;
                                    RecurringTickets.InternalNoteQuote = ticket.InternalNoteQuote;
                                    RecurringTickets.InternalNoteTicket = ticket.InternalNoteTicket;
                                    RecurringTickets.InternalNoteInvoice = ticket.InternalNoteInvoice;
                                    RecurringTickets.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                    RecurringTickets.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                    RecurringTickets.CreatedBy = UserDetails.Id;
                                    RecurringTickets.NetAmount = ticket.NetAmount;
                                    RecurringTickets.IsReady = true;
                                    RecurringTickets.SMTPId = ticket.SMTPId;
                                    _context.Ticket.Add(RecurringTickets);
                                    _context.SaveChanges();

                                    
                                    foreach (var item in ticketteam)
                                    {
                                        DateTime d1 = Convert.ToDateTime(RecurringTickets.AppointmentStart).ToUniversalTime();
                                        DateTime d2 = Convert.ToDateTime(RecurringTickets.AppointmentEnd).ToUniversalTime();
                                        if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)item.EngineerId))
                                        {
                                            TicketTeam obj = new TicketTeam();
                                            obj.TicketId = RecurringTickets.Id;
                                            obj.EngineerId = item.EngineerId;
                                            obj.EngineerName = item.EngineerName;
                                            obj.EngineerLogo = item.EngineerLogo;
                                            DateTime? sd = Convert.ToDateTime(RecurringTickets.AppointmentStart).ToUniversalTime();
                                            obj.AppointmentStartTime = sd.Value.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                            DateTime? ed = Convert.ToDateTime(RecurringTickets.AppointmentEnd).ToUniversalTime();
                                            obj.AppointmentEndTime = ed.Value.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                            obj.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                            obj.IsFree = false;
                                            obj.Type = item.Type;
                                            _context.TicketTeam.Add(obj);
                                            _context.SaveChanges();
                                        }
                                    }

                                    var ticketitem = (from c in _context.TicketItem where c.TicketId == ticket.Id select c).ToList();
                                    foreach (var item in ticketitem)
                                    {
                                        TicketItem obj = new TicketItem();
                                        obj.TicketId = RecurringTickets.Id;
                                        obj.ItemName = item.ItemName;
                                        obj.Type = item.Type;
                                        obj.ItemDescription = item.ItemDescription;
                                        obj.ItemQuantity = item.ItemQuantity;
                                        obj.ItemUnitCost = item.ItemUnitCost;
                                        obj.ItemTotalCost = item.ItemTotalCost;
                                        obj.ItemAddredBy = false;
                                        obj.ItemAddredById = item.ItemAddredById;
                                        obj.ItemAddredByName = item.ItemAddredByName;
                                        _context.TicketItem.Add(obj);
                                        _context.SaveChanges();
                                    }
                                    var ticketattachment = (from c in _context.TicketAttachment where c.TicketId == ticket.Id select c).ToList();
                                    foreach (var item in ticketattachment)
                                    {
                                        TicketAttachment obj = new TicketAttachment();
                                        obj.TicketId = RecurringTickets.Id;
                                        obj.AttachmentPath = item.AttachmentPath;
                                        obj.AttachmentSize = item.AttachmentSize;
                                        _context.TicketAttachment.Add(obj);
                                        _context.SaveChanges();
                                    }
                                    var ticketwiseissuetype = (from c in _context.TicketWiseIssueType where c.TicketId == ticket.Id select c).ToList();
                                    foreach (var item in ticketwiseissuetype)
                                    {
                                        TicketWiseIssueType obj = new TicketWiseIssueType();
                                        obj.Id = 0;
                                        obj.TicketId = RecurringTickets.Id;
                                        obj.TicketIssueTypeId = item.TicketIssueTypeId;
                                        obj.IssueTypeName = item.IssueTypeName;
                                        obj.IssueTypeName = item.IssueTypeName;
                                        _context.TicketWiseIssueType.Add(obj);
                                        _context.SaveChanges();
                                    }
                                    _context.SaveChanges();
                                }
                            }
                        }
                        _context.Database.ExecuteSqlRaw("TRUNCATE TABLE [TicketRecurringHelperDate]");
                        #endregion
                        return StatusCode(200, new { result = "Insert", Message = "success", MessageDescription = "Create successfully" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (DbUpdateConcurrencyException w)
            {
                if (!TicketExists(ticket.Id))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(500, w.Message.ToString());
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        private bool EngineerIsAvalableOrNot(string StartTime, string EndTime, Guid EngineerId)
        {
            try
            {
                string st = StartTime.Substring(0, 4) + "-" + StartTime.Substring(4, 2) + "-" + StartTime.Substring(6, 2) + " " + StartTime.Substring(8, 2) + ":" + StartTime.Substring(10, 2) + ":" + StartTime.Substring(12, 2);
                string et = StartTime.Substring(0, 4) + "-" + EndTime.Substring(4, 2) + "-" + EndTime.Substring(6, 2) + " " + EndTime.Substring(8, 2) + ":" + EndTime.Substring(10, 2) + ":" + EndTime.Substring(12, 2);
                var result = _context.Engineer.FromSqlRaw("select * from Engineer where Working='true' and Id={2} and Id not in(select distinct tt.EngineerId from TicketTeam tt  where tt.IsFree ='false' and " +
                    "({0} between tt.AppointmentStartTime and tt.AppointmentEndTime or {1} between tt.AppointmentStartTime and tt.AppointmentEndTime) or " +
                    "(tt.AppointmentStartTime between {0} and {1} or tt.AppointmentEndTime between {0} and {1}))", st, et, EngineerId).ToList();
                if (result.Count == 0) { return false; }
                else { return true; }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { return true; }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
        }
        [HttpPost("{token}")]
        public ActionResult<Ticket> PostTicket(Ticket ticket, Guid token)
        {
            try
            {
                _context.Database.ExecuteSqlRaw("TRUNCATE TABLE [TicketRecurringHelperDate]");
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = (from c in _context.Ticket where c.IsReady == false select c).FirstOrDefault();
                if (result != null)
                {
                    //get Ticket items and remove if already exists
                    var itemlist = (from i in _context.TicketItem where i.TicketId == result.Id select i).ToList();
                    if (itemlist.Count > 0)
                    {
                        foreach (var p in itemlist)
                        {
                            _context.TicketItem.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket items and remove if already exists
                    var itemteamt = (from i in _context.TicketTeam where i.TicketId == result.Id select i).ToList();
                    if (itemteamt.Count > 0)
                    {
                        foreach (var p in itemteamt)
                        {
                            _context.TicketTeam.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket attachment and remove if already exists
                    var TicketAttachment = (from c in _context.TicketAttachment where c.TicketId == result.Id select c).ToList();
                    if (TicketAttachment.Count > 0)
                    {
                        foreach (var item in TicketAttachment)
                        {
                            _context.TicketAttachment.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket Issue wise and remove if already exists
                    var TicketIssuewise = (from c in _context.TicketWiseIssueType where c.TicketId == result.Id select c).ToList();
                    if (TicketIssuewise.Count > 0)
                    {
                        foreach (var item in TicketIssuewise)
                        {
                            _context.TicketWiseIssueType.Remove(item);
                        }
                        _context.SaveChanges();
                    }

                    //get Ticket Equipment remove if already exists
                    var ticketEquipmentList = (from c in _context.TicketEquipment where c.TicketId == result.Id select c).ToList();
                    if (ticketEquipmentList.Count > 0)
                    {
                        foreach (var item in ticketEquipmentList)
                        {
                            _context.TicketEquipment.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    _context.Ticket.Remove(result);
                    _context.SaveChanges();
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used

            try
            {
                var genicprofile = (from c in _context.GenicProfile select c).FirstOrDefault();
                var _login = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                int IsExist = (from c in _context.Ticket select c).Count();
                if (IsExist == 0)
                {
                    ticket.TicketUniqueID = 1;
                }
                else
                {
                    int count = (from c in _context.Ticket select c.TicketUniqueID).Max();
                    ticket.TicketUniqueID = count + 1;
                }
                int recurringcount = (from c in _context.Ticket select c).Count();
                string ab = string.Empty;
                ab = ticket.TicketUniqueID.ToString("00000");
                ticket.TicketId = genicprofile.TicketPrefix + ab;
                ticket.Id = Guid.NewGuid();
                ticket.RecurringId = recurringcount + 1;
                ticket.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicprofile.TimeZone);
                ticket.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicprofile.TimeZone);
                ticket.Priority = 3;
                ticket.InvoiceNo = "";
                ticket.SMTPId = _login.SMTPId;
                ticket.TermsAndConditions = genicprofile.TicketTermsConditions;
                ticket.Status = "UPCOMING";
                if (ticket.TicketConvertedFrom == "copy")
                {
                    var previousticket = (from t in _context.Ticket where t.Id == ticket.TicketConvertedID select t).FirstOrDefault();
                    ticket.Priority = previousticket.Priority;
                    ticket.Title = previousticket.Title;
                    ticket.NetAmount = previousticket.NetAmount;
                    ticket.Description = previousticket.Description;
                    ticket.InternalNoteDescription = previousticket.InternalNoteDescription;
                    ticket.TermsAndConditions = previousticket.TermsAndConditions;
                }
                _context.Ticket.Add(ticket);
                _context.SaveChanges();

                if (ticket.TicketConvertedFrom == "copy")
                {
                    // Add item from previous ticket
                    var NewItemList = (from i in _context.TicketItem where i.TicketId == ticket.TicketConvertedID select i).ToList();
                    if (NewItemList.Count > 0)
                    {
                        foreach (var n in NewItemList)
                        {
                            TicketItem obj = new TicketItem();
                            obj.TicketId = ticket.Id;
                            obj.ItemName = n.ItemName;
                            obj.ItemDescription = n.ItemDescription;
                            obj.ItemQuantity = n.ItemQuantity;
                            obj.ItemUnitCost = n.ItemUnitCost;
                            obj.ItemTotalCost = n.ItemTotalCost;
                            obj.IsPriseRevised = false;
                            obj.ItemAddredBy = false;
                            obj.ItemAddredById = n.ItemAddredById;
                            obj.ItemAddredByName = n.ItemAddredByName;
                            obj.Type = n.Type;
                            obj.InWarranty = n.InWarranty;
                            obj.WarrantyDays = n.WarrantyDays;
                            obj.UniqId = n.UniqId;
                            _context.TicketItem.Add(obj);
                        }
                        _context.SaveChanges();
                    }

                    // Add Attachment from previous ticket
                    var NewAttachmentList = (from i in _context.TicketAttachment where i.TicketId == ticket.TicketConvertedID select i).ToList();
                    if (NewItemList.Count > 0)
                    {
                        foreach (var n in NewAttachmentList)
                        {
                            TicketAttachment obj = new TicketAttachment();
                            obj.TicketId = ticket.Id;
                            obj.AttachmentName = n.AttachmentName;
                            obj.AttachmentPath = n.AttachmentPath;
                            obj.AttachmentSize = n.AttachmentSize;
                            _context.TicketAttachment.Add(obj);
                        }
                        _context.SaveChanges();
                    }

                    // Add TicketWiseIssueType previous ticket
                    var NewTicketWiseIssueTypeList = (from i in _context.TicketWiseIssueType where i.TicketId == ticket.TicketConvertedID select i).ToList();
                    if (NewItemList.Count > 0)
                    {
                        foreach (var n in NewTicketWiseIssueTypeList)
                        {
                            TicketWiseIssueType obj = new TicketWiseIssueType();
                            obj.TicketId = ticket.Id;
                            obj.TicketIssueTypeId = n.TicketIssueTypeId;
                            obj.IssueTypeName = n.IssueTypeName;
                            _context.TicketWiseIssueType.Add(obj);
                        }
                        _context.SaveChanges();
                    }
                }

                return StatusCode(200, new { result = ticket, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{TicketId}/{Token}")]
        public ActionResult<Ticket> CopyTicketFromOtherTicket(Guid ticketid, Guid Token)
        {
            try
            {
                var result = (from c in _context.Ticket where c.IsReady == false select c).FirstOrDefault();
                if (result != null)
                {
                    //get Ticket items and remove if already exists
                    var itemlist = (from i in _context.TicketItem where i.TicketId == result.Id select i).ToList();
                    if (itemlist.Count > 0)
                    {
                        foreach (var p in itemlist)
                        {
                            _context.TicketItem.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket items and remove if already exists
                    var itemteamt = (from i in _context.TicketTeam where i.TicketId == result.Id select i).ToList();
                    if (itemteamt.Count > 0)
                    {
                        foreach (var p in itemteamt)
                        {
                            _context.TicketTeam.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket attachment and remove if already exists
                    var TicketAttachment = (from c in _context.TicketAttachment where c.TicketId == result.Id select c).ToList();
                    if (TicketAttachment.Count > 0)
                    {
                        foreach (var item in TicketAttachment)
                        {
                            _context.TicketAttachment.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket Issue wise and remove if already exists
                    var TicketIssuewise = (from c in _context.TicketWiseIssueType where c.TicketId == result.Id select c).ToList();
                    if (TicketIssuewise.Count > 0)
                    {
                        foreach (var item in TicketIssuewise)
                        {
                            _context.TicketWiseIssueType.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    _context.Ticket.Remove(result);
                    _context.SaveChanges();
                }
            }
            catch (Exception) { }

            try
            {
                var login = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                var previousticket = (from t in _context.Ticket where t.Id == ticketid select t).FirstOrDefault();
                var ticket = new Ticket();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var Prefix = (from p in _context.GenicProfile select p.TicketPrefix).FirstOrDefault();

                int IsExist = (from c in _context.Ticket select c).Count();
                if (IsExist == 0)
                {
                    ticket.TicketUniqueID = 1;
                }
                else
                {
                    int count = (from c in _context.Ticket select c.TicketUniqueID).Max();
                    ticket.TicketUniqueID = count + 1;
                }
                int recurringcount = (from c in _context.Ticket select c).Count();
                string ab = string.Empty;
                ab = ticket.TicketUniqueID.ToString("00000");
                ticket.TicketId = Prefix + ab;
                ticket.Id = Guid.NewGuid();
                ticket.RecurringId = recurringcount + 1;
                ticket.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                ticket.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                ticket.TicketConvertedID = null;
                ticket.TicketConvertedFrom = null;
                ticket.Priority = previousticket.Priority;
                ticket.CustomerCompanyName = "COMPANY NAME?";
                ticket.Status = "UPCOMING";
                ticket.NetAmount = previousticket.NetAmount;
                ticket.Title = previousticket.Title;
                ticket.Description = previousticket.Description;
                ticket.InternalNoteDescription = previousticket.InternalNoteDescription;
                ticket.InternalNoteTicket = previousticket.InternalNoteTicket;
                ticket.InternalNoteQuote = previousticket.InternalNoteQuote;
                ticket.InternalNoteInvoice = previousticket.InternalNoteInvoice;
                ticket.TicketType = "One-Off Ticket";
                _context.Ticket.Add(ticket);
                _context.SaveChanges();

                // Add item from previous ticket
                var NewItemList = (from i in _context.TicketItem where i.TicketId == ticketid select i).ToList();
                if (NewItemList.Count > 0)
                {
                    foreach (var n in NewItemList)
                    {
                        TicketItem obj = new TicketItem();
                        obj.TicketId = ticket.Id;
                        obj.ItemName = n.ItemName;
                        obj.ItemDescription = n.ItemDescription;
                        obj.ItemQuantity = n.ItemQuantity;
                        obj.ItemUnitCost = n.ItemUnitCost;
                        obj.ItemTotalCost = n.ItemTotalCost;
                        obj.IsPriseRevised = false;
                        obj.ItemAddredBy = false;
                        obj.ItemAddredById = login.Id;
                        obj.ItemAddredByName = login.FullName;
                        obj.Type = n.Type;
                        obj.InWarranty = n.InWarranty;
                        obj.WarrantyDays = n.WarrantyDays;
                        obj.UniqId = n.UniqId;
                        _context.TicketItem.Add(obj);
                    }
                    _context.SaveChanges();
                }

                // Add Attachment from previous ticket
                var NewAttachmentList = (from i in _context.TicketAttachment where i.TicketId == ticketid select i).ToList();
                if (NewItemList.Count > 0)
                {
                    foreach (var n in NewAttachmentList)
                    {
                        TicketAttachment obj = new TicketAttachment();
                        obj.TicketId = ticket.Id;
                        obj.AttachmentName = n.AttachmentName;
                        obj.AttachmentPath = n.AttachmentPath;
                        obj.AttachmentSize = n.AttachmentSize;
                        _context.TicketAttachment.Add(obj);
                    }
                    _context.SaveChanges();
                }

                // Add TicketWiseIssueType previous ticket
                var NewTicketWiseIssueTypeList = (from i in _context.TicketWiseIssueType where i.TicketId == ticketid select i).ToList();
                if (NewItemList.Count > 0)
                {
                    foreach (var n in NewTicketWiseIssueTypeList)
                    {
                        TicketWiseIssueType obj = new TicketWiseIssueType();
                        obj.TicketId = ticket.Id;
                        obj.TicketIssueTypeId = n.TicketIssueTypeId;
                        obj.IssueTypeName = n.IssueTypeName;
                        _context.TicketWiseIssueType.Add(obj);
                    }
                    _context.SaveChanges();
                }


                return ticket;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{QuotationId}/{Token}")]
        public ActionResult<Ticket> CreateTicketFromQuotation(Guid QuotationId, Guid Token)
        {
            try
            {
                var result = (from c in _context.Ticket where c.IsReady == false select c).FirstOrDefault();
                if (result != null)
                {
                    //get Ticket items and remove if already exists
                    var itemlist = (from i in _context.TicketItem where i.TicketId == result.Id select i).ToList();
                    if (itemlist.Count > 0)
                    {
                        foreach (var p in itemlist)
                        {
                            _context.TicketItem.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket items and remove if already exists
                    var itemteamt = (from i in _context.TicketTeam where i.TicketId == result.Id select i).ToList();
                    if (itemteamt.Count > 0)
                    {
                        foreach (var p in itemteamt)
                        {
                            _context.TicketTeam.Remove(p);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket attachment and remove if already exists
                    var TicketAttachment = (from c in _context.TicketAttachment where c.TicketId == result.Id select c).ToList();
                    if (TicketAttachment.Count > 0)
                    {
                        foreach (var item in TicketAttachment)
                        {
                            _context.TicketAttachment.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    //get Ticket Issue wise and remove if already exists
                    var TicketIssuewise = (from c in _context.TicketWiseIssueType where c.TicketId == result.Id select c).ToList();
                    if (TicketIssuewise.Count > 0)
                    {
                        foreach (var item in TicketIssuewise)
                        {
                            _context.TicketWiseIssueType.Remove(item);
                        }
                        _context.SaveChanges();
                    }
                    _context.Ticket.Remove(result);
                    _context.SaveChanges();
                }
            }
            catch (Exception) { }

            try
            {
                var login = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                var quatation = (from t in _context.Quote where t.Id == QuotationId select t).FirstOrDefault();
                var ticket = new Ticket();
                var genicprofile = (from c in _context.GenicProfile select c).FirstOrDefault();
                var Prefix = (from p in _context.GenicProfile select p.TicketPrefix).FirstOrDefault();

                int IsExist = (from c in _context.Ticket select c).Count();
                if (IsExist == 0)
                {
                    ticket.TicketUniqueID = 1;
                }
                else
                {
                    int count = (from c in _context.Ticket select c.TicketUniqueID).Max();
                    ticket.TicketUniqueID = count + 1;
                }

                int recurringcount = (from c in _context.Ticket select c).Count();
                string ab = string.Empty;
                ab = ticket.TicketUniqueID.ToString("00000");
                ticket.TicketId = Prefix + ab;
                ticket.Id = Guid.NewGuid();
                ticket.RecurringId = recurringcount + 1;
                ticket.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicprofile.TimeZone);
                ticket.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicprofile.TimeZone);
                ticket.TicketConvertedID = quatation.Id;
                ticket.TicketConvertedFrom = "QUOTE";
                ticket.QuoteId = quatation.QuoteId;
                ticket.CustomerAddress = (from p in _context.Property
                                          where p.Id == quatation.PropertyId
                                          select p.AddressStreet1 + ", " + p.AddressStreet2 + " " + p.AddressUnitNo + " " +
                p.AddressZipCode + " " + p.AddressCountry)?.FirstOrDefault();
                ticket.Priority = 3;
                ticket.CustomerName = quatation.CustomerName;
                ticket.CustomerCompanyName = quatation.CompanyName;
                ticket.CustomerEmail = quatation.CustomerEmail;
                ticket.CustomerContactNo = quatation.CustomerContactNo;
                ticket.PropertyId = quatation.PropertyId;
                ticket.Status = "UPCOMING";
                ticket.NetAmount = quatation.NetAmount;
                ticket.Title = quatation.JobTitle;
                if (quatation.ClientRemark == null) { quatation.ClientRemark = ""; }
                ticket.Description = quatation.ClientRemark;
                ticket.InternalNoteDescription = quatation.InternalNotes;
                ticket.CustomerId = quatation.CustomerId;
                ticket.NetAmount = quatation.SubTotal;
                ticket.Terms = "30 Days";
                ticket.TermsAndConditions = genicprofile.TicketTermsConditions;
                ticket.InternalNoteTicket = false;
                ticket.InternalNoteQuote = true;
                ticket.InternalNoteInvoice = false;
                ticket.TicketType = "One-Off Ticket";
                _context.Ticket.Add(ticket);
                _context.SaveChanges();

                // Add item from previous ticket
                var NewItemList = (from i in _context.QuoteItem where i.QuoteId == QuotationId select i).ToList();
                if (NewItemList.Count > 0)
                {
                    foreach (var n in NewItemList)
                    {
                        TicketItem obj = new TicketItem();
                        obj.TicketId = ticket.Id;
                        obj.ItemName = n.ItemName;
                        obj.ItemDescription = n.ItemDescription;
                        obj.ItemQuantity = n.Qty;
                        obj.ItemUnitCost = n.UnitCost;
                        obj.ItemTotalCost = n.Total;
                        obj.IsPriseRevised = false;
                        obj.ItemAddredBy = false;
                        obj.ItemAddredById = login.Id;
                        obj.ItemAddredByName = login.FullName;
                        obj.Type = n.Type;
                        obj.UniqId = n.UniqId;
                        obj.InWarranty = n.InWarranty;
                        obj.WarrantyDays = n.WarrantyDays;
                        _context.TicketItem.Add(obj);
                    }
                    _context.SaveChanges();
                }

                // Add Attachment from previous ticket
                var NewAttachmentList = (from i in _context.QuoteAttachment where i.QuoteId == QuotationId select i).ToList();
                if (NewAttachmentList.Count > 0)
                {
                    foreach (var n in NewAttachmentList)
                    {
                        TicketAttachment obj = new TicketAttachment();
                        obj.TicketId = ticket.Id;
                        obj.AttachmentName = n.AttachmentExtension;
                        obj.AttachmentPath = n.Attachment;
                        obj.AttachmentSize = n.AttachmentSize;
                        _context.TicketAttachment.Add(obj);
                    }
                    _context.SaveChanges();
                }
                return ticket;
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPut("[action]/{tid}/{status}/{token}")]
        public async Task<ActionResult> PutUpdateStatusTicket(string tid, string Status, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = (from c in _context.Ticket where c.TicketId == tid select c).FirstOrDefault();
                if (result == null)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Ticket not found" });
                }
                else
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    result.Status = Status;
                    var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == result.Id select tt).ToList();
                    foreach (var item in ticketteam)
                    {
                        item.IsFree = true;
                        _context.Entry(item).State = EntityState.Modified;
                        _context.SaveChanges();
                    }
                    await _context.SaveChangesAsync();
                }
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
        }
        [HttpPut("[action]/{token}")]
        public ActionResult PutRescheduledTicket(Guid token, Ticket ticket)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    Task.Yield();
                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    var result = (from c in _context.Ticket where c.Id == ticket.Id select c).FirstOrDefault();
                    if (result == null)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "failure" });
                    }
                    else
                    {
                        DateTime appstartdate = (DateTime)ticket.OneOffAppointmentDate;
                        string appdate = appstartdate.Date.ToString("yyyy-MM-dd");
                        result.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z";
                        result.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                        result.OneOffStartTime = ticket.OneOffStartTime;
                        result.OneOffEndTime = ticket.OneOffEndTime;
                        result.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                        result.Rescheduled = ticket.Rescheduled;
                        result.Reallocate = ticket.Reallocate;
                        result.Status = "UPCOMING";
                        result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                        _context.Entry(result).State = EntityState.Modified;
                        _context.SaveChanges();

                        var PreviousTeamList = _context.TicketTeam.Where(c => c.TicketId == ticket.Id).ToList();
                        foreach (var item in PreviousTeamList)
                        {
                            _context.Remove(item);
                            _context.SaveChanges();
                        }

                        foreach (var item in ticket.TicketTeams)
                        {
                            try
                            {
                                DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                                DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                                item.Id = 0;
                                item.TicketId = ticket.Id;
                                item.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                item.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                item.EngineerName = (from en in _context.Engineer where en.Id == item.EngineerId select en.EngineerName).FirstOrDefault();
                                item.EngineerLogo = (from en in _context.Engineer where en.Id == item.EngineerId select en.EngineerLogo).FirstOrDefault();
                                item.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                item.IsFree = false;
                                item.Type = (from en in _context.Engineer where en.Id == item.EngineerId select en.Type).FirstOrDefault();
                                _context.TicketTeam.Add(item);
                                _context.SaveChanges();
                            }
                            catch { }
                        }
                    }
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "Update successfully" });
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

        [HttpPut("[action]/{Token}")]
        public ActionResult AssignedEngineerForAllTickets(Guid Token, Ticket ticket)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    int rid = (from c in _context.Ticket where c.Id == ticket.Id select c.RecurringId).FirstOrDefault();
                    var result = (from c in _context.Ticket where c.RecurringId == rid && c.Status == "UPCOMING" select c.Id).ToList();

                    foreach (Guid tid in result)
                    {
                        var delprev = (from c in _context.TicketTeam where c.TicketId == tid select c).ToList();
                        foreach (var deleteditem in delprev)
                        {
                            _context.TicketTeam.Remove(deleteditem);
                            _context.SaveChanges();
                        }
                        var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                        foreach (var item in ticket.TicketTeams)
                        {
                            var oldDetails = (from c in _context.Ticket where c.Id == tid select c).FirstOrDefault();
                            oldDetails.AppointmentStart = ticket.AppointmentStart;
                            oldDetails.AppointmentEnd = ticket.AppointmentEnd;
                            oldDetails.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                            oldDetails.OneOffStartTime = ticket.OneOffStartTime;
                            oldDetails.OneOffEndTime = ticket.OneOffEndTime;
                            oldDetails.Rescheduled = ticket.Rescheduled;
                            oldDetails.Reallocate = ticket.Reallocate;
                            _context.Entry(oldDetails).State = EntityState.Modified;
                            _context.SaveChanges();
                            DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                            DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                            if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)item.EngineerId))
                            {
                                TicketTeam obj = new TicketTeam();
                                obj.TicketId = tid;
                                obj.EngineerId = item.EngineerId;
                                obj.EngineerName = (from en in _context.Engineer where en.Id == item.EngineerId select en.EngineerName).FirstOrDefault();
                                obj.EngineerLogo = (from e in _context.Engineer where e.Id == item.EngineerId select e.EngineerLogo).FirstOrDefault();
                                obj.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                                obj.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                                obj.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                obj.IsFree = false;
                                obj.Type = (from en in _context.Engineer where en.Id == item.EngineerId select en.Type).FirstOrDefault();
                                _context.TicketTeam.Add(obj);
                                _context.SaveChanges();
                            }
                        }

                    }
                    return StatusCode(202, "Update");
                }
                else
                {
                    return StatusCode(208, "Token expire");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        private bool TicketExists(Guid id)
        {
            return _context.Ticket.Any(e => e.Id == id);
        }

        [HttpPut("[action]")]
        [Obsolete]
        public async Task<ActionResult> PutRescheduledCalendarTicket(Ticket ticket)
        {
            try
            {
                var result = (from c in _context.Ticket where c.TicketId == ticket.TicketId select c).FirstOrDefault();
                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    result.Title = ticket.Title;
                    result.Status = "UPCOMING";
                    result.Description = ticket.Description;
                    result.OneOffScheduled = ticket.OneOffScheduled;
                    result.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                    result.OneOffStartTime = ticket.OneOffStartTime;
                    result.OneOffEndTime = ticket.OneOffEndTime;
                    result.AppointmentStart = ticket.AppointmentStart;
                    result.AppointmentEnd = ticket.AppointmentEnd;
                    result.Rescheduled = ticket.Rescheduled;
                    result.Reallocate = ticket.Reallocate;
                    _context.Entry(result).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    var PreviousTeamList = _context.TicketTeam.Where(c => c.TicketId == ticket.Id).ToList();
                    foreach (var item in PreviousTeamList)
                    {
                        _context.Remove(item);
                        _context.SaveChanges();
                    }

                    foreach (var item in ticket.TicketTeams)
                    {
                        try
                        {
                            DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                            DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                            item.Id = 0;
                            item.TicketId = ticket.Id;
                            item.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                            item.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                            item.EngineerName = (from en in _context.Engineer where en.Id == item.EngineerId select en.EngineerName).FirstOrDefault();
                            item.EngineerLogo = (from en in _context.Engineer where en.Id == item.EngineerId select en.EngineerLogo).FirstOrDefault();
                            item.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            item.IsFree = false;
                            item.Type = (from en in _context.Engineer where en.Id == item.EngineerId select en.Type).FirstOrDefault();
                            _context.TicketTeam.Add(item);
                            _context.SaveChanges();
                        }
                        catch { }
                    }
                    var customer = (from c in _context.Customer where c.Id == ticket.CustomerId select c).FirstOrDefault();
                    var customerDefaultEmail = (from c in _context.ArrayofKey where c.CustomerId == ticket.CustomerId && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                    MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                    /// send Mail to Customer
                    mail.TicketRescheduledMailForCustomer(ticket, customerDefaultEmail, ticket.SMTPId);
                    /// send Mail to Engineer
                    var engineerlist = (from c in _context.TicketTeam where c.TicketId == ticket.Id select c).ToListAsync();
                    foreach (var item in engineerlist.Result)
                    {
                        var engineers = await (from c in _context.Engineer where c.Id == item.EngineerId select c).FirstOrDefaultAsync();
                        mail.TicketRescheduledMailForEngineer(item.EngineerName, engineers.EngineerEmail, ticket, ticket.SMTPId);
                    }

                    /// send Mail to Admin
                    mail.TicketRescheduledMailForAdmin(ticket, ticket.SMTPId);
                }
                return StatusCode(202, "Update");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPut("[action]")]
        public async Task<ActionResult> PutDateDragCalendarFromMonthTicket(Ticket ticket)
        {
            try
            {
                var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                var result = (from c in _context.Ticket where c.Id == ticket.Id select c).FirstOrDefault();
                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    if (!result.Rescheduled)
                    {
                        result.Rescheduled = true;
                    }
                    if (result.OneOffScheduled)
                    {
                        result.OneOffScheduled = false;
                    }
                    result.Status = "UPCOMING";
                    result.OneOffScheduled = ticket.OneOffScheduled;
                    result.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                    result.AppointmentStart = ticket.AppointmentStart;
                    result.AppointmentEnd = ticket.AppointmentEnd;
                    result.OneOffStartTime = ticket.OneOffStartTime;
                    result.OneOffEndTime = ticket.OneOffEndTime;
                    result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                    _context.Entry(result).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    var ticketTeam = _context.TicketTeam.Where(c => c.TicketId == ticket.Id).ToList();
                    foreach (var item in ticketTeam)
                    {
                        try
                        {
                            DateTime d1 = DateTime.Parse(ticket.AppointmentStart).ToUniversalTime();
                            DateTime d2 = DateTime.Parse(ticket.AppointmentEnd).ToUniversalTime();
                            item.AppointmentStartTime = d1.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                            item.AppointmentEndTime = d2.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                            _context.Entry(item).State = EntityState.Modified;
                            await _context.SaveChangesAsync();
                        }
                        catch { }
                    }

                }
                return StatusCode(202, "Update");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPut("[action]/{TicketId}")]
        public async Task<ActionResult> TicketRevertToUnscheduledFromCalendar(Guid TicketId)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var result = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    result.Rescheduled = false;
                    result.Status = "UNSCHEDULED";
                    result.OneOffScheduled = true;
                    result.OneOffAppointmentDate = null;
                    result.OneOffStartTime = null;
                    result.OneOffEndTime = null;
                    result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    await _context.SaveChangesAsync();
                }
                return StatusCode(202, "Update");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPost("[action]/{TicketUniqueID}")]
        public async Task<ActionResult> ValidateTicketNo(int TicketUniqueID)
        {
            try
            {
                var result = await (from c in _context.Ticket where c.TicketUniqueID == TicketUniqueID select c.TicketUniqueID).CountAsync();
                if (result == 0)
                {
                    var cc = TicketUniqueID.ToString("00000");
                    return StatusCode(201, cc);
                }
                else
                {
                    return StatusCode(202, "Already Exist");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        /// End
        /// Ticket Methods End
        ///***************************************************************************///



        ///***************************************************************************///
        /// Ticket Teams Methods Begin
        [HttpGet("[action]/{TicketId}/{token}")]
        public async Task<ActionResult> GetTicketTeam(Guid TicketId, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.TicketTeam
                                        where c.TicketId == TicketId
                                        select new
                                        {
                                            c.Id,
                                            c.TicketId,
                                            c.EngineerId,
                                            EngineerName = (from e in _context.Engineer where e.Id == c.EngineerId select e.EngineerName).FirstOrDefault(),
                                            EngineerLogo = (from e in _context.Engineer where e.Id == c.EngineerId select e.EngineerLogo).FirstOrDefault(),
                                            Type = (from e in _context.Engineer where e.Id == c.EngineerId select e.Type).FirstOrDefault()
                                        }).ToListAsync();
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
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult<TicketTeam>> PostTicketTeam(TicketTeam ticketteam, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    var ticketTeam = _context.TicketTeam.Where(c => c.TicketId == ticketteam.TicketId && c.EngineerId == ticketteam.EngineerId).FirstOrDefault();
                    if (ticketTeam != null)
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = ticketteam.EngineerName + " already added" });
                    }
                    ticketteam.IsFree = false;
                    ticketteam.Type = (from e in _context.Engineer where e.Id == ticketteam.EngineerId select e.Type).FirstOrDefault();
                    ticketteam.EngineerLogo = (from e in _context.Engineer where e.Id == ticketteam.EngineerId select e.EngineerLogo).FirstOrDefault();
                    _context.TicketTeam.Add(ticketteam);

                    Ticket obj = await _context.Ticket.Where(c => c.Id == ticketteam.TicketId).FirstOrDefaultAsync();
                    if (obj != null)
                    {
                        obj.Reallocate = true;
                    }
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result="", Message = "success", MessageDescription = ticketteam.EngineerName + " is added" });
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
        [HttpDelete("[action]/{tid}/{eid}/{token}")]
        [Obsolete]
        public async Task<ActionResult> DeleteTicketTeam(Guid tid, Guid eid, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var ticket = (from t in _context.Ticket where t.Id == tid select t).FirstOrDefault();
                    if (ticket.CreatedBy == eid)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "This engineer is self created this ticket. connot deletable" });
                    }
                    var ticketTeam = _context.TicketTeam.Where(c => c.TicketId == tid && c.EngineerId == eid).FirstOrDefault();
                    if (ticketTeam == null)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please select a customer first" });
                    }
                    _context.TicketTeam.Remove(ticketTeam);
                    await _context.SaveChangesAsync();
                    string engineeremail = (from c in _context.Engineer where c.Id == ticketTeam.EngineerId select c.EngineerEmail).FirstOrDefault();

                    var customer = (from c in _context.Customer where c.Id == ticket.CustomerId select c).FirstOrDefault();
                    MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                    mail.TicketUnallocatedMailForEngineer(ticketTeam.EngineerName, engineeremail, ticket, ticket.SMTPId);
                    return StatusCode(202, new { result="", Message = "success", MessageDescription = ticketTeam.EngineerName + " is removed" });
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
        /// Ticket Teams Methods End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Ticket Line Item Methods Begin
        [HttpGet("[action]/{token}/{TicketId}")]
        public async Task<ActionResult> GetTicketItem(Guid token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.TicketItem where c.TicketId == TicketId select c).ToListAsync();
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
        [HttpGet("[action]/{token}/{Id}")]
        public async Task<ActionResult> GetTicketItemById(Guid token, int Id)
        {

            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.TicketItem where c.Id == Id select c).FirstOrDefaultAsync();
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
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult> PutTicketItem(TicketItem ticketitem, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (ticketitem.UniqId == null) { ticketitem.UniqId = ""; }
                    if (genicprofile.WarrantyValidation)
                    {
                        if (ticketitem.InWarranty)
                        {
                            if (ticketitem.UniqId != null)
                            {
                                var IsDuplicate = (from c in _context.TicketItem where c.ItemName == ticketitem.ItemName && c.UniqId == ticketitem.UniqId && c.Id != ticketitem.Id select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
                                }
                            }
                        }
                    }
                    if (ticketitem.ItemQuantity == 0) { ticketitem.ItemQuantity = 1; }
                    _context.Entry(ticketitem).State = EntityState.Modified;
                    _context.SaveChanges();
                    var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                    var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                    result.NetAmount = Convert.ToDouble(itemsCost);
                    _context.Entry(result).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result="", Message = "success", MessageDescription = "Update successfully" });
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
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult> PostTicketItem(TicketItem ticketitem, Guid token)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (ticketitem.UniqId == null) { ticketitem.UniqId = ""; }
                    if (res.WarrantyValidation)
                    {
                        if (ticketitem.InWarranty)
                        {
                            if (ticketitem.UniqId != null)
                            {
                                var IsDuplicate = (from c in _context.TicketItem where c.ItemName == ticketitem.ItemName && c.UniqId == ticketitem.UniqId select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
                                }
                            }
                        }
                    }
                    if (ticketitem.ItemQuantity == 0) { ticketitem.ItemQuantity = 1; }
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    var itemlist = (from b in _context.TicketItem where b.ItemName == ticketitem.ItemName && b.TicketId == ticketitem.TicketId && b.Type == ticketitem.Type select b).FirstOrDefault();
                    if (itemlist != null)
                    {
                        var itemlist2 = (from b in _context.TicketItem where b.ItemName == ticketitem.ItemName && b.TicketId == ticketitem.TicketId && b.Type == ticketitem.Type && b.ItemUnitCost == ticketitem.ItemUnitCost select b).FirstOrDefault();
                        if (ticketitem.ItemUnitCost == itemlist.ItemUnitCost)
                        {
                            itemlist.Type = ticketitem.Type;
                            itemlist.ItemQuantity += ticketitem.ItemQuantity;
                            itemlist.ItemUnitCost = ticketitem.ItemUnitCost;
                            itemlist.ItemTotalCost = itemlist.ItemQuantity * itemlist.ItemUnitCost;
                            itemlist.ItemDescription = ticketitem.ItemDescription;
                            itemlist.ItemAddredBy = true;
                            _context.Entry(itemlist).State = EntityState.Modified;
                            await _context.SaveChangesAsync();
                            var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                            var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                            result.NetAmount = Convert.ToDouble(itemsCost);
                            _context.Entry(result).State = EntityState.Modified;
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result, Message = "success", MessageDescription = "Updated successfully" });
                        }
                        else
                        {
                            ticketitem.IsPriseRevised = true;
                            ticketitem.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                            _context.TicketItem.Add(ticketitem);
                            _context.SaveChanges();

                            var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                            var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                            result.NetAmount = Convert.ToDouble(itemsCost);
                            _context.Entry(result).State = EntityState.Modified;
                            await _context.SaveChangesAsync();
                            return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                        }
                    }
                    else
                    {
                        ticketitem.IsPriseRevised = false;
                        ticketitem.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                        _context.TicketItem.Add(ticketitem);
                        _context.SaveChanges();
                        var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                        var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                        result.NetAmount = Convert.ToDouble(itemsCost);
                        _context.Entry(result).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                    }
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
        [HttpPost("[action]/{token}")]
        public ActionResult OnEngProdSubmit(TicketItem ticketitem, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var itemlist = (from b in _context.TicketItem where b.ItemName == ticketitem.ItemName && b.TicketId == ticketitem.TicketId && b.Type == ticketitem.Type select b).FirstOrDefault();
                    if (itemlist != null)
                    {
                        var itemlist2 = (from b in _context.TicketItem where b.ItemName == ticketitem.ItemName && b.TicketId == ticketitem.TicketId && b.Type == ticketitem.Type && b.ItemUnitCost == ticketitem.ItemUnitCost select b).FirstOrDefault();
                        if (ticketitem.ItemUnitCost == itemlist.ItemUnitCost)
                        {
                            itemlist.Type = ticketitem.Type;
                            itemlist.ItemQuantity += ticketitem.ItemQuantity;
                            itemlist.ItemUnitCost = ticketitem.ItemUnitCost;
                            itemlist.ItemTotalCost = itemlist.ItemQuantity * itemlist.ItemUnitCost;
                            itemlist.ItemDescription = ticketitem.ItemDescription;
                            itemlist.ItemAddredBy = true;
                            _context.Entry(itemlist).State = EntityState.Modified;
                            _context.SaveChanges();
                            var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                            var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                            result.NetAmount = Convert.ToDouble(itemsCost);
                            _context.Entry(result).State = EntityState.Modified;
                            _context.SaveChanges();

                            return StatusCode(201, new { result, Message = "success", MessageDescription = "Updated successfully" });
                        }
                        else
                        {
                            ticketitem.IsPriseRevised = true;
                            _context.TicketItem.Add(ticketitem);
                            _context.SaveChanges();
                            var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                            var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                            result.NetAmount = Convert.ToDouble(itemsCost);
                            _context.Entry(result).State = EntityState.Modified;
                            _context.SaveChanges();

                            return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                        }
                    }
                    else
                    {
                        ticketitem.IsPriseRevised = false;
                        _context.TicketItem.Add(ticketitem);
                        _context.SaveChanges();

                        var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                        var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                        result.NetAmount = Convert.ToDouble(itemsCost);
                        _context.Entry(result).State = EntityState.Modified;
                        _context.SaveChanges();

                        return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                    }
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
        [HttpDelete("[action]/{token}/{Id}")]
        public ActionResult Deleteticketitem(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var ticketitem = _context.TicketItem.Find(Id);
                    if (ticketitem == null)
                    {
                        return StatusCode(206, new { result="", Message = "success", MessageDescription = "Removed item not found or already removed" });
                    }
                    _context.TicketItem.Remove(ticketitem);
                    _context.SaveChanges();
                    var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                    var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                    result.NetAmount = Convert.ToDouble(itemsCost);
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "Removed successfully" });
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
        [HttpPost("[action]/{token}/{isfrom}")]
        public ActionResult AddMaintanceItemInItemList(Guid token, TicketItem _ticketitem, string isfrom)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var gp = (from c in _context.GenicProfile select c).FirstOrDefault();
                    if (gp.WarrantyValidation)
                    {
                        if (_ticketitem.InWarranty)
                        {
                            if (_ticketitem.UniqId.Length > 0)
                            {
                                var IsDuplicate = (from c in _context.TicketItem where c.UniqId == _ticketitem.UniqId && c.ItemName == _ticketitem.ItemName select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
                                }
                            }
                        }
                    }
                    if (isfrom == "TicketItem")
                    {
                        var result = (from c in _context.TicketItem where c.Id == _ticketitem.Id select c).FirstOrDefault();
                        TicketItem ticketitem = new TicketItem()
                        {
                            TicketId = _ticketitem.TicketId,
                            Type = result.Type,
                            ItemName = result.ItemName,
                            ItemDescription = result.ItemDescription,
                            ItemQuantity = result.ItemQuantity,
                            ItemUnitCost = _ticketitem.ItemUnitCost,
                            ItemTotalCost = result.ItemQuantity * _ticketitem.ItemUnitCost,
                            IsPriseRevised = result.IsPriseRevised,
                            ItemAddredBy = result.ItemAddredBy,
                            ItemAddredById = _ticketitem.ItemAddredById,
                            ItemAddredByName = _ticketitem.ItemAddredByName,
                            ItemBatch = result.ItemBatch,
                            BatchQty = result.BatchQty,
                            UniqId = _ticketitem.UniqId,
                            InWarranty = result.InWarranty,
                            WarrantyDays = result.WarrantyDays,
                            InstallationDate = result.InstallationDate,
                            CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone),
                            IsMaintance = true,
                            MaintanceRemarks = _ticketitem.MaintanceRemarks
                        };
                        _context.TicketItem.Add(ticketitem);
                        _context.SaveChanges();

                        var itemsCost = (from tt in _context.TicketItem where tt.TicketId == _ticketitem.TicketId select tt.ItemTotalCost).Sum();
                        var result0 = (from t in _context.Ticket where t.Id == _ticketitem.TicketId select t).FirstOrDefault();
                        result0.NetAmount = Convert.ToDouble(itemsCost);
                        _context.Entry(result0).State = EntityState.Modified;
                        _context.SaveChanges();

                        return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                    }
                    else
                    {
                        var UserDetails = (from u in _context.Login where u.Token == token select u).FirstOrDefault();
                        var result = (from w in _context.ProductWarranty where w.Id == _ticketitem.Id
                                      select new
                                      {
                                            data = (from p1 in _context.Product where p1.Id == w.ProductId select p1.ProductName).FirstOrDefault() == null ?
                                                   (from p1 in _context.Service where p1.Id == w.ProductId select new { ProductName = p1.ServiceName, Type = "Service", Description = p1.ServiceDescription }).FirstOrDefault() :
                                                   (from p1 in _context.Product where p1.Id == w.ProductId select new { ProductName = p1.ProductName, Type = "Product", Description = p1.Description }).FirstOrDefault(),
                                          w.InstallationDate
                                      }).FirstOrDefault();
                        TicketItem ticketitem = new TicketItem()
                        {
                            TicketId = _ticketitem.TicketId,
                            Type = result.data.Type,
                            ItemName = result.data.ProductName,
                            ItemDescription = result.data.Description,
                            ItemQuantity = 1,
                            ItemUnitCost = _ticketitem.ItemUnitCost,
                            ItemTotalCost = 1 * _ticketitem.ItemUnitCost,
                            IsPriseRevised = false,
                            ItemAddredBy = false,
                            ItemAddredById = UserDetails.Id,
                            ItemAddredByName = UserDetails.FullName,
                            ItemBatch = "",
                            BatchQty = "",
                            UniqId = _ticketitem.UniqId,
                            InWarranty = true,
                            WarrantyDays = _ticketitem.WarrantyDays,
                            InstallationDate = result.InstallationDate,
                            CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone),
                            IsMaintance = true,
                            MaintanceRemarks = _ticketitem.MaintanceRemarks
                        };
                        _context.TicketItem.Add(ticketitem);
                        _context.SaveChanges();

                        var itemsCost = (from tt in _context.TicketItem where tt.TicketId == _ticketitem.TicketId select tt.ItemTotalCost).Sum();
                        var result0 = (from t in _context.Ticket where t.Id == _ticketitem.TicketId select t).FirstOrDefault();
                        result0.NetAmount = Convert.ToDouble(itemsCost);
                        _context.Entry(result0).State = EntityState.Modified;
                        _context.SaveChanges();

                        return StatusCode(201, new { result, Message = "success", MessageDescription = "Added successfully" });
                    }
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
        private bool TicketItemExists(int id)
        {
            return _context.TicketItem.Any(e => e.Id == id);
        }
        /// Ticket Line Item Methods End
        ///***************************************************************************///



        ///***************************************************************************///
        /// Ticket Attachment Methods Begin
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<TicketAttachment>>> GetTicketAttachment(Guid id)
        {
            return await (from c in _context.TicketAttachment where c.TicketId == id select c).ToListAsync();
        }
        /// Ticket Attachment Methods End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Ticket Wise Issue Type Methods BeginPutTicketRecurringHelper
        [HttpPost("[action]/{Id}")]
        public ActionResult SetTicketWiseIssueType(Guid Id, ICollection<TicketWiseIssueType> ticketwiseissuetype)
        {
            try
            {
                var oldIssueTypeList = (from i in _context.TicketWiseIssueType where i.TicketId == Id select i).ToList();
                if (oldIssueTypeList.Count > 0)
                {
                    foreach (var ii in oldIssueTypeList)
                    {
                        _context.Remove(ii);
                        _context.SaveChanges();
                    }
                }
                foreach (var item in ticketwiseissuetype)
                {
                    item.Id = 0;
                    _context.TicketWiseIssueType.Add(item);
                    _context.SaveChanges();
                }
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        /// Ticket Wise Issue Type
        ///***************************************************************************///


        ///***************************************************************************///
        /// TicketRecurringHelper Methods Begin        
        [HttpPut("[action]/{token}/{skippublickholiday}")]
        public ActionResult PutTicketRecurringHelper(TicketRecurringHelper ticketrecurringhelper, Guid token, bool skippublickholiday)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var previouslist = (from l in _context.TicketRecurringHelperDate where l.IsFor == ticketrecurringhelper.IsFor select l).ToList();
                    foreach (var item in previouslist)
                    {
                        _context.Remove(item);
                    }
                    _context.SaveChanges();
                    int ordercount = 0;
                    if (skippublickholiday)
                    {
                        #region Days
                        if (ticketrecurringhelper.Type == 0)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                {
                                    Id = 0,
                                    IsFor = ticketrecurringhelper.IsFor,
                                    Date = ticketrecurringhelper.RecurringStartDate.AddDays(addday)
                                };
                                _context.TicketRecurringHelperDate.Add(trhdate);
                                addday++;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region week
                        if (ticketrecurringhelper.Type == 1)
                        {
                            int totalloop = 7 * ticketrecurringhelper.RecurringVisitFrequency; /// How many week for loog
                            if (ticketrecurringhelper.SundayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "sunday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.MondayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "monday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.TuesdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "tuesday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.WednesdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "wednesday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.ThursdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "thursday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.FridayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "friday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.SaturdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "saturday")
                                    {
                                        ordercount++;
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                        {
                                            Id = 0,
                                            IsFor = ticketrecurringhelper.IsFor,
                                            Date = ticketrecurringhelper.RecurringStartDate.AddDays(k)
                                        };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Month
                        if (ticketrecurringhelper.Type == 2)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m++) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow;
                                if (ticketrecurringhelper.Date1)
                                {
                                    DateTime date = new DateTime(year, month, 1);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date2)
                                {
                                    DateTime date = new DateTime(year, month, 2);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date3)
                                {
                                    DateTime date = new DateTime(year, month, 3);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date4)
                                {
                                    DateTime date = new DateTime(year, month, 4);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date5)
                                {
                                    DateTime date = new DateTime(year, month, 5);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date6)
                                {
                                    DateTime date = new DateTime(year, month, 6);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date7)
                                {
                                    DateTime date = new DateTime(year, month, 7);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date8)
                                {
                                    DateTime date = new DateTime(year, month, 8);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date9)
                                {
                                    DateTime date = new DateTime(year, month, 9);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date10)
                                {
                                    DateTime date = new DateTime(year, month, 10);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }

                                if (ticketrecurringhelper.Date11)
                                {
                                    DateTime date = new DateTime(year, month, 11);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date12)
                                {
                                    DateTime date = new DateTime(year, month, 12);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date13)
                                {
                                    DateTime date = new DateTime(year, month, 13);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date14)
                                {
                                    DateTime date = new DateTime(year, month, 14);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date15)
                                {
                                    DateTime date = new DateTime(year, month, 15);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date16)
                                {
                                    DateTime date = new DateTime(year, month, 16);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date17)
                                {
                                    DateTime date = new DateTime(year, month, 17);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date18)
                                {
                                    DateTime date = new DateTime(year, month, 18);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date19)
                                {
                                    DateTime date = new DateTime(year, month, 19);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date20)
                                {
                                    DateTime date = new DateTime(year, month, 20);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }

                                if (ticketrecurringhelper.Date21)
                                {
                                    DateTime date = new DateTime(year, month, 21);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date22)
                                {
                                    DateTime date = new DateTime(year, month, 22);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date23)
                                {
                                    DateTime date = new DateTime(year, month, 23);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date24)
                                {
                                    DateTime date = new DateTime(year, month, 24);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date25)
                                {
                                    DateTime date = new DateTime(year, month, 25);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date26)
                                {
                                    DateTime date = new DateTime(year, month, 26);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date27)
                                {
                                    DateTime date = new DateTime(year, month, 27);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                if (ticketrecurringhelper.Date28)
                                {
                                    DateTime date = new DateTime(year, month, 28);
                                    TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                    if (date > todaydate)
                                    {
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                }
                                var lastDayOfMonth = DateTime.DaysInMonth(year, month);
                                if (ticketrecurringhelper.Date29)
                                {
                                    if (lastDayOfMonth == 29)
                                    {
                                        DateTime date = new DateTime(year, month, 29);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                if (ticketrecurringhelper.Date30)
                                {
                                    if (lastDayOfMonth == 30)
                                    {
                                        DateTime date = new DateTime(year, month, 30);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                if (ticketrecurringhelper.Date31)
                                {
                                    if (lastDayOfMonth == 31)
                                    {
                                        DateTime date = new DateTime(year, month, 31);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Quaterly
                        if (ticketrecurringhelper.Type == 3)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                {
                                    Id = 0,
                                    IsFor = ticketrecurringhelper.IsFor,
                                    Date = ticketrecurringhelper.RecurringStartDate.AddMonths(addday)
                                };
                                _context.TicketRecurringHelperDate.Add(trhdate);
                                addday += 3;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Halfyearly
                        if (ticketrecurringhelper.Type == 4)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                                {
                                    Id = 0,
                                    IsFor = ticketrecurringhelper.IsFor,
                                    Date = ticketrecurringhelper.RecurringStartDate.AddMonths(addday)
                                };
                                _context.TicketRecurringHelperDate.Add(trhdate);
                                addday += 6;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Custom Months
                        if (ticketrecurringhelper.Type == 5)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m++) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow;
                                #region First Week of the Month
                                if (ticketrecurringhelper.Date1)
                                {
                                    int dayOfWeek = 1;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date2)
                                {
                                    int dayOfWeek = 2;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date3)
                                {
                                    int dayOfWeek = 3;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date4)
                                {
                                    int dayOfWeek = 4;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                _context.SaveChanges();
                            }
                        }
                        #endregion
                        #region Custom Alternet Months
                        if (ticketrecurringhelper.Type == 6)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m += 2) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow;
                                #region First Week of the Month
                                if (ticketrecurringhelper.Date1)
                                {
                                    int dayOfWeek = 1;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date2)
                                {
                                    int dayOfWeek = 2;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date3)
                                {
                                    int dayOfWeek = 3;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        _context.TicketRecurringHelperDate.Add(trhdate);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date4)
                                {
                                    int dayOfWeek = 4;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                _context.SaveChanges();
                            }
                        }
                        #endregion
                        #region Bi Custom Months
                        if (ticketrecurringhelper.Type == 7)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            ticketrecurringhelper.RecurringVisitFrequency = ticketrecurringhelper.RecurringVisitFrequency * 2;
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m += 2) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow;
                                #region First Week of the Month
                                if (ticketrecurringhelper.Date1)
                                {
                                    int dayOfWeek = 1;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date2)
                                {
                                    int dayOfWeek = 2;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date3)
                                {
                                    int dayOfWeek = 3;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date4)
                                {
                                    int dayOfWeek = 4;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                _context.SaveChanges();
                            }
                        }
                        #endregion
                    }
                    else
                    {
                        #region Days
                        if (ticketrecurringhelper.Type == 0)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                DateTime date = ticketrecurringhelper.RecurringStartDate.AddDays(addday);
                                AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                addday++;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region week
                        if (ticketrecurringhelper.Type == 1)
                        {
                            int totalloop = 7 * ticketrecurringhelper.RecurringVisitFrequency; /// How many week for loog
                            if (ticketrecurringhelper.SundayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "sunday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.MondayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "monday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.TuesdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "tuesday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.WednesdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "wednesday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.ThursdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "thursday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.FridayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "friday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            if (ticketrecurringhelper.SaturdayIsActive)
                            {
                                for (int k = 0; k < totalloop; k++)
                                {
                                    string day = ticketrecurringhelper.RecurringStartDate.AddDays(k).DayOfWeek.ToString();
                                    if (day.ToLower() == "saturday")
                                    {
                                        AddInWeek(ticketrecurringhelper, k);
                                    }
                                }
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Month
                        if (ticketrecurringhelper.Type == 2)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m++) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                if (ticketrecurringhelper.Date1)
                                {
                                    DateTime date = new DateTime(year, month, 1);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date2)
                                {
                                    DateTime date = new DateTime(year, month, 2);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date3)
                                {
                                    DateTime date = new DateTime(year, month, 3);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date4)
                                {
                                    DateTime date = new DateTime(year, month, 4);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date5)
                                {
                                    DateTime date = new DateTime(year, month, 5);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date6)
                                {
                                    DateTime date = new DateTime(year, month, 6);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date7)
                                {
                                    DateTime date = new DateTime(year, month, 7);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date8)
                                {
                                    DateTime date = new DateTime(year, month, 8);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date9)
                                {
                                    DateTime date = new DateTime(year, month, 9);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date10)
                                {
                                    DateTime date = new DateTime(year, month, 10);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }

                                if (ticketrecurringhelper.Date11)
                                {
                                    DateTime date = new DateTime(year, month, 11);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date12)
                                {
                                    DateTime date = new DateTime(year, month, 12);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date13)
                                {
                                    DateTime date = new DateTime(year, month, 13);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date14)
                                {
                                    DateTime date = new DateTime(year, month, 14);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date15)
                                {
                                    DateTime date = new DateTime(year, month, 15);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date16)
                                {
                                    DateTime date = new DateTime(year, month, 16);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date17)
                                {
                                    DateTime date = new DateTime(year, month, 17);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date18)
                                {
                                    DateTime date = new DateTime(year, month, 18);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date19)
                                {
                                    DateTime date = new DateTime(year, month, 19);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date20)
                                {
                                    DateTime date = new DateTime(year, month, 20);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }

                                if (ticketrecurringhelper.Date21)
                                {
                                    DateTime date = new DateTime(year, month, 21);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date22)
                                {
                                    DateTime date = new DateTime(year, month, 22);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date23)
                                {
                                    DateTime date = new DateTime(year, month, 23);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date24)
                                {
                                    DateTime date = new DateTime(year, month, 24);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date25)
                                {
                                    DateTime date = new DateTime(year, month, 25);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date26)
                                {
                                    DateTime date = new DateTime(year, month, 26);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date27)
                                {
                                    DateTime date = new DateTime(year, month, 27);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date28)
                                {
                                    DateTime date = new DateTime(year, month, 28);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                var lastDayOfMonth = DateTime.DaysInMonth(year, month);
                                if (ticketrecurringhelper.Date29)
                                {
                                    if (lastDayOfMonth == 29)
                                    {
                                        DateTime date = new DateTime(year, month, 29);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                if (ticketrecurringhelper.Date30)
                                {
                                    if (lastDayOfMonth == 30)
                                    {
                                        DateTime date = new DateTime(year, month, 30);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                if (ticketrecurringhelper.Date31)
                                {
                                    if (lastDayOfMonth == 31)
                                    {
                                        DateTime date = new DateTime(year, month, 31);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Quaterly
                        if (ticketrecurringhelper.Type == 3)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                DateTime date = ticketrecurringhelper.RecurringStartDate.AddMonths(addday);
                                AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                addday += 3;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Halfyearly
                        if (ticketrecurringhelper.Type == 4)
                        {
                            int addday = 0;
                            for (int k = 1; k <= ticketrecurringhelper.RecurringVisitFrequency; k++)
                            {
                                DateTime date = ticketrecurringhelper.RecurringStartDate.AddMonths(addday);
                                AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                addday += 6;
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        #region Custom Months
                        if (ticketrecurringhelper.Type == 5)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m++) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow.AddDays(-1);
                                #region First Week of the Month
                                if (ticketrecurringhelper.Date1)
                                {
                                    int dayOfWeek = 1;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date2)
                                {
                                    int dayOfWeek = 2;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date3)
                                {
                                    int dayOfWeek = 3;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date4)
                                {
                                    int dayOfWeek = 4;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate { Id = 0, IsFor = ticketrecurringhelper.IsFor, Date = date.Date };
                                        if (date > todaydate)
                                        {
                                            _context.TicketRecurringHelperDate.Add(trhdate);
                                        }
                                    }
                                }
                                #endregion
                                _context.SaveChanges();
                            }
                        }
                        #endregion
                        #region Custom Alternet Months
                        if (ticketrecurringhelper.Type == 6)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m += 2) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                DateTime todaydate = DateTime.UtcNow.AddDays(-1);
                                #region First Week of the Month
                                if (ticketrecurringhelper.Date1)
                                {
                                    int dayOfWeek = 1;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date2)
                                {
                                    int dayOfWeek = 2;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date3)
                                {
                                    int dayOfWeek = 3;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                #endregion
                                #region Second Week of the Month
                                if (ticketrecurringhelper.Date4)
                                {
                                    int dayOfWeek = 4;
                                    if (ticketrecurringhelper.SundayIsActive)
                                    {
                                        int day1 = FindDay(year, month, DayOfWeek.Sunday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day1);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.MondayIsActive)
                                    {
                                        int day2 = FindDay(year, month, DayOfWeek.Monday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day2);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.TuesdayIsActive)
                                    {
                                        int day3 = FindDay(year, month, DayOfWeek.Tuesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day3);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.WednesdayIsActive)
                                    {
                                        int day4 = FindDay(year, month, DayOfWeek.Wednesday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day4);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.ThursdayIsActive)
                                    {
                                        int day5 = FindDay(year, month, DayOfWeek.Thursday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day5);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.FridayIsActive)
                                    {
                                        int day6 = FindDay(year, month, DayOfWeek.Friday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day6);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    if (ticketrecurringhelper.SaturdayIsActive)
                                    {
                                        int day7 = FindDay(year, month, DayOfWeek.Saturday, dayOfWeek);
                                        DateTime date = new DateTime(year, month, day7);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                #endregion
                                _context.SaveChanges();
                            }
                        }
                        #endregion
                        #region Bi Monthly
                        if (ticketrecurringhelper.Type == 7)
                        {
                            int year = 2021;
                            int month = 1;
                            DateTime loopDate = new DateTime();
                            ticketrecurringhelper.RecurringVisitFrequency = ticketrecurringhelper.RecurringVisitFrequency * 2;
                            for (int m = 0; m < ticketrecurringhelper.RecurringVisitFrequency; m += 2) /// How many month for loog
                            {
                                loopDate = ticketrecurringhelper.RecurringStartDate.AddMonths(m);
                                year = loopDate.Year;
                                month = loopDate.Month;
                                if (ticketrecurringhelper.Date1)
                                {
                                    DateTime date = new DateTime(year, month, 1);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date2)
                                {
                                    DateTime date = new DateTime(year, month, 2);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date3)
                                {
                                    DateTime date = new DateTime(year, month, 3);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date4)
                                {
                                    DateTime date = new DateTime(year, month, 4);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date5)
                                {
                                    DateTime date = new DateTime(year, month, 5);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date6)
                                {
                                    DateTime date = new DateTime(year, month, 6);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date7)
                                {
                                    DateTime date = new DateTime(year, month, 7);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date8)
                                {
                                    DateTime date = new DateTime(year, month, 8);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date9)
                                {
                                    DateTime date = new DateTime(year, month, 9);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date10)
                                {
                                    DateTime date = new DateTime(year, month, 10);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }

                                if (ticketrecurringhelper.Date11)
                                {
                                    DateTime date = new DateTime(year, month, 11);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date12)
                                {
                                    DateTime date = new DateTime(year, month, 12);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date13)
                                {
                                    DateTime date = new DateTime(year, month, 13);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date14)
                                {
                                    DateTime date = new DateTime(year, month, 14);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date15)
                                {
                                    DateTime date = new DateTime(year, month, 15);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date16)
                                {
                                    DateTime date = new DateTime(year, month, 16);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date17)
                                {
                                    DateTime date = new DateTime(year, month, 17);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date18)
                                {
                                    DateTime date = new DateTime(year, month, 18);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date19)
                                {
                                    DateTime date = new DateTime(year, month, 19);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date20)
                                {
                                    DateTime date = new DateTime(year, month, 20);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }

                                if (ticketrecurringhelper.Date21)
                                {
                                    DateTime date = new DateTime(year, month, 21);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date22)
                                {
                                    DateTime date = new DateTime(year, month, 22);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date23)
                                {
                                    DateTime date = new DateTime(year, month, 23);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date24)
                                {
                                    DateTime date = new DateTime(year, month, 24);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date25)
                                {
                                    DateTime date = new DateTime(year, month, 25);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date26)
                                {
                                    DateTime date = new DateTime(year, month, 26);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date27)
                                {
                                    DateTime date = new DateTime(year, month, 27);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                if (ticketrecurringhelper.Date28)
                                {
                                    DateTime date = new DateTime(year, month, 28);
                                    AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                }
                                var lastDayOfMonth = DateTime.DaysInMonth(year, month);
                                if (ticketrecurringhelper.Date29)
                                {
                                    if (lastDayOfMonth == 29)
                                    {
                                        DateTime date = new DateTime(year, month, 29);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                if (ticketrecurringhelper.Date30)
                                {
                                    if (lastDayOfMonth == 30)
                                    {
                                        DateTime date = new DateTime(year, month, 30);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                                if (ticketrecurringhelper.Date31)
                                {
                                    if (lastDayOfMonth == 31)
                                    {
                                        DateTime date = new DateTime(year, month, 31);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                    else
                                    {
                                        DateTime date = new DateTime(year, month, lastDayOfMonth);
                                        AddInCustomeWeek(date, ticketrecurringhelper.IsFor);
                                    }
                                }
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                    }
                    var result = (from g in _context.GenicProfile
                                  select new
                                  {
                                      Count = _context.TicketRecurringHelperDate.Where(w => w.IsFor == ticketrecurringhelper.IsFor).Count(),
                                      FirstVisit = (from d in _context.TicketRecurringHelperDate where d.IsFor == ticketrecurringhelper.IsFor select d.Date).Min().ToString("yyyy-MM-ddT15:30:00"),
                                      LastVisit = (from d in _context.TicketRecurringHelperDate where d.IsFor == ticketrecurringhelper.IsFor select d.Date).Max().ToString("yyyy-MM-ddT16:30:00"),
                                      List = (from d in _context.TicketRecurringHelperDate where d.IsFor == ticketrecurringhelper.IsFor orderby d.Date select d.Date).ToList()
                                  }).FirstOrDefault();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "success" });
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
        public void AddInWeek(TicketRecurringHelper ticketrecurringhelper, int k)
        {
            try
            {
                bool loop = true;
                while (loop)
                {
                    DateTime _day = ticketrecurringhelper.RecurringStartDate.AddDays(k);
                    string day = _day.DayOfWeek.ToString();
                    bool Ispublicholyday = (from d in _context.GenicProfileCalendar where d.Date.Year == _day.Year && d.Date.Month == _day.Month && d.Date.Day == _day.Day && d.IsWorking == false select d.Id).Any();

                    if (day.ToLower() != "sunday")
                    {
                        if (!Ispublicholyday)
                        {
                            TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                            {
                                Id = 0,
                                IsFor = ticketrecurringhelper.IsFor,
                                Date = _day
                            };
                            _context.TicketRecurringHelperDate.Add(trhdate);
                            loop = false;
                        }
                    }
                    k++;
                }
            }
            catch { }
        }
        public void AddInCustomeWeek(DateTime date, int IsFor)
        {
            try
            {
                bool loop = true;
                int k = 0;
                DateTime todaydate = DateTime.UtcNow.AddDays(-1);
                while (loop)
                {
                    DateTime _day = date.AddDays(k);
                    string day = _day.DayOfWeek.ToString();
                    bool Ispublicholyday = (from d in _context.GenicProfileCalendar where d.Date.Year == _day.Year && d.Date.Month == _day.Month && d.Date.Day == _day.Day && d.IsWorking == false select d.Id).Any();

                    if (day.ToLower() != "sunday")
                    {
                        if (!Ispublicholyday)
                        {
                            TicketRecurringHelperDate trhdate = new TicketRecurringHelperDate
                            {
                                Id = 0,
                                IsFor = IsFor,
                                Date = _day.Date
                            };
                            if (date > todaydate)
                            {
                                _context.TicketRecurringHelperDate.Add(trhdate);
                            }
                            loop = false;
                        }
                    }
                    k++;
                }
            }
            catch { }
        }
        public static int FindDay(int year, int month, DayOfWeek Day, int occurance)
        {
            try
            {
                if (occurance <= 0 || occurance > 5)
                    throw new Exception("Occurance is invalid");
                DateTime firstDayOfMonth = new DateTime(year, month, 1);
                var daysneeded = (int)Day - (int)firstDayOfMonth.DayOfWeek;
                if (daysneeded < 0) daysneeded = daysneeded + 7;
                var resultedDay = (daysneeded + 1) + (7 * (occurance - 1));
                if (resultedDay > (firstDayOfMonth.AddMonths(1) - firstDayOfMonth).Days)
                    throw new Exception(String.Format("No {0} occurance(s) of {1} in the required month", occurance, Day.ToString()));
                return resultedDay;
            }
            catch { return 0; }
        }
        /// TicketRecurringHelper Methods End
        ///***************************************************************************///

        ///***************************************************************************///
        /// Engineer Tickets Methods Begin
        [HttpGet("[action]/{TicketId}/{EngineerId}")]
        public ActionResult checkForemanIsWorkingOrNot(Guid TicketId, Guid EngineerId)
        {
            try
            {
                var engineer = (from c in _context.Engineer where c.Id == EngineerId && c.Working == true select c).FirstOrDefault();
                if (engineer != null)
                {
                    var workingengineers = (from t in _context.TicketTimer where t.TicketId == TicketId && t.EngineerId != EngineerId && t.Status == 1 select t).ToList();
                    if (workingengineers.Count > 0)
                    {
                        string strpre = string.Empty;
                        foreach (var item in workingengineers)
                        {
                            strpre += (from t in _context.Engineer where t.Id == item.EngineerId select t.EngineerName).FirstOrDefault() + ", ";
                        }
                        string msg = "Engineer " + strpre.Trim() + " haven't checked out yet. Do you want to Force Close the ticket?";

                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = "No more engineers are working!" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid request!" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Start ticket Timer
        [HttpGet("[action]/{id}/{id2}/{Validate}")]
        public async Task<ActionResult> startTicketTimer(Guid id, Guid id2, bool Validate)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var runningTimer = (from t in _context.TicketTimer where t.TicketId == id && t.EngineerId == id2 && t.Status == 1 select t).ToList();
                var ticket = (from c in _context.Ticket where c.Id == id select c).FirstOrDefault();
                if (Validate)
                {
                    var previousRunningTicket = (from t in _context.TicketTimer where t.EngineerId == id2 && t.Status == 1 select t).ToList();
                    if (previousRunningTicket.Count > 0)
                    {
                        string strpre = string.Empty;
                        foreach (var item in previousRunningTicket)
                        {
                            strpre += (from t in _context.Ticket where t.Id == item.TicketId select t.TicketId).FirstOrDefault() + ", ";
                        }
                        string newTicketId = (from t in _context.Ticket where t.Id == id select t.TicketId).FirstOrDefault();
                        string msg = "Already assigned " + strpre + " Inprogress for you, do you want to start " + newTicketId + " simultaneously?";
                        return StatusCode(208, new { result = "", Message = "warning", MessageDescription = msg });
                    }
                }
                if (runningTimer.Count > 0)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Time is not already active" });
                }
                else
                {
                    TicketTimer ticketTimer = new TicketTimer();
                    ticketTimer.TicketId = id;
                    ticketTimer.EngineerId = id2;
                    ticketTimer.Status = 1;
                    //1 Status= Open ,2 status =close

                    ticketTimer.StartTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                    ticketTimer.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    ticketTimer.Remarks = "";
                    _context.TicketTimer.Add(ticketTimer);
                    await _context.SaveChangesAsync();
                    if (ticket != null)
                    {
                        var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == ticket.Id select tt).ToList();
                        foreach (var item in ticketteam)
                        {
                            item.IsFree = false;
                            _context.Entry(item).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                        ticket.Status = "INPROGRESS";
                        _context.Entry(ticket).State = EntityState.Modified;
                        _context.SaveChanges();
                    }
                    return StatusCode(202, new { result = ticketTimer.ID, Message = "success", MessageDescription = "Ticket Start Now.." });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.ToString() });
            }
        }
        //Stop ticket Timer
        [HttpPut("[action]/{EngineerId}/{TicketId}")]
        public ActionResult stopTicketTimer(Guid EngineerId, Guid TicketId)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var result = (from c in _context.TicketTimer where c.EngineerId == EngineerId && c.TicketId == TicketId && c.Status == 1 select c).FirstOrDefault();
                if (result == null)
                {
                    return NotFound();
                }
                else
                {
                    result.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    result.Status = 2;//1 Status= Open ,2 status =close
                    result.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                }
                return StatusCode(201, result.ID);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        //Start ticket Timer
        [HttpPost("[action]/{TicketId}/{EngineerId}/{Validate}")]
        public async Task<ActionResult> startTicketTimerByforeman(Guid TicketId, Guid EngineerId, bool Validate)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var runningTimer = (from t in _context.TicketTimer where t.TicketId == TicketId && t.EngineerId == EngineerId && t.Status == 1 select t).ToList();
                //var ticket = (from c in _context.Ticket where c.Id == id select c).FirstOrDefault();
                if (Validate)
                {
                    var previousRunningTicket = (from t in _context.TicketTimer where t.EngineerId == EngineerId && t.Status == 1 select t).ToList();
                    if (previousRunningTicket.Count > 0)
                    {
                        string strpre = string.Empty;
                        foreach (var item in previousRunningTicket)
                        {
                            strpre += (from t in _context.Ticket where t.Id == item.TicketId select t.TicketId).FirstOrDefault() + ", ";
                        }
                        string newTicketId = (from t in _context.Ticket where t.Id == TicketId select t.TicketId).FirstOrDefault();
                        string msg = "Already assigned " + strpre + " Inprogress for you, do you want to start " + newTicketId + " simultaneously?";
                        return StatusCode(208, msg);
                    }
                }
                if (runningTimer.Count > 0)
                {
                    return StatusCode(500);
                }
                else
                {
                    TicketTimer ticketTimer = new TicketTimer();
                    ticketTimer.TicketId = TicketId;
                    ticketTimer.EngineerId = EngineerId;
                    ticketTimer.Status = 1;
                    //1 Status= Open ,2 status =close

                    ticketTimer.StartTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                    ticketTimer.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

                    _context.TicketTimer.Add(ticketTimer);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, ticketTimer.ID);
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{TicketId}/{EngineerId}")]
        public ActionResult<TicketTimer> getTicketTimeDuration(Guid TicketId, Guid EngineerId)
        {
            var result = _context.TicketTimer.Where(a => a.TicketId == TicketId && a.EngineerId == EngineerId && a.EndTime == null).FirstOrDefault();
            if (result == null)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Active timer not found" });
            }
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        
        [HttpGet("[action]/{token}/{TicketId}")]
        public async Task<ActionResult> getTicketCloserLog(Guid token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.CloserDetails where c.TicketId == TicketId && c.IsReady == true orderby c.StartDate ascending select c).ToListAsync();
                    foreach (var item in result)
                    {
                        item.StartDate = Convert.ToDateTime(item.StartDate);
                        item.EndDate = Convert.ToDateTime(item.EndDate);
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
        [HttpPost("[action]/{token}")]
        [Obsolete]
        public ActionResult<CloserAttachment> PostCloserData(CloserAttachment CloserAttachment, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var isCloserExist = _context.CloserDetails.Any(x => x.CloserID == CloserAttachment.CloserID);
                    if (!isCloserExist) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid request" }); }
                    var CloserAttachmentCount = _context.CloserAttachment.Count(x => x.CloserID == CloserAttachment.CloserID);
                    if (CloserAttachmentCount > 0) { 
                        var isblankExist = _context.CloserAttachment.Any(x => x.CloserID == CloserAttachment.CloserID && (string.IsNullOrEmpty(x.AttachmentFile) == true || string.IsNullOrEmpty(x.AttachmentExtenstion) == true || string.IsNullOrEmpty(x.Remarks) == true));
                        if (isblankExist)
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please fill first blank attachment form or comment" });
                        }
                    }
                    CloserAttachment.CloserAttachmentAduioList = null;
                    CloserAttachment.CAID = 0;
                    CloserAttachment.AttachmentExtenstion = "";
                    CloserAttachment.AttachmentFile = "";
                    CloserAttachment.AttachmentSize = 0;
                    CloserAttachment.Remarks = "";
                    _context.CloserAttachment.Add(CloserAttachment);
                    _context.SaveChanges();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Closer attachment added successfully." });
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
        public ActionResult<CloserAttachment> PutCloserData(CloserAttachment CloserAttachment, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var previousDetails = (from a in _context.CloserAttachment where a.CAID == CloserAttachment.CAID select a).FirstOrDefault();
                    if (previousDetails == null) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid request" }); }
                    previousDetails.Remarks = CloserAttachment.Remarks;
                    _context.Entry(previousDetails).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Closer attachment update successfully." });
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
        [HttpGet("[action]/{CustomerId}/{SearchStr}")]
        public ActionResult<IEnumerable<Product>> GetProducts(Guid CustomerId, string SearchStr)
        {
            if (SearchStr.ToLower() == "all")
            {
                var result = (from p in _context.Product
                              join ti in _context.TicketItem on p.ProductName equals ti.ItemName
                              join t in _context.Ticket on ti.TicketId equals t.Id
                              where p.Status == true && t.CustomerId == CustomerId && (t.Status == "CLOSED" || t.Status == "HOLD")
                              select p).Distinct().ToList();
                return result;
            }
            else
            {
                var result = (from p in _context.Product
                              join ti in _context.TicketItem on p.ProductName equals ti.ItemName
                              join t in _context.Ticket on ti.TicketId equals t.Id
                              where p.Status == true && t.CustomerId == CustomerId && (t.Status == "CLOSED" || t.Status == "HOLD")
                              where ti.ItemName.Contains(SearchStr) || ti.UniqId.Contains(SearchStr)
                              select p).Distinct().ToList();
                return result;
            }
        }
        [HttpPost("[action]/{TicketId}")]
        public ActionResult onTicketCancelButtonClick(List<TicketTeam> obj, Guid TicketId)
        {
            try
            {
                var oldTeam = (from o in _context.TicketTeam where o.TicketId == TicketId select o).ToList();
                if (oldTeam != null)
                {
                    try
                    {
                        foreach (var t in oldTeam)
                        {
                            _context.TicketTeam.Remove(t);
                        }
                        _context.SaveChanges();
                    }
                    catch (Exception ex) { }
                }
                if (obj != null)
                {
                    try
                    {
                        foreach (var n in obj)
                        {
                            TicketTeam oModel = new TicketTeam();
                            oModel.TicketId = TicketId;
                            oModel.EngineerId = n.EngineerId;
                            oModel.EngineerName = n.EngineerName;
                            oModel.EngineerLogo = n.EngineerLogo;
                            oModel.AppointmentStartTime = n.AppointmentStartTime;
                            oModel.AppointmentEndTime = n.AppointmentEndTime;
                            oModel.TicketAssignDate = n.TicketAssignDate;

                            _context.TicketTeam.Add(oModel);
                            _context.SaveChanges();
                        }
                    }
                    catch (Exception ex) { }
                }
                return StatusCode(201, "Success!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }


        #region User wise Ticket List
        [HttpGet("[action]/{token}/{type}")]
        public ActionResult GetTickets(Guid token, int type)
        {
            try
            {
                var UserDetails = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserDetails != null)
                {
                    var result = new Object();
                    result = new List<string>();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    DateTime dateStart;
                    dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    #region Admin
                    if (UserDetails.Type == "Admin" || UserDetails.Type == "SubAdmin")
                    {
                        switch (type)
                        {
                            case 1:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 2:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                          (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 3:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                           c.OneOffAppointmentDate != null &&
                                          (c.OneOffAppointmentDate.Value.Year == dateStart.Year && c.OneOffAppointmentDate.Value.Month == dateStart.Month && c.OneOffAppointmentDate.Value.Day == dateStart.Day) &&
                                          c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 4:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                           c.TicketClosedDate != null &&
                                          (c.TicketClosedDate.Value.Year == dateStart.Year && c.TicketClosedDate.Value.Month == dateStart.Month && c.TicketClosedDate.Value.Day == dateStart.Day) &&
                                          c.Status == "CLOSED"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 5:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                           c.Status == "OVERDUE"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 6:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                          c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            default:
                                result = (from c in _context.Ticket
                                          where UserDetails.Type == "Admin" ? c.IsReady == true :
                                                 UserDetails.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserDetails.SMTPId : c.SMTPId == UserDetails.SMTPId &&
                                          (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                        }
                    }
                    #endregion
                    #region Customer
                    if (UserDetails.Type == "Customer")
                    {
                        switch (type)
                        {
                            case 1:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 2:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "UNSCHEDULED")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 3:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                          (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                          c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                          c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 4:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id && c.TicketClosedDate != null &&
                                          (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                          c.TicketClosedDate.Value.Month == dateStart.Month &&
                                          c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 5:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "OVERDUE"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 6:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            default:
                                result = (from c in _context.Ticket
                                          where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                        }
                    }
                    #endregion
                    #region Engineer
                    if (UserDetails.Type == "Engineer")
                    {
                        switch (type)
                        {
                            case 1:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "HOLD")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 2:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketConvertedFrom,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 3:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                          (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                          c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                          c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 4:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.TicketClosedDate != null &&
                                          (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                          c.TicketClosedDate.Value.Month == dateStart.Month &&
                                          c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 5:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "OVERDUE"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 6:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "UPCOMING"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 7:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "HOLD"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            case 8:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "CLOSED"
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                            default:
                                result = (from c in _context.Ticket
                                          join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                          where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                          (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                          select new
                                          {
                                              c.Id,
                                              c.TicketId,
                                              c.CreatedUtcDate,
                                              c.OneOffAppointmentDate,
                                              c.CustomerName,
                                              c.CustomerCompanyName,
                                              c.CustomerAddress,
                                              c.Status,
                                              c.Reallocate,
                                              c.Rescheduled,
                                              c.OneOffScheduled,
                                              c.TicketType,
                                              c.InvoiceNo,
                                              c.InvoiceId,
                                              c.QuoteId,
                                              c.AppointmentStart,
                                              c.AppointmentEnd,
                                              c.OneOffStartTime,
                                              c.OneOffEndTime,
                                              c.Title,
                                              c.TicketConvertedFrom,
                                              c.TicketConvertedID,
                                              c.Description,
                                              TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                              c.ModifiedUtcDate,
                                              c.Priority,
                                              c.TicketClosedDate,
                                              OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                              c.SMTPId,
                                              c.TicketWiseIssueType,
                                              DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                                              c.Rating,
                                              c.RatingFeedback
                                          }).OrderByDescending(c => c.CreatedUtcDate).ToList();
                                break;
                        }
                    }
                    #endregion
                    if (result == null) { result = new List<string>(); }
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
        [HttpGet("[action]/{token}/{EngineerId}")]
        public ActionResult GetEngineerTickets(Guid token, Guid EngineerId)
        {
            try
            {
                bool UserDetails = (from l in _context.Login where l.Token == token && l.Type == "Admin" select l).Any();
                if (UserDetails)
                {
                    var result = new Object();
                    result = new List<string>();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    result = (from c in _context.Ticket
                              join tt in _context.TicketTeam on c.Id equals tt.TicketId
                              where c.IsReady == true && tt.EngineerId == EngineerId &&
                              (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "HOLD")
                              orderby c.TicketId descending
                              select new
                              {
                                  c.Id,
                                  c.TicketId,
                                  c.CreatedUtcDate,
                                  c.OneOffAppointmentDate,
                                  c.CustomerName,
                                  c.CustomerCompanyName,
                                  c.CustomerAddress,
                                  c.Status,
                                  c.Reallocate,
                                  c.Rescheduled,
                                  c.OneOffScheduled,
                                  c.TicketType,
                                  c.InvoiceNo,
                                  c.InvoiceId,
                                  c.QuoteId,
                                  c.AppointmentStart,
                                  c.AppointmentEnd,
                                  c.OneOffStartTime,
                                  c.OneOffEndTime,
                                  c.Title,
                                  c.TicketConvertedFrom,
                                  c.TicketConvertedID,
                                  c.Description,
                                  TicketTeams = (from e in _context.Engineer join tt in _context.TicketTeam on e.Id equals tt.EngineerId where tt.TicketId == c.Id select new { tt.Id, tt.TicketId, tt.EngineerId, e.EngineerName, e.EngineerLogo, tt.AppointmentStartTime, tt.AppointmentEndTime, tt.TicketAssignDate }).ToList(),
                                  c.ModifiedUtcDate,
                                  c.Priority,
                                  c.TicketClosedDate,
                                  OverDueDays = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (c.OneOffAppointmentDate == null ? c.CreatedUtcDate : c.OneOffAppointmentDate)).Value.TotalDays),
                                  c.SMTPId,
                                  c.TicketWiseIssueType,
                                  c.Rating,
                                  c.RatingFeedback,
                                  DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault(),
                              }).ToList();
                    if (result == null) { result = new List<string>(); }
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
        #endregion

    }
}
