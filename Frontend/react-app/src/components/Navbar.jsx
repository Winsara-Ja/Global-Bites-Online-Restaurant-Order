import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" className='navbar-header' href='/adminhome'>
          Global Bites
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"><a href='/manager/orderdashboard'>O</a></i>
          <span><a href='/manager/orderdashboard'>Order Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images">U</i>
          <span><a href='/manager/userdashboard'>User Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack">F</i>
          <span><a href='/manager/orderdashboard'>Customer & Feedback</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-heart">M</i>
          <span><a href='/manager/menuDashboard'>Menu Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line">D</i>
          <span><a href='/manager/orderdashboard'>Delivery Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire">C</i>
          <span><a href='/details'>Catering Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic">I</i>
          <span><a href='/manager/orderdashboard'>Inventory Management</a></span>
        </div>
        <div className="nav-button">
          <i className="fas fa-gem">P</i>
          <span><a href='/manager/orderdashboard'>Payment Management</a></span>
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
