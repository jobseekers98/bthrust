using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
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
    public class EngineersController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public EngineersController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetEngineerList(Guid token)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token);
            if (!IsTokenValid)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            var result = await _context.Engineer.ToListAsync();
            foreach (var item in result)
            {
                if (item.EngineerLogo.Length == 0)
                {
                    item.EngineerLogo = "assets/users/default.jpg";
                }
            }
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        [HttpGet("[action]/{Token}/{TicketId}")]
        public async Task<ActionResult> AssinedEngineersList(Guid Token, Guid TicketId)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var result = (from e in _context.Engineer
                                  join t in _context.TicketTeam on e.Id equals t.EngineerId
                                  where t.TicketId == TicketId
                                  select new
                                  {
                                      e.Id,
                                      e.EngineerName,
                                      e.EngineerLogo,
                                      e.EngineerPhone,
                                      e.EngineerEmail,
                                      e.Type
                                  }).ToList();
                    return StatusCode(200, result);
                }
                else
                {
                    return StatusCode(401, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult> GetEngineerTable(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var result = (from e in _context.Engineer
                                  orderby e.ModifiedUtcDate descending
                                  select new
                                  {
                                      e.Id,
                                      e.EngineerLogo,
                                      e.EngineerId,
                                      e.EngineerName,
                                      e.EngineerPhone,
                                      e.EngineerEmail,
                                      e.Type,
                                      e.Working,
                                      e.IsActive,
                                      OpenTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && tt.EngineerId == e.Id && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "HOLD" || t.Status == "INPROGRESS") select t.Id).Distinct().Count(),
                                      ClosedTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && tt.EngineerId == e.Id && (t.Status == "CLOSED" || t.Status == "CLOSEDQUOTED" || t.Status == "CLOSEDINVOICED") select t.Id).Distinct().Count(),
                                      OverDueTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && tt.EngineerId == e.Id && t.Status == "OVERDUE" select t.Id).Distinct().Count(),
                                  }).ToList();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });

                }
                else
                {
                    return StatusCode(206, new { result ="", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult> GetEngineerAsideCount(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    Guid EnginnerId = (from s in _context.Login where s.Token == Token select s.Id).FirstOrDefault();
                    var result = (from e in _context.Engineer
                                  join t in _context.TicketTeam on e.Id equals t.EngineerId
                                  where t.EngineerId == EnginnerId
                                  select new
                                  {
                                      TotalTicket = (from k in _context.Ticket where k.Id == t.TicketId select k).Count(),
                                      OpenTicket = (from k in _context.Ticket where k.Id == t.TicketId && (k.Status == "UPCOMING" || k.Status == "OVERDUE" || k.Status == "INPROGRESS" || k.Status == "HOLD") select k).Count(),
                                      HoldTicket = (from k in _context.Ticket where k.Id == t.TicketId && k.Status == "HOLD" select k).Count(),
                                      ClosedTicket = (from k in _context.Ticket where k.Id == t.TicketId && (k.Status == "CLOSED" || k.Status == "CLOSEDQUOTED" || k.Status == "CLOSEDINVOICED") select k).Count(),
                                      TodayClosedTicket = (from k in _context.Ticket
                                                           where k.Id == t.TicketId && (k.Status == "CLOSED" || k.Status == "CLOSEDQUOTED" || k.Status == "CLOSEDINVOICED") &&
                                 k.OneOffAppointmentDate.Value.Year == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Year &&
                           k.OneOffAppointmentDate.Value.Month == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Month &&
                           k.OneOffAppointmentDate.Value.Day == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Day
                                                           select k).Count(),
                                      UpcomingTicket = (from k in _context.Ticket where k.Id == t.TicketId && k.Status == "UPCOMING" select k).Count(),
                                      TodayTicket = (from k in _context.Ticket
                                                     where k.Id == t.TicketId &&
                           k.OneOffAppointmentDate.Value.Year == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Year &&
                           k.OneOffAppointmentDate.Value.Month == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Month &&
                           k.OneOffAppointmentDate.Value.Day == GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone).Day
                                                     select k).Count(),
                                      OverdueTicket = (from k in _context.Ticket where k.Id == t.TicketId && k.Status == "OVERDUE" select k).Count(),
                                  }).FirstOrDefault();
                    return StatusCode(200, result);

                }
                else
                {
                    return StatusCode(401, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPut("[action]/{token}/{Id}")]
        public async Task<ActionResult> PutEngineersWorkingOrNot(Guid token, Guid Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var prop = await (from c in _context.Engineer where c.Id == Id select c).FirstOrDefaultAsync();
                    if (prop.Working)
                    {
                        var ticketteamlist = await (from tt in _context.TicketTeam
                                                    join t in _context.Ticket on tt.TicketId equals t.Id
                                                    where (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "HOLD") && tt.EngineerId == prop.Id
                                                    select tt).ToListAsync();
                        foreach (var item in ticketteamlist)
                        {
                            _context.Remove(item);
                            _context.SaveChanges();
                        }
                        prop.Working = false;
                        prop.LoginAccess = false;
                    }
                    else
                    {
                        var gc = (from c in _context.GenicProfile select c).FirstOrDefault();
                        int ExistingLength = _context.Engineer.Where(e => e.Working == true).Count();
                        if (ExistingLength >= gc.EngineerLength)
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "You already exhausted active users limit, please contact BThrust team for further assistance." });
                        }
                        prop.Working = true;
                        prop.LoginAccess = true;
                    }
                    _context.Entry(prop).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Working status is change" });
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
        public async Task<ActionResult> GetEngineerById(Guid token, Guid EngineerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Engineer.FindAsync(EngineerId);
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
        [HttpGet("[action]/{TicketId}/{Token}/{actiontype}")]
        public ActionResult ReleseTemporaryEngineerFromTicket(Guid TicketId, Guid Token, string actiontype)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token);
                if (IsTokenValid)
                {
                    if (actiontype == "relese")
                    {
                        var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketId select tt).ToList();
                        foreach (var item in ticketteam)
                        {
                            if (item.TicketAssignDate != null)
                            {
                                item.AppointmentStartTime = null;
                                item.AppointmentEndTime = null;
                                item.TicketAssignDate = null;
                                item.IsFree = true;
                                _context.Entry(item).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                        }
                    }
                    if (actiontype == "revert")
                    {
                        var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                        var ticket = (from t in _context.Ticket where t.Id == TicketId select t).FirstOrDefault();
                        var ticketteam = (from tt in _context.TicketTeam where tt.TicketId == TicketId && tt.AppointmentStartTime == null select tt).ToList();
                        foreach (var item in ticketteam)
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
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex) { return StatusCode(200, ex.Message.ToString()); }
        }
        [HttpGet("[action]/{StartTime}/{EndTime}/{Token}")]
        public ActionResult<IEnumerable<Engineer>> UnallocatedEngineers(string StartTime, string EndTime, Guid Token)
        {
            try
            {
                var userDetails = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();
                if (userDetails != null)
                {
                    string st = StartTime.Substring(0, 4) + "-" + StartTime.Substring(4, 2) + "-" + StartTime.Substring(6, 2) + " " + StartTime.Substring(8, 2) + ":" + StartTime.Substring(10, 2) + ":" + StartTime.Substring(12, 2);
                    string et = StartTime.Substring(0, 4) + "-" + EndTime.Substring(4, 2) + "-" + EndTime.Substring(6, 2) + " " + EndTime.Substring(8, 2) + ":" + EndTime.Substring(10, 2) + ":" + EndTime.Substring(12, 2);
                    if (userDetails.Type == "Engineer")
                    {
                        var engineerDetails = (from e in _context.Engineer where e.Id == userDetails.Id select e).FirstOrDefault();
                        if (!engineerDetails.AssignToOtherUser)
                        {
                            var result0 = _context.Engineer.FromSqlRaw("select * from Engineer where Working='true' and Id={2} and Id not in(select distinct tt.EngineerId from TicketTeam tt  where tt.IsFree ='false' and " +
                        "({0} between tt.AppointmentStartTime and tt.AppointmentEndTime or {1} between tt.AppointmentStartTime and tt.AppointmentEndTime) or " +
                        "(tt.AppointmentStartTime between {0} and {1} or tt.AppointmentEndTime between {0} and {1}))", st, et, engineerDetails.Id).ToList();
                            return StatusCode(200, result0);
                        }
                    }
                    var result = _context.Engineer.FromSqlRaw("select * from Engineer where Working='true' and Id not in(select distinct tt.EngineerId from TicketTeam tt  where tt.IsFree ='false' and " +
                        "({0} between tt.AppointmentStartTime and tt.AppointmentEndTime or {1} between tt.AppointmentStartTime and tt.AppointmentEndTime) or " +
                        "(tt.AppointmentStartTime between {0} and {1} or tt.AppointmentEndTime between {0} and {1}))", st, et).ToList();
                    return StatusCode(200, result);
                }
                else
                {
                    return StatusCode(401, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message.ToString());
            }
        }
        [HttpPut("{Token}")]
        [Obsolete]
        public IActionResult PutEngineer(Engineer engineer)
        {
            if (_context.Login.Any(b => b.UserName == engineer.EngineerEmail && b.Id != engineer.Id))
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer Email is already exists!" });
            }
            if (engineer.EngineerPhone.Length > 0)
            {
                if (_context.Engineer.Any(b => b.EngineerPhone == engineer.EngineerPhone && b.Id != engineer.Id))
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer Phone number is already exists!" });
                }
            }
            if (engineer.EngineerLogo.Length > 0)
            {
                try
                {
                    var loginlogo = (from c in _context.Login where c.Id == engineer.Id select c).FirstOrDefault();
                    loginlogo.Logo = engineer.EngineerLogo;
                    _context.Entry(loginlogo).State = EntityState.Modified;
                }
                catch { }
            }
            else
            {
                var previousLogo = (from c in _context.Engineer where c.Id == engineer.Id select c.EngineerLogo).FirstOrDefault();
                engineer.EngineerLogo = previousLogo;
            }
            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

            //this section is ussed for ticket issue type and zone purpose
            try
            {
                var oldZoneList = (from o in _context.EngineerWiseZone where o.EngineerId == engineer.Id select o).ToList();
                if (oldZoneList != null)
                {
                    foreach (var oo in oldZoneList)
                    {
                        _context.EngineerWiseZone.Remove(oo);
                    }
                    _context.SaveChanges();
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used

            try
            {
                var oldIssueList = (from o in _context.EngineerWiseIssueType where o.EngineerId == engineer.Id select o).ToList();
                if (oldIssueList != null)
                {
                    foreach (var oo in oldIssueList)
                    {
                        _context.EngineerWiseIssueType.Remove(oo);
                    }
                    _context.SaveChanges();
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used

            var zonlist = engineer.EngineerWiseZoneList;
            engineer.EngineerWiseZoneList = null;

            var Issuenlist = engineer.EngineerWiseIssueTypeList;
            engineer.EngineerWiseIssueTypeList = null;
            //this section is ussed for ticket issue type and zone purpose

            _context.Entry(engineer).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();

                var loginemail = (from l in _context.Login where l.Id == engineer.Id select l).FirstOrDefault();
                loginemail.UserName = engineer.EngineerEmail;
                loginemail.Email = engineer.EngineerEmail;
                loginemail.FullName = engineer.EngineerName;
                loginemail.MobileNumber = engineer.EngineerPhone;
                loginemail.Logo = engineer.EngineerLogo;
                loginemail.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Entry(loginemail).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EngineerExists(engineer.Id))
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer not found" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "try again invalid request" });
                }
            }


            // this section is use to assign issue type and zone
            if (zonlist != null)
            {
                foreach (var z in zonlist.Where(x => x.IsAssigned == true))
                {
                    try
                    {
                        EngineerWiseZone obj = new EngineerWiseZone();
                        obj.ZoneId = z.ZoneId;
                        obj.ZoneName = z.ZoneName;
                        obj.EngineerId = engineer.Id;
                        _context.EngineerWiseZone.Add(obj);
                    }
                    catch (Exception) { }
                }
                _context.SaveChanges();
            }
            if (Issuenlist != null)
            {
                foreach (var z in Issuenlist.Where(x => x.IsAssigned == true))
                {
                    try
                    {
                        EngineerWiseIssueType obj = new EngineerWiseIssueType();
                        obj.TicketIssueTypeId = z.Id;
                        obj.IssueTypeName = z.Name;
                        obj.EngineerId = engineer.Id;
                        _context.EngineerWiseIssueType.Add(obj);
                    }
                    catch (Exception) { }
                }
                _context.SaveChanges();
            }
            // this section is use to assign issue type and zone
            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update Record successfully" });
        }
        [HttpPost("{token}")]
        [Obsolete]
        public ActionResult<Engineer> PostEngineer(Engineer engineer, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var gc = (from c in _context.GenicProfile select c).FirstOrDefault();
                    if (_context.Login.Any(b => b.UserName == engineer.EngineerEmail))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer Email is already exists!" });
                    }
                    if (_context.Engineer.Any(b => b.EngineerEmail == engineer.EngineerEmail))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer Email is already exists!" });
                    }
                    if (_context.Engineer.Any(b => b.EngineerPhone == engineer.EngineerPhone))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer Phone number is already exists!" });
                    }
                    int ExistingLength = _context.Engineer.Where(e => e.Working == true).Count();
                    if (ExistingLength >= gc.EngineerLength)
                    {
                        engineer.Working = false;
                        engineer.LoginAccess = false;
                    }
                    if (engineer.EngineerLogo.Length > 0)
                    {
                        AWSHelper awshelper = new AWSHelper();
                        string msg = string.Empty;
                        string end_point = GlobalParameters.AWS_FOLDER + "/Engineer/" + engineer.Id + ".jpeg";
                        bool isUploaded = awshelper.SendBase64ToAWS(engineer.EngineerLogo, end_point, out msg);
                        if (isUploaded) { engineer.EngineerLogo = msg; }
                    }
                    else
                    {
                        engineer.EngineerLogo = "";
                    }
                    var zonlist = engineer.EngineerWiseZoneList;
                    engineer.EngineerWiseZoneList = null;
                    var Issyelist = engineer.EngineerWiseIssueTypeList;
                    engineer.EngineerWiseIssueTypeList = null;

                    engineer.EngineerId += (_context.Engineer.Count() + 1).ToString("00000");
                    engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);
                    engineer.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);
                    engineer.IsReady = true;
                    _context.Engineer.Add(engineer);

                    Permissions permission = new Permissions
                    {
                        DashboardAdmin = false,
                        DashboardEngineer = true,
                        EngineerTicketView = true,
                        EngineerProfileView = true,
                        EngineerTimesheetView = true
                    };
                    var adminId = (from l in _context.Login where l.Type == "Admin" && l.IsActive == true select l.PermissionId).FirstOrDefault();
                    var adminper = (from p in _context.Permissions where p.Id == adminId select p).FirstOrDefault();
                    if (adminper.EngineerLeave) { permission.EngineerLeave = true; } else { permission.EngineerLeave = false; }
                    if (adminper.ProductWarranty) { permission.ProductWarranty = true; } else { permission.ProductWarranty = false; }
                    if (adminper.CanEngineerCreateTicket) { permission.CanEngineerCreateTicket = true; } else { permission.CanEngineerCreateTicket = false; }
                    if (adminper.EngineerType) { permission.EngineerType = true; } else { permission.EngineerType = false; }
                    if (adminper.IsProductOnly) { permission.IsProductOnly = true; } else { permission.IsProductOnly = false; }
                    if (adminper.GoogleCalendar) { permission.GoogleCalendar = true; } else { permission.GoogleCalendar = false; }
                    if (adminper.LiveTracking) { permission.LiveTracking = true; } else { permission.LiveTracking = false; }
                    _context.Permissions.Add(permission);
                    _context.SaveChanges();
                    Login login = new Login
                    {
                        Id = engineer.Id,
                        UserName = engineer.EngineerEmail,
                        FullName = engineer.EngineerName,
                        Email = engineer.EngineerEmail,
                        Password = "Eng@1234",
                        PermissionId = permission.Id,
                        Type = "Engineer",
                        Logo = engineer.EngineerLogo,
                        Token = Guid.NewGuid(),
                        ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone),
                        CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone)
                    };
                    _context.Login.Add(login);
                    _context.SaveChanges();

                    // this section is used to assigh issue type and zone to engineer
                    if (zonlist != null)
                    {
                        foreach (var z in zonlist.Where(x => x.IsAssigned == true))
                        {
                            try
                            {
                                EngineerWiseZone obj = new EngineerWiseZone();
                                obj.ZoneId = z.ZoneId;
                                obj.ZoneName = z.ZoneName;
                                obj.EngineerId = engineer.Id;
                                _context.EngineerWiseZone.Add(obj);
                            }
                            catch (Exception) { }
                            _context.SaveChanges();
                        }
                    }
                    if (Issyelist != null)
                    {
                        foreach (var z in Issyelist.Where(x => x.IsAssigned == true))
                        {
                            try
                            {
                                EngineerWiseIssueType obj = new EngineerWiseIssueType();
                                obj.TicketIssueTypeId = z.Id;
                                obj.IssueTypeName = z.Name;
                                obj.EngineerId = engineer.Id;
                                _context.EngineerWiseIssueType.Add(obj);
                            }
                            catch (Exception) { }
                            _context.SaveChanges();
                        }
                    }
                    //this section is used to assigh issue type and zone to engineer
                    //MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                    //mail.NewEngineerCreated(engineer, login.Token.ToString());
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "New Engineer Created" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
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
        [HttpDelete("{Id}")]
        public async Task<ActionResult> DeleteEngineerProfileImage(Guid Id)
        {
            var engineerLogo = await (from c in _context.Engineer where c.Id == Id select c).FirstOrDefaultAsync();
            engineerLogo.EngineerLogo = "";
            await _context.SaveChangesAsync();
            return StatusCode(202, "deleted");
        }
        private bool EngineerExists(Guid id)
        {
            return _context.Engineer.Any(e => e.Id == id);
        }

        ///***************************************************************************///
        /// Engineer Self Update Begin
        [HttpPut("[action]/{Token}/{update}")]
        public async Task<IActionResult> EngineerSelfUpdate(Engineer engineer, Guid Token, string update)
        {
            string tempstr = "";
            bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            if (IsTokenValid)
            {
                switch (update)
                {
                    case "Profile":
                        var previousdata = await (from c in _context.Engineer where c.Id == engineer.Id select c).FirstOrDefaultAsync();
                        if (previousdata == null)
                        {
                            return StatusCode(404, "Not found");
                        }

                        previousdata.EngineerName = engineer.EngineerName;
                        previousdata.EngineerPhone = engineer.EngineerPhone;
                        previousdata.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        if (engineer.EngineerLogo.Length > 0)
                        {
                            try
                            {
                                var loginlogo = await (from c in _context.Login where c.Id == engineer.Id select c).FirstOrDefaultAsync();
                                loginlogo.Logo = previousdata.EngineerLogo;
                                _context.Entry(loginlogo).State = EntityState.Modified;
                            }
                            catch { }
                        }
                        else
                        {

                            previousdata.EngineerLogo = engineer.EngineerLogo;
                        }
                        _context.Entry(previousdata).State = EntityState.Modified;

                        try
                        {
                            await _context.SaveChangesAsync();
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                            if (!EngineerExists(engineer.Id))
                            {
                                return NotFound();
                            }
                            else
                            {
                                throw;
                            }
                        }
                        break;
                    case "Emergency":
                        var previousdata2 = await (from c in _context.Engineer where c.Id == engineer.Id select c).FirstOrDefaultAsync();
                        if (previousdata2 == null)
                        {
                            return StatusCode(404, "Not found");
                        }
                        previousdata2.EmergencyName = engineer.EmergencyName;
                        previousdata2.EmergencyNumber = engineer.EmergencyNumber;
                        previousdata2.EmergencyRelation = engineer.EmergencyRelation;
                        previousdata2.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.Entry(previousdata2).State = EntityState.Modified;

                        try
                        {
                            await _context.SaveChangesAsync();
                            tempstr = "Update";
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                            if (EngineerExists(engineer.Id))
                            {
                                throw;
                            }
                            else
                            {
                                return NotFound();
                            }
                        }
                        break;
                    case "Address":
                        var previousdata3 = await (from c in _context.Engineer where c.Id == engineer.Id select c).FirstOrDefaultAsync();
                        if (previousdata3 == null)
                        {
                            return StatusCode(404, "Not found");
                        }
                        previousdata3.AddressStreet1 = engineer.AddressStreet1;
                        previousdata3.AddressStreet2 = engineer.AddressStreet2;
                        previousdata3.AddressCity = engineer.AddressCity;
                        previousdata3.AddressState = engineer.AddressState;
                        previousdata3.AddressUnitNo = engineer.AddressUnitNo;
                        previousdata3.AddressZipCode = engineer.AddressZipCode;
                        previousdata3.AddressCountry = engineer.AddressCountry;
                        previousdata3.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.Entry(previousdata3).State = EntityState.Modified;

                        try
                        {
                            await _context.SaveChangesAsync();
                            tempstr = "Update";
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                            if (!EngineerExists(engineer.Id))
                            {
                                return NotFound();
                            }
                            else
                            {
                                throw;
                            }
                        }
                        break;
                }
                return StatusCode(202, tempstr);
            }
            else
            {
                return StatusCode(401, "Invalid Token");
            }

        }
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult> PasswordChange(ForgetPassword result, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    bool IsExist = await _context.Login.AnyAsync(e => e.UserName == result.UserName);
                    if (IsExist)
                    {
                        var login = await (from c in _context.Login where c.Token == Token && c.Password == result.OldPassword select c).FirstOrDefaultAsync();
                        if (login == null)
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Make sure your old password is correct?" });
                        }
                        else
                        {
                            if (result.NewPassword.Length >= 6 && result.NewPassword.Length <= 16)
                            {
                                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                                login.Password = result.NewPassword;
                                login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                await _context.SaveChangesAsync();
                                return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Password update successfully" });
                            }
                            else
                            {
                                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Minimum 6-to-16 characters Password length Required" });
                            }
                        }
                    }
                    else
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Email address not found" });
                    }
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Token" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        //Get : Engineer wise Genic zone
        [HttpGet("[action]/{EngineerId}")]
        public ActionResult<IEnumerable<TicketIssueType>> GetEngineerWiseTicketIssueType(Guid? EngineerId)
        {
            try
            {
                var IssyeResult = (from t in _context.TicketIssueType orderby t.Name ascending select t).ToList();
                if (IssyeResult != null)
                {
                    foreach (var r in IssyeResult)
                    {
                        var uu = (from e in _context.EngineerWiseIssueType where e.TicketIssueTypeId == r.Id && e.EngineerId == EngineerId select e).FirstOrDefault();
                        if (uu != null)
                        {
                            r.IsAssigned = true;
                        }
                        else
                        {
                            r.IsAssigned = false;
                        }
                    }
                    return IssyeResult;
                }
                else
                {
                    return StatusCode(404, "Not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        /// Engineer Self Update End
        ///***************************************************************************///

        [HttpPost("[action]/{EngineerId}/{Token}")]
        public ActionResult EngineerPasswordResetByAdmin(Guid EngineerId, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    var engineer = (from e in _context.Engineer where e.Id == EngineerId select e).FirstOrDefault();
                    engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(engineer).State = EntityState.Modified;
                    var login = (from l in _context.Login where l.Id == EngineerId select l).FirstOrDefault();
                    login.Password = "Eng@1234";
                    login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(login).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202, "success");
                }
                else
                {
                    return StatusCode(202, "Invalid Token");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(202, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{Token}")]
        public ActionResult EngineerEvents(Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var engineerid = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerid != null)
                    {
                        var permission = (from p in _context.Permissions where p.Id == engineerid.PermissionId select p.GoogleCalendar).FirstOrDefault();
                        if (permission)
                        {
                            var result = (from t in _context.Ticket
                                          join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                          where t.IsReady == true
                                          where tt.EngineerId == engineerid.Id && t.Status == "UPCOMING"
                                          select new
                                          {
                                              summary = t.TicketId + " | " + t.Title,
                                              location = t.CustomerAddress,
                                              description = t.Description,
                                              start = new { dateTime = t.AppointmentStart.Replace("Z", "+08:00"), timeZone = "Singapore" },
                                              end = new { dateTime = t.AppointmentEnd.Replace("Z", "+08:00"), timeZone = "Singapore" }
                                          }).ToList();
                            return StatusCode(200, result);
                        }
                        else
                        {
                            return StatusCode(200, "Permission denied");
                        }
                    }
                    else
                    {
                        return StatusCode(200, "Engineer not found");
                    }
                }
                else
                {
                    return StatusCode(200, "Invalid Token");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, ex.Message.ToString());
            }
        }
    }
}
