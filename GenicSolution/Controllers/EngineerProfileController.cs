using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using static GenicSolution.Entities.GlobalParameters;

namespace GenicSolution.Controllers
{
    [Route("api/app/[controller]")]
    [ApiController]
    public class EngineerProfileController : Controller
    {
        private readonly EntityFrameworkDbContext _context;
        private object obj;
        public EngineerProfileController(EntityFrameworkDbContext context)
        {
            _context = context;
        }

        // GET: api/Engineers/5
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<Engineer>> GetEngineerProfile(Guid Token)
        {
            try
            {
                var IsExist = await _context.Login.Where(x => x.Token == Token).Select(w => w).FirstOrDefaultAsync();
                if (IsExist != null)
                {
                    if (IsExist.Type == "Engineer")
                    {
                        var result = await (from i in _context.Engineer where i.Id == IsExist.Id select i).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
                    }
                    if (IsExist.Type == "Customer")
                    {
                        var result = await (from i in _context.Customer where i.Id == IsExist.Id select i).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Unauthorized Access" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult<GenicProfile>> getGenicProfile(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var result = (from s in _context.GenicProfile
                                  select new
                                  {
                                      s.Name,
                                      s.Logo,
                                      s.TimeZone,
                                      s.ContactNumber,
                                      s.WhatsAppNumber,
                                      s.Email,
                                      s.SundayString,
                                      s.MondayString,
                                      s.TuesdayString,
                                      s.WednesdayString,
                                      s.ThursdayString,
                                      s.FridayString,
                                      s.SaturdayString,
                                      s.Sunday,
                                      s.Monday,
                                      s.Tuesday,
                                      s.Wednesday,
                                      s.Thursday,
                                      s.Friday,
                                      s.Saturday,
                                      s.AddressStreet1,
                                      s.AddressStreet2,
                                      s.AddressUnitNo,
                                      s.AddressCity,
                                      s.AddressState,
                                      s.AddressCountry,
                                      s.AddressZipCode

                                  }).FirstOrDefault();
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
        public async Task<ActionResult> PasswordChange(ForgetPassword result, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    if (result.NewPassword.Length >= 6 && result.NewPassword.Length <= 16)
                    {
                        var login = await (from c in _context.Login where c.Token == Token && c.Password == result.OldPassword select c).FirstOrDefaultAsync();
                        if (login == null)
                        {
                            obj = new { result = "", Message = "failure", MessageDescription = "Make sure your old password is correct?" };
                            return StatusCode(200, obj);
                        }
                        else
                        {
                            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                            login.Password = result.NewPassword;
                            login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                            await _context.SaveChangesAsync();
                            obj = new { result = "", Message = "success", MessageDescription = "Password Changed successfully" };
                            return StatusCode(200, obj);
                        }
                    }
                    else
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Minimum 6-to-16 characters Password length Required" };
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
        [HttpPost("[action]/{Token}")]
        public async Task<ActionResult> LocationHistory(EngineerLocation engineerlocation, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    var lastlocation = (from l in _context.EngineerLocation where l.EngineerId == engineerlocation.EngineerId && l.LastLocation == true select l).ToList();
                    foreach (var item in lastlocation)
                    {
                        item.LastLocation = false;
                        _context.Entry(item).State = EntityState.Modified;
                        _context.SaveChanges();
                    }

                    string timeZone = await (from c in _context.GenicProfile select c.TimeZone).FirstOrDefaultAsync();
                    engineerlocation.LocationDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                    engineerlocation.LastLocation = true;
                    _context.EngineerLocation.Add(engineerlocation);
                    await _context.SaveChangesAsync();
                    obj = new { result = "", Message = "success", MessageDescription = "Success" };
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
        [HttpPost("[action]/{Token}/{type}")]
        public ActionResult EngineersAttendance(EngineerAttendance engineerattendance, Guid Token, string type)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Engineer");
                if (IsTokenValid)
                {
                    engineerattendance.EngineerId = (from c in _context.Login where c.Token == Token select c.Id).FirstOrDefault();
                    var locimage = engineerattendance.EngineerAttendanceImage;
                    engineerattendance.EngineerAttendanceImage = null;
                    var gp = (from c in _context.GenicProfile select c).FirstOrDefault();
                    DateTime todaydate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                    var Startdetails = (from l in _context.EngineerAttendance
                                        where l.EngineerId == engineerattendance.EngineerId &&
                                        l.StartDate.Value.Year == todaydate.Year &&
                                        l.StartDate.Value.Month == todaydate.Month &&
                                        l.StartDate.Value.Day == todaydate.Day
                                        select l).FirstOrDefault();
                    if (type == "validate") {
                        if (Startdetails is null)
                        {
                            return StatusCode(200, new { result = "", Message = "failure", Status = 0, Time = "", MessageDescription = "Start your day" });
                        }
                        if (Startdetails.EndDate is null)
                        {
                            return StatusCode(200, new { result = Startdetails.StartDate, Message = "failure", Status = 1, Time = "Started on " + Startdetails.StartDate.Value.ToString("hh:mm tt"), MessageDescription =  "Stop your day" });
                        }
                        if (Startdetails.StartDate != null && Startdetails.EndDate != null)
                        {
                            return StatusCode(200, new { result = "", Message = "success", Status = 2, Time = "Start time is " + Startdetails.StartDate.Value.ToString("hh:mm tt") + " stop on " + Startdetails.EndDate.Value.ToString("hh:mm tt") + ".", MessageDescription = "Today attendance is completed" });
                        }
                    }
                    if (type == "start")
                    {

                        if (Startdetails is null)
                        {

                            var checkEngOnLeave = (from g in _context.GenicProfileCalendar 
                                                   where g.EngineerId == engineerattendance.EngineerId &&
                                                   g.Date.Year == todaydate.Year &&
                                                   g.Date.Month == todaydate.Month &&
                                                   g.Date.Day == todaydate.Day &&
                                                   g.LeaveFor == 2 &&
                                                   g.IsWorking == false &&
                                                   g.Status == "Approved"
                                                   select g.Id).Any();
                            if (checkEngOnLeave) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "You can't start, becouse today you on the leave." }); }
                            EngineerAttendance _obj = new EngineerAttendance();
                            _obj.EngineerId = engineerattendance.EngineerId;
                            _obj.StartLatLong = engineerattendance.StartLatLong;
                            _obj.StartAddress = engineerattendance.StartAddress;
                            _obj.StartDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            _obj.StartIP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                            _obj.Remark = engineerattendance.Remark;
                            _context.EngineerAttendance.Add(_obj);
                            _context.SaveChanges();
                            #region save location image begin
                            foreach (var item in locimage)
                            {
                                try
                                {
                                    //long Base64Size = Convert.ToInt32(item.Image);
                                    AWSHelper awshelper = new AWSHelper();
                                    string msg = string.Empty;
                                    string end_point = GlobalParameters.AWS_FOLDER + "/Engineer/Location/" + GlobalParameters.MillisecondsTimestamp() + item.Ext;
                                    bool isUploaded = awshelper.SendBase64ToAWS(item.Image, end_point, out msg);
                                    if (isUploaded) { item.Image = msg; }
                                    EngineerAttendanceImage _objimg = new EngineerAttendanceImage();
                                    _objimg.EngineerAttendanceId = _obj.Id;
                                    _objimg.Status = "Start";
                                    _objimg.Image = item.Image;
                                    _objimg.Ext = item.Ext;
                                    _objimg.Size = item.Size;
                                    _context.EngineerAttendanceImage.Add(_objimg);
                                    _context.SaveChanges();
                                }
                                catch { }
                            }
                            #endregion save singnature end
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Day started on " + _obj.StartDate });
                        }
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Day already start on " + Startdetails.StartDate });
                    }
                    if (type == "stop")
                    {
                        if (Startdetails is null)
                        {
                            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Today not started yet!" });
                        }
                        if (Startdetails.EndDate is null)
                        {
                            Startdetails.EndLatLong = engineerattendance.EndLatLong;
                            Startdetails.EndAddress = engineerattendance.EndAddress;
                            Startdetails.EndDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            Startdetails.EndIP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                            Startdetails.Remark = engineerattendance.Remark;
                            _context.Entry(Startdetails).State = EntityState.Modified;
                            _context.SaveChanges();
                            #region save location image begin
                            foreach (var item in locimage)
                            {
                                try
                                {
                                    AWSHelper awshelper = new AWSHelper();
                                    string msg = string.Empty;
                                    string end_point = GlobalParameters.AWS_FOLDER + "/Engineer/Location/" + GlobalParameters.MillisecondsTimestamp() + ".jpeg";
                                    bool isUploaded = awshelper.SendBase64ToAWS(item.Image, end_point, out msg);
                                    if (isUploaded) { item.Image = msg; }
                                    EngineerAttendanceImage _objimg = new EngineerAttendanceImage();
                                    _objimg.EngineerAttendanceId = Startdetails.Id;
                                    _objimg.Status = "Stop";
                                    _objimg.Image = item.Image;
                                    _objimg.Ext = item.Ext;
                                    _objimg.Size = item.Size;
                                    _context.EngineerAttendanceImage.Add(_objimg);
                                    _context.SaveChanges();
                                }
                                catch { }
                            }
                            #endregion save singnature end
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Day stop on " + Startdetails.StartDate });
                        }
                        if (Startdetails.EndDate.Value.Year == todaydate.Year && Startdetails.EndDate.Value.Month == todaydate.Month && Startdetails.EndDate.Value.Day == todaydate.Day)
                        {
                            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Day already stop on " + Startdetails.EndDate });
                        }
                    }
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid request format start and stop not found" });
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex };
                return StatusCode(200, obj);
            }
        }

        #region Rating
        [HttpGet("[action]/{TicketId}/{Rating}/{Token}")]
        public async Task<ActionResult> GetTicketRating(Guid TicketId, int Rating, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Customer");
                if (IsTokenValid)
                {
                    var _customerdetails = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();
                    var _ticket = (from t in _context.Ticket where t.Id == TicketId && t.Rating == 0 && t.RatingFeedback == null && t.CustomerId == _customerdetails.Id select t).FirstOrDefault();
                    if (_ticket != null)
                    {
                        if (Rating > 0 || Rating < 6) { _ticket.Rating = Rating; }
                        else { _ticket.Rating = 0; }
                        _ticket.Rating = Rating;
                        await _context.SaveChangesAsync();
                        return StatusCode(200, new { result = new { _ticket.TicketId, _ticket.Rating, RatingFeedback = "" }, Message = "success", MessageDescription = "success" });
                    }
                    else
                    {
                        var _ticket2 = (from t in _context.Ticket where t.Id == TicketId && t.CustomerId == _customerdetails.Id select t).FirstOrDefault();
                        if (_ticket2 == null)
                        {
                            return StatusCode(200, new { result = new { TicketId = "", Rating = 0, RatingFeedback= "" }, Message = "error", MessageDescription = "We're sorry. We were not able to find a match." });
                        }
                        else
                        {
                            if (string.IsNullOrEmpty(_ticket2.RatingFeedback))
                            {
                                return StatusCode(200, new { result = new { _ticket2.TicketId, _ticket2.Rating, RatingFeedback = "" }, Message = "success", MessageDescription = "success" });
                            }
                            else
                            {
                                return StatusCode(200, new { result = new { _ticket2.TicketId, _ticket2.Rating, _ticket2.RatingFeedback }, Message = "failure", MessageDescription = "we have already received your Feedback." });
                            }
                        }
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
        [HttpPut("[action]/{Token}")]
        public async Task<ActionResult> GetTicketRating(TempParameters obj, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Customer");
                if (IsTokenValid)
                {
                    var _customerdetails = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();

                    var _ticket = (from t in _context.Ticket where t.Id == obj.TicketId && string.IsNullOrEmpty(t.RatingFeedback) == true && t.CustomerId == _customerdetails.Id select t).FirstOrDefault();
                    if (_ticket != null)
                    {
                        if (obj.id > 0 || obj.id < 6) { _ticket.Rating = obj.id; }
                        else { _ticket.Rating = 0; }
                        if (obj.v1 == null) { obj.v1 = ""; }
                        _ticket.Rating = obj.id;
                        _ticket.RatingFeedback = obj.v1;
                        await _context.SaveChangesAsync();
                        return StatusCode(200, new { result = new { _ticket.Rating, _ticket.RatingFeedback }, Message = "success", MessageDescription = "Thanks for providing valuable feedback" });
                    }
                    else
                    {
                        var _ticket2 = (from t in _context.Ticket where t.Id == obj.TicketId && t.CustomerId == _customerdetails.Id select t).FirstOrDefault();
                        return StatusCode(200, new { result = new { _ticket2.Rating, _ticket2.RatingFeedback }, Message = "warning", MessageDescription = "Invalid request or already gaving rating" });
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