import React from 'react';
import {Link} from 'react-router-dom';

export default function navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-${props.color} navbar-expand-lg mb-3 bg-${props.color}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          textApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
             <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/> 
            <label className={`form-check-label text-${props.color==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
    <div class="container" id="alert_id">
      <div class={`alert alert-${props.message.type} mb-3`} role="alert">
       {props.message.msg}
      </div>
    </div>
  </>
  )
}

