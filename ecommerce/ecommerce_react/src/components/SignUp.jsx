import React, { useState } from 'react';
import './Login.css'; 

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        

        // verifica que la contraseña y su verificacion tengan el mismo contenido
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // mismo que con la alerta del login
        if (email === 'user@example.com' && username === 'user123' && password === 'password123') {
            alert('Login successful!');
        } else {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="acess-container">
            <h2>Sign Up</h2>
            {error && <p className="login-error">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default SignUp;
