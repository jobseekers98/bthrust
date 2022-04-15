using GenicSolution.Entities;
using GenicSolution.Entities.Helper;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuotesController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        private object obj;
        [Obsolete]
        public QuotesController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }
        // GET: api/Quote
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetQuotes(Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var userDetails = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                    if (userDetails.Type == "Admin" || userDetails.Type == "SubAdmin")
                    {
                        var result = await (from q in _context.Quote
                                            where q.IsReady == true
                                            orderby q.CreatedUtcDate descending
                                            select q).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
                    if (userDetails.Type == "Customer")
                    {
                        var result = await (from q in _context.Quote
                                            where q.IsReady == true && q.CustomerId == userDetails.Id
                                            && (q.Status== 2 || q.Status == 3 || q.Status == 4)
                                            orderby q.CreatedUtcDate descending
                                            select q).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
                    return StatusCode(200, new { result = new List<string>(), Message = "success", MessageDescription = "success" });
                }
                else
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
            }
            catch (Exception ex) 
            { 
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() }); 
            }

        }
        // GET: api/Quote
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetTaxes(Guid token)
        {
            bool IsTokenValid = _context.Login.Any(x => x.Token == token);
            if (!IsTokenValid)
            {
                return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
            }
            var result = await (from q in _context.Tax orderby q.TaxName ascending select q).ToListAsync();
            return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
        }
        // GET: api/Quote Item List
        [HttpGet("[action]/{token}/{QuoteId}")]
        public async Task<ActionResult> GetQuoteItems(Guid token, Guid QuoteId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from i in _context.QuoteItem where i.QuoteId == QuoteId orderby i.CreatedUtcDate descending select i).ToListAsync();
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
        // GET: api/Quote Attachment List
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<QuoteAttachment>>> getQuoteAttachments(Guid id)
        {
            return await (from a in _context.QuoteAttachment where a.QuoteId == id orderby a.CreatedUtcDate descending select a).ToListAsync();
        }
        [HttpGet("[action]/{id}")]
        public ActionResult<IEnumerable<ArrayofKey>> GetArrayofKey(Guid id)
        {
            var result = (from c in _context.ArrayofKey where c.CustomerId == id && c.IsDefault == true select c).ToList();
            return result;
        }
        // GET: api/Quote/5
        [HttpGet("[action]/{Id}")]
        public ActionResult<Quote> GetQuote(Guid? Id)
        {
            var Quote = (from q in _context.Quote where q.Id == Id select q).FirstOrDefault();
            if (Quote == null)
            {
                return StatusCode(404, "not record found");
            }

            return Quote;
        }
        [HttpGet("[action]/{Id}/{Token}")]
        public async Task<ActionResult> GetQuoteForSign(Guid Id, Guid Token)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Customer");
                if (IsTokenValid)
                {
                    var _quote = (from t in _context.Quote where t.Id == Id select t).FirstOrDefault();
                    if (_quote != null)
                    {
                        return StatusCode(200, new { result = _quote, Message = "success", MessageDescription = "success" });
                    }
                    else
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Invalid request" });
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
        // GET: api/customer property/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<Property>>> getCustomerProperty(Guid id)
        {
            return await (from i in _context.Property where i.CustomerId == id select i).ToListAsync();
        }
        // POST: api/Quote
        [HttpPost("[action]/{token}")]
        [Obsolete]
        public async Task<ActionResult<Quote>> postQuote(Quote quote, Guid token)
        {
            try
            {
                _context.Database.ExecuteSqlRaw("TRUNCATE TABLE [TicketRecurringHelperDate]");
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = await (from c in _context.Quote where c.IsReady == false select c).FirstOrDefaultAsync();
                var gp = (from p in _context.GenicProfile select p).FirstOrDefault();
                if (result == null)
                {
                    var countid = await (from c in _context.Quote select c).CountAsync();
                    int count = Convert.ToInt32(countid) + 1;
                    if (countid == 0)
                    {
                        quote.QuoteUniqueID = 1;
                    }
                    else
                    {
                        quote.QuoteUniqueID = count;
                    }
                    quote.Id = Guid.NewGuid();
                    quote.InvoiceId = null;
                    quote.TicketId = null;
                    quote.TicketNo = null;
                    quote.ModifiedUtcDate = null;
                    quote.CustomerName = null;
                    quote.CompanyName = null;
                    string ab = string.Empty;
                    ab = quote.QuoteUniqueID.ToString("00000");
                    quote.QuoteId = gp.QuotePrefix + ab;
                    quote.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                    quote.Status = 1; // 1= Open, 2= Pending, 3=Accepted, 4= Delivered, 5=Cancelled, 0=Not Available

                    _context.Quote.Add(quote);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    quote.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
                    await _context.SaveChangesAsync();
                    quote = result;
                    //get quote reminder and remove if already exists
                    var reminderlist = await (from i in _context.QuoteReminder where i.QuoteId == quote.Id select i).ToListAsync();
                    if (reminderlist.Count > 0)
                    {
                        foreach (var p in reminderlist)
                        {
                            _context.QuoteReminder.Remove(p);
                        }
                        await _context.SaveChangesAsync();
                    }

                    //get quote items and remove if already exists
                    var itemlist = await (from i in _context.QuoteItem where i.QuoteId == quote.Id select i).ToListAsync();
                    if (itemlist.Count > 0)
                    {
                        foreach (var p in itemlist)
                        {
                            _context.QuoteItem.Remove(p);
                        }
                        await _context.SaveChangesAsync();
                    }
                    //get quote attachment and remove if already exists
                    var quoteAttachment = await (from c in _context.QuoteAttachment where c.QuoteId == quote.Id select c).ToListAsync();
                    if (quoteAttachment.Count > 0)
                    {
                        foreach (var item in quoteAttachment)
                        {
                            _context.QuoteAttachment.Remove(item);
                            if (string.IsNullOrEmpty(item.Attachment))
                            {
                                AWSHelper awshelper = new AWSHelper();
                                awshelper.RemoveFromAWS(item.Attachment);
                            }
                        }
                        _context.SaveChanges();
                    }
                }
                return StatusCode(200, new { result = quote, Message = "success", MessageDescription = "success" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        //Update Quotation 
        [HttpPut("[action]/{Token}")]
        [Obsolete]
        public async Task<ActionResult<Quote>> putQuote(Quote Quote, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                await Task.Yield();
                var gp = (from p in _context.GenicProfile select p).FirstOrDefault();
                var UserDetails = (from e in _context.Login where e.Token == token select e).FirstOrDefault();
                var CustEmail = (from c in _context.ArrayofKey where c.CustomerId == Quote.CustomerId && c.IsDefault == true && c.Type == "Email" select c).FirstOrDefault();
                var CustContact = (from c in _context.ArrayofKey where c.CustomerId == Quote.CustomerId && c.IsDefault == true && c.IsDefault == true && c.Type != "Email" select c).FirstOrDefault();
                if (CustEmail != null)
                {
                    Quote.CustomerEmail = CustEmail.Value;
                }
                if (CustContact != null)
                {
                    Quote.CustomerContactNo = CustContact.Value;
                }
                Quote.SalesPersonSignature = "";
                Quote.CustomerSignature = "";
                Quote.SMTPId = UserDetails.SMTPId;
                Quote.CreatedBy = UserDetails.Id;
                Quote.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone); ;
                if (Quote.ClientRemark == null) { Quote.ClientRemark = ""; }
                if (Quote.InternalNotes == null) { Quote.InternalNotes = ""; }
                _context.Entry(Quote).State = EntityState.Modified;
                try
                {
                    await _context.SaveChangesAsync();
                    NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                    objMail.GenerateQuotPDF(Quote.Id);
                    GenicDriveHelper gdh = new GenicDriveHelper(_context);
                    gdh.createQuotationInGenicDrive(Quote.CustomerId, Quote.Id, token);
                }
                catch (DbUpdateConcurrencyException e)
                {
                    if (!QuoteExists(Quote.Id))
                    {
                        return StatusCode(203, obj = new { result = "", Message = "failure", MessageDescription = "Not Found" });
                    }
                    else
                    {
                        return StatusCode(203, obj = new { result = "", Message = "failure", MessageDescription = e.Message.ToString() });
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(203, obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
                }

                bool isReady = await (from c in _context.Quote where c.Id == Quote.Id select c.IsReady).FirstOrDefaultAsync();
                if (!isReady)
                {
                    Quote.IsReady = true;
                    await _context.SaveChangesAsync();
                    return StatusCode(201, obj = new { result = "", Message = "success", MessageDescription = "Quote create successfully", Status = "insert" });
                }
                return StatusCode(202, obj = new { result = "", Message = "success", MessageDescription = "Quote update successfully", Status = "update" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }

        [HttpPut("[action]/{Token}")]
        [Obsolete]
        public ActionResult<Quote> putQuoteSignature(Quote quote, Guid Token)
        {
            try
            {
                var userDetails = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();
                if (userDetails != null)
                {
                    var _quote = (from q in _context.Quote where q.Id == quote.Id select q).FirstOrDefault();
                    if (_quote == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Quotation not found" };
                        return StatusCode(200, obj);
                    }

                    if (userDetails.Type == "Customer")
                    {
                        try
                        {
                            if (!string.IsNullOrEmpty(quote.CustomerSignature))
                            {
                                AWSHelper awshelper = new AWSHelper();
                                string msg = string.Empty;
                                string end_point = GlobalParameters.AWS_FOLDER + "/Quote/" + quote.QuoteId + "/" + quote.Id + "-customerSign.jpeg";
                                bool isUploaded = awshelper.SendBase64ToAWS(quote.CustomerSignature, end_point, out msg);
                                if (isUploaded) { _quote.CustomerSignature = msg; }
                                _context.Entry(_quote).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                        }
                        catch (Exception ex) { }
                    }
                    if (userDetails.Type == "Admin" || userDetails.Type == "SubAdmin")
                    {
                        try
                        {
                            if (!string.IsNullOrEmpty(quote.SalesPersonSignature))
                            {
                                AWSHelper awshelper = new AWSHelper();
                                string msg = string.Empty;
                                string end_point = GlobalParameters.AWS_FOLDER + "/Quote/" + quote.QuoteId + "/" + quote.Id + "-salePersonSign.jpeg";
                                bool isUploaded = awshelper.SendBase64ToAWS(quote.SalesPersonSignature, end_point, out msg);
                                if (isUploaded) { _quote.SalesPersonSignature = msg; }
                                _context.Entry(_quote).State = EntityState.Modified;
                                _context.SaveChanges();
                            }
                        }
                        catch (Exception ex) { }
                    }
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        [Obsolete]
        public ActionResult<Quote> putQuoteSignatureWithRemarks(Quote quote, Guid Token)
        {
            try
            {
                var userDetails = (from l in _context.Login where l.Token == Token && l.Type == "Customer" select l).FirstOrDefault();
                if (userDetails != null)
                {
                    var _quote = (from q in _context.Quote where q.Id == quote.Id select q).FirstOrDefault();
                    if (_quote == null)
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Quotation not found" };
                        return StatusCode(200, obj);
                    }

                    if (userDetails.Type == "Customer")
                    {
                        try
                        {
                            if (!string.IsNullOrEmpty(quote.CustomerSignature))
                            {
                                AWSHelper awshelper = new AWSHelper();
                                string msg = string.Empty;
                                string end_point = GlobalParameters.AWS_FOLDER + "/Quote/" + quote.QuoteId + "/" + quote.Id + "-customerSign.jpeg";
                                bool isUploaded = awshelper.SendBase64ToAWS(quote.CustomerSignature, end_point, out msg);
                                if (isUploaded) { _quote.CustomerSignature = msg; }

                            }
                        }
                        catch (Exception ex) { }
                        _quote.Status = quote.Status;
                        _context.Entry(_quote).State = EntityState.Modified;
                        _context.SaveChanges();

                        userDetails.Token = Guid.NewGuid();
                        _context.Entry(userDetails).State = EntityState.Modified;
                        _context.SaveChanges();
                    }
                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update successfully" });
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
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteQuote(Guid id)
        {
            var quote = await (from c in _context.Quote where c.Id == id && c.IsReady == false select c).FirstOrDefaultAsync();
            if (quote != null)
            {
                quote.JobTitle = "";
                quote.CustomerName = "";
                quote.CompanyName = "";
                quote.CustomerContactNo = "";
                quote.CustomerEmail = "";
                quote.SubTotal = 0;
                quote.DiscountType = 0;
                quote.DiscountAmount = 0;
                quote.TaxId = 0;
                quote.TaxRate = 0;
                quote.TaxAmount = 0;
                quote.ReqDepositeType = 0;
                quote.ReqDepositeTextValue = 0;
                quote.ReqDepositeAmount = 0;
                quote.NetAmount = 0;
                quote.InternalNotes = "";
                _context.Entry(quote).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                //var arraylist = await (from c in _context.QuoteItem where c.QuoteNo == quote.Id select c).ToListAsync();
                //foreach (var item in arraylist)
                //{
                //    _context.QuoteItem.Remove(item);
                //}
                //var quoteAttachment = await (from c in _context.QuoteAttachment where c.QuoteNo == quote.Id select c).ToListAsync();
                //foreach (var item in quoteAttachment)
                //{
                //    _context.QuoteItem.Remove(quoteAttachment);
                //}
                await _context.SaveChangesAsync();
            }
            return StatusCode(204);
        }
        // copy quote
        [HttpPost("[action]/{tempQuoteId}/{fromQuoteId}")]
        public ActionResult copyQuotation(Guid tempQuoteId, Guid? fromQuoteId)
        {
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                // remove temp item
                var OldItemList = (from i in _context.QuoteItem where i.QuoteId == tempQuoteId select i).ToList();
                if (OldItemList.Count > 0)
                {
                    foreach (var i in OldItemList)
                    {
                        _context.QuoteItem.Remove(i);
                    }
                    _context.SaveChanges();
                }



                // remove temp attachment
                var OldAttList = (from i in _context.QuoteAttachment where i.QuoteId == tempQuoteId select i).ToList();
                if (OldAttList.Count > 0)
                {
                    foreach (var a in OldAttList)
                    {
                        _context.QuoteAttachment.Remove(a);
                    }
                    _context.SaveChanges();
                }



                // Add item to quote
                var NewItemList = (from i in _context.QuoteItem where i.QuoteId == fromQuoteId select i).ToList();
                if (NewItemList.Count > 0)
                {
                    foreach (var n in NewItemList)
                    {
                        QuoteItem obj = new QuoteItem();
                        obj.QuoteId = tempQuoteId;
                        obj.ItemName = n.ItemName;
                        obj.ItemDescription = n.ItemDescription;
                        obj.Qty = n.Qty;
                        obj.UnitCost = n.UnitCost;
                        obj.Total = n.Total;
                        obj.Type = n.Type;
                        obj.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        obj.ModifiedUtcDate = null;
                        _context.QuoteItem.Add(obj);
                    }
                    _context.SaveChanges();
                }
                // Add attachment to quote
                var NewAttList = (from i in _context.QuoteAttachment where i.QuoteId == fromQuoteId select i).ToList();
                if (NewAttList.Count > 0)
                {
                    foreach (var n in NewAttList)
                    {
                        QuoteAttachment obj = new QuoteAttachment();
                        obj.Attachment = n.Attachment;
                        obj.AttachmentExtension = n.AttachmentExtension;
                        obj.AttachmentSize = n.AttachmentSize;
                        obj.QuoteId = tempQuoteId;
                        obj.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        _context.QuoteAttachment.Add(obj);
                    }
                    _context.SaveChanges();
                }
                return StatusCode(201);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return StatusCode(500);
            }

        }
        // post Quote Item
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult<QuoteItem>> postQuoteItem(QuoteItem oModel, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var res = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (oModel.UniqId == null) { oModel.UniqId = ""; }
                    if (res.WarrantyValidation)
                    {
                        if (oModel.InWarranty)
                        {
                            if (oModel.UniqId != null)
                            {
                                var IsDuplicate = (from c in _context.TicketItem where c.ItemName ==oModel.ItemName && c.UniqId == oModel.UniqId select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
                                }
                            }
                        }
                    }
                    var itemlist = (from b in _context.QuoteItem where b.ItemName == oModel.ItemName && b.QuoteId == oModel.QuoteId select b).FirstOrDefault();
                    if (itemlist != null)
                    {
                        itemlist.Qty = itemlist.Qty + oModel.Qty;
                        itemlist.UnitCost = oModel.UnitCost;
                        itemlist.Total = itemlist.Qty * itemlist.UnitCost;
                        itemlist.ItemDescription = oModel.ItemDescription;
                        _context.Entry(itemlist).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                    else
                    {
                        _context.QuoteItem.Add(oModel);
                        await _context.SaveChangesAsync();
                    }
                    return StatusCode(201, new { result="", Message = "success", MessageDescription = "Added successfully" });
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
        // put quote item
        [HttpPut("[action]/{token}")]
        public async Task<ActionResult> putQuoteItem(Guid token, QuoteItem quoteItem)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var _item = (from i in _context.QuoteItem where i.Id == quoteItem.Id && i.QuoteId == quoteItem.QuoteId select i).FirstOrDefault();
                    var genicprofile = (from g in _context.GenicProfile select g).FirstOrDefault();
                    if (quoteItem.UniqId == null) { quoteItem.UniqId = ""; }
                    if (genicprofile.WarrantyValidation)
                    {
                        if (quoteItem.InWarranty)
                        {
                            if (quoteItem.UniqId != null)
                            {
                                var IsDuplicate = (from c in _context.QuoteItem where c.ItemName == quoteItem.ItemName && c.UniqId == quoteItem.UniqId && c.Id != quoteItem.Id select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(208);
                                }
                            }
                        }
                    }
                    _item.Qty = quoteItem.Qty;
                    _item.UnitCost = quoteItem.UnitCost;
                    _item.Total = quoteItem.Total;
                    _item.ItemDescription = quoteItem.ItemDescription;
                    _context.Entry(_item).State = EntityState.Modified;
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
        [HttpDelete("[action]/{token}/{id}")]
        public async Task<ActionResult> deleteQuoteItem(Guid token, int id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var QuoteItem = _context.QuoteItem.Where(c => c.Id == id).FirstOrDefault();
                    var QuoteNo = (from i in _context.QuoteItem where i.Id == id select i.QuoteId).FirstOrDefault();
                    if (QuoteItem == null)
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "not found or already removed" });
                    }
                    _context.QuoteItem.Remove(QuoteItem);
                    await _context.SaveChangesAsync();
                    var itemList = (from i in _context.QuoteItem where i.QuoteId == QuoteNo select i).ToList();
                    if (itemList.Count > 0)
                    {

                    }
                    else
                    {
                        var Quote = (from i in _context.Quote where i.Id == QuoteNo select i).FirstOrDefault();
                        Quote.SubTotal = 0;
                        Quote.TaxAmount = 0;
                        Quote.DiscountAmount = 0;
                        Quote.NetAmount = 0;
                        _context.Entry(Quote).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                    return StatusCode(202, new { result="", Message = "success", MessageDescription = "removed successfully" });
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
        
        private bool QuoteExists(Guid id)
        {
            return _context.Quote.Any(e => e.Id == id);
        }

        ///Change Quote Status
        [HttpPut("[action]/{Id}/{Status}/{token}")]
        public ActionResult UpdateQuoteStatus(Guid Id, int Status, Guid Token)
        {
            try
            {
                var userDetails = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();
                if (userDetails != null)
                {
                    var _quote = (from q in _context.Quote where q.Id == Id select q).FirstOrDefault();
                    if (_quote == null)
                    {
                        return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Quotation not found or try after re-login." });
                    }

                    if (userDetails.Type == "Customer")
                    {
                        if (Status == 3 || Status == 4)
                        {
                            _quote.Status = Status;
                            _context.Entry(_quote).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                    }
                    if (userDetails.Type == "Admin" || userDetails.Type == "SubAdmin")
                    {
                        _quote.Status = Status;
                        _context.Entry(_quote).State = EntityState.Modified;
                        _context.SaveChanges();
                    }

                    return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Quotation status update successfully!" });
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
        // Insert Quote item list to Ticket item list
        [HttpPost("[action]/{token}/{QuoteId}/{TicketId}")]
        public ActionResult posQuoteItemToTicketItem(Guid token, Guid QuoteId, Guid TicketId)
        {

            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var TicketItemList = (from i in _context.TicketItem where i.TicketId == TicketId select i).ToList();
                    if (TicketItemList.Count > 0)
                    {
                        foreach (var i in TicketItemList)
                        {
                            _context.TicketItem.Remove(i);
                        }
                        _context.SaveChanges();
                    }
                    var QuoteItemList = (from c in _context.QuoteItem where c.QuoteId == QuoteId select c).ToList();
                    if (QuoteItemList.Count > 0)
                    {
                        foreach (var i in QuoteItemList)
                        {
                            TicketItem TicketItem = new TicketItem();
                            TicketItem.Type = i.Type;
                            TicketItem.TicketId = TicketId;
                            TicketItem.ItemName = i.ItemName;
                            TicketItem.ItemDescription = i.ItemDescription;
                            TicketItem.ItemQuantity = i.Qty;
                            TicketItem.ItemUnitCost = i.UnitCost;
                            TicketItem.ItemTotalCost = TicketItem.ItemQuantity * TicketItem.ItemUnitCost;
                            _context.TicketItem.Add(TicketItem);
                            _context.SaveChanges();
                        }
                    }
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

        [HttpPost("[action]/{Id}/{emailText}")]
        [Obsolete]
        public ActionResult emailQuoteCopy(Guid? Id, string emailText)
        {
            try
            {
                var Quote = _context.Quote.Where(i => i.Id == Id).FirstOrDefault();
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.emailQuoteByClient(Quote, emailText);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(404);
            }
        }

        [HttpPost("[action]/{Id}/{emailText}")]
        [Obsolete]
        public ActionResult SentQuoteLinkForSignature(Guid? Id, string emailText)
        {
            try
            {
                var Quote = _context.Quote.Where(i => i.Id == Id).FirstOrDefault();
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.sentQuoteLinkForSignature(Quote, emailText);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(404);
            }
        }


        [HttpPost("[action]/{QuoteUniqueID}")]
        public async Task<ActionResult> ValidateQuoteNo(int QuoteUniqueID)
        {
            try
            {
                var result = await (from c in _context.Quote where c.QuoteUniqueID == QuoteUniqueID select c.QuoteUniqueID).CountAsync();
                if (result == 0)
                {
                    var cc = QuoteUniqueID.ToString("00000");
                    return StatusCode(201, cc);
                }
                else
                {
                    return StatusCode(202, "Already Exist");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]")]
        public async Task<ActionResult> GetQuotesCustome()
        {
            try
            {

                var result = await (from c in _context.Quote
                                    where c.IsReady == true
                                    select new
                                    {
                                        draw = 1,
                                        recordsTotal = 10,
                                        recordsFiltered = 10,
                                        data = (from e in _context.Quote
                                                select new
                                                {
                                                    e.QuoteId,
                                                    e.JobTitle,
                                                    e.CustomerName,
                                                    e.CompanyName,
                                                    e.CustomerContactNo,
                                                    e.CustomerEmail,
                                                }
                                                ).ToList(),

                                    })
                .ToListAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(401, ex.Message.ToString());
            }
        }

        // GET: Download Quotation PDF
        [HttpGet("[action]/{QuoteId}/{token}")]
        [Obsolete]
        public ActionResult getQuotaionPDF(Guid QuoteId, Guid token)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.GenerateQuotPDF(QuoteId);
                var quote = (from q in _context.Quote where q.Id == QuoteId select q).FirstOrDefault();
                string path = GlobalParameters.QuotePath(quote.QuoteId);
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Quotation processed to download", Path = path });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
    }
}
