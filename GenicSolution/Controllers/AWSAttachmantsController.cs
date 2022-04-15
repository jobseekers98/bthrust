using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data;
using System.Linq;
using static GenicSolution.Entities.GlobalParameters;

namespace GenicSolution.Controllers
{
    [ApiController]
    public class AWSAttachmantsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public AWSAttachmantsController(EntityFrameworkDbContext context)
        {
            _context = context;
        }

        [Route("api-aws-doc-upload")]
        [HttpPost, RequestSizeLimit(10000000)]
        public IActionResult UploadFile(IFormFile file)
        {
            try
            {
                #region Validation
                string accessKey = Request.Headers["ACCESS_KEY"].ToString();
                if (accessKey.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY" }); }
                if (accessKey != "jamoy456DF51cfhm") { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY is required" }); }
                string type = Request.Headers["ACCESS_TYPE"].ToString();
                if (type.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TYPE is required" }); }
                string token = Request.Headers["ACCESS_TOKEN"].ToString();
                if (token.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TOKEN is required" }); }
                Guid userToken = Guid.Parse(token);
                bool IsTokenValid = _context.Login.Any(x => x.Token == userToken);
                if (!IsTokenValid) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" }); }
                #endregion
                string msg = string.Empty;
                if (file.Length > 0)
                {
                    string ext = System.IO.Path.GetExtension(file.FileName).Replace(".", "");
                    var IsValidExt = _context.GenicFileExtenstion.Any(e => e.ExtentionName == ext && e.IsActive == true);
                    if (IsValidExt)
                    {
                        var gp = (from c in _context.GenicProfile select c).FirstOrDefault();
                        string remark = Request.Headers["Remark"].ToString();
                        string moduleid = Request.Headers["ACCESS_GUID"].ToString();
                        if (moduleid.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS GUID" }); }
                        Guid _moduleid = new Guid();
                        string endPoint = string.Empty;
                        try { _moduleid = Guid.Parse(moduleid); } catch { _moduleid = Guid.Parse("00000000-0000-0000-0000-000000000000"); }

                        string numericid = Request.Headers["ACCESS_Id"].ToString();
                        int _numericid = 0;
                        try { _numericid = int.Parse(numericid); } catch { _numericid = 0; }
                        switch (type)
                        {
                            case "user":
                                var _login = (from e in _context.Login where e.Id == _moduleid select e).FirstOrDefault();
                                if (_login != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/User/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _login.Logo = msg += "?" + GlobalParameters.MillisecondsTimestamp();
                                        _login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_login).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "User not found" }); }
                            case "engineer":
                                var _engineer = (from e in _context.Engineer where e.Id == _moduleid select e).FirstOrDefault();
                                if (_engineer != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Engineer/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _engineer.EngineerLogo = msg += "?" + GlobalParameters.MillisecondsTimestamp();
                                        _engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_engineer).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        var loginDetails = (from l in _context.Login where l.Id == _moduleid select l).FirstOrDefault();
                                        if (loginDetails != null)
                                        {
                                            loginDetails.Logo = msg;
                                            _context.Entry(loginDetails).State = EntityState.Modified;
                                            _context.SaveChanges();
                                        }
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer not found" }); }
                            case "customer":
                                var _customer = (from e in _context.Customer where e.Id == _moduleid select e).FirstOrDefault();
                                if (_customer != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Customer/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _customer.CustomerLogo = msg += "?" + GlobalParameters.MillisecondsTimestamp();
                                        _customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_customer).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        var loginDetails = (from l in _context.Login where l.Id == _moduleid select l).FirstOrDefault();
                                        if (loginDetails != null)
                                        {
                                            loginDetails.Logo = msg;
                                            _context.Entry(loginDetails).State = EntityState.Modified;
                                            _context.SaveChanges();
                                        }
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Customer not found" }); }
                            case "product":
                                var _product = (from e in _context.Product where e.Id == _moduleid select e).FirstOrDefault();
                                if (_product != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Product/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _product.ProductLogo = msg += "?" + GlobalParameters.MillisecondsTimestamp();
                                        _product.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_product).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Product not found" }); }
                            case "brand":
                                var _brand = (from e in _context.Brand where e.BrandId == _numericid select e).FirstOrDefault();
                                if (_brand != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Product/Brand/" + _numericid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _brand.BrandLogo = msg;
                                        _brand.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_brand).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Brand not found" }); }
                            case "companylogo":
                                var _genicprofile = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile.Logo = msg;
                                        _genicprofile.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile.TimeZone);
                                        _context.Entry(_genicprofile).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "workorderheader":
                                var _genicprofile2 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile2 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile2.ServiceHeader = msg;
                                        _genicprofile2.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile2.TimeZone);
                                        _context.Entry(_genicprofile2).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "quotationheader":
                                var _genicprofile3 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile3 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile3.QuotationHeader = msg;
                                        _genicprofile3.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile3.TimeZone);
                                        _context.Entry(_genicprofile3).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "invoiceheader":
                                var _genicprofile4 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile4 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile4.InvoiceHeader = msg;
                                        _genicprofile4.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile4.TimeZone);
                                        _context.Entry(_genicprofile4).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "ticketattachment":
                                var _ticket = (from e in _context.Ticket where e.Id == _moduleid select e).FirstOrDefault();
                                if (_ticket != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + _ticket.TicketId + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        TicketAttachment _ticketattachment = new TicketAttachment();
                                        _ticketattachment.Id = 0;
                                        _ticketattachment.AttachmentName = file.FileName;
                                        _ticketattachment.TicketId = _moduleid;
                                        _ticketattachment.AttachmentPath = msg;
                                        _ticketattachment.AttachmentSize = file.Length;
                                        _ticketattachment.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Add(_ticketattachment);
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Ticket" }); }
                            case "quotationattachment":
                                var _quote = (from e in _context.Quote where e.Id == _moduleid select e).FirstOrDefault();
                                if (_quote != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Quote/" + _quote.QuoteId + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        QuoteAttachment _quoteattachment = new QuoteAttachment();
                                        _quoteattachment.Id = 0;
                                        _quoteattachment.QuoteId = _moduleid;
                                        _quoteattachment.Attachment = msg;
                                        _quoteattachment.AttachmentExtension = file.FileName;
                                        _quoteattachment.AttachmentSize = file.Length;
                                        _quoteattachment.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Add(_quoteattachment);
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Quotation" }); }
                            case "invoiceattachment":
                                var _invoice = (from e in _context.Invoice where e.Id == _moduleid select e).FirstOrDefault();
                                if (_invoice != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Invoice/" + _invoice.InvoiceId + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        InvoiceAttachment _invoiceattachment = new InvoiceAttachment();
                                        _invoiceattachment.Id = 0;
                                        _invoiceattachment.InvoiceId = _moduleid;
                                        _invoiceattachment.Attachment = msg;
                                        _invoiceattachment.AttachmentExtension = file.FileName;
                                        _invoiceattachment.AttachmentSize = file.Length;
                                        _invoiceattachment.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Add(_invoiceattachment);
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Invoice" }); }
                            case "closerattachment":
                                var _closerattachment = (from e in _context.CloserAttachment where e.CAID == _numericid && e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closerattachment != null)
                                {
                                    var closerdetails = (from cl in _context.CloserDetails where cl.CloserID == _closerattachment.CloserID select cl).FirstOrDefault();
                                    var ticket = (from cl in _context.Ticket where cl.Id == closerdetails.TicketId select cl).FirstOrDefault();
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + closerdetails.CloserPrefix + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closerattachment.AttachmentExtenstion = file.FileName;
                                        _closerattachment.AttachmentFile = msg;
                                        _closerattachment.AttachmentSize = file.Length;
                                        _context.Entry(_closerattachment).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            case "closercustomersign":
                                var _closercsign = (from e in _context.CloserDetails where e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closercsign != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + _closercsign.TicketId + "/CustomerSign/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closercsign.CustomerSignature = msg;
                                        _context.Entry(_closercsign).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            case "closerengineersign":
                                var _closeresign = (from e in _context.CloserDetails where e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closeresign != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + _closeresign.TicketId + "/EngineerSign/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closeresign.EngineerSignature = msg;
                                        _context.Entry(_closeresign).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            default: return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid module" });
                        }
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "File format not allowed" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Please attached a file" });
                }
            }
            catch (Exception eException)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = eException.Message.ToString() });
            }
        }

        [Route("api-aws-doc-remove")]
        [HttpDelete]
        public IActionResult RemoveFile()
        {
            try
            {
                #region Validation
                string accessKey = Request.Headers["ACCESS_KEY"].ToString();
                if (accessKey.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY" }); }
                if (accessKey != "jamoy456DF51cfhm") { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY is required" }); }
                string type = Request.Headers["ACCESS_TYPE"].ToString();
                if (type.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TYPE is required" }); }
                string token = Request.Headers["ACCESS_TOKEN"].ToString();
                if (token.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TOKEN is required" }); }
                Guid userToken = Guid.Parse(token);
                bool IsTokenValid = _context.Login.Any(x => x.Token == userToken);
                if (!IsTokenValid) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" }); }
                #endregion
                var gp = (from c in _context.GenicProfile select c).FirstOrDefault();
                string remark = Request.Headers["Remark"].ToString();
                string moduleid = Request.Headers["ACCESS_GUID"].ToString();
                if (moduleid.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS GUID" }); }
                Guid _moduleid = new Guid();
                string endPoint = string.Empty;
                try { _moduleid = Guid.Parse(moduleid); } catch { _moduleid = Guid.Parse("00000000-0000-0000-0000-000000000000"); }

                string numericid = Request.Headers["ACCESS_Id"].ToString();
                int _numericid = 0;
                try { _numericid = int.Parse(numericid); } catch { _numericid = 0; }
                switch (type)
                {

                    case "engineer":
                        var _engineer = (from e in _context.Engineer where e.Id == _moduleid select e).FirstOrDefault();
                        if (_engineer != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_engineer.EngineerLogo);
                            _engineer.EngineerLogo = "";
                            _engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            _context.Entry(_engineer).State = EntityState.Modified;
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer not found" }); }
                    case "customer":
                        var _customer = (from e in _context.Customer where e.Id == _moduleid select e).FirstOrDefault();
                        if (_customer != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_customer.CustomerLogo);
                            _customer.CustomerLogo = "";
                            _customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            _context.Entry(_customer).State = EntityState.Modified;
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Customer not found" }); }
                    case "product":
                        var _product = (from e in _context.Product where e.Id == _moduleid select e).FirstOrDefault();
                        if (_product != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_product.ProductLogo);
                            _product.ProductLogo = "";
                            _product.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            _context.Entry(_product).State = EntityState.Modified;
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Product not found" }); }
                    case "brand":
                        var _brand = (from e in _context.Brand where e.BrandId == _numericid select e).FirstOrDefault();
                        if (_brand != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_brand.BrandLogo);
                            _brand.BrandLogo = "";
                            _brand.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                            _context.Entry(_brand).State = EntityState.Modified;
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Brand not found" }); }
                    case "ticketattachment":
                        var _ticketattachment = (from e in _context.TicketAttachment where e.Id == _numericid && e.TicketId == _moduleid select e).FirstOrDefault();
                        if (_ticketattachment != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_ticketattachment.AttachmentPath);
                            _context.Remove(_ticketattachment);
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Attachment not found" }); }
                    case "quotationattachment":
                        var _quoteattachment = (from e in _context.QuoteAttachment where e.Id == _numericid && e.QuoteId == _moduleid select e).FirstOrDefault();
                        if (_quoteattachment != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_quoteattachment.Attachment);
                            _context.Remove(_quoteattachment);
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Attachment not found" }); }
                    case "invoiceattachment":
                        var _invoiceattachment = (from e in _context.InvoiceAttachment where e.Id == _numericid && e.InvoiceId == _moduleid select e).FirstOrDefault();
                        if (_invoiceattachment != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_invoiceattachment.Attachment);
                            _context.Remove(_invoiceattachment);
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Attachment not found" }); }
                    case "closerattachment":
                        var _closerattachment = (from e in _context.CloserAttachment where e.CAID == _numericid && e.CloserID == _moduleid select e).FirstOrDefault();
                        if (_closerattachment != null)
                        {
                            AWSHelper awshelper = new AWSHelper();
                            awshelper.RemoveFromAWS(_closerattachment.AttachmentFile);
                            _context.Remove(_closerattachment);
                            _context.SaveChanges();
                            return StatusCode(200, new { result = "", Message = "success", MessageDescription = "removed successfully" });
                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Attachment not found" }); }
                    default: return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid module" });
                }
            }
            catch (Exception eException)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = eException.Message.ToString() });
            }
        }

        [Route("api-aws-doc-uploads")]
        [HttpPost, RequestSizeLimit(100000000)]
        public IActionResult UploadFileMultiple(IFormFile file)
        {
            try
            {
                #region Validation
                string accessKey = Request.Headers["ACCESS_KEY"].ToString();
                if (accessKey.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY" }); }
                if (accessKey != "jamoy456DF51cfhm") { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY is required" }); }
                string type = Request.Headers["ACCESS_TYPE"].ToString();
                if (type.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TYPE is required" }); }
                string token = Request.Headers["ACCESS_TOKEN"].ToString();
                if (token.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TOKEN is required" }); }
                Guid userToken = Guid.Parse(token);
                bool IsTokenValid = _context.Login.Any(x => x.Token == userToken);
                if (!IsTokenValid) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" }); }
                #endregion
                string msg = string.Empty;
                if (file.Length > 0)
                {
                    string ext = System.IO.Path.GetExtension(file.FileName).Replace(".", "");
                    var IsValidExt = _context.GenicFileExtenstion.Any(e => e.ExtentionName == ext && e.IsActive == true);
                    if (IsValidExt)
                    {
                        var gp = (from c in _context.GenicProfile select c).FirstOrDefault();
                        string remark = Request.Headers["Remark"].ToString();
                        string moduleid = Request.Headers["ACCESS_GUID"].ToString();
                        if (moduleid.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS GUID" }); }
                        Guid _moduleid = new Guid();
                        string endPoint = string.Empty;
                        try { _moduleid = Guid.Parse(moduleid); } catch { _moduleid = Guid.Parse("00000000-0000-0000-0000-000000000000"); }

                        if (type == "closerattachmentbulk")
                        {
                            var closerdetails = (from cl in _context.CloserDetails where cl.CloserID == _moduleid select cl).FirstOrDefault();
                            if (closerdetails == null) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid request" }); }
                            var ticket = (from cl in _context.Ticket where cl.Id == closerdetails.TicketId select cl).FirstOrDefault();
                            endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + closerdetails.CloserPrefix + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                            AWSHelper awshelper = new AWSHelper();
                            bool isUploaded = awshelper.SendToAWS(file, endPoint, out msg);
                            if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                            else
                            {
                                CloserAttachment ca = new CloserAttachment();
                                ca.CloserID = _moduleid;
                                ca.CloserAttachmentAduioList = null;
                                ca.CAID = 0;
                                ca.AttachmentExtenstion = file.FileName;
                                ca.AttachmentFile = msg;
                                ca.AttachmentSize = file.Length;
                                ca.Remarks = "";
                                _context.CloserAttachment.Add(ca);
                                _context.SaveChanges();
                            }

                        }
                        else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid module" }); }

                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "File format not allowed" });
                    }
                }
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "success" });
            }
            catch (Exception eException)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = eException.Message.ToString() });
            }
        }

        [Route("api-aws-doc-base64-upload")]
        [HttpPost, RequestSizeLimit(10000000)]
        public IActionResult UploadBase64(Base64StringBody _obj)
        {
            try
            {
                #region Validation
                string accessKey = Request.Headers["ACCESS_KEY"].ToString();
                if (accessKey.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY" }); }
                if (accessKey != "jamoy456DF51cfhm") { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS KEY is required" }); }
                string type = Request.Headers["ACCESS_TYPE"].ToString();
                if (type.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TYPE is required" }); }
                string token = Request.Headers["ACCESS_TOKEN"].ToString();
                if (token.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS TOKEN is required" }); }
                Guid userToken = Guid.Parse(token);
                bool IsTokenValid = _context.Login.Any(x => x.Token == userToken);
                if (!IsTokenValid) { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" }); }
                #endregion
                string msg = string.Empty;
                //string base64 = Request.Headers["Base64"].ToString();
                string base64Name = Request.Headers["Base64Name"].ToString();
                int Base64Size = Convert.ToInt32(Request.Headers["Base64Size"].ToString());
                string moduleid = Request.Headers["ACCESS_GUID"].ToString();
                string ext = base64Name.Split(".")[1]; ;
                if (Base64Size > 0)
                {

                    var IsValidExt = _context.GenicFileExtenstion.Any(e => e.ExtentionName == ext && e.IsActive == true);
                    if (IsValidExt)
                    {
                        var gp = (from c in _context.GenicProfile select c).FirstOrDefault();

                        if (moduleid.Length == 0) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid ACCESS GUID" }); }
                        Guid _moduleid = new Guid();
                        string endPoint = string.Empty;
                        try { _moduleid = Guid.Parse(moduleid); } catch { _moduleid = Guid.Parse("00000000-0000-0000-0000-000000000000"); }
                        string numericid = Request.Headers["ACCESS_Id"].ToString();
                        int _numericid = 0;
                        try { _numericid = int.Parse(numericid); } catch { _numericid = 0; }
                        switch (type)
                        {
                            case "user":
                                var _login = (from e in _context.Login where e.Id == _moduleid select e).FirstOrDefault();
                                if (_login != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/User/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _login.Logo = msg;
                                        _login.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_login).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "User not found" }); }
                            case "engineer":
                                var _engineer = (from e in _context.Engineer where e.Id == _moduleid select e).FirstOrDefault();
                                if (_engineer != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Engineer/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _engineer.EngineerLogo = msg;
                                        _engineer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_engineer).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        var loginDetails = (from l in _context.Login where l.Id == _moduleid select l).FirstOrDefault();
                                        if (loginDetails != null)
                                        {
                                            loginDetails.Logo = msg;
                                            _context.Entry(loginDetails).State = EntityState.Modified;
                                            _context.SaveChanges();
                                        }
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Engineer not found" }); }
                            case "customer":
                                var _customer = (from e in _context.Customer where e.Id == _moduleid select e).FirstOrDefault();
                                if (_customer != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Customer/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _customer.CustomerLogo = msg;
                                        _customer.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_customer).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        var loginDetails = (from l in _context.Login where l.Id == _moduleid select l).FirstOrDefault();
                                        if (loginDetails != null)
                                        {
                                            loginDetails.Logo = msg;
                                            _context.Entry(loginDetails).State = EntityState.Modified;
                                            _context.SaveChanges();
                                        }
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Customer not found" }); }
                            case "product":
                                var _product = (from e in _context.Product where e.Id == _moduleid select e).FirstOrDefault();
                                if (_product != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Product/" + _moduleid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _product.ProductLogo = msg;
                                        _product.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_product).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Product not found" }); }
                            case "brand":
                                var _brand = (from e in _context.Brand where e.BrandId == _numericid select e).FirstOrDefault();
                                if (_brand != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Product/Brand/" + _numericid.ToString() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _brand.BrandLogo = msg;
                                        _brand.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                                        _context.Entry(_brand).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Brand not found" }); }
                            case "companylogo":
                                var _genicprofile = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile.Logo = msg;
                                        _genicprofile.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile.TimeZone);
                                        _context.Entry(_genicprofile).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "workorderheader":
                                var _genicprofile2 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile2 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile2.ServiceHeader = msg;
                                        _genicprofile2.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile2.TimeZone);
                                        _context.Entry(_genicprofile2).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "quotationheader":
                                var _genicprofile3 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile3 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile3.QuotationHeader = msg;
                                        _genicprofile3.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile3.TimeZone);
                                        _context.Entry(_genicprofile3).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }
                            case "invoiceheader":
                                var _genicprofile4 = (from e in _context.GenicProfile where e.Id == _numericid select e).FirstOrDefault();
                                if (_genicprofile4 != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Company/" + type + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _genicprofile4.InvoiceHeader = msg;
                                        _genicprofile4.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, _genicprofile4.TimeZone);
                                        _context.Entry(_genicprofile4).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Profile not found" }); }

                            case "closerattachment":
                                var _closerattachment = (from e in _context.CloserAttachment where e.CAID == _numericid && e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closerattachment != null)
                                {
                                    var closerdetails = (from cl in _context.CloserDetails where cl.CloserID == _closerattachment.CloserID select cl).FirstOrDefault();
                                    var ticket = (from cl in _context.Ticket where cl.Id == closerdetails.TicketId select cl).FirstOrDefault();
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + ticket.TicketId + "/" + closerdetails.CloserPrefix + "/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closerattachment.AttachmentExtenstion = base64Name;
                                        _closerattachment.AttachmentFile = msg;
                                        _closerattachment.AttachmentSize = Base64Size;
                                        _context.Entry(_closerattachment).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            case "closercustomersign":
                                var _closercsign = (from e in _context.CloserDetails where e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closercsign != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + _closercsign.TicketId + "/CustomerSign/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closercsign.CustomerSignature = msg;
                                        _context.Entry(_closercsign).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            case "closerengineersign":
                                var _closeresign = (from e in _context.CloserDetails where e.CloserID == _moduleid select e).FirstOrDefault();
                                if (_closeresign != null)
                                {
                                    endPoint = GlobalParameters.AWS_FOLDER + "/Ticket/" + _closeresign.TicketId + "/EngineerSign/" + GlobalParameters.MillisecondsTimestamp() + "." + ext;
                                    AWSHelper awshelper = new AWSHelper();
                                    bool isUploaded = awshelper.SendBase64ToAWS(_obj.Base64, endPoint, out msg);
                                    if (!isUploaded) { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = msg }); }
                                    else
                                    {
                                        _closeresign.EngineerSignature = msg;
                                        _context.Entry(_closeresign).State = EntityState.Modified;
                                        _context.SaveChanges();
                                        return StatusCode(200, new { result = "", Message = "success", MessageDescription = msg });
                                    }
                                }
                                else { return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Module Id not found on Closer" }); }
                            default: return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid module" });
                        }
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "File format not allowed" });
                    }
                }
                else
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Please attached a file" });
                }
            }
            catch (Exception eException)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = eException.Message.ToString() });
            }
        }
    }
}
