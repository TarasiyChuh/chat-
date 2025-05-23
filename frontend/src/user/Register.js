import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Якщо хочеш використовувати зовнішні стилі, імпортуй файл CSS

function Register() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.message || 'Помилка реєстрації');
      } else {
        alert('Реєстрація пройшла успішно!');
        navigate('/login'); // Переходимо на сторінку логіну після успішної реєстрації
      }
    } catch (err) {
      setError('Сталася помилка. Спробуйте ще раз.');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Реєстрація</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-container">
          <label>Ім'я користувача:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Пароль:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <br />
        <button type="submit" className="submit-button">Зареєструватися</button>
      </form>
    </div>
  );
}

export default Register;
