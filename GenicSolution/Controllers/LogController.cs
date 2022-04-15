using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
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
    public class LogController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        private object obj;
        public LogController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        // GET: User Logs
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<UserLog>>> getUserLogs(Guid Token)
        {
            bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Engineer"));
            if (IsTokenValid)
            {
                return await (from l in _context.UserLog orderby l.CreatedDate descending select l).ToListAsync();
            }
            else
            {
                obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                return StatusCode(200, obj);
            }
        }

        // GET: User Logs
        [HttpGet("[action]/{TicketId}/{Module}/{token}")]
        public async Task<ActionResult> getTicketLogs(Guid TicketId, string Module, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from l in _context.UserLog where l.ModuleId == TicketId && l.Module == Module orderby l.LogDate descending select l).ToListAsync();
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
        //get ticket timesheet on ticket id
        [HttpGet("[action]/{TicketId}/{Token}")]
        public ActionResult<IEnumerable<object>> GetTicketTimesheet(Guid TicketId, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var engineer = (from e in _context.Engineer join l in _context.Login on e.Id equals l.Id where l.Token == Token select e).FirstOrDefault();
                    if (engineer != null)
                    {
                        var result = (from t in _context.TicketTimer
                                      join e in _context.Engineer on t.EngineerId equals e.Id
                                      join tt in _context.Ticket on t.TicketId equals tt.Id
                                      where t.TicketId == TicketId && e.Id == engineer.Id
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
                                          TimeDiff = getTimediff(t.EndDate, t.StartDate),
                                      }).ToList();
                        return result;
                    }
                    else
                    {
                        var result = (from t in _context.TicketTimer
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
                                          TimeDiff = getTimediff(t.EndDate, t.StartDate),
                                      }).ToList();
                        return result;
                    }

                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(401, obj);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        public static string getTimediff(DateTime? EndDate, DateTime? StartDate)
        {
            var span1 = (EndDate - StartDate);
            if (span1 == null)
            {
                var dd = "00:00:00";
                return dd;
            }
            TimeSpan span = TimeSpan.Parse(span1.ToString());
            int day = span.Days;
            int hours = span.Hours;
            int minutes = span.Minutes;
            int seconds = span.Seconds;
            if (day > 0)
            {
                hours = hours + day * 24;
            }
            var duration = hours.ToString("00") + ":" + minutes.ToString("00") + ":" + seconds.ToString("00");
            return duration;
        }
        //get ticket timesheet on ticket id
        [HttpGet("[action]/{EngineerId}/{Token}")]
        public ActionResult<IEnumerable<object>> GetEngineerTicketTimesheet(Guid EngineerId, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var result = (from t in _context.TicketTimer
                                  join e in _context.Engineer on t.EngineerId equals e.Id
                                  join tt in _context.Ticket on t.TicketId equals tt.Id
                                  where t.EngineerId == EngineerId
                                  orderby t.StartDate descending
                                  select new
                                  {
                                      EngineerId = e.Id,
                                      EngineerName = e.EngineerName,
                                      TicketId = tt.TicketId,
                                      Date = t.StartDate,
                                      StartDate = t.StartDate,
                                      EndDate = t.EndDate,
                                      CheckIn = t.StartTime,
                                      CheckOut = t.EndTime,
                                      TimeDiff = getTimediff(t.EndDate, t.StartDate),
                                  }).ToList();
                    return result;
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(401, obj);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }

        // post user log
        [HttpPost("[action]")]
        public async Task<ActionResult> postUserLog(UserLog obj)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var userName = await (from u in _context.Login where u.Id == obj.UserId select u.UserName).FirstOrDefaultAsync();
                if (userName != null)
                {
                    obj.UserName = userName;
                }
                else
                {
                    obj.UserName = "User";
                }
                obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.Id = Guid.NewGuid();
                obj.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                _context.UserLog.Add(obj);
                await _context.SaveChangesAsync();
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        // GET: Recent activity
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<UserLog>>> getRecentActivities(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var who = await (from u in _context.Login where u.Token == Token select u).FirstOrDefaultAsync();
                    if (who.Type == "Admin")
                    {
                        var result = await (from l in _context.UserLog orderby l.CreatedDate descending select l).Take(10).ToListAsync();
                        return result;
                    }
                    else
                    {
                        var result = await (from l in _context.UserLog where l.UserId == who.Id orderby l.CreatedDate descending select l).Take(10).ToListAsync();
                        return result;
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
                return StatusCode(200, ex.Message.ToString());
            }
        }
    }
}