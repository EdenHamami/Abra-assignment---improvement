// src/pages/AddPet.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Select from '../components/Select';
import CustomButton from '../components/CustomButton';
import { getPetTypes, addPet } from '../api/PetsApi';
import './AddPet.css';

function AddPet() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    color: '#B4A486',
    age: '',
  });
  const [petTypes, setPetTypes] = useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetTypes = async () => {
      const response = await getPetTypes();
      setPetTypes(response.data);
    };

    fetchPetTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await addPet(formData);
    setIsLoading(false)
    navigate('/pets');
  };
  if(isLoading){
    return(<div>loading...</div>)
  }

  return (
    <div className="addPet-page">
      <div className="addPet-container">
        <div className="addPet-content">
          <h2>Add a New Pet</h2>
          <form onSubmit={handleSubmit} className="addPet-form">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength="25"
              required
            />
            <Select
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={petTypes}
              required
            />
            <Input
              label="Color"
              name="color"
              type="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <Input
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="20"
              required
            />
            <CustomButton type="submit">Add Pet</CustomButton>
          </form>
        </div>
        <div className="addPet-image">
          <img src="https://images.pexels.com/photos/5264090/pexels-photo-5264090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pets" />
        </div>
      </div>
    </div>
  );
}

export default AddPet;
