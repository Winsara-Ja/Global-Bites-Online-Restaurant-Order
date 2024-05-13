import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../Header/Header";
import "./AddDelivery.css";

function UpdatePickup() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPickup = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pickups/${id}`);
        setInputs(response.data.pickup);
      } catch (error) {
        console.error("Error fetching pickup:", error);
      }
    };
    fetchPickup();
  }, [id]);

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
      await axios.put(`http://localhost:5000/pickups/${id}`, inputs);
      alert("Pickup details updated successfully!");
      navigate("/user_pickups"); // Navigate to the desired route
    } catch (error) {
      console.error("Error updating pickup:", error);
      alert("Failed to update pickup. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="formbox_delivery">
        <div>
          <h2 className="textsen">Update Pickup</h2>
          <form className="delivery_form" onSubmit={handleSubmit}>
            <label className="delivery_lable">Location:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              readOnly
              name="location"
              value={inputs.location}
              onChange={handleChange}
            />
            <br />
            <label className="delivery_lable">Time:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="time"
              readOnly
              value={inputs.time}
              onChange={handleChange}
            />
            <br />
            <label className="delivery_lable">Are you pick up Your meal?</label>
            <br />
            <select
              className="delivery_input_select"
              name="done"
              value={inputs.done}
              required
              onChange={handleChange}
            >
              <option value="">Select Here..</option>
              <option value="Yse">Yes</option>
              <option value="Not Yet">Not yet</option>
            </select>
            <br />
            <button className="delivery_btn_cen" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePickup;
