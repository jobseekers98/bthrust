using GenicSolution.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace GenicSolution.Controllers
{
    [Route("[controller]")]
    [Controller]
    public class AuthenticationServiceController : Controller
    {
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        public AuthenticationServiceController(EntityFrameworkDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }
        [HttpGet("[action]/{token}")]
        public IActionResult Engineer(Guid token)
        {
            var login = (from c in _context.Login where c.Token == token && c.TokenVerified == false select c).FirstOrDefault();
            if (login == null)
            {
                ViewBag.IsValid = false;
            }
            else
            {
                login.TokenVerified = true;
                _context.SaveChangesAsync();
                var engineer = (from c in _context.Engineer where c.Id == login.Id select c).FirstOrDefault();
                //MailSettings mail = new MailSettings(_context, _hostingEnvironment);
                //mail.NewEngineerPasswordSend(login, engineer);
                ViewBag.email = login.UserName;
                ViewBag.IsValid = true;
            }
            return View(ViewBag);
        }
    }
}