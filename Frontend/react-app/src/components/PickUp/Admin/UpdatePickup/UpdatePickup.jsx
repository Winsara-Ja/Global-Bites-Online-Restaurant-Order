import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./AddDelivery.css";
import ManagerHeader from "../../../../Pages/Managers/ManagerHeader.jsx";

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
      navigate("/pickups"); // Navigate to the desired route
    } catch (error) {
      console.error("Error updating pickup:", error);
      alert("Failed to update pickup. Please try again.");
    }
  };

  return (
    <>
      <ManagerHeader />
      <div className="formbox_delivery">
        <div>
          <h2 className="textsen">Update Pickup</h2>
          <form className="delivery_form" onSubmit={handleSubmit}>
            <label className="delivery_lable">Location:</label>
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
            <input
              className="delivery_input"
              type="text"
              readOnly
              name="time"
              value={inputs.time}
              onChange={handleChange}
            />
            <br />
            <label className="delivery_lable">Status:</label>
            <select
              className="delivery_input_select"
              name="status"
              value={inputs.status}
              required
              onChange={handleChange}
            >
              <option value="">Select Here..</option>
              <option value="Pending">Pending</option>
              <option value="Accepet">Accepet</option>
            </select>

            <br />
            <button className="delivery_btn_cen" type="submit">
              Update
            </button>
          </form>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </div>
    </>
  );
}

export default UpdatePickup;
