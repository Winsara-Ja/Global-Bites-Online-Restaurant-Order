import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" className="navbar-header" href="/adminhome">
          Global Bites
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette">
            <a href="/manager/orderdashboard">O</a>
          </i>
          <span>
            <a href="/manager/orderdashboard">Order Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images">U</i>
          <span>
            <a href="/manager/userdashboard">User Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack">F</i>
          <span>
            <a href="/manager/orderdashboard">Customer & Feedback</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-heart">M</i>
          <span>
            <a href="/manager/menuDashboard">Menu Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line">D</i>
          <span>
            <a href="manager/deliverydashboard">Delivery Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire">C</i>
          <span>
            <a href="/details">Catering Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic">I</i>
          <span>
            <a href="/manager/inventory">Inventory Management</a>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-gem">P</i>
          <span>
            <a href="/manager/orderdashboard">Payment Management</a>
          </span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="/acc.png" alt="avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" target="_blank" rel="noopener noreferrer">
              {currentUser.username}
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
