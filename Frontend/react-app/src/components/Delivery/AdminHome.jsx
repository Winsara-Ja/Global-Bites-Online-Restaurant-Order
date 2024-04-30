import React from "react";
import "./MainHome.css";
function AdminHome() {
  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="main_topic_home">Welcome to the Taste Bite</h1>
        <div className="select_box">
          <div
            className="select_box_card"
            onClick={() => (window.location.href = "/pickups")}
          >
            <p>Pickup</p>
          </div>
          <div
            className="select_box_card"
            onClick={() => (window.location.href = "/deliveries")}
          >
            <p>Delivery</p>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default AdminHome;
