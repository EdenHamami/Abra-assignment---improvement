using MongoDB.Driver;
using server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Repositories
{
    public class PetRepository : IPetRepository
    {
        private readonly IMongoCollection<Pet> _pets;

        public PetRepository(ApplicationContext context)
        {
            _pets = context.Pets;
        }

        public async Task<IEnumerable<Pet>> GetAllPetsAsync()
        {
            return await _pets.Find(pet => true).ToListAsync();
        }

        public async Task<Pet> GetPetByIdAsync(string id)
        {
            return await _pets.Find<Pet>(pet => pet.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreatePetAsync(Pet pet)
        {
            await _pets.InsertOneAsync(pet);
        }

        public async Task UpdatePetAsync(string id, Pet pet)
        {
            await _pets.ReplaceOneAsync(p => p.Id == id, pet);
        }

        public async Task DeletePetAsync(string id)
        {
            await _pets.DeleteOneAsync(pet => pet.Id == id);
        }

        public async Task<int> GetSumOfAgesAsync()
        {
            var pets = await _pets.Find(_ => true).ToListAsync();
            int total = pets.Sum(p => p.Age);
            return total;
        }
    }
}
