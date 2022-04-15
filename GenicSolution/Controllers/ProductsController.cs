using ExcelDataReader;
using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using Microsoft.AspNetCore.Hosting;
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

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public ProductsController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        #region Product
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetAllProduct(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Product.Include(c => c.ItemofLists).OrderByDescending(s=>s.CreatedUtcDate).ToListAsync();
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
        [HttpGet("[action]/{token}/{ProductId}")]
        public ActionResult GetProductById(Guid token, Guid ProductId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result =  _context.Product.Where(c => c.Status == true && c.Id == ProductId).Select(p => p).FirstOrDefault();
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
        public async Task<ActionResult> GetProducts(Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from p in _context.Product orderby p.CreatedUtcDate descending where p.Status == true select p).ToListAsync();
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
        public async Task<ActionResult> GetProductListForWarranty(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = await (from p in _context.Product
                                    where p.Status == true && p.InWarranty == true
                                    select new { p.Id, p.ProductId, Name = p.ProductName }).ToListAsync();
                var result2 = await (from s in _context.Service
                                     where s.IsActive == true && s.InWarranty == true
                                     select new { s.Id, ProductId = s.ServiceId, Name = s.ServiceName }).ToListAsync();
                foreach (var item in result2)
                {
                    result.Add(item);
                }
                return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetProductsForSelect2Dropdown(Guid token, [FromQuery] string q)
        {
            bool IsExist = (from l in _context.Login where l.Token == token select l).Any();
            if (IsExist)
            {
                string searchStr = q;
                var result2 = await (from l in _context.Login
                                     where l.Token == token
                                     select new
                                     {
                                         total_count = 5,
                                         incomplete_results = false,
                                         items = (from p in _context.Product
                                                  where p.Status == true
                                                  where p.ProductName.Contains(searchStr) || p.Description.Contains(searchStr) || p.ProductBrand.Contains(searchStr) || p.ProductCategory.Contains(searchStr) || p.ProductId.Contains(searchStr)
                                                  select new
                                                  {
                                                      id = p.Id,
                                                      name = searchStr,
                                                      description = p.Description,
                                                      text = p.ProductName,
                                                      full_name = p.ProductName,
                                                  }).ToList()
                                     }).FirstOrDefaultAsync();
                searchStr = string.Empty;
                return StatusCode(200, result2);
            }
            else
            {
                return StatusCode(200, new { total_count = 0, incomplete_results = false, items = new { full_name = "Token Expired", description = "Token Expired" } });
            }
        }
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult<Product>> PutProduct(Product product, Guid token)
        {
            try
            {
                product.ItemofLists = null;
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Product.Any(b => b.ProductName == product.ProductName & b.Id != product.Id))
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Product name already exists" });
                    }
                    if (product.ProductLogo.Length > 0)
                    {
                        string end_point = GlobalParameters.AWS_FOLDER + "/Product/" + product.Id + ".jpeg";
                        AWSHelper awshelper = new AWSHelper();
                        string msg = string.Empty;
                        bool isUploaded = awshelper.SendBase64ToAWS(product.ProductLogo, end_point, out msg);
                        if (isUploaded) { product.ProductLogo = msg; }
                        else { product.ProductLogo = ""; }
                    }
                    else
                    {
                        var previousProductLogo = (from c in _context.Product where c.Id == product.Id select c.ProductLogo).FirstOrDefault();
                        product.ProductLogo = previousProductLogo;
                    }
                    _context.Entry(product).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Product update successfully" });
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
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult<Product>> PostProduct(Product product, Guid token)
        {
            try
            {
                product.ItemofLists = null;
                product.Id = Guid.NewGuid();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Product.Any(b => b.ProductName == product.ProductName))
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Product name already exists" });
                    }
                    if (product.ProductLogo.Length > 0)
                    {
                        string end_point = GlobalParameters.AWS_FOLDER + "/Product/" + product.Id + ".jpeg";
                        AWSHelper awshelper = new AWSHelper();
                        string msg = string.Empty;
                        bool isUploaded = awshelper.SendBase64ToAWS(product.ProductLogo, end_point, out msg);
                        if (isUploaded) { product.ProductLogo = msg; }
                        else { product.ProductLogo = ""; }
                    }
                    else
                    {
                        product.ProductLogo = "";
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    product.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    product.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Product.Add(product);
                    _context.SaveChanges();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Product added successfully" });
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
        [HttpPut("[Action]/{token}/{ProductId}")]
        public async Task<ActionResult> onProductStatusChange(Guid token, Guid ProductId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = (from f in _context.Product where f.Id == ProductId select f).FirstOrDefault();
                    if (result.Status) { result.Status = false; } else { result.Status = true; }
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    _context.Entry(result).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "Update successfully" });
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
        [HttpPost("[action]/{UserId}")]
        public ActionResult ProductBulkUpload(Customer obj, Guid? UserId)
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
                var Count = (from c in _context.Product select c).Count();
                var finalRecords = excelRecords.Tables[0];
                try
                {
                    int index = 1;

                    //  int tempCategoryId = 0;
                    for (int i = 1; i < finalRecords.Rows.Count; i++)
                    {
                        object Error = new object();
                        var tempBrand = (from b in _context.Brand where b.BrandName == finalRecords.Rows[i][2].ToString() select b.BrandId).FirstOrDefault();
                        var tempCategory = (from b in _context.Category where b.CategoryName == finalRecords.Rows[i][3].ToString() select b.CategoryId).FirstOrDefault();
                        var IsError = false;
                        if (_context.Product.Any(b => b.ProductId == finalRecords.Rows[i][0].ToString()))
                        {
                            Error = "Product Code " + finalRecords.Rows[i][0].ToString() + " is already exist.";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (_context.Product.Any(b => b.ProductName == finalRecords.Rows[i][1].ToString()))
                        {
                            Error = "Product " + finalRecords.Rows[i][1].ToString() + " is already exist.";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][1].ToString() == "")
                        {
                            Error = "Product name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        //if (finalRecords.Rows[i][5].ToString() == "")
                        //{
                        //    Error = "Product sale price can't be empty of line number " + index + ".";
                        //    ErrorResponse.Add(Error);
                        //    IsError = true;
                        //}
                        //if (finalRecords.Rows[i][6].ToString() == "")
                        //{
                        //    Error = "Product qty can't be empty of line number " + index + ".";
                        //    ErrorResponse.Add(Error);
                        //    IsError = true;
                        //}
                        if (tempBrand <= 0 && finalRecords.Rows[i][2].ToString() != "")
                        {
                            Error = "Invalid brand: " + finalRecords.Rows[i][2].ToString() + " of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (tempCategory <= 0 && finalRecords.Rows[i][3].ToString() != "")
                        {
                            Error = "Invalid Category: " + finalRecords.Rows[i][3].ToString() + " of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        else
                        {
                            if (IsError == false)
                            {
                                Count++;
                                object Success = new object();
                                Product oModel = new Product();
                                oModel.Id = Guid.NewGuid();
                                if (finalRecords.Rows[i][0].ToString() == "")
                                {
                                    oModel.ProductId = "PRO" + Count.ToString("00000");
                                }
                                else
                                {
                                    oModel.ProductId = finalRecords.Rows[i][0].ToString().ToUpper();
                                }
                                oModel.ProductName = finalRecords.Rows[i][1].ToString();
                                oModel.ProductBrand = finalRecords.Rows[i][2].ToString();
                                oModel.ProductCategory = finalRecords.Rows[i][3].ToString();
                                if (finalRecords.Rows[i][4].ToString() == "")
                                {
                                    oModel.PurchasePrice = 0;
                                }
                                else
                                {
                                    oModel.PurchasePrice = Convert.ToDouble(finalRecords.Rows[i][4]);
                                }
                                if (finalRecords.Rows[i][5].ToString() == "")
                                {
                                    oModel.SalePrice = 0;
                                }
                                else
                                {
                                    oModel.SalePrice = Convert.ToDouble(finalRecords.Rows[i][5]);
                                }
                                if (finalRecords.Rows[i][6].ToString() == "")
                                {
                                    oModel.Quantity = 0;
                                }
                                else
                                {
                                    oModel.Quantity = Convert.ToInt32(finalRecords.Rows[i][6]);
                                }
                                if (finalRecords.Rows[i][7].ToString() == "")
                                {
                                    oModel.LowStockTriggerQuantity = 0;
                                }
                                else
                                {
                                    oModel.LowStockTriggerQuantity = Convert.ToInt32(finalRecords.Rows[i][7]);
                                }
                                oModel.Description = finalRecords.Rows[i][8].ToString();
                                oModel.RuleType = "LIFO";
                                oModel.Status = true;
                                oModel.ProductLogo = "";
                                oModel.CreatedUtcDate = DateTime.UtcNow.Date;
                                oModel.ModifiedUtcDate = DateTime.UtcNow.Date;

                                _context.Product.Add(oModel);
                                _context.SaveChanges();

                                Success = "Product: " + finalRecords.Rows[i][1].ToString() + " Created Successfully.";
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
                                    o.ModuleId = oModel.Id;
                                    o.ActionType = "Added";
                                    o.Description = "A Product : " + oModel.ProductName + " , has been added , Qty: " + oModel.Quantity +
                                         ", Purchase Price: " + oModel.PurchasePrice + ", Sale Price: " + oModel.SalePrice + ", Category : " + oModel.ProductCategory + ", Brand : " + oModel.ProductBrand + ", Description : " + oModel.Description + ", by user : " + result.FullName + "";
                                    o.RecentDescription = "A Product : " + oModel.ProductName + " , has been added by user : " + result.FullName + "";
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
                        //ItemofList Item = new ItemofList();
                        //Item.ProductId = oModel.Id;
                        //Item.BatchNo = finalRecords.Rows[i][4].ToString();
                        //Item.AvailableQuantity = Convert.ToInt32(finalRecords.Rows[i][5]);
                        //Item.ManufacturingDate = null;
                        //Item.ExpiryDate = null;
                        //Item.UsedQty = 0;
                        //Item.TotalQty = Convert.ToInt32(finalRecords.Rows[i][5]);
                        //Item.HoldQty = 0;
                        //Item.ProductUnit = "PCS";
                        //Item.Remarks = finalRecords.Rows[i][7].ToString();

                        //_context.ItemofList.Add(Item);
                        //_context.SaveChanges();
                        index++;
                    }
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            }
            ServiceResponse = new { ErrorResponse = ErrorResponse, SuccessResponse = SuccessResponse };
            return StatusCode(201, ServiceResponse);
        }
        #endregion

        #region Product => Service
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetService(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Service.ToListAsync();
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
        public async Task<IActionResult> PutService(Service service, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Service.Any(b => b.ServiceName == service.ServiceName & b.Id != service.Id))
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Category name already exist" });
                    }
                    _context.Entry(service).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Service update successfully" });
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
        public async Task<ActionResult<Service>> PostService(Service service, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    if (_context.Service.Any(b => b.ServiceName == service.ServiceName & b.Id != service.Id))
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Category name already exist" });
                    }
                    service.ServiceId += (_context.Service.Count() + 1).ToString("00000");
                    service.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                    service.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                    _context.Service.Add(service);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Service added successfully" });
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
        [HttpPost("[action]/{UserId}")]

        public ActionResult ServiceBulkUpload(Customer obj, Guid UserId)
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
                var custCount = (from c in _context.Service select c).Count();
                var finalRecords = excelRecords.Tables[0];
                try
                {
                    int index = 1;
                    for (int i = 1; i < finalRecords.Rows.Count; i++)
                    {
                        index++;
                        object Error = new object();
                        var IsError = false;
                        if (_context.Service.Any(b => b.ServiceName == finalRecords.Rows[i][0].ToString()))
                        {
                            Error = "Service " + finalRecords.Rows[i][0].ToString() + " is already exist.";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        if (finalRecords.Rows[i][0].ToString() == "")
                        {
                            Error = "Service name can't be empty of line number " + index + ".";
                            ErrorResponse.Add(Error);
                            IsError = true;
                        }
                        else
                        {
                            if (IsError == false)
                            {
                                object Success = new object();
                                custCount++;
                                Service oModel = new Service();
                                oModel.Id = Guid.NewGuid();
                                oModel.ServiceName = finalRecords.Rows[i][0].ToString();
                                oModel.ServiceDescription = finalRecords.Rows[i][1].ToString();
                                oModel.ServiceId = "SER" + custCount.ToString("00000");
                                oModel.CreatedUtcDate = DateTime.UtcNow.Date;
                                oModel.ModifiedUtcDate = DateTime.UtcNow.Date;
                                oModel.IsActive = true;
                                _context.Service.Add(oModel);
                                _context.SaveChanges();

                                Success = "Service name " + finalRecords.Rows[i][0].ToString() + " Created Successfully.";
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
                                    o.Module = "Service";
                                    o.ModuleId = oModel.Id;
                                    o.ActionType = "Added";
                                    o.Description = "A Service : " + oModel.ServiceName + " , has been added , and Service Description : " + oModel.ServiceDescription + ", by user : " + result.FullName + "";
                                    o.RecentDescription = "A Service : " + oModel.ServiceName + " , has been added by user : " + result.FullName + "";
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
                catch (Exception ex) { }
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            }
            ServiceResponse = new { ErrorResponse = ErrorResponse, SuccessResponse = SuccessResponse };
            return StatusCode(201, ServiceResponse);
        }
        [HttpPut("[action]/{token}/{ServiceId}")]
        public async Task<ActionResult> onServiceStatusChange(Guid token, Guid ServiceId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = (from f in _context.Service where f.Id == ServiceId select f).FirstOrDefault();
                    if (result.IsActive) { result.IsActive = false; } else { result.IsActive = true; }
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    _context.Entry(result).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "Update successfully" });
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
        public async Task<ActionResult> GetServicesForSelect2Dropdown(Guid token, [FromQuery] string q)
        {
            bool IsExist = (from l in _context.Login where l.Token == token select l).Any();
            if (IsExist)
            {
                string searchStr = q;
                var result2 = await (from l in _context.Login
                                     where l.Token == token
                                     select new
                                     {
                                         total_count = 5,
                                         incomplete_results = false,
                                         items = (from p in _context.Service
                                                  where p.IsActive == true
                                                  where p.ServiceName.Contains(searchStr) || p.ServiceDescription.Contains(searchStr) || p.ServiceId.Contains(searchStr)
                                                  select new
                                                  {
                                                      id = p.Id,
                                                      name = searchStr,
                                                      description = p.ServiceDescription,
                                                      text = p.ServiceName,
                                                      full_name = p.ServiceName,
                                                  }).ToList()
                                     }).FirstOrDefaultAsync();
                searchStr = string.Empty;
                return StatusCode(200, result2);
            }
            else
            {
                return StatusCode(200, new { total_count = 0, incomplete_results = false, items = new { full_name = "Token Expired", description = "Token Expired" } });
            }
        }
        [HttpGet("[action]/{token}")]
        public ActionResult GetWarrantyUniqueKey(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    bool IsOk = true;
                    string uniqueid = string.Empty;
                    while (IsOk)
                    {
                        uniqueid = GlobalParameters.RandamUniqueId();
                        bool IsExistinTicketItem = (from ti in _context.TicketItem where ti.UniqId.ToLower() == uniqueid.ToLower() select ti).Any();
                        bool IsExistinProductWarranty = (from ti in _context.ProductWarranty where ti.UniqId.ToLower() == uniqueid.ToLower() select ti).Any();
                        if (IsExistinTicketItem || IsExistinProductWarranty) { IsOk = true; } else { IsOk = false; break; }
                    }
                    string _uniqueid = uniqueid;
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = _uniqueid });
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

        #region Brand
        [HttpPost("[action]/{token}")]
        [Obsolete]
        public async Task<ActionResult<Brand>> PostBrand(Brand brand, Guid token)
        {
            try
            {
                if (_context.Brand.Any(b => b.BrandName == brand.BrandName))
                {
                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Brand name already Exist" });
                }
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (brand.BrandLogo.Length > 0)
                    {
                        //using (MemoryStream ms = new MemoryStream(Convert.FromBase64String(brand.BrandLogo)))
                        //{
                        //    using (Bitmap bm2 = new Bitmap(ms))
                        //    {
                        //        string NewFileName = DateTime.UtcNow.ToString("yyyyMMddHHMMss") + ".png";
                        //        string newpath = Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.BrandImageFolderName);
                        //        if (!Directory.Exists(newpath)) { Directory.CreateDirectory(newpath); }
                        //        string fullpath = Path.Combine(newpath, NewFileName);
                        //        using (var stream = new FileStream(fullpath, FileMode.Create))
                        //        {
                        //            bm2.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                        //            brand.BrandLogo = GlobalParameters.BrandImageFolderName + "/" + NewFileName;
                        //        }
                        //    }
                        //}
                    }
                    else
                    {
                        brand.BrandLogo = "";
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    brand.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    brand.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Brand.Add(brand);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Brand name added successfully" });
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
        public async Task<IActionResult> PutBrand(Brand brand, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Brand.Any(b => b.BrandName == brand.BrandName && b.BrandId != brand.BrandId))
                    {
                        return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Brand name already Exist" });
                    }
                    if (brand.BrandLogo.Length > 0)
                    {
                        //using (MemoryStream ms = new MemoryStream(Convert.FromBase64String(brand.BrandLogo)))
                        //{
                        //    using (Bitmap bm2 = new Bitmap(ms))
                        //    {
                        //        string NewFileName = DateTime.UtcNow.ToString("yyyyMMddHHMMss") + ".png";
                        //        string newpath = Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.BrandImageFolderName);
                        //        if (!Directory.Exists(newpath)) { Directory.CreateDirectory(newpath); }
                        //        string fullpath = Path.Combine(newpath, NewFileName);
                        //        using (var stream = new FileStream(fullpath, FileMode.Create))
                        //        {
                        //            bm2.Save(stream, System.Drawing.Imaging.ImageFormat.Png);
                        //            brand.BrandLogo = GlobalParameters.BrandImageFolderName + "/" + NewFileName;
                        //        }
                        //    }
                        //}
                    }
                    else
                    {
                        var previousBrandLogo = await (from c in _context.Brand where c.BrandId == brand.BrandId select c.BrandLogo).FirstOrDefaultAsync();
                        brand.BrandLogo = previousBrandLogo;
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    brand.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(brand).State = EntityState.Modified;
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
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetBrand(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Brand.ToListAsync();
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
        #endregion

        #region Category
        [HttpPut("[action]/{token}")]
        public async Task<IActionResult> PutCategory(Category category, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (_context.Category.Any(b => b.CategoryName == category.CategoryName & b.CategoryId != category.CategoryId))
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Category Name already exist" });
                    }
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    category.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Entry(category).State = EntityState.Modified;
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
        public async Task<ActionResult<Category>> PostCategory(Category category, Guid token)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    if (_context.Category.Any(b => b.CategoryName == category.CategoryName))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Category Name already exist" });
                    }
                    category.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    category.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                    _context.Category.Add(category);
                    await _context.SaveChangesAsync();
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Category add successfully" });
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
        public async Task<ActionResult> GetCategory(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await _context.Category.ToListAsync();
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



        [HttpGet("[action]/{token}/{Id}")]
        public async Task<ActionResult> GetProductWarrantyById(Guid token, int Id)
        {
            var IsExist = (from l in _context.Login where l.Token == token select l).Any();
            if (IsExist)
            {
                var result = await (from p in _context.ProductWarranty where p.Id == Id select p).FirstOrDefaultAsync();
                return StatusCode(200, result);
            }
            return StatusCode(208);
        }
        [HttpPost("[action]/{token}")]
        public ActionResult AddItemInProduct(Guid token, ProductWarranty productwarranty)
        {
            try
            {
                var IsValid = (from l in _context.Login where l.Token == token && (l.Type == "Admin" || l.Type == "SubAdmin") select l).Any();
                if (IsValid)
                {
                    if (productwarranty.UniqId.Length > 0)
                    {
                        var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                        if (res.WarrantyValidation)
                        {

                            var IsDuplicate = (from c in _context.ProductWarranty where c.UniqId == productwarranty.UniqId && c.Id != productwarranty.Id select c).Any();
                            if (IsDuplicate)
                            {
                                return StatusCode(208);
                            }
                        }
                    }
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    productwarranty.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, timeZone);
                    _context.ProductWarranty.Add(productwarranty);
                    _context.SaveChanges();
                    return StatusCode(201);
                }
                else
                {
                    return StatusCode(206, new Object());
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }

        [HttpPut("[action]/{token}")]
        public ActionResult UpdateItemInProduct(Guid token, ProductWarranty productwarranty)
        {
            try
            {
                var IsValid = (from l in _context.Login where l.Token == token select l).Any();
                if (IsValid)
                {
                    if (productwarranty.UniqId.Length > 0)
                    {
                        var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                        if (res.WarrantyValidation)
                        {

                            var IsDuplicate = (from c in _context.ProductWarranty where c.UniqId == productwarranty.UniqId && c.Id != productwarranty.Id select c).Any();
                            if (IsDuplicate)
                            {
                                return StatusCode(208);
                            }
                        }
                    }
                    _context.Entry(productwarranty).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202);
                }
                else
                {
                    return StatusCode(206, new Object());
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpDelete("[action]/{token}/{id}")]
        public ActionResult Deleteproductwarranty(Guid token, int id)
        {
            var IsExist = (from l in _context.Login where l.Token == token && (l.Type == "Admin" || l.Type == "SubAdmin") select l).Any();
            if (!IsExist)
            {
                return NotFound();
            }
            var pw = _context.ProductWarranty.Find(id);
            if (pw == null)
            {
                return NotFound();
            }
            _context.ProductWarranty.Remove(pw);
            _context.SaveChanges();
            return StatusCode(204);
        }
    }
}
