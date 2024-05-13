import React from "react";
import SideBar from "./SideBar";
import "./location.css";
function Location5() {
  return (
    <div>
      <SideBar />
      <div className="mapiframe">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.89324516788!2d79.95033199678957!3d6.903368300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2572da44e8d2d%3A0x7f822e963ecf933a!2sMain%20Bus%20Stand%20-%20Malabe!5e0!3m2!1sen!2slk!4v1715600057606!5m2!1sen!2slk"
          allowFullScreen=""
          className="mp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Location5
