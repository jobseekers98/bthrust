using GenicSolution.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashBoardController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public DashBoardController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        #region Admin / SubAdmin
        [HttpGet("[action]/{token}/{key}")]
        public ActionResult Customer(Guid token, string key)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                DateTime dateEnd;
                float CustomerCount = 0;
                float CustomerPer = 0;
                int CustomerAll = 0;
                int CustomerActive = 0;
                double CustomerTotalAmount = 0;
                string CustomerStatus = "success";
                switch (key)
                {
                    case "YEAR":
                        dateStart = DateTime.Today.AddDays(-365);
                        dateEnd = DateTime.Today.AddDays(1);
                        CustomerCount = (from c in _context.Customer
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                         && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                         select c).Count();
                        CustomerTotalAmount = (from t in _context.Ticket
                                               join cu in _context.Customer on t.CustomerId equals cu.Id
                                               where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && cu.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)) &&
                                               (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                               select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-730);
                        dateEnd = DateTime.Today.AddDays(-365);
                        CustomerPer = (from c in _context.Customer
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)) &&
                                       (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        if (CustomerPer == 0) { CustomerPer = 1; }
                        if (CustomerCount < CustomerPer) { CustomerStatus = "warning"; }
                        CustomerPer = (CustomerCount / CustomerPer) * 100;
                        break;
                    case "MONTH":
                        dateStart = DateTime.Today.AddDays(-30);
                        dateEnd = DateTime.Today.AddDays(1);
                        CustomerCount = (from c in _context.Customer
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                         && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                         select c).Count();
                        CustomerTotalAmount = (from t in _context.Ticket
                                               join cu in _context.Customer on t.CustomerId equals cu.Id
                                               where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && cu.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)) &&
                                               (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                               select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-60);
                        dateEnd = DateTime.Today.AddDays(-30);
                        CustomerPer = (from c in _context.Customer
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        if (CustomerPer == 0) { CustomerPer = 1; }
                        if (CustomerCount < CustomerPer) { CustomerStatus = "warning"; }
                        CustomerPer = (CustomerCount / CustomerPer) * 100;
                        break;
                    case "WEEK":
                        dateStart = DateTime.Today.AddDays(-7);
                        dateEnd = DateTime.Today.AddDays(1);
                        CustomerCount = (from c in _context.Customer
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                         && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                         select c).Count();
                        CustomerTotalAmount = (from t in _context.Ticket
                                               join cu in _context.Customer on t.CustomerId equals cu.Id
                                               where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && cu.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                               && (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                               select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-14);
                        dateEnd = DateTime.Today.AddDays(-7);
                        CustomerPer = (from c in _context.Customer
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        if (CustomerPer == 0) { CustomerPer = 1; }
                        if (CustomerCount < CustomerPer) { CustomerStatus = "warning"; }
                        CustomerPer = (CustomerCount / CustomerPer) * 100;
                        break;
                    default:
                        dateStart = DateTime.Today.AddDays(-30);
                        dateEnd = DateTime.Today.AddDays(1);
                        CustomerCount = (from c in _context.Customer
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                         && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                         select c).Count();
                        CustomerTotalAmount = (from t in _context.Ticket
                                               join cu in _context.Customer on t.CustomerId equals cu.Id
                                               where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && cu.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)) &&
                                               (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                               select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-60);
                        dateEnd = DateTime.Today.AddDays(-30);
                        CustomerPer = (from c in _context.Customer
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId))
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        if (CustomerPer == 0) { CustomerPer = 1; }
                        if (CustomerCount < CustomerPer) { CustomerStatus = "warning"; }
                        CustomerPer = (CustomerCount / CustomerPer) * 100;
                        break;
                }
                CustomerAll = (from c in _context.Customer where UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId) select c).Count();
                CustomerActive = (from c in _context.Customer where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.CustomerDepartment.Any(m => m.SMTPSettingsId == UserType.SMTPId)) && c.Status == true select c).Count();
                return StatusCode(200,
                   new
                   {
                       CustomerCount,
                       CustomerPer,
                       CustomerAll,
                       CustomerActive,
                       CustomerTotalAmount,
                       CustomerStatus
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}/{key}")]
        public ActionResult AvegareRevenue(Guid token, string key)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                DateTime dateEnd;
                double AvegareCount = 0;
                double AvegarePer = 0;
                double AvegarePerTicket = 0;
                string AverageStatus = "success";
                double thismonth = 0;
                double lastmonth = 0;
                double diffrance = 0;
                int totalticket = 0;
                switch (key)
                {

                    case "YEAR":
                        int Ythisyear = DateTime.Today.Year;
                        int Ylastyear = DateTime.Today.Year - 1;
                        AvegareCount = (from c in _context.Quote
                                        where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                        && (c.CreatedUtcDate.Value.Year == Ythisyear)
                                        select c.NetAmount).Sum();
                        lastmonth = (from c in _context.Quote
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate.Value.Year == Ylastyear)
                                     select c.NetAmount).Sum();
                        diffrance = AvegareCount - lastmonth;
                        if (lastmonth == 0) { AvegarePer = AvegareCount; }
                        else { AvegarePer = Math.Round((diffrance * 100 / lastmonth), 2); }
                        if (AvegarePer < 0) { AverageStatus = "warning"; }
                        totalticket = (from c in _context.Quote
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate.Value.Year == Ylastyear)
                                       select c.Id).Count();
                        if (totalticket == 0) { AvegarePerTicket = AvegareCount; }
                        else { AvegarePerTicket = Math.Round((AvegarePer / totalticket), 2); }


                        break;
                    case "MONTH":
                    default:
                        int Mthisyear = DateTime.Today.Year;
                        int Mthismonth = DateTime.Today.Month;
                        int Mlastmonth = DateTime.Today.Month - 1;
                        AvegareCount = (from c in _context.Quote
                                        where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                        && (c.CreatedUtcDate.Value.Year == Mthisyear && c.CreatedUtcDate.Value.Month == Mthismonth)
                                        select c.NetAmount).Sum();
                        lastmonth = (from c in _context.Quote
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate.Value.Year == Mthisyear && c.CreatedUtcDate.Value.Month == Mlastmonth)
                                     select c.NetAmount).Sum();
                        diffrance = AvegareCount - lastmonth;
                        if (lastmonth == 0) { AvegarePer = AvegareCount; }
                        else { AvegarePer = Math.Round((diffrance * 100 / lastmonth), 2); }
                        if (AvegarePer < 0) { AverageStatus = "warning"; Math.Abs(AvegarePer); }
                        totalticket = (from c in _context.Quote
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate.Value.Year == Mthisyear && c.CreatedUtcDate.Value.Month == Mlastmonth)
                                       select c.Id).Count();
                        if (totalticket == 0) { AvegarePerTicket = AvegareCount; }
                        else { AvegarePerTicket = Math.Round((AvegarePer / totalticket), 2); }

                        break;
                    case "WEEK":
                        dateStart = DateTime.Today.AddDays(-6);
                        dateEnd = DateTime.Today.AddDays(1);
                        AvegareCount = (from c in _context.Quote
                                        where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                        && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                        select c.NetAmount).Sum();
                        thismonth = (from c in _context.Quote
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                     select c.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-13);
                        dateEnd = DateTime.Today.AddDays(-6);
                        lastmonth = (from c in _context.Quote
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                     select c.NetAmount).Sum();
                        diffrance = thismonth - lastmonth;
                        if (lastmonth == 0) { AvegarePer = AvegareCount; }
                        else { AvegarePer = Math.Round((diffrance * 100 / lastmonth), 2); }
                        if (AvegarePer < 0) { AverageStatus = "warning"; }
                        totalticket = (from c in _context.Quote
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c.Id).Count();
                        if (totalticket == 0) { AvegarePerTicket = AvegareCount; }
                        else { AvegarePerTicket = Math.Round((AvegarePer / totalticket), 2); }
                        break;
                }
                return StatusCode(200,
                   new
                   {
                       AvegareCount,
                       AvegarePer,
                       AvegarePerTicket,
                       AverageStatus
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}")]
        public ActionResult Total(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                int TotalTicketOpen = 0;
                int TotalTicketTodayNew = 0;
                int TotalTicketClosedToday = 0;
                int TotalTicketOverDue = 0;
                int TotalEngneer = 0;
                var gp = _context.GenicProfile.FirstOrDefault();
                TotalTicketOpen = (from c in _context.Ticket
                                   where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                   where (c.Status == "UPCOMING" || c.Status == "HOLD" || c.Status == "OVERDUE" || c.Status == "INPROGRESS") && c.OneOffScheduled == false
                                   select c).Count();

                dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);

                TotalTicketTodayNew = (from t in _context.Ticket
                                       where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId)
                                       where t.OneOffAppointmentDate != null &&
                                       (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                                t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                                t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                                t.Status == "UPCOMING"
                                       select t).Count();
                TotalTicketClosedToday = (from t in _context.Ticket
                                          where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId)
                                          where t.TicketClosedDate != null &&
                                          (t.TicketClosedDate.Value.Year == dateStart.Date.Year &&
                                    t.TicketClosedDate.Value.Month == dateStart.Date.Month &&
                                    t.TicketClosedDate.Value.Day == dateStart.Date.Day) && t.Status == "CLOSED"
                                          select t).Count();
                TotalTicketOverDue = (from c in _context.Ticket
                                      where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                      where c.Status == "OVERDUE"
                                      select c).Count();
                TotalEngneer = (from c in _context.Engineer select c).Count();

                return StatusCode(200,
                   new
                   {
                       TotalTicketOpen,
                       TotalTicketTodayNew,
                       TotalTicketClosedToday,
                       TotalTicketOverDue,
                       TotalEngneer
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}/{key}")]
        public ActionResult Ticket(Guid token, string key)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                DateTime dateEnd;
                float TicketCount = 0;
                float TicketPer = 0;
                int TicketAll = 0;
                int TicketRecurring = 0;
                double TicketTotalAmount = 0;
                string TicketStatus = "success";
                switch (key)
                {
                    case "YEAR":
                        dateStart = DateTime.Today.AddDays(-365);
                        dateEnd = DateTime.Today.AddDays(1);
                        TicketCount = (from c in _context.Ticket
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        TicketTotalAmount = (from t in _context.Ticket
                                             join cu in _context.Customer on t.CustomerId equals cu.Id
                                             where UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId
                                             && (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                             select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-730);
                        dateEnd = DateTime.Today.AddDays(-365);
                        TicketPer = (from c in _context.Ticket
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd) && c.OneOffScheduled == false
                                     select c).Count();
                        if (TicketPer == 0) { TicketPer = 1; }
                        if (TicketCount < TicketPer) { TicketStatus = "warning"; }
                        TicketPer = (TicketCount / TicketPer) * 100;

                        break;
                    case "MONTH":
                        dateStart = DateTime.Today.AddDays(-30);
                        dateEnd = DateTime.Today.AddDays(1);
                        TicketCount = (from c in _context.Ticket
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        TicketTotalAmount = (from t in _context.Ticket
                                             join cu in _context.Customer on t.CustomerId equals cu.Id
                                             where UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId
                                             && (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                             select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-60);
                        dateEnd = DateTime.Today.AddDays(-30);
                        TicketPer = (from c in _context.Ticket
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd) && c.OneOffScheduled == false
                                     select c).Count();
                        if (TicketPer == 0) { TicketPer = 1; }
                        if (TicketCount < TicketPer) { TicketStatus = "warning"; }
                        TicketPer = (TicketCount / TicketPer) * 100;

                        break;
                    case "WEEK":
                        dateStart = DateTime.Today.AddDays(-7);
                        dateEnd = DateTime.Today.AddDays(1);
                        TicketCount = (from c in _context.Ticket
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        TicketTotalAmount = (from t in _context.Ticket
                                             join cu in _context.Customer on t.CustomerId equals cu.Id
                                             where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId)
                                             && (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                             select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-14);
                        dateEnd = DateTime.Today.AddDays(-7);
                        TicketPer = (from c in _context.Ticket
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd) && c.OneOffScheduled == false
                                     select c).Count();
                        if (TicketPer == 0) { TicketPer = 1; }
                        if (TicketCount < TicketPer) { TicketStatus = "warning"; }
                        TicketPer = (TicketCount / TicketPer) * 100;

                        break;
                    default:
                        dateStart = DateTime.Today.AddDays(-30);
                        dateEnd = DateTime.Today.AddDays(1);
                        TicketCount = (from c in _context.Ticket
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                       && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd)
                                       select c).Count();
                        TicketTotalAmount = (from t in _context.Ticket
                                             join cu in _context.Customer on t.CustomerId equals cu.Id
                                             where (UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId)
                                             && (cu.CreatedUtcDate >= dateStart.Date && cu.CreatedUtcDate <= dateEnd)
                                             select t.NetAmount).Sum();
                        dateStart = DateTime.Today.AddDays(-60);
                        dateEnd = DateTime.Today.AddDays(-30);
                        TicketPer = (from c in _context.Ticket
                                     where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                     && (c.CreatedUtcDate >= dateStart.Date && c.CreatedUtcDate <= dateEnd) && c.OneOffScheduled == false
                                     select c).Count();
                        if (TicketPer == 0) { TicketPer = 1; }
                        if (TicketCount < TicketPer) { TicketStatus = "warning"; }
                        TicketPer = (TicketCount / TicketPer) * 100;
                        break;
                }
                TicketAll = (from c in _context.Ticket where UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId select c).Count();
                TicketRecurring = (from c in _context.Ticket where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && c.TicketType == "Recurring Ticket" select c).Count();
                return StatusCode(200,
                   new
                   {
                       TicketCount,
                       TicketPer,
                       TicketAll,
                       TicketRecurring,
                       TicketTotalAmount,
                       TicketStatus
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}")]
        public ActionResult TicketDue(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                DateTime dateEnd;
                int TicketDueTimeToday = 0;
                int TicketDueTimeTomarrow = 0;
                int TicketDueTimeThisWeek = 0;
                int TicketDueTimeNextWeek = 0;
                int TicketDueTimeNextMonth = 0;

                dateEnd = DateTime.Today;
                TicketDueTimeToday = (from c in _context.Ticket
                                      where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                      && c.OneOffAppointmentDate.Value.Year == dateEnd.Year && c.OneOffAppointmentDate.Value.Month == dateEnd.Month && c.OneOffAppointmentDate.Value.Day == dateEnd.Day && c.Status != "CLOSED"
                                      select c).Count();

                dateEnd = DateTime.Today.AddDays(1);
                TicketDueTimeTomarrow = (from c in _context.Ticket
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                         && c.OneOffAppointmentDate.Value.Year == dateEnd.Year && c.OneOffAppointmentDate.Value.Month == dateEnd.Month && c.OneOffAppointmentDate.Value.Day == dateEnd.Day && c.Status != "CLOSED"
                                         select c).Count();

                dateStart = DateTime.Today;
                dateEnd = DateTime.Today.AddDays(7);
                TicketDueTimeThisWeek = (from c in _context.Ticket
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                         && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd) && c.Status != "CLOSED"
                                         select c).Count();

                dateStart = DateTime.Today.AddDays(8);
                dateEnd = DateTime.Today.AddDays(15);
                TicketDueTimeNextWeek = (from c in _context.Ticket
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                         && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd) && c.Status != "CLOSED"
                                         select c).Count();

                dateStart = DateTime.Today.AddDays(30);
                dateEnd = DateTime.Today.AddDays(60);
                TicketDueTimeNextMonth = (from c in _context.Ticket
                                          where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                          && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd) && c.Status != "CLOSED"
                                          select c).Count();

                return StatusCode(200,
                   new
                   {
                       TicketDueTimeToday,
                       TicketDueTimeTomarrow,
                       TicketDueTimeThisWeek,
                       TicketDueTimeNextWeek,
                       TicketDueTimeNextMonth
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}")]
        public ActionResult TicketColumnChart(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                DateTime dateStart;
                DateTime dateEnd;
                int TicketChartTodayHeigh = 0;
                int TicketChartTodayMedium = 0;
                int TicketChartTodayLow = 0;

                int TicketChartTomarrowHeigh = 0;
                int TicketChartTomarrowMedium = 0;
                int TicketChartTomarrowLow = 0;

                int TicketChartThisWeekHeigh = 0;
                int TicketChartThisWeekMedium = 0;
                int TicketChartThisWeekLow = 0;

                dateStart = DateTime.Today;
                TicketChartTodayHeigh = (from c in _context.Ticket
                                         where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") &&
               c.Priority == 1
                                         select c).Count();
                TicketChartTodayMedium = (from c in _context.Ticket
                                          where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") &&
                 c.Priority == 2
                                          select c).Count();
                TicketChartTodayLow = (from c in _context.Ticket
                                       where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") &&
               c.Priority == 3
                                       select c).Count();

                dateStart = DateTime.Today.AddDays(1);
                TicketChartTomarrowHeigh = (from c in _context.Ticket
                                            where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") &&
                c.Priority == 1
                                            select c).Count();
                TicketChartTomarrowMedium = (from c in _context.Ticket
                                             where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") &&
               c.Priority == 2
                                             select c).Count();
                TicketChartTomarrowLow = (from c in _context.Ticket
                                          where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId) && (
               c.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
               c.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
               c.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
               (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE") && c.Priority == 3
                                          select c).Count();

                dateStart = DateTime.Today.AddDays(1);
                dateEnd = DateTime.Today.AddDays(8);
                TicketChartThisWeekHeigh = (from c in _context.Ticket
                                            where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                            && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd.Date) &&
                  (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE")
                  && c.Priority == 1
                                            select c).Count();
                TicketChartThisWeekMedium = (from c in _context.Ticket
                                             where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                             && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd.Date) &&
                   (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE")
                   && c.Priority == 2
                                             select c).Count();
                TicketChartThisWeekLow = (from c in _context.Ticket
                                          where (UserType.Type == "Admin" ? c.IsReady == true : c.IsReady == true && c.SMTPId == UserType.SMTPId)
                                          && (c.OneOffAppointmentDate >= dateStart.Date && c.OneOffAppointmentDate <= dateEnd.Date) &&
                (c.Status == "UPCOMING" || c.Status == "INPROGRESS" || c.Status == "HOLD" || c.Status == "OVERDUE")
                && c.Priority == 3
                                          select c).Count();

                return StatusCode(200,
                   new
                   {
                       TicketChartTodayHeigh,
                       TicketChartTodayMedium,
                       TicketChartTodayLow,
                       TicketChartTomarrowHeigh,
                       TicketChartTomarrowMedium,
                       TicketChartTomarrowLow,
                       TicketChartThisWeekHeigh,
                       TicketChartThisWeekMedium,
                       TicketChartThisWeekLow
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpGet("[action]/{token}")]
        public ActionResult TicketPieChart(Guid token)
        {
            try
            {
                var UserType = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                var DashboardTicketPieChart = (from t in _context.Ticket
                                               join s in _context.TicketWiseIssueType on t.Id equals s.TicketId
                                               where UserType.Type == "Admin" ? t.IsReady == true : t.IsReady == true && t.SMTPId == UserType.SMTPId
                                               group new { t, s } by new { s.TicketIssueTypeId, s.IssueTypeName }
                                         into grp
                                               select new
                                               {
                                                   Count = grp.Count(),
                                                   grp.Key.TicketIssueTypeId,
                                                   Name = grp.Key.IssueTypeName
                                               }
                                     );
                return StatusCode(200,
                   new
                   {
                       DashboardTicketPieChart
                   });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        #endregion
        #region Engineer
        [HttpGet("[action]/{Eid}")]
        public ActionResult EDTotal(Guid Eid)
        {
            DateTime dateStart;
            int TotalTicket = 0;
            int TotalOpenTicket = 0;
            int TotalNewTicketToday = 0;
            int TotalTicketClosedToday = 0;
            int TotalTicketOverDue = 0;
            int TotalUpcoming = 0;

            var gp = _context.GenicProfile.FirstOrDefault();
            TotalTicket = (from t in _context.Ticket
                           join tt in _context.TicketTeam on t.Id equals tt.TicketId
                           join e in _context.Engineer on tt.EngineerId equals e.Id
                           where t.IsReady == true && t.Status != "CANCELLED" && e.Id == Eid
                           select t).Count();

            TotalOpenTicket = (from t in _context.Ticket
                               join tt in _context.TicketTeam on t.Id equals tt.TicketId
                               join e in _context.Engineer on tt.EngineerId equals e.Id
                               where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "INPROGRESS" || t.Status == "HOLD") && t.Status != "CANCELED" && e.Id == Eid
                               select t).Count();
            dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
            TotalNewTicketToday = (from t in _context.Ticket
                                   join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                   join e in _context.Engineer on tt.EngineerId equals e.Id
                                   where t.IsReady == true && t.OneOffAppointmentDate != null &&
                                   (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                    t.Status == "UPCOMING"
                                   && e.Id == Eid
                                   select t).Count();
            TotalTicketClosedToday = (from t in _context.Ticket
                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                      where t.IsReady == true &&
                                      t.Status == "CLOSED" && t.TicketClosedDate != null &&
                                      (t.TicketClosedDate.Value.Year == dateStart.Date.Year &&
                                    t.TicketClosedDate.Value.Month == dateStart.Date.Month &&
                                    t.TicketClosedDate.Value.Day == dateStart.Date.Day)
                                      && e.Id == Eid
                                      select t).Count();
            TotalTicketOverDue = (from t in _context.Ticket
                                  join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                  join e in _context.Engineer on tt.EngineerId equals e.Id
                                  where t.IsReady == true
                                  && t.Status == "OVERDUE"
                                  && e.Id == Eid
                                  select t).Count();
            TotalUpcoming = (from t in _context.Ticket
                             join tt in _context.TicketTeam on t.Id equals tt.TicketId
                             join e in _context.Engineer on tt.EngineerId equals e.Id
                             where t.IsReady == true
                             && t.Status == "UPCOMING"
                             && t.OneOffAppointmentDate >= dateStart.Date
                             && e.Id == Eid
                             select t).Count();

            return StatusCode(200,
               new
               {
                   TotalTicket,
                   TotalOpenTicket,
                   TotalNewTicketToday,
                   TotalTicketClosedToday,
                   TotalTicketOverDue,
                   TotalUpcoming
               });
        }
        [HttpGet("[action]/{Eid}")]
        public ActionResult EDTicketDue(Guid Eid)
        {
            DateTime dateStart;
            DateTime dateEnd;
            int TicketOverDue = 0;
            int TicketDueTimeToday = 0;
            int TicketDueTimeTomarrow = 0;
            int TicketDueTimeThisWeek = 0;
            int TicketDueTimeNextWeek = 0;
            int TicketDueTimeNextMonth = 0;

            dateStart = DateTime.Today;
            TicketOverDue = (from t in _context.Ticket
                             join tt in _context.TicketTeam on t.Id equals tt.TicketId
                             join e in _context.Engineer on tt.EngineerId equals e.Id
                             where t.IsReady == true && e.Id == Eid
                             && t.Status == "OVERDUE"
                             select t).Count();

            dateEnd = DateTime.Today;
            TicketDueTimeToday = (from t in _context.Ticket
                                  join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                  join e in _context.Engineer on tt.EngineerId equals e.Id
                                  where t.IsReady == true && e.Id == Eid
                                  && t.OneOffAppointmentDate.Value.Year == dateEnd.Year && t.OneOffAppointmentDate.Value.Month == dateEnd.Month && t.OneOffAppointmentDate.Value.Day == dateEnd.Day
                                  && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                  select t).Count();

            dateEnd = DateTime.Today.AddDays(1);
            TicketDueTimeTomarrow = (from t in _context.Ticket
                                     join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                     join e in _context.Engineer on tt.EngineerId equals e.Id
                                     where t.IsReady == true && e.Id == Eid
                                     && t.OneOffAppointmentDate.Value.Year == dateEnd.Year && t.OneOffAppointmentDate.Value.Month == dateEnd.Month && t.OneOffAppointmentDate.Value.Day == dateEnd.Day
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today;
            dateEnd = DateTime.Today.AddDays(7);
            TicketDueTimeThisWeek = (from t in _context.Ticket
                                     join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                     join e in _context.Engineer on tt.EngineerId equals e.Id
                                     where t.IsReady == true && e.Id == Eid
                                     && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today.AddDays(8);
            dateEnd = DateTime.Today.AddDays(15);
            TicketDueTimeNextWeek = (from t in _context.Ticket
                                     join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                     join e in _context.Engineer on tt.EngineerId equals e.Id
                                     where t.IsReady == true && e.Id == Eid
                                     && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today.AddDays(30);
            dateEnd = DateTime.Today.AddDays(60);
            TicketDueTimeNextMonth = (from t in _context.Ticket
                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                      where t.IsReady == true && e.Id == Eid
                                      && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                      && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                      select t).Count();

            return StatusCode(200,
               new
               {
                   TicketOverDue,
                   TicketDueTimeToday,
                   TicketDueTimeTomarrow,
                   TicketDueTimeThisWeek,
                   TicketDueTimeNextWeek,
                   TicketDueTimeNextMonth
               });
        }
        [HttpGet("[action]/{Eid}")]
        public ActionResult EDTicketColumnChart(Guid Eid)
        {
            DateTime dateStart;
            DateTime dateEnd;
            int TicketChartTodayHeigh = 0;
            int TicketChartTodayMedium = 0;
            int TicketChartTodayLow = 0;

            int TicketChartTomarrowHeigh = 0;
            int TicketChartTomarrowMedium = 0;
            int TicketChartTomarrowLow = 0;

            int TicketChartThisWeekHeigh = 0;
            int TicketChartThisWeekMedium = 0;
            int TicketChartThisWeekLow = 0;

            dateStart = DateTime.Today;
            TicketChartTodayHeigh = (from t in _context.Ticket
                                     join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                     join e in _context.Engineer on tt.EngineerId equals e.Id
                                     where t.IsReady == true && e.Id == Eid &&
                                    (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                   t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                   t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                   (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                     t.Priority == 1
                                     select t).Count();
            TicketChartTodayMedium = (from t in _context.Ticket
                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                      where t.IsReady == true && e.Id == Eid &&
                                     (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                    (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                    t.Priority == 2
                                      select t).Count();
            TicketChartTodayLow = (from t in _context.Ticket
                                   join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                   join e in _context.Engineer on tt.EngineerId equals e.Id
                                   where t.IsReady == true && e.Id == Eid &&
                                  (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                 t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                 t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                 (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                 t.Priority == 3
                                   select t).Count();

            dateStart = DateTime.Today.AddDays(1);
            dateEnd = DateTime.Today.AddDays(2);
            TicketChartTomarrowHeigh = (from t in _context.Ticket
                                        join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                        join e in _context.Engineer on tt.EngineerId equals e.Id
                                        where t.IsReady == true && e.Id == Eid &&
                                       (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                      t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                      t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                      (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&

                                      t.Priority == 1
                                        select t).Count();
            TicketChartTomarrowMedium = (from t in _context.Ticket
                                         join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                         join e in _context.Engineer on tt.EngineerId equals e.Id
                                         where t.IsReady == true && e.Id == Eid &&
                                        (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                       t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                       t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                       (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                         t.Priority == 2
                                         select t).Count();
            TicketChartTomarrowLow = (from t in _context.Ticket
                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                      where t.IsReady == true && e.Id == Eid &&
                                     (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                    (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                      t.Priority == 3
                                      select t).Count();

            dateStart = DateTime.Today.AddDays(1);
            dateEnd = DateTime.Today.AddDays(8);
            TicketChartThisWeekHeigh = (from t in _context.Ticket
                                        join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                        join e in _context.Engineer on tt.EngineerId equals e.Id
                                        where t.IsReady == true && e.Id == Eid
                                        && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                        (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                        t.Priority == 1
                                        select t).Count();
            TicketChartThisWeekMedium = (from t in _context.Ticket
                                         join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                         join e in _context.Engineer on tt.EngineerId equals e.Id
                                         where t.IsReady == true && e.Id == Eid
                                         && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                         (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                         t.Priority == 2
                                         select t).Count();
            TicketChartThisWeekLow = (from t in _context.Ticket
                                      join tt in _context.TicketTeam on t.Id equals tt.TicketId
                                      join e in _context.Engineer on tt.EngineerId equals e.Id
                                      where t.IsReady == true && e.Id == Eid
                                      && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                      (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                      t.Priority == 3
                                      select t).Count();

            return StatusCode(200,
               new
               {
                   TicketChartTodayHeigh,
                   TicketChartTodayMedium,
                   TicketChartTodayLow,
                   TicketChartTomarrowHeigh,
                   TicketChartTomarrowMedium,
                   TicketChartTomarrowLow,
                   TicketChartThisWeekHeigh,
                   TicketChartThisWeekMedium,
                   TicketChartThisWeekLow
               });
        }
        [HttpGet("[action]/{Eid}")]
        public ActionResult EDTicketPieChart(Guid Eid)
        {
            var PieChart = (from t in _context.Ticket
                            join s in _context.TicketWiseIssueType on t.Id equals s.TicketId
                            join tt in _context.TicketTeam on t.Id equals tt.TicketId
                            where tt.EngineerId == Eid
                            group new { t, s } by new { s.TicketIssueTypeId, s.IssueTypeName }
                                    into grp
                            select new
                            {
                                Count = grp.Count(),
                                grp.Key.TicketIssueTypeId,
                                Name = grp.Key.IssueTypeName
                            }
                 );
            return StatusCode(200,
               new
               {
                   PieChart
               });
        }
        #endregion
        #region Customer
        [HttpGet("[action]/{CustomerId}")]
        public ActionResult CDTotal(Guid CustomerId)
        {
            DateTime dateStart;
            int TotalTicket = 0;
            int TotalOpenTicket = 0;
            int TotalNewTicketToday = 0;
            int TotalTicketClosedToday = 0;
            int TotalTicketOverDue = 0;
            int TotalUpcoming = 0;

            var gp = _context.GenicProfile.FirstOrDefault();
            TotalTicket = (from t in _context.Ticket
                           where t.IsReady == true && t.Status != "CANCELLED" && t.CustomerId == CustomerId
                           select t).Count();

            TotalOpenTicket = (from t in _context.Ticket
                               where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "INPROGRESS" || t.Status == "HOLD") && t.Status != "CANCELED" && t.CustomerId == CustomerId
                               select t).Count();
            dateStart = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, gp.TimeZone);
            TotalNewTicketToday = (from t in _context.Ticket
                                   where t.IsReady == true &&
                                   (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day)
                                   && t.Status != "CANCELLED"
                                   && t.CustomerId == CustomerId && t.OneOffAppointmentDate != null
                                   select t).Count();
            TotalTicketClosedToday = (from t in _context.Ticket
                                      where t.IsReady == true
                                      && t.Status == "CLOSED"
                                      && (t.TicketClosedDate.Value.Year == dateStart.Date.Year &&
                                    t.TicketClosedDate.Value.Month == dateStart.Date.Month &&
                                    t.TicketClosedDate.Value.Day == dateStart.Date.Day)
                                      && t.CustomerId == CustomerId
                                      select t).Count();
            TotalTicketOverDue = (from t in _context.Ticket
                                  where t.IsReady == true
                                  && t.Status == "OVERDUE"
                                  && t.CustomerId == CustomerId
                                  select t).Count();
            TotalUpcoming = (from t in _context.Ticket
                             where t.IsReady == true
                             && t.Status == "UPCOMING"
                             && t.OneOffAppointmentDate >= dateStart.Date
                             && t.CustomerId == CustomerId
                             select t).Count();

            return StatusCode(200,
               new
               {
                   TotalTicket,
                   TotalOpenTicket,
                   TotalNewTicketToday,
                   TotalTicketClosedToday,
                   TotalTicketOverDue,
                   TotalUpcoming
               });
        }
        [HttpGet("[action]/{CustomerId}")]
        public ActionResult CDTicketDue(Guid CustomerId)
        {
            DateTime dateStart;
            DateTime dateEnd;
            int TicketOverDue = 0;
            int TicketDueTimeToday = 0;
            int TicketDueTimeTomarrow = 0;
            int TicketDueTimeThisWeek = 0;
            int TicketDueTimeNextWeek = 0;
            int TicketDueTimeNextMonth = 0;

            dateStart = DateTime.Today;
            TicketOverDue = (from t in _context.Ticket
                             where t.IsReady == true && t.CustomerId == CustomerId
                             && t.Status == "OVERDUE"
                             select t).Count();

            dateEnd = DateTime.Today;
            TicketDueTimeToday = (from t in _context.Ticket
                                  where t.IsReady == true && t.CustomerId == CustomerId
                                  && t.OneOffAppointmentDate.Value.Year == dateEnd.Year && t.OneOffAppointmentDate.Value.Month == dateEnd.Month && t.OneOffAppointmentDate.Value.Day == dateEnd.Day
                                  && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                  select t).Count();

            dateEnd = DateTime.Today.AddDays(1);
            TicketDueTimeTomarrow = (from t in _context.Ticket
                                     where t.IsReady == true && t.CustomerId == CustomerId
                                     && t.OneOffAppointmentDate.Value.Year == dateEnd.Year && t.OneOffAppointmentDate.Value.Month == dateEnd.Month && t.OneOffAppointmentDate.Value.Day == dateEnd.Day
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today;
            dateEnd = DateTime.Today.AddDays(7);
            TicketDueTimeThisWeek = (from t in _context.Ticket
                                     where t.IsReady == true && t.CustomerId == CustomerId
                                     && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today.AddDays(8);
            dateEnd = DateTime.Today.AddDays(15);
            TicketDueTimeNextWeek = (from t in _context.Ticket
                                     where t.IsReady == true && t.CustomerId == CustomerId
                                     && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                     && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                     select t).Count();

            dateStart = DateTime.Today.AddDays(30);
            dateEnd = DateTime.Today.AddDays(60);
            TicketDueTimeNextMonth = (from t in _context.Ticket
                                      where t.IsReady == true && t.CustomerId == CustomerId
                                      && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd)
                                      && (t.Status == "UPCOMING" || t.Status != "HOLD" || t.Status != "INPROGRESS" || t.Status != "OVERDUE")
                                      select t).Count();

            return StatusCode(200,
               new
               {
                   TicketOverDue,
                   TicketDueTimeToday,
                   TicketDueTimeTomarrow,
                   TicketDueTimeThisWeek,
                   TicketDueTimeNextWeek,
                   TicketDueTimeNextMonth
               });
        }
        [HttpGet("[action]/{CustomerId}")]
        public ActionResult CDTicketColumnChart(Guid CustomerId)
        {
            DateTime dateStart;
            DateTime dateEnd;
            int TicketChartTodayHeigh = 0;
            int TicketChartTodayMedium = 0;
            int TicketChartTodayLow = 0;

            int TicketChartTomarrowHeigh = 0;
            int TicketChartTomarrowMedium = 0;
            int TicketChartTomarrowLow = 0;

            int TicketChartThisWeekHeigh = 0;
            int TicketChartThisWeekMedium = 0;
            int TicketChartThisWeekLow = 0;

            dateStart = DateTime.Today;
            TicketChartTodayHeigh = (from t in _context.Ticket
                                     where t.IsReady == true && t.CustomerId == CustomerId &&
                                    (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                   t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                   t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                   (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                     t.Priority == 1
                                     select t).Count();
            TicketChartTodayMedium = (from t in _context.Ticket
                                      where t.IsReady == true && t.CustomerId == CustomerId &&
                                     (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                    (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                    t.Priority == 2
                                      select t).Count();
            TicketChartTodayLow = (from t in _context.Ticket
                                   where t.IsReady == true && t.CustomerId == CustomerId &&
                                  (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                 t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                 t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                 (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                 t.Priority == 3
                                   select t).Count();

            dateStart = DateTime.Today.AddDays(1);
            dateEnd = DateTime.Today.AddDays(2);
            TicketChartTomarrowHeigh = (from t in _context.Ticket
                                        where t.IsReady == true && t.CustomerId == CustomerId &&
                                       (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                      t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                      t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                      (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&

                                      t.Priority == 1
                                        select t).Count();
            TicketChartTomarrowMedium = (from t in _context.Ticket
                                         where t.IsReady == true && t.CustomerId == CustomerId &&
                                        (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                       t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                       t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                       (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                         t.Priority == 2
                                         select t).Count();
            TicketChartTomarrowLow = (from t in _context.Ticket
                                      where t.IsReady == true && t.CustomerId == CustomerId &&
                                     (t.OneOffAppointmentDate.Value.Year == dateStart.Date.Year &&
                                    t.OneOffAppointmentDate.Value.Month == dateStart.Date.Month &&
                                    t.OneOffAppointmentDate.Value.Day == dateStart.Date.Day) &&
                                    (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                      t.Priority == 3
                                      select t).Count();

            dateStart = DateTime.Today.AddDays(1);
            dateEnd = DateTime.Today.AddDays(8);
            TicketChartThisWeekHeigh = (from t in _context.Ticket
                                        where t.IsReady == true && t.CustomerId == CustomerId
                                        && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                        (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                        t.Priority == 1
                                        select t).Count();
            TicketChartThisWeekMedium = (from t in _context.Ticket
                                         where t.IsReady == true && t.CustomerId == CustomerId
                                         && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                         (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                         t.Priority == 2
                                         select t).Count();
            TicketChartThisWeekLow = (from t in _context.Ticket
                                      where t.IsReady == true && t.CustomerId == CustomerId
                                      && (t.OneOffAppointmentDate >= dateStart.Date && t.OneOffAppointmentDate <= dateEnd) &&
                                      (t.Status == "UPCOMING" || t.Status == "INPROGRESS" || t.Status == "HOLD" || t.Status == "OVERDUE") &&
                                      t.Priority == 3
                                      select t).Count();

            return StatusCode(200,
               new
               {
                   TicketChartTodayHeigh,
                   TicketChartTodayMedium,
                   TicketChartTodayLow,
                   TicketChartTomarrowHeigh,
                   TicketChartTomarrowMedium,
                   TicketChartTomarrowLow,
                   TicketChartThisWeekHeigh,
                   TicketChartThisWeekMedium,
                   TicketChartThisWeekLow
               });
        }
        [HttpGet("[action]/{CustomerId}")]
        public ActionResult CDTicketPieChart(Guid CustomerId)
        {
            var PieChart = (from t in _context.Ticket
                            join s in _context.TicketWiseIssueType on t.Id equals s.TicketId
                            where t.CustomerId == CustomerId
                            group new { t, s } by new { s.TicketIssueTypeId, s.IssueTypeName }
                                    into grp
                            select new
                            {
                                Count = grp.Count(),
                                grp.Key.TicketIssueTypeId,
                                Name = grp.Key.IssueTypeName
                            }
                 );
            return StatusCode(200,
               new
               {
                   PieChart
               });
        }
        #endregion

        #region Ticket header Count
        [HttpGet("[action]/{token}")]
        public ActionResult GetTicketHeaderCount(Guid token)
        {
            try
            {
                var UserDetails = (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserDetails != null)
                {
                    var result = new object();
                    #region Customer
                    if (UserDetails.Type == "Customer")
                    {
                        int OpenTicket = 0;
                        int ClosedTicket = 0;
                        int OverDueTicket = 0;
                        OpenTicket = (from t in _context.Ticket where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "INPROGRESS" || t.Status == "HOLD") && t.Status != "CANCELED" && t.CustomerId == UserDetails.Id select t.Id).Count();
                        ClosedTicket = (from t in _context.Ticket where t.IsReady == true && t.Status == "CLOSED" && t.CustomerId == UserDetails.Id select t.Id).Count();
                        OverDueTicket = (from t in _context.Ticket where t.IsReady == true && t.Status == "OVERDUE" && t.CustomerId == UserDetails.Id select t.Id).Count();
                        return StatusCode(200, new { OpenTicket, ClosedTicket, OverDueTicket });
                    }
                    #endregion
                    #region Engineer
                    if (UserDetails.Type == "Engineer")
                    {
                        int OpenTicket = 0;
                        int ClosedTicket = 0;
                        int OverDueTicket = 0;
                        OpenTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && (t.Status == "UPCOMING" || t.Status == "OVERDUE" || t.Status == "INPROGRESS" || t.Status == "HOLD") && t.Status != "CANCELED" && tt.EngineerId == UserDetails.Id select t.Id).Count();
                        ClosedTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && t.Status == "CLOSED" && tt.EngineerId == UserDetails.Id select t.Id).Count();
                        OverDueTicket = (from t in _context.Ticket join tt in _context.TicketTeam on t.Id equals tt.TicketId where t.IsReady == true && t.Status == "OVERDUE" && tt.EngineerId == UserDetails.Id select t.Id).Count();
                        return StatusCode(200, new { OpenTicket, ClosedTicket, OverDueTicket });
                    }
                    #endregion
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
    }
}
