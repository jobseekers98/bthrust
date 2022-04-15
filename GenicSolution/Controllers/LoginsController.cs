using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        private object obj;
        [Obsolete]
        public LoginsController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        // POST: api/Logins
        [HttpPost]
        public async Task<ActionResult<Login>> PostLogin(Login login)
        {
            try
            {
                var Loginresult = await (from c in _context.Login
                                    where c.UserName == login.UserName &&
                                    c.Password == login.Password
                                    select c ).ToListAsync();
                if (Loginresult.Count == 0)
                {
                    return StatusCode(404, login);
                }
                else
                {
                    // result.Token = Guid.NewGuid(); // for sigle user login
                    // await _context.SaveChangesAsync();
                    var gprofile = (from c in _context.GenicProfile select c).FirstOrDefault();
                    switch (Loginresult[0].Type)
                    {
                        case "Admin":
                            bool AdminIsLoginAccess = await (from e in _context.Login where e.Id == Loginresult[0].Id select e.IsActive).FirstOrDefaultAsync();
                            if (AdminIsLoginAccess)
                            {
                                var result = (from c in Loginresult
                                              select new
                                              {
                                                  c.Id,
                                                  c.UserName,
                                                  c.FullName,
                                                  c.MobileNumber,
                                                  c.Email,
                                                  c.Type,
                                                  c.Logo,
                                                  Designation = 0,
                                                  c.Token,
                                                  VTSToken = "",
                                                  c.LastLoginUtcDate,
                                                  c.ModifiedUtcDate,
                                                  c.CreatedUtcDate,
                                                  Ticket = GlobalParameters.FSM_TICKET_NAME,
                                                  Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                                  Product = GlobalParameters.FSM_PRODUCT_NAME,
                                                  Permissions = (from p in _context.Permissions where p.Id == c.PermissionId select p).FirstOrDefault()
                                              }).FirstOrDefault();
                                var updatelastlogin = await (from e in _context.Login where e.Id == result.Id select e).FirstOrDefaultAsync();
                                updatelastlogin.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                                await _context.SaveChangesAsync();
                                return StatusCode(200, result);
                            }
                            else
                            {
                                return StatusCode(401);
                            }
                        case "SubAdmin":
                            bool SubAdminIsLoginAccess = await (from e in _context.Login where e.Id == Loginresult[0].Id select e.IsActive).FirstOrDefaultAsync();
                            if (SubAdminIsLoginAccess)
                            {
                                var result = (from c in Loginresult
                                         select new
                                         {
                                             c.Id,
                                             c.UserName,
                                             c.FullName,
                                             c.MobileNumber,
                                             c.Email,
                                             c.Type,
                                             c.Logo,
                                             Designation = 0,
                                             c.Token,
                                             VTSToken = "",
                                             c.LastLoginUtcDate,
                                             c.ModifiedUtcDate,
                                             c.CreatedUtcDate,
                                             Ticket = GlobalParameters.FSM_TICKET_NAME,
                                             Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                             Product = GlobalParameters.FSM_PRODUCT_NAME,
                                             Permissions = (from p in _context.Permissions where p.Id == c.PermissionId select p).FirstOrDefault()
                                         }).FirstOrDefault();
                                var updatelastlogin = await (from e in _context.Login where e.Id == result.Id select e).FirstOrDefaultAsync();
                                updatelastlogin.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                                await _context.SaveChangesAsync();
                                return StatusCode(200, result);
                            }
                            else
                            {
                                return StatusCode(401);
                            }
                        case "Engineer":
                            bool engineerIsLoginAccess = await (from e in _context.Engineer where e.Id == Loginresult[0].Id select e.LoginAccess).FirstOrDefaultAsync();
                            if (engineerIsLoginAccess)
                            {
                                var updatelastlogin = await (from e in _context.Login where e.Id == Loginresult[0].Id select e).FirstOrDefaultAsync();
                                updatelastlogin.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                                await _context.SaveChangesAsync();

                                var result = (from c in Loginresult
                                              select new
                                              {
                                                  c.Id,
                                                  c.UserName,
                                                  c.FullName,
                                                  c.MobileNumber,
                                                  c.Email,
                                                  c.Type,
                                                  c.Logo,
                                                  Designation = (from e in _context.Engineer where e.Id == c.Id select e.Type).FirstOrDefault(),
                                                  c.Token,
                                                  VTSToken = "",
                                                  c.LastLoginUtcDate,
                                                  c.ModifiedUtcDate,
                                                  c.CreatedUtcDate,
                                                  Ticket = GlobalParameters.FSM_TICKET_NAME,
                                                  Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                                  Product = GlobalParameters.FSM_PRODUCT_NAME,
                                                  Permissions = (from p in _context.Permissions where p.Id == c.PermissionId select p).FirstOrDefault()
                                              }).FirstOrDefault();
                                return StatusCode(200, result);
                            }
                            else
                            {
                                return StatusCode(401);
                            }
                        case "Customer":
                            bool customerIsLoginAccess = await (from e in _context.Customer where e.Id == Loginresult[0].Id select e.Status).FirstOrDefaultAsync();
                            if (customerIsLoginAccess)
                            {
                                var updatelastlogin = await (from e in _context.Login where e.Id == Loginresult[0].Id select e).FirstOrDefaultAsync();
                                updatelastlogin.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                                await _context.SaveChangesAsync();
                                var result = (from c in Loginresult
                                              select new
                                              {
                                                  c.Id,
                                                  c.UserName,
                                                  c.FullName,
                                                  c.MobileNumber,
                                                  c.Email,
                                                  c.Type,
                                                  c.Logo,
                                                  Designation = 0,
                                                  c.Token,
                                                  VTSToken = "",
                                                  c.LastLoginUtcDate,
                                                  c.ModifiedUtcDate,
                                                  c.CreatedUtcDate,
                                                  Ticket = GlobalParameters.FSM_TICKET_NAME,
                                                  Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                                  Product = GlobalParameters.FSM_PRODUCT_NAME,
                                                  Permissions = (from p in _context.Permissions where p.Id == c.PermissionId select p).FirstOrDefault()
                                              }).FirstOrDefault();
                                return StatusCode(200, result);
                            }
                            else
                            {
                                return StatusCode(401);
                            }
                        default:
                            return StatusCode(404, Loginresult[0]);
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> DriveLogins(Guid token)
        {
            try
            {
                bool IsExist = await (from e in _context.Login where e.AuthenticateToken == token select e).AnyAsync();
                if (IsExist)
                {
                    var result = (from c in _context.Login
                                  where c.AuthenticateToken == token
                                  select new
                                  {
                                      c.Id,
                                      c.UserName,
                                      c.FullName,
                                      c.MobileNumber,
                                      c.Email,
                                      c.Type,
                                      c.Logo,
                                      Designation = 0,
                                      c.Token,
                                      VTSToken = "",
                                      c.LastLoginUtcDate,
                                      c.ModifiedUtcDate,
                                      c.CreatedUtcDate,
                                      Permissions = (from p in _context.Permissions where p.Id == c.PermissionId select p).FirstOrDefault()
                                  }).FirstOrDefault();
                    var updatelastlogin = await (from e in _context.Login where e.Id == result.Id select e).FirstOrDefaultAsync();
                    updatelastlogin.AuthenticateToken = Guid.NewGuid();
                    var gprofile = (from c in _context.GenicProfile select c).FirstOrDefault();
                    string desc = result.FullName + " is Login at " + GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                    string redesc = result.FullName + " is Login at " + GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                    postUserLog(result.Id, result.FullName, "Login", result.Id, "Login", desc, redesc);
                    await _context.SaveChangesAsync();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Login Successfully" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Timeout or expired, please try again" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("[action]/{Token}")]
        public ActionResult PasswordChange(ForgetPassword result, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin" || x.Type == "Customer"));
                if (IsTokenValid)
                {
                    bool IsExist = _context.Login.Any(e => e.UserName == result.UserName);
                    if (IsExist)
                    {
                        var login = (from c in _context.Login where c.Token == Token && c.Password == result.OldPassword select c).FirstOrDefault();
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
                                _context.SaveChanges();
                                return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Password update successfully" });
                            }
                            else
                            {
                                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Minimum 6 characters Password length Required" });
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
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expire" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        /// <summary>
        /// Login for Android App
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult<Login> EngineerLogin(Login login)
        {
            try
            {
                var Loginresult = (from c in _context.Login
                                   where c.UserName == login.UserName &&
                                   c.Password == login.Password
                                   select c).ToList();
                if (Loginresult.Count == 0)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid Username and Password" });
                }
                else
                {
                    var gprofile = (from c in _context.GenicProfile select c).FirstOrDefault();
                    switch (Loginresult[0].Type)
                    {
                        case "Engineer":
                            bool engineerIsLoginAccess = (from e in _context.Engineer where e.Id == Loginresult[0].Id select e.LoginAccess).FirstOrDefault();
                            if (engineerIsLoginAccess)
                            {
                                 var _userdetails = (from e in _context.Login where e.Id == Loginresult[0].Id select e).FirstOrDefault();
                                _userdetails.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
								if (!string.IsNullOrEmpty(login.AppToken))
                                {
                                    _userdetails.DeviceId = login.DeviceId;
                                    _userdetails.AppToken = login.AppToken;
                                    _userdetails.Ostype = login.Ostype;
                                    _userdetails.Devicename = login.Devicename;
                                    _userdetails.Deviceversion = login.Deviceversion;
                                }
                                _context.Entry(_userdetails).State = EntityState.Modified;
                                _context.SaveChanges();
                                var result = (from x in Loginresult
                                              select new
                                              {
                                                  x.Id,
                                                  x.UserName,
                                                  x.FullName,
                                                  x.Token,
                                                  x.CreatedUtcDate,
                                                  x.LastLoginUtcDate,
                                                  Designation = (from e in _context.Engineer where e.Id == x.Id select e.Type).FirstOrDefault(),
                                                  Type = Loginresult[0].Type,
                                                  Ticket = GlobalParameters.FSM_TICKET_NAME,
                                                  Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                                  Product = GlobalParameters.FSM_PRODUCT_NAME,
                                                  Permissions = (from o in _context.Permissions where o.Id == x.PermissionId select new { 
                                                      o.AllowCustomerName, 
                                                      o.AllowReceivePayment, 
                                                      o.ProductWarranty, 
                                                      o.IsProductOnly,
                                                      o.GeoLocation
                                                  }).FirstOrDefault(),
                                                  Location = (from e in _context.GenicProfile select new { e.Geolocation, e.GeolocationAddress, e.GeolocationImage }).FirstOrDefault()
                                              }).FirstOrDefault();
                                return StatusCode(200, new { result, Message = "success", MessageDescription = "Login Successfully" });
                            }
                            else
                            {
                                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Login Disabled" });
                            }
                        case "Customer":
                            bool customerIsLoginAccess = (from e in _context.Customer where e.Id == Loginresult[0].Id select e.Status).FirstOrDefault();
                            if (customerIsLoginAccess)
                            {
                                var updatelastlogin = (from e in _context.Login where e.Id == Loginresult[0].Id select e).FirstOrDefault();
                                updatelastlogin.LastLoginUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gprofile.TimeZone);
                                _context.SaveChanges();
                                var result = (from x in Loginresult
                                              select new
                                              {
                                                  x.Id,
                                                  x.UserName,
                                                  x.FullName,
                                                  x.Token,
                                                  x.CreatedUtcDate,
                                                  x.LastLoginUtcDate,
                                                  Designation = (from e in _context.Engineer where e.Id == x.Id select e.Type).FirstOrDefault(),
                                                  Type = Loginresult[0].Type,
                                                  Ticket = GlobalParameters.FSM_TICKET_NAME,
                                                  Engineer = GlobalParameters.FSM_ENGINEER_NAME,
                                                  Product = GlobalParameters.FSM_PRODUCT_NAME,
                                                  Permissions = (from o in _context.Permissions where o.Id == x.PermissionId select new { o.AllowCustomerName, o.AllowReceivePayment, o.ProductWarranty, o.IsProductOnly }).FirstOrDefault(),
                                                  Location = (from e in _context.GenicProfile select new { e.Geolocation, e.GeolocationAddress, e.GeolocationImage }).FirstOrDefault()
                                              }).FirstOrDefault();
                                return StatusCode(200, new { result, Message = "success", MessageDescription = "Login Successfully" });
                            }
                            else
                            {
                                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Login Disabled" });
                            }
                        default:
                            return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Unauthorized Access" });
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        #region Forget Password Methods
        /// <summary>
        /// Forget Password Step 1 Validate Email Address/Username
        /// </summary>
        /// <param name="login"></param>
        /// <returns>Send OTP if email is exist </returns>
        [HttpPost("[action]")]
        [Obsolete]
        public async Task<ActionResult> ForgotPasswordStep1(ForgetPassword result)
        {
            try
            {
                bool IsExist = await _context.Login.AnyAsync(e => e.UserName == result.UserName || e.Email == result.UserName);
                if (IsExist)
                {
                    var login = await (from c in _context.Login where c.UserName == result.UserName || c.Email == result.UserName select c).FirstOrDefaultAsync();
                    Random ran = new Random();
                    string _otp = ran.Next(1000, 9999).ToString();

                    bool IsOTPExist = await _context.LoginUsersOTP.AnyAsync(e => e.Id == login.Id);
                    if (IsOTPExist)
                    {
                        var updateloginotp = await (from c in _context.LoginUsersOTP where c.Id == login.Id select c).FirstOrDefaultAsync();
                        updateloginotp.OTP = _otp;
                        updateloginotp.flag = false;
                        updateloginotp.Date = DateTime.UtcNow;
                        await _context.SaveChangesAsync();
                    }
                    else
                    {
                        LoginUsersOTP obj = new LoginUsersOTP
                        {
                            Id = login.Id,
                            OTP = _otp,
                            flag = false,
                            Date = DateTime.UtcNow
                        };
                        _context.LoginUsersOTP.Add(obj);
                        await _context.SaveChangesAsync();
                    }
                    MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                    mail.SendOTPonEmail(login.FullName, result.UserName, _otp, login.SMTPId);
                    obj = new { result = "", Message = "success", MessageDescription = "Mail has been sent" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Email address not found" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {

                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]")]
        public async Task<ActionResult> ForgotPasswordStep2(ForgetPassword result)
        {
            try
            {
                bool IsExist = await _context.Login.AnyAsync(e => e.UserName == result.UserName);
                if (IsExist)
                {
                    var login = await (from c in _context.Login where c.UserName == result.UserName select c).FirstOrDefaultAsync();
                    bool IsOTPValid = await _context.LoginUsersOTP.AnyAsync(e => e.Id == login.Id && e.OTP == result.OTP && e.flag == false);
                    if (IsOTPValid)
                    {
                        var time = await (from c in _context.LoginUsersOTP where c.Id == login.Id select c.Date).FirstOrDefaultAsync();
                        var nowtime = DateTime.UtcNow;
                        var delta = nowtime - time;
                        if (delta.Value.Minutes <= 10)
                        {
                            var updateloginotp = await (from c in _context.LoginUsersOTP where c.Id == login.Id select c).FirstOrDefaultAsync();
                            updateloginotp.flag = true;
                            await _context.SaveChangesAsync();
                            obj = new { result = "", Message = "success", MessageDescription = "Success" };
                            return StatusCode(200, obj);
                        }
                        else
                        {
                            obj = new { result = "", Message = "failure", MessageDescription = "OTP time expired" };
                            return StatusCode(200, obj);
                        }
                    }
                    else
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Invalid OTP" };
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Email address not found" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("[action]")]
        public async Task<ActionResult> ForgotPasswordStep3(ForgetPassword result)
        {
            try
            {
                bool IsExist = await _context.Login.AnyAsync(e => e.UserName == result.UserName);
                if (IsExist)
                {
                    if (result.NewPassword.Length >= 6)
                    {
                        var login = await (from c in _context.Login where c.UserName == result.UserName select c).FirstOrDefaultAsync();
                        login.Password = result.NewPassword;
                        login.ModifiedUtcDate = DateTime.UtcNow;
                        await _context.SaveChangesAsync();
                        obj = new { result = "", Message = "success", MessageDescription = "Success" };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Minimum 6 characters Password length Required" };
                        return StatusCode(200, obj);
                    }

                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Email address not found" };
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

        [HttpGet("[action]/{Token}")]
        public async Task<ActionResult> GetUserList(Guid Token)
        {
            var userDetails = await (from l in _context.Login where l.Token == Token && (l.Type == "Admin" || l.Type == "SubAdmin") select l).FirstOrDefaultAsync();
            if (userDetails == null) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Unauthorized Access" }); }
            var result0 = await (from p in _context.Login
                                 where p.Type == "SubAdmin"
                                 orderby p.FullName ascending
                                 select new
                                 {
                                     p.Id,
                                     p.PermissionId,
                                     p.FullName,
                                     p.Email,
                                     p.MobileNumber,
                                     p.Type,
                                     p.UserName,
                                     p.IsActive,
                                     p.LastLoginUtcDate,
                                     p.SMTPId,
                                     p.Logo
                                 }).ToListAsync();
            var result = await (from p in _context.Login
                                where p.Type == "Engineer"
                                orderby p.FullName ascending
                                select new
                                {
                                    p.Id,
                                    p.PermissionId,
                                    p.FullName,
                                    Email = (from e in _context.Engineer where e.Id == p.Id select e.EngineerEmail).FirstOrDefault(),
                                    MobileNumber = (from e in _context.Engineer where e.Id == p.Id select e.EngineerPhone).FirstOrDefault(),
                                    p.Type,
                                    p.UserName,
                                    IsActive = (from e in _context.Engineer where e.Id == p.Id select e.Working).FirstOrDefault(),
                                    p.LastLoginUtcDate,
                                    p.SMTPId,
                                    p.Logo
                                }).ToListAsync();
            foreach (var item in result0)
            {
                result.Add(item);
            }
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        [HttpGet("[action]/{Token}")]
        public ActionResult GetEngineerList(Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    var result = (from p in _context.Login where p.Type == "Engineer" orderby p.FullName ascending select new { p.Id, p.Token, p.FullName }).ToList();
                    return StatusCode(200, result);
                }
                else
                {
                    return StatusCode(208, "Token Expired");
                }
            }
            catch (Exception ex) { return StatusCode(208, ex.Message.ToString()); }
        }
        // GET: api/getUserWisePermission list
        [HttpGet("[action]/{Id}")]
        public ActionResult<Permissions> GetUserWisePermissionList(int Id)
        {
            var result = _context.Permissions.Where(a => a.Id == Id).FirstOrDefault();
            if (result == null)
            {
                return StatusCode(404, "Not found");
            }
            return result;
        }
        //Update user permissions 
        [HttpPut("[action]/{token}/{type}")]
        public ActionResult putUserPermissions(Permissions obj, Guid token, string type)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
            if (!IsTokenValid)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            var permissions = (from p in _context.Permissions where p.Id == obj.Id select p).FirstOrDefault();
            if (type == "user")
            {
                permissions.DashboardAdmin = obj.DashboardAdmin;

                permissions.DriveView = obj.DriveView;
                permissions.DriveCreate = obj.DriveCreate;
                permissions.DriveEdit = obj.DriveEdit;
                permissions.DriveRemove = obj.DriveRemove;

                permissions.CustomerView = obj.CustomerView;
                permissions.CustomerCreate = obj.CustomerCreate;
                permissions.CustomerEdit = obj.CustomerEdit;
                permissions.CustomerRemove = obj.CustomerRemove;

                permissions.CalendarView = obj.CalendarView;
                permissions.ResourceView = obj.ResourceView;
                permissions.MapView = obj.MapView;
                permissions.LiveTracking = obj.LiveTracking;

                permissions.PropertyView = obj.PropertyView;
                permissions.PropertyCreate = obj.PropertyCreate;
                permissions.PropertyEdit = obj.PropertyEdit;

                permissions.QuoteView = obj.QuoteView;
                permissions.QuoteCreate = obj.QuoteCreate;
                permissions.QuoteEdit = obj.QuoteEdit;

                permissions.InvoiceView = obj.InvoiceView;
                permissions.InvoiceCreate = obj.InvoiceCreate;
                permissions.InvoiceEdit = obj.InvoiceEdit;

                permissions.TicketView = obj.TicketView;
                permissions.TicketCreate = obj.TicketCreate;
                permissions.TicketEdit = obj.TicketEdit;

                permissions.EngineerView = obj.EngineerView;
                permissions.EngineerCreate = obj.EngineerCreate;
                permissions.EngineerEdit = obj.EngineerEdit;

                permissions.ReportTicket = obj.ReportTicket;
                permissions.ReportEngineer = obj.ReportEngineer;
                permissions.ReportVisit = obj.ReportVisit;

                permissions.ProductView = obj.ProductView;
                permissions.ProductCreate = obj.ProductCreate;
                permissions.ProductEdit = obj.ProductEdit;

                permissions.ServiceView = obj.ServiceView;
                permissions.ServiceCreate = obj.ServiceCreate;
                permissions.ServiceEdit = obj.ServiceEdit;

                permissions.SettingView = obj.SettingView;

                permissions.BrandView = obj.BrandView;
                permissions.BrandCreate = obj.BrandCreate;
                permissions.BrandEdit = obj.BrandEdit;

                permissions.CategoryView = obj.CategoryView;
                permissions.CategoryCreate = obj.CategoryCreate;
                permissions.CategoryEdit = obj.CategoryEdit;

                permissions.IssueTypeView = obj.IssueTypeView;
                permissions.IssueTypeCreate = obj.IssueTypeCreate;
                permissions.IssueTypeEdit = obj.IssueTypeEdit;

                permissions.PaymentView = obj.PaymentView;
                permissions.PaymentCreate = obj.PaymentCreate;
                permissions.PaymentEdit = obj.PaymentEdit;

                permissions.SMTPSettingView = obj.SMTPSettingView;
                permissions.SMTPSettingCreate = obj.SMTPSettingCreate;
                permissions.SMTPSettingEdit = obj.SMTPSettingEdit;
                permissions.SMTPSettingRemove = obj.SMTPSettingRemove;

                permissions.GeofencingView = obj.GeofencingView;
                permissions.EnableZoneCreate = obj.EnableZoneCreate;
                permissions.EnableZoneEdit = obj.EnableZoneEdit;
                permissions.EnableZoneRemove = obj.EnableZoneRemove;

                permissions.LogView = obj.LogView;

                permissions.UserView = obj.UserView;
                permissions.UserCreate = obj.UserCreate;
                permissions.UserRemove = obj.UserRemove;

            }
            if (type == "engineer")
            {
                permissions.DashboardEngineer = obj.DashboardEngineer;
                permissions.EngineerTicketView = obj.EngineerTicketView;
                permissions.CanEngineerCreateTicket = obj.CanEngineerCreateTicket;
                permissions.CloserEdit = obj.CloserEdit;
                permissions.EngineerTimesheetView = obj.EngineerTimesheetView;
                permissions.LiveTracking = obj.LiveTracking;
            }
            try
            {
                _context.Entry(permissions).State = EntityState.Modified;
                _context.SaveChanges();
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Permission updated successfully." });
            }
            catch (DbUpdateConcurrencyException ex)
            {

                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        // CHANGE USER STATUS
        [HttpPost("[action]/{Id}/{CurrStatus}")]
        public ActionResult changeUserStatus(Guid? Id, Boolean CurrStatus)
        {
            try
            {
                var result = (from c in _context.Login where c.Id == Id select c).FirstOrDefault();
                if (result != null)
                {
                    result.IsActive = CurrStatus;
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(201, "Status change successfully");
                }
                else
                {
                    return StatusCode(404, "Record not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }


        //Update user profile 
        [HttpPut("[action]")]
        [Obsolete]
        public ActionResult<Permissions> putUserProfile(Login obj)
        {
            var rsult = (from l in _context.Login where l.Id == obj.Id select l).FirstOrDefault();
            try
            {
                if (rsult != null)
                {
                    rsult.FullName = obj.FullName;
                    rsult.MobileNumber = obj.MobileNumber;
                    rsult.SMTPId = obj.SMTPId;
                    rsult.Email = obj.Email;
                    rsult.UserName = obj.Email;

                    if (obj.Logo64Bit.Length > 0)
                    {
                        if (rsult.Logo != null)
                        {
                            string oldpath = Path.Combine(_hostingEnvironment.WebRootPath, rsult.Logo);
                            if (System.IO.File.Exists(oldpath))
                            {
                                System.IO.File.Delete(oldpath);
                            }
                        }

                        //MemoryStream ms = new MemoryStream(Convert.FromBase64String(obj.Logo64Bit));
                        //string NewFileName = "logo" + DateTime.UtcNow.ToString("yyyyMMddHHMMss") + ".png";
                        //string newpath = Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.UserImageFolderName);
                        //if (!Directory.Exists(newpath)) { Directory.CreateDirectory(newpath); }
                        //string fullpath = Path.Combine(newpath, NewFileName);

                        //System.IO.FileStream streamPDF = new FileStream(fullpath, FileMode.CreateNew);
                        //System.IO.BinaryWriter writer = new BinaryWriter(streamPDF);
                        //byte[] imageBytes = Convert.FromBase64String(obj.Logo64Bit);

                        //writer.Write(imageBytes, 0, imageBytes.Length);
                        //writer.Close();
                        obj.Logo = "";
                        obj.Logo64Bit = "";
                        rsult.Logo = obj.Logo;
                    }
                }
                _context.Entry(rsult).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, "Internal server error");
            }
            return StatusCode(201, "Profile updated successfully.");
        }

        // Add New User
        [HttpPost("[action]/{Token}")]
        [Obsolete]
        public ActionResult<Login> AdNewUser(Login obj, Guid Token)
        {
            try
            {
                var userdetails = (from u in _context.Login where u.Token == Token select u).FirstOrDefault();
                if (obj.Email == "" || obj.FullName == "")
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Username  & Email required" });
                }
                if (_context.Login.Any(b => b.UserName == obj.Email || b.Email == obj.Email))
                {
                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "User already exists!" });
                }

                if (obj.Logo64Bit != null)
                {
                    obj.Logo = "";
                    obj.Logo64Bit = "";
                }
                else
                {
                    obj.Logo = "assets\\users\\user.png";
                }

                Permissions permission = new Permissions
                {
                    DashboardAdmin = true,
                    LogView = false,
                    SettingView = false,
                    CustomerView = true,
                    CustomerCreate = true,
                    CustomerEdit = true,
                    CustomerRemove = false,
                    DashboardEngineer = false,
                    CalendarView = false,
                    MapView = false,
                    PropertyView = true,
                    PropertyCreate = true,
                    PropertyEdit = true,
                    PropertyRemove = true,
                    QuoteView = false,
                    QuoteCreate = false,
                    QuoteEdit = false,
                    QuoteRemove = false,
                    InvoiceView = false,
                    InvoiceCreate = false,
                    InvoiceEdit = false,
                    InvoiceRemove = false,
                    TicketView = true,
                    TicketCreate = true,
                    TicketEdit = true,
                    TicketRemove = false,
                    EngineerView = true,
                    EngineerCreate = true,
                    EngineerEdit = true,
                    EngineerRemove = false,
                    EngineerTicketView = false,
                    ProductView = false,
                    ProductCreate = false,
                    ProductEdit = false,
                    ProductRemove = false,
                    ServiceView = false,
                    ServiceCreate = false,
                    ServiceEdit = false,
                    ServiceRemove = false,
                    EngineerProfileView = false,
                    EngineerTimesheetView = false,
                    DriveView = false,
                    GeofencingView = false,
                    EnableZoneCreate = false,
                    EnableZoneEdit = false,
                    EnableZoneRemove = false,
                    AllowReceivePayment = true,
                    AllowCustomerName = true,
                    IsRequiredCustomerName = true,
                    BrandView = false,
                    BrandCreate = false,
                    BrandEdit = false,
                    BrandRemove = false,
                    CategoryView = false,
                    CategoryCreate = false,
                    CategoryEdit = false,
                    CategoryRemove = false,
                    TaxView = false,
                    TaxCreate = false,
                    TaxEdit = false,
                    TaxRemove = false,
                    IssueTypeView = false,
                    IssueTypeCreate = false,
                    IssueTypeEdit = false,
                    IssueTypeRemove = false,
                    UserView = false,
                    UserCreate = false,
                    UserEdit = false,
                    UserRemove = false,
                    NotificationView = false,
                    NotificationCreate = false,
                    NotificationEdit = false,
                    NotificationRemove = false,
                    TemplateView = false,
                    TemplateCreate = false,
                    TemplateEdit = false,
                    TemplateRemove = false,
                    DriveCreate = false,
                    DriveEdit = false,
                    DriveRemove = false,
                    EngineerLeave = false,
                    ReportEngineer = false,
                    ReportTicket = false,
                    ReportVisit = false,
                    LiveTracking = false,
                    ResourceView = false,
                    PaymentCreate = false,
                    PaymentEdit = false,
                    PaymentRemove = false,
                    PaymentView = false,
                    SMTPSettingCreate = false,
                    SMTPSettingEdit = false,
                    SMTPSettingView = false
                };
                var adminper = (from p in _context.Permissions where p.Id == userdetails.PermissionId select p).FirstOrDefault();
                if (adminper.EngineerLeave) { permission.EngineerLeave = true; } else { permission.EngineerLeave = false; }
                if (adminper.ProductWarranty) { permission.ProductWarranty = true; } else { permission.ProductWarranty = false; }
                if (adminper.CanEngineerCreateTicket) { permission.CanEngineerCreateTicket = true; } else { permission.CanEngineerCreateTicket = false; }
                if (adminper.EngineerType) { permission.EngineerType = true; } else { permission.EngineerType = false; }
                if (adminper.IsProductOnly) { permission.IsProductOnly = true; } else { permission.IsProductOnly = false; }
                if (adminper.GoogleCalendar) { permission.GoogleCalendar = true; } else { permission.GoogleCalendar = false; }
                if (adminper.LiveTracking) { permission.LiveTracking = true; } else { permission.LiveTracking = false; }
                _context.Permissions.Add(permission);
                _context.SaveChanges();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                obj.Id = Guid.NewGuid();
                obj.Password = "admin@2020";
                obj.UserName = obj.Email;
                obj.PermissionId = permission.Id;
                obj.Type = "SubAdmin";
                obj.Token = Guid.NewGuid();
                obj.IsActive = true;
                obj.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

                _context.Login.Add(obj);
                _context.SaveChanges();

                obj.Permissions = permission;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }

            return StatusCode(200, new { result = obj, Message = "success", MessageDescription = "" });
        }
        [HttpGet("[action]/{token}/{EngineerId}")]
        public ActionResult<Login> GetPermissions(Guid token, Guid EngineerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var userdetails = (from u in _context.Login where u.Id == EngineerId select u).Include(e => e.Permissions).FirstOrDefault();
                if (userdetails != null)
                {
                    return StatusCode(200, new { result = userdetails.Permissions, Message = "success", MessageDescription = "success" });
                }
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "not found" });
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #region Logs
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

        #endregion
    }
}
