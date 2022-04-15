using GenicSolution.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketEquipmentController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        [Obsolete]
        public TicketEquipmentController(EntityFrameworkDbContext context)
        {
            _context = context;
        }


        #region Ticket Equipment Master
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult> PostEMMasterData(TicketEquipmentMasterData fwmasterdata, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    if (_context.TicketEquipmentMasterData.Any(b => b.Name == fwmasterdata.Name))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = fwmasterdata.Name + " is already exists" });
                    }
                    else
                    {
                        _context.TicketEquipmentMasterData.Add(fwmasterdata);
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.TicketEquipmentMasterData select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(201, new { result, Message = "success", MessageDescription = fwmasterdata.Name + " Worker added successfully" });
                    }
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
        public async Task<ActionResult> PutEMMasterData(TicketEquipmentMasterData fwmasterdata, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    if (_context.TicketEquipmentMasterData.Any(b => b.Name == fwmasterdata.Name && b.Id != fwmasterdata.Id))
                    {
                        return StatusCode(206, new { result = "", Message = "failure", MessageDescription = fwmasterdata.Name + " is already exists" });
                    }
                    else
                    {
                        var previousdata = (from i in _context.TicketEquipmentMasterData where i.Id == fwmasterdata.Id select i).FirstOrDefault();
                        previousdata.Name = fwmasterdata.Name;
                        _context.Entry(previousdata).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.TicketEquipmentMasterData select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(202, new { result, Message = "success", MessageDescription = fwmasterdata.Name + " is Updated successfully" });
                    }
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
        public async Task<ActionResult> GetEMMasterData(Guid token)
        {
            try
            {
                var UserType = await (from l in _context.Login where l.Token == token select l).FirstOrDefaultAsync();
                if (UserType != null)
                {
                    if (UserType.Type == "Engineer")
                    {
                        var result = await (from i in _context.TicketEquipmentMasterData where i.IsActive == true select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
                    else
                    {
                        var result = await (from i in _context.TicketEquipmentMasterData select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(200, new { result, Message = "success", MessageDescription = "success" });
                    }
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
        [HttpPut("[action]/{token}/{Id}")]
        public async Task<IActionResult> PutEMMasterDataStatus(Guid token, int Id)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var fwmasterdata = await (from c in _context.TicketEquipmentMasterData where c.Id == Id select c).FirstOrDefaultAsync();
                if (fwmasterdata.IsActive) { fwmasterdata.IsActive = false; }
                else { fwmasterdata.IsActive = true; }
                _context.Entry(fwmasterdata).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return StatusCode(200, new { result = "", Message = "success", MessageDescription = "Update successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        #endregion

        #region Ticket Equipment
        [HttpPost("[action]/{token}")]
        public async Task<ActionResult> PostTicketEquipmentData(TicketEquipment _obj, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    if (_context.TicketEquipment.Any(b => b.Name == _obj.Name && b.Remark == _obj.Remark && b.TicketId == _obj.TicketId))
                    {
                        var preciousDetails = (from s in _context.TicketEquipment where s.Name == _obj.Name && s.TicketId == _obj.TicketId select s).FirstOrDefault();
                        preciousDetails.Quantity = preciousDetails.Quantity + _obj.Quantity;
                        _context.Entry(preciousDetails).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.TicketEquipment where i.TicketId == _obj.TicketId select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(202, new { result, Message = "success", MessageDescription = _obj.Name + " update successfully" });
                    }
                    else
                    {
                        _context.TicketEquipment.Add(_obj);
                        await _context.SaveChangesAsync();
                        var result = await (from i in _context.TicketEquipment where i.TicketId == _obj.TicketId select i).OrderByDescending(i => i.Id).ToListAsync();
                        return StatusCode(201, new { result, Message = "success", MessageDescription = _obj.Name + " added successfully" });
                    }
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
        public async Task<ActionResult> PutTicketEquipmentData(TicketEquipment _obj, Guid token)
        {
            try
            {
                bool IsTokenValid = await _context.Login.AnyAsync(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (IsTokenValid)
                {
                    var previousdata = (from i in _context.TicketEquipment where i.Id == _obj.Id select i).FirstOrDefault();
                    string timeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
                    previousdata.Name = _obj.Name;
                    previousdata.Remark = _obj.Remark;
                    previousdata.Quantity = _obj.Quantity;
                    _context.Entry(previousdata).State = EntityState.Modified;
                    await _context.SaveChangesAsync();
                    var result = await (from i in _context.TicketEquipment where i.TicketId == _obj.TicketId select i).OrderByDescending(i => i.Id).ToListAsync();
                    return StatusCode(202, new { result, Message = "success", MessageDescription = _obj.Name + " is Updated successfully" });
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
        [HttpGet("[action]/{token}/{ticketId}")]
        public ActionResult GetTicketEquipmentDataList(Guid token, Guid ticketId)
        {
            try
            {
                var UserType =  (from l in _context.Login where l.Token == token select l).FirstOrDefault();
                if (UserType != null)
                {
                    var result =  (from i in _context.TicketEquipment where i.TicketId == ticketId select i).OrderByDescending(i => i.Id).ToList();
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
        [HttpDelete("[action]/{token}/{Id}/{ticketId}")]
        public async Task<IActionResult> DeleteTicketEquipmentData(Guid token, int Id, Guid ticketId)
        {
            try
            {
                bool IsTokenValid = _context.Login.Any(x => x.Token == token && (x.Type == "Admin" || x.Type == "SubAdmin"));
                if (!IsTokenValid)
                {
                    return StatusCode(206, new { result = "", Message = "failure", MessageDescription = "Token Expired" });
                }
                var _obj = await (from c in _context.TicketEquipment where c.Id == Id && c.TicketId == ticketId select c).FirstOrDefaultAsync();
                _context.Remove(_obj);
                await _context.SaveChangesAsync();
                var result = await (from i in _context.TicketEquipment where i.TicketId == ticketId select i).OrderByDescending(i => i.Id).ToListAsync();
                return StatusCode(202, new { result, Message = "success", MessageDescription = "Remove successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(203, new { result = "", Message = "failure", MessageDescription = ex.Message.ToString() });
            }
        }
        [HttpGet("[action]/{token}")]
        public async Task<ActionResult> GetEMForSelect2Dropdown(Guid token, [FromQuery] string q)
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
                                         items = (from p in _context.TicketEquipmentMasterData
                                                  where p.IsActive == true
                                                  where p.Name.Contains(searchStr)
                                                  select new
                                                  {
                                                      id = p.Id,
                                                      name = searchStr,
                                                      description = "",
                                                      text = p.Name,
                                                      full_name = p.Name,
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
        #endregion
    }
}
