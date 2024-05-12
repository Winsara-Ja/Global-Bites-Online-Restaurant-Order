import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" className='navbar-header'>
          Global Bites
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i>
          <span>Order Management</span>
          <FontAwesomeIcon icon="fa-solid fa-arrow-up" style={{color: "#FFD43B",}} />
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <span>User Management</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack"></i>
          <span>Customer & Feedback</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-heart"></i>
          <span>Menu Management</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line"></i>
          <span>Delivery Management</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire"></i>
          <span>Catering Management</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic"></i>
          <span>Inventory Management</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-gem"></i>
          <span>Payment Management</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a
              id="nav-footer-title"
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
              rel="noopener noreferrer"
            >
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
