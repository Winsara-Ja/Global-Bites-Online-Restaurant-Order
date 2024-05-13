import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddDelivery.css";
import { useParams, useNavigate } from "react-router-dom";
import ManagerHeader from "../../../../Pages/Managers/ManagerHeader.jsx";

function UpdateDelivery() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/deliveries/${id}`
        );
        setInputs(response.data.delivery);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/deliveries/${id}`, {
        name: String(inputs.name),
        date: String(inputs.date),
        phone: String(inputs.phone),
        time: String(inputs.time),
        status: String(inputs.status),
        done: String(inputs.done),
        location: String(inputs.location),
      })
      .then((res) => res.data);
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then(() => {
      window.alert("Status Added successfully!");
      history("/deliveries");
    });
  };

  return (
    <>
      <ManagerHeader />
      <div>
        <div className="formbox_delivery">
          <div>
            <h2 className="textsen">Accept Delivery</h2>
            <form className="delivery_form" onSubmit={handleSubmit}>
              <label className="delivery_lable">Location:</label>
              <br></br>
              <input
                className="delivery_input"
                type="text"
                name="location"
                readOnly
                value={inputs.location}
                onChange={handleChange}
              />
              <br />
              <label className="delivery_lable">Time:</label>
              <br></br>
              <input
                className="delivery_input"
                type="text"
                readOnly
                name="time"
                value={inputs.time}
                onChange={handleChange}
              />
              <br />
              <label className="delivery_lable">Status of the order:</label>
              <br></br>
              <select
                className="delivery_input_select"
                name="status"
                required
                value={inputs.status}
                onChange={handleChange}
              >
                <option value="">Select Here..</option>
                <option value="Accept">Accept</option>
                <option value="preparing">Preparing</option>
                <option value="Reject">Reject</option>
              </select>

              <br />
              <button type="submit" className="delivery_btn_cen">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateDelivery;
