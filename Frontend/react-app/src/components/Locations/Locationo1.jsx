import React from "react";
import SideBar from "./SideBar";
import "./location.css";
function Location1() {
  return (
    <div>
      <SideBar />
      <div className="mapiframe">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.568636315442!2d80.62852367448512!3d7.28981941378514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36970c5a5a31f%3A0xd6e19563d79cbf59!2sKandy%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1715599452425!5m2!1sen!2slk"
          allowFullScreen=""
          className="mp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Location1;
