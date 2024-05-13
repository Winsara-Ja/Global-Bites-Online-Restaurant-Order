import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import "./Deliveris.css";
const Deliveries = () => {
  const { currentUser, loading } = useSelector((state) => state.user);
  const userID = currentUser._id;
  const [orderItems, setOrderItems] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orderItems/" + userID)
      .then((orderItems) => {
        setOrderItems(orderItems.data);
        setSearch(orderItems.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
                {search.map((orderItem) => {
                  return (
                    <>
                      <div className="order-summary">
                        {orderItem.ItemData.map((item) => {
                          return (
                            <div className="order-summary">
                              <div className="itemname">{item.ItemName}</div>
                              <div className="itemquantity">
                                {item.Quantity}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="itemquantity">
                        Rs.{orderItem.TotalPrice}
                      </div>
                    </>
                  );
                })}

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
