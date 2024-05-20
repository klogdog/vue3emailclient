import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3001/api', // Ensure this is correct
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
