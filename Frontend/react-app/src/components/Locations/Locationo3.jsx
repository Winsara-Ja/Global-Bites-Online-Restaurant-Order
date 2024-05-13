import React from "react";
import SideBar from "./SideBar";
import "./location.css";
function Locationo3() {
  return (
    <div>
      <SideBar />
      <div className="mapiframe">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021551.9617399524!2d78.61128035132205!3d8.26854968209272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5401d6909549%3A0x21828c843ddbc08c!2sJaffna%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1715599911728!5m2!1sen!2slk"
          allowFullScreen=""
          className="mp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Locationo3;
