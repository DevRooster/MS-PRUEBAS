import React, { useState } from 'react';
import PassLogin from "../PassLogin";
import TextLogin from "../TextLogin";
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import axios from 'axios';

export function RegisterWeb() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userData = { userName, password };
      const response = await axios.post('http://localhost:82/auth/create', userData);
      console.log('Usuario creado:', response.data)

      navigate('/login'); // Redirigir al usuario después de crear la cuenta
    } catch (error) {
      alert('Error al crear usuario: ' + error.message);
    }
  };

  return (
    <article className="login-container">
      <header className="login-header">
        <img
          className="login-avatar"
          src={"https://unavatar.io/login"}
          alt="AvatarLogin"
        />
        <div className="login-title">
          <strong>Register</strong>
        </div>
      </header>
      <main className="login-main">
        <TextLogin nameLogin={"UserName"} value={userName} onChange={(e) => setUserName(e.target.value)} />
        <PassLogin keyLogin={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
      </main>
      <aside className="login-aside">
        <button className='nav-link'>Back</button>
        <button className='nav-link' onClick={handleRegister}>Create</button>
      </aside>
    </article>
  );
}