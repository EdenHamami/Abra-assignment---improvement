using server.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Repositories
{
    public interface IPetRepository
    {
        Task<IEnumerable<Pet>> GetAllPetsAsync();
        Task<Pet> GetPetByIdAsync(string id);
        Task CreatePetAsync(Pet pet);
        Task UpdatePetAsync(string id, Pet pet);
        Task DeletePetAsync(string id);
        Task<int> GetSumOfAgesAsync();
    }
}
