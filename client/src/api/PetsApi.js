import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7245/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPets = () => apiClient.get('/Pets');
export const addPet = (pet) => apiClient.post('/Pets', pet);
export const getPetTypes = () => apiClient.get('/Pets/pettypes');