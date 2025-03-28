import axios from 'axios';
import { EV_ENERGY_API_URL } from './config';

const MOCK_RESPONSE = {
  success: true,
  message: 'Mock Charging session started successfully.',
};

// Axios Instance with Interceptors
const axiosInstance = axios.create({
  baseURL: EV_ENERGY_API_URL,
  timeout: 10000, // Set a timeout for the request
});

// Axios response interceptor to mock the response
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === EV_ENERGY_API_URL) {
      return Promise.resolve({
        data: MOCK_RESPONSE,
      });
    }
    return response;
  },
  (error) => {
    if (error.message === 'Network Error') {
      console.log('Network Error: Mocking response due to failed API call');
      return Promise.resolve({
        data: MOCK_RESPONSE, // Mocked data in case of network failure
      });
    }
    // Else if the error is not a network error:
    return Promise.reject(error);
  }
);

export default axiosInstance;
