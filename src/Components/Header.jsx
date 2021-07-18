import React from 'react';
import logo from '../images/logo.jpg'

export default function Header() {
  return(
    <header>
      <a href="/">
        <img
        alt="Logo do centro de treinamento de artes marciais"
        src={ logo }
        width="100px"
        />
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/quem-somos">Quem Somos</a>
        <a href="/programas">Programas</a>
        <a href="/horarios">Horários</a>
        <a href="/planos">Planos</a>
      </nav>
    </header>
  );
}
