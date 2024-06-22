import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    document.body.style.backgroundColor = 'black';

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center shadow-lg" style={{ height: '93vh', borderRadius: '15px' }}>
            <div className="card border-success" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', overflow: 'hidden', width: '100%', maxWidth: '400px' }}>
                <div className="card-body" style={{ padding: '30px' }}>
                    <h2 className="card-title text-white text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-white">Username</label>
                            <div className="input-group">
                                <input type="text" className="form-control border-success shadow-sm" id="username" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control border-success shadow-sm"
                                    id="password"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                />
                                <span className="input-group-text bg-transparent border-success">
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        onClick={togglePasswordVisibility}
                                        style={{ cursor: 'pointer', color: 'white' }}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                    </form>
                    <p className="mt-3 text-center text-white">¿No tienes una cuenta? <Link to="/register" className="register-link">Regístrate aquí</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
