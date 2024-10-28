import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/personal-info', formData);
    console.log('Data submitted:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};
