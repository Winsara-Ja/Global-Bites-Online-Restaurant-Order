import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Deliveris.css";
import ManagerHeader from "../../../../components/Navbar.jsx";

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
    <>
      <ManagerHeader />
      <div>
        <div className="tbl_page_deliver">
          <h1 className="textsen">Deliveries</h1>
          <table className="table_details_admin">
            <thead>
              <tr>
                <th className="admin_tbl_th">Location</th>
                <th className="admin_tbl_th">Time</th>
                <th className="admin_tbl_th">Your Status</th>
                <th className="admin_tbl_th">User Status</th>
                <th className="admin_tbl_th">Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery._id}>
                  <td className="admin_tbl_td">{delivery.location}</td>
                  <td className="admin_tbl_td">{delivery.time}</td>
                  <td className="admin_tbl_td">
                    {delivery.status ? delivery.status : "Not Yet Add"}
                  </td>
                  <td className="admin_tbl_td">
                    {delivery.done ? delivery.done : "Not Yet Delivery"}
                  </td>
                  <td className="admin_tbl_td">
                    <Link to={`/deleveries/update/${delivery._id}`}>
                      {" "}
                      {/* Updated route */}
                      <button className="btn_dash_admin">Add Status</button>
                    </Link>
                    <button
                      className="btn_dash_admin_dlt"
                      onClick={() => handleDeleteDelivery(delivery._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Deliveries;
