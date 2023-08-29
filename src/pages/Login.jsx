import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Contraseña:', password);

      // Aquí podrías realizar acciones adicionales, como enviar los datos a un servidor
    };

    return (
      <div className='counter_login'>
        <h2>Inicio de sesión</h2>
        <div className='counter_form' >
          <form className='login_form'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Enviar</button>
          </form>

        </div>
      </div>
    );
}

export default Login;
