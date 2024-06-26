import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

const UserDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <NavBar/>
      <div className="menu-offer-container1">
        <div className="menu-container">
          {currentUser && currentUser.isAdmin && (
            <>
              <Link to="/userMgmt">
                <img src="/1.jpg" />
              </Link>
              <h3>User Management</h3>
            </>
          )}
        </div>
        <div className="offer-container">
          {currentUser && currentUser.isAdmin && (
            <>
              <Link to="/history">
                <img src="/2.jpg" />
              </Link>
              <h3>Login History</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
