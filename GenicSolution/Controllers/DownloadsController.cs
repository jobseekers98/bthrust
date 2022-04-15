using ClosedXML.Excel;
using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/attachment/[controller]")]
    [ApiController]
    public class DownloadsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        private readonly string ContantType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        public DownloadsController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        [HttpGet("[action]/{module}/{Token}")]
        public async Task<IActionResult> ExcelFile(string module, Guid Token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    DataTable dt = new DataTable();
                    switch (module)
                    {
                        case "brand":
                            await Task.Yield();
                            var brandlist = (from c in _context.Brand
                                             select new
                                             {
                                                 c.BrandId,
                                                 c.BrandName,
                                                 CreatedUtcDate = c.CreatedUtcDate.ToString(),
                                                 ModifiedUtcDate = c.ModifiedUtcDate.ToString()
                                             }).ToList();
                            dt = ConstantParameters.ToDataTable(brandlist);
                            return GetFile(dt, module);
                        case "category":
                            await Task.Yield();
                            var categorylist = (from c in _context.Category
                                                select new
                                                {
                                                    c.CategoryId,
                                                    c.CategoryName,
                                                    CreatedUtcDate = c.CreatedUtcDate.ToString(),
                                                    ModifiedUtcDate = c.ModifiedUtcDate.ToString()
                                                }).ToList();
                            dt = ConstantParameters.ToDataTable(categorylist);
                            return GetFile(dt, module);
                        case "ticketissuetype":
                            await Task.Yield();
                            var ticketissuetypelist = (from c in _context.TicketIssueType select new { c.Id, c.Name }).ToList();
                            dt = ConstantParameters.ToDataTable(ticketissuetypelist);
                            return GetFile(dt, module);
                        case "tax":
                            await Task.Yield();
                            var taxlist = (from c in _context.Category
                                           select new
                                           {
                                               c.CategoryId,
                                               c.CategoryName,
                                               CreatedUtcDate = c.CreatedUtcDate.ToString(),
                                               ModifiedUtcDate = c.ModifiedUtcDate.ToString()
                                           }).ToList();
                            dt = ConstantParameters.ToDataTable(taxlist);
                            return GetFile(dt, module);
                        case "docsallow":
                            await Task.Yield();
                            var docsallowlist = (from c in _context.GenicFileExtenstion
                                                 orderby c.Id descending
                                                 select new
                                           {
                                               c.Id,
                                               c.ExtentionName,
                                               status = c.IsActive ? "Active":"Inactive"
                                           }).ToList();
                            dt = ConstantParameters.ToDataTable(docsallowlist);
                            return GetFile(dt, module);
                        case "service":
                            await Task.Yield();
                            var servicelist = (from c in _context.Service orderby c.CreatedUtcDate descending select new { c.ServiceId, c.ServiceName, c.ServiceDescription }).ToList();
                            dt = ConstantParameters.ToDataTable(servicelist);
                            return GetFile(dt, module);
                        case "product":
                            await Task.Yield();
                            var productlist = (from c in _context.Product
                                               orderby c.CreatedUtcDate descending
                                               select new
                                               {
                                                   c.ProductId,
                                                   c.ProductName,
                                                   c.ProductBrand,
                                                   c.ProductCategory,
                                                   c.Description,
                                                   SellPrise = c.SalePrice,
                                                   c.PurchasePrice,
                                                   c.Quantity,
                                                   c.LowStockTriggerQuantity,
                                                   Batch = string.Join(", ", (from t in _context.ItemofList where t.ProductId == c.Id select "[" + t.BatchNo + ", " + t.AvailableQuantity + ", " + t.ManufacturingDate + "]").ToList())
                                               }).ToList();
                            dt = ConstantParameters.ToDataTable(productlist);
                            return GetFile(dt, module);
                        case "customer":
                            await Task.Yield();
                            var customerlist = (from c in _context.Customer
                                                orderby c.CustomerId descending
                                                where c.IsReady == true
                                                select new
                                                {
                                                    c.CustomerId,
                                                    Name = c.NameTitle + " " + c.FirstName + " " + c.LastName,
                                                    c.CompanyName,
                                                    Address = c.AddressStreet1 + ' ' + c.AddressStreet2 + ' ' + c.AddressCity + ' ' + c.AddressUnitNo + ' ' + c.AddressState + ' ' + c.AddressZipCode + ' ' + c.AddressCountry,
                                                    Email = (from t in _context.ArrayofKey where t.CustomerId == c.Id select t.Value).FirstOrDefault(),
                                                    c.Status
                                                }).ToList();
                            dt = ConstantParameters.ToDataTable(customerlist);
                            return GetFile(dt, module);
                        case "engineer":
                            await Task.Yield();
                            var engineerlist = (from c in _context.Engineer
                                                orderby c.EngineerId descending
                                                where c.IsReady == true
                                                select new
                                                {
                                                    c.EngineerId,
                                                    c.EngineerName,
                                                    Contact = c.EngineerPhone,
                                                    Email = c.EngineerEmail,
                                                    Address = c.AddressStreet1 + ' ' + c.AddressStreet2 + ' ' + c.AddressCity + ' ' + c.AddressUnitNo + ' ' + c.AddressState + ' ' + c.AddressZipCode + ' ' + c.AddressCountry,
                                                }).ToList();
                            dt = ConstantParameters.ToDataTable(engineerlist);
                            return GetFile(dt, module);
                        case "property":
                            await Task.Yield();
                            var propertylist = (from c in _context.Property
                                                orderby c.CreatedUtcDate descending
                                                select new
                                                {
                                                    c.PropertyId,
                                                    c.CustomerName,
                                                    TotalTicket = (from t in _context.Ticket where t.PropertyId == c.Id select t).Count(),
                                                    Address = c.AddressStreet1 + ' ' + c.AddressStreet2 + ' ' + c.AddressCity + ' ' + c.AddressUnitNo + ' ' + c.AddressState + ' ' + c.AddressZipCode + ' ' + c.AddressCountry,
                                                    Status = c.IsActive
                                                }).ToList();
                            dt = ConstantParameters.ToDataTable(propertylist);
                            return GetFile(dt, module);
                        case "quotation":
                            await Task.Yield();
                            var quotelist = (from c in _context.Quote
                                             orderby c.QuoteId descending
                                             where c.IsReady == true
                                             select new
                                             {
                                                 QuoteNo = c.QuoteId,
                                                 Subject = c.JobTitle,
                                                 Company = c.CompanyName,
                                                 Customer = c.CustomerName,
                                                 Contact = c.CustomerContactNo,
                                                 Email = c.CustomerEmail,
                                                 SubTotal = c.SubTotal.ToString("00.00"),
                                                 Discount = c.DiscountAmount.ToString("00.00"),
                                                 GST = c.TaxAmount.ToString("00.00"),
                                                 NetAmount = c.NetAmount.ToString("00.00"),
                                                 AdditionalRemarks = c.InternalNotes,
                                                 TicketNo = c.TicketNo,
                                                 SaleRep = c.SalesRepresentative,
                                                 PreparedBy = c.PreparedBy,
                                                 Attention = c.Attention,
                                                 TermsAndCondition = c.QuoteTermsAndCondition
                                             }).ToList();
                            dt = ConstantParameters.ToDataTable(quotelist);
                            return GetFile(dt, module);
                        case "ticket":
                            await Task.Yield();
                            var ticketlist = (from t in _context.Ticket
                                              join c in _context.Customer on t.CustomerId equals c.Id
                                              join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                              join ti in _context.TicketItem on t.Id equals ti.TicketId
                                              where c.IsReady == true
                                              orderby t.TicketId descending
                                              select new
                                              {
                                                  Ticket_No = t.TicketId,
                                                  Customer_ID = c.CustomerId,
                                                  Customer_Name = c.CompanyName == null ? "-" : c.CompanyName,
                                                  Contact_Person = t.CustomerName == null ? "-" : t.CustomerName,
                                                  Contact_Number = (from cn in _context.ArrayofKey where cn.CustomerId == t.CustomerId && cn.IsDefault == true && cn.Type == "Phone" select cn.Value == null ? "-" : cn.Value).FirstOrDefault(),
                                                  Mobile_Number = t.CustomerContactNo == null ? "-" : t.CustomerContactNo,
                                                  Address = t.CustomerAddress == null ? "-" : t.CustomerAddress,
                                                  Email_Id = t.CustomerEmail == null ? "-" : t.CustomerEmail,
                                                  Product_Category = (from w in _context.Product where w.ProductName == ti.ItemName select w.ProductCategory).FirstOrDefault() == null ? "-" : (from w in _context.Product where w.ProductName == ti.ItemName select w.ProductCategory).FirstOrDefault(),
                                                  Model_No = "",
                                                  Installation_Date = ti.InstallationDate == null ? "-" : ti.InstallationDate.ToString(),
                                                  Serial_Number_Unique_Id = ti.UniqId == null ? "-" : ti.UniqId,
                                                  Maintenance_Type = "",
                                                  Part_Affected = "",
                                                  Priority = t.Priority == 1 ? "High" : t.Priority == 2 ? "Medium" : "Low",
                                                  Engineer_Name = tt.EngineerName,
                                                  Ticket_Type = t.TicketType,
                                                  Ticket_status = t.Status,
                                                  Ticket_Frequency = t.RecurringDuration == 7 ? "Weekly" : t.RecurringDuration == 30 ? "Monthly" : t.RecurringDuration == 90 ? "Quarterly" : t.RecurringDuration == 180 ? "half yearly" : "-",
                                                  Ticket_Created_By = (from l in _context.Login where l.Id == t.CreatedBy select l.FullName).FirstOrDefault(),
                                                  Ticket_Created_date = t.CreatedUtcDate == null ? "-" : Convert.ToDateTime(t.CreatedUtcDate).ToString(),
                                                  Ticket_Closed_date = t.TicketClosedDate == null ? "-" : Convert.ToDateTime(t.TicketClosedDate).ToString(),
                                                  Appointment_Fixed_Month = t.AppointmentStart == null ? "-" : Convert.ToDateTime(t.AppointmentStart).ToString("MMM-yy"),
                                                  Appointment_Start_date = t.AppointmentStart == null ? "-" : Convert.ToDateTime(t.AppointmentStart).ToString(),
                                                  Time_Elapsed = ((t.TicketClosedDate == null ? DateTime.UtcNow.AddHours(8) : t.TicketClosedDate) - t.OneOffAppointmentDate).Value.TotalHours.ToString(),
                                                  Spares_Amount = "$" + ti.ItemTotalCost,
                                                  Service_Amount = "$" + t.NetAmount,
                                                  Day_Elapsed = ((t.TicketClosedDate == null ? DateTime.UtcNow.AddHours(8) : t.TicketClosedDate) - Convert.ToDateTime(t.AppointmentEnd)).Value.Days.ToString(),

                                              }).ToList();
                            dt = ConstantParameters.ToDataTable(ticketlist);
                            return GetFile(dt, module);
                        case "productwarranty":
                            await Task.Yield();
                            var result1 = (from ti in _context.TicketItem
                                           join tt in _context.TicketTeam on ti.TicketId equals tt.TicketId
                                           join tic in _context.Ticket on ti.TicketId equals tic.Id
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
                                               tic.TicketId
                                           }).Distinct().ToList();
                            var result01 = (from w in _context.ProductWarranty
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
                                                TicketId = "NA"
                                            }).ToList();
                            foreach (var item in result01)
                            {
                                result1.Add(item);
                            }
                            var productwarranty = (from p in result1
                                                   orderby p.TicketId descending
                                                   select new
                                                   {
                                                       p.ItemName,
                                                       p.UniqId,
                                                       InstallationDate = p.InstallationDate == null ? "" : p.InstallationDate.ToString(),
                                                       ExpiryDate = p.ExpiryDate == null ? "" : p.ExpiryDate.ToString(),
                                                       p.Customer,
                                                       Status = p.ExpiryDate > DateTime.UtcNow.AddHours(8).AddDays(1) ? "Active" : "Expired",
                                                       p.TicketId
                                                   }).ToList();
                            dt = ConstantParameters.ToDataTable(productwarranty);
                            return GetFile(dt, module);

                    }
                    var list = new[] { new { ErrorCode = 404, Message = "Record Not found" } }.ToList();
                    dt = ConstantParameters.ToDataTable(list);
                    return GetFile(dt, module);
                }
                else
                {
                    DataTable dt = new DataTable();
                    var list = new[] { new { ErrorCode = 401, Message = "Permission not granted" }}.ToList();
                    dt = ConstantParameters.ToDataTable(list);
                    return GetFile(dt, module);
                }
            }
            catch (Exception ex)
            {
                DataTable dt = new DataTable();
                var list = new[] { new { ErrorCode = 500, Message = ex.Message.ToString() } }.ToList();
                dt = ConstantParameters.ToDataTable(list);
                return GetFile(dt, module);
            }
        }
        public FileContentResult GetFile(DataTable data, string module)
        {

            using (var workbook = new XLWorkbook())
            {
                IXLWorksheet worksheet = workbook.Worksheets.Add(data, module);
                worksheet.Columns().AdjustToContents();
                worksheet.Rows().AdjustToContents();
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();
                   return File(content, ContantType);
                }
            }
        }
    }
}