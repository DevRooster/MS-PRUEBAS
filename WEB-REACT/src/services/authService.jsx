// services/authService.jsx

import axios from 'axios';

const BASE_URL = 'http://localhost:82/auth';  // URL base de tu backend

// Función para iniciar sesión
const login = async (userName, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      userName,
      password
    });
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } else {
      throw new Error('Token de acceso no recibido');
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    throw error;
  }
};

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('accessToken');
};

// Función para obtener el usuario actual
const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/validate`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario actual:', error);
    throw error;
  }
};

export { login, logout, getCurrentUser };