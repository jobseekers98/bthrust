using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static GenicSolution.Entities.GlobalParameters;

namespace GenicSolution.Controllers
{
    [Route("api/app/[controller]")]
    [ApiController]
    public class EngineerTicketsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        private object obj;
        [Obsolete]
        public EngineerTicketsController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        #region Engineer DashBoard Count
        [HttpGet("[action]/{EngineerId}/{Token}")]
        public async Task<ActionResult> DashboardDetails(Guid EngineerId, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var IsExist = await _context.Login.Where(x => x.Token == Token).Select(s => s).FirstOrDefaultAsync();
                if (IsExist != null)
                {
                    DateTime dateStart;
                    int EngineerTotalTicket = 0;
                    int EngineerTotalOpenTicket = 0;
                    int EngineerTotalNewTicketToday = 0;
                    int EngineerTotalTicketClosedToday = 0;
                    int EngineerTotalTicketOverDue = 0;
                    int EngineerTotalUpcoming = 0;
                    if (IsExist.Type == "Engineer")
                    {
                        EngineerTotalTicket = (from t in _context.Ticket
                                               join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                               join e in _context.Engineer on tt.EngineerId equals e.Id
                                               where t.IsReady == true && e.Id == EngineerId && t.Status != "CANCELLED"
                                               select t).Count();

                        EngineerTotalOpenTicket = (from t in _context.Ticket
                                                   join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                   join e in _context.Engineer on tt.EngineerId equals e.Id
                                                   where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "HOLD" || t.Status == "INPROGRESS") && t.Status != "CANCELLED" && e.Id == EngineerId
                                                   select t).Count();
                        dateStart = DateTime.UtcNow.AddHours(8);
                        EngineerTotalNewTicketToday = (from t in _context.Ticket
                                                       join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                       join e in _context.Engineer on tt.EngineerId equals e.Id
                                                       where t.IsReady == true && t.OneOffAppointmentDate != null &&
                                                       (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                                        t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                                        t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day)
                                                       && t.Status == "UPCOMING"
                                                       && e.Id == EngineerId
                                                       select t).Count();
                        EngineerTotalTicketClosedToday = (from t in _context.Ticket
                                                          join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                          join e in _context.Engineer on tt.EngineerId equals e.Id
                                                          where t.IsReady == true
                                                          && t.Status == "CLOSED" && t.TicketClosedDate != null 
                                                         && (t.TicketClosedDate.Value.Year == dateStart.Date.Year &&
                                                            t.TicketClosedDate.Value.Month == dateStart.Date.Month &&
                                                            t.TicketClosedDate.Value.Day == dateStart.Date.Day)
                                                          && e.Id == EngineerId
                                                          select t).Count();
                        EngineerTotalTicketOverDue = (from t in _context.Ticket
                                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                                      where t.IsReady == true
                                                      && t.Status == "OVERDUE"
                                                      && t.OneOffAppointmentDate < dateStart.Date
                                                      && e.Id == EngineerId
                                                      select t).Count();
                        EngineerTotalUpcoming = (from t in _context.Ticket
                                                 join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                 join e in _context.Engineer on tt.EngineerId equals e.Id
                                                 where t.IsReady == true
                                                 && t.Status == "UPCOMING"
                                                 && t.OneOffAppointmentDate > dateStart.Date
                                                 && e.Id == EngineerId
                                                 select t).Count();


                        obj = new
                        {
                            result = new
                            {
                                EngineerTotalTicket,
                                EngineerTotalOpenTicket,
                                EngineerTotalNewTicketToday,
                                EngineerTotalTicketClosedToday,
                                EngineerTotalTicketOverDue,
                                EngineerTotalUpcoming
                            },
                            Message = "success",
                            MessageDescription = "Success"
                        };
                        return StatusCode(200, obj);
                    }
                    if (IsExist.Type == "Customer")
                    {

                        EngineerTotalTicket = (from t in _context.Ticket
                                               where t.IsReady == true && t.Status != "CANCELLED" && t.CustomerId == EngineerId
                                               select t).Count();

                        EngineerTotalOpenTicket = (from t in _context.Ticket
                                                   where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "INPROGRESS" || t.Status == "HOLD") && t.Status != "CANCELED" && t.CustomerId == EngineerId
                                                   select t).Count();
                        dateStart = DateTime.UtcNow.AddHours(8);
                        EngineerTotalNewTicketToday = (from t in _context.Ticket
                                                       where t.IsReady == true && t.OneOffAppointmentDate != null &&
                                                       (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                                        t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                                        t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day)
                                                       && t.Status == "UPCOMING"
                                                       && t.CustomerId == EngineerId && t.OneOffAppointmentDate != null
                                                       select t).Count();
                        EngineerTotalTicketClosedToday = (from t in _context.Ticket
                                                          where t.IsReady == true
                                                          && t.Status == "CLOSED" && t.TicketClosedDate != null
                                                          && (t.TicketClosedDate.Value.Year == dateStart.Date.Year &&
                                                        t.TicketClosedDate.Value.Month == dateStart.Date.Month &&
                                                        t.TicketClosedDate.Value.Day == dateStart.Date.Day)
                                                          && t.CustomerId == EngineerId
                                                          select t).Count();
                        EngineerTotalTicketOverDue = (from t in _context.Ticket
                                                      where t.IsReady == true
                                                      && t.Status == "OVERDUE"
                                                      && t.CustomerId == EngineerId
                                                      select t).Count();
                        EngineerTotalUpcoming = (from t in _context.Ticket
                                                 where t.IsReady == true
                                                 && t.Status == "UPCOMING"
                                                 && t.OneOffAppointmentDate >= dateStart.Date
                                                 && t.CustomerId == EngineerId
                                                 select t).Count();
                        obj = new
                        {
                            result = new
                            {
                                EngineerTotalTicket,
                                EngineerTotalOpenTicket,
                                EngineerTotalNewTicketToday,
                                EngineerTotalTicketClosedToday,
                                EngineerTotalTicketOverDue,
                                EngineerTotalUpcoming
                            },
                            Message = "success",
                            MessageDescription = "Success"
                        };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Unauthorized Access" };
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };

                return StatusCode(200, obj);
            }
        }
        #endregion

        ///***************************************************************************///
        /// Engineer Ticket History Begin
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult> GetCustomerTicketHistory(Guid TicketId, Guid Token)
        {

            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    Guid eid = (from x in _context.Login where x.Token == Token select x.Id).FirstOrDefault();
                    var result = await (from c in _context.Ticket
                                        where c.CustomerId == TicketId && c.IsReady == true && c.Status != "CANCELLED"
                                        orderby c.CreatedUtcDate descending, c.OneOffAppointmentDate
                                            descending
                                        select c).Include(b => b.TicketTeams)
                                                    .OrderByDescending(c => c.Status == "OVERDUE")
                                                    .ThenByDescending(c => c.Status == "INPROGRESS")
                                                    .ThenByDescending(c => c.Status == "UPCOMING")
                                                    .ThenByDescending(c => c.Status == "HOLD")
                                                    .ThenByDescending(c => c.Status == "UNSECHEDULED")
                                                    .ThenByDescending(c => c.Status == "CLOSED")
                                                    .ThenByDescending(c => c.OneOffAppointmentDate)
                                                    .ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Engineer Ticket History End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Engineer Ticket Post Closer Details Begin
        [HttpPost("[action]/{TicketId}/{EngineerId}/{Token}/{Validate}")]
        [Obsolete]
        public async Task<ActionResult> StartTicketTimer(Guid TicketId, Guid EngineerId, Guid Token, bool Validate)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {

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
                            obj = new { result = "Already assigned " + strpre + " Inprogress for you, do you want to start " + newTicketId + " simultaneously?", Message = "failure", MessageDescription = "INPROGRESS" };
                            return StatusCode(200, obj);
                        }
                    }

                    var runningTimer = (from t in _context.TicketTimer where t.TicketId == TicketId && t.EngineerId == EngineerId && t.Status == 1 select t).ToList();
                    if (runningTimer.Count > 0)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Ticket is already in Runing process." };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        TicketTimer ticketTimer = new TicketTimer();
                        ticketTimer.TicketId = TicketId;
                        ticketTimer.EngineerId = EngineerId;
                        ticketTimer.Status = 1;
                        //1 Status= Open ,2 status =close

                        ticketTimer.StartTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("h:mm:ss");
                        ticketTimer.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

                        _context.TicketTimer.Add(ticketTimer);
                        await _context.SaveChangesAsync();
                        var ticket = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                        if (ticket != null)
                        {
                            var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketId select tt).ToList();
                            foreach (var item in ticketteam)
                            {
                                item.IsFree = false;
                                _context.Entry(item).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                            ticket.Status = "INPROGRESS";
                            _context.Entry(ticket).State = EntityState.Modified;
                            _context.SaveChanges();

                            NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                            objMail.StartTicketBodyTemplate(TicketId);
                        }
                        obj = new { result = ticketTimer.ID, Message = "success", MessageDescription = "Ticket Timer is started" };
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketdetails = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                        postUserLog(userdetails.Id, userdetails.UserName, "Ticket", ticketTimer.TicketId, "Added", "Ticket " + ticketdetails.TicketId + " is start at " + ticketTimer.StartDate + " ", "Ticket " + ticketdetails.TicketId + " is start at " + ticketTimer.StartDate);
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        //Stop ticket Timer
        [HttpPut("[action]/{EngineerId}/{TicketId}/{Token}")]
        public async Task<ActionResult> stopTicketTimer(Guid EngineerId, Guid TicketId, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = (from c in _context.TicketTimer where c.EngineerId == EngineerId && c.TicketId == TicketId && c.Status == 1 select c).FirstOrDefault();
                    if (result == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "active timer is not found or already stoped" };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        result.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        result.Status = 2;//1 Status= Open ,2 status =close
                        result.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("hh:mm:ss");
                        _context.Entry(result).State = EntityState.Modified;
                        _context.SaveChanges();
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketdetails = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                        postUserLog(userdetails.Id, userdetails.UserName, "Ticket", result.TicketId, "Added", "Ticket " + ticketdetails.TicketId + " is stop at " + result.EndDate + " ", "Ticket " + ticketdetails.TicketId + " is stop at " + result.EndDate);
                        obj = new { result = "", Message = "success", MessageDescription = "Your timer is stoped now!" };
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        //Start ticket Timer
        [HttpPost("[action]/{TicketId}/{EngineerId}/{Token}/{Validate}")]
        public async Task<ActionResult> startTicketTimerByforeman(Guid TicketId, Guid EngineerId, Guid Token, bool Validate)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {

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
                            obj = new { result = "Already assigned " + strpre + " Inprogress for you, do you want to start " + newTicketId + " simultaneously?", Message = "failure", MessageDescription = "INPROGRESS" };
                            return StatusCode(200, obj);
                        }
                    }

                    var runningTimer = (from t in _context.TicketTimer where t.TicketId == TicketId && t.EngineerId == EngineerId && t.Status == 1 select t).ToList();
                    if (runningTimer.Count > 0)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Ticket is already in Runing process." };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        TicketTimer ticketTimer = new TicketTimer();
                        ticketTimer.TicketId = TicketId;
                        ticketTimer.EngineerId = EngineerId;
                        ticketTimer.Status = 1;
                        //1 Status= Open ,2 status =close

                        ticketTimer.StartTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("h:mm:ss");
                        ticketTimer.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

                        _context.TicketTimer.Add(ticketTimer);
                        await _context.SaveChangesAsync();

                        obj = new { result = ticketTimer.ID, Message = "success", MessageDescription = "Ticket Timer is started" };
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketdetails = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                        postUserLog(userdetails.Id, userdetails.UserName, "Ticket", ticketTimer.TicketId, "Added", "Ticket " + ticketdetails.TicketId + " is start at " + ticketTimer.StartDate + " ", "Ticket " + ticketdetails.TicketId + " is start at " + ticketTimer.StartDate);
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPut("[action]/{EngineerId}/{TicketId}/{Token}")]
        public async Task<ActionResult> checkForemanIsWorkingOrNot(Guid EngineerId, Guid TicketId, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var workingengineers = (from t in _context.TicketTimer where t.TicketId == TicketId && t.EngineerId != EngineerId && t.Status == 1 select t).ToList();
                    if (workingengineers.Count > 0)
                    {
                        string strpre = string.Empty;
                        foreach (var item in workingengineers)
                        {
                            strpre += (from t in _context.Engineer where t.Id == item.EngineerId select t.EngineerName).FirstOrDefault() + ", ";
                        }
                        string msg = "Foreman " + strpre.Trim() + " haven't checked out yet. Do you want to Force Close the ticket?";

                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = "No more engineers are working!" });
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult<IEnumerable<CloserDetails>>> GetTicketCloserDetails(Guid TicketId, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await (from c in _context.CloserDetails
                                        where c.TicketId == TicketId && c.IsReady == true
                                        orderby c.StartDate ascending
                                        select new
                                        {
                                            c.CloserPrefix,
                                            c.CloserID,
                                            c.TicketId,
                                            c.TicketNo,
                                            c.TimerID,
                                            c.EngineerId,
                                            c.EnginnerName,
                                            c.CustomerSignature,
                                            c.EngineerSignature,
                                            c.NameOfSignatory,
                                            c.StartDate,
                                            c.EndDate,
                                            c.StartTime,
                                            c.EndTime,
                                            c.TotalDuration,
                                            c.Remarks,
                                            c.TicketFlag,
                                            c.PaymentCollected,
                                            c.CloserAmount,
                                            c.CloserGSTAmount,
                                            c.CloserTotalAmount,
                                            c.PaymentMode,
                                            c.AmountPaid,
                                            c.PaymentRemarks,
                                            c.ICNo,
                                            c.EngineerName,
                                            c.ServiceBy,
                                            c.attentionName,
                                            c.attentionEmail,
                                            c.otherAttentionName,
                                            c.IsTested,
                                            c.CheckedBy,
                                            CloserAttachmentList = (from ca in _context.CloserAttachment
                                                                    where ca.CloserID == c.CloserID
                                                                    select new
                                                                    {
                                                                        ca.CAID,
                                                                        ca.CloserID,
                                                                        ca.AttachmentExtenstion,
                                                                        ca.AttachmentFile,
                                                                        ca.AttachmentSize,
                                                                        ca.Remarks,
                                                                        CloserAttachmentAduioList = (from cla in _context.CloserAttachmentAduio where cla.CAID == ca.CAID && cla.CloserID == ca.CloserID select cla).ToList()
                                                                    }).ToList()
                                        }).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]/{Token}")]
        [Obsolete]
        public ActionResult PostCloserDetails(CloserDetails CloserDetails, Guid Token)
        {
            try
            {
                bool IsTokenValid =  _context.Login.Any(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = (from c in _context.CloserDetails where c.IsReady == false && c.EngineerId == CloserDetails.EngineerId && c.TicketId == CloserDetails.TicketId select c).FirstOrDefault();
                    if (result == null)
                    {
                        var count = (from c in _context.CloserDetails select c).Count() + 1;
                        var gc = (from c in _context.GenicProfile select c).FirstOrDefault();
                        if (gc == null)
                        {
                            CloserDetails.CloserPrefix = "CLR" + count;
                        }
                        else
                        {
                            CloserDetails.CloserPrefix = gc.CloserPrefix + count;
                        }
                        CloserDetails.CloserID = Guid.NewGuid();
                        CloserDetails.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);
                        CloserDetails.PaymentCollected = true;
                        _context.CloserDetails.Add(CloserDetails);
                        _context.SaveChanges();
                    }
                    else
                    {
                        CloserDetails = result;
                    }
                    obj = new { result = CloserDetails, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }

            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPut("[action]/{Token}")]
        [Obsolete]
        public ActionResult PutCloserDetails(CloserDetails CloserDetails, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var ServiceFormDetails = (from sf in _context.TicketWiseServiceForm where sf.CloserId == CloserDetails.CloserID select sf).FirstOrDefault();
                    if (ServiceFormDetails == null)
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Please Add Service Form first" });
                    }
                    if (!ServiceFormDetails.IsActive)
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Please Submit first Service Form!" });
                    }
                    CloserDetails.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    var TicketResult = (from e in _context.Ticket where e.Id == CloserDetails.TicketId select e).FirstOrDefault();
                    var engineerModel = (from e in _context.Engineer where e.Id == CloserDetails.EngineerId select e).FirstOrDefault();
                    if (TicketResult == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Ticket not found" };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        TicketResult.Status = CloserDetails.TicketFlag;
                        if (CloserDetails.TicketFlag == "CLOSED")
                        {
                            TicketResult.TicketClosedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        }
                        _context.Entry(TicketResult).State = EntityState.Modified;
                        _context.SaveChanges();

                        // update end time in timer table
                        var timerModel = (from c in _context.TicketTimer where c.TicketId == TicketResult.Id && c.EndTime == null select c).FirstOrDefault();
                        timerModel.EndTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).ToString("h:mm:ss");
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
                        catch (Exception ex) {
                            obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                            return StatusCode(200, obj); 
                        }
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
                        if (CloserDetails.TicketFlag == "CLOSED")
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
                                _context.SaveChanges();
                            }
                            try
                            {
                                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                                objMail.CompletionTicketBodyTemplate(CloserDetails.CloserID);

                                GenicDriveHelper gdh = new GenicDriveHelper(_context);
                                gdh.createWorkOrderinGenicDrive(TicketResult.CustomerId, CloserDetails.CloserID);
                            }
                            catch { }
                        }
                        else if (CloserDetails.TicketFlag == "HOLD")
                        {

                            var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketResult.Id select tt).ToList();
                            foreach (var item in ticketteam)
                            {
                                item.IsFree = true;
                                _context.Entry(item).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                            try
                            {
                                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                                objMail.HoldTicketBodyTemplate(CloserDetails.CloserID);

                                GenicDriveHelper gdh = new GenicDriveHelper(_context);
                                gdh.createWorkOrderinGenicDrive(TicketResult.CustomerId, CloserDetails.CloserID);
                            }
                            catch { }
                        }
                        obj = new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Success" };
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketdetails = (from c in _context.Ticket where c.Id == CloserDetails.TicketId select c).FirstOrDefault();
                        string data = "{TicketId: " + ticketdetails.TicketId + " Amount " + CloserDetails.CloserAmount + " with GST " + CloserDetails.CloserGSTAmount + " Total " + CloserDetails.CloserTotalAmount + " Mode " + CloserDetails.PaymentMode + " Remarks " + CloserDetails.PaymentRemarks + " Service By " + CloserDetails.ServiceBy + " Other " + CloserDetails.otherAttentionName + " Attention Name " + CloserDetails.attentionName + " Amount Email " + CloserDetails.attentionEmail + " Is Tested " + CloserDetails.IsTested + " Checked By " + CloserDetails.CheckedBy + " Remarks " + CloserDetails.Remarks + "}";
                        postUserLog(userdetails.Id, userdetails.UserName, "Ticket", CloserDetails.TicketId, "Added", "Closerdetails data synchronized | data " + data, "Closerdetails data synchronized");
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (DbUpdateConcurrencyException ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Engineer Ticket Post Closer Details End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Engineer Ticket Post Closer Attachment Begin
        [HttpGet("[action]/{CloserID}/{Token}")]
        public async Task<ActionResult<IEnumerable<CloserAttachment>>> GetCloserAttachmentList(Guid CloserID, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await (from i in _context.CloserAttachment where i.CloserID == CloserID select i).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]/{Token}")]
        [Obsolete]
        public async Task<ActionResult<CloserAttachment>> PostCloserAttachment(CloserAttachment CloserAttachment, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var closerdetails = (from cl in _context.CloserDetails where cl.CloserID == CloserAttachment.CloserID select cl).FirstOrDefault();
                    var ticket = (from cl in _context.Ticket where cl.Id == closerdetails.TicketId select cl).FirstOrDefault();
                    if (CloserAttachment.AttachmentFile == null) { CloserAttachment.AttachmentFile = ""; }
                    if (CloserAttachment.AttachmentFile !="")
                    {
                        if (CloserAttachment.AttachmentFile != "")
                        {
                            string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + closerdetails.CloserPrefix + "/" + GlobalParameters.MillisecondsTimestamp() + "." + CloserAttachment.AttachmentExtenstion.ToLower();
                            AWSHelper awshelper = new AWSHelper();
                            string msg = string.Empty;
                            bool isUploaded = awshelper.SendBase64ToAWS(CloserAttachment.AttachmentFile, end_point, out msg);
                            if (isUploaded) { CloserAttachment.AttachmentFile = msg; }
                        }
                        _context.CloserAttachment.Add(CloserAttachment);
                        _context.SaveChanges();
                    }
                    else
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Attachment is required", ReturnUrl = "" };
                        return StatusCode(200, obj);
                    }
                    int id = CloserAttachment.CAID;

                    if (CloserAttachment.CloserAttachmentAduioList.Count() > 0)
                    {
                        foreach (var a in CloserAttachment.CloserAttachmentAduioList)
                        {
                            if (a.AudioAttachment.Length > 0)
                            {
                                a.AttachmentAudioId = Guid.NewGuid();
                                a.CloserID = CloserAttachment.CloserID;
                                a.CAID = id;
                                a.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                string NewFileName = GlobalParameters.MillisecondsTimestamp() + ".wav";
                                AWSHelper awshelper = new AWSHelper();
                                string msg = string.Empty;
                                string end_point = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + closerdetails.CloserPrefix + "/audio-" + NewFileName;
                                bool isUploaded = awshelper.SendBase64ToAWS(CloserAttachment.AttachmentFile, end_point, out msg);
                                if (isUploaded) { CloserAttachment.AttachmentFile = msg; }
                                a.AttachmentAudioName = NewFileName;
                                a.AudioAttachment = msg;
                            }
                            _context.CloserAttachmentAduio.Add(a);
                            _context.SaveChanges();
                        }
                        try
                        {
                            var getBlankCloser = (from g in _context.CloserAttachmentAduio.Where(q => q.CloserID.ToString() == "00000000-0000-0000-0000-000000000000" && q.CAID == CloserAttachment.CAID) select g).ToList();
                            foreach (var r in getBlankCloser)
                            {
                                _context.CloserAttachmentAduio.Remove(r);
                                _context.SaveChanges();
                            }
                        }
                        catch { }
                    }
                    obj = new { result = CloserAttachment.CAID, Message = "success", MessageDescription = "Attachment uploaded successfuly", ReturnUrl = CloserAttachment.AttachmentFile };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    postUserLog(userdetails.Id, userdetails.UserName, "Ticket", CloserAttachment.CloserID, "Added", "An attachment is added from Closer", "An attachment is added from Closer");
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired", ReturnUrl = "" };
                    return StatusCode(200, obj);
                }
            }
            catch (DbUpdateConcurrencyException ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString(), ReturnUrl = "" };

                return StatusCode(200, obj);
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString(), ReturnUrl = "" };

                return StatusCode(200, obj);
            }
        }
        [HttpDelete("[action]/{CAID}/{Token}")]
        [Obsolete]
        public async Task<ActionResult> DeleteCloserAttachment(int CAID, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var CloserAttachment = await _context.CloserAttachment.FindAsync(CAID);
                    if (CloserAttachment == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Attachment not found" };
                        return StatusCode(200, obj);
                    }
                    if (!string.IsNullOrEmpty(CloserAttachment.AttachmentFile))
                    {
                        AWSHelper awshelper = new AWSHelper();
                        awshelper.RemoveFromAWS(CloserAttachment.AttachmentFile);
                    }
                    _context.CloserAttachment.Remove(CloserAttachment);
                    await _context.SaveChangesAsync();
                    obj = new { result = "", Message = "success", MessageDescription = "Attachment deleted" };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    postUserLog(userdetails.Id, userdetails.UserName, "Ticket", CloserAttachment.CloserID, "Removed", "An attachment is removed from Closer", "An attachment is removed from Closer");
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Engineer Ticket Post Closer Attachment End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Engineer Ticket Line Item Methods Begin
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult<IEnumerable<TicketItem>>> GetTicketItem(Guid TicketId, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await (from c in _context.TicketItem where c.TicketId == TicketId select c).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult> PostTicketItem(TicketItem ticketitem, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (ticketitem.ItemQuantity == 0) { ticketitem.ItemQuantity = 1; }
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
                            obj = new { result = "", Message = "success", MessageDescription = "Ticket Item updated successfuly" };
                            var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                            var ticketetails = (from c in _context.Ticket where c.Id == ticketitem.TicketId select c).FirstOrDefault();
                            string data = ticketitem.Type + " " + ticketitem.ItemName + " Item Quantity: " + ticketitem.ItemQuantity + " Unit cost: " + ticketitem.ItemUnitCost + " Total Cost " + ticketitem.ItemTotalCost;
                            postUserLog(userdetails.Id, userdetails.UserName, ticketitem.Type, ticketitem.TicketId, "Modify", "A " + ticketitem.Type + " is Modify data:" + data, "A " + ticketitem.Type + " is Modify");
                            return StatusCode(200, obj);
                        }
                        else
                        {
                            ticketitem.IsPriseRevised = true;
                            ticketitem.ItemAddredBy = true;
                            _context.TicketItem.Add(ticketitem);
                            await _context.SaveChangesAsync();
                            var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                            var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                            result.NetAmount = Convert.ToDouble(itemsCost);
                            _context.Entry(result).State = EntityState.Modified;
                            await _context.SaveChangesAsync();
                            obj = new { result = "", Message = "success", MessageDescription = "Ticket Item added successfuly" };
                            var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                            var ticketetails = (from c in _context.Ticket where c.Id == ticketitem.TicketId select c).FirstOrDefault();
                            string data = ticketitem.Type + " " + ticketitem.ItemName + " Item Quantity: " + ticketitem.ItemQuantity + " Unit cost: " + ticketitem.ItemUnitCost + " Total Cost " + ticketitem.ItemTotalCost;
                            postUserLog(userdetails.Id, userdetails.UserName, ticketitem.Type, ticketitem.TicketId, "Added", "A " + ticketitem.Type + " is added to " + ticketetails.TicketId + " data: " + data, "A " + ticketitem.Type + " is added to " + ticketetails.TicketId);
                            return StatusCode(200, obj);
                        }
                    }
                    else
                    {
                        ticketitem.IsPriseRevised = false;
                        ticketitem.ItemAddredBy = true;
                        _context.TicketItem.Add(ticketitem);
                        await _context.SaveChangesAsync();
                        var itemsCost = (from tt in _context.TicketItem where tt.TicketId == ticketitem.TicketId select tt.ItemTotalCost).Sum();
                        var result = (from t in _context.Ticket where t.Id == ticketitem.TicketId select t).FirstOrDefault();
                        result.NetAmount = Convert.ToDouble(itemsCost);
                        _context.Entry(result).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        obj = new { result = "", Message = "success", MessageDescription = "Ticket Item added successfuly" };
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketetails = (from c in _context.Ticket where c.Id == ticketitem.TicketId select c).FirstOrDefault();
                        string data = ticketitem.Type + " " + ticketitem.ItemName + " Item Quantity: " + ticketitem.ItemQuantity + " Unit cost: " + ticketitem.ItemUnitCost + " Total Cost " + ticketitem.ItemTotalCost;
                        postUserLog(userdetails.Id, userdetails.UserName, ticketitem.Type, ticketitem.TicketId, "Added", "A " + ticketitem.Type + " is added to " + ticketetails.TicketId + " data: " + data, "A " + ticketitem.Type + " is added to " + ticketetails.TicketId);
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult> PutTicketItem(TicketItem ticketitem, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (genicprofile.WarrantyValidation)
                    {
                        if (ticketitem.InWarranty)
                        {
                            if (ticketitem.UniqId.Length > 0)
                            {
                                var IsDuplicate = (from c in _context.TicketItem where c.ItemName == ticketitem.ItemName && c.UniqId == ticketitem.UniqId && c.Id != ticketitem.Id select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
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
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        /// Engineer Ticket Line Item Methods End
        ///***************************************************************************///

        /// Delete Assiend service form
        [HttpGet("[action]/{Id}/{Token}")]
        public async Task<ActionResult> removeServiceFormFromTicket(int id, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var TicketWiseServiceForm = await _context.TicketWiseServiceForm.Where(a => a.TicketServiceID == id).FirstAsync();
                    if (TicketWiseServiceForm == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Service form not found" };
                        return StatusCode(200, obj);
                    }
                    _context.TicketWiseServiceForm.Remove(TicketWiseServiceForm);
                    obj = new { result = "", Message = "success", MessageDescription = "Success" };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    var ticketdetails = (from c in _context.Ticket where c.Id == TicketWiseServiceForm.TicketId select c).FirstOrDefault();
                    postUserLog(userdetails.Id, userdetails.UserName, "Ticket", ticketdetails.Id, "Added", "A service form is removed from ticket " + ticketdetails.TicketId, "A service form is removed");
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult<IEnumerable<TicketWiseServiceForm>>> GetAssignedServiceFormByTicketId(Guid TicketId, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await _context.TicketWiseServiceForm.Where(a => a.TicketId == TicketId).OrderByDescending(a => a.ServiceFormSequenceId).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }


        ///***************************************************************************///
        /// Get Service List Begin
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult> GetTicketTimeDiffrance(Guid TicketId, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var TicketTimer = await _context.TicketTimer.Where(a => a.TicketId == TicketId && a.EndTime == null).FirstOrDefaultAsync();
                    if (TicketTimer == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Ticket is not Inprogress" };
                        return StatusCode(200, obj);
                    }
                    var result = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) - (DateTime)TicketTimer.StartDate;
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Service List End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Get Service List Begin
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<Service>>> GetService(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await _context.Service.ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Service List End
        ///***************************************************************************///



        ///***************************************************************************///
        /// Get Service List Begin
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await _context.Product.ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Service List End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Get Service List Begin
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<PaymentMode>>> GetPaymentModet(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await _context.PaymentMode.ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Service List End
        ///***************************************************************************///



        ///***************************************************************************///
        /// Get Service List Begin
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<Tax>>> GetTax(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await _context.Tax.ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Service List End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Get Logs List Begin
        // GET: User Logs
        [HttpGet("[action]/{TicketId}/{Module}/{Token}")]
        public async Task<ActionResult<IEnumerable<UserLog>>> getTicketLogs(Guid TicketId, string Module, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await (from l in _context.UserLog where l.ModuleId == TicketId && l.Module == Module orderby l.LogDate descending select l).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    postUserLog(userdetails.Id, userdetails.UserName, Module, TicketId, "GET", "View +" + Module + "+ Logs", "View " + Module + " Logs");
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }

        }
        //get ticket timesheet on ticket id
        [HttpGet("[action]/{TicketId}/{Token}")]
        public async Task<ActionResult<IEnumerable<object>>> GetTicketTimesheet(Guid TicketId, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = await (from t in _context.TicketTimer
                                        join e in _context.Engineer on t.EngineerId equals e.Id
                                        join tt in _context.Ticket on t.TicketId equals tt.Id
                                        where t.TicketId == TicketId
                                        orderby t.StartDate descending
                                        select new
                                        {
                                            EngineerId = e.Id,
                                            e.EngineerName,
                                            tt.TicketId,
                                            Date = t.StartDate,
                                            t.StartDate,
                                            t.EndDate,
                                            CheckIn = t.StartTime,
                                            CheckOut = t.EndTime,
                                            TimeDiff = (t.EndDate - t.StartDate).ToString()
                                        }).ToListAsync();
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    var ticketdetails = (from c in _context.Ticket where c.Id == TicketId select c).FirstOrDefault();
                    postUserLog(userdetails.Id, userdetails.UserName, "Ticket", TicketId, "GET", "View Ticket Timeshteet Ticket is " + ticketdetails.TicketId, "View Ticket Timeshteet Ticket is " + ticketdetails.TicketId);
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        /// Get Logs List End
        ///***************************************************************************///



        ///***************************************************************************///
        /// Get Service Form Offline Begin

        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<object>>> GetOfflineServiceForm(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    //var result = await (from c in _context.FormsBuilder
                    //                    select new
                    //                    {
                    //                        c.FormId,
                    //                        c.FormTitle,
                    //                        c.Description,
                    //                        c.IsActive,
                    //                        c.CreatedDate,
                    //                        List = (from e in _context.FormBuilderFields
                    //                                where c.FormId == e.FormId
                    //                                select new
                    //                                {
                    //                                    e.FormFieldId,
                    //                                    e.FormId,
                    //                                    e.FieldType,
                    //                                    e.FieldLabel,
                    //                                    e.FieldPlaceholder,
                    //                                    e.FieldRequired,
                    //                                    e.SequenceNo,
                    //                                    e.CreatedDate,
                    //                                    e.Values,
                    //                                    Options = (from o in _context.FormBuilderFieldOptions where o.FormId == e.FormId && o.FormFieldId == e.FormFieldId select o).ToList()
                    //                                }).ToList()
                    //                    }).ToListAsync();
                    obj = new { result = new List<string>(), Message = "success", MessageDescription = "Success" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult> OfflineTicketStartStop(Guid Token, TicketTimer tickettimer)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    _context.TicketTimer.Add(tickettimer);
                    await _context.SaveChangesAsync();

                    obj = new { result = "", Message = "success", MessageDescription = "success" };
                    var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                    var ticketdetails = (from c in _context.Ticket where c.Id == tickettimer.TicketId select c).FirstOrDefault();
                    string data = "{Start time : " + tickettimer.StartDate + " - Stop " + tickettimer.EndDate + " Status is " + tickettimer.Status + "}";
                    postUserLog(userdetails.Id, userdetails.UserName, "Ticket", tickettimer.TicketId, "Added", "Offline Ticket synchronized data " + data + " Ticket is " + ticketdetails.TicketId, "Offline Ticket start and stop. Ticket is " + ticketdetails.TicketId);
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]/{Token}")]
        [Obsolete]
        public ActionResult OfflinePutCloserDetails(CloserDetails CloserDetails, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var TicketResult = (from e in _context.Ticket where e.Id == CloserDetails.TicketId select e).FirstOrDefault();
                    var engineerModel = (from e in _context.Engineer where e.Id == CloserDetails.EngineerId select e).FirstOrDefault();
                    if (TicketResult == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Ticket not found" };
                        return StatusCode(200, obj);
                    }
                    else
                    {

                        if (CloserDetails.TicketFlag == "CLOSED")
                        {
                            TicketResult.Status = CloserDetails.TicketFlag;
                            TicketResult.TicketClosedDate = CloserDetails.EndDate;
                            _context.Entry(TicketResult).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                        else if (CloserDetails.TicketFlag == "HOLD")
                        {
                            TicketResult.Status = CloserDetails.TicketFlag;
                            _context.Entry(TicketResult).State = EntityState.Modified;
                            _context.SaveChanges();
                        }

                        // update end time in timer table
                        var timerModel = (from c in _context.TicketTimer where c.TicketId == TicketResult.Id select c).FirstOrDefault();
                        CloserDetails.TicketNo = TicketResult.TicketId;
                        CloserDetails.TimerID = timerModel.ID;
                        CloserDetails.StartDate = timerModel.StartDate;
                        CloserDetails.StartTime = timerModel.StartTime;
                        CloserDetails.EnginnerName = engineerModel.EngineerName;
                        var duration = (timerModel.EndDate - timerModel.StartDate).ToString();
                        var ddd = duration.Split(".");
                        CloserDetails.TotalDuration = ddd[0].ToString();

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
                        catch (Exception ex) { }
                        #endregion save singnature end

                        _context.Entry(CloserDetails).State = EntityState.Modified;
                        _context.SaveChanges();

                        bool isReady = (from c in _context.CloserDetails where c.CloserID == CloserDetails.CloserID select c.IsReady).FirstOrDefault();
                        if (!isReady)
                        {
                            CloserDetails.IsReady = true;
                            _context.SaveChanges();
                        }
                        obj = new { result = CloserDetails.CloserID, Message = "success", MessageDescription = "Success" };
                        var userdetails = (from c in _context.Login where c.Token == Token select c).FirstOrDefault();
                        var ticketdetails = (from c in _context.Ticket where c.Id == CloserDetails.TicketId select c).FirstOrDefault();
                        string data = "{TicketId: " + ticketdetails.TicketId + " Amount " + CloserDetails.CloserAmount + " with GST " + CloserDetails.CloserGSTAmount + " Total " + CloserDetails.CloserTotalAmount + " Mode " + CloserDetails.PaymentMode + " Remarks " + CloserDetails.PaymentRemarks + " Service By " + CloserDetails.ServiceBy + " Other " + CloserDetails.otherAttentionName + " Attention Name " + CloserDetails.attentionName + " Amount Email " + CloserDetails.attentionEmail + " Is Tested " + CloserDetails.IsTested + " Checked By " + CloserDetails.CheckedBy + " Remarks " + CloserDetails.Remarks + "}";
                        postUserLog(userdetails.Id, userdetails.UserName, "Ticket", ticketdetails.Id, "Added", "Offline closerdetails data synchronized data " + data, "Offline closerdetails data synchronized");
                        return StatusCode(200, obj);
                    }
                }

                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (DbUpdateConcurrencyException ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }

        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult> GetEngineerTicketsForOffline(Guid Token)
        {

            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    Guid eid = (from x in _context.Login where x.Token == Token select x.Id).FirstOrDefault();
                    var result1 = await (from c in _context.Ticket
                                         join t in _context.TicketTeam on c.Id equals t.TicketId
                                         where t.EngineerId == eid && c.IsReady == true && c.Status != "CANCELLED"
                                         orderby c.CreatedUtcDate descending, c.OneOffAppointmentDate
                                         descending
                                         select c).Include(b => b.TicketTeams)
                                                    .Include(b => b.TicketItems)
                                                    .Include(b => b.TicketAttachments)
                                                    .Include(b => b.TicketWiseIssueType)
                                                    .OrderByDescending(c => c.Status == "OVERDUE")
                                                    .ThenByDescending(c => c.Status == "INPROGRESS")
                                                    .ThenByDescending(c => c.Status == "UPCOMING")
                                                    .ThenByDescending(c => c.Status == "HOLD")
                                                    .ThenByDescending(c => c.Status == "UNSECHEDULED")
                                                    .ThenByDescending(c => c.Status == "CLOSED")
                                                    .ThenByDescending(c => c.OneOffAppointmentDate)
                                                    .ToListAsync();
                    var result2 = await _context.Service.ToListAsync();
                    var result3 = await _context.Product.ToListAsync();
                    var result4 = new List<string>();
                    var result5 = await _context.PaymentMode.Select(s => new { s.Id, s.ModeName, s.Status }).ToListAsync();
                    var result6 = await _context.Tax.Select(s => new { s.Id, s.TaxName, s.TaxRate, s.Status, s.IsDefault, s.Description }).ToListAsync();
                    var result = (result1, result2, result3, result4, result5, result6);
                    obj = new { result, Message = "success", MessageDescription = "Success" };
                    var Engineer = (from c in _context.Engineer where c.Id == eid select c).FirstOrDefault();
                    postUserLog(Engineer.Id, Engineer.EngineerName, "Ticket", null, "GET", "Offline all data is synchronized", "Offline all data is synchronized");
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        private void postUserLog(Guid? userid, string username, string module, Guid? moduleid, string actiontype, string description, string resentdesc)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                UserLog userlog = new UserLog();
                userlog.UserId = userid;
                userlog.UserName = username;
                userlog.Module = module;
                userlog.ModuleId = moduleid;
                userlog.ActionType = actiontype;
                userlog.Description = description;
                userlog.RecentDescription = resentdesc;
                userlog.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                userlog.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                userlog.Id = Guid.NewGuid();
                userlog.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                _context.UserLog.Add(userlog);
                _context.SaveChanges();
            }
            catch (Exception ex) { }
        }
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
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Service form added successfully" });
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
                MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                MailSettings.GenerateServicePDF(CloserId);
                var ticketWiseServiceForm = (from s in _context.TicketWiseServiceForm where s.CloserId == CloserId select s).FirstOrDefault();
                string path = GlobalParameters.TicketPath(serviceform.TicketNo, serviceform.ServicePrefix + serviceform.TicketServiceID);
                obj = new { result = "", Message = "success", MessageDescription = path };
                var Engineer = (from c in _context.Engineer where c.Id == ticketWiseServiceForm.EngineerId select c).FirstOrDefault();
                postUserLog(ticketWiseServiceForm.EngineerId, Engineer.EngineerName, "Ticket", ticketWiseServiceForm.TicketId, "Download", "A PDF file name is " + ticketWiseServiceForm.ServicePrefix + ticketWiseServiceForm.TicketServiceID + ".pdf Downloaded", "A PDF file is Downloaded");
                return StatusCode(201, obj);
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(500, obj);
            }

        }

        #region Warranty
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetIdList(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from g in _context.GenicProfile select new {
                        CustomerList = (from c in _context.Customer where c.Status == true && c.IsReady == true select new { c.Id, Name = c.NameTitle + " " + c.FirstName + " " + c.LastName, c.CompanyName }).ToList(),
                        ProductList = (from c in _context.Product where c.Status == true select new { c.Id, Name = c.ProductName }).ToList(),
                        ServiceList = (from c in _context.Service where c.IsActive == true select new { c.Id, name = c.ServiceName }).ToList()
                    }).FirstOrDefaultAsync();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
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
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult<ProductWarrantyFilter>> Warranty(Guid token, ProductWarrantyFilter obj)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                    Guid nullguid = Guid.Parse("00000000-0000-0000-0000-000000000000");
                    var result1 = await (from ti in _context.TicketItem
                                         join tt in _context.TicketTeam on ti.TicketId equals tt.TicketId
                                         join tic in _context.Ticket on ti.TicketId equals tic.Id
                                         where UserType.Type == "Admin" ? tic.IsReady == true : tic.IsReady == true && tt.EngineerId == UserType.Id
                                         where ti.InWarranty == true && ti.InstallationDate != null
                                         select new
                                         {
                                             ti.Id,
                                             ti.ItemName,
                                             ti.UniqId,
                                             ti.InstallationDate,
                                             ExpiryDate = ti.InstallationDate.Value.AddDays(ti.WarrantyDays),
                                             Customer = tic.CustomerCompanyName,
                                             tic.CustomerId,
                                             ProductId = ti.Type == "Product" ?
                                             (from p1 in _context.Product where p1.ProductName == ti.ItemName select p1.Id).FirstOrDefault() :
                                             (from s1 in _context.Service where s1.ServiceName == ti.ItemName select s1.Id).FirstOrDefault(),
                                             IsFrom = "TicketItem",
                                             tic.TicketId,
                                             ti.CreatedUtcDate
                                         }).Distinct().ToListAsync();
                    var result01 = await (from w in _context.ProductWarranty
                                          where w.WarrantyDays > 0 && w.InstallationDate != null
                                          select new
                                          {
                                              w.Id,
                                              ItemName = (from p1 in _context.Product where p1.Id == w.ProductId select p1.ProductName).FirstOrDefault() == null ?
                                              (from p1 in _context.Service where p1.Id == w.ProductId select p1.ServiceName).FirstOrDefault() :
                                              (from p1 in _context.Product where p1.Id == w.ProductId select p1.ProductName).FirstOrDefault(),
                                              w.UniqId,
                                              w.InstallationDate,
                                              ExpiryDate = w.InstallationDate.Value.AddDays(w.WarrantyDays),
                                              Customer = (from c1 in _context.Customer where c1.Id == w.CustomerId select c1.CompanyName).FirstOrDefault(),
                                              w.CustomerId,
                                              w.ProductId,
                                              IsFrom = "ProductWarranty",
                                              TicketId = "",
                                              w.CreatedUtcDate
                                          }).ToListAsync();
                    foreach (var item in result01)
                    {
                        result1.Add(item);
                    }
                    var result2 = (from p in result1
                                   where obj.CustomerId == nullguid ? p.CustomerId != obj.CustomerId : p.CustomerId == obj.CustomerId
                                   where obj.ProductId == nullguid ? p.ProductId != obj.ProductId : p.ProductId == obj.ProductId
                                   orderby p.CreatedUtcDate descending
                                   select new
                                   {
                                       p.Id,
                                       p.ItemName,
                                       p.UniqId,
                                       p.InstallationDate,
                                       p.ExpiryDate,
                                       p.Customer,
                                       p.IsFrom,
                                       Status = p.ExpiryDate > DateTime.UtcNow.AddHours(8).AddDays(1) ? "Active" : "Expired",
                                       p.TicketId,
                                       p.CreatedUtcDate
                                   }).ToList();

                    var result3 = result2;
                    if (!string.IsNullOrWhiteSpace(obj.searchStr))
                    {
                        result3 = (from t in result2
                                   where t.UniqId.ToLower().Contains(obj.searchStr.ToLower()) ||
                                   t.ItemName.ToLower().Contains(obj.searchStr.ToLower()) ||
                                   t.TicketId.ToLower().Contains(obj.searchStr.ToLower()) ||
                                   t.Status.ToLower().Contains(obj.searchStr.ToLower()) ||
                                   t.Customer.ToLower().Contains(obj.searchStr.ToLower())
                                   orderby t.CreatedUtcDate descending
                                   select t).ToList();
                    }
                    if (!string.IsNullOrWhiteSpace(obj.StartDate) && !string.IsNullOrWhiteSpace(obj.EndDate))
                    {
                        try
                        {
                            string st = obj.StartDate.Substring(0, 4) + "-" + obj.StartDate.Substring(4, 2) + "-" + obj.StartDate.Substring(6, 2) + " 00:00:00";
                            string et = obj.EndDate.Substring(0, 4) + "-" + obj.EndDate.Substring(4, 2) + "-" + obj.EndDate.Substring(6, 2) + " 23:59:59";
                            DateTime startdate = Convert.ToDateTime(st);
                            DateTime enddate = Convert.ToDateTime(et);
                            var result = (from t in result3
                                          where (t.InstallationDate >= startdate && t.InstallationDate <= enddate) ||
                                           (t.ExpiryDate >= startdate && t.ExpiryDate <= enddate)
                                          orderby t.CreatedUtcDate descending
                                          select t).ToList();
                            return StatusCode(200, result);
                        }
                        catch (Exception ex1) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex1.Message.ToString() }); }

                    }
                    return StatusCode(200, new { result = result3, Message = "success", MessageDescription = "Success" });
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
        #endregion

        #region USC Service Form
        [HttpGet("[action]/{token}/{CloserId}")]
        public ActionResult GetServiceFormById(Guid token, Guid CloserId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var ticketId = (from t in _context.CloserDetails where t.CloserID == CloserId select t.TicketId).FirstOrDefault();
                    var result = (from c in _context.FSMServiceForm where c.CloserId == CloserId select c).FirstOrDefault();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
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
        [HttpPost("[action]/{token}/{TicketId}/{ServiceFormSequenceId}")]
        public async Task<ActionResult> PostServiceForm(FSMServiceForm sf, Guid token, Guid TicketId, int ServiceFormSequenceId)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (sf.CloserId == null || sf.CloserId == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Closer Form Missing" });
                    }
                    else
                    {
                        _context.FSMServiceForm.Add(sf);
                        var engineerDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                        var ticket = (from c in _context.Ticket where c.IsReady == true && c.Id == TicketId select c).FirstOrDefault();
                        var resultEng = (from e in _context.Engineer where e.Id == engineerDetails.Id select e).FirstOrDefault();
                        var ticketWiseServiceform = (from c in _context.TicketWiseServiceForm where c.TicketId == TicketId && c.ServiceFormSequenceId == ServiceFormSequenceId && c.IsActive == false select c).FirstOrDefault();
                        var lastCloserdetails = (from cl in _context.CloserDetails where cl.TicketId == TicketId && cl.EngineerId == engineerDetails.Id select cl).OrderByDescending(cl => cl.StartDate).FirstOrDefault();
                        if (ticketWiseServiceform != null)
                        {
                            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                            ticketWiseServiceform.ServiceDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                            ticketWiseServiceform.TicketDate = ticket.OneOffAppointmentDate;
                            ticketWiseServiceform.EngineerId = resultEng.Id;
                            ticketWiseServiceform.EngineerName = resultEng.EngineerName;
                            ticketWiseServiceform.IsActive = true;
                            ticketWiseServiceform.TicketNo = ticket.TicketId;
                            ticketWiseServiceform.IsPreview = false;
                            if (lastCloserdetails != null)
                            {
                                ticketWiseServiceform.CloserId = lastCloserdetails.CloserID;
                            }
                            _context.Entry(ticketWiseServiceform).State = EntityState.Modified;
                            try
                            {
                                _context.SaveChanges();
                            }
                            catch (Exception ex) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() }); }
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
        [HttpPost("[action]/{token}/{TicketId}/{ServiceFormSequenceId}/{IsPreview}")]
        public async Task<ActionResult> PostServiceForm(FSMServiceForm sf, Guid token, Guid TicketId, int ServiceFormSequenceId, bool IsPreview)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (sf.CloserId == null || sf.CloserId == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Closer Form Missing" });
                    }
                    else
                    {
                        _context.FSMServiceForm.Add(sf);
                        var engineerDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                        var ticket = (from c in _context.Ticket where c.IsReady == true && c.Id == TicketId select c).FirstOrDefault();
                        var resultEng = (from e in _context.Engineer where e.Id == engineerDetails.Id select e).FirstOrDefault();
                        var ticketWiseServiceform = (from c in _context.TicketWiseServiceForm where c.TicketId == TicketId && c.ServiceFormSequenceId == ServiceFormSequenceId && c.IsActive == false select c).FirstOrDefault();
                        var lastCloserdetails = (from cl in _context.CloserDetails where cl.TicketId == TicketId && cl.EngineerId == engineerDetails.Id select cl).OrderByDescending(cl => cl.StartDate).FirstOrDefault();
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
                            catch (Exception ex) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() }); }
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
        public ActionResult PutServiceForm(FSMServiceForm sf, Guid token, Guid TicketId, bool IsPreview)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (sf.CloserId == null || sf.CloserId == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Closer Form Missing" });
                    }
                    else
                    {
                        _context.Entry(sf).State = EntityState.Modified;
                        _context.SaveChanges();
                        var ticketWiseServiceform = (from c in _context.TicketWiseServiceForm where c.CloserId == sf.CloserId select c).FirstOrDefault();
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

        #region Ticket Equipment
        [HttpGet("[action]/{token}/{ticketId}")]
        public ActionResult GetTicketEquipmentDataList(Guid token, Guid ticketId)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token && l.Type == "Engineer" select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = (from i in _context.TicketEquipment where i.TicketId == ticketId select i).OrderByDescending(i => i.Id).ToList();
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

        #region Ticket Generic
        [HttpGet("[action]/{token}/{type}")]
        public async Task<ActionResult> GetTickets(Guid token, int type)
        {
            try
            {
                var UserDetails = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserDetails != null)
                {
                    var result = new object();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    DateTime dateStart;
                    dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    #region Customer
                    if (UserDetails.Type == "Customer")
                    {
                        switch (type)
                        {
                            case 1:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 2:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 3:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                                (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                                c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                                c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 4:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.TicketClosedDate != null &&
                                                (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                                c.TicketClosedDate.Value.Month == dateStart.Month &&
                                                c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 5:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "OVERDUE"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 6:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            default:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
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
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "HOLD")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 2:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 3:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                                (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                                c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                                c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 4:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.TicketClosedDate != null &&
                                                (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                                c.TicketClosedDate.Value.Month == dateStart.Month &&
                                                c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 5:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "OVERDUE"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 6:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 7:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "HOLD"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 8:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            default:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                        }
                    }
                    #endregion
                    var tc = (from s in _context.GenicProfile select s.TicketTermsConditions).FirstOrDefault();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success", TermsAndConditions = tc });
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
        [HttpGet("[action]/{token}/{type}")]
        public async Task<ActionResult> GetEngineerFilterTickets(Guid token, int type)
        {
            try
            {
                var UserDetails = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserDetails != null)
                {
                    var result = new object();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    DateTime dateStart;
                    dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    #region Customer
                    if (UserDetails.Type == "Customer")
                    {
                        switch (type)
                        {
                            case 1:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 2:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 3:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                                (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                                c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                                c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 4:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.TicketClosedDate != null &&
                                                (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                                c.TicketClosedDate.Value.Month == dateStart.Month &&
                                                c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 5:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "OVERDUE"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 6:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            default:
                                result = await (from c in _context.Ticket
                                                where c.IsReady == true && c.CustomerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "DEFECT JOB" || c.Status == "NEW JOB REQUEST" || c.Status == "UNSCHEDULED")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
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
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE" || c.Status == "HOLD")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 2:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 3:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.OneOffAppointmentDate != null &&
                                                (c.OneOffAppointmentDate.Value.Year == dateStart.Year &&
                                                c.OneOffAppointmentDate.Value.Month == dateStart.Month &&
                                                c.OneOffAppointmentDate.Value.Day == dateStart.Day) && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 4:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.TicketClosedDate != null &&
                                                (c.TicketClosedDate.Value.Year == dateStart.Year &&
                                                c.TicketClosedDate.Value.Month == dateStart.Month &&
                                                c.TicketClosedDate.Value.Day == dateStart.Day) && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 5:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "OVERDUE"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 6:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "UPCOMING"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 7:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "HOLD"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            case 8:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id && c.Status == "CLOSED"
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                            default:
                                result = await (from c in _context.Ticket
                                                join tt in _context.TicketTeam on c.Id equals tt.TicketId
                                                where c.IsReady == true && tt.EngineerId == UserDetails.Id &&
                                                (c.Status == "UPCOMING" || c.Status == "CLOSED" || c.Status == "INPROGRESS" || c.Status == "OVERDUE")
                                                select new
                                                {
                                                    c.Id,
                                                    c.TicketId,
                                                    c.Title,
                                                    c.Description,
                                                    c.OneOffAppointmentDate,
                                                    c.AppointmentStart,
                                                    c.AppointmentEnd,
                                                    c.OneOffStartTime,
                                                    c.OneOffEndTime,
                                                    c.NetAmount,
                                                    c.Priority,
                                                    PriorityStatus = c.Priority == 1 ? "High" : c.Priority == 2 ? "Medium" : "Low",
                                                    c.Status,
                                                    c.InvoiceNo,
                                                    c.CustomerName,
                                                    c.CustomerEmail,
                                                    c.CustomerCompanyName,
                                                    c.CustomerContactNo,
                                                    c.CustomerAddress,
                                                    c.InternalNoteDescription,
                                                    c.CustomerId,
                                                    c.PropertyId,
                                                    c.Reallocate,
                                                    c.Rescheduled,
                                                    c.OneOffScheduled,
                                                    c.Terms,
                                                    c.TermsAndConditions,
                                                    c.TicketClosedDate,
                                                    c.TicketType,
                                                    c.Rating,
                                                    c.RatingFeedback,
                                                    TicketTeams = (from r in _context.TicketTeam
                                                                   where r.TicketId == c.Id
                                                                   select new
                                                                   {
                                                                       r.Id,
                                                                       r.TicketId,
                                                                       r.Type,
                                                                       r.IsFree,
                                                                       r.EngineerName,
                                                                       EngineerLogo = r.EngineerLogo.Length == 0 ? "" : r.EngineerLogo,
                                                                       r.EngineerId,
                                                                       r.AppointmentStartTime,
                                                                       r.AppointmentEndTime,
                                                                       r.TicketAssignDate
                                                                   })
                                                               .ToList(),
                                                    TicketAttachments = (from c1 in _context.TicketAttachment where c1.TicketId == c.Id select c1).ToList(),
                                                    TicketItems = (from c1 in _context.TicketItem where c1.TicketId == c.Id select c1).ToList(),
                                                    Customers = (from c1 in _context.Customer where c1.Id == c.CustomerId select c1).FirstOrDefault(),
                                                    Properties = (from c1 in _context.Property where c1.Id == c.PropertyId select c1).FirstOrDefault(),
                                                    TicketWiseIssueType = (from c1 in _context.TicketWiseIssueType where c1.TicketId == c.Id select c1).ToList()
                                                }).OrderByDescending(c => c.OneOffAppointmentDate).ToListAsync();
                                break;
                        }
                    }
                    #endregion
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
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
        #endregion
    }
}