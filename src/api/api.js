// api.js

import axios from 'axios';

// Create an instance of Axios with default configurations
const instance = axios.create({
  baseURL: 'https://hackout23-xvte.onrender.com', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json', // You can set default headers here
  },
});

export default instance;
