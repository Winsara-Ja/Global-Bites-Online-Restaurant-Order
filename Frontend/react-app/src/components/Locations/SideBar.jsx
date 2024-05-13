import React from "react";
import "./sidebar.css";
import NavBar from "../Header/Header";
function SideBar() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="sidebrbox">
        <div
          className="locbox"
          onClick={() => (window.location.href = "/location1")}
        >
          <p className="loc_topic">Global Bites Kandy</p>
          <p className="loc_adres">(DS Senanayake Veediya, Kandy 2000)</p>
        </div>
        <div
          className="locbox"
          onClick={() => (window.location.href = "/location2")}
        >
          <p className="loc_topic">Global Bites Colombo</p>
          <p className="loc_adres">(328 A2,Colombo 00300)</p>
        </div>
        <div
          className="locbox"
          onClick={() => (window.location.href = "/location3")}
        >
          <p className="loc_topic">Global Bites Jaffna</p>
          <p className="loc_adres">(812 Hospital St, Jaffna)</p>
        </div>
        <div
          className="locbox"
          onClick={() => (window.location.href = "/location4")}
        >
          <p className="loc_topic">Global Bites Ella</p>
          <p className="loc_adres">(No 56 A23,Ella)</p>
        </div>
        <div
          className="locbox"
          onClick={() => (window.location.href = "/location5")}
        >
          <p className="loc_topic">Global Bites Malabe</p>
          <p className="loc_adres">(No 56 A23,Malabe)</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
