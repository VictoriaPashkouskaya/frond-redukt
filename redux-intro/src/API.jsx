import axios from 'axios';

const API_URL = 'http://localhost:3000/api/register'; 

// Register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};


