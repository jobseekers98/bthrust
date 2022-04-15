using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace GenicSolution.Entities.SMTPThread
{
    public class ExecuteLogs : ControllerBase
    {
        public ExecuteLogs(UserLog obj, EntityFrameworkDbContext _context)
        {   
            try
            {
                string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                obj.CreatedDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.LogDate = GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone);
                obj.Id = Guid.NewGuid();
                _context.UserLog.Add(obj);
                _context.SaveChanges();
            }
            catch { }
        }
    }
}
