import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import home from '../../../public/home.png'

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/" style={{ width: '36px', height: '44px' }}>
            <img src={home} alt="Home" style={{ width: '100%', height: '100%'}} />
          </Link>
          
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">55555</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/tecnologia">
                  Tecnología
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/taller">
                  Taller
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/practica-supervisada">
                  Práctica Supervisada
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};