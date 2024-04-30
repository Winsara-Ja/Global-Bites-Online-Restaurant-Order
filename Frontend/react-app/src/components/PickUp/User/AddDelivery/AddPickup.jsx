import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../../../Delivery/User/AddDelivery/AddDelivery.css";
import Header from "../../../Header/Header";
function AddPickup() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    location: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pickups/", inputs);
      alert("Pickup Added Successfully");
      navigate("/user_pickups");
    } catch (error) {
      console.error("Error adding pickup:", error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <Header />
      <div className="formbox_delivery">
        <div>
          <br></br>
          <h2 className="textsen1">Add New Pickup</h2>
          <form className="delivery_form" onSubmit={handleSubmit}>
            <label className="delivery_lable">Location:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="kurunegala"
                  onChange={handleChange}
                  required
                />
                Kurunegala
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="jaffna"
                  onChange={handleChange}
                  required
                />
                Jaffna
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="colombo"
                  onChange={handleChange}
                  required
                />
                Colombo
              </label>
            </div>
            <br></br>
            <label className="delivery_lable">Time:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="3-8 pm"
                  onChange={handleChange}
                  required
                />
                3-8 pm
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="time"
                  value="9-10 pm"
                  onChange={handleChange}
                  required
                />
                9-10 pm
              </label>
            </div>
            <br />
            <button className="delivery_btn_cen" type="submit">
              Add Pickup
            </button>
          </form>
          <br></br>
          <button
            className="delivery_btn1"
            onClick={() => (window.location.href = "/user_pickups")}
          >
            View Pickups
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPickup;
