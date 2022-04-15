
using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
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
    public class GenicProfileController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public GenicProfileController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }
        #region Country
        [HttpGet("[action]/{token}")]
        public ActionResult GetCountry(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = _context.Country.ToList();
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
        #region Genic Profile
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<GenicProfile>> getGenicProfile(Guid Token)
        {
            bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
            if (IsTokenValid)
            {
                var genicprofile = _context.GenicProfile.FirstOrDefault();
                if (genicprofile == null)
                {
                    return StatusCode(404, "Not found");
                }
                return genicprofile;
            }
            else
            {
                return StatusCode(401, "Token Expired");
            }
        }
        [HttpGet("[action]/{Token}/{module}")]
        public async Task<ActionResult> CheckedUserLimit(Guid Token, string module)
        {
            bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
            if (IsTokenValid)
            {
                var gc = (from g in _context.GenicProfile select g).FirstOrDefault();
                switch (module)
                {
                    case "customer":
                        var customercount = (from c in _context.Customer where c.IsReady == true && c.Status == true select c).Count();
                        if (customercount >= gc.CustomerLength)
                        {
                            return StatusCode(203, new { result = "", Message = "warning", h1 = "You already exhausted active users limit.", h2 = "Please contact BThrust team for further assistance." });
                        }
                        break;
                    case "engineer":
                        var engineercount = (from c in _context.Engineer where c.IsReady == true && c.LoginAccess == true select c).Count();
                        if (engineercount >= gc.EngineerLength)
                        {
                            return StatusCode(203, new { result = "", Message = "warning", h1 = "You already exhausted active users limit.", h2 = "Please contact BThrust team for further assistance." });
                        }
                        break;
                    case "subadmin":
                        var subadmincount = (from c in _context.Login where c.IsActive == true && c.Type == "SubAdmin" select c).Count();
                        if (subadmincount >= gc.SubAdminLength)
                        {
                            return StatusCode(203, new { result = "", Message = "warning", h1 = "You already exhausted active users limit.", h2 = "Please contact BThrust team for further assistance." });
                        }
                        break;
                    default:
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                }
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
            }
            else
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
        }
        [HttpPost("[action]/{token}/{module}")]
        [Obsolete]
        public async Task<ActionResult<GenicProfile>> PostGenicProfileCompanyDetails(GenicProfile genicprofile, Guid token, string module)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var res = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                    switch (module)
                    {
                        case "socialnetwork":
                            var previousdata = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                            previousdata.FacebookUrl = genicprofile.FacebookUrl;
                            previousdata.TwitterUrl = genicprofile.TwitterUrl;
                            previousdata.InstagramUrl = genicprofile.InstagramUrl;
                            previousdata.GoogleUrl = genicprofile.GoogleUrl;
                            previousdata.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone);
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Company social network update successfully" });
                        case "details":
                            var socialnetworkdata = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                            socialnetworkdata.Name = genicprofile.Name;
                            socialnetworkdata.ContactNumber = genicprofile.ContactNumber;
                            socialnetworkdata.WebsiteUrl = genicprofile.WebsiteUrl;
                            socialnetworkdata.Email = genicprofile.Email;
                            socialnetworkdata.AddressStreet1 = genicprofile.AddressStreet1;
                            socialnetworkdata.AddressStreet2 = genicprofile.AddressStreet2;
                            socialnetworkdata.AddressCity = genicprofile.AddressCity;
                            socialnetworkdata.AddressState = genicprofile.AddressState;
                            socialnetworkdata.AddressUnitNo = genicprofile.AddressUnitNo;
                            socialnetworkdata.AddressCountry = genicprofile.AddressCountry;
                            socialnetworkdata.AddressZipCode = genicprofile.AddressZipCode;
                            socialnetworkdata.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone);
                            await _context.SaveChangesAsync();
                            var admindetails = (from u in _context.Login where u.Token == token && u.IsActive == true select u).FirstOrDefault();
                            admindetails.Email = genicprofile.Email;
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Company details update successfully" });
                        case "businesshours":
                            var businesshoursdata = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                            businesshoursdata.Sunday = genicprofile.Sunday;
                            businesshoursdata.Monday = genicprofile.Monday;
                            businesshoursdata.Tuesday = genicprofile.Tuesday;
                            businesshoursdata.Wednesday = genicprofile.Wednesday;
                            businesshoursdata.Thursday = genicprofile.Thursday;
                            businesshoursdata.Friday = genicprofile.Friday;
                            businesshoursdata.Saturday = genicprofile.Saturday;
                            businesshoursdata.SundayString = genicprofile.SundayString;
                            businesshoursdata.MondayString = genicprofile.MondayString;
                            businesshoursdata.TuesdayString = genicprofile.TuesdayString;
                            businesshoursdata.WednesdayString = genicprofile.WednesdayString;
                            businesshoursdata.ThursdayString = genicprofile.ThursdayString;
                            businesshoursdata.FridayString = genicprofile.FridayString;
                            businesshoursdata.SaturdayString = genicprofile.SaturdayString;
                            businesshoursdata.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone);
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Business hours update successfully" });
                        case "prefix":
                            var prefixdata = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                            prefixdata.TicketPrefix = genicprofile.TicketPrefix;
                            prefixdata.InvoicePrefix = genicprofile.InvoicePrefix;
                            prefixdata.QuotePrefix = genicprofile.QuotePrefix;
                            prefixdata.ServicePrefix = genicprofile.ServicePrefix;
                            prefixdata.CloserPrefix = genicprofile.CloserPrefix;
                            prefixdata.WhatsAppNumber = genicprofile.WhatsAppNumber;
                            prefixdata.TimeZone = genicprofile.TimeZone;
                            prefixdata.BufferTime = genicprofile.BufferTime;
                            prefixdata.OTAfter = genicprofile.OTAfter;
                            prefixdata.WarrantyValidation = genicprofile.WarrantyValidation;
                            prefixdata.TicketTermsConditions = genicprofile.TicketTermsConditions;
                            prefixdata.QuoteTermsAndCondition = genicprofile.QuoteTermsAndCondition;
                            prefixdata.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone);
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result="", Message = "success", MessageDescription = "Company prefix update successfully" });
                        case "geolocation":
                            var previousgeoloc = (from g in _context.GenicProfile where g.Id == genicprofile.Id select g).FirstOrDefault();
                            previousgeoloc.Geolocation = genicprofile.Geolocation;
                            previousgeoloc.GeolocationAddress = genicprofile.GeolocationAddress;
                            previousgeoloc.GeolocationImage = genicprofile.GeolocationImage;
                            previousgeoloc.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone);
                            await _context.SaveChangesAsync();
                            return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Geolocation settings update successfully" });
                    }
                    return StatusCode(206, new { result="", Message = "failure", MessageDescription = "Invalid request" });
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
        [HttpGet("[action]/{code}")]
        public ActionResult GenicClients(string code)
        {
            try
            {
                bool IsTokenValid = _context.GenicClients.Any(x => x.CompanyCode == code);
                if (IsTokenValid)
                {
                    var result = (from x in _context.GenicClients where x.CompanyCode == code select x).FirstOrDefault();
                    if (result.IsActive)
                    {
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Inactive Account" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid code" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
        #region Leave
        [HttpPost("[action]/{Token}/{Id}/{status}")]
        public async Task<ActionResult> ApprovedRejectLeave(Guid Token, int Id, string status)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.EngineerId == engineerDetails.Id && c.LeaveFor == 2).FirstOrDefault();
                    if (item == null)
                    {
                        return StatusCode(204);
                    }
                    item.Status = status;
                    _context.Entry(item).State = EntityState.Modified;
                    _context.SaveChanges();
                    var _tt = (from tt in _context.TicketTeam
                               where tt.EngineerId == engineerDetails.Id && tt.TicketId == null && tt.EngineerLogo == Id.ToString() &&
                               tt.AppointmentStartTime.Value.Year == item.Date.Year && 
                               tt.AppointmentStartTime.Value.Month == item.Date.Month && 
                               tt.AppointmentStartTime.Value.Day == item.Date.Day
                               select tt).FirstOrDefault();
                    _context.Remove(_tt);
                    _context.SaveChanges();
                    return StatusCode(202);
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(208, ex.Message.ToString());
            }
        }
        [HttpPost("[action]/{Token}/{Id}/{status}")]
        public ActionResult ApprovedRejectLeaveAdmin(Guid Token, int Id, string status)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.LeaveFor == 2).FirstOrDefault();
                    if (item == null)
                    {
                        return StatusCode(204);
                    }
                    item.Status = status;
                    _context.Entry(item).State = EntityState.Modified;
                    _context.SaveChanges();
                    if (status == "Approved")
                    {
                        var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                        TicketTeam ticketteam = new TicketTeam
                        {
                            Id = 0,
                            TicketId = null,
                            EngineerId = item.EngineerId,
                            EngineerLogo = item.Id.ToString(),
                            EngineerName = item.EngineerName,
                            AppointmentStartTime = item.Date + item.StartTime,
                            AppointmentEndTime = item.Date + item.EndTime,
                            TicketAssignDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, res.TimeZone),
                            IsFree = false
                        };
                        _context.TicketTeam.Add(ticketteam);
                        _context.SaveChanges();
                        var engineerlist = (from tt in _context.TicketTeam
                                            join t in _context.Ticket on tt.TicketId equals t.Id
                                            where tt.EngineerId == item.EngineerId &&
                                                    t.Status == "UPCOMING" &&
                                                    t.OneOffAppointmentDate.Value.Year == item.Date.Year &&
                                                    t.OneOffAppointmentDate.Value.Month == item.Date.Month &&
                                                    t.OneOffAppointmentDate.Value.Date == item.Date.Date
                                            select tt).ToList();
                        int count = 0;
                        foreach (var item1 in engineerlist)
                        {
                            _context.TicketTeam.Remove(item1);
                            _context.SaveChanges();
                            count++;
                        }
                        if (engineerlist.Count > 0)
                        {
                            return StatusCode(200, "Leave Approved successfully. " + count + " Ticket is unallocated ");
                        }
                        else
                        {
                            return StatusCode(202);
                        }
                    }
                    if (status == "Cancelled")
                    {
                        var removeteam = (from c in _context.TicketTeam where c.TicketId == null && c.EngineerId == item.EngineerId && c.EngineerLogo == item.Id.ToString() select c).FirstOrDefault();
                        _context.TicketTeam.Remove(removeteam);
                        _context.SaveChanges();
                    }
                    return StatusCode(202);
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(208, ex.Message.ToString());
            }
        }
        [HttpDelete("[action]/{Token}/{Id}")]
        public async Task<ActionResult> CancelledLeaveRequest(Guid Token, int Id)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Engineer"));
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerDetails.Type == "Admin")
                    {
                        var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.LeaveFor == 1).FirstOrDefault();
                        if (item == null)
                        {
                            return StatusCode(204);
                        }
                        item.Status = "Cancelled";
                        _context.Entry(item).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        return StatusCode(202);
                    }
                    if (engineerDetails.Type == "Engineer")
                    {
                        var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.LeaveFor == 2).FirstOrDefault();
                        if (item == null)
                        {
                            return StatusCode(204);
                        }
                        item.Status = "Cancelled";
                        _context.Entry(item).State = EntityState.Modified;
                        await _context.SaveChangesAsync();

                        var removeteam = (from c in _context.TicketTeam where c.TicketId == null && c.EngineerId == item.EngineerId && c.EngineerLogo == item.Id.ToString() select c).FirstOrDefault();
                        _context.TicketTeam.Remove(removeteam);
                        await _context.SaveChangesAsync();

                        return StatusCode(202);
                    }
                    return NotFound();
                }
                else
                {
                    return StatusCode(203, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(205, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult> PendingLeaveRequest(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var item = _context.GenicProfileCalendar.Where(c => c.LeaveFor == 2 && c.Status == "Pending").Count();
                    return StatusCode(200, item);
                }
                else
                {
                    return StatusCode(200, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{Token}/{Year}/{month}")]
        public async Task<ActionResult<IEnumerable<GenicProfileCalendar>>> GetLeaveCalendar(Guid Token, int Year, int month)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {

                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerDetails.Type == "Engineer")
                    {
                        var result = await (from c in _context.GenicProfileCalendar
                                            where c.EngineerId == engineerDetails.Id
                                            where c.LeaveFor == 2 && c.Date.Year == Year
                                            where month == 0 ? c.Date.Month != 0 : c.Date.Month == month
                                            select c).ToListAsync();
                        var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                        var weekends = GetDaysBetween(
                            new DateTime(Year, 1, 1),
                            new DateTime(Year, 12, 31))
                            .Where(d => !
                            ((d.DayOfWeek.ToString() == "Sunday") == genicprofile.Sunday ||
                            (d.DayOfWeek.ToString() == "Monday") == genicprofile.Monday ||
                            (d.DayOfWeek.ToString() == "Tuesday") == genicprofile.Tuesday ||
                            (d.DayOfWeek.ToString() == "Wednesday") == genicprofile.Wednesday ||
                            (d.DayOfWeek.ToString() == "Thursday") == genicprofile.Thursday ||
                            (d.DayOfWeek.ToString() == "Friday") == genicprofile.Friday ||
                            (d.DayOfWeek.ToString() == "Saturday") == genicprofile.Saturday));
                        int cn = result.Count();
                        int id = 0;
                        if (cn == 0) { id = 1; } else { id = result[0].GenicProfileId; }
                        foreach (var item in weekends)
                        {
                            GenicProfileCalendar gpc = new GenicProfileCalendar
                            {
                                Id = 0,
                                GenicProfileId = id,
                                Description = "Weekly Off",
                                WorkType = "Full Day",
                                Date = item.Date,
                                LeaveFor = 1
                            };
                            result.Add(gpc);
                            cn++;
                        }
                        return result;
                    }
                    return new List<GenicProfileCalendar>();

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
        [HttpGet("[action]/{Token}/{Year}/{month}")]
        public async Task<ActionResult<IEnumerable<GenicProfileCalendar>>> GetLeaveCalendarAdmin(Guid Token, int Year, int month)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    var result = new List<GenicProfileCalendar>();
                    if (engineerDetails.Type == "Admin")
                    {
                        result = await (from c in _context.GenicProfileCalendar
                                        where c.LeaveFor == 2 && c.Date.Year == Year
                                        where month == 0 ? c.Date.Month != 0 : c.Date.Month == month
                                        select c).ToListAsync();
                        return result;
                    }
                    if (engineerDetails.Type == "Engineer")
                    {
                        result = await (from c in _context.GenicProfileCalendar
                                        where c.EngineerId == engineerDetails.Id
                                        where c.LeaveFor == 2 && c.Date.Year == Year
                                        where month == 0 ? c.Date.Month != 0 : c.Date.Month == month
                                        select c).ToListAsync();
                        return result;
                    }
                    return result;
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult<IEnumerable<GenicProfileCalendar>>> GetLeaveCalendarAdmin(Guid Token, TicketFilter ticketfilter)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerDetails.Type == "Admin" || engineerDetails.Type == "SubAdmin")
                    {
                        var result1 = new List<GenicProfileCalendar>();
                        var result2 = new List<GenicProfileCalendar>();

                        if (ticketfilter.EngineerId.Count == 0)
                        {
                            result2 = (from t in _context.GenicProfileCalendar where t.LeaveFor == 2 select t).ToList();
                        }
                        else
                        {
                            foreach (var item in ticketfilter.EngineerId)
                            {
                                result1 = (from t in _context.GenicProfileCalendar where t.LeaveFor == 2 && t.EngineerId == item select t).ToList();
                                foreach (var item2 in result1)
                                {
                                    result2.Add(item2);
                                }
                            }
                        }
                        return (from c in result2 where c.Date >= ticketfilter.DateFrom && c.Date <= ticketfilter.DateTo select c).ToList();
                    }
                    else
                    {
                        return StatusCode(208, "Access denied");
                    }
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{Id}/{Token}")]
        public async Task<ActionResult> LeaveCalendarStatusWorking(int Id, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var genericprofilecalendar = (from e in _context.GenicProfileCalendar where e.Id == Id select e).FirstOrDefault();
                    if (genericprofilecalendar.IsWorking)
                    {
                        genericprofilecalendar.IsWorking = false;
                    }
                    else
                    {
                        genericprofilecalendar.IsWorking = true;
                    }
                    _context.Entry(genericprofilecalendar).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(200, "OK");
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(208, ex.Message.ToString());
            }
        }
        #endregion
        #region Genic Calendar
        [HttpGet("[action]/{Token}/{Year}")]
        public async Task<ActionResult<IEnumerable<GenicProfileCalendar>>> GetGenicProfileCalendar(Guid Token, int Year)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var result = await (from c in _context.GenicProfileCalendar where c.Date.Year == Year && c.LeaveFor == 1 select c).ToListAsync();

                    var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                    var weekends = GetDaysBetween(
                        new DateTime(Year, 1, 1),
                        new DateTime(Year, 12, 31))
                        .Where(d => !
                        ((d.DayOfWeek.ToString() == "Sunday") == genicprofile.Sunday ||
                        (d.DayOfWeek.ToString() == "Monday") == genicprofile.Monday ||
                        (d.DayOfWeek.ToString() == "Tuesday") == genicprofile.Tuesday ||
                        (d.DayOfWeek.ToString() == "Wednesday") == genicprofile.Wednesday ||
                        (d.DayOfWeek.ToString() == "Thursday") == genicprofile.Thursday ||
                        (d.DayOfWeek.ToString() == "Friday") == genicprofile.Friday ||
                        (d.DayOfWeek.ToString() == "Saturday") == genicprofile.Saturday)
                        );
                    int cn = result.Count();
                    int id = 0;
                    if (cn == 0) { id = 1; } else { id = result[0].GenicProfileId; }
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
                        result.Add(gpc);
                        cn++;
                    }
                    return result;
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
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> DisabledDateList(Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Engineer"));
                if (IsTokenValid)
                {
                    var disableddatelist = (from e in _context.GenicProfileCalendar
                                            where e.LeaveFor == 1 && e.IsWorking == false
                                            select new
                                            {
                                                year = e.Date.Year,
                                                month = e.Date.Month,
                                                day = e.Date.Day
                                            }).ToList();
                    return StatusCode(200, disableddatelist);
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(208, ex.Message.ToString());
            }
        }
        private IEnumerable<DateTime> GetDaysBetween(DateTime start, DateTime end)
        {
            for (DateTime i = start; i < end; i = i.AddDays(1))
            {
                yield return i;
            }
        }
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult<GenicProfileCalendar>> PostGenicProfileCalendar(GenicProfileCalendar genicprofilecalendar, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Engineer"));
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerDetails.Type == "Admin" || engineerDetails.Type == "SubAdmin")
                    {
                        genicprofilecalendar.LeaveFor = 1;
                        genicprofilecalendar.Status = "";
                        genicprofilecalendar.EngineerId = Guid.Parse(ConstantParameters.NULL_GUID_STRING);
                        genicprofilecalendar.IsWorking = false;
                        var IsExist = await _context.GenicProfileCalendar.AnyAsync(x => x.Date == genicprofilecalendar.Date && x.LeaveFor == 1);
                        if (!IsExist)
                        {
                            _context.GenicProfileCalendar.Add(genicprofilecalendar);
                            await _context.SaveChangesAsync();
                            return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Holiday is added successfully!" });
                        }
                        else
                        {
                            return StatusCode(202, new { result = "", Message = "failure", MessageDescription = "Date is Already Exist" });
                        }
                    }
                    if (engineerDetails.Type == "Engineer")
                    {
                        genicprofilecalendar.LeaveFor = 2;
                        genicprofilecalendar.Status = "Pending";
                        genicprofilecalendar.EngineerId = engineerDetails.Id;
                        genicprofilecalendar.EngineerName = engineerDetails.FullName;
                        genicprofilecalendar.IsWorking = false;
                        var IsExist = await _context.GenicProfileCalendar.AnyAsync(x => x.Date == genicprofilecalendar.Date && x.EngineerId == engineerDetails.Id);
                        if (!IsExist)
                        {
                            if (genicprofilecalendar.WorkType == "Full Day")
                            {
                                genicprofilecalendar.StartTime = new TimeSpan(00, 00, 00);
                                genicprofilecalendar.EndTime = new TimeSpan(23, 59, 59);
                            }
                            _context.GenicProfileCalendar.Add(genicprofilecalendar);
                            await _context.SaveChangesAsync();
                            return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Leave is apply successfully!" });
                        }
                        else
                        {
                            return StatusCode(202, new { result = "", Message = "failure", MessageDescription = "Date is Already Exist" });
                        }
                    }
                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                }
                else
                {
                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpDelete("[action]/{Token}/{Id}")]
        public async Task<ActionResult> DeleteGenicProfileCalendar(Guid Token, int Id)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Engineer"));
                if (IsTokenValid)
                {
                    var engineerDetails = (from e in _context.Login where e.Token == Token select e).FirstOrDefault();
                    if (engineerDetails.Type == "Admin")
                    {
                        var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.LeaveFor == 1).FirstOrDefault();
                        if (item == null)
                        {
                            return NotFound();
                        }
                        _context.GenicProfileCalendar.Remove(item);
                        await _context.SaveChangesAsync();
                        return StatusCode(204);
                    }
                    if (engineerDetails.Type == "Engineer")
                    {
                        var item = _context.GenicProfileCalendar.Where(c => c.Id == Id && c.LeaveFor == 2).FirstOrDefault();
                        if (item == null)
                        {
                            return NotFound();
                        }
                        _context.GenicProfileCalendar.Remove(item);
                        await _context.SaveChangesAsync();
                        return StatusCode(204);
                    }
                    return NotFound();
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
        #endregion
        #region Ticket Filter
        [HttpPost("[action]/{token}")]
        public ActionResult GetFilterTickets(TicketFilter ticketfilter, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var OldList = new List<Ticket>();
                var NewList1 = new List<Ticket>();
                var NewList2 = new List<Ticket>();
                var NewList3 = new List<Ticket>();
                var NewList4 = new List<Ticket>();
                var NewList5 = new List<Ticket>();
                var NewList6 = new List<Ticket>();
                var NewList7 = new List<Ticket>();
                var result = new Object();
                if (ticketfilter.CustomerId.Count == 0)
                {
                    NewList1 = _context.Ticket.Include(t => t.TicketTeams).Include(t => t.TicketWiseIssueType).ToList();
                }
                else
                {
                    foreach (var item in ticketfilter.CustomerId)
                    {
                        OldList = (from t in _context.Ticket where t.CustomerId == item select t).Include(t => t.TicketTeams).Include(t => t.TicketWiseIssueType).ToList();
                        foreach (var item2 in OldList)
                        {
                            NewList1.Add(item2);
                        }
                    }
                }

                if (ticketfilter.EngineerId.Count == 0)
                {
                    NewList3 = NewList1;
                }
                else
                {
                    foreach (var item in ticketfilter.EngineerId)
                    {
                        NewList2 = (from t in NewList1 join tt in _context.TicketTeam on t.Id equals tt.TicketId where tt.EngineerId == item select t).ToList();
                        foreach (var item2 in NewList2)
                        {
                            NewList3.Add(item2);
                        }
                    }
                }

                if (ticketfilter.Status.Count == 0)
                {
                    NewList5 = NewList3;
                }
                else
                {
                    foreach (var item in ticketfilter.Status)
                    {
                        if (item == "UNALLOCATED")
                        {
                            NewList4 = (from t in NewList3 where t.TicketTeams.Count == 0 select t).ToList();
                            foreach (var item2 in NewList4)
                            {
                                NewList5.Add(item2);
                            }
                        }
                        else
                        {
                            NewList4 = (from t in NewList3 where t.Status == item select t).ToList();
                            foreach (var item2 in NewList4)
                            {
                                NewList5.Add(item2);
                            }
                        }
                    }
                }

                if (ticketfilter.DepartmentId.Count == 0)
                {
                    NewList7 = NewList5;
                }
                else
                {
                    foreach (var item in ticketfilter.DepartmentId)
                    {
                        NewList6 = (from t in NewList5 where t.SMTPId == item select t).ToList();
                        foreach (var item2 in NewList6)
                        {
                            NewList7.Add(item2);
                        }
                    }
                }

                if (ticketfilter.DateFrom == null || ticketfilter.DateTo == null)
                {
                    result = (from c in NewList7
                              where UserType.Type == "Admin" ? c.IsReady == true :
                             UserType.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserType.SMTPId :
                             c.IsReady == true
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
                                  DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault()
                              })
               .Distinct().OrderByDescending(c => c.CreatedUtcDate).ToList();
                }
                else
                {
                    result = (from c in NewList7
                              where UserType.Type == "Admin" ? c.IsReady == true :
                             UserType.Type == "SubAdmin" ? c.IsReady == true && c.SMTPId == UserType.SMTPId :
                             c.IsReady == true
                              where c.OneOffAppointmentDate >= ticketfilter.DateFrom.Value.Date && c.OneOffAppointmentDate <= ticketfilter.DateTo.Value.Date.AddMinutes(1439)
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
                                  DepartmentName = (from d in _context.SMTPSettings where d.Id == c.SMTPId select d.SMTPName).FirstOrDefault()
                              })
               .Distinct().OrderByDescending(c => c.CreatedUtcDate).ToList();
                }
                return StatusCode(200, result);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                var NewList6 = new List<Ticket>();
                return StatusCode(200, NewList6);
            }
        }

        #endregion
        #region Quotation Filter
        [HttpPost("[action]/{token}")]
        public ActionResult GetFilterQuatations(QuoteFilter ticketfilter, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var OldList = new List<Quote>();
                var NewList1 = new List<Quote>();
                var NewList2 = new List<Quote>();
                var NewList3 = new List<Quote>();
                var NewList4 = new List<Quote>();
                var NewList5 = new List<Quote>();
                var result = new Object();
                if (ticketfilter.CustomerId.Count == 0)
                {
                    NewList1 = (from q in _context.Quote
                                join c in _context.Customer on q.CustomerId equals c.Id
                                where UserType.Type == "Admin" ? q.IsReady == true : q.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)
                                select q).ToList();
                }
                else
                {
                    foreach (var item in ticketfilter.CustomerId)
                    {
                        OldList = (from q in _context.Quote
                                   join c in _context.Customer on q.CustomerId equals c.Id
                                   where UserType.Type == "Admin" ? q.IsReady == true : q.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)
                                   where q.CustomerId == item
                                   select q).ToList();
                        foreach (var item2 in OldList)
                        {
                            NewList1.Add(item2);
                        }
                    }
                }

                if (ticketfilter.Status.Count == 0)
                {
                    NewList3 = NewList1;
                }
                else
                {
                    foreach (var item in ticketfilter.Status)
                    {
                        NewList2 = (from t in NewList1 where t.Status == item select t).ToList();
                        foreach (var item2 in NewList2)
                        {
                            NewList3.Add(item2);
                        }
                    }
                }

                if (ticketfilter.DepartmentId.Count == 0)
                {
                    NewList5 = NewList3;
                }
                else
                {
                    foreach (var item in ticketfilter.DepartmentId)
                    {
                        NewList4 = (from t in NewList3 where t.SMTPId == item select t).ToList();
                        foreach (var item2 in NewList4)
                        {
                            NewList5.Add(item2);
                        }
                    }
                }

                if (ticketfilter.DateFrom == null || ticketfilter.DateTo == null)
                {
                    result = (from c in NewList5 where c.IsReady == true select c).OrderByDescending(c => c.CreatedUtcDate).ToList();
                }
                else
                {
                    result = (from c in NewList5
                              where c.IsReady == true
                              where c.CreatedUtcDate >= ticketfilter.DateFrom.Value.Date && c.CreatedUtcDate <= ticketfilter.DateTo.Value.Date.AddMinutes(1439)
                              select c).OrderByDescending(c => c.CreatedUtcDate).ToList();
                }
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                var NewList6 = new List<Quote>();
                return StatusCode(203, new { result = NewList6, Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
        #region Globall Filter
        [HttpPost("[action]/{token}")]
        public ActionResult GlobalFilterSearch(GlobalFilter globalfilter, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                var result1 = (from t in _context.Ticket
                               where UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true
                               where t.IsReady == true
                               where t.TicketId.Contains(globalfilter.query) || t.Title.Contains(globalfilter.query) || t.Description.Contains(globalfilter.query) || t.Status.Contains(globalfilter.query) || t.CustomerName.Contains(globalfilter.query) || t.CustomerEmail.Contains(globalfilter.query) || t.CustomerContactNo.Contains(globalfilter.query) || t.CustomerCompanyName.Contains(globalfilter.query) || t.CustomerAddress.Contains(globalfilter.query)
                               select new { t.Id, v1 = t.TicketId, v2 = t.Title }).OrderByDescending(c => c.v1).ToList();
                var result2 = (from q in _context.Quote
                               join c in _context.Customer on q.CustomerId equals c.Id
                               where UserType.Type == "Admin" ? q.IsReady == true : q.IsReady == true
                               where q.QuoteId.Contains(globalfilter.query) || q.JobTitle.Contains(globalfilter.query) || q.Attention.Contains(globalfilter.query) || q.SalesRepresentative.Contains(globalfilter.query) || q.PreparedBy.Contains(globalfilter.query) || q.CustomerName.Contains(globalfilter.query) || q.CustomerEmail.Contains(globalfilter.query) || q.CustomerContactNo.Contains(globalfilter.query) || q.CompanyName.Contains(globalfilter.query)
                               select new { q.Id, v1 = q.QuoteId, v2 = q.JobTitle }).OrderByDescending(c => c.v1).ToList();
                var result3 = (from q in _context.Customer
                               join a in _context.ArrayofKey on q.Id equals a.CustomerId
                               join c in _context.CustomerContactPerson on q.Id equals c.CustomerId
                               where UserType.Type == "Admin" ? q.IsReady == true : q.IsReady == true
                               where q.NameTitle.Contains(globalfilter.query) || q.FirstName.Contains(globalfilter.query) || q.LastName.Contains(globalfilter.query) || q.CustomerId.Contains(globalfilter.query) || q.AddressStreet1.Contains(globalfilter.query) || q.AddressStreet2.Contains(globalfilter.query) || q.AddressUnitNo.Contains(globalfilter.query) || q.AddressZipCode.Contains(globalfilter.query) || a.Value.Contains(globalfilter.query) || c.FirstName.Contains(globalfilter.query) || c.LastName.Contains(globalfilter.query) || c.Email.Contains(globalfilter.query) || c.Phone.Contains(globalfilter.query)
                               select new { q.Id, v1 = q.CustomerId, v2 = q.NameTitle + " " + q.FirstName + " " + q.LastName, v3 = q.CustomerLogo }).Distinct().OrderByDescending(c => c.v1).ToList();
                var result4 = (from e in _context.Engineer
                               where e.IsReady == true
                               where e.EngineerId.Contains(globalfilter.query) || e.EngineerName.Contains(globalfilter.query) || e.EngineerEmail.Contains(globalfilter.query) || e.EngineerPhone.Contains(globalfilter.query) || e.AddressStreet1.Contains(globalfilter.query) || e.AddressStreet2.Contains(globalfilter.query) || e.AddressUnitNo.Contains(globalfilter.query) || e.AddressZipCode.Contains(globalfilter.query) || e.EmergencyName.Contains(globalfilter.query) || e.EmergencyNumber.Contains(globalfilter.query)
                               select new { e.Id, v1 = e.EngineerId, v2 = e.EngineerName, v3 = e.EngineerLogo }).OrderByDescending(c => c.v1).ToList();
                return StatusCode(200, new { Item1 = result1, Item2 = result2, Item3 = result3, Item4 = result4 });
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                var NewList4 = new List<Ticket>();
                return StatusCode(200, NewList4);
            }
        }
        #endregion
        #region Tax
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult<Tax>> PutTax(Tax tax, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Tax.Any(b => b.TaxName == tax.TaxName & b.Id != tax.Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Tax Name already exist" });
                    }
                    _context.Entry(tax).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        public async Task<ActionResult<Tax>> PostTax(Tax tax, Guid token)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Tax.Any(b => b.TaxName == tax.TaxName))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Tax Name already exist" });
                    }
                    int defaulttax = await (from c in _context.Tax select c).CountAsync();
                    if (defaulttax == 0) { tax.IsDefault = true; }
                    _context.Tax.Add(tax);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Tax add successfully" });
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
        public async Task<ActionResult> GetTax(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Tax.ToListAsync();
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
        [HttpPut("[action]/{token}/{Id}")]
        public async Task<ActionResult> PutTaxStatusUpdate(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Tax.Any(b =>  b.Id != Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Tax details not exist" });
                    }
                    var taxDetails = (from t in _context.Tax where t.Id == Id select t).FirstOrDefault();
                    if (taxDetails.Status) { taxDetails.Status = false; } else { taxDetails.Status = true; }
                    _context.Entry(taxDetails).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        [HttpPut("[action]/{token}/{Id}")]
        public async Task<ActionResult> PutTaxIsDefaultUpdate(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Tax.Any(b => b.Id != Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Tax details not exist" });
                    }
                    var tax = (from c in _context.Tax where c.Id == Id select c).FirstOrDefault();
                    tax.IsDefault = true;
                    _context.Entry(tax).State = EntityState.Modified;
                    _context.SaveChanges();

                    var tax2 = await (from c in _context.Tax where c.Id != Id select c).ToListAsync();
                    foreach (var item in tax2)
                    {
                        item.IsDefault = false;
                        _context.Entry(item).State = EntityState.Modified;
                    }
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        #region Payment Mode
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult<PaymentMode>> PutPaymentMode(PaymentMode paymentmode, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.PaymentMode.Any(b => b.ModeName == paymentmode.ModeName & b.Id != paymentmode.Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Payment Mode Name already exist" });
                    }
                    _context.Entry(paymentmode).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        public async Task<ActionResult<PaymentMode>> PostPaymentMode(PaymentMode paymentmode, Guid token)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.PaymentMode.Any(b => b.ModeName == paymentmode.ModeName))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Payment Mode Name already exist" });
                    }
                    _context.PaymentMode.Add(paymentmode);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Payment Mode add successfully" });
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
        public async Task<ActionResult> GetPaymentMode(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.PaymentMode.ToListAsync();
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
        [HttpPut("[action]/{token}/{Id}")]
        public async Task<ActionResult> PutPaymentModeStatusUpdate(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.PaymentMode.Any(b => b.Id != Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Tax details not exist" });
                    }
                    var PaymentMode = (from t in _context.PaymentMode where t.Id == Id select t).FirstOrDefault();
                    if (PaymentMode.Status) { PaymentMode.Status = false; } else { PaymentMode.Status = true; }
                    _context.Entry(PaymentMode).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        #region Ticket Issue Type
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult<TicketIssueType>> PutTicketIssueType(TicketIssueType ticketissuetype, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.TicketIssueType.Any(b => b.Name == ticketissuetype.Name & b.Id != ticketissuetype.Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Ticket Issue Type Name already exist" });
                    }
                    _context.Entry(ticketissuetype).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        public async Task<ActionResult<TicketIssueType>> PostTicketIssueType(TicketIssueType ticketissuetype, Guid token)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.TicketIssueType.Any(b => b.Name == ticketissuetype.Name))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Ticket Issue Type Name already exist" });
                    }
                    _context.TicketIssueType.Add(ticketissuetype);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Ticket Issue Type add successfully" });
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
        public async Task<ActionResult> GetTicketIssueType(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.TicketIssueType.ToListAsync();
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
        #region VTS
        [HttpGet("[action]/{code}")]
        public async Task<ActionResult> GetClients(string code)
        {
            try
            {
                bool IsTokenValid = await _context.GenicClients.AnyAsync(x => x.CompanyCode == code);
                if (IsTokenValid)
                {
                    var result0 = (from x in _context.GenicClients where x.CompanyCode == code select x).FirstOrDefault();
                    if (result0.IsActive)
                    {
                        var result = (from x in _context.GenicClients
                                      where x.CompanyCode == code
                                      select new
                                      {
                                          URL = x.CompanyUrl,
                                          Token = x.Token
                                      }).FirstOrDefault();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Inactive Account" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid code" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion
        #region Begin Genic Docs
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetGenicDocExt(Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from i in _context.GenicFileExtenstion orderby i.Id descending select i).ToListAsync();
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
        public async Task<ActionResult<GenicFileExtenstion>> PostGenicDocExt(GenicFileExtenstion gfe, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    if (_context.GenicFileExtenstion.Any(b => b.ExtentionName == gfe.ExtentionName))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = gfe.ExtentionName + " is already exists" });
                    }
                    else
                    {
                        _context.GenicFileExtenstion.Add(gfe);
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.GenicFileExtenstion orderby i.Id descending select i).ToListAsync();
                        return StatusCode(201, new { result, Message = "success", MessageDescription = gfe.ExtentionName + " added successfully" });
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
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult<GenicFileExtenstion>> PutGenicDocExt(GenicFileExtenstion gfe, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var previousdata = (from p in _context.GenicFileExtenstion where p.Id == gfe.Id select p).FirstOrDefault();
                    previousdata.ExtentionName = gfe.ExtentionName;
                    previousdata.IsActive = gfe.IsActive;
                    _context.Entry(previousdata).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    var result = await (from i in _context.GenicFileExtenstion orderby i.Id descending select i).ToListAsync();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "Information Updated successfully" });
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
        [HttpDelete("[action]/{Token}/{Id}")]
        public async Task<ActionResult<GenicFileExtenstion>> RemoveGenicDocExt(Guid Token, int Id)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    if (!_context.GenicFileExtenstion.Any(e => e.Id == Id))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Not found" });
                    }
                    else
                    {
                        var genicext = await _context.GenicFileExtenstion.Where(x => x.Id == Id).FirstOrDefaultAsync();
                        _context.GenicFileExtenstion.Remove(genicext);
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.GenicFileExtenstion orderby i.Id descending select i).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "removed successfully" });
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
        #endregion
    }
}