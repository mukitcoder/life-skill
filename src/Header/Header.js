import React from 'react';
import './Header.css'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand nav-image" href="/home"><img src={logo} alt="" /></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/programs">Professional Skills</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/programs">Leadership Training</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/about">About Us</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/contact">Contact</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger opacity-100 text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;