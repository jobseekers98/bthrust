using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static GenicSolution.Entities.GlobalParameters;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;

        public CalendarController(EntityFrameworkDbContext context)
        {
            _context = context;
        }

        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetTicketforCalendar(Guid token)
        {
            var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
            var result = await (from c in _context.Ticket where UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId select c)
                .Include(c => c.TicketTeams)
                .OrderBy(c => c.OneOffAppointmentDate)
                .ThenBy(c => c.OneOffStartTime)
                .ToListAsync();
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        [HttpGet("[action]/{Token}/{date}")]
        public async Task<ActionResult> GetEngineerList(Guid Token, string date)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    int _year = Convert.ToInt32(date.Substring(0, 4));
                    int _month = Convert.ToInt32(date.Substring(4, 2));
                    int _day = Convert.ToInt32(date.Substring(6, 2));
                    var result = (from tt in _context.TicketTeam
                                  join s in _context.Ticket on tt.TicketId equals s.Id
                                  join e in _context.Engineer on tt.EngineerId equals e.Id
                                  where s.OneOffAppointmentDate.Value.Year == _year
                                  where s.OneOffAppointmentDate.Value.Month == _month
                                  where s.OneOffAppointmentDate.Value.Day == _day
                                  group new { tt } by new { tt.EngineerName, e.EngineerLogo, tt.EngineerId }
                                       into grp
                                  select new
                                  {
                                      Count = grp.Count(),
                                      grp.Key.EngineerName,
                                      grp.Key.EngineerLogo,
                                      grp.Key.EngineerId,
                                      EngineerMobile = (from e in _context.Engineer where e.Id == grp.Key.EngineerId select e.EngineerPhone).FirstOrDefault(),

                                      RemaningTask = grp.Count() - (from its in _context.Ticket
                                                                    join itt in _context.TicketTeam on its.Id equals itt.TicketId
                                                                    where its.OneOffAppointmentDate.Value.Year == _year &&
                                                                    its.OneOffAppointmentDate.Value.Month == _month &&
                                                                    its.OneOffAppointmentDate.Value.Day == _day &&
                                                                    (its.Status == "CLOSED" || its.Status == "CANCELED")
                                                                    && itt.EngineerId == grp.Key.EngineerId
                                                                    select itt).Count()
                                  });
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
        [HttpGet("[action]/{token}/{EngineerId}/{date}")]
        public async Task<ActionResult> GetEngineerLeftTaskList(Guid token, Guid EngineerId, string date)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    int _year = Convert.ToInt32(date.Substring(0, 4));
                    int _month = Convert.ToInt32(date.Substring(4, 2));
                    int _day = Convert.ToInt32(date.Substring(6, 2));
                    var result = (from lt in _context.Ticket
                                  join ltt in _context.TicketTeam on lt.Id equals ltt.TicketId
                                  where ltt.EngineerId == EngineerId
                                  where lt.OneOffAppointmentDate.Value.Year == _year &&
                                                       lt.OneOffAppointmentDate.Value.Month == _month &&
                                                      lt.OneOffAppointmentDate.Value.Day == _day
                                  select new
                                  {
                                      lt.Id,
                                      lt.TicketId,
                                      lt.OneOffAppointmentDate,
                                      lt.CustomerAddress,
                                      lt.Status
                                  }).ToList();
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
        [HttpGet("[action]/{Token}/{date}")]
        public async Task<ActionResult> GetTicketList(Guid Token, string date)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    int _year = Convert.ToInt32(date.Substring(0, 4));
                    int _month = Convert.ToInt32(date.Substring(4, 2));
                    int _day = Convert.ToInt32(date.Substring(6, 2));
                    var result = await (from tt in _context.Ticket
                                  join c in _context.Customer on tt.CustomerId equals c.Id
                                  join p in _context.Property on tt.PropertyId equals p.Id
                                  where tt.OneOffAppointmentDate.Value.Year == _year
                                  where tt.OneOffAppointmentDate.Value.Month == _month
                                  where tt.OneOffAppointmentDate.Value.Day == _day
                                  select new
                                  {
                                      tt.Id,
                                      tt.TicketId,
                                      CustomerName = c.NameTitle + " " + c.FirstName + " " + c.LastName,
                                      CustomerAddress = p.AddressStreet1 + " " + p.AddressStreet2 + ", " + p.AddressCity + " " + p.AddressState + ", " + p.AddressCountry + " " + p.AddressZipCode,
                                      tt.OneOffStartTime,
                                      tt.OneOffEndTime,
                                      p.Latitude,
                                      p.Longitude,
                                      tt.Status
                                  }).ToListAsync();
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
        [HttpGet("[action]/{token}/{TicketId}")]
        public async Task<ActionResult> GetTicketDetails(Guid token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var result = await (from tt in _context.Ticket
                                        join c in _context.Customer on tt.CustomerId equals c.Id
                                        join p in _context.Property on tt.PropertyId equals p.Id
                                        where tt.Id == TicketId
                                        select new
                                        {
                                            tt.Id,
                                            tt.TicketId,
                                            tt.Title,
                                            tt.Description,
                                            tt.Status,
                                            tt.OneOffStartTime,
                                            tt.OneOffEndTime,
                                            GenerateDate = tt.CreatedUtcDate,
                                            CustomerName = c.NameTitle + " " + c.FirstName + " " + c.LastName,
                                            CustomerAddress = p.AddressStreet1 + " " + p.AddressStreet2 + ", " + p.AddressCity + " " + p.AddressState + ", " + p.AddressCountry + " " + p.AddressZipCode,
                                            CustomerContactNo = (from m in _context.ArrayofKey where m.CustomerId == tt.CustomerId && m.IsDefault == true && m.Type == "Phone" select m.Value).FirstOrDefault(),
                                            CustomerEmail = (from m in _context.ArrayofKey where m.CustomerId == tt.CustomerId && m.IsDefault == true && m.Type == "Email" select m.Value).FirstOrDefault(),
                                            p.Latitude,
                                            p.Longitude,
                                            List = (from e in _context.TicketTeam
                                                    where e.TicketId == tt.Id
                                                    select new
                                                    {
                                                        e.EngineerName,
                                                        e.EngineerLogo,
                                                        Type = (from e1 in _context.Engineer where e1.Id == e.EngineerId select e1.Type).FirstOrDefault()
                                                    }).ToList(),
                                            Logs = (from u in _context.UserLog where u.Module == "Ticket" && u.ModuleId == tt.Id select new { u.RecentDescription, u.LogDate }).ToList()
                                        }).FirstOrDefaultAsync();
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
        public async Task<ActionResult> GetEngineerHistory(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    var result = await (from e in _context.EngineerLocation
                                        where e.LastLocation == true
                                        select new
                                        {
                                            e.EngineerId,
                                            EngineerName = (from n in _context.Engineer where n.Id == e.EngineerId select n.EngineerName).FirstOrDefault(),
                                            EngineerLogo = (from n in _context.Engineer where n.Id == e.EngineerId select n.EngineerLogo).FirstOrDefault(),
                                            e.Latitude,
                                            e.Longitude,
                                            e.LocationAddress,
                                            LocationDate = Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone) - (DateTime)e.LocationDate).TotalMinutes) < 60 ?
                                                           Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone) - (DateTime)e.LocationDate).TotalMinutes) + " minutes ago" :
                                                           Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone) - (DateTime)e.LocationDate).TotalHours) < 24 ?
                                                           Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone) - (DateTime)e.LocationDate).TotalHours) + " hours ago" :
                                                           Convert.ToInt32((GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone) - (DateTime)e.LocationDate).TotalDays) + " days ago"
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
        /// Resource View Methods Begin
        [HttpPost("[action]/{token}")]
#pragma warning disable CS1998 // This async method lacks 'await' operators and will run synchronously. Consider using the 'await' operator to await non-blocking API calls, or 'await Task.Run(...)' to do CPU-bound work on a background thread.
        public async Task<ActionResult> GetResourceViewList(RecourceParam recourceparam, Guid token)
#pragma warning restore CS1998 // This async method lacks 'await' operators and will run synchronously. Consider using the 'await' operator to await non-blocking API calls, or 'await Task.Run(...)' to do CPU-bound work on a background thread.
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var CustomerList1 = new List<Ticket>();
                    var CustomerList2 = new List<Ticket>();
                    var TicketList1 = new List<Ticket>();
                    var TicketList2 = new List<Ticket>();
                    var EngineerList1 = new List<Engineer>();
                    var EngineerList2 = new List<Engineer>();
                    if (recourceparam.CustomerId.Count == 0)
                    {
                        CustomerList2 = _context.Ticket.ToList();
                    }
                    else
                    {
                        foreach (var item in recourceparam.CustomerId)
                        {
                            CustomerList1 = (from t in _context.Ticket where t.CustomerId == item select t).ToList();
                            foreach (var item2 in CustomerList1)
                            {
                                CustomerList2.Add(item2);
                            }
                        }
                    }

                    if (recourceparam.EngineerId.Count == 0)
                    {
                        EngineerList2 = (from t in _context.Engineer where t.Working == true select t).ToList();
                    }
                    else
                    {
                        foreach (var item in recourceparam.EngineerId)
                        {
                            EngineerList1 = (from t in _context.Engineer where t.Working == true && t.Id == item select t).ToList();
                            foreach (var item2 in EngineerList1)
                            {
                                EngineerList2.Add(item2);
                            }
                        }
                    }

                    if (recourceparam.Status.Count == 0)
                    {
                        TicketList2 = CustomerList2;
                    }
                    else
                    {
                        foreach (var item in recourceparam.Status)
                        {
                            if (item == "UNALLOCATED")
                            {
                                TicketList1 = (from t in CustomerList2 where t.TicketTeams.Count == 0 select t).ToList();
                                foreach (var item2 in TicketList1)
                                {
                                    TicketList2.Add(item2);
                                }
                            }
                            else
                            {
                                TicketList1 = (from t in CustomerList2 where t.Status == item select t).ToList();
                                foreach (var item2 in TicketList1)
                                {
                                    TicketList2.Add(item2);
                                }
                            }
                        }
                    }

                    var Item1 = (from d in EngineerList2
                                 where d.Working == true
                                 select new { id = d.Id.ToString(), title = d.EngineerName, eventColor = d.Color }).OrderBy(d => d.title).ToList();

                    var Item2 = (from t in TicketList2
                                 join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                 where t.IsReady == true
                                 select new
                                 {
                                     id = t.Id.ToString(),
                                     resourceId = tt.EngineerId.ToString(),
                                     start = Convert.ToDateTime(t.AppointmentStart).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss"),
                                     end = Convert.ToDateTime(t.AppointmentEnd).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss"),
                                     title = t.TicketId + " | " + t.Title + " | " + t.CustomerCompanyName,
                                 }).ToList();
                    var result3 = (from e in _context.GenicProfileCalendar
                                   where e.LeaveFor == 2 && (e.Status == "Pending" || e.Status == "Approved")
                                   select new
                                   {
                                       id = "0",
                                       resourceId = e.EngineerId.ToString().ToLower(),
                                       start = Convert.ToDateTime(e.Date + e.StartTime).ToString("yyyy-MM-ddTHH:mm:ss"),
                                       end = Convert.ToDateTime(e.Date + e.EndTime).ToString("yyyy-MM-ddTHH:mm:ss"),
                                       title = e.Status + " Leave for : " + e.Description
                                   }).ToList();
                    foreach (var item in result3)
                    {
                        Item2.Add(item);
                    }
                    return StatusCode(200, new { result = "", Item1, Item2, Message = "success", MessageDescription = "success" });
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
        /// Resource View Methods End

        /// Resource view | Time resize event
        [HttpPut("[action]/{Token}")]
        public ActionResult ResourceViewDraggableEvent(Ticket ticket, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    Task.Yield();
                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    var result = (from c in _context.Ticket
                                  where c.Id == ticket.Id &&
                                  (c.Status == "UPCOMING" || c.Status == "OVERDUE" || c.Status == "HOLD")
                                  select c).FirstOrDefault();
                    if (result == null)
                    {
                        string tstatus = (from t in _context.Ticket where t.Id == ticket.Id select t.Status).FirstOrDefault();
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Action is Denied! Ticket status is " + tstatus });
                    }
                    else
                    {
                        DateTime appstartdateo = (DateTime)ticket.OneOffAppointmentDate;
                        string appdateo = appstartdateo.Date.ToString("yyyy-MM-dd");
                        ticket.AppointmentStart = appdateo + "T" + ticket.OneOffStartTime + "Z";
                        ticket.AppointmentEnd = appdateo + "T" + ticket.OneOffEndTime + "Z";
                        var newEngineer = (from c in _context.Engineer where c.Id == ticket.PropertyId select c).FirstOrDefault();
                        DateTime d1 = Convert.ToDateTime(ticket.AppointmentStart).ToUniversalTime();
                        DateTime d2 = Convert.ToDateTime(ticket.AppointmentEnd).ToUniversalTime();

                        var ticketteam = _context.TicketTeam.Where(c => c.EngineerId == ticket.PropertyId && c.TicketId == ticket.Id).FirstOrDefault();
                        ticketteam.AppointmentStartTime = null;
                        ticketteam.AppointmentEndTime = null;
                        _context.Entry(ticketteam).State = EntityState.Modified;
                        _context.SaveChanges();
                        Task.Delay(500);
                        if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)newEngineer.Id))
                        {
                            DateTime appstartdate = (DateTime)ticket.OneOffAppointmentDate;
                            string appdate = appstartdate.Date.ToString("yyyy-MM-dd");
                            result.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z";
                            result.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                            result.OneOffStartTime = ticket.OneOffStartTime;
                            result.OneOffEndTime = ticket.OneOffEndTime;
                            result.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                            result.Rescheduled = true;
                            result.Status = "UPCOMING";
                            result.OneOffScheduled = false;
                            result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            _context.Entry(result).State = EntityState.Modified;

                            var ticketteam1 = _context.TicketTeam.Where(c => c.EngineerId == ticket.PropertyId && c.TicketId == ticket.Id).FirstOrDefault();
                            DateTime? sd = Convert.ToDateTime(result.AppointmentStart).ToUniversalTime();
                            ticketteam1.AppointmentStartTime = sd.Value.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                            DateTime? ed = Convert.ToDateTime(result.AppointmentEnd).ToUniversalTime();
                            ticketteam1.AppointmentEndTime = ed.Value.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                            ticketteam1.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            _context.Entry(ticketteam1).State = EntityState.Modified;

                            _context.SaveChanges();
                            #region Send Notification
                            var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                            var tickettemp = (from g in _context.Ticket where g.Id == ticket.Id select g).FirstOrDefault();
                            var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Reschedule Ticket" select t).FirstOrDefault();
                            var engdetails = (from s in _context.Login where s.Id == ticketteam1.EngineerId select s).FirstOrDefault();
                            var tempREsInAppNotification = string.Empty;
                            tempREsInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + tickettemp.Title + "")
                              .Replace("CUSTOMER_NAME", "" + tickettemp.CustomerName + "")
                              .Replace("CUSTOMER_COMPANY", "" + tickettemp.CustomerCompanyName + "")
                              .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                              .Replace("TICKET_NO", "" + tickettemp.TicketId + "")
                              .Replace("ADDRESS", "" + tickettemp.CustomerAddress + "")
                              .Replace("APPOINTMENT_DATE", "" + tickettemp.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                              .Replace("APPOINTMENT_TIME", "" + tickettemp.OneOffStartTime + "")
                              .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                              .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                              .Replace("ENGINEER_NAME", "" + ticketteam1.EngineerName + "");
                            new PushNotification(engdetails.AppToken, "Reschedule Service", tempREsInAppNotification);
                            #endregion
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Allocated and scheduled successfully" });
                        }
                        else
                        {
                            var ticketteam1 = _context.TicketTeam.Where(c => c.EngineerId == ticket.PropertyId && c.TicketId == ticket.Id).FirstOrDefault();
                            DateTime? sd = Convert.ToDateTime(result.AppointmentStart).ToUniversalTime();
                            ticketteam1.AppointmentStartTime = sd.Value.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                            DateTime? ed = Convert.ToDateTime(result.AppointmentEnd).ToUniversalTime();
                            ticketteam1.AppointmentEndTime = ed.Value.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                            ticketteam1.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            _context.Entry(ticketteam1).State = EntityState.Modified;
                            _context.SaveChanges();
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Engineer unavailable on this time duration" });
                        }
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

        /// Resource view | Engineer change event 
        [HttpPut("[action]/{Token}")]
        public ActionResult ResourceViewDropableEvent(Ticket ticket, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    Task.Yield();
                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    var result = (from c in _context.Ticket
                                  where c.Id == ticket.Id &&
                                  (c.Status == "UPCOMING" || c.Status == "OVERDUE" || c.Status == "HOLD" || c.Status == "UNSCHEDULED")
                                  select c).FirstOrDefault();
                    if (result == null)
                    {
                        string tstatus = (from t in _context.Ticket where t.Id == ticket.Id select t.Status).FirstOrDefault();
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Action is Denied! Ticket status is " + tstatus });
                    }
                    else
                    {
                        DateTime appstartdateo = (DateTime)ticket.OneOffAppointmentDate;
                        string appdateo = appstartdateo.Date.ToString("yyyy-MM-dd");
                        ticket.AppointmentStart = appdateo + "T" + ticket.OneOffStartTime + "Z";
                        ticket.AppointmentEnd = appdateo + "T" + ticket.OneOffEndTime + "Z";
                        var newEngineer = (from c in _context.Engineer where c.Id == ticket.PropertyId select c).FirstOrDefault();
                        DateTime d1 = Convert.ToDateTime(ticket.AppointmentStart).ToUniversalTime();
                        DateTime d2 = Convert.ToDateTime(ticket.AppointmentEnd).ToUniversalTime();
                        if (EngineerIsAvalableOrNot(d1.ToString("yyyyMMddHHMMss"), d2.ToString("yyyyMMddHHMMss"), (Guid)newEngineer.Id))
                        {
                            DateTime appstartdate = (DateTime)ticket.OneOffAppointmentDate;
                            string appdate = appstartdate.Date.ToString("yyyy-MM-dd");
                            result.AppointmentStart = appdate + "T" + ticket.OneOffStartTime + "Z";
                            result.AppointmentEnd = appdate + "T" + ticket.OneOffEndTime + "Z";
                            result.OneOffStartTime = ticket.OneOffStartTime;
                            result.OneOffEndTime = ticket.OneOffEndTime;
                            result.OneOffAppointmentDate = ticket.OneOffAppointmentDate;
                            result.Reallocate = true;
                            result.Status = "UPCOMING";
                            result.OneOffScheduled = false;
                            result.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            _context.Entry(result).State = EntityState.Modified;

                            TicketTeam obj = new TicketTeam();
                            obj.TicketId = ticket.Id;
                            obj.EngineerId = newEngineer.Id;
                            obj.EngineerName = newEngineer.EngineerName;
                            obj.EngineerLogo = newEngineer.EngineerLogo;
                            DateTime? sd = Convert.ToDateTime(result.AppointmentStart).ToUniversalTime();
                            obj.AppointmentStartTime = sd.Value.AddMinutes(-Convert.ToDouble(GTimeZone.BufferTime));
                            DateTime? ed = Convert.ToDateTime(result.AppointmentEnd).ToUniversalTime();
                            obj.AppointmentEndTime = ed.Value.AddMinutes(Convert.ToDouble(GTimeZone.BufferTime));
                            obj.TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                            obj.IsFree = false;
                            obj.Type = (from en in _context.Engineer where en.Id == newEngineer.Id select en.Type).FirstOrDefault();
                            _context.TicketTeam.Add(obj);
                            _context.SaveChanges();
                            #region Send Notification
                            var genicProfile = (from g in _context.GenicProfile select g).FirstOrDefault();
                            var tickettemp = (from g in _context.Ticket where g.Id == ticket.Id select g).FirstOrDefault();
                            var templateResult = (from t in _context.NotificationTemplate where t.ModuleName == "Create Ticket" select t).FirstOrDefault();
                            var engdetails = (from s in _context.Login where s.Id == newEngineer.Id select s).FirstOrDefault();
                            var tempREsInAppNotification = string.Empty;
                            tempREsInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + tickettemp.Title + "")
                              .Replace("CUSTOMER_NAME", "" + tickettemp.CustomerName + "")
                              .Replace("CUSTOMER_COMPANY", "" + tickettemp.CustomerCompanyName + "")
                              .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                              .Replace("TICKET_NO", "" + tickettemp.TicketId + "")
                              .Replace("ADDRESS", "" + tickettemp.CustomerAddress + "")
                              .Replace("APPOINTMENT_DATE", "" + tickettemp.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                              .Replace("APPOINTMENT_TIME", "" + tickettemp.OneOffStartTime + "")
                              .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                              .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                              .Replace("ENGINEER_NAME", "" + newEngineer.EngineerName + "");
                            new PushNotification(engdetails.AppToken, "Service Request", tempREsInAppNotification);
                            #endregion

                            var PreviousTeamList = _context.TicketTeam.Where(c => c.EngineerId == ticket.CustomerId && c.TicketId == ticket.Id).FirstOrDefault();
                            if (PreviousTeamList != null)
                            {
                                _context.Remove(PreviousTeamList);
                                var tempEngInAppNotification = string.Empty;
                                tempEngInAppNotification = templateResult.MobileNotification.Replace("TICKET_TITLE", "" + tickettemp.Title + "")
                                  .Replace("CUSTOMER_NAME", "" + tickettemp.CustomerName + "")
                                  .Replace("CUSTOMER_COMPANY", "" + tickettemp.CustomerCompanyName + "")
                                  .Replace("COMPANY_NAME", "" + genicProfile.Name + "")
                                  .Replace("TICKET_NO", "" + tickettemp.TicketId + "")
                                  .Replace("ADDRESS", "" + tickettemp.CustomerAddress + "")
                                  .Replace("APPOINTMENT_DATE", "" + tickettemp.OneOffAppointmentDate.Value.Date.ToString("dd-MM-yyyy") + "")
                                  .Replace("APPOINTMENT_TIME", "" + tickettemp.OneOffStartTime + "")
                                  .Replace("COMPANY_LANDLINE", "" + genicProfile.ContactNumber + "")
                                  .Replace("COMPANY_EMAIL", "" + genicProfile.Email + "")
                                  .Replace("ENGINEER_NAME", "" + PreviousTeamList.EngineerName + "");
                                var engdetails2 = (from s in _context.Login where s.Id == PreviousTeamList.EngineerId select s).FirstOrDefault();
                                Task.Delay(200);
                                new PushNotification(engdetails2.AppToken, "Cancellation", tempEngInAppNotification);
                            }
                            _context.SaveChanges();
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Allocated and scheduled successfully" });
                        }
                        else
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Engineer unavailable on this time duration" });
                        }
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
    }
}
