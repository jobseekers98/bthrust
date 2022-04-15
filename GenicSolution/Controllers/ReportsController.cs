using ExcelDataReader;
using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public ReportsController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        [HttpGet("[action]/{token}/{StartDate}/{EndDate}/{type}/{CustomerId}/{Status}")]
        public async Task<ActionResult> TicketReports(Guid token, string StartDate, string EndDate, bool type, Guid CustomerId, string Status)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                string tickettype = "One-Off Ticket";
                string st = StartDate.Substring(0, 4) + "-" + StartDate.Substring(4, 2) + "-" + StartDate.Substring(6, 2) + " 00:00:00";
                string et = EndDate.Substring(0, 4) + "-" + EndDate.Substring(4, 2) + "-" + EndDate.Substring(6, 2) + " 23:59:59";
                DateTime startdate = Convert.ToDateTime(st);
                DateTime enddate = Convert.ToDateTime(et);
                Guid nullguid = Guid.Parse(ConstantParameters.NULL_GUID_STRING);

                if (type) { tickettype = "Recurring Ticket"; } else { tickettype = "One-Off Ticket"; }
                var result = await (from t in _context.Ticket
                                    where t.TicketType == tickettype
                                    where Status == "ALL" ? t.Status != "ALL" : t.Status == Status
                                    where CustomerId == nullguid ? t.CustomerId != CustomerId : t.CustomerId == CustomerId
                                    where (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                                    where t.IsReady == true
                                    select new
                                    {
                                        t.TicketId,
                                        Created = t.CreatedUtcDate,
                                        t.CustomerName,
                                        t.CustomerCompanyName,
                                        t.Title,
                                        t.AppointmentStart,
                                        t.AppointmentEnd,
                                        t.Status,
                                        EngineerName = (from tt in _context.TicketTeam join e in _context.Engineer on tt.EngineerId equals e.Id where tt.TicketId == t.Id select e.EngineerName).FirstOrDefault(),
                                        Email = t.CustomerEmail
                                    }).ToListAsync();
                var customerlist = (from t in _context.Customer where t.IsReady == true  orderby t.CustomerId select new { t.Id, Name = t.NameTitle + " " + t.FirstName + " " + t.LastName }).ToList();
                return StatusCode(200, new { result, customerlist, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}/{dFrom}/{dTo}/{type}")]
        public async Task<ActionResult> EngineerReports(Guid token, string dFrom, string dTo, string type)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                object result;
                var result0 = await (from e in _context.TicketTeam select e.EngineerId).Distinct().ToListAsync();
                if (type == "alldata")
                {
                    try
                    {
                        result = (from e in result0
                                  select new
                                  {
                                      EngineerId = (from en in _context.Engineer where en.Id == e select en.EngineerId).FirstOrDefault(),
                                      EngineerName = (from en in _context.Engineer where en.Id == e select en.EngineerName).FirstOrDefault(),
                                      TotalAlloted = (from t in _context.Ticket
                                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                      where t.IsReady == true && tt.EngineerId == e
                                                      select t.Id).Count(),
                                      TotalCompleted = (from t in _context.Ticket
                                                        join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                        where t.IsReady == true && tt.EngineerId == e && t.Status == "CLOSED"
                                                        select t.Id).Count(),
                                      TotalTimeTaken = (from m in (from tm in _context.TicketTimer where tm.EngineerId == e && tm.StartDate != null && tm.EndDate != null select (tm.EndDate - tm.StartDate).Value.Minutes).ToList()
                                                        select m).Sum(),
                                      AverageTimeTakenTicket = (from m in (from tm in _context.TicketTimer where tm.EngineerId == e && tm.StartDate != null && tm.EndDate != null select (tm.EndDate - tm.StartDate).Value.Minutes).ToList()
                                                                select m).Sum() / (from t in _context.Ticket
                                                                                   join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                                                   where t.IsReady == true && tt.EngineerId == e
                                                                                   select t.Id).Count(),

                                  }).ToList();
                    }
                    catch
                    {
                        var lst2 = new List<object>();
                        result = lst2;
                    }

                }
                else
                {
                    string st = dFrom.Substring(0, 4) + "-" + dFrom.Substring(4, 2) + "-" + dFrom.Substring(6, 2) + " 00:00:00";
                    string et = dTo.Substring(0, 4) + "-" + dTo.Substring(4, 2) + "-" + dTo.Substring(6, 2) + " 23:59:59";
                    DateTime startdate = Convert.ToDateTime(st);
                    DateTime enddate = Convert.ToDateTime(et);
                    try
                    {
                        result = (from e in result0
                                  select new
                                  {
                                      EngineerId = (from en in _context.Engineer where en.Id == e select en.EngineerId).FirstOrDefault(),
                                      EngineerName = (from en in _context.Engineer where en.Id == e select en.EngineerName).FirstOrDefault(),
                                      TotalAlloted = (from t in _context.Ticket
                                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                      where t.IsReady == true && tt.EngineerId == e && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                                                      select t.Id).Count(),
                                      TotalCompleted = (from t in _context.Ticket
                                                        join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                        where t.IsReady == true && tt.EngineerId == e && t.Status == "CLOSED" && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                                                        select t.Id).Count(),
                                      TotalTimeTaken = (from m in (from tm in _context.TicketTimer
                                                                   join t in _context.Ticket on tm.TicketId equals t.Id
                                                                   where tm.EngineerId == e && tm.StartDate != null && tm.EndDate != null && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                                                                   select (tm.EndDate - tm.StartDate).Value.Minutes).ToList()
                                                        select m).Sum(),
                                      AverageTimeTakenTicket = (from m in (from tm in _context.TicketTimer
                                                                           join t in _context.Ticket on tm.TicketId equals t.Id
                                                                           where tm.EngineerId == e && tm.StartDate != null && tm.EndDate != null && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                                                                           select (tm.EndDate - tm.StartDate).Value.Minutes).ToList()
                                                                select m).Sum() / (from t in _context.Ticket
                                                                                   join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                                                                   where t.IsReady == true && tt.EngineerId == e
                                                                                   select t.Id).Count(),

                                  }).ToList();
                    }
                    catch
                    {
                        var lst2 = new List<object>();
                        result = lst2;
                    }
                }
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}/{dFrom}/{dTo}/{EngineerId}")]
        public ActionResult EngineerWiseReports(Guid token, string dFrom, string dTo, Guid EngineerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                Guid nullguid = Guid.Parse(ConstantParameters.NULL_GUID_STRING);
                string st = dFrom.Substring(0, 4) + "-" + dFrom.Substring(4, 2) + "-" + dFrom.Substring(6, 2) + " 00:00:00";
                string et = dTo.Substring(0, 4) + "-" + dTo.Substring(4, 2) + "-" + dTo.Substring(6, 2) + " 23:59:59";
                DateTime startdate = Convert.ToDateTime(st);
                DateTime enddate = Convert.ToDateTime(et);
                var offDayList = (from c in _context.GenicProfileCalendar where (c.Date >= startdate && c.Date <= enddate) && c.LeaveFor == 1 && c.IsWorking == false select c).ToList();
                var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var weekends = GetDaysBetween(new DateTime(startdate.Year, startdate.Month, startdate.Day), new DateTime(enddate.Year, enddate.Month, enddate.Day)).Where(d => !
                    ((d.DayOfWeek.ToString() == "Sunday") == genicprofile.Sunday ||
                    (d.DayOfWeek.ToString() == "Monday") == genicprofile.Monday ||
                    (d.DayOfWeek.ToString() == "Tuesday") == genicprofile.Tuesday ||
                    (d.DayOfWeek.ToString() == "Wednesday") == genicprofile.Wednesday ||
                    (d.DayOfWeek.ToString() == "Thursday") == genicprofile.Thursday ||
                    (d.DayOfWeek.ToString() == "Friday") == genicprofile.Friday ||
                    (d.DayOfWeek.ToString() == "Saturday") == genicprofile.Saturday));
                int cn = offDayList.Count();
                int id = 0;
                if (cn == 0) { id = 1; } else { id = offDayList[0].GenicProfileId; }
                foreach (var item in weekends)
                {
                    GenicProfileCalendar gpc = new GenicProfileCalendar
                    {
                        Id = 0,
                        GenicProfileId = id,
                        Description = "Weekly Off",
                        WorkType = "Full Day",
                        Date = item.Date
                    };
                    offDayList.Add(gpc);
                    cn++;
                }

                if (EngineerId != nullguid)
                {
                    var ttime = (from tm in _context.TicketTimer where tm.EngineerId == EngineerId && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select tm).ToList();
                    var WeekOffPH = new List<TicketTimer>();
                    foreach (var item in offDayList)
                    {
                        foreach (var item2 in ttime)
                        {
                            if (item.Date.Year == item2.StartDate.Value.Year && item.Date.Month == item2.StartDate.Value.Month && item.Date.Day == item2.StartDate.Value.Day)
                            {
                                WeekOffPH.Add(item2);
                            }
                        }
                    }
                    var expectTime = ttime.Except(WeekOffPH);

                    var EngineerName = (from en in _context.Engineer where en.Id == EngineerId select en).FirstOrDefault();
                    var TotalTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where tt.EngineerId == EngineerId && t.IsReady == true && t.Status == "CLOSED" && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate) select t).Count();
                    var TotalTime = (from m in (from tm in _context.TicketTimer where tm.EngineerId == EngineerId && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var TBRegular = (from m in (from tm in expectTime where tm.EndDate.Value.Hour <= genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var TBOT = (from m in (from tm in expectTime where tm.EndDate.Value.Hour > genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var WeekOffPHTime = (from m in (from tm in WeekOffPH select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();

                    var result = (from k in _context.GenicProfile
                                  select new
                                  {
                                      EId = EngineerName.Id,
                                      EngineerName = EngineerName.EngineerName,
                                      TotalTicket,
                                      TotalTime = GetDurationFromMinutes(TotalTime),
                                      TBRegular = GetDurationFromMinutes(TBRegular),
                                      TBOT = GetDurationFromMinutes(TBOT),
                                      WeekOffPHTime = GetDurationFromMinutes(WeekOffPHTime)
                                  }).ToList();

                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                }
                else
                {
                    var allengineer = (from tm in _context.Engineer where tm.Working == true && tm.IsReady == true select tm).ToList();
                    var FinalList = new List<object>();
                    foreach (var engitem in allengineer)
                    {
                        var ttime = (from tm in _context.TicketTimer where tm.EngineerId == engitem.Id && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select tm).ToList();
                        var WeekOffPH = new List<TicketTimer>();
                        foreach (var item in offDayList)
                        {
                            foreach (var item2 in ttime)
                            {
                                if (item.Date.Year == item2.StartDate.Value.Year && item.Date.Month == item2.StartDate.Value.Month && item.Date.Day == item2.StartDate.Value.Day)
                                {
                                    WeekOffPH.Add(item2);
                                }
                            }
                        }
                        var expectTime = ttime.Except(WeekOffPH);

                        var EngineerName = (from en in _context.Engineer where en.Id == engitem.Id select en).FirstOrDefault();
                        var TotalTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where tt.EngineerId == engitem.Id && t.IsReady == true && t.Status == "CLOSED" && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate) select t).Count();
                        var TotalTime = (from m in (from tm in _context.TicketTimer where tm.EngineerId == engitem.Id && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                        var TBRegular = (from m in (from tm in expectTime where tm.EndDate.Value.Hour <= genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                        var TBOT = (from m in (from tm in expectTime where tm.EndDate.Value.Hour > genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                        var WeekOffPHTime = (from m in (from tm in WeekOffPH select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();

                        FinalList.Add(new
                        {
                            EId = EngineerName.Id,
                            EngineerName = EngineerName.EngineerName,
                            TotalTicket,
                            TotalTime = GetDurationFromMinutes(TotalTime),
                            TBRegular = GetDurationFromMinutes(TBRegular),
                            TBOT = GetDurationFromMinutes(TBOT),
                            WeekOffPHTime = GetDurationFromMinutes(WeekOffPHTime)
                        });
                    }
                    return StatusCode(200, new { result = FinalList, Message = "success", MessageDescription = "success" });
                }


            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}/{dFrom}/{dTo}/{EngineerId}")]
        public ActionResult EngineerWise2Reports(Guid token, string dFrom, string dTo, Guid EngineerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                Guid nullguid = Guid.Parse(ConstantParameters.NULL_GUID_STRING);
                string st = dFrom.Substring(0, 4) + "-" + dFrom.Substring(4, 2) + "-" + dFrom.Substring(6, 2) + " 00:00:00";
                string et = dTo.Substring(0, 4) + "-" + dTo.Substring(4, 2) + "-" + dTo.Substring(6, 2) + " 23:59:59";
                DateTime startdate = Convert.ToDateTime(st);
                DateTime enddate = Convert.ToDateTime(et);
                var offDayList = (from c in _context.GenicProfileCalendar where (c.Date >= startdate && c.Date <= enddate) && c.LeaveFor == 1 && c.IsWorking == false select c).ToList();
                var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var weekends = GetDaysBetween(new DateTime(startdate.Year, startdate.Month, startdate.Day), new DateTime(enddate.Year, enddate.Month, enddate.Day)).Where(d => !
                    ((d.DayOfWeek.ToString() == "Sunday") == genicprofile.Sunday ||
                    (d.DayOfWeek.ToString() == "Monday") == genicprofile.Monday ||
                    (d.DayOfWeek.ToString() == "Tuesday") == genicprofile.Tuesday ||
                    (d.DayOfWeek.ToString() == "Wednesday") == genicprofile.Wednesday ||
                    (d.DayOfWeek.ToString() == "Thursday") == genicprofile.Thursday ||
                    (d.DayOfWeek.ToString() == "Friday") == genicprofile.Friday ||
                    (d.DayOfWeek.ToString() == "Saturday") == genicprofile.Saturday));
                int cn = offDayList.Count();
                int id = 0;
                if (cn == 0) { id = 1; } else { id = offDayList[0].GenicProfileId; }
                foreach (var item in weekends)
                {
                    GenicProfileCalendar gpc = new GenicProfileCalendar
                    {
                        Id = 0,
                        GenicProfileId = id,
                        Description = "Weekly Off",
                        WorkType = "Full Day",
                        Date = item.Date
                    };
                    offDayList.Add(gpc);
                    cn++;
                }
                var ticketlist = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where tt.EngineerId == EngineerId && t.IsReady == true && t.Status == "CLOSED" && (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate) select t.Id).ToList();
                var FinalList = new List<object>();
                foreach (var ticketitem in ticketlist)
                {
                    var ttime = (from tm in _context.TicketTimer where tm.EngineerId == EngineerId && tm.TicketId == ticketitem && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select tm).ToList();
                    var WeekOffPH = new List<TicketTimer>();
                    foreach (var item in offDayList)
                    {
                        foreach (var item2 in ttime)
                        {
                            if (item.Date.Year == item2.StartDate.Value.Year && item.Date.Month == item2.StartDate.Value.Month && item.Date.Day == item2.StartDate.Value.Day)
                            {
                                WeekOffPH.Add(item2);
                            }
                        }
                    }
                    var expectTime = ttime.Except(WeekOffPH);

                    var EngineerName = (from en in _context.Engineer where en.Id == EngineerId select en.EngineerName).FirstOrDefault();
                    var Ticket = (from en in _context.Ticket where en.Id == ticketitem select new { en.TicketId, en.OneOffAppointmentDate, en.CustomerCompanyName, en.CustomerAddress }).FirstOrDefault();
                    var TimeInOut = (from en in _context.TicketTimer where en.TicketId == ticketitem select new { en.StartDate, en.EndDate }).FirstOrDefault();
                    var TotalTime = (from m in (from tm in _context.TicketTimer where tm.EngineerId == EngineerId && tm.TicketId == ticketitem && tm.StartDate != null && tm.EndDate != null && (tm.StartDate >= startdate && tm.StartDate <= enddate) select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var TBRegular = (from m in (from tm in expectTime where tm.EndDate.Value.Hour <= genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var TBOT = (from m in (from tm in expectTime where tm.EndDate.Value.Hour > genicprofile.OTAfter select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();
                    var WeekOffPHTime = (from m in (from tm in WeekOffPH select (tm.EndDate - tm.StartDate).Value.TotalSeconds).ToList() select m).Sum();

                    FinalList.Add(new
                    {
                        EngineerName,
                        Ticket,
                        TimeInOut,
                        TotalTime = GetDurationFromMinutes(TotalTime),
                        TBRegular = GetDurationFromMinutes(TBRegular),
                        TBOT = GetDurationFromMinutes(TBOT),
                        WeekOffPHTime = GetDurationFromMinutes(WeekOffPHTime)
                    });
                }
                return StatusCode(200, new { result = FinalList, Message = "success", MessageDescription = "success" });

            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        private IEnumerable<DateTime> GetDaysBetween(DateTime start, DateTime end)
        {
            for (DateTime i = start; i < end; i = i.AddDays(1))
            {
                yield return i;
            }
        }
        private string GetDurationFromMinutes(double secs)
        {
            TimeSpan t = TimeSpan.FromSeconds(secs);
            return string.Format("{0:D2}.{1:D2}:{2:D2}:{3:D2}", t.Days, t.Hours, t.Minutes, t.Seconds);
        }
        [HttpGet("[action]/{token}/{StartDate}/{EndDate}/{Status}/{Engineerid}/{TicketId}")]
        public ActionResult Visits(Guid token, string StartDate, string EndDate, string Status, Guid EngineerId, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                string st = StartDate.Substring(0, 4) + "-" + StartDate.Substring(4, 2) + "-" + StartDate.Substring(6, 2) + " 00:00:00";
                string et = EndDate.Substring(0, 4) + "-" + EndDate.Substring(4, 2) + "-" + EndDate.Substring(6, 2) + " 23:59:59";
                DateTime startdate = Convert.ToDateTime(st);
                DateTime enddate = Convert.ToDateTime(et);

                Guid nullguid = Guid.Parse(ConstantParameters.NULL_GUID_STRING);
                var result = (from tm in _context.TicketTimer
                              join t in _context.Ticket on tm.TicketId equals t.Id
                              where tm.Status == 2
                              where t.IsReady == true && t.AppointmentEnd != null && t.AppointmentStart != null
                              where Status == "ALL" ? t.Status != "ALL" : t.Status == Status
                              where EngineerId == nullguid ? tm.EngineerId != EngineerId : tm.EngineerId == EngineerId
                              where TicketId == nullguid ? t.Id != TicketId : t.Id == TicketId
                              where (t.OneOffAppointmentDate >= startdate && t.OneOffAppointmentDate <= enddate)
                              orderby tm.StartDate descending
                              select new
                              {
                                  VisitStart = tm.StartDate,
                                  VisitEnd = tm.EndDate,
                                  VisitDuration = (tm.EndDate - tm.StartDate),
                                  VisitEngineerName = (from en in _context.Engineer where en.Id == tm.EngineerId select en.EngineerName).FirstOrDefault(),
                                  TicketDetails = (from t in _context.Ticket
                                                   where t.Id == tm.TicketId
                                                   select new
                                                   {
                                                       t.TicketId,
                                                       Status = (from cl in _context.CloserDetails where cl.TimerID == tm.ID && cl.IsReady == true select cl.TicketFlag).FirstOrDefault(),
                                                       t.TicketType,
                                                       t.CustomerName,
                                                       t.CustomerCompanyName,
                                                       t.CustomerAddress,
                                                       t.CustomerEmail,
                                                   }).FirstOrDefault(),
                                  Scheduled = (from t in _context.Ticket
                                               where t.Id == tm.TicketId
                                               select new
                                               {
                                                   Start = t.AppointmentStart,
                                                   End = t.AppointmentEnd,
                                                   Duration = (DateTime.Parse(t.AppointmentEnd) - DateTime.Parse(t.AppointmentStart))
                                               }).FirstOrDefault(),
                              }).ToList();
                var ticketlist = (from t in _context.Ticket where t.IsReady == true && (t.Status == "HOLD" || t.Status == "CLOSED") orderby t.TicketId select new { t.Id, t.TicketId }).ToList();
                return StatusCode(200, new { result, ticketlist, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        [HttpGet("[action]/{token}/{StartDate}/{EndDate}/{CustomerId}/{ProductId}/{UniqId}")]
        public async Task<ActionResult> Warranty(Guid token, string StartDate, string EndDate, Guid CustomerId, Guid ProductId, string UniqId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
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
                                             ti.CreatedUtcDate,
                                             Type = ""
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
                                              w.CreatedUtcDate,
                                              w.Type
                                          }).ToListAsync();
                    foreach (var item in result01)
                    {
                        result1.Add(item);
                    }
                    var result2 = (from p in result1
                                   where CustomerId == nullguid ? p.CustomerId != CustomerId : p.CustomerId == CustomerId
                                   where ProductId == nullguid ? p.ProductId != ProductId : p.ProductId == ProductId
                                   orderby p.CreatedUtcDate descending
                                   select new
                                   {
                                       p.Id,
                                       ItemName = p.ItemName == null ? "-" : p.ItemName,
                                       UniqId = p.UniqId == null ? "-" : p.UniqId,
                                       p.InstallationDate,
                                       p.ExpiryDate,
                                       Customer = p.Customer == null ? "-" : p.Customer,
                                       p.IsFrom,
                                       Status = p.ExpiryDate > DateTime.UtcNow.AddHours(8).AddDays(1) ? "Active" : "Expired",
                                       TicketId = p.TicketId == null ? "-" : p.TicketId,
                                       p.CreatedUtcDate,
                                       p.Type
                                   }).ToList();

                    var result3 = result2;
                    if (UniqId != "ALL")
                    {
                        result3 = (from t in result2
                                   where t.UniqId.ToLower().Contains(UniqId.ToLower()) ||
                                   t.ItemName.ToLower().Contains(UniqId.ToLower()) ||
                                   t.TicketId.ToLower().Contains(UniqId.ToLower()) ||
                                   t.Status.ToLower().Contains(UniqId.ToLower()) ||
                                   t.Customer.ToLower().Contains(UniqId.ToLower())
                                   orderby t.CreatedUtcDate descending
                                   select t).ToList();
                    }
                    if (StartDate != "00000000" && EndDate != "00000000")
                    {
                        try
                        {
                            string st = StartDate.Substring(0, 4) + "-" + StartDate.Substring(4, 2) + "-" + StartDate.Substring(6, 2) + " 00:00:00";
                            string et = EndDate.Substring(0, 4) + "-" + EndDate.Substring(4, 2) + "-" + EndDate.Substring(6, 2) + " 23:59:59";
                            DateTime startdate = Convert.ToDateTime(st);
                            DateTime enddate = Convert.ToDateTime(et);
                            var result = (from t in result3
                                          where (t.InstallationDate >= startdate && t.InstallationDate <= enddate) ||
                                           (t.ExpiryDate >= startdate && t.ExpiryDate <= enddate)
                                          orderby t.CreatedUtcDate descending
                                          select t).ToList();
                            return StatusCode(200, new { result = result3, Message = "success", MessageDescription = "success" });
                        }
                        catch { }
                    }
                    return StatusCode(200, new { result = result3, Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(206, new { result = new List<string>(), Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = new List<string>(), Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}/{CustomerId}/{UniqId}")]
        public async Task<ActionResult> WarrantyForMaintance(Guid token, Guid CustomerId, string UniqId)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                Guid nullguid = Guid.Parse("00000000-0000-0000-0000-000000000000");
                var result1 = await (from ti in _context.TicketItem
                                     join tt in _context.TicketTeam on ti.TicketId equals tt.TicketId
                                     join tic in _context.Ticket on ti.TicketId equals tic.Id
                                     where UserType.Type == "Admin" ? tic.IsReady == true : tic.IsReady == true && tt.EngineerId == UserType.Id
                                     where ti.InWarranty == true && ti.InstallationDate != null && (tic.Status == "HOLD" || tic.Status == "CLOSED")
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
                                         ti.CreatedUtcDate,
                                         ti.ItemUnitCost,
                                         Type = ""
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
                                          w.CreatedUtcDate,
                                          ItemUnitCost = Convert.ToDouble(0),
                                          w.Type
                                      }).ToListAsync();
                foreach (var item in result01)
                {
                    result1.Add(item);
                }
                var result2 = (from p in result1
                               where CustomerId == nullguid ? p.CustomerId != CustomerId : p.CustomerId == CustomerId
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
                                   p.CreatedUtcDate,
                                   p.ItemUnitCost,
                                   ItemTotalCost = 0,
                                   ItemQuantity = 1,
                                   p.Type
                               }).ToList();

                var result3 = result2;
                if (UniqId != "ALL")
                {
                    result3 = (from t in result2
                               where t.UniqId.ToLower().Contains(UniqId.ToLower()) ||
                               t.ItemName.ToLower().Contains(UniqId.ToLower()) ||
                               t.TicketId.ToLower().Contains(UniqId.ToLower()) ||
                               t.Status.ToLower().Contains(UniqId.ToLower()) ||
                               t.Customer.ToLower().Contains(UniqId.ToLower())
                               orderby t.CreatedUtcDate descending
                               select t).ToList();
                }
                return StatusCode(200, result3);
            }
            catch (Exception ex)
            {
                return StatusCode(401, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}/{strSearch}")]
        public async Task<ActionResult> WithOutWarranty(Guid token, string strSearch)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                var result = new Object();
                if (UserType.Type == "Admin")
                {
                    if (strSearch == "ALL")
                    {
                        result = await (from ti in _context.TicketItem
                                        join tt in _context.TicketTeam on ti.TicketId equals tt.TicketId
                                        join tic in _context.Ticket on ti.TicketId equals tic.Id
                                        where ti.InWarranty == false || ti.InstallationDate == null
                                        select new
                                        {
                                            ti.Id,
                                            ti.ItemName,
                                            tic.TicketId,
                                            tic.OneOffAppointmentDate,
                                            tic.TicketClosedDate,
                                            tic.Status,
                                            Customer = tic.CustomerCompanyName,
                                            ti.Type
                                        }).Distinct().ToListAsync();
                    }
                    else
                    {
                        result = await (from ti in _context.TicketItem
                                        join tt in _context.TicketTeam on ti.TicketId equals tt.TicketId
                                        join tic in _context.Ticket on ti.TicketId equals tic.Id
                                        where ti.InWarranty == false || ti.InstallationDate == null
                                        where tic.TicketId.Contains(strSearch) || tic.Status.Contains(strSearch) || tic.Title.Contains(strSearch) ||
                                        ti.ItemName.Contains(strSearch)
                                        select new
                                        {
                                            ti.Id,
                                            ti.ItemName,
                                            tic.TicketId,
                                            tic.OneOffAppointmentDate,
                                            tic.TicketClosedDate,
                                            tic.Status,
                                            Customer = tic.CustomerCompanyName,
                                            ti.Type
                                        }).Distinct().ToListAsync();
                    }
                }
                else
                {
                    return StatusCode(200, result);
                }
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(401, ex.Message.ToString());
            }
        }

        //upload warranty product
        [HttpPost("[action]/{UserId}")]
        public ActionResult WarrantyBulkUpload(Customer obj, Guid? UserId)
        {
            object ServiceResponse = new object();
            List<object> ErrorResponse = new List<object>();
            List<object> SuccessResponse = new List<object>();
            string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            if (obj.CustomerLogo.Length > 0)
            {
                MemoryStream ms = new MemoryStream(Convert.FromBase64String(obj.CustomerLogo));
                IExcelDataReader reader = null;

                if (obj.Latitude == "xls")
                {
                    reader = ExcelReaderFactory.CreateBinaryReader(ms);
                }
                else if (obj.Latitude == "xlsx")
                {
                    reader = ExcelReaderFactory.CreateOpenXmlReader(ms);
                }
                DataSet excelRecords = reader.AsDataSet();
                reader.Close();
                try
                {
                    DateTime sDate = new DateTime();
                    DateTime eDate = new DateTime();
                    var finalRecords = excelRecords.Tables[0];
                    int index = 1;
                    for (int i = 1; i < finalRecords.Rows.Count; i++)
                    {
                        index++;
                        var IsError = false;
                        object Error = new object();
                        var custResult = (from c in _context.Customer where c.CustomerId == finalRecords.Rows[i][0].ToString() select c).FirstOrDefault();
                        if (custResult == null)
                        {
                            Error = "Invalid customerId of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        var prodResult = (from p1 in _context.Product where p1.ProductId == finalRecords.Rows[i][1].ToString() select p1.Id).FirstOrDefault() == null ?
                                         (from p1 in _context.Service where p1.ServiceId == finalRecords.Rows[i][1].ToString() select p1.Id).FirstOrDefault() :
                                         (from p1 in _context.Product where p1.ProductId == finalRecords.Rows[i][1].ToString() select p1.Id).FirstOrDefault();
                        if (prodResult == Guid.Parse("00000000-0000-0000-0000-000000000000"))
                        {
                            prodResult = (from p1 in _context.Service where p1.ServiceId == finalRecords.Rows[i][1].ToString() select p1.Id).FirstOrDefault();
                        }
                        if (prodResult == null)
                        {
                            Error = "Invalid productId/serviceId  of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][2].ToString().Length > 0)
                        {
                            var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                            if (res.WarrantyValidation)
                            {
                                var IsDuplicate = (from c in _context.ProductWarranty where c.UniqId == finalRecords.Rows[i][2].ToString() select c).Any();
                                if (IsDuplicate)
                                {
                                    Error = "Duplicate UniqueId of line number " + index + ".";
                                    ErrorResponse.Add(Error);
                                    IsError = true;
                                }
                            }
                        }

                        try
                        {
                            sDate = Convert.ToDateTime(finalRecords.Rows[i][3].ToString());
                        }
                        catch
                        {
                            Error = "Invalid Start Date of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        try
                        {
                            eDate = Convert.ToDateTime(finalRecords.Rows[i][4].ToString());
                        }
                        catch
                        {
                            Error = "Invalid Expire Date of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (sDate > eDate)
                        {
                            Error = "Expire Date should be lessthen Start Date of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        else
                        {
                            if (IsError == false)
                            {
                                object Success = new object();
                                ProductWarranty oModel = new ProductWarranty();
                                oModel.CustomerId = custResult.Id;
                                oModel.ProductId = prodResult;
                                oModel.UniqId = finalRecords.Rows[i][2].ToString();
                                oModel.InstallationDate = sDate;
                                oModel.WarrantyDays = (eDate.Date - sDate.Date).Days;
                                oModel.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                                _context.ProductWarranty.Add(oModel);
                                _context.SaveChanges();

                                Success = "Product Warranty Created Successfully.";
                                SuccessResponse.Add(Success);

                                try
                                {
                                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                                    var result = (from u in _context.Login where u.Id == UserId select u).FirstOrDefault();

                                    UserLog o = new UserLog();
                                    o.Id = Guid.NewGuid();
                                    o.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                                    o.UserId = UserId;
                                    o.UserName = result.UserName;
                                    o.Module = "Product";
                                    o.ModuleId = oModel.ProductId;
                                    o.ActionType = "Added";
                                    o.Description = "Product warranty of : " + custResult.CompanyName + " , has been added , by user : " + result.FullName + "";
                                    o.RecentDescription = "A Product warranty warranty of : " + custResult.CompanyName + " , has been added by user : " + result.FullName + "";
                                    o.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    o.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    _context.UserLog.Add(o);
                                    _context.SaveChanges();
                                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                                {

                                }
                            }
                        }
                    }
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {
                    return StatusCode(404);
                }
            }
            ServiceResponse = new { ErrorResponse = ErrorResponse, SuccessResponse = SuccessResponse };
            return StatusCode(201, ServiceResponse);
        }

        #region Engineer Attendance Report
        [HttpGet("[action]/{token}/{dFrom}/{dTo}/{EngineerId}")]
        public ActionResult EngineerAttendanceReport(Guid token, string dFrom, string dTo, Guid EngineerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                Guid nullguid = Guid.Parse(ConstantParameters.NULL_GUID_STRING);
                string st = dFrom.Substring(0, 4) + "-" + dFrom.Substring(4, 2) + "-" + dFrom.Substring(6, 2) + " 00:00:00";
                string et = dTo.Substring(0, 4) + "-" + dTo.Substring(4, 2) + "-" + dTo.Substring(6, 2) + " 23:59:59";
                DateTime startdate = Convert.ToDateTime(st);
                DateTime enddate = Convert.ToDateTime(et);
                var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                var engineerlist = new List<Guid>();
                if (EngineerId != nullguid) { engineerlist.Add(EngineerId); }
                else
                {
                    engineerlist = (from tm in _context.Engineer where tm.Working == true && tm.IsReady == true select tm.Id).ToList();
                }
                var result = (from f in _context.EngineerAttendance 
                              where engineerlist.Contains(f.EngineerId)
                              where (f.StartDate >= startdate.Date && f.StartDate <= enddate)
                              select new { 
                    EngineerName =  (from e in _context.Engineer where e.Id == f.EngineerId select e.EngineerName).FirstOrDefault(),
                    f.StartDate,
                    f.StartAddress,
                    f.StartIP,
                    f.EndDate,
                    f.EndIP,
                    f.EndAddress,
                    EngineerAttendanceImage = (from d in _context.EngineerAttendanceImage where d.EngineerAttendanceId == f.Id select d).ToList()
                }).ToList();
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
               
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
    }
}
