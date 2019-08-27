using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EZStayAdminAPI.Helper;
using EZStayAdminAPI.Infrastructure;
using EZStayAdminAPI.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace EZStayAdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private HotelDbContext db;
        IConfiguration configuration;

        public HotelController(HotelDbContext dbContext, IConfiguration config)
        {
            this.db = dbContext;
            this.configuration = config;
        }

        //GET /api/hotels
        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [AllowAnonymous]
        public ActionResult<IEnumerable<HotelInfo>> GetHotels()
        {
            return db.Hotels.Include(i=>i.Rooms).ThenInclude(t=>t.Amenities).ToList();
        }

        //GET /api/hotels/Pune
        [HttpGet("{city}", Name = "GetHotelByCity")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [AllowAnonymous]
        public ActionResult<HotelInfo> GetHotelsByCity(string city)
        {

            var item = db.Hotels.Where(b => b.City.Equals(city, StringComparison.OrdinalIgnoreCase))
                .Include(i => i.Rooms).ThenInclude(t => t.Amenities).ToList();

            if (item != null)
                return Ok(item);
            else
                return NotFound();
        }

        //POST /api/hotels
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<HotelInfo>> AddHotelAsync(HotelInfo model)
        {
            TryValidateModel(model);
            if (ModelState.IsValid)
            {
                // Save hotel image to azure stoarge - blob
                
                StorageHelper storageHelper = new StorageHelper();
                storageHelper.ConnectionString = configuration.GetConnectionString("StorageConnection");

                //save customer image to azure blob and get back url and stored in sql db
                
                var imageUrl = await storageHelper.UploadHotelImageAsync("ezstayhotels", model.HotelPhotoUrl);

                model.HotelPhotoUrl = imageUrl;

                var result = await db.Hotels.AddAsync(model);
                await db.SaveChangesAsync();
                
                return CreatedAtRoute("GetHotelBycity", new { city = result.Entity.City }, result.Entity);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


    }
}