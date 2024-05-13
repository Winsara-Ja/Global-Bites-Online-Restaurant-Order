import React from "react";
import { Link } from "react-router-dom";
import Hearder from "../Header/Header";
import "./MainHome.css";
export default function Home() {
  return (
    <div>
      <Hearder />
      <br></br>
      <h1 className="main_topic_home">Choose Your Preferd Method</h1>
      <div className="select_box">
        <div
          className="select_box_card"
          onClick={() => (window.location.href = "/add-pickup")}
        >
          <h2 className="topic_select">Are you going to Pick?</h2>
          <p>Pickup Option</p>
        </div>
        <div
          className="select_box_card"
          onClick={() => (window.location.href = "/add-delivery")}
        >
          <h2 className="topic_select">Do you want It Deliverd?</h2>
          <p>Delivery Option</p>
        </div>
      </div>
      <br></br>
      {/* <button
        onClick={() => (window.location.href = "/adminhome")}
        className="delivery_btn_cen"
        type="submit"
      >
        Admin
      </button> */}
    </div>
  );
}
