import axios from 'axios';

const BASE_URL = 'http://localhost:82';  // URL base de tu backend

const userService = {
    registerUser: async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/create`, userData);
            return response.data;  // Devuelve los datos del usuario creado desde el backend
        } catch (error) {
            throw new Error(`Error al registrar usuario: ${error.message}`);
        }
    }
};

export default userService;