import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../Header/Header";
import "../AddDelivery/AddDelivery.css";
import { useParams, useNavigate } from "react-router-dom";

function UpdateDelivery() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/deliveries/${id}`
        ); // Updated to /deliveries/
        setInputs(response.data.delivery); // Updated to response.data.delivery
      } catch (error) {
        console.error("Error fetching delivery:", error);
      }
    };
    fetchDelivery();
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
      await axios.put(`http://localhost:5000/deliveries/${id}`, inputs); // Updated to /deliveries/
      alert("Delivery details updated successfully!"); // Updated alert message
      navigate("/user_deliveries"); // Updated navigation route
    } catch (error) {
      console.error("Error updating delivery:", error);
      alert("Failed to update delivery. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="formbox_delivery">
        <div>
          <h2 className="textsen">Update Delivery</h2>
          <form className="delivery_form" onSubmit={handleSubmit}>
            <label className="delivery_lable">Location:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="location"
              value={inputs.location}
              readOnly
              onChange={handleChange}
            />
            <br />
            <label className="delivery_lable">Time:</label>
            <br />
            <input
              className="delivery_input"
              type="text"
              name="time"
              value={inputs.time}
              onChange={handleChange}
              readOnly
            />
            <br />

            <label className="delivery_lable">Delivery Completed?</label>
            <br />
            <select
              className="delivery_input_select"
              name="done"
              required
              value={inputs.done}
              onChange={handleChange}
            >
               <option value="">Select Here..</option>
              <option value="Yes">Yes</option>
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

export default UpdateDelivery;
