// RegisterForm.jsx
import React from 'react';
import './App.css';  // Asegúrate de que la ruta sea correcta


const RegisterForm = () => {
  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" name="lastname" />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        
        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input type="password" id="confirm-password" name="confirm-password" />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
