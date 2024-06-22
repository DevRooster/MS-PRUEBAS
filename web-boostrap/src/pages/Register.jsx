import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Proceed with form submission
        console.log("Form submitted!");
    };

    document.body.style.backgroundColor = 'black';

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center shadow-lg" style={{ height: '93vh', borderRadius: '15px' }}>
            <div className="card border-success" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', overflow: 'hidden', width: '100%', maxWidth: '400px' }}>
                <div className="card-body" style={{ padding: '30px' }}>
                    <h2 className="card-title text-white text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-white">Username</label>
                            <input type="text" className="form-control border-success shadow-sm" id="username" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control border-success shadow-sm"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control border-success shadow-sm"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={handleBackClick}>Back</button>
                            <button type="submit" className="btn btn-success">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
