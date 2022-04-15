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
    public class SMTPSettingsController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        private object obj;
        public SMTPSettingsController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        [HttpGet("{Token}")]
        public async Task<ActionResult<SMTPSettings>> Get(Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token);
                if (IsTokenValid)
                {
                    var UserType = (from l in _context.Login where l.Token == Token select l).FirstOrDefault();
                    var result = await _context.SMTPSettings.
                        Where(s => UserType.Type == "Admin" ? s.Id != 0 : s.Id == UserType.SMTPId)
                        .ToListAsync();
                    foreach (var item in result)
                    {
                        item.SMTPPassword = "";
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
                return StatusCode(203, obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{Id}/{Token}")]
        public async Task<ActionResult<SMTPSettings>> GetSMTPDetaildById(int Id, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    if (!SMTPSettingsExists(Id))
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Not found" };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        var sMTPSettings = await _context.SMTPSettings.Where(x => x.Id == Id).FirstOrDefaultAsync();
                        sMTPSettings.SMTPPassword = "";
                        obj = new { result = sMTPSettings, Message = "success", MessageDescription = "success" };
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }

        [HttpDelete("[action]/{Id}/{Token}")]
        public async Task<ActionResult<SMTPSettings>> RemoveSMTPDetailsById(int Id, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    if (!SMTPSettingsExists(Id))
                    {
                        obj = new { result = "", Message = "failure", MessageDescription = "Not found" };
                        return StatusCode(200, obj);
                    }
                    else
                    {
                        var sMTPSettings = await _context.SMTPSettings.Where(x => x.Id == Id).FirstOrDefaultAsync();
                        _context.SMTPSettings.Remove(sMTPSettings);
                        await _context.SaveChangesAsync();
                        obj = new { result = "", Message = "success", MessageDescription = "removed successfully" };
                        return StatusCode(200, obj);
                    }
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPut("{Token}")]
        public async Task<IActionResult> PutSMTPSettings(SMTPSettings sMTPSettings, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    _context.Entry(sMTPSettings).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    obj = new { result = "", Message = "success", MessageDescription = "Updated successfully" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (DbUpdateConcurrencyException ee)
            {
                if (!SMTPSettingsExists(sMTPSettings.Id))
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Not found" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = ee.Message.ToString() };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }
        [HttpPost("{Token}")]
        public async Task<ActionResult<SMTPSettings>> Post(SMTPSettings sMTPSettings, Guid Token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == Token && x.Type == "Admin");
                if (IsTokenValid)
                {
                    _context.SMTPSettings.Add(sMTPSettings);
                    await _context.SaveChangesAsync();
                    obj = new { result = "", Message = "success", MessageDescription = "SMTP Settings Inserted Successfully" };
                    return StatusCode(200, obj);
                }
                else
                {
                    obj = new { result = "", Message = "failure", MessageDescription = "Token Expired" };
                    return StatusCode(200, obj);
                }
            }
            catch (Exception ex)
            {
                obj = new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() };
                return StatusCode(200, obj);
            }
        }

        private bool SMTPSettingsExists(int id)
        {
            return _context.SMTPSettings.Any(e => e.Id == id);
        }
    }
}
