import React, { useState } from 'react';
import PassLogin from "../PassLogin";
import TextLogin from "../TextLogin";

import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

export function LoginWeb() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(userName, password);
      if (data) {
        navigate('/dashboard');
      }
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleRegister = () => {
    navigate('/register');
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
          <strong>Login</strong>
        </div>
      </header>
      <main className="login-main">
        <TextLogin nameLogin={"Username"} value={userName} onChange={(e) => setUserName(e.target.value)} />
        <PassLogin keyLogin={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
      </main>
      <aside className="login-aside">
        <button className='nav-link' onClick={handleRegister}>Register</button>
        <button className='nav-link' onClick={handleLogin}>Login</button>
      </aside>
    </article>
  );
}
