//import logo from './logo.svg';
import './App.css';
import { AppPaginas } from './Routes/routes';
import logo from './Images/Logo.png'
//import { useState } from 'react';


function App() {
  const usuario = JSON.parse(localStorage.getItem("user")) || null;
  let usuarioEmail = "";
  if (usuario) {
    usuarioEmail="Bienbenido " + usuario;
  }
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} alt='Logo' />
        <h3>{usuarioEmail}</h3>

      </header>
      <main className="app__main">
        <AppPaginas />
      </main>
      <footer className="app__footer">
        <p>Sayolin todos los derechos reservados 2025.</p>
      </footer>
    </div>

  );
}

export default App;
