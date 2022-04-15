using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
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
    public class InvoicesController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]
        public InvoicesController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        // GET: api/Invoice
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult<IEnumerable<Invoice>>> Get(Guid token)
        {
            var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
            return await (from q in _context.Invoice
                          join c in _context.Customer on q.CustomerId equals c.Id
                          where UserType.Type == "Admin" ? q.IsReady == true : q.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)
                          orderby q.CreatedUtcDate descending
                          select q).ToListAsync();
        }
        [HttpGet("[action]/{CustomerId}/{token}")]
        public async Task<ActionResult> getInvoiceTicketList(Guid CustomerId, Guid token) // Id is form customer table it is a Guid
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = await (from c in _context.Ticket where c.CustomerId == CustomerId && string.IsNullOrEmpty(c.InvoiceNo) == true && c.IsReady == true && c.Status =="CLOSED" orderby c.TicketId descending select c).ToListAsync();
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
        // GET: api/Invoice
        [HttpGet("[action]/{CustomerID}/{token}")]
        public async Task<ActionResult> getInvoiceQuoteList(Guid CustomerID, Guid token) // Id is form customer table it is not a Guid
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = await (from q in _context.Quote where q.Status == 4 && q.CustomerId == CustomerID && string.IsNullOrEmpty(q.InvoiceNo) == true && q.IsReady == true orderby q.CreatedUtcDate descending select q).ToListAsync();
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
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<IEnumerable<ArrayofKey>>> GetArrayofKey(Guid id)
        {
            return await (from c in _context.ArrayofKey where c.CustomerId == id select c).ToListAsync();
        }
        // GET: api/Invoice Item List
        [HttpGet("[action]/{Id}/{token}")]
        public async Task<ActionResult> GetInvoiceItems(Guid Id, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = await (from i in _context.InvoiceItem where i.InvoiceId == Id orderby i.CreatedUtcDate descending select i).ToListAsync();
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
        // GET: api/Invoice Attachment List
        [HttpGet("[action]/{Id}/{token}")]
        public async Task<ActionResult> getInvoiceAttachments(Guid Id, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = await (from a in _context.InvoiceAttachment where a.InvoiceId == Id orderby a.CreatedUtcDate descending select a).ToListAsync();
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
        // GET: api/Invoice/5
        [HttpGet("[action]/{InvoiceId}/{Token}")]
        public async Task<ActionResult> GetInvoice(Guid InvoiceId, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = await (from a in _context.Invoice where a.Id == InvoiceId select a)
                        .Include(c => c.InvoiceItemList)
                        .Include(c => c.InvoiceAttachmentList)
                        .FirstOrDefaultAsync();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = "success" });
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
        // POST: api/Invoice
        [HttpPost("[action]/{token}")]
        [Obsolete]
        public async Task<ActionResult<Invoice>> postInvoice(Invoice invoice, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = (from c in _context.Invoice where c.IsReady == false select c).FirstOrDefault();
                    var gc = (from p in _context.GenicProfile select p).FirstOrDefault();
                    if (result == null)
                    {
                        try
                        {
                            var countid = await (from c in _context.Invoice select c.InvoiceUniqueID).MaxAsync();
                            if (countid > 0)
                            {
                                invoice.InvoiceUniqueID = countid + 1;
                            }
                        }
                        catch { invoice.InvoiceUniqueID = 1; }
                        invoice.Id = Guid.NewGuid();
                        string ab = string.Empty;
                        ab = invoice.InvoiceUniqueID.ToString("00000");
                        invoice.InvoiceDate = null;
                        invoice.ModifiedUtcDate = null;
                        invoice.InvoiceDueDate = null;
                        invoice.InvoiceId = gc.InvoicePrefix + ab;
                        invoice.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);
                        invoice.TicketId = "";
                        invoice.QuoteId = "";
                        invoice.Status = "Draft"; // 1= Draft, 2= SendOutPaid, 3= SendOutUnPaid, 4 = SendOutOverDue, 5= PartiallyPaid  6=cancelled
                        _context.Invoice.Add(invoice);
                        await _context.SaveChangesAsync();
                    }
                    else
                    {
                        result.InvoiceDate = DateTime.UtcNow;
                        result.InvoiceDueDate = DateTime.UtcNow.AddMonths(1);
                        invoice = result;
                        var itemlist = await (from i in _context.InvoiceItem where i.InvoiceId == invoice.Id select i).ToListAsync();
                        if (itemlist.Count > 0)
                        {
                            foreach (var p in itemlist)
                            {
                                _context.InvoiceItem.Remove(p);
                            }
                            await _context.SaveChangesAsync();
                        }
                        var invoiceAttachment = await (from c in _context.InvoiceAttachment where c.InvoiceId == invoice.Id select c).ToListAsync();
                        if (invoiceAttachment.Count > 0)
                        {
                            foreach (var item in invoiceAttachment)
                            {
                                _context.InvoiceAttachment.Remove(item);
                            }
                            await _context.SaveChangesAsync();
                        }
                    }
                    return StatusCode(200, new { result = invoice, Message = "success", MessageDescription = "success" });
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
        //Update Invoice 
        [HttpPut("[action]/{token}")]
        public ActionResult putInvoice(Invoice invoice, Guid token)
        {
            try
            {
                var gc = (from c in _context.GenicProfile select c).FirstOrDefault();
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    var CustEmail = (from c in _context.ArrayofKey where c.CustomerId == invoice.CustomerId && c.IsDefault == true && c.Type == "Email" select c).FirstOrDefault();
                    var CustInfo = (from cc in _context.Customer where cc.Id == invoice.CustomerId select cc).FirstOrDefault();
                    var CustContact = (from c in _context.ArrayofKey where c.CustomerId == invoice.CustomerId && c.Type != "Email" select c).FirstOrDefault();
                    if (CustEmail != null)
                    {
                        invoice.CustomerEmail = CustEmail.Value;
                    }
                    if (CustContact != null)
                    {
                        invoice.CustomerContactNo = CustContact.Value;
                    }
                    if (CustInfo != null)
                    {
                        invoice.CompanyName = CustInfo.CompanyName;
                    }
                    invoice.ModifiedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);                
                    _context.Entry(invoice).State = EntityState.Modified;
                    _context.SaveChanges();
                    if (invoice.InvoiceConvertedFrom == "QUOTE")
                    {
                        var QuoteDetails = (from q in _context.Quote where q.Id == invoice.InvoiceConvertedID select q).FirstOrDefault();
                        if (QuoteDetails != null)
                        {
                            QuoteDetails.InvoiceId = invoice.Id;
                            QuoteDetails.InvoiceNo = invoice.InvoiceId;
                            _context.Entry(QuoteDetails).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                    }
                    else if (invoice.InvoiceConvertedFrom == "TICKET")
                    {
                        var TicketDetails = (from t in _context.Ticket where t.Id == invoice.InvoiceConvertedID select t).FirstOrDefault();
                        if (TicketDetails != null)
                        {
                            TicketDetails.InvoiceId = invoice.Id;
                            TicketDetails.InvoiceNo = invoice.InvoiceId;
                            _context.Entry(TicketDetails).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                    }
                    bool isReady = (from c in _context.Invoice where c.Id == invoice.Id select c.IsReady).FirstOrDefault();
                    if (!isReady)
                    {
                        invoice.IsReady = true;
                        invoice.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gc.TimeZone);
                         _context.SaveChanges();
                        return StatusCode(201, new { result = "", Message = "success", type= "insert", MessageDescription = "New invoice created successfully" });
                    }
                    return StatusCode(202, new { result = "", Message = "success", type = "update", MessageDescription = "update successfully" });
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
        // post Invoice Item
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult<QuoteItem>> posInvoiceItem(InvoiceItem oModel, Guid token)
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
                                var IsDuplicate = (from c in _context.TicketItem where c.ItemName == oModel.ItemName && c.UniqId == oModel.UniqId select c).Any();
                                if (IsDuplicate)
                                {
                                    return StatusCode(208, new { result = "", Message = "failure", MessageDescription = "Unique Id is already exist" });
                                }
                            }
                        }
                    }
                    var itemlist = (from b in _context.InvoiceItem where b.ItemName == oModel.ItemName && b.InvoiceId == oModel.InvoiceId select b).FirstOrDefault();
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
                        _context.InvoiceItem.Add(oModel);
                        await _context.SaveChangesAsync();
                    }
                    return StatusCode(201, new { result = "", Message = "success", MessageDescription = "Added successfully" });
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
        [HttpPost("[action]/{TicketId}/{InvoiceId}")]
        public ActionResult postTicketItemToInvoiceItem(Guid TicketId, Guid InvoiceId)
        {
            try
            {
                var InvItemList = (from c in _context.InvoiceItem where c.InvoiceId == InvoiceId select c).ToList();
                if (InvItemList.Count > 0)
                {
                    foreach (var i in InvItemList)
                    {
                        _context.InvoiceItem.Remove(i);
                    }
                    _context.SaveChanges();
                }
                var TicketItemList = (from c in _context.TicketItem where c.TicketId == TicketId select c).ToList();
                if (TicketItemList.Count > 0)
                {
                    foreach (var i in TicketItemList)
                    {
                        InvoiceItem InvoiceItem = new InvoiceItem();
                        InvoiceItem.Type = i.Type;
                        InvoiceItem.InvoiceId = InvoiceId;
                        InvoiceItem.ItemName = i.ItemName;
                        InvoiceItem.ItemDescription = i.ItemDescription;
                        InvoiceItem.Qty = i.ItemQuantity;
                        InvoiceItem.UnitCost = Convert.ToDouble(i.ItemUnitCost);
                        InvoiceItem.Total = InvoiceItem.Qty * InvoiceItem.UnitCost;

                        _context.InvoiceItem.Add(InvoiceItem);
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
        // Insert ticket item list to invoice item list
        [HttpPost("[action]/{TicketId}/{InvoiceId}")]
        public ActionResult postTicketAttachmentToInvoiceAttachment(Guid TicketId, Guid InvoiceId)
        {
            try
            {
                var InvAttList = (from c in _context.InvoiceAttachment where c.InvoiceId == InvoiceId select c).ToList();
                if (InvAttList.Count > 0)
                {
                    foreach (var i in InvAttList)
                    {
                        _context.InvoiceAttachment.Remove(i);
                    }
                    _context.SaveChanges();
                }
                var TicketAttList = (from c in _context.TicketAttachment where c.TicketId == TicketId select c).ToList();
                if (TicketAttList.Count > 0)
                {
                    foreach (var i in TicketAttList)
                    {
                        InvoiceAttachment invoiceattachment = new InvoiceAttachment();
                        invoiceattachment.InvoiceId = InvoiceId;
                        invoiceattachment.Attachment = i.AttachmentPath;
                        invoiceattachment.AttachmentSize = i.AttachmentSize;
                        invoiceattachment.CreatedUtcDate = DateTime.UtcNow;
                        _context.InvoiceAttachment.Add(invoiceattachment);
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
        // Insert Quote item list to invoice item list
        [HttpPost("[action]/{QuoteId}/{InvoiceId}")]
        public ActionResult posQuoteItemToInvoiceItem(Guid QuoteId, Guid InvoiceId)
        {
            try
            {
                var InvItemList = (from i in _context.InvoiceItem where i.InvoiceId == InvoiceId select i).ToList();
                if (InvItemList.Count > 0)
                {
                    foreach (var i in InvItemList)
                    {
                        _context.InvoiceItem.Remove(i);
                    }
                    _context.SaveChanges();
                }
                var QuoteItemList = (from c in _context.QuoteItem where c.QuoteId == QuoteId select c).ToList();
                if (QuoteItemList.Count > 0)
                {
                    foreach (var i in QuoteItemList)
                    {
                        InvoiceItem InvoiceItem = new InvoiceItem();
                        InvoiceItem.Type = i.Type;
                        InvoiceItem.InvoiceId = InvoiceId;
                        InvoiceItem.ItemName = i.ItemName;
                        InvoiceItem.ItemDescription = i.ItemDescription;
                        InvoiceItem.Qty = i.Qty;
                        InvoiceItem.UnitCost = i.UnitCost;
                        InvoiceItem.Total = InvoiceItem.Qty * InvoiceItem.UnitCost;
                        InvoiceItem.CreatedUtcDate = DateTime.UtcNow;
                        InvoiceItem.UniqId = i.UniqId;
                        InvoiceItem.InWarranty = i.InWarranty;
                        InvoiceItem.WarrantyDays = i.WarrantyDays;
                        _context.InvoiceItem.Add(InvoiceItem);
                        _context.SaveChanges();
                    }
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
        // put Invoice item
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> putInvoiceItem(int id, InvoiceItem invoiceItem)
        {
            if (id != invoiceItem.Id)
            {
                return BadRequest();
            }
            var res = (from g in _context.GenicProfile select g).FirstOrDefault();
            if (res.WarrantyValidation)
            {
                if (invoiceItem.InWarranty)
                {
                    if (invoiceItem.UniqId.Length > 0)
                    {
                        var IsDuplicate = (from c in _context.TicketItem where c.UniqId == invoiceItem.UniqId select c).Any();
                        if (IsDuplicate)
                        {
                            return StatusCode(208);
                        }
                    }
                }
            }
            _context.Entry(invoiceItem).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(202);
        }
        [HttpDelete("[action]/{id}")]
        public async Task<ActionResult> deleteInvoiceItem(int id)
        {
            var InvoiceItem = _context.InvoiceItem.Where(c => c.Id == id).FirstOrDefault();
            var InvoiceNo = (from i in _context.InvoiceItem where i.Id == id select i.InvoiceId).FirstOrDefault();
            if (InvoiceItem == null)
            {
                return NotFound();
            }
            _context.InvoiceItem.Remove(InvoiceItem);
            await _context.SaveChangesAsync();
            // calculate total item in qoutItem table
            var itemList = (from i in _context.InvoiceItem where i.InvoiceId == InvoiceNo select i).ToList();
            if (itemList.Count > 0)
            {

            }
            else
            {
                var Invoice = (from i in _context.Invoice where i.Id == InvoiceNo select i).FirstOrDefault();
                Invoice.SubTotal = 0;
                Invoice.TaxAmount = 0;
                Invoice.DiscountAmount = 0;
                Invoice.NetAmount = 0;
                _context.Entry(Invoice).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            return StatusCode(204);
        }
        //post attachment
        [HttpPost("[action]")]
        [Obsolete]
        public ActionResult UploadInvoiceAttachment(InvoiceAttachment obj)
        {
            try
            {
                var extention = _context.GenicFileExtenstion.Any(e => e.ExtentionName == obj.AttachmentExtension && e.IsActive == true);
                if (extention)
                {
                    if (obj.Attachment != "")
                    {
                        string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                        obj.CreatedUtcDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                        //MemoryStream ms = new MemoryStream(Convert.FromBase64String(obj.Attachment));
                        //string NewFileName = DateTime.UtcNow.ToString("yyyyMMddHHMMss") + "." + obj.AttachmentExtension.ToLower();
                        //string newPath = Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.InvoiceAttachmentFolderName + "//" + obj.Id);
                        //if (!Directory.Exists(newPath)) { Directory.CreateDirectory(newPath); }
                        //var fullpath = Path.Combine(newPath, NewFileName);

                        //System.IO.FileStream streamPDF =
                        //new FileStream(fullpath, FileMode.CreateNew);
                        //System.IO.BinaryWriter writer =
                        //    new BinaryWriter(streamPDF);

                        //byte[] imageBytes = Convert.FromBase64String(obj.Attachment);

                        //writer.Write(imageBytes, 0, imageBytes.Length);
                        //writer.Close();
                        //obj.Attachment = GlobalParameters.InvoiceAttachmentFolderName + "/" + obj.Id + "/" + NewFileName;
                        //_context.InvoiceAttachment.Add(obj);
                        //_context.SaveChanges();
                        return StatusCode(201);
                    }
                }
                else
                {
                    return StatusCode(405, "File format not allowed..");
                }
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
            return StatusCode(405, "File format not allowed..");
        }
        [HttpDelete("[action]/{id}")]
        [Obsolete]
        public async Task<ActionResult> deleteInvoiceAttachment(int id)
        {
            var InvoiceAttachment = await _context.InvoiceAttachment.FindAsync(id);
            if (InvoiceAttachment == null)
            {
                return NotFound();
            }
            //string oldpath = Path.Combine(_hostingEnvironment.WebRootPath, GlobalParameters.InvoiceAttachmentFolderName + "//" + InvoiceAttachment.InvoiceId + "//" + InvoiceAttachment.Attachment);
            //if (System.IO.File.Exists(oldpath))
            //{
            //    System.IO.File.Delete(oldpath);
            //}
            _context.InvoiceAttachment.Remove(InvoiceAttachment);
            await _context.SaveChangesAsync();
            return StatusCode(204);
        }
        //DELETE: api/Invoice/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Invoice>> DeleteInvoice(Guid id)
        {
            var Invoice = await _context.Invoice.FindAsync(id);
            if (Invoice == null)
            {
                return NotFound();
            }

            _context.Invoice.Remove(Invoice);
            await _context.SaveChangesAsync();

            return Invoice;
        }
        // change invoice status
        [HttpPut("[action]/{Id}/{Status}")]
        public async Task<ActionResult> UpdateInvoiceStatus(Guid Id, string Status)
        {
            try
            {
                var result = (from c in _context.Invoice where c.Id == Id select c).FirstOrDefault();
                if (result == null)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invoice No not found" });
                }
                else
                {
                    result.Status = Status;
                    await _context.SaveChangesAsync();
                }
                return StatusCode(202, new { result, Message = "success", MessageDescription = "update successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        private bool InvoiceExists(Guid id)
        {
            return _context.Invoice.Any(e => e.Id == id);
        }
        private bool InvoiceItemExists(int id)
        {
            return _context.InvoiceItem.Any(e => e.Id == id);
        }
        // GET: api/payment Mode list
        [HttpGet("[action]/{token}")]
        public ActionResult getPaymentMode(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = (from q in _context.PaymentMode where q.Status == true orderby q.CreatedDate descending select q).ToList();
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
        // POST: api/post payment
        [HttpPost("[action]/{token}")]
        public ActionResult postPayment(Payment Payment, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = (from c in _context.Invoice where c.IsReady == true && c.InvoiceId == Payment.InvoiceNo select c).FirstOrDefault();
                    var PaidAmount = (from pp in _context.Payment where pp.InvoiceId == Payment.InvoiceId select pp.PaymentAmount).Sum();
                    if (result.NetAmount > Payment.PaymentAmount + PaidAmount)
                    {
                        Payment.BalanceAmount = result.NetAmount - (Payment.PaymentAmount + PaidAmount);
                        result.Status = "PartiallyPaid";
                    }
                    else
                    {
                        Payment.BalanceAmount = 0;
                        result.Status = "SendOutPaid";
                        _context.Entry(result).State = EntityState.Modified;
                        _context.SaveChanges();
                    }
                    Payment.Id = Guid.NewGuid();
                    Payment.CreatedDate = DateTime.UtcNow;
                    _context.Payment.Add(Payment);
                    _context.SaveChanges();
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Update successfully" });
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
        // POST: api/payment details
        [HttpGet("[action]/{Id}/{token}")]
        public ActionResult<Payment> getPaymentDetailsByInvoiceNo(Guid Id, Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result = (from p in _context.Payment where p.InvoiceId == Id select p).ToList();
                    Payment payment = new Payment();
                    if (result == null)
                    {
                        return StatusCode(200, new { result = payment, Message = "success", MessageDescription = "Update successfully" });
                    }
                    else
                    {
                        foreach (var i in result)
                        {
                            payment.PaymentAmount += i.PaymentAmount;
                            payment.InvoiceNo = i.InvoiceNo;
                            payment.InvoiceId = i.InvoiceId;
                        }
                    }
                    return StatusCode(200, new { result = payment, Message = "success", MessageDescription = "Update successfully" });
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
        // edit payment
        [HttpGet("[action]/{Id}")]
        public ActionResult<Payment> getEditPaymentByInvoiceNo(Guid Id)
        {
            var Payment = _context.Payment.Where(a => a.Id == Id).FirstOrDefault();

            if (Payment == null)
            {
                return NotFound();
            }
            return Payment;
        }
        // get payment summary
        [HttpGet("[action]/{InvoiceId}")]
        public ActionResult getPaymentSummary(Guid InvoiceId)
        {
            var paymentSummary = (from i in _context.Invoice
                                  join p in _context.Payment on i.Id equals p.InvoiceId
                                  join pm in _context.PaymentMode on p.PModeId equals pm.Id
                                  where i.Id == InvoiceId
                                  group new { i, p, pm } by new { i.Id, i.InvoiceId, i.InvoiceDate, i.NetAmount, p.PaymentDate, p.PaymentAmount, pm.ModeName }
                                    into grp
                                  select new
                                  {
                                      InvoiceId = grp.Key.Id,
                                      InvoiceNo = grp.Key.InvoiceId,
                                      grp.Key.InvoiceDate,
                                      InvoiceAmount = grp.Key.NetAmount,
                                      grp.Key.PaymentDate,
                                      // grp.Key.PaymentAmount, 
                                      PaymentAmount = (from pp in _context.Payment where pp.InvoiceId == InvoiceId select pp.PaymentAmount).Sum(),
                                      PaymentMode = grp.Key.ModeName
                                  }
                                );
            return StatusCode(200,
               new
               {
                   paymentSummary
               });

            //var paymentSummary = from i in _context.Invoice
            //                     join p in _context.Payment on i.Id equals p.InvoiceId
            //                     join pm in _context.PaymentMode on p.PModeId equals pm.Id
            //                     where i.Id == InvoiceId
            //                     select new
            //                     {
            //                         InvoiceId = i.Id,
            //                         InvoiceNo = i.InvoiceId,
            //                         i.InvoiceDate,
            //                         InvoiceAmount = i.NetAmount,
            //                         p.PaymentDate,
            //                         p.PaymentAmount,
            //                         PaymentMode = pm.ModeName
            //                     };
            //return StatusCode(200,
            //   new
            //   {
            //       paymentSummary
            //   });
        }

        [HttpPost("[action]/{id}")]
        public ActionResult EmailPaymentReceipt(Guid id)
        {
            try
            {
                var Invoice = _context.Invoice.Where(i => i.Id == id).FirstOrDefault();
                var paymentList = _context.Payment.Where(i => i.InvoiceId == id).ToList();
                if (Invoice == null)
                {
                    return NotFound();
                }
                else
                {
                    Payment Payment = new Payment();
                    if (paymentList != null)
                    {
                        foreach (var p in paymentList)
                        {
                            Payment.InvoiceId = id;
                            Payment.TransactionId = p.TransactionId;
                            Payment.CreatedDate = p.CreatedDate;
                            Payment.InvoiceNo = Invoice.InvoiceId;
                            Payment.PModeId = p.PModeId;
                            Payment.PaymentDate = p.PaymentDate;
                            Payment.PaymentMethod = p.PaymentMethod;
                            Payment.PaymentNote = p.PaymentNote;
                            Payment.PaymentAmount = (from pp in _context.Payment where pp.InvoiceId == id select pp.PaymentAmount).Sum();
                            _context.Payment.Add(Payment);
                        }
                        //MailSettings MailSettings = new MailSettings(_context, _hostingEnvironment);
                        //MailSettings.NewPaynentAgainstInvoiceClinet(Payment, Invoice);
                    }
                    else
                    {
                        return StatusCode(500);
                    }

                }
                return StatusCode(500);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return StatusCode(500);
            }

        }
        /// Payment Mode Methods End
        [HttpPost("[action]/{Id}")]
        [Obsolete]
        public ActionResult emailInvoiceCopy(Guid Id)
        {
            var Invoice = _context.Invoice.Where(i => i.Id == Id).FirstOrDefault();
            var gc = _context.GenicProfile.FirstOrDefault();
            NotificationMail MailSettings = new NotificationMail(_context, _hostingEnvironment);
            MailSettings.emailInvoiceToClient(Invoice, Invoice.CustomerEmail, Invoice.SMTPId, gc.Name);
            return StatusCode(200);
        }
        [HttpPost("[action]/{InvoiceUniqueID}")]
        public async Task<ActionResult> ValidateInvoiceNo(int InvoiceUniqueID)
        {
            try
            {
                var result = await (from c in _context.Invoice where c.InvoiceUniqueID == InvoiceUniqueID select c.InvoiceUniqueID).CountAsync();
                if (result == 0)
                {
                    var cc = InvoiceUniqueID.ToString("00000");
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
        // GET: Download Quotation PDF
        [HttpGet("[action]/{InvoiceId}/{token}")]
        [Obsolete]
        public ActionResult getInvoicePDF(Guid InvoiceId, Guid token)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.GenerateInvoicePDF(InvoiceId);
                var invoice = (from q in _context.Invoice where q.Id == InvoiceId select q).FirstOrDefault();
                string path = GlobalParameters.InvoicePath(invoice.InvoiceId);
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Invoice processed to download", Path = path });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
    }
}
