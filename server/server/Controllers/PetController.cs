using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PetsController : ControllerBase
    {
        private readonly IPetService _petService;

        public PetsController(IPetService petService)
        {
            _petService = petService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pet>>> GetAllPets()
        {
            var pets = await _petService.GetAllPetsAsync();
            return Ok(pets);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pet>> GetPetById(string id)
        {
            var pet = await _petService.GetPetByIdAsync(id);
            if (pet == null)
            {
                return NotFound();
            }
            return Ok(pet);
        }

        [HttpPost]
        public async Task<ActionResult> CreatePet(Pet pet)
        {
            pet.Id = null;
            try
            {
                await _petService.CreatePetAsync(pet);
                return CreatedAtAction(nameof(GetPetById), new { id = pet.Id }, pet);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatePet(string id, Pet pet)
        {
            try
            {
                await _petService.UpdatePetAsync(id, pet);
                return NoContent();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePet(string id)
        {
            await _petService.DeletePetAsync(id);
            return NoContent();
        }

        [HttpGet("sumOfAges")]
        public async Task<ActionResult<int>> GetSumOfAges()
        {
            var sumOfAges = await _petService.GetSumOfAgesAsync();
            return Ok(sumOfAges);
        }
        [HttpGet("pettypes")]
        public ActionResult<IEnumerable<string>> GetPetTypes()
        {
            var petTypes = Enum.GetNames(typeof(PetType));
            return Ok(petTypes);
        }
    }
}
