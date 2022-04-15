using GenicSolution.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GenicSolution.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenicZoneController : ControllerBase
    {
        private readonly EntityFrameworkDbContext _context;
        public GenicZoneController(EntityFrameworkDbContext context)
        {
            _context = context;
        }
        [HttpGet("[action]")]
        public ActionResult<IEnumerable<GenicZone>> GetGenicZone()
        {
            try
            {
                var result = (from c in _context.GenicZone orderby c.ZoneName ascending select c).ToList();
                if (result != null)
                {
                    foreach (var r in result)
                    {
                        r.ZoneCoordinatesList = (from z in _context.ZoneCoordinates where z.ZoneId == r.ZoneId select z).ToList();
                    }
                    return result;
                }
                else
                {
                    return StatusCode(404, "Not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPost("[action]")]
        public ActionResult postGenicZone(GenicZone obj)
        {
            try
            {
                if (_context.GenicZone.Any(b => b.ZoneName == obj.ZoneName))
                {
                    return StatusCode(208, "Zone already exists!");
                }
                else
                {
                    _context.GenicZone.Add(obj);
                    _context.SaveChanges();
                    return StatusCode(201, "Zone added successfully.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        [HttpPut("[action]/{zoneId}/{Status}")]
        public IActionResult updateZoneStatus(int zoneId, bool Status)
        {
            var result = (from z in _context.GenicZone where z.ZoneId == zoneId select z).FirstOrDefault();
            if (result != null)
            {
                try
                {
                    result.IsActive = Status;
                    _context.Entry(result).State = EntityState.Modified;
                    _context.SaveChanges();
                    return StatusCode(202);
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {
                    return StatusCode(500);
                }
            }
            else
            {
                return StatusCode(404);
            }

        }
        [HttpDelete("[Action]/{zoneId}")]
        public ActionResult removeGenicZone(int zoneId)
        {
            var genicZone = _context.GenicZone.Where(f => f.ZoneId == zoneId).FirstOrDefault();
            if (genicZone != null)
            {
                try
                {
                    _context.GenicZone.Remove(genicZone);
                    _context.SaveChanges();
                    return StatusCode(201, "Zone removed successfully.");
                }
                catch (Exception)
                {
                    return StatusCode(501, "Something went wrong");
                }
            }
            else
            {
                return NotFound();
            }
        }

        //Get : Engineer wise Genic zone
        [HttpGet("[action]/{EngineerId}")]
        public ActionResult<IEnumerable<GenicZone>> GetEngineerWiseZone(Guid? EngineerId)
        {
            try
            {
                var ZoneResult = (from z in _context.GenicZone orderby z.ZoneName ascending select z).ToList();
                if (ZoneResult != null)
                {
                    foreach (var r in ZoneResult)
                    {
                        r.ZoneCoordinatesList = (from p in _context.ZoneCoordinates where p.ZoneId == r.ZoneId select p).ToList();
                        var uu = (from e in _context.EngineerWiseZone where e.ZoneId == r.ZoneId && e.EngineerId == EngineerId select e).FirstOrDefault();
                        if (uu != null)
                        {
                            r.IsAssigned = true;
                        }
                        else
                        {
                            r.IsAssigned = false;
                        }
                    }
                    return ZoneResult;
                }
                else
                {
                    return StatusCode(404, "Not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message.ToString());
            }
        }
        //[HttpGet("[action]/{EngineerId}")]
        //public ActionResult <IEnumerable<Object>> getZipCodeList(Guid? EngineerId)
        //{
        //    string TimeZone = (from c in _context.GenicProfile select c.TimeZone).FirstOrDefault();
        //    var AssignTicketList = (from t in _context.TicketTeam where t.EngineerId == EngineerId && t.TicketAssignDate >= GlobalParameters.GetSingaporeTimeZone(DateTime.UtcNow, TimeZone) select t.TicketId).ToList();
        //    string[] ProperyList;
        //    foreach(var a in AssignTicketList)
        //    {
        //       ProperyList.Add(from tt in _context.Ticket where tt.Id == a select tt.PropertyId).ToList());
        //    }
        //    return TicketList;
        //}
        //check and validate to remove zone from engineer
        //[HttpPost("[action]")]
        //public ActionResult validateZoneToRemoveFromEngineer(Guid? EngineerId, int ZoneId)
        //{
        //    try
        //    { 

        //    }
        //    catch(Exception ex)
        //    {

        //    }
        //}
    }
}