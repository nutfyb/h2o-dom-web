import axios from 'axios'

interface LoginResponse {
  // Define the expected structure of the login response here
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    // Add more fields as needed
  };
}

interface RegisterResponse {
  // Define the expected structure of the register response here
  success: boolean;
  message: string;
  user: {
    id: string;
    username: string;
    email: string;
    // Add more fields as needed
  };
}

interface UserData {
  username: string;
  email: string;
  password: string;
  // Add more fields as needed
}

const API_URL = import.meta.env.VITE_APP_URL_API;

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await axios.post<LoginResponse>(`${API_URL}/Authenticate/login`, { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const register = async (userData: UserData): Promise<RegisterResponse> => {
    try {
      const response = await axios.post<RegisterResponse>(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const logout = (): void => {
    localStorage.removeItem('token');
  };
