using GenicSolution.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReminderController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        public ReminderController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        #region Get Reminder Module Wise
        [HttpGet("[action]/{token}/{ReminderId}/{type}")]
        public async Task<ActionResult> GetReminders(Guid token, Guid ReminderId, string type)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = new object();
                    switch (type)
                    {
                        case "ticket": result = GetQuoteReminderList(ReminderId, type); break;
                        case "quote": result = GetQuoteReminderList(ReminderId, type); break;
                        case "invoice": result = GetQuoteReminderList(ReminderId, type); break;
                        case "warranty": break;
                        default: return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                    }
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
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
        #region Get All Reminder List
        [HttpGet("[action]/{token}/{type}")]
        public async Task<ActionResult> GetAllReminders(Guid token, string type)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token);
                if (IsTokenValid)
                {
                    var result = new object();
                    switch (type)
                    {
                        case "ticket":
                            result = await (from q in _context.TicketReminder
                                            select new
                                            {
                                                q.Id,
                                                RId = q.TicketId,
                                                RNo = (from a in _context.Ticket where a.Id == q.TicketId select a.TicketId).FirstOrDefault(),
                                                q.Subject,
                                                q.Body,
                                                q.MailTo,
                                                q.ReminderDate,
                                                q.IsActive
                                            }).ToListAsync();
                            break;
                        case "quote":
                            result = await (from q in _context.QuoteReminder
                                            select new
                                            {
                                                q.Id,
                                                RId = q.QuoteId,
                                                RNo = (from a in _context.Quote where a.Id == q.QuoteId select a.QuoteId).FirstOrDefault(),
                                                q.Subject,
                                                q.Body,
                                                q.MailTo,
                                                q.ReminderDate,
                                                q.IsActive
                                            }).ToListAsync();
                            break;
                        case "invoice":
                            result = await (from q in _context.InvoiceReminder
                                            select new
                                            {
                                                q.Id,
                                                RId = q.InvoiceId,
                                                RNo = (from a in _context.Invoice where a.Id == q.InvoiceId select a.InvoiceId).FirstOrDefault(),
                                                q.Subject,
                                                q.Body,
                                                q.MailTo,
                                                q.ReminderDate,
                                                q.IsActive
                                            }).ToListAsync();
                            break;
                        case "warranty": break;
                        default: return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
                    }
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Success" });
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
        #region Post Reminder
        [HttpPost("[action]/{token}/{type}")]
        public ActionResult PostReminder(QuoteReminder quotereminder, Guid token, string type)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    DateTime toDay = DateTime.UtcNow.AddHours(8);
                    Task.Yield();
                    if (quotereminder.Duration == 0)
                    {
                        if (quotereminder.ReminderDate >= toDay)
                        {
                            if (type == "quote")
                            {
                                var tr = new QuoteReminder
                                {
                                    Id = 0,
                                    QuoteId = quotereminder.QuoteId,
                                    Subject = quotereminder.Subject,
                                    Body = quotereminder.Body,
                                    MailTo = quotereminder.MailTo,
                                    RecurringStartDate = null,
                                    RecurringEndDate = null,
                                    ReminderDate = quotereminder.ReminderDate,
                                    IsActive = true
                                };
                                _context.Add(tr);
                            }
                            if (type == "invoice")
                            {
                                var tr = new InvoiceReminder
                                {
                                    Id = 0,
                                    InvoiceId = quotereminder.QuoteId,
                                    Subject = quotereminder.Subject,
                                    Body = quotereminder.Body,
                                    MailTo = quotereminder.MailTo,
                                    RecurringStartDate = null,
                                    RecurringEndDate = null,
                                    ReminderDate = quotereminder.ReminderDate,
                                    IsActive = true
                                };
                                _context.Add(tr);
                            }
                            if (type == "ticket")
                            {
                                var tr = new TicketReminder
                                {
                                    Id = 0,
                                    TicketId = quotereminder.QuoteId,
                                    Subject = quotereminder.Subject,
                                    Body = quotereminder.Body,
                                    MailTo = quotereminder.MailTo,
                                    RecurringStartDate = null,
                                    RecurringEndDate = null,
                                    ReminderDate = quotereminder.ReminderDate,
                                    IsActive = true
                                };
                                _context.Add(tr);
                            }
                            _context.SaveChanges();
                        }
                        else { return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Can't set reminder for past time" }); }
                    }
                    else
                    {
                        int totalticketCount = (from cn in _context.TicketRecurringHelperDate where cn.IsFor == 2 select cn.Id).Count();
                        if (totalticketCount > 0)
                        {
                            var dateList = (from cn in _context.TicketRecurringHelperDate where cn.IsFor == 2 select cn).OrderBy(x => x.Date).ToList();
                            if (type == "quote")
                            {
                                foreach (var itemdate in dateList)
                                {
                                    if (itemdate.Date >= toDay)
                                    {
                                        var tr = new QuoteReminder
                                        {
                                            Id = 0,
                                            QuoteId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = itemdate.Date,
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                            if (type == "invoice")
                            {
                                foreach (var itemdate in dateList)
                                {
                                    if (itemdate.Date >= toDay)
                                    {
                                        var tr = new InvoiceReminder
                                        {
                                            Id = 0,
                                            InvoiceId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = itemdate.Date,
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                            if (type == "ticket")
                            {
                                foreach (var itemdate in dateList)
                                {
                                    if (itemdate.Date >= toDay)
                                    {
                                        var tr = new TicketReminder
                                        {
                                            Id = 0,
                                            TicketId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = itemdate.Date,
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (type == "quote")
                            {
                                for (int i = 1; i < quotereminder.VisitFrequency; i++)
                                {
                                    if (quotereminder.ReminderDate.AddDays(i) >= toDay)
                                    {
                                        QuoteReminder tr = new QuoteReminder
                                        {
                                            Id = 0,
                                            QuoteId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = quotereminder.ReminderDate.AddDays(i),
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                            if (type == "invoice")
                            {
                                for (int i = 1; i < quotereminder.VisitFrequency; i++)
                                {
                                    if (quotereminder.ReminderDate.AddDays(i) >= toDay)
                                    {
                                        var tr = new InvoiceReminder
                                        {
                                            Id = 0,
                                            InvoiceId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = quotereminder.ReminderDate.AddDays(i),
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                            if (type == "ticket")
                            {
                                for (int i = 1; i < quotereminder.VisitFrequency; i++)
                                {
                                    if (quotereminder.ReminderDate.AddDays(i) >= toDay)
                                    {
                                        var tr = new TicketReminder
                                        {
                                            Id = 0,
                                            TicketId = quotereminder.QuoteId,
                                            Subject = quotereminder.Subject,
                                            Body = quotereminder.Body,
                                            MailTo = quotereminder.MailTo,
                                            RecurringStartDate = null,
                                            RecurringEndDate = null,
                                            Duration = quotereminder.Duration,
                                            VisitFrequency = quotereminder.VisitFrequency,
                                            ReminderDate = quotereminder.ReminderDate.AddDays(i),
                                            IsActive = true
                                        };
                                        _context.Add(tr);
                                        _context.SaveChanges();
                                    }
                                }
                            }
                        }
                    }
                    var result = GetQuoteReminderList(quotereminder.QuoteId, type);
                    return StatusCode(200, new { result, Message = "success", MessageDescription = "Reminder Save Successfully" });
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
        [HttpPut("[action]/{token}/{Id}/{type}")]
        public async Task<ActionResult> PutReminderStatus(Guid token, int Id, string type)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                if (type == "quote")
                {
                    var data = await (from c in _context.QuoteReminder where c.Id == Id select c).FirstOrDefaultAsync();
                    if (data.IsActive) { data.IsActive = false; }
                    else { data.IsActive = true; }
                    _context.Entry(data).State = EntityState.Modified;
                }
                if (type == "invoice")
                {
                    var data = await (from c in _context.InvoiceReminder where c.Id == Id select c).FirstOrDefaultAsync();
                    if (data.IsActive) { data.IsActive = false; }
                    else { data.IsActive = true; }
                    _context.Entry(data).State = EntityState.Modified;
                }
                if (type == "ticket")
                {
                    var data = await (from c in _context.TicketReminder where c.Id == Id select c).FirstOrDefaultAsync();
                    if (data.IsActive) { data.IsActive = false; }
                    else { data.IsActive = true; }
                    _context.Entry(data).State = EntityState.Modified;
                }
                await _context.SaveChangesAsync();
                return StatusCode(202, new { result = "", Message = "success", MessageDescription = "Update successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpDelete("[action]/{token}/{ReminderId}/{QuoteId}/{type}")]
        public ActionResult DeleteQuotationReminder(Guid token, int ReminderId, Guid QuoteId, string type)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token);
                if (IsTokenValid)
                {
                    if (type == "quote")
                    {
                        var reminder = (from r in _context.QuoteReminder where r.Id == ReminderId && r.QuoteId == QuoteId select r).FirstOrDefault();
                        if (reminder != null)
                        {
                            _context.Remove(reminder);
                            _context.SaveChanges();
                            var result = GetQuoteReminderList(QuoteId, type);
                            return StatusCode(200, new { result, Message = "success", MessageDescription = "Removed Successfully" });
                        }
                        else
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Already removed or not found!" });
                        }
                    }
                    if (type == "invoice")
                    {
                        var reminder = (from r in _context.InvoiceReminder where r.Id == ReminderId && r.InvoiceId == QuoteId select r).FirstOrDefault();
                        if (reminder != null)
                        {
                            _context.Remove(reminder);
                            _context.SaveChanges();
                            var result = GetQuoteReminderList(QuoteId, type);
                            return StatusCode(200, new { result, Message = "success", MessageDescription = "Removed Successfully" });
                        }
                        else
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Already removed or not found!" });
                        }
                    }
                    if (type == "ticket")
                    {
                        var reminder = (from r in _context.TicketReminder where r.Id == ReminderId && r.TicketId == QuoteId select r).FirstOrDefault();
                        if (reminder != null)
                        {
                            _context.Remove(reminder);
                            _context.SaveChanges();
                            var result = GetQuoteReminderList(QuoteId, type);
                            return StatusCode(200, new { result, Message = "success", MessageDescription = "Removed Successfully" });
                        }
                        else
                        {
                            return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Already removed or not found!" });
                        }
                    }
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Invalid Request" });
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
        #region Private
        private Object GetQuoteReminderList(Guid Id, string type)
        {
            if (type == "quote")
            {
                return (from q in _context.QuoteReminder
                        where q.QuoteId == Id
                        select new
                        {
                            q.Id,
                            RId = q.QuoteId,
                            RNo = (from a in _context.Quote where a.Id == q.QuoteId select a.QuoteId).FirstOrDefault(),
                            q.Subject,
                            q.Body,
                            q.MailTo,
                            q.ReminderDate
                        }).ToList();
            }
            if (type == "quote")
            {
                return (from q in _context.InvoiceReminder
                        where q.InvoiceId == Id
                        select new
                        {
                            q.Id,
                            RId = q.InvoiceId,
                            RNo = (from a in _context.Invoice where a.Id == q.InvoiceId select a.InvoiceId).FirstOrDefault(),
                            q.Subject,
                            q.Body,
                            q.MailTo,
                            q.ReminderDate
                        }).ToList();
            }
            if (type == "ticket")
            {
                return (from q in _context.TicketReminder
                        where q.TicketId == Id
                        select new
                        {
                            q.Id,
                            RId = q.TicketId,
                            RNo = (from a in _context.Ticket where a.Id == q.TicketId select a.TicketId).FirstOrDefault(),
                            q.Subject,
                            q.Body,
                            q.MailTo,
                            q.ReminderDate
                        }).ToList();
            }
            return new object();
        }
        #endregion
    }
}

