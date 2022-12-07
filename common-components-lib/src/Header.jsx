import React from 'react';
import './header.css';

function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">
        Header Component
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;