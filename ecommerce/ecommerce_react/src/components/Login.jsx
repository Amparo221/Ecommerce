import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Both fields are required.');
            return;
        }

        // Verificacion simple de contraseña
        if (username === 'user123' && password === 'password123') {
            /*quiero agregarle otro estilo a la alerta, pero hasta donde yo se no se puede sin hacer una alerta customizada, 
            si hacemos otro proyecto parecido le agregare estilo, por ahora queda como una alerta normal disculpe*/
            alert('Login successful!');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {/*el error si tiene estilo*/}
            {error && <div className="login-error">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
