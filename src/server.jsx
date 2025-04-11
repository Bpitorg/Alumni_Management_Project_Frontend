// services/server.js - Frontend API Service using Axios
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Your backend base URL

// Create Axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // For cookies/sessions if needed
});

// User Service
export const UserService = {
 
  async register(userData, { setErrors, setLoading }) {
    try {
      setLoading(true);
      const response = await apiClient.post('/users/register', userData);

      if (response.data.status === 'success') {
        return {
          success: true,
          message: response.data.message,
          data: response.data
        };
      } else {
        return {
          success: false,
          message: response.data.message || 'Registration successful but with unexpected response'
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 409) {
            return {
              success: false,
              message: 'User already exists with this email, mobile, or enrollment number'
            };
          } else if (error.response.data?.message) {
            if (typeof error.response.data.message === 'string') {
              return {
                success: false,
                message: error.response.data.message
              };
            } else {
              setErrors(error.response.data.message);
              return {
                success: false,
                message: 'Please fix the form errors'
              };
            }
          }
        }
      }
      console.error('Registration error:', error);
      return {
        success: false,
        message: 'Registration failed due to unexpected error'
      };
    } finally {
      setLoading(false);
    }
  },


  async login(credentials, { setErrors, setLoading }) {
    try {
      setLoading(true);
      const response = await apiClient.post('/users/login', credentials);
  
      if (response.data.status === 'success') {
        localStorage.setItem('authToken', response.data.token);
        return {
          success: true,
          message: 'Login successful',
          token: response.data.token,
          user: response.data.user // assuming backend returns user data
        };
      }
      
      // Handle cases where status isn't 'success'
      return {
        success: false,
        message: response.data.message || 'Login failed'
      };
  
    } catch (error) {
      let errorMessage = 'Login failed due to unexpected error';
      
      if (axios.isAxiosError(error)) {  // Fixed: Added missing closing parenthesis
        if (error.response) {
          // Handle different HTTP status codes
          if (error.response.status === 401) {
            errorMessage = 'Invalid email or password';
          } else if (error.response.status === 400) {
            errorMessage = 'Validation error';
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        } else if (error.request) {
          errorMessage = 'No response from server';
        }
      }
      
      return {
        success: false,
        message: errorMessage
      };
    } finally {
      setLoading(false);
    }
  },
  async addItem(itemData, { setErrors, setLoading }) {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const response = await apiClient.post('/items', itemData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === 'success') {
        return {
          success: true,
          message: response.data.message,
          data: response.data
        };
      } else {
        return {
          success: false,
          message: response.data.message || 'Item added but with unexpected response'
        };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            return {
              success: false,
              unauthorized: true,
              message: 'Session expired, please login again'
            };
          } else if (error.response.data?.message) {
            if (typeof error.response.data.message === 'string') {
              return {
                success: false,
                message: error.response.data.message
              };
            } else {
              setErrors(error.response.data.message);
              return {
                success: false,
                message: 'Please fix the form errors'
              };
            }
          }
        }
      }
      console.error('Add item error:', error);
      return {
        success: false,
        message: 'Failed to add item due to unexpected error'
      };
    } finally {
      setLoading(false);
    }
  }
};