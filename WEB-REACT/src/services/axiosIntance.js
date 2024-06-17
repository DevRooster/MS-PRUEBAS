import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:82/auth',  // URL base de tu backend
  timeout: 10000,  // Tiempo máximo de espera en milisegundos
});

// Configura interceptores, headers comunes, etc.
instance.interceptors.request.use(config => {
  // Puedes modificar la configuración de la petición aquí
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // Puedes manejar la respuesta antes de que llegue al código que la pidió
  return response;
}, error => {
  // Puedes manejar errores de respuesta aquí
  return Promise.reject(error);
});

export default instance;