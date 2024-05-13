import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.jsx";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "./order.css";

const Order = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
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
  const filter = (e) => {
    setSearch(
      orderItems.filter((f) =>
        f.PaymetStatus.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header />
      <div className="emptyspace"></div>
      <div className="searchbox">
        <input
          type="text"
          className="search"
          onChange={filter}
          placeholder="Filter"
        ></input>
      </div>
      <br />
      <table className="ordertable">
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Items</th>
            <th>Order Date</th>
            <th>Price</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {search.map((orderItem) => (
            <tr key={orderItem._id}>
              <td>{orderItem._id}</td>
              <td>
                {orderItem.ItemData.map((Items) => (
                  <p>
                    {Items.ItemName} x {Items.Quantity}
                  </p>
                ))}
              </td>
              <td>{new Date(orderItem.createdAt).toLocaleString()}</td>
              <td>{orderItem.TotalPrice}</td>
              <td>
                <div
                  className={`itemstatus ${
                    orderItem.PaymetStatus === "Ready"
                      ? "itemstatus-green"
                      : orderItem.PaymetStatus === "Deleted"
                      ? "itemstatus-red"
                      : "itemstatus-yellow"
                  }`}
                >
                  {orderItem.PaymetStatus}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Footer />
    </>
  );
};

export default Order;
