import React from "react";
import { useSelector } from "react-redux";
import ManagerHeader from "./ManagerHeader";
import { Link } from "react-router-dom";

const DeliveryDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <ManagerHeader />
      <div className="menu-offer-container1">
        <div className="menu-container">
          {currentUser && currentUser.isAdmin && (
            <>
              <Link to="/pickups">
                <img src="/3.jpg" />
              </Link>
              <h3>PickUp Management</h3>
            </>
          )}
        </div>
        <div className="offer-container">
          {currentUser && currentUser.isAdmin && (
            <>
              <Link to="/deliveries">
                <img src="/4.jpg" />
              </Link>
              <h3>Delivery Management</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DeliveryDashboard;
