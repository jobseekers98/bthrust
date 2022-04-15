using GenicSolution.Entities;
using GenicSolution.Entities.SMTPThread;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        [Obsolete]

        public NotificationsController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;

        }
        // GET: api/Get Module Notification
        [HttpGet("[action]/{token}")]
        public ActionResult<Notification> GetModuleNotification(Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var result = (from c in _context.Notification select c).FirstOrDefault();
                if (result == null)
                {
                    return StatusCode(404, "Not found");
                }
                return StatusCode(200, result);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return StatusCode(404, "Something went wrong!");
            }

        }
        //Update Module Notification
        [HttpPut("[action]/{token}")]
        public ActionResult putModuleNotifications(Notification obj, Guid token)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(200, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                _context.Entry(obj).State = EntityState.Modified;
                _context.SaveChanges();
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Notifications updated successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(200, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]")]
        public ActionResult<IEnumerable<NotificationTemplate>> getEmailTemplateList()
        {
            return (from c in _context.NotificationTemplate select c).ToList();
        }
        // GET: api/Get email template
        [HttpGet("[action]/{Id}")]
        public ActionResult<Notification> getEmailTemplate(Guid? Id)
        {
            try
            {
                var result = (from c in _context.NotificationTemplate where c.Id == Id select c).FirstOrDefault();
                if (result == null)
                {
                    return StatusCode(404, "Not found");
                }
                return StatusCode(201, result);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return StatusCode(404, "Something went wrong!");
            }

        }
        //Add email template
        [HttpPost("[action]")]
        public ActionResult<NotificationTemplate> AddEmailTemplate(NotificationTemplate obj)
        {
            try
            {
                var isExist = _context.NotificationTemplate.Any(b => b.ModuleName == obj.ModuleName);
                if (isExist == true)
                {
                    return StatusCode(202, "already exists/conflict");
                }
                else
                {
                    obj.Id = Guid.NewGuid();
                    obj.CreatedDate = DateTime.UtcNow;
                    obj.IsActive = true;
                    _context.NotificationTemplate.Add(obj);
                    _context.SaveChanges();
                    return StatusCode(201, "Email template Created successfully.");
                }
            }
            catch (DbUpdateConcurrencyException)
            {

                return StatusCode(500, "Something went wrong!");
            }
        }
        //Update email template
        [HttpPut("[action]")]
        public ActionResult<NotificationTemplate> UpdateEmailTemplate(NotificationTemplate obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {

                return StatusCode(500, "Something went wrong!");
            }
            return StatusCode(201, "Email template updated successfully.");
        }
        // Template USER STATUS
        [HttpPost("[action]/{Id}/{CurrStatus}")]
        public ActionResult changeNotificationTemplateStatus(Guid? Id, Boolean CurrStatus)
        {
            try
            {
                var result = (from c in _context.NotificationTemplate where c.Id == Id select c).FirstOrDefault();
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
        [HttpPost("[action]/{QuoteId}/{isCust}/{isAdmin}/{AdminId}")]
        [Obsolete]
        public ActionResult quoteEmailNotification(Guid? QuoteId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.createQuoteBodyTemplate(QuoteId, isCust, isAdmin, AdminId);
                return StatusCode(201, "Quotation send successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPost("[action]/{QuoteId}/{isCust}/{isAdmin}/{AdminId}")]
        [Obsolete]
        public ActionResult UpdatequoteEmailNotification(Guid? QuoteId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.updateQuoteBodyTemplate(QuoteId, isCust, isAdmin, AdminId);
                return StatusCode(201, "Quotation send successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //New Ticket Template
        [HttpPost("[action]/{TicketId}/{isCust}/{isAdmin}/{AdminId}")]
        [Obsolete]
        public ActionResult TicketEmailNotification(Guid? TicketId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.createTicketBodyTemplate(TicketId, isCust, isAdmin, AdminId);
                return StatusCode(201, "Ticket send successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //ReSchedule ticket template
        [HttpPost("[action]/{TicketId}/{AdminId}/{OldDate}/{OldTime}")]
        [Obsolete]
        public ActionResult ReScheduleTicketBodyTemplate(List<TicketTeam> obj, Guid? TicketId, Guid? AdminId, DateTime? OldDate, string OldTime)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.ReScheduleTicketBodyTemplate(obj, TicketId, AdminId, OldDate, OldTime);
                return StatusCode(201, "Ticket Re-Scheduled successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Re-Allocation ticket template
        [HttpPost("[action]/{TicketId}/{isCust}/{isAdmin}/{AdminId}")]
        [Obsolete]
        public ActionResult ReAllocationTicketEmailNotificationss(List<TicketTeam> obj, Guid? TicketId, bool isCust, bool isAdmin, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.ReAllocationTicketBodyTemplate(obj, TicketId, isCust, isAdmin, AdminId);
                return StatusCode(201, "Ticket reallocated successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Start ticket template
        [HttpPost("[action]/{TicketId}")]
        [Obsolete]
        public ActionResult StartTicketEmailNotification(Guid? TicketId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.StartTicketBodyTemplate(TicketId);
                return StatusCode(201, "Ticket Started successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Cancelled ticket template
        [HttpPost("[action]/{TicketId}/{AdminId}")]
        [Obsolete]
        public ActionResult CancelledTicketEmailNotification(Guid? TicketId, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.CancelledTicketBodyTemplate(TicketId, AdminId);
                return StatusCode(201, "Ticket Cancelled successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Completion ticket template
        [HttpPost("[action]/{TicketId}/{AdminId}")]
        [Obsolete]
        public ActionResult CompletionTicketEmailNotification(Guid CloserId, Guid? AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.CompletionTicketBodyTemplate(CloserId);
                return StatusCode(201, "Ticket Completed successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Completion ticket template
        [HttpPost("[action]/{CloserId}")]
        [Obsolete]
        public ActionResult HoldTicketEmailNotification(Guid CloserId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.HoldTicketBodyTemplate(CloserId);
                return StatusCode(201, "Ticket Completed successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //Work order email
        [HttpPost("[action]/{CloserId}/{AdminId}")]
        [Obsolete]
        public ActionResult WorkOrderEmailNotification(Guid? CloserId, Guid AdminId)
        {
            try
            {
                NotificationMail objMail = new NotificationMail(_context, _hostingEnvironment);
                objMail.WorkOrderMailBodyTemplate(CloserId, AdminId);
                return StatusCode(201, "Work order sent successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }

    }
}