import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/Register.module.css';

const Register = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

   console.log("TOKEN:", token);

    if (!token) {
    return <p>Token de invitación inválido o ausente.</p>;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/create`, {
        fullName,
        password,
        token,
      });

      setSuccess('Registro exitoso. Ahora puedes iniciar sesión.');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Error al registrar usuario.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Completa tu registro</h2>
      {token ? (
        <form onSubmit={handleRegister}>
          <div>
            <label>Nombre completo:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      ) : (
        <p style={{ color: 'red' }}>Token de invitación inválido o ausente.</p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;
