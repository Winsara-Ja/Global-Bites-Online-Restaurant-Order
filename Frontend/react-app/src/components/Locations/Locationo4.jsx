import React from "react";
import SideBar from "./SideBar";
import "./location.css";
function Locationo4() {
  return (
    <div>
      <SideBar />
      <div className="mapiframe">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.150896659616!2d81.04449027564971!3d6.872516401312331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465005a178d29%3A0x4f85caf1feeac6bb!2sElla%20Bus%20Station!5e0!3m2!1sen!2slk!4v1715599984309!5m2!1sen!2slk"
          allowFullScreen=""
          className="mp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Locationo4;
