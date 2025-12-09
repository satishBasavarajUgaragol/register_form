// Test script to verify MongoDB data storage
const axios = require('axios');

// Sample registration data
const testData = {
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  email: "john.doe@example.com",
  address: "123 Main St",
  city: "New York",
  dateOfBirth: "1990-01-01"
};

async function testRegistration() {
  try {
    console.log('Sending registration data:', testData);
    const response = await axios.post('http://localhost:5000/api/register', testData);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testRegistration();