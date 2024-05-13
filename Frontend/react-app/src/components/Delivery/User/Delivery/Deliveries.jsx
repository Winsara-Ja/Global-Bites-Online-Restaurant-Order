import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../../Header/Header";
import "./Deliveris.css";
const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/deliveries");
      setDeliveries(response.data.deliveries); // Updated to setDeliveries
    } catch (error) {}
  };

  const handleDeleteDelivery = async (deliveryId) => {
    try {
      await axios.delete(`http://localhost:5000/deliveries/${deliveryId}`); // Updated to /deliveries/
      setDeliveries(
        deliveries.filter((delivery) => delivery._id !== deliveryId)
      );
      alert("Delivery deleted successfully!"); // Updated alert message
    } catch (error) {
      console.error("Error deleting delivery:", error);
      alert("Error deleting delivery. Please try again.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="tbl_page_deliver">
        <h1 className="textsen">Deliveries</h1>
        <div className="">
          <div>
            {deliveries.map((delivery) => (
              <div key={delivery._id}>
                <div className="stats_box">
                <p className="mantopic_detail_disply">
                  <b>Request Accept : </b>
                  {delivery.status ? delivery.status : "Pending"}
                </p>
                <p className="mantopic_detail_disply">
                  <b>Order Resived : </b>
                  {delivery.done ? delivery.done : "Not Yet"}
                </p>
                </div>
              
                <p className="mantopic_detail_disply">
                  <b>Location:</b>
                  {delivery.location}
                </p>
                <p className="mantopic_detail_disply">
                  <b>Time:</b>
                  {delivery.time}
                </p>

                <Link to={`/user_deliveries/update/${delivery._id}`}>
                  {" "}
                  {/* Updated route */}
                  <button className="btn_dash_admin">Confirm</button>
                </Link>
                <button
                  className="btn_dash_admin_dlt"
                  onClick={() => handleDeleteDelivery(delivery._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
