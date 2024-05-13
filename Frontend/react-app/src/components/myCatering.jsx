import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.jsx";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../Pages/order.css";

const myCatering = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const userID = currentUser._id;
  const [orderItems, setOrderItems] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/catering/" + userID)
      .then((orderItems) => {
        setOrderItems(orderItems.data);
        setSearch(orderItems.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (e) => {
    setSearch(
      orderItems.filter((f) =>
        f.Status.toLowerCase().includes(e.target.value.toLowerCase())
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
      <hr className="separator"></hr>
      <div>
        {search.map((orderItem) => {
          return (
            <>
              <div className="order-summary">
                <table>
                  <tr>
                    <th>CateringID</th>
                    <th>Location</th>
                    <th>HeadCount</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>{orderItem._id}</td>
                    <td>{orderItem.Location}</td>
                    <td>{orderItem.Headcount}</td>
                    <td>{orderItem.Date.substring(0, 10)}</td>
                    <td>Rs.{orderItem.Price}</td>
                    <td>
                      <div
                        className={`itemprice ${
                          orderItem.Status == "Ready"
                            ? "itemprice-green"
                            : orderItem.Status == "Deleted"
                            ? "itemprice-red"
                            : "itemprice-yellow"
                        }
                  
                `}
                      >
                        {orderItem.Status}
                      </div>
                    </td>
                  </tr>
                </table>
                {/* <div className="itemid">{orderItem._id}</div>
              <div className="item-row">
                <div className="itemname">{orderItem.MenuID}</div>
                <div className="itemquantity">{orderItem.Location}</div>
                <div className="itemquantity">{orderItem.Headcount}</div>
              </div>
              <div className="itemdate">
                {orderItem.Date.substring(0, 10)}
              </div>
              <div className="itemquantity">Rs.{orderItem.Price}</div>
              <div
                className={`itemprice ${
                  orderItem.Status == "Ready"
                    ? "itemprice-green"
                    : orderItem.Status == "Deleted"
                    ? "itemprice-red"
                    : "itemprice-yellow"
                }
                  
                `}
              >
                {orderItem.Status}
              </div> */}
              </div>
              <hr className="separator"></hr>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default myCatering;
