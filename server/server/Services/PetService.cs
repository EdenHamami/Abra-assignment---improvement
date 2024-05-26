using server.Models;
using server.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services
{
    public class PetService : IPetService
    {
        private readonly IPetRepository _petRepository;

        public PetService(IPetRepository petRepository)
        {
            _petRepository = petRepository;
        }

        public async Task<IEnumerable<Pet>> GetAllPetsAsync()
        {
            return await _petRepository.GetAllPetsAsync();
        }

        public async Task<Pet> GetPetByIdAsync(string id)
        {
            return await _petRepository.GetPetByIdAsync(id);
        }

        public async Task CreatePetAsync(Pet pet)
        {
            if (pet.Name.Length > 25)
            {
                throw new ArgumentException("Pet name can be up to 25 characters long.");
            }

            if (pet.Age > 20)
            {
                throw new ArgumentException("Pet age can be up to 20.");
            }

            if (!Enum.IsDefined(typeof(PetType), pet.PetType))
            {
                throw new ArgumentException("Invalid pet type.");
            }

            await _petRepository.CreatePetAsync(pet);
        }

        public async Task UpdatePetAsync(string id, Pet pet)
        {
            if (pet.Name.Length > 25)
            {
                throw new ArgumentException("Pet name can be up to 25 characters long.");
            }

            if (pet.Age > 20)
            {
                throw new ArgumentException("Pet age can be up to 20.");
            }

            if (!Enum.IsDefined(typeof(PetType), pet.PetType))
            {
                throw new ArgumentException("Invalid pet type.");
            }

            await _petRepository.UpdatePetAsync(id, pet);
        }

        public async Task DeletePetAsync(string id)
        {
            await _petRepository.DeletePetAsync(id);
        }

        public async Task<int> GetSumOfAgesAsync()
        {
            return await _petRepository.GetSumOfAgesAsync();
        }
    }
}
