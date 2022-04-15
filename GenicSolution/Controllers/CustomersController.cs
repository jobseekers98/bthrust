using ExcelDataReader;
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
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static GenicSolution.Entities.GlobalParameters;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public CustomersController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        ///***************************************************************************///
        /// Customer Methods Begin
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetCustomer(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType.Type == "Engineer")
                {
                    var engineer = (from l in _context.Engineer where l.Id == UserType.Id select l).FirstOrDefault();
                    if (engineer.CreateCustomer == "Partial")
                    {
                        var result = await (from c in _context.Customer
                                            where c.IsReady == true
                                            orderby c.CreatedUtcDate descending
                                            select new
                                            {
                                                c.Id,
                                                c.CustomerId,
                                                c.NameTitle,
                                                c.FirstName,
                                                c.LastName,
                                                c.CompanyName,
                                                CustomerLogo = c.CustomerLogo.Length == 0 ? "assets/users/default.jpg" : c.CustomerLogo,
                                                c.AddressStreet1,
                                                c.AddressStreet2,
                                                c.AddressUnitNo,
                                                c.AddressZipCode,
                                                c.AddressCountry,
                                                c.AddressState,
                                                c.AddressCity,
                                                c.CustomerContactPerson,
                                                c.ArrayofKeys,
                                                c.Properties,
                                                c.Status,
                                                c.CreatedUtcDate
                                            }).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
                    else
                    {
                        var result = await (from c in _context.Customer
                                            where c.IsReady == true
                                            orderby c.CreatedUtcDate descending
                                            select new
                                            {
                                                c.Id,
                                                c.CustomerId,
                                                c.NameTitle,
                                                c.FirstName,
                                                c.LastName,
                                                c.CompanyName,
                                                CustomerLogo = c.CustomerLogo.Length == 0 ? "assets/users/default.jpg" : c.CustomerLogo,
                                                c.AddressStreet1,
                                                c.AddressStreet2,
                                                c.AddressUnitNo,
                                                c.AddressZipCode,
                                                c.AddressCountry,
                                                c.AddressState,
                                                c.AddressCity,
                                                c.CustomerContactPerson,
                                                c.ArrayofKeys,
                                                c.Properties,
                                                c.Status,
                                                c.CreatedUtcDate
                                            }).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
                }
                else
                {
                    var result = await (from c in _context.Customer
                                        where UserType.Type == "Admin" ? c.IsReady == true : (c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                        orderby c.CreatedUtcDate descending
                                        select new
                                        {
                                            c.Id,
                                            c.CustomerId,
                                            c.NameTitle,
                                            c.FirstName,
                                            c.LastName,
                                            c.CompanyName,
                                            CustomerLogo = c.CustomerLogo.Length == 0 ? "assets/users/default.jpg" : c.CustomerLogo,
                                            c.AddressStreet1,
                                            c.AddressStreet2,
                                            c.AddressUnitNo,
                                            c.AddressZipCode,
                                            c.AddressCountry,
                                            c.AddressState,
                                            c.AddressCity,
                                            c.CustomerContactPerson,
                                            c.ArrayofKeys,
                                            c.Properties,
                                            c.Status,
                                            c.CreatedUtcDate
                                        }).ToListAsync();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        [HttpGet("[action]/{token}/{Id}")]
        public async Task<ActionResult<Customer>> GetCustomerById(Guid token, Guid Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.Customer where c.Id == Id && c.IsReady == true select c).Include(b => b.ArrayofKeys).Include(d => d.CustomerContactPerson).Include(p => p.Properties).Include(p => p.CustomerDepartment)
                   .FirstOrDefaultAsync();
                    if (result.CustomerLogo.Length == 0)
                    {
                        result.CustomerLogo = "assets/users/default.jpg";
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

        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetDepartmentList(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.SMTPSettings
                                        select new
                                        {
                                            c.Id,
                                            Name = c.SMTPName,
                                            IsAssigned = false
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
        [HttpPost("[action]/{Id}")]
        public ActionResult SetCustomerWiseDepartment(Guid Id, ICollection<CustomerDepartment> customerdepartment)
        {
            try
            {
                var oldList = (from i in _context.CustomerDepartment where i.CustomerId == Id select i).ToList();
                if (oldList.Count > 0)
                {
                    foreach (var ii in oldList)
                    {
                        _context.Remove(ii);
                        _context.SaveChanges();
                    }
                }
                string dpt = "";
                foreach (var item in customerdepartment)
                {
                    item.Id = 0;
                    _context.CustomerDepartment.Add(item);
                    _context.SaveChanges();
                    dpt += item.SMTPName + ", ";
                }
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = dpt + " is added" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        /// Customer Department Type
        ///***************************************************************************///
        [HttpGet("[action]/{CustomerId}")]
        public async Task<ActionResult> GetDepartmentListByCustomer(Guid CustomerId)
        {
            try
            {
                var result = await (from c in _context.CustomerDepartment
                                    where c.CustomerId == CustomerId
                                    select new
                                    {
                                        Id = c.SMTPSettingsId,
                                        Name = c.SMTPName,
                                        IsAssigned = false
                                    }).ToListAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(200, ex.ToString());
            }
        }

        [HttpGet("[action]/{token}")]
        public ActionResult<IEnumerable<Customer>> getCustomerListOnProperty(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = (from c in _context.Customer where c.IsReady == true orderby c.CreatedUtcDate descending select c).Include(b => b.ArrayofKeys).Include(p => p.Properties).ToList();
                foreach (var p in result)
                {
                    p.FirstName = p.NameTitle + " " + p.FirstName + " " + p.LastName;
                }
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.ToString() });
            }
        }
        [HttpPost("[action]/{token}")]
        public ActionResult<Customer> PostCustomer(Customer customer, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var adminDetails = (from a in _context.Login where a.Token == token && a.IsActive == true select a).FirstOrDefault();
                    var result = (from c in _context.Customer where c.IsReady == false select c).FirstOrDefault();
                    if (result == null)
                    {
                        string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                        customer.Id = Guid.NewGuid();
                        customer.CustomerId += (_context.Customer.Count() + 1).ToString("00000");
                        customer.CustomerLogo = "";
                        customer.ClientReminders = false;
                        customer.ClientFollowUpEmails = false;
                        customer.UseCompanyNameAsPrimaryName = true;
                        customer.PrintEmailOnWorkOuder = true;
                        customer.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.Customer.Add(customer);
                        _context.SaveChanges();
                        result = customer;
                    }
                    else
                    {
                        var arrker = (from a in _context.ArrayofKey where a.CustomerId == result.Id select a).ToList();
                        foreach (var item in arrker)
                        {
                            _context.ArrayofKey.Remove(item);
                            _context.SaveChanges();
                        }
                        var ccp = (from a in _context.CustomerContactPerson where a.CustomerId == result.Id select a).ToList();
                        foreach (var item in ccp)
                        {
                            _context.CustomerContactPerson.Remove(item);
                            _context.SaveChanges();
                        }
                        var cd = (from a in _context.CustomerDepartment where a.CustomerId == result.Id select a).ToList();
                        foreach (var item in cd)
                        {
                            _context.CustomerDepartment.Remove(item);
                            _context.SaveChanges();
                        }
                        var p = (from a in _context.Property where a.CustomerId == result.Id select a).ToList();
                        foreach (var item in p)
                        {
                            _context.Property.Remove(item);
                            _context.SaveChanges();
                        }
                        result.NameTitle = "";
                        result.FirstName = "";
                        result.LastName = "";
                        result.CompanyName = "";
                        result.ClientReminders = false;
                        result.ClientFollowUpEmails = false;
                        result.UseCompanyNameAsPrimaryName = true;
                        result.PrintEmailOnWorkOuder = true;
                        customer = result;
                    }
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Temporary customer create successfully" });
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
        public ActionResult PutCustomer(Customer customer, Guid token)
        {
            customer.ArrayofKeys = null;
            customer.CustomerContactPerson = null;
            //customer.Properties = null;
            customer.CustomerDepartment = null;
            var adminDetails = (from a in _context.Login where a.Token == token && a.IsActive == true select a).FirstOrDefault();
            if (adminDetails == null)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            if (_context.Customer.Any(b => b.NameTitle == customer.NameTitle && b.FirstName == customer.FirstName && b.LastName == customer.LastName && b.CompanyName == customer.CompanyName && b.Id != customer.Id))
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "already exists" });
            }
            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            if (customer.CustomerLogo.Length > 0)
            {
                try
                {
                    var loginDetails = (from c in _context.Login where c.Id == customer.Id select c).FirstOrDefault();
                    if (loginDetails != null)
                    {
                        loginDetails.FullName = customer.NameTitle + " " + customer.FirstName + " " + customer.LastName;
                        loginDetails.UserName = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Email" && e.IsDefault == true select e.Value).FirstOrDefault();
                        loginDetails.MobileNumber = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Phone" && e.IsDefault == true select e.Value).FirstOrDefault();
                        loginDetails.Email = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Email" && e.IsDefault == true select e.Value).FirstOrDefault();
                        loginDetails.Logo = customer.CustomerLogo;
                        loginDetails.SMTPId = adminDetails.SMTPId;
                        loginDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.Entry(loginDetails).State = EntityState.Modified;
                        _context.SaveChanges();
                    }
                }
                catch { }
            }
            else
            {
                var previousLogo = (from c in _context.Customer where c.Id == customer.Id select c.CustomerLogo).FirstOrDefault();
                customer.CustomerLogo = previousLogo;

                var loginDetails = (from c in _context.Login where c.Id == customer.Id select c).FirstOrDefault();
                if (loginDetails != null)
                {
                    loginDetails.FullName = customer.NameTitle + " " + customer.FirstName + " " + customer.LastName;
                    loginDetails.UserName = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Email" && e.IsDefault == true select e.Value).FirstOrDefault();
                    loginDetails.MobileNumber = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Phone" && e.IsDefault == true select e.Value).FirstOrDefault();
                    loginDetails.Email = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Email" && e.IsDefault == true select e.Value).FirstOrDefault();
                    loginDetails.Logo = previousLogo;
                    loginDetails.SMTPId = adminDetails.SMTPId;
                    loginDetails.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(loginDetails).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }
            customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
            _context.Entry(customer).State = EntityState.Modified;
            _context.SaveChanges();
            try
            {
                bool IsContactPersonExit = _context.CustomerContactPerson.Any(x => x.CustomerId == customer.Id);
                if (!IsContactPersonExit)
                {
                    CustomerContactPerson ccp = new CustomerContactPerson
                    {
                        Id = 0,
                        CustomerId = customer.Id,
                        NameTitle = customer.NameTitle,
                        FirstName = customer.FirstName,
                        LastName = customer.LastName,
                        Email = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Email" && e.IsDefault == true select e.Value).FirstOrDefault(),
                        Phone = (from e in _context.ArrayofKey where e.CustomerId == customer.Id && e.Type == "Phone" && e.IsDefault == true select e.Value).FirstOrDefault(),
                        IsDefaultContact = true
                    };
                    _context.CustomerContactPerson.Add(ccp);
                    _context.SaveChanges();
                }

                bool IsContactDptExit = _context.CustomerDepartment.Any(x => x.CustomerId == customer.Id);
                if (!IsContactDptExit)
                {
                    CustomerDepartment cd = new CustomerDepartment
                    {
                        Id = 0,
                        CustomerId = customer.Id,
                        SMTPSettingsId = adminDetails.SMTPId,
                        SMTPName = (from c in _context.SMTPSettings where c.Id == adminDetails.SMTPId select c.SMTPName).FirstOrDefault()
                    };
                    _context.CustomerDepartment.Add(cd);
                    _context.SaveChanges();
                }

                bool IsPropertyExit = _context.Property.Any(x => x.CustomerId == customer.Id);
                if (!IsPropertyExit)
                {
                    if (customer.Properties != null)
                    {
                        foreach (var item in customer.Properties)
                        {
                            item.IsActive = true;
                            item.PropertyId = "PRO" + (_context.Property.Count() + 1).ToString("00000");
                            item.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                            item.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                            _context.Property.Add(item);
                            _context.SaveChanges();
                        }
                    }
                }
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!CustomerExists(customer.Id))
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "customer not found" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = e.Message.ToString() });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }

            bool isReady = (from c in _context.Customer where c.Id == customer.Id select c.IsReady).FirstOrDefault();
            if (!isReady)
            {
                customer.IsReady = true;
                customer.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                Permissions permission = new Permissions();
                var adminId = (from l in _context.Login where l.Type == "Admin" && l.IsActive == true select l.PermissionId).FirstOrDefault();
                var adminper = (from p in _context.Permissions where p.Id == adminId select p).FirstOrDefault();
                if (adminper.ProductWarranty) { permission.ProductWarranty = true; } else { permission.ProductWarranty = false; }
                if (adminper.EngineerType) { permission.EngineerType = true; } else { permission.EngineerType = false; }
                if (adminper.IsProductOnly) { permission.IsProductOnly = true; } else { permission.IsProductOnly = false; }
                if (adminper.GoogleCalendar) { permission.GoogleCalendar = true; } else { permission.GoogleCalendar = false; }
                if (adminper.LiveTracking) { permission.LiveTracking = true; } else { permission.LiveTracking = false; }
                _context.Permissions.Add(permission);
                _context.SaveChanges();
                string customerEmail = string.Empty;
                var email = (from c in _context.ArrayofKey where c.CustomerId == customer.Id && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                if (email != null) { customerEmail = email; } else { customerEmail = customer.CustomerId; }
                string customerPhone = string.Empty;
                var phone = (from c in _context.ArrayofKey where c.CustomerId == customer.Id && c.IsDefault == true && c.Type == "Phone" select c.Value).FirstOrDefault();
                if (phone != null) { customerPhone = phone; } else { customerPhone = ""; }
                Login login = new Login();
                login.Id = customer.Id;
                login.UserName = customerEmail;
                login.Email = customerEmail;
                login.MobileNumber = customerPhone;
                login.Password = "Cust@1234";
                login.PermissionId = permission.Id;
                login.Logo = customer.CustomerLogo;
                login.Logo64Bit = "";
                login.Type = "Customer";
                login.FullName = customer.NameTitle + " " + customer.FirstName + " " + customer.LastName;
                login.Token = Guid.NewGuid();
                login.SMTPId = adminDetails.SMTPId;
                login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                login.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Login.Add(login);
                _context.SaveChanges();

                createCustomerFolder(adminDetails, customer);
                return StatusCode(200, new { result = "Insert", Message = "success", MessageDescription = "Create successfully" });
            }
            return StatusCode(200, new { result = "Update", Message = "success", MessageDescription = "Update successfully" });
        }
        [HttpPost("[action]/{CustomerId}/{Token}")]
        public ActionResult CustomerPasswordResetByAdmin(Guid CustomerId, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    string newpassword = GlobalParameters.GeneratePassword();
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    var customer = (from e in _context.Customer where e.Id == CustomerId select e).FirstOrDefault();
                    customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(customer).State = EntityState.Modified;
                    var login = (from l in _context.Login where l.Id == CustomerId select l).FirstOrDefault();
                    login.Password = newpassword;
                    login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(login).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = newpassword });
                }
                else
                {
                    return StatusCode(202, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(202, new { result = "", Message = "error", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("[action]/{token}")]
        public ActionResult<Customer> AddNewCustomer(Customer customer, Guid token)
        {
            var adminDetails = (from a in _context.Login where a.Token == token && a.IsActive == true select a).FirstOrDefault();
            if (customer.FirstName.Length == 0)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please enter first name" });
            }
            if (customer.AddressStreet1.Length == 0)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please enter email address" });
            }
            if (customer.AddressStreet2.Length == 0)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please enter phone number" });
            }
            bool IsExist = (from c in _context.ArrayofKey where c.Type == "Email" && c.Value == customer.AddressStreet1 select c.Value).Any();
            if (IsExist)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Email already exist" });
            }
            var result = (from c in _context.Customer where c.IsReady == false select c).FirstOrDefault();
            if (result == null)
            {
                var cust = new Customer();
                var TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                cust.Id = Guid.NewGuid();
                cust.CustomerId = "CUS" + (_context.Customer.Count() + 1).ToString("00000");
                cust.CustomerLogo = "";
                cust.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                cust.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                cust.AddressStreet1 = "";
                cust.AddressStreet2 = "";
                cust.AddressUnitNo = "";
                cust.AddressCity = "";
                cust.AddressState = "";
                cust.AddressZipCode = "";
                cust.Latitude = "1.3521";
                cust.Longitude = "103.8198";
                cust.AddressCountry = "Singapore";
                cust.RefferdBy = "";
                cust.NameTitle = customer.NameTitle;
                cust.FirstName = customer.FirstName;
                cust.LastName = customer.LastName;
                cust.CompanyName = customer.CompanyName;
                cust.UseCompanyNameAsPrimaryName = customer.UseCompanyNameAsPrimaryName;
                cust.Status = true;
                cust.IsReady = true;
                _context.Customer.Add(cust);
                _context.SaveChanges();

                if (customer.AddressStreet1.Length > 0)
                {
                    var arrofkey = new ArrayofKey();
                    arrofkey.Id = 0;
                    arrofkey.IsDefault = true;
                    arrofkey.Key = "Work";
                    arrofkey.Type = "Email";
                    arrofkey.Value = customer.AddressStreet1;
                    arrofkey.CustomerId = cust.Id;
                    _context.ArrayofKey.Add(arrofkey);
                    _context.SaveChanges();
                }
                if (customer.AddressStreet2.Length > 0)
                {
                    var arrofkey = new ArrayofKey();
                    arrofkey.Id = 0;
                    arrofkey.IsDefault = true;
                    arrofkey.Key = "Work";
                    arrofkey.Type = "Phone";
                    arrofkey.Value = customer.AddressStreet2;
                    arrofkey.CustomerId = cust.Id;
                    _context.ArrayofKey.Add(arrofkey);
                    _context.SaveChanges();
                }
                if (customer.AddressStreet1.Length > 0 || customer.AddressStreet2.Length > 0)
                {
                    var custperson = new CustomerContactPerson();
                    custperson.Id = 0;
                    custperson.NameTitle = customer.NameTitle;
                    custperson.FirstName = customer.FirstName;
                    custperson.LastName = customer.LastName;
                    custperson.Email = customer.AddressStreet1;
                    custperson.Phone = customer.AddressStreet2;
                    custperson.IsDefaultContact = true;
                    custperson.CustomerId = cust.Id;
                    _context.CustomerContactPerson.Add(custperson);
                    _context.SaveChanges();
                }
                var smtpDetails = (from sm in _context.SMTPSettings select sm).FirstOrDefault();
                var customerDpt = new CustomerDepartment
                {
                    Id = 0,
                    CustomerId = cust.Id,
                    SMTPName = smtpDetails.SMTPName,
                    SMTPSettingsId = smtpDetails.Id
                };
                _context.CustomerDepartment.Add(customerDpt);
                _context.SaveChanges();

                var permission = new Permissions();
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
                string customerEmail = string.Empty;
                var email = (from c in _context.ArrayofKey where c.CustomerId == cust.Id && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                if (email != null) { customerEmail = email; } else { customerEmail = customer.CustomerId; }
                string customerPhone = string.Empty;
                var phone = (from c in _context.ArrayofKey where c.CustomerId == cust.Id && c.IsDefault == true && c.Type == "Phone" select c.Value).FirstOrDefault();
                if (phone != null) { customerPhone = phone; } else { customerPhone = ""; }
                Login login = new Login();
                login.Id = cust.Id;
                login.UserName = customerEmail;
                login.Email = customerEmail;
                login.MobileNumber = customerPhone;
                login.Password = ConstantParameters.CUSTOMER_DEFAULT_PASSWORD;
                login.PermissionId = permission.Id;
                login.Logo = customer.CustomerLogo;
                login.Logo64Bit = "";
                login.Type = "Customer";
                login.FullName = customer.NameTitle + " " + customer.FirstName + " " + customer.LastName;
                login.Token = Guid.NewGuid();
                login.SMTPId = adminDetails.SMTPId;
                login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                login.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Login.Add(login);
                _context.SaveChanges();
                createCustomerFolder(adminDetails, customer);
                return StatusCode(200, new { result = cust, Message = "success", MessageDescription = "success" });
            }
            else
            {
                _context.Customer.Remove(result);
                _context.SaveChanges();
                var arrker = (from a in _context.ArrayofKey where a.CustomerId == customer.Id select a).ToList();
                foreach (var item in arrker)
                {
                    _context.ArrayofKey.Remove(item);
                    _context.SaveChanges();
                }
                var ccp = (from a in _context.CustomerContactPerson where a.CustomerId == customer.Id select a).ToList();
                foreach (var item in ccp)
                {
                    _context.CustomerContactPerson.Remove(item);
                    _context.SaveChanges();
                }
                var smdpt = (from a in _context.CustomerDepartment where a.CustomerId == customer.Id select a).ToList();
                foreach (var item in smdpt)
                {
                    _context.CustomerDepartment.Remove(item);
                    _context.SaveChanges();
                }
                var cust = new Customer();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                cust.Id = Guid.NewGuid();
                cust.CustomerId = "CUS" + (_context.Customer.Count() + 1).ToString("00000");
                cust.CustomerLogo = "";
                cust.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                cust.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                cust.AddressStreet1 = "";
                cust.AddressStreet2 = "";
                cust.AddressUnitNo = "";
                cust.AddressCity = "";
                cust.AddressState = "";
                cust.AddressZipCode = "";
                cust.Latitude = "1.3521";
                cust.Longitude = "103.8198";
                cust.AddressCountry = "Singapore";
                cust.RefferdBy = "";
                cust.NameTitle = customer.NameTitle;
                cust.FirstName = customer.FirstName;
                cust.LastName = customer.LastName;
                cust.CompanyName = customer.CompanyName;
                cust.UseCompanyNameAsPrimaryName = customer.UseCompanyNameAsPrimaryName;
                cust.Status = true;
                cust.IsReady = true;
                _context.Customer.Add(cust);
                _context.SaveChanges();

                if (customer.AddressStreet1.Length > 0)
                {
                    var arrofkey = new ArrayofKey();
                    arrofkey.Id = 0;
                    arrofkey.IsDefault = true;
                    arrofkey.Key = "Work";
                    arrofkey.Type = "Email";
                    arrofkey.Value = customer.AddressStreet1;
                    arrofkey.CustomerId = cust.Id;
                    _context.ArrayofKey.Add(arrofkey);
                    _context.SaveChanges();
                }
                if (customer.AddressStreet2.Length > 0)
                {
                    var arrofkey = new ArrayofKey();
                    arrofkey.Id = 0;
                    arrofkey.IsDefault = true;
                    arrofkey.Key = "Work";
                    arrofkey.Type = "Phone";
                    arrofkey.Value = customer.AddressStreet2;
                    arrofkey.CustomerId = cust.Id;
                    _context.ArrayofKey.Add(arrofkey);
                    _context.SaveChanges();
                }
                if (customer.AddressStreet1.Length > 0 || customer.AddressStreet2.Length > 0)
                {
                    var custperson = new CustomerContactPerson();
                    custperson.Id = 0;
                    custperson.NameTitle = customer.NameTitle;
                    custperson.FirstName = customer.FirstName;
                    custperson.LastName = customer.LastName;
                    custperson.Email = customer.AddressStreet1;
                    custperson.Phone = customer.AddressStreet2;
                    custperson.IsDefaultContact = true;
                    custperson.CustomerId = cust.Id;
                    _context.CustomerContactPerson.Add(custperson);
                    _context.SaveChanges();
                }

                var smtpDetails = (from sm in _context.SMTPSettings select sm).FirstOrDefault();
                var customerDpt = new CustomerDepartment
                {
                    Id = 0,
                    CustomerId = cust.Id,
                    SMTPName = smtpDetails.SMTPName,
                    SMTPSettingsId = smtpDetails.Id
                };
                _context.CustomerDepartment.Add(customerDpt);
                _context.SaveChanges();
                var permission = new Permissions();
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
                string customerEmail = string.Empty;
                var email = (from c in _context.ArrayofKey where c.CustomerId == cust.Id && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                if (email != null) { customerEmail = email; } else { customerEmail = customer.CustomerId; }
                string customerPhone = string.Empty;
                var phone = (from c in _context.ArrayofKey where c.CustomerId == cust.Id && c.IsDefault == true && c.Type == "Phone" select c.Value).FirstOrDefault();
                if (phone != null) { customerPhone = phone; } else { customerPhone = ""; }
                Login login = new Login();
                login.Id = cust.Id;
                login.UserName = customerEmail;
                login.Email = customerEmail;
                login.Password = ConstantParameters.CUSTOMER_DEFAULT_PASSWORD;
                login.MobileNumber = customerPhone;
                login.PermissionId = permission.Id;
                login.Logo = customer.CustomerLogo;
                login.Logo64Bit = "";
                login.Type = "Customer";
                login.FullName = customer.NameTitle + " " + customer.FirstName + " " + customer.LastName;
                login.Token = Guid.NewGuid();
                login.SMTPId = adminDetails.SMTPId;
                login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                login.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Login.Add(login);
                _context.SaveChanges();
                createCustomerFolder(adminDetails, customer);
                return StatusCode(200, new { result = cust, Message = "success", MessageDescription = "success" });
            }
        }

        private void createCustomerFolder(Login adminDetails, Customer customer)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var parentfolder = (from p in _context.GenicDrive where p.Name == "Customers" && p.ParentId == Guid.Parse("00000000-0000-0000-0000-000000000000") select p).FirstOrDefault();
                /// Create Customer Folder in Drive
                if (parentfolder != null)
                {
                    GenicDriveHelper gdf = new GenicDriveHelper(_context);
                    GenicDrive obj = new GenicDrive();
                    obj.Id = customer.Id;
                    obj.AttachmentName = "";
                    obj.AttachmentSize = 0;
                    obj.ColorCode = "rgb(254, 146, 0)";
                    obj.CreatedBy = adminDetails.Id;
                    obj.CreatedByName = adminDetails.FullName;
                    obj.Description = "customer " + customer.CompanyName + " is added";
                    obj.FileExtension = "";
                    obj.FolderType = 1;
                    obj.IsFavourite = false;
                    obj.IsLocked = false;
                    obj.IsTrash = false;
                    obj.LockedBy = null;
                    obj.LockPassword = null;
                    obj.Name = customer.CustomerId + "-" + (customer.UseCompanyNameAsPrimaryName ? customer.CompanyName : customer.NameTitle + " " + customer.FirstName + " " + customer.LastName);
                    obj.OpenDate = null;
                    obj.ParentId = parentfolder.Id;
                    obj.UserId = adminDetails.Id;
                    obj.UpdatedBy = null;
                    obj.UpdatedDate = null;
                    obj.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel = new DriveLog();
                    oModel.UserId = obj.UserId;
                    oModel.GenicDriveId = obj.Id;
                    oModel.DriveName = obj.Name;
                    oModel.DrivePath = obj.AttachmentName;
                    oModel.FolderType = obj.FolderType;
                    oModel.FileExtension = obj.FileExtension;
                    oModel.Action = "Created";
                    oModel.Activity = "customer " + customer.CompanyName + " is added";
                    gdf.UpdateDriveLog(oModel);

                    /// Create Quotation Folder in inside the Customer folder
                    GenicDrive obj1 = new GenicDrive();
                    obj1.Id = Guid.NewGuid();
                    obj1.AttachmentName = "";
                    obj1.AttachmentSize = 0;
                    obj1.ColorCode = "rgb(254, 146, 0)";
                    obj1.CreatedBy = adminDetails.Id;
                    obj1.CreatedByName = adminDetails.FullName;
                    obj1.Description = "Quotation Folder";
                    obj1.FileExtension = "";
                    obj1.FolderType = 1;
                    obj1.IsFavourite = false;
                    obj1.IsLocked = false;
                    obj1.IsTrash = false;
                    obj1.LockedBy = null;
                    obj1.LockPassword = null;
                    obj1.Name = "Quotations";
                    obj1.OpenDate = null;
                    obj1.ParentId = obj.Id;
                    obj1.UserId = adminDetails.Id;
                    obj1.UpdatedBy = null;
                    obj1.UpdatedDate = null;
                    obj1.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj1.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj1);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel1 = new DriveLog();
                    oModel1.UserId = obj1.UserId;
                    oModel1.GenicDriveId = obj1.Id;
                    oModel1.DriveName = obj1.Name;
                    oModel1.DrivePath = obj1.AttachmentName;
                    oModel1.FolderType = obj1.FolderType;
                    oModel1.FileExtension = obj1.FileExtension;
                    oModel1.Action = "Created";
                    oModel1.Activity = "Quotation Folder is Created";
                    gdf.UpdateDriveLog(oModel1);

                    GenicDrive obj01 = new GenicDrive();
                    obj01.Id = Guid.NewGuid();
                    obj01.AttachmentName = "";
                    obj01.AttachmentSize = 0;
                    obj01.ColorCode = "rgb(254, 146, 0)";
                    obj01.CreatedBy = adminDetails.Id;
                    obj01.CreatedByName = adminDetails.FullName;
                    obj01.Description = "Attachments Folder";
                    obj01.FileExtension = "";
                    obj01.FolderType = 1;
                    obj01.IsFavourite = false;
                    obj01.IsLocked = false;
                    obj01.IsTrash = false;
                    obj01.LockedBy = null;
                    obj01.LockPassword = null;
                    obj01.Name = "Attachments";
                    obj01.OpenDate = null;
                    obj01.ParentId = obj1.Id;
                    obj01.UserId = adminDetails.Id;
                    obj01.UpdatedBy = null;
                    obj01.UpdatedDate = null;
                    obj01.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj01.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj01);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel01 = new DriveLog();
                    oModel01.UserId = obj01.UserId;
                    oModel01.GenicDriveId = obj01.Id;
                    oModel01.DriveName = obj01.Name;
                    oModel01.DrivePath = obj01.AttachmentName;
                    oModel01.FolderType = obj01.FolderType;
                    oModel01.FileExtension = obj01.FileExtension;
                    oModel01.Action = "Created";
                    oModel01.Activity = "Attachments Folder is Created";
                    gdf.UpdateDriveLog(oModel1);

                    /// Create Quotation Folder in inside the Customer folder
                    GenicDrive obj2 = new GenicDrive();
                    obj2.Id = Guid.NewGuid();
                    obj2.AttachmentName = "";
                    obj2.AttachmentSize = 0;
                    obj2.ColorCode = "rgb(254, 146, 0)";
                    obj2.CreatedBy = adminDetails.Id;
                    obj2.CreatedByName = adminDetails.FullName;
                    obj2.Description = "Work Order Folder";
                    obj2.FileExtension = "";
                    obj2.FolderType = 1;
                    obj2.IsFavourite = false;
                    obj2.IsLocked = false;
                    obj2.IsTrash = false;
                    obj2.LockedBy = null;
                    obj2.LockPassword = null;
                    obj2.Name = "Work Order";
                    obj2.OpenDate = null;
                    obj2.ParentId = obj.Id;
                    obj2.UserId = adminDetails.Id;
                    obj2.UpdatedBy = null;
                    obj2.UpdatedDate = null;
                    obj2.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj2.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj2);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel2 = new DriveLog();
                    oModel2.UserId = obj2.UserId;
                    oModel2.GenicDriveId = obj2.Id;
                    oModel2.DriveName = obj2.Name;
                    oModel2.DrivePath = obj2.AttachmentName;
                    oModel2.FolderType = obj2.FolderType;
                    oModel2.FileExtension = obj2.FileExtension;
                    oModel2.Action = "Created";
                    oModel2.Activity = "Work Order Folder  is Created";
                    gdf.UpdateDriveLog(oModel2);

                    /// Create Ticket Attachment Folder
                    GenicDrive obj3 = new GenicDrive();
                    obj3.Id = Guid.NewGuid();
                    obj3.AttachmentName = "";
                    obj3.AttachmentSize = 0;
                    obj3.ColorCode = "rgb(254, 146, 0)";
                    obj3.CreatedBy = adminDetails.Id;
                    obj3.CreatedByName = adminDetails.FullName;
                    obj3.Description = "Attachments";
                    obj3.FileExtension = "";
                    obj3.FolderType = 1;
                    obj3.IsFavourite = false;
                    obj3.IsLocked = false;
                    obj3.IsTrash = false;
                    obj3.LockedBy = null;
                    obj3.LockPassword = null;
                    obj3.Name = "Attachments";
                    obj3.OpenDate = null;
                    obj3.ParentId = obj2.Id;
                    obj3.UserId = adminDetails.Id;
                    obj3.UpdatedBy = null;
                    obj3.UpdatedDate = null;
                    obj3.LastAccessTime = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    obj3.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.GenicDrive.Add(obj3);
                    _context.SaveChanges();

                    //Start: Add log on folder created--------------------
                    DriveLog oModel3 = new DriveLog();
                    oModel3.UserId = obj3.UserId;
                    oModel3.GenicDriveId = obj3.Id;
                    oModel3.DriveName = obj3.Name;
                    oModel3.DrivePath = obj3.AttachmentName;
                    oModel3.FolderType = obj3.FolderType;
                    oModel3.FileExtension = obj3.FileExtension;
                    oModel3.Action = "Created";
                    oModel3.Activity = "Attachments Folder  is Created";
                    gdf.UpdateDriveLog(oModel3);
                }
            }
            catch { }
        }
        [HttpPost("[action]/{token}")]
        public ActionResult AddNewContactPerson(CustomerContactPerson customercontactperson, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result1 = (from c in _context.Customer where c.Id == customercontactperson.CustomerId select c).FirstOrDefault();
                    if (result1 != null)
                    {
                        var custperson = new CustomerContactPerson();
                        int IsAlredyExit = (from f in _context.CustomerContactPerson where f.CustomerId == customercontactperson.CustomerId select f).Count();
                        if (IsAlredyExit == 0)
                        {
                            custperson.IsDefaultContact = true;
                        }
                        else
                        {
                            custperson.IsDefaultContact = false;
                        }
                        custperson.Id = 0;
                        custperson.NameTitle = customercontactperson.NameTitle;
                        custperson.FirstName = customercontactperson.FirstName;
                        custperson.LastName = customercontactperson.LastName;
                        custperson.Email = customercontactperson.Email;
                        custperson.Phone = customercontactperson.Phone;
                        custperson.CustomerId = customercontactperson.CustomerId;
                        _context.CustomerContactPerson.Add(custperson);
                        _context.SaveChanges();
                    }

                    var result = (from c in _context.CustomerContactPerson where c.CustomerId == customercontactperson.CustomerId select c).ToList();
                    string name = customercontactperson.NameTitle + " " + customercontactperson.FirstName + " " + customercontactperson.LastName;
                    return StatusCode(201, new { result, Message = "success", MessageDescription = name + " is added Successfully!" });
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
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> PutCustomerStatusUpdate(Guid id)
        {
            var customer = await (from c in _context.Customer where c.Id == id select c).FirstOrDefaultAsync();
            if (customer.Status)
            {
                var prop = await (from c in _context.Property where c.CustomerId == customer.Id select c).ToListAsync();
                foreach (var item in prop)
                {
                    item.IsActive = false;
                    _context.Entry(item).State = EntityState.Modified;
                }
                customer.Status = false;
            }
            else
            {
                customer.Status = true;
            }
            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
            _context.Entry(customer).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!CustomerExists(customer.Id))
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Customer not found" });
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = e.Message.ToString() });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Status is updated" });
        }
        [HttpDelete("{token}/{Id}")]
        public async Task<ActionResult> DeleteCustomer(Guid token,Guid Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var customer = await (from c in _context.Customer where c.Id == Id && c.IsReady == false select c).FirstOrDefaultAsync();
                    if (customer != null)
                    {
                        customer.AddressStreet1 = "";
                        customer.AddressStreet2 = "";
                        customer.AddressCity = "";
                        customer.AddressState = "";
                        customer.AddressZipCode = "";
                        customer.AddressCountry = "";
                        customer.NameTitle = "";
                        customer.FirstName = "";
                        customer.LastName = "";
                        customer.CompanyName = "";
                        customer.CustomerLogo = "";
                        customer.ClientReminders = false;
                        customer.ClientFollowUpEmails = false;
                        customer.UseCompanyNameAsPrimaryName = true;
                        customer.PrintEmailOnWorkOuder = true;
                        customer.Status = true;
                        _context.Entry(customer).State = EntityState.Modified;
                        _context.SaveChanges();

                        var arraylist = await (from c in _context.ArrayofKey where c.CustomerId == customer.Id select c).ToListAsync();
                        foreach (var item in arraylist)
                        {
                            _context.ArrayofKey.Remove(item);
                        }
                        var ccp = await (from c in _context.CustomerContactPerson where c.CustomerId == customer.Id select c).ToListAsync();
                        foreach (var item in ccp)
                        {
                            _context.CustomerContactPerson.Remove(item);
                        }
                        var cd = await (from c in _context.CustomerDepartment where c.CustomerId == customer.Id select c).ToListAsync();
                        foreach (var item in cd)
                        {
                            _context.CustomerDepartment.Remove(item);
                        }
                        var pro = await (from c in _context.Property where c.CustomerId == customer.Id select c).ToListAsync();
                        foreach (var item in pro)
                        {
                            _context.Property.Remove(item);
                        }
                        await _context.SaveChangesAsync();
                        return StatusCode(202, new { result= "", Message = "success", MessageDescription = "Your customer details has been deleted" });
                    }
                    else
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Delete permission is denied for active customers!" });
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
        private bool CustomerExists(Guid id)
        {
            return _context.Customer.Any(e => e.Id == id);
        }
        /// Customer Methods End
        ///***************************************************************************///


        ///***************************************************************************///
        /// ArrayofKey Methods Begin
        [HttpGet("[action]/{token}/{CustomerId}")]
        public async Task<ActionResult<IEnumerable<ArrayofKey>>> GetArrayofKey(Guid token, Guid CustomerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.ArrayofKey where c.CustomerId == CustomerId select c).ToListAsync();
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
        public async Task<ActionResult> PutArrayofKey(ArrayofKey arrayofKey, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    bool IsEmailExist = _context.ArrayofKey.Any(e => e.Value == arrayofKey.Value && e.Id != arrayofKey.Id);
                    if (IsEmailExist)
                    {
                        string msg ="";
                        if (arrayofKey.Type == "Email") { msg = "Email address " + arrayofKey.Value + " already exist try an other."; }
                        if (arrayofKey.Type == "Phone") { msg = "Phone number " + arrayofKey.Value + " already exist try an other."; }
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = msg }); ;
                    }
                    if (arrayofKey.Type == "Email")
                    {
                        int isEmailCount = await (from c in _context.ArrayofKey where c.CustomerId == arrayofKey.CustomerId && c.Type == "Email" select c.Id).CountAsync();
                        if (isEmailCount == 1) { arrayofKey.IsDefault = true; } else { arrayofKey.IsDefault = false; }
                        arrayofKey.Value = arrayofKey.Value.ToLower();
                    }
                    if (arrayofKey.Type == "Phone")
                    {
                        int isPhoneCount = await (from c in _context.ArrayofKey where c.CustomerId == arrayofKey.CustomerId && c.Type == "Phone" select c.Id).CountAsync();
                        if (isPhoneCount == 1) { arrayofKey.IsDefault = true; } else { arrayofKey.IsDefault = false; }
                    }
                    _context.Entry(arrayofKey).State = EntityState.Modified;
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
        public async Task<ActionResult> PostArrayofKey(ArrayofKey arrayofKey, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    bool IsEmailExistInLogin = _context.Login.Any(e => e.UserName == arrayofKey.Value);
                    if (IsEmailExistInLogin)
                    {
                        string msg = "";
                        if (arrayofKey.Type == "Email") { msg = "Email address " + arrayofKey.Value + " already exist try an other."; }
                        if (arrayofKey.Type == "Phone") { msg = "Phone number " + arrayofKey.Value + " already exist try an other."; }
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = msg }); ;
                    }
                    if (arrayofKey.Type == "Email")
                    {
                        int isEmailCount = await (from c in _context.ArrayofKey where c.CustomerId == arrayofKey.CustomerId && c.Type == "Email" select c.Id).CountAsync();
                        if (isEmailCount == 0) { arrayofKey.IsDefault = true; } else { arrayofKey.IsDefault = false; }
                        arrayofKey.Value = arrayofKey.Value.ToLower();
                    }
                    if (arrayofKey.Type == "Phone")
                    {
                        int isPhoneCount = await (from c in _context.ArrayofKey where c.CustomerId == arrayofKey.CustomerId && c.Type == "Phone" select c.Id).CountAsync();
                        if (isPhoneCount == 0) { arrayofKey.IsDefault = true; } else { arrayofKey.IsDefault = false; }
                    }
                    _context.ArrayofKey.Add(arrayofKey);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result="", Message = "success", MessageDescription = "success" });
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
        [HttpDelete("[action]/{token}/{id}")]
        public async Task<ActionResult> DeleteArrayofKey(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.ArrayofKey.FindAsync(Id);
                    _context.ArrayofKey.Remove(result);
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result ="", Message = "success", MessageDescription = "Removed successfully" });
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
        /// ArrayofKey Methods End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Quotation By Customer Begin
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Quote>>> GetQuotesByCustomer(Guid id)
        {
            return await (from c in _context.Quote where c.CustomerId == id && c.IsReady == true select c).ToListAsync();
        }
        /// Quotation By Customer End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Invoice By Customer Begin
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoiceByCustomer(Guid id)
        {
            return await (from c in _context.Invoice where c.CustomerId == id && c.IsReady == true select c).ToListAsync();
        }
        /// Invoice By Customer End
        ///***************************************************************************///


        ///***************************************************************************///
        /// Tickets By Customer Begin
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicketByCustomer(Guid id)
        {
            return await (from c in _context.Ticket where c.CustomerId == id && c.IsReady == true select c).Include(c => c.TicketTeams).ToListAsync();
        }
        /// Tickets By Customer End
        ///***************************************************************************///

        [HttpPost("[action]/{UserId}")]
        public ActionResult CustomerBulkUpload(Customer obj, Guid? UserId)
        {
            object ServiceResponse = new object();
            List<object> ErrorResponse = new List<object>();
            List<object> SuccessResponse = new List<object>();

            string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
            var result = (from u in _context.Login where u.Id == UserId select u).FirstOrDefault();

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
                var custCount = (from c in _context.Customer select c).Count();
                var ProCount = (from c in _context.Property select c).Count();
                var finalRecords = excelRecords.Tables[0];
                var ContactPersonRecords = excelRecords.Tables[1];
                try
                {
                    int index = 1;
                    for (int i = 1; i < finalRecords.Rows.Count; i++)
                    {
                        object Error = new object();
                        //var tempArrayOfKey = (from b in _context.ArrayofKey where b.Type == "Email" && b.Value == finalRecords.Rows[i][3].ToString() select b.Value).FirstOrDefault();
                        var IsError = false;
                        if (_context.ArrayofKey.Any(b => b.Type == "Email" && b.Value == finalRecords.Rows[i][3].ToString()))
                        {
                            Error = "Last Name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                            Error = "Email id :  " + finalRecords.Rows[i][3].ToString() + " is already exist.";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][0].ToString() == "")
                        {
                            Error = "First Name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][1].ToString() == "")
                        {
                        }
                        if (finalRecords.Rows[i][2].ToString() == "")
                        {
                            Error = "Company Name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][3].ToString() == "")
                        {
                            Error = "Email can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][4].ToString() == "")
                        {
                            Error = "Phone number can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        else
                        {
                            if (IsError == false)
                            {
                                custCount++;
                                ProCount++;
                                object Success = new object();
                                Customer objUser = new Customer();
                                objUser.Id = Guid.NewGuid();
                                objUser.CustomerId = "CUS" + custCount.ToString("00000");
                                objUser.NameTitle = "Mr.";
                                objUser.CustomerLogo = "assets/users/NoImage.png";
                                objUser.FirstName = finalRecords.Rows[i][0].ToString();
                                objUser.LastName = finalRecords.Rows[i][1].ToString();
                                objUser.CompanyName = finalRecords.Rows[i][2].ToString();
                                objUser.UseCompanyNameAsPrimaryName = true;
                                objUser.PrintEmailOnWorkOuder = true;
                                objUser.AddressStreet1 = finalRecords.Rows[i][5].ToString();
                                objUser.AddressStreet2 = finalRecords.Rows[i][6].ToString();
                                objUser.AddressUnitNo = finalRecords.Rows[i][7].ToString();
                                objUser.AddressZipCode = finalRecords.Rows[i][8].ToString();
                                objUser.AddressCity = "";
                                objUser.AddressState = "";
                                objUser.AddressCountry = "Singapore";
                                objUser.Status = true;
                                objUser.IsReady = true;
                                objUser.IsAddressSame = true;
                                objUser.ClientReminders = false;
                                objUser.ClientFollowUpEmails = false;
                                objUser.RefferdBy = "";
                                objUser.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                objUser.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                _context.Customer.Add(objUser);
                                _context.SaveChanges();

                                CustomerContactPerson custCont = new CustomerContactPerson();
                                custCont.NameTitle = objUser.NameTitle;
                                custCont.FirstName = objUser.FirstName;
                                custCont.LastName = objUser.LastName;
                                custCont.Email = finalRecords.Rows[i][3].ToString();
                                custCont.Phone = finalRecords.Rows[i][4].ToString();
                                custCont.CustomerId = objUser.Id;
                                custCont.IsDefaultContact = true;
                                _context.CustomerContactPerson.Add(custCont);
                                _context.SaveChanges();

                                ArrayofKey Arr = new ArrayofKey();
                                Arr.Key = "Main";
                                Arr.Value = finalRecords.Rows[i][3].ToString();
                                Arr.Type = "Email";
                                Arr.IsDefault = true;
                                Arr.CustomerId = objUser.Id;
                                _context.ArrayofKey.Add(Arr);
                                _context.SaveChanges();

                                ArrayofKey Arr1 = new ArrayofKey();
                                Arr1.Key = "Main";
                                Arr1.Value = finalRecords.Rows[i][4].ToString();
                                Arr1.Type = "Phone";
                                Arr1.IsDefault = true;
                                Arr1.CustomerId = objUser.Id;
                                _context.ArrayofKey.Add(Arr1);
                                _context.SaveChanges();

                                CustomerDepartment cdpt = new CustomerDepartment();
                                cdpt.Id = 0;
                                cdpt.CustomerId = objUser.Id;
                                cdpt.SMTPSettingsId = result.SMTPId;
                                cdpt.SMTPName = (from c in _context.SMTPSettings where c.Id == result.SMTPId select c.SMTPName).FirstOrDefault();

                                Property oModel = new Property();
                                oModel.Id = Guid.NewGuid();
                                oModel.AddressStreet1 = finalRecords.Rows[i][5].ToString();
                                oModel.AddressStreet2 = finalRecords.Rows[i][6].ToString();
                                //oModel.AddressCity = finalRecords.Rows[i][7].ToString();
                                oModel.AddressUnitNo = finalRecords.Rows[i][7].ToString();
                                oModel.AddressZipCode = finalRecords.Rows[i][8].ToString();
                                oModel.AddressCountry = "Singapore";
                                oModel.Latitude = null;
                                oModel.Longitude = null;
                                oModel.PropertyId = "PRO" + ProCount.ToString("00000");
                                oModel.CustomerName = objUser.NameTitle + " " + objUser.FirstName + " " + objUser.LastName;
                                oModel.Remarks = null;
                                oModel.IsActive = true;
                                oModel.CreatedUtcDate = DateTime.UtcNow.Date;
                                oModel.ModifiedUtcDate = null;
                                oModel.CustomerId = objUser.Id;
                                _context.Property.Add(oModel);
                                _context.SaveChanges();


                                //// Login Entry Begin
                                try
                                {
                                    Permissions permission = new Permissions
                                    {
                                        DashboardAdmin = false,
                                        DashboardEngineer = false,
                                        LogView = false,
                                        SettingView = false,
                                        CustomerView = false,
                                        CustomerCreate = false,
                                        CustomerEdit = false,
                                        CustomerRemove = false,
                                        CalendarView = false,
                                        MapView = false,
                                        PropertyView = false,
                                        PropertyCreate = false,
                                        PropertyEdit = false,
                                        PropertyRemove = false,
                                        QuoteView = false,
                                        QuoteCreate = false,
                                        QuoteEdit = false,
                                        QuoteRemove = false,
                                        InvoiceView = false,
                                        InvoiceCreate = false,
                                        InvoiceEdit = false,
                                        InvoiceRemove = false,
                                        TicketView = false,
                                        TicketCreate = false,
                                        TicketEdit = false,
                                        TicketRemove = false,
                                        EngineerView = false,
                                        EngineerCreate = false,
                                        EngineerEdit = false,
                                        EngineerRemove = false,
                                        EngineerTicketView = false,
                                        ProductView = false,
                                        ProductCreate = false,
                                        ProductEdit = false,
                                        ProductRemove = false,
                                        ProductWarranty = false,
                                        ServiceView = false,
                                        ServiceCreate = false,
                                        ServiceEdit = false,
                                        ServiceRemove = false,
                                        EngineerProfileView = false,
                                        EngineerTimesheetView = true,
                                        DriveView = false,
                                        GeofencingView = false,
                                        EnableZoneCreate = false,
                                        EnableZoneEdit = false,
                                        EnableZoneRemove = false,
                                        AllowReceivePayment = false,
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
                                        GoogleCalendar = false

                                    };

                                    var adminper = (from p in _context.Permissions where p.Id == result.PermissionId select p.IsProductOnly).FirstOrDefault();
                                    if (adminper) { permission.EngineerLeave = true; } else { permission.EngineerLeave = false; }
                                    if (adminper) { permission.ProductWarranty = true; } else { permission.ProductWarranty = false; }
                                    if (adminper) { permission.GoogleCalendar = true; } else { permission.GoogleCalendar = false; }
                                    if (adminper) { permission.CanEngineerCreateTicket = true; } else { permission.CanEngineerCreateTicket = false; }
                                    _context.Permissions.Add(permission);

                                    string customerEmail = string.Empty;
                                    var email = (from c in _context.ArrayofKey where c.CustomerId == result.Id && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                                    if (email != null)
                                    {
                                        customerEmail = email;
                                    }
                                    else
                                    {
                                        customerEmail = result.Email;
                                    }
                                    Login login = new Login();
                                    login.Id = objUser.Id;
                                    login.UserName = customerEmail;
                                    login.Email = customerEmail;
                                    login.Password = "Cust@1234";
                                    login.PermissionId = permission.Id;
                                    login.Logo = "";
                                    login.Type = "Customer";
                                    login.FullName = objUser.NameTitle + " " + objUser.FirstName + " " + objUser.LastName;
                                    login.Token = Guid.NewGuid();
                                    login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    login.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    _context.Login.Add(login);
                                    _context.SaveChanges();

                                    createCustomerFolder(result, objUser);
                                }
#pragma warning disable CS0168 // The variable 'ww' is declared but never used
                                catch (Exception ww) { }
#pragma warning restore CS0168 // The variable 'ww' is declared but never used
                                ///  Login Entry End
                                Success = "Customer : " + oModel.CustomerName + " Created Successfully.";
                                SuccessResponse.Add(Success);

                                // CUSTOMER LOG START////
                                try
                                {
                                    UserLog o = new UserLog();
                                    o.Id = Guid.NewGuid();
                                    o.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                                    o.UserId = UserId;
                                    o.UserName = result.UserName;
                                    o.Module = "Customer";
                                    o.ModuleId = objUser.Id;
                                    o.ActionType = "Added";
                                    o.Description = "A Customer : " + oModel.CustomerName + ", Company Name " + objUser.CompanyName + " , has been added , Address is : " + objUser.AddressStreet1 +
                                        " " + objUser.AddressStreet2 + " " + objUser.AddressCity + " " + objUser.AddressUnitNo + " " + objUser.AddressZipCode +
                                        " " + objUser.AddressCountry + ", by user : " + result.FullName + "";
                                    o.RecentDescription = "A Property of : " + oModel.CustomerName + " , has been added by user : " + result.FullName + "";
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
                                // CUSTOMER LOG END////

                                // CUSTOMER ARRAY OF KEY LOG START////
                                try
                                {
                                    UserLog oo = new UserLog();
                                    oo.Id = Guid.NewGuid();
                                    oo.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                                    oo.UserId = UserId;
                                    oo.UserName = result.UserName;
                                    oo.Module = "Customer";
                                    oo.ModuleId = oModel.Id;
                                    oo.ActionType = "Added";
                                    oo.Description = "Contact Details of : " + oModel.CustomerName + ", Email:  " + Arr.Value + " Contact Number: " + Arr1.Value + " , has been added by user : " + result.FullName + "";
                                    oo.RecentDescription = "Contact Details of : " + oModel.CustomerName + ", Email:  " + Arr.Value + " Contact Number: " + Arr1.Value + " , has been added by user : " + result.FullName + "";
                                    oo.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    oo.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    _context.UserLog.Add(oo);
                                    _context.SaveChanges();
                                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                                {

                                }
                                // CUSTOMER ARRAY OF KEY LOG END////

                                // CUSTOMER PROPERTY LOG START////
                                try
                                {
                                    UserLog ooo = new UserLog();
                                    ooo.Id = Guid.NewGuid();
                                    ooo.IP = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
                                    ooo.UserId = UserId;
                                    ooo.UserName = result.UserName;
                                    ooo.Module = "Property";
                                    ooo.ModuleId = oModel.Id;
                                    ooo.ActionType = "Added";
                                    ooo.Description = "A Property of : " + oModel.CustomerName + " , has been added , Address is : " + oModel.AddressStreet1 +
                                        " " + oModel.AddressStreet2 + " " + oModel.AddressCity + " " + oModel.AddressUnitNo + " " + oModel.AddressZipCode +
                                        " " + oModel.AddressCountry + ", by user : " + result.FullName + "";
                                    ooo.RecentDescription = "A Property of : " + oModel.CustomerName + " , has been added by user : " + result.FullName + "";
                                    ooo.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    ooo.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                                    _context.UserLog.Add(ooo);
                                    _context.SaveChanges();
                                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                                {

                                }
                                // CUSTOMER PROPERTY LOG END////
                            }
                        }
                    }
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            }
            ServiceResponse = new { ErrorResponse = ErrorResponse, SuccessResponse = SuccessResponse };
            return StatusCode(201, ServiceResponse);
        }

        //upload customer property
        [HttpPost("[action]/{UserId}")]
        public ActionResult ContactPersonBulkUpload(Customer obj, Guid? UserId)
        {
            object ServiceResponse = new object();
            List<object> ErrorResponse = new List<object>();
            List<object> SuccessResponse = new List<object>();
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
                //  var custResult = (from c in _context.Customer where c.Id == obj.Id select c).FirstOrDefault();

                try
                {
                    var ProCount = (from p in _context.CustomerContactPerson select p).Count();
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
                        bool conper = (from cp in _context.CustomerContactPerson
                                       where cp.CustomerId == custResult.Id
                                       where finalRecords.Rows[i][2].ToString() == "" ? cp.CustomerId == custResult.Id : cp.FirstName == finalRecords.Rows[i][2].ToString()
                                       where finalRecords.Rows[i][3].ToString() == "" ? cp.CustomerId == custResult.Id : cp.LastName == finalRecords.Rows[i][3].ToString()
                                       where finalRecords.Rows[i][4].ToString() == "" ? cp.CustomerId == custResult.Id : cp.Email == finalRecords.Rows[i][4].ToString()
                                       where finalRecords.Rows[i][5].ToString() == "" ? cp.CustomerId == custResult.Id : cp.Phone == finalRecords.Rows[i][5].ToString()
                                       select cp).Any();
                        if (conper)
                        {
                            Error = "Duplicate record  on line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][0].ToString() == "")
                        {
                            Error = "CustomerId can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][2].ToString() == "")
                        {
                            Error = "First Name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }

                        else
                        {
                            if (IsError == false)
                            {
                                ProCount++;
                                object Success = new object();
                                CustomerContactPerson custCont = new CustomerContactPerson();
                                custCont.NameTitle = finalRecords.Rows[i][1].ToString(); ;
                                custCont.FirstName = finalRecords.Rows[i][2].ToString(); ;
                                custCont.LastName = finalRecords.Rows[i][3].ToString(); ;
                                custCont.Email = finalRecords.Rows[i][4].ToString();
                                custCont.Phone = finalRecords.Rows[i][5].ToString();
                                custCont.CustomerId = custResult.Id;
                                custCont.IsDefaultContact = false;
                                _context.CustomerContactPerson.Add(custCont);
                                _context.SaveChanges();

                                Success = "Contact Person of : " + custResult.CompanyName + " Created Successfully.";
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
                                    o.Module = "Contact Person";
                                    o.ModuleId = custResult.Id;
                                    o.ActionType = "Added";
                                    o.Description = "A Contact Person of : " + custCont.NameTitle + " " + custCont.FirstName + " " + custCont.LastName +
                                        " Email: " + custCont.Email + " Phone: " + custCont.Phone + ", by user : " + result.FullName + "";
                                    o.RecentDescription = "A Contact Person of : " + custResult.CompanyName + " , has been added by user : " + result.FullName + "";
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
        ///***************************************************************************///
        /// CustomerContactPerson Methods Begin
        [HttpGet("[action]/{token}/{CustomerId}")]
        public async Task<ActionResult> GetCustomerContactPersony(Guid token, Guid CustomerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.CustomerContactPerson where c.CustomerId == CustomerId select c).ToListAsync();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Service Form submitted successfully" });
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
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<CustomerContactPerson>>> SetDefaultCustomerContactPersony(int id)
        {
            var custId = (from s in _context.CustomerContactPerson where s.Id == id select s.CustomerId).FirstOrDefault();
            var contactPersonlist = (from s in _context.CustomerContactPerson where s.CustomerId == custId select s).ToList();
            foreach (var item in contactPersonlist)
            {
                if (item.Id == id)
                {
                    item.IsDefaultContact = true;
                }
                else
                {
                    item.IsDefaultContact = false;
                }
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
            return await (from c in _context.CustomerContactPerson where c.CustomerId == custId select c).ToListAsync();
        }
        [HttpPut("[action]/{token}")]
        public async Task<IActionResult> PutCustomerContactPerson(CustomerContactPerson customercontactperson, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    bool IsEmailExist = _context.CustomerContactPerson.Any(e => e.FirstName == customercontactperson.FirstName && e.LastName == customercontactperson.LastName && e.Id != customercontactperson.Id);
                    if (IsEmailExist)
                    {
                        string name = customercontactperson.NameTitle + " " + customercontactperson.FirstName + " " + customercontactperson.LastName;
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = name + " is already exist try an other!" });
                    }
                    _context.Entry(customercontactperson).State = EntityState.Modified;
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
        public async Task<ActionResult> PostCustomerContactPerson(CustomerContactPerson customercontactperson, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    bool IsCPExist = _context.CustomerContactPerson.Any(e =>
                                    e.FirstName == customercontactperson.FirstName &&
                                    e.LastName == customercontactperson.LastName &&
                                    e.CustomerId == customercontactperson.CustomerId
                                    );
                    if (IsCPExist)
                    {
                        string name = customercontactperson.NameTitle + " " + customercontactperson.FirstName + " " + customercontactperson.LastName;
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = name + " is already exist try an other!" });
                    }
                    else
                    {
                        int count = (from d in _context.CustomerContactPerson where d.CustomerId == customercontactperson.CustomerId select d).Count();
                        if (count == 0)
                        {
                            customercontactperson.IsDefaultContact = true;
                            _context.CustomerContactPerson.Add(customercontactperson);
                            await _context.SaveChangesAsync();
                        }
                        else
                        {
                            customercontactperson.IsDefaultContact = false;
                            _context.CustomerContactPerson.Add(customercontactperson);
                            await _context.SaveChangesAsync();
                        }
                    }
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Contact person add successfully" });
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
        [HttpDelete("[action]/{token}/{id}")]
        public async Task<ActionResult> DeleteContactPerson(Guid token, int id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var arrayofKey = await _context.CustomerContactPerson.FindAsync(id);
                    if (arrayofKey == null)
                    {
                        StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Contact person not found or already removed" });
                    }
                    _context.CustomerContactPerson.Remove(arrayofKey);
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Contact person removed" });
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
        public async Task<ActionResult> GetCustomerList(Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from i in _context.Customer
                                        where i.IsReady == true
                                        select new { i.Id, Name = i.CompanyName }).ToListAsync();
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
        /// Contact Person Methods End
        ///***************************************************************************///
        ///

        [HttpPost("[action]/{token}")]
        [Obsolete]
        public async Task<ActionResult> CreateJobByCustomer(Guid token, NewJobRequest newRequest)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Customer");
                if (IsTokenValid)
                {
                    var genicProfile = (from c in _context.GenicProfile select c).FirstOrDefault();

                    if (newRequest.Status == "DEFECT JOB") {
                        var oldTicketDetails = (from c in _context.Ticket where c.Id == newRequest.TicketId && c.Status == "CLOSED" select c).FirstOrDefault();
                        if (oldTicketDetails == null) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" }); }
                        if (oldTicketDetails.TicketConvertedFrom == "DEFECT JOB") { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Your Request is already inprogress for this ticket" }); }
                        #region Remove Temp Ticket If Exist
                        var removeTempTicketIfExist = (from c in _context.Ticket where c.IsReady == false select c).FirstOrDefault();
                        if (removeTempTicketIfExist != null)
                        {
                            var itemlist = (from i in _context.TicketItem where i.TicketId == removeTempTicketIfExist.Id select i).ToList();
                            if (itemlist.Count > 0)
                            {
                                foreach (var p in itemlist)
                                {
                                    _context.TicketItem.Remove(p);
                                }
                                _context.SaveChanges();
                            }
                            var itemteamt = (from i in _context.TicketTeam where i.TicketId == removeTempTicketIfExist.Id select i).ToList();
                            if (itemteamt.Count > 0)
                            {
                                foreach (var p in itemteamt)
                                {
                                    _context.TicketTeam.Remove(p);
                                }
                                _context.SaveChanges();
                            }
                            var TicketAttachment = (from c in _context.TicketAttachment where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (TicketAttachment.Count > 0)
                            {
                                foreach (var item in TicketAttachment)
                                {
                                    _context.TicketAttachment.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            var TicketIssuewise = (from c in _context.TicketWiseIssueType where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (TicketIssuewise.Count > 0)
                            {
                                foreach (var item in TicketIssuewise)
                                {
                                    _context.TicketWiseIssueType.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            var oldTicketEquipment = (from c in _context.TicketEquipment where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (oldTicketEquipment.Count > 0)
                            {
                                foreach (var item in oldTicketEquipment)
                                {
                                    _context.TicketEquipment.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            _context.Ticket.Remove(removeTempTicketIfExist);
                            _context.SaveChanges();
                        }
                        #endregion
                        oldTicketDetails.TicketConvertedFrom = "DEFECT JOB";
                        _context.Entry(oldTicketDetails).State = EntityState.Modified;
                        _context.SaveChanges();
                        Ticket ticket = new Ticket();
                        int count = (from c in _context.Ticket select c.TicketUniqueID).Max();
                        ticket.TicketUniqueID = count + 1;
                        ticket.Title = oldTicketDetails.Title;
                        ticket.Description = newRequest.Description;
                        ticket.CustomerId = oldTicketDetails.CustomerId;
                        ticket.PropertyId = oldTicketDetails.PropertyId;
                        ticket.CustomerName = oldTicketDetails.CustomerName;
                        ticket.CustomerContactNo = oldTicketDetails.CustomerContactNo;
                        ticket.CustomerEmail = oldTicketDetails.CustomerEmail;
                        ticket.CustomerAddress = oldTicketDetails.CustomerAddress;
                        ticket.CustomerCompanyName = oldTicketDetails.CustomerCompanyName;
                        int recurringcount = (from c in _context.Ticket select c).Count();
                        string ab = string.Empty;
                        ab = ticket.TicketUniqueID.ToString("00000");
                        ticket.TicketId = genicProfile.TicketPrefix + ab;
                        ticket.Id = Guid.NewGuid();
                        ticket.OneOffAppointmentDate = DateTime.Parse(newRequest.AppointmentStart);
                        string tstart = newRequest.AppointmentStart;
                        tstart = tstart.Split('T')[1].Replace("Z", "");
                        string tend = newRequest.AppointmentEnd;
                        tend = tend.Split('T')[1].Replace("Z", "");
                        ticket.OneOffStartTime = TimeSpan.Parse(tstart);
                        ticket.OneOffEndTime = TimeSpan.Parse(tend);
                        ticket.AppointmentStart = newRequest.AppointmentStart;
                        ticket.AppointmentEnd = newRequest.AppointmentEnd;
                        ticket.RecurringId = recurringcount + 1;
                        ticket.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicProfile.TimeZone); ;
                        ticket.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicProfile.TimeZone); ;
                        ticket.RecurringInvoice = "";
                        ticket.InternalNoteDescription = "";
                        ticket.Terms = oldTicketDetails.Terms;
                        ticket.TermsAndConditions = oldTicketDetails.TermsAndConditions;
                        ticket.InvoiceId = Guid.Parse("00000000-0000-0000-0000-000000000000");
                        ticket.InvoiceNo = oldTicketDetails.TicketId;
                        ticket.QuoteId = "";
                        ticket.TicketConvertedID = oldTicketDetails.Id;
                        ticket.TicketConvertedFrom = "Raise Defect";
                        ticket.Priority = oldTicketDetails.Priority;
                        ticket.SMTPId = oldTicketDetails.SMTPId;
                        ticket.Status = "DEFECT JOB";
                        ticket.TicketType = "One-Off Ticket";
                        ticket.OneOffStartTime = new TimeSpan();
                        ticket.OneOffEndTime = new TimeSpan();
                        ticket.OneOffScheduled = true;
                        ticket.IsReady = true;
                        ticket.CreatedBy = oldTicketDetails.CustomerId;
                        _context.Ticket.Add(ticket);
                        _context.SaveChanges();
                        MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                        mail.NewRequestMailForCustomer(ticket.CustomerName, ticket.Title, ticket.TicketId, ticket.CustomerEmail, ticket.SMTPId);
                        mail.NewRequestMailForAdmin(ticket.CustomerCompanyName, ticket.Title, ticket.TicketId, ticket.CustomerName, ticket.SMTPId);
                        return StatusCode(200, new { result = ticket.Id, Message = "success", MessageDescription = "Request #<b>" + ticket.TicketId + "</b><br/>Defect job request created successfully" });
                    }
                    else if (newRequest.Status == "NEW JOB REQUEST") {
                        #region Remove Temp Ticket If Exist
                        var removeTempTicketIfExist = (from c in _context.Ticket where c.IsReady == false select c).FirstOrDefault();
                        if (removeTempTicketIfExist != null)
                        {
                            var itemlist = (from i in _context.TicketItem where i.TicketId == removeTempTicketIfExist.Id select i).ToList();
                            if (itemlist.Count > 0)
                            {
                                foreach (var p in itemlist)
                                {
                                    _context.TicketItem.Remove(p);
                                }
                                _context.SaveChanges();
                            }
                            var itemteamt = (from i in _context.TicketTeam where i.TicketId == removeTempTicketIfExist.Id select i).ToList();
                            if (itemteamt.Count > 0)
                            {
                                foreach (var p in itemteamt)
                                {
                                    _context.TicketTeam.Remove(p);
                                }
                                _context.SaveChanges();
                            }
                            var TicketAttachment = (from c in _context.TicketAttachment where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (TicketAttachment.Count > 0)
                            {
                                foreach (var item in TicketAttachment)
                                {
                                    _context.TicketAttachment.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            var TicketIssuewise = (from c in _context.TicketWiseIssueType where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (TicketIssuewise.Count > 0)
                            {
                                foreach (var item in TicketIssuewise)
                                {
                                    _context.TicketWiseIssueType.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            var oldTicketEquipment = (from c in _context.TicketEquipment where c.TicketId == removeTempTicketIfExist.Id select c).ToList();
                            if (oldTicketEquipment.Count > 0)
                            {
                                foreach (var item in oldTicketEquipment)
                                {
                                    _context.TicketEquipment.Remove(item);
                                }
                                _context.SaveChanges();
                            }
                            _context.Ticket.Remove(removeTempTicketIfExist);
                            _context.SaveChanges();
                        }
                        #endregion
                        var loginDetails = (from c in _context.Login where c.Token == token select c).FirstOrDefault();
                        var customerDetails = (from c in _context.Customer where c.Id == loginDetails.Id select c).FirstOrDefault();
                        var customerDepartment = (from c in _context.CustomerDepartment where c.CustomerId == loginDetails.Id select c).FirstOrDefault();
                        string CUS_DEFAULT_EMAIL = (from c in _context.ArrayofKey where c.CustomerId == loginDetails.Id && c.IsDefault == true && c.Type == "Email" select c.Value).FirstOrDefault();
                        string CUS_DEFAULT_PHONE = (from c in _context.ArrayofKey where c.CustomerId == loginDetails.Id && c.IsDefault == true && c.Type == "Phone" select c.Value).FirstOrDefault();
                        if (CUS_DEFAULT_EMAIL == null) { CUS_DEFAULT_EMAIL = ""; }
                        if (CUS_DEFAULT_PHONE == null) { CUS_DEFAULT_PHONE = ""; }
                        var customerproperty = (from c in _context.Property where c.Id == newRequest.PropertyId select c).FirstOrDefault();
                        string _customerproperty = "";
                        if(customerproperty != null) { _customerproperty = customerproperty.AddressStreet1 + " " + customerproperty.AddressStreet2 + " " + customerproperty.AddressUnitNo + " " + customerproperty.AddressCountry + " " + customerproperty.AddressZipCode; }
                        Ticket ticket = new Ticket();
                        int count = (from c in _context.Ticket select c.TicketUniqueID).Max();
                        ticket.TicketUniqueID = count + 1;
                        ticket.Title = "NEW JOB REQUEST";
                        ticket.Description = newRequest.Description;
                        ticket.CustomerId = loginDetails.Id;
                        ticket.PropertyId = (Guid)newRequest.PropertyId;
                        ticket.CustomerName = customerDetails.NameTitle + " " + customerDetails.FirstName + " " + customerDetails.LastName;
                        ticket.CustomerContactNo = CUS_DEFAULT_PHONE;
                        ticket.CustomerEmail = CUS_DEFAULT_EMAIL;
                        ticket.CustomerAddress = _customerproperty;
                        ticket.CustomerCompanyName = customerDetails.CompanyName;
                        ticket.OneOffAppointmentDate = DateTime.Parse(newRequest.AppointmentStart);
                        string tstart = newRequest.AppointmentStart;
                        tstart = tstart.Split('T')[1].Replace("Z","");
                        string tend = newRequest.AppointmentEnd;
                        tend = tend.Split('T')[1].Replace("Z", "");
                        ticket.OneOffStartTime = TimeSpan.Parse(tstart);
                        ticket.OneOffEndTime = TimeSpan.Parse(tend);
                        ticket.AppointmentStart = newRequest.AppointmentStart;
                        ticket.AppointmentEnd = newRequest.AppointmentEnd;
                        int recurringcount = (from c in _context.Ticket select c).Count();
                        string ab = string.Empty;
                        ab = ticket.TicketUniqueID.ToString("00000");
                        ticket.TicketId = genicProfile.TicketPrefix + ab;
                        ticket.Id = Guid.NewGuid();
                        ticket.RecurringId = recurringcount + 1;
                        ticket.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicProfile.TimeZone); ;
                        ticket.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, genicProfile.TimeZone); ;
                        ticket.RecurringInvoice = "";
                        ticket.InternalNoteDescription = "";
                        ticket.Terms = "";
                        ticket.TermsAndConditions = genicProfile.TicketTermsConditions;
                        ticket.InvoiceId = Guid.Parse("00000000-0000-0000-0000-000000000000");
                        ticket.InvoiceNo = null;
                        ticket.QuoteId = "";
                        ticket.TicketConvertedID = null;
                        ticket.TicketConvertedFrom = null;
                        ticket.Priority = 3;
                        ticket.SMTPId = customerDepartment.SMTPSettingsId;
                        ticket.Status = "NEW JOB REQUEST";
                        ticket.TicketType = "One-Off Ticket";
                        ticket.OneOffStartTime = new TimeSpan();
                        ticket.OneOffEndTime = new TimeSpan();
                        ticket.OneOffScheduled = true;
                        ticket.IsReady = true;
                        ticket.CreatedBy = customerDetails.Id;
                        _context.Ticket.Add(ticket);
                        _context.SaveChanges();
                        MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                        mail.NewRequestMailForCustomer(ticket.CustomerName, ticket.Title, ticket.TicketId, ticket.CustomerEmail, ticket.SMTPId);
                        mail.NewRequestMailForAdmin(ticket.CustomerCompanyName, ticket.Title, ticket.TicketId, ticket.CustomerName, ticket.SMTPId);
                        return StatusCode(200, new { result = ticket.Id, Message = "success", MessageDescription = "Request #<b>" + ticket.TicketId + "</b><br/>new job request created successfully" });
                    }
                    else if (newRequest.Status == "RESCHEDULED")
                    {
                        var ticket = (from t in _context.Ticket where t.Id == newRequest.TicketId && (t.Status == "UPCOMING" || t.Status == "OVERDUE") select t).FirstOrDefault();
                        if (ticket == null) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid request or please select valid job request" }); }
                        #region Remove Ticket Team If Exist
                        var itemteamt = (from i in _context.TicketTeam where i.TicketId == newRequest.TicketId select i).ToList();
                        if (itemteamt.Count > 0)
                        {
                            foreach (var p in itemteamt)
                            {
                                _context.TicketTeam.Remove(p);
                            }
                            _context.SaveChanges();
                        }
                        #endregion
                        
                        ticket.Description = newRequest.Description;
                        ticket.OneOffAppointmentDate = null;
                        ticket.AppointmentStart = null;
                        ticket.AppointmentEnd = null;
                        ticket.Status = "UNSCHEDULED";
                        ticket.OneOffStartTime = new TimeSpan();
                        ticket.OneOffEndTime = new TimeSpan();
                        ticket.OneOffScheduled = true;
                        _context.Entry(ticket).State = EntityState.Modified;
                        _context.SaveChanges();
                        return StatusCode(200, new { result = ticket.Id, Message = "success", MessageDescription = "Request for rescheduled Ticket #<b>" + ticket.TicketId + "</b><br/>has been submitted successfully" });
                    }
                    else { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid request or please select valid job request" }); }
                    
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult> UploadTicketAttachmentByCustomer(Guid token, List<TicketAttachment> ticketattachment)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && x.Type == "Customer");
                if (IsTokenValid)
                {
                    int count = 0;
                    var GTimeZone = (from c in _context.GenicProfile select c).FirstOrDefault();
                    foreach (var item in ticketattachment)
                    {
                        if (item.AttachmentPath.Length > 0)
                        {
                            var ticketdetails = (from t in _context.Ticket where t.Id == item.TicketId select t).FirstOrDefault();
                            string filename = GlobalParameters.MillisecondsTimestamp() + "." + item.AttachmentName.ToLower();
                            string endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticketdetails.TicketId + "/" + filename;
                            AWSHelper awshelper = new AWSHelper();
                            bool isUploaded = awshelper.SendBase64ToAWS(item.AttachmentPath, endPoint, out string msg);
                            if (isUploaded)
                            {
                                TicketAttachment _ticketattachment = new TicketAttachment();
                                _ticketattachment.Id = 0;
                                _ticketattachment.AttachmentName = filename;
                                _ticketattachment.TicketId = item.TicketId;
                                _ticketattachment.AttachmentPath = msg;
                                _ticketattachment.AttachmentSize = item.AttachmentSize;
                                _ticketattachment.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, GTimeZone.TimeZone);
                                _context.Add(_ticketattachment);
                                _context.SaveChanges();
                            }
                            count++;
                        }
                    }
                    return StatusCode(200, new { result ="", Message = "success", MessageDescription = count + " Attachment uploaded Successfully" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
    }
}
