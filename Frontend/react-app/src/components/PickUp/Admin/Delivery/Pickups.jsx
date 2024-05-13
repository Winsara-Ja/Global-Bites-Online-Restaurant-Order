import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Deliveris.css";
import { Link } from "react-router-dom";
import ManagerHeader from "../../../../Pages/Managers/ManagerHeader.jsx";

const Pickups = () => {
  const [pickups, setPickups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPickups();
  }, []);

  const fetchPickups = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pickups");
      setPickups(response.data.pickups);
    } catch (error) {
      console.error("Error fetching pickups:", error);
      setError("Error fetching pickups. Please try again.");
    }
  };

  const handleDeletePickup = async (pickupId) => {
    try {
      await axios.delete(`http://localhost:5000/pickups/${pickupId}`);
      setPickups(pickups.filter((pickup) => pickup._id !== pickupId));
      alert("Pickup deleted successfully!");
    } catch (error) {
      console.error("Error deleting pickup:", error);
      alert("Error deleting pickup. Please try again.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ManagerHeader />
      <div className="tbl_page_deliver">
        <h1 className="textsen">Pickups</h1>
        <table className="table_details_admin">
          <thead>
            <tr>
              <th className="admin_tbl_th">Location..</th>
              <th className="admin_tbl_th">Time..</th>
              <th className="admin_tbl_th">Admin Order Status..</th>
              <th className="admin_tbl_th">User Pickup Status..</th>
              <th className="admin_tbl_th">Action..</th>
            </tr>
          </thead>
          <tbody>
            {pickups.map((pickup) => (
              <tr key={pickup._id}>
                <td className="admin_tbl_td">{pickup.location}</td>
                <td className="admin_tbl_td">{pickup.time}</td>
                <td className="admin_tbl_td">
                  {pickup.status ? pickup.status : "Pending"}
                </td>
                <td className="admin_tbl_td">
                  {" "}
                  {pickup.done ? pickup.done : "Pending"}
                </td>
                <td className="admin_tbl_td">
                  <Link to={`/pickups/update/${pickup._id}`}>
                    <button className="btn_dash_admin">Update</button>
                  </Link>
                  <button
                    className="btn_dash_admin_dlt"
                    onClick={() => handleDeletePickup(pickup._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pickups;
