import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AddDelivery.css";
import Header from "../../../Header/Header";

function AddDelivery() {
  const navigate = useNavigate(); // Changed variable name to navigate
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    location: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
    window.alert("added successfully!");
    navigate("/user_deliveries");
  };
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/deliveries", {
      name: inputs.name,
      date: inputs.date,
      phone: inputs.phone,
      time: inputs.time,
      location: inputs.location,
    });
  };

  return (
    <div>
      <Header />

      <div className="formbox_delivery">
        <div>
          <h2 className="textsen1">Add New Delivery</h2>

          <br></br>
          <form className="delivery_form" onSubmit={handleSubmit}>
            <label className="delivery_lable">Name:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
            <br />
            <label className="delivery_lable">Phone:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
              required
            />

            <br />
            <label className="delivery_lable">Time:</label>
            <br />
            <input
              className="delivery_input"
              type="time"
              name="time"
              value={inputs.time}
              onChange={handleChange}
              required
            />
            <br />
            <label className="delivery_lable">Date:</label>
            <br />
            <input
              className="delivery_input"
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
              required
            />
            <br />
            <label className="delivery_lable">Location:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="location"
              value={inputs.location}
              onChange={handleChange}
              required
            />

            <button type="submit" className="delivery_btn_cen">
              Add Delivery
            </button>
          </form>
          <br></br>
          <button
            className="delivery_btn1"
            onClick={() => (window.location.href = "/user_deliveries")}
          >
            View Deliveries
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDelivery;
