import React from "react";
import SideBar from "./SideBar";
import "./location.css";
function Locationo2() {
  return (
    <div>
      <SideBar />
      <div className="mapiframe">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.639374071874!2d79.8503644756535!3d6.933633900410097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593e289615bf%3A0x49c5a74af83c796!2sBus%20stand%20Colombo!5e0!3m2!1sen!2slk!4v1715599777500!5m2!1sen!2slk"
          allowFullScreen=""
          className="mp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Locationo2;
