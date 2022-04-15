using ExcelDataReader;
using GenicSolution.Entities;
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
    public class PropertiesController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public PropertiesController(EntityFrameworkDbContext context)
        {
            _context = context;
        }

        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> Get(Guid token)
        {
            var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
            var result = await (from c in _context.Property
                                join cs in _context.Customer on c.CustomerId equals cs.Id
                                where UserType.Type == "Admin" ? cs.IsReady == true : cs.IsReady == true && cs.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)
                                select new
                                {
                                    c.Id,
                                    c.PropertyId,
                                    c.CustomerName,
                                    c.CustomerId,
                                    c.CompanyName,
                                    c.AddressStreet1,
                                    c.AddressStreet2,
                                    c.AddressUnitNo,
                                    c.AddressCountry,
                                    c.AddressZipCode,
                                    c.Latitude,
                                    c.Longitude,
                                    c.Remarks,
                                    c.IsActive,
                                    TotalTicket = (from t in _context.Ticket where t.PropertyId == c.Id && t.IsReady == true select t).Count()
                                }).ToListAsync();
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperty(Guid id)
        {
            var @property = await (from c in _context.Property where c.Id == id select c).ToListAsync();

            if (@property == null)
            {
                return NotFound();
            }

            return @property;
        }
        [HttpGet("[action]/{token}/{CustomerId}")]
        public async Task<ActionResult> GetPropertyCustomerWise(Guid token, Guid CustomerId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from c in _context.Property where c.CustomerId == CustomerId select c).ToListAsync();
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

        [HttpPut("{token}")]
        public async Task<IActionResult> PutProperty(Property property, Guid token)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
            if (!IsTokenValid)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            if (ModelState.IsValid)
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var _property = (from t in _context.Property where t.Id == property.Id select t).FirstOrDefault();
                var _customer = (from c in _context.Customer where c.Id == property.CustomerId select c).FirstOrDefault();

                _property.AddressStreet1 = property.AddressStreet1;
                _property.AddressStreet2 = property.AddressStreet2;
                _property.AddressCity = "";
                _property.AddressState = "";
                _property.AddressUnitNo = property.AddressUnitNo;
                _property.AddressZipCode = property.AddressZipCode;
                _property.AddressCountry = property.AddressCountry;
                _property.Latitude = property.Latitude;
                _property.Longitude = property.Longitude;
                _property.CustomerName = (_customer.NameTitle + " " + _customer.FirstName + " " + _customer.LastName).Trim();
                _property.CompanyName = _customer.CompanyName;
                _property.Remarks = property.Remarks;
                _property.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);

                _context.Entry(_property).State = EntityState.Modified;
                try
                {
                    await _context.SaveChangesAsync();
                    var ticketList = await (from t in _context.Ticket where t.PropertyId == property.Id && t.Status == "UPCOMING" select t).ToListAsync();
                    foreach (var item in ticketList)
                    {
                        item.CustomerAddress = property.AddressStreet1 + " " + property.AddressStreet2 + ", " + property.AddressCity + " " + property.AddressState + ", " + property.AddressCountry + " " + property.AddressZipCode;
                        item.CustomerName = _property.CustomerName;
                        item.CustomerCompanyName = _property.CompanyName;
                        _context.Entry(item).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                }
                catch (DbUpdateConcurrencyException e)
                {
                    if (!PropertyExists(property.Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Property not fount" });
                    }
                    else
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = e.Message.ToString() });
                    }
                }
                return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Property address is updated" });
            }
            else
            {
                var errors = new List<string>();
                foreach (var state in ModelState)
                {
                    foreach (var error in state.Value.Errors)
                    {
                        errors.Add(error.ErrorMessage);
                    }
                }
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = errors });
            }
        }
        [HttpPut("[action]/{Id}")]
        public async Task<IActionResult> PutPropertyStatusActiveInactive(Guid Id)
        {

            try
            {
                var prop = await (from c in _context.Property
                                  join cus in _context.Customer on c.CustomerId equals cus.Id
                                  where c.Id == Id && cus.Status == true
                                  select c).FirstOrDefaultAsync();
                if (prop is null)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Please active first the customer" });
                }
                else
                {
                    if (prop.IsActive)
                    {
                        prop.IsActive = false;
                    }
                    else
                    {
                        prop.IsActive = true;
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    prop.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(prop).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update successfully" });
                }
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!PropertyExists(Id))
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = "Property not fount" });
                }
                else
                {
                    return StatusCode(203, new { result = "", Message = "failure", MessageDescription = e.Message.ToString() });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("{token}")]
        public ActionResult<Property> PostProperty(Property property, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var custdetails = (from c in _context.Customer where c.Id == property.CustomerId select c).FirstOrDefault();
                var newprop = new Property();
                newprop.PropertyId += "PRO" + (_context.Property.Count() + 1).ToString("00000");
                newprop.AddressStreet1 = property.AddressStreet1;
                newprop.AddressStreet2 = property.AddressStreet2;
                newprop.AddressCity = property.AddressCity;
                newprop.AddressState = property.AddressState;
                newprop.AddressUnitNo = property.AddressUnitNo;
                newprop.AddressZipCode = property.AddressZipCode;
                newprop.AddressCountry = property.AddressCountry;
                newprop.Latitude = property.Latitude;
                newprop.Longitude = property.Longitude;
                newprop.CustomerId = property.CustomerId;
                newprop.CustomerName = custdetails.NameTitle + " " + custdetails.FirstName + " " + custdetails.LastName;
                newprop.CompanyName = custdetails.CompanyName;
                newprop.Remarks = property.Remarks;
                newprop.IsActive = true;
                newprop.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                newprop.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Property.Add(newprop);
                _context.SaveChanges();
                return StatusCode(201, new { result = "", Message = "success", MessageDescription = "New Property Created" });
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpPost("[action]")]
        public ActionResult<ICollection<Property>> AddNewProperty(Property property)
        {
            var result = (from c in _context.Customer where c.Id == property.CustomerId select c).FirstOrDefault();
            if (result != null)
            {
                int propertyCount = (from c in _context.Property where c.CustomerId == property.CustomerId select c.Id).Count();
                if (propertyCount == 0)
                {
                    var customer = (from c in _context.Customer where c.Id == property.CustomerId select c).FirstOrDefault();
                    customer.AddressStreet1 = property.AddressStreet1;
                    customer.AddressStreet2 = property.AddressStreet2;
                    customer.AddressCity = property.AddressCity;
                    customer.AddressState = property.AddressState;
                    customer.AddressUnitNo = property.AddressUnitNo;
                    customer.AddressZipCode = property.AddressZipCode;
                    customer.AddressCountry = property.AddressCountry;
                    _context.Entry(customer).State = EntityState.Modified;
                    _context.SaveChanges();
                }
                var custdetails = (from c in _context.Customer where c.Id == property.CustomerId select c).FirstOrDefault();
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                var newprop = new Property();
                newprop.PropertyId += "PRO" + (_context.Property.Count() + 1).ToString("00000");
                newprop.AddressStreet1 = property.AddressStreet1;
                newprop.AddressStreet2 = property.AddressStreet2;
                newprop.AddressCity = "";
                newprop.AddressState = "";
                newprop.AddressUnitNo = property.AddressUnitNo;
                newprop.AddressZipCode = property.AddressZipCode;
                newprop.AddressCountry = property.AddressCountry;
                newprop.Latitude = property.Latitude;
                newprop.Longitude = property.Longitude;
                newprop.CustomerId = property.CustomerId;
                newprop.CustomerName = custdetails.NameTitle + " " + custdetails.FirstName + " " + custdetails.LastName;
                newprop.CompanyName = custdetails.CompanyName;
                newprop.Remarks = property.Remarks;
                newprop.IsActive = true;
                newprop.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                newprop.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                _context.Property.Add(newprop);
                _context.SaveChanges();
            }
            return (from c in _context.Property where c.CustomerId == property.CustomerId select c).ToList();
        }

        [HttpGet("[action]/{Id}")]
        public ActionResult<Property> getPropertyDataByProperyId(Guid? Id)
        {
            try
            {
                var PropData = (from b in _context.Property where b.Id == Id select b).FirstOrDefault();
                if (PropData == null)
                {
                    return StatusCode(404, "Not found");
                }
                else
                {
                    return PropData;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }

        }
        private bool PropertyExists(Guid id)
        {
            return _context.Property.Any(e => e.Id == id);
        }

        //upload customer property
        [HttpPost("[action]/{UserId}")]
        public ActionResult PropertyBulkUpload(Customer obj, Guid? UserId)
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
                    var ProCount = (from p in _context.Property select p).Count();
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
                        if (finalRecords.Rows[i][0].ToString() == "")
                        {
                            Error = "CustomerId can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][4].ToString() == "")
                        {
                            Error = "Postal code can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        else
                        {
                            if (IsError == false)
                            {
                                ProCount++;
                                object Success = new object();
                                Property oModel = new Property();
                                oModel.Id = Guid.NewGuid();
                                oModel.AddressStreet1 = finalRecords.Rows[i][1].ToString();
                                oModel.AddressStreet2 = finalRecords.Rows[i][2].ToString();
                                //oModel.AddressCity = finalRecords.Rows[i][3].ToString();
                                oModel.AddressUnitNo = finalRecords.Rows[i][3].ToString();
                                oModel.AddressZipCode = finalRecords.Rows[i][4].ToString();
                                oModel.AddressCountry = "Singapore";
                                oModel.Latitude = "1.3521";
                                oModel.Longitude = "103.8198";
                                oModel.PropertyId = "PRO" + ProCount.ToString("00000");
                                oModel.CustomerName = custResult.NameTitle + " " + custResult.FirstName + " " + custResult.LastName;
                                oModel.CompanyName = custResult.CompanyName;
                                oModel.Remarks = finalRecords.Rows[i][5].ToString();
                                oModel.IsActive = true;
                                oModel.CreatedUtcDate = DateTime.UtcNow.Date;
                                oModel.ModifiedUtcDate = null;
                                oModel.CustomerId = custResult.Id;

                                _context.Property.Add(oModel);
                                _context.SaveChanges();

                                Success = "Property of : " + oModel.CustomerName + " Created Successfully.";
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
                                    o.Module = "Property";
                                    o.ModuleId = oModel.Id;
                                    o.ActionType = "Added";
                                    o.Description = "A Property of : " + oModel.CustomerName + " , has been added , Address is : " + oModel.AddressStreet1 +
                                        " " + oModel.AddressStreet2 + " " + oModel.AddressCity + " " + oModel.AddressUnitNo + " " + oModel.AddressZipCode +
                                        " " + oModel.AddressCountry + ", by user : " + result.FullName + "";
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

        /// Get Client History Ticket Details
        [HttpGet("[action]/{Id}")]
        public async Task<ActionResult> TicketHistoryViewDetails(Guid Id)
        {
            var ticket = await _context.Ticket.FindAsync(Id);
            if (ticket == null)
            {
                return StatusCode(200, "");
            }
            var result = await (from t in _context.Ticket
                                where t.Id == Id
                                select new
                                {
                                    CustomerDetails = (from t1 in _context.Ticket
                                                       where t1.Id == t.Id
                                                       select new
                                                       {

                                                           t1.TicketId,
                                                           t1.CustomerCompanyName,
                                                           t1.CustomerName,
                                                           t1.CustomerContactNo,
                                                           t1.CustomerEmail,
                                                           t1.CustomerAddress,
                                                           t1.Title,
                                                           t1.Description,
                                                           t1.AppointmentStart,
                                                           t1.AppointmentEnd,
                                                           t1.InternalNoteDescription,
                                                           t1.NetAmount
                                                       }).FirstOrDefault(),
                                    IssueType = (from itl in t.TicketWiseIssueType select new { itl.IssueTypeName }).ToList(),
                                    TicketTeam = (from tts in t.TicketTeams select new { tts.EngineerName, tts.EngineerLogo, tts.Type }).ToList(),
                                    TicketAttachment = (from tal in t.TicketAttachments select new { tal.AttachmentName, tal.AttachmentPath, tal.AttachmentSize }).ToList(),
                                    TicketItem = (from ti in t.TicketItems select new { ti.ItemName, ti.Type, ti.ItemDescription, ti.ItemQuantity, ti.ItemUnitCost, ti.ItemTotalCost, ti.ItemAddredBy, ti.InWarranty, ti.UniqId, ti.WarrantyDays }).ToList(),
                                    TicketWiseServiceForm = (from twsf in t.TicketWiseIssueType select new { twsf.IssueTypeName }).ToList(),
                                    CloserDetails = (from cl in _context.CloserDetails
                                                     where cl.TicketId == t.Id && cl.IsReady == true
                                                     select new
                                                     {
                                                         cl.CloserID,
                                                         cl.CloserPrefix,
                                                         cl.EngineerName,
                                                         cl.CustomerSignature,
                                                         cl.EngineerSignature,
                                                         cl.StartDate,
                                                         cl.EndDate,
                                                         cl.StartTime,
                                                         cl.EndTime,
                                                         cl.TotalDuration,
                                                         cl.Remarks,
                                                         cl.CloserAmount,
                                                         cl.CloserGSTAmount,
                                                         cl.CloserTotalAmount,
                                                         cl.PaymentMode,
                                                         cl.AmountPaid,
                                                         ServiceForm = (from sf in _context.TicketWiseServiceForm where sf.CloserId == cl.CloserID select sf.ServicePrefix + sf.TicketServiceID).FirstOrDefault(),
                                                         CloserAttachmentList = (from clatt in _context.CloserAttachment
                                                                                 where clatt.CloserID == cl.CloserID
                                                                                 select new
                                                                                 {
                                                                                     clatt.AttachmentFile,
                                                                                     clatt.AttachmentExtenstion,
                                                                                     clatt.Remarks,
                                                                                     CloserAttachmentAudioList = (from alis in _context.CloserAttachmentAduio
                                                                                                                  where alis.CloserID == cl.CloserID && alis.CAID == clatt.CAID
                                                                                                                  select new
                                                                                                                  {
                                                                                                                      alis.AudioAttachment,
                                                                                                                      alis.AudiotSize
                                                                                                                  }).ToList()
                                                                                 }).ToList()
                                                     }).ToList()
                                }).FirstOrDefaultAsync();

            return StatusCode(200, result); ;
        }

        [HttpGet("[action]/{moduletype}")]
        public ActionResult CustomerAddressLatLong(string moduletype)
        {
            if (moduletype == "Customer")
            {
                var result = (from c in _context.Customer
                              where c.IsReady == true &&
 (c.Latitude == null || c.Latitude == "") &&
 (c.Longitude == null || c.Longitude == "") &&
 (c.AddressZipCode != null && c.AddressZipCode != "")
                              select new { c.Id, c.AddressZipCode }).ToList();
                return StatusCode(200, result);
            }
            if (moduletype == "Property")
            {
                var result = (from c in _context.Property
                              where
 (c.Latitude == null || c.Latitude == "") &&
 (c.Longitude == null || c.Longitude == "") &&
 (c.AddressZipCode != null && c.AddressZipCode != "")
                              select new { c.Id, c.AddressZipCode }).ToList();
                return StatusCode(200, result);
            }
            if (moduletype == "Engineer")
            {
                var result = (from c in _context.Engineer
                              where c.IsReady == true &&
 (c.Latitude == null || c.Latitude == "") &&
 (c.Longitude == null || c.Longitude == "") &&
 (c.AddressZipCode != null && c.AddressZipCode != "")
                              select new { c.Id, c.AddressZipCode }).ToList();
                return StatusCode(200, result);
            }

            return StatusCode(200, "");
        }
        [HttpPut("[action]/{moduletype}")]
        public ActionResult CustomerAddressLatLongUpdate(Property property, string moduletype)
        {
            if (moduletype == "Customer")
            {
                var result = (from c in _context.Customer where c.Id == property.Id select c).FirstOrDefault();
                if (result != null)
                {
                    result.Latitude = property.Latitude;
                    result.Longitude = property.Longitude;
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }
            if (moduletype == "Property")
            {
                var result = (from c in _context.Property where c.Id == property.Id select c).FirstOrDefault();
                if (result != null)
                {
                    result.Latitude = property.Latitude;
                    result.Longitude = property.Longitude;
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }
            if (moduletype == "Engineer")
            {
                var result = (from c in _context.Engineer where c.Id == property.Id select c).FirstOrDefault();
                if (result != null)
                {
                    result.Latitude = property.Latitude;
                    result.Longitude = property.Longitude;
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }
            return StatusCode(200, "Updated");
        }
    }
}
