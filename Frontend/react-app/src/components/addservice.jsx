import { useState } from "react";
import axios from "axios";
import "./add service.css";
import "./MenuCatering.css";
import Header from "./Header";
import Footer from "./Footer";

function AddService() {
  const [id, setId] = useState();
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState("");
  const [headcount, setHeadcount] = useState("");
  const [request, setRequest] = useState("");
  const [click, setClick] = useState(false);
  // const [order, setorder] = useState({
  //   date: "",
  //   place: "",
  //   dilivery_options: "",
  //   headcount: "",
  //   requset: "",
  // });

  // const handleonchange = (e) => {
  //   const { value, name } = e.target;
  //   setorder((preve) => {
  //     return {
  //       ...preve,
  //       [name]: value,
  //     };
  //   });
  // };

  const handlesubmit = async (e) => {
    e.preventDefault();
    // const { date, dilivery_options, headcount, place, request } = order;
    try {
      await axios.post("http://localhost:5000/create/catering", {
        date,
        location,
        delivery,
        headcount,
        request,
        id,
      });
      alert("your details added now!");
    } catch (error) {
      console.log(error);
    }
  };

  const handel = (e) => {
    setId(e.target.id);
    setClick(!click);
  };

  return (
    <>
      <Header />
      <div className="emptyspace"></div>
      <div className="add-service">
        <h2>Add Catering Service</h2>
        <form onSubmit={handlesubmit}>
          {/* <lable>Date:</lable> */}
          <p>Date</p>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br></br>
          {/* <lable>Place:</lable> */}
          <p>Location</p>
          <input
            type="text"
            id="place"
            name="place"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          {/* <lable>Dilivey Option:</lable> */}
          <p>Delivery Option</p>
          <input
            type="text"
            id="dilivery_options"
            name="dilivery_options"
            onChange={(e) => setDelivery(e.target.value)}
          />
          <br></br>
          {/* <lable>Headcount:</lable> */}
          <p>Headcount</p>
          <input type="text" onChange={(e) => setHeadcount(e.target.value)} />
          <br></br>
          {/* <lable>Headcount:</lable> */}
          <p>Special Requset</p>
          <input
            type="text"
            id="request"
            name="request"
            onChange={(e) => setRequest(e.target.value)}
          />
          <br></br>
          <br></br> <br></br> <br></br>
          <button>Order Place</button>
        </form>
        <br></br>
      </div>
      <div className="w">
        <div className="catering-menu">
          <div className="item3">
            <div className="wrapper3">
              <div
                className={`product-info3 ${
                  click && id == "1" ? "selected" : "select"
                }`}
              >
                <div className="product-text">
                  <h1>Menu 1</h1>
                </div>
                <div className="menu-img3">
                  <img className="menu-image" src="/2.jpg" />
                </div>
                <div className="product-text2">
                  <p>Description</p>
                </div>
                <div className="product-text2">
                  <div className="bold">Menu Items</div>
                  <p>Food</p>
                  <p>Food</p>
                  <p>Food</p>
                </div>
                <div className="price">Per Person Rs.2000</div>
                <div className="product-price-btn">
                  <button type="button" id="1" onClick={(e) => handel(e)}>
                    {click && id == "1" ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="wrapper3">
              <div
                className={`product-info3 ${
                  click && id == "2" ? "selected" : "select"
                }`}
              >
                <div className="product-text">
                  <h1>Menu 2</h1>
                </div>
                <div className="menu-img3">
                  <img className="menu-image" src="/2.jpg" />
                </div>
                <div className="product-text2">
                  <p>Description</p>
                </div>
                <div className="product-text2">
                  <div className="bold">Menu Items</div>
                  <p>Food</p>
                  <p>Food</p>
                  <p>Food</p>
                </div>
                <div className="price">Per Person Rs.2000</div>
                <div className="product-price-btn">
                  <button type="button" id="2" onClick={(e) => handel(e)}>
                    {click && id == "2" ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="wrapper3">
              <div
                className={`product-info3 ${
                  click && id == "3" ? "selected" : "select"
                }`}
              >
                <div className="product-text">
                  <h1>Menu 3</h1>
                </div>
                <div className="menu-img3">
                  <img className="menu-image" src="/2.jpg" />
                </div>
                <div className="product-text2">
                  <p>Description</p>
                </div>
                <div className="product-text2">
                  <div className="bold">Menu Items</div>
                  <p>Food</p>
                  <p>Food</p>
                  <p>Food</p>
                </div>
                <div className="price">Per Person Rs.2000</div>
                <div className="product-price-btn">
                  <button type="button" id="3" onClick={(e) => handel(e)}>
                    {click && id == "3" ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="wrapper3">
              <div
                className={`product-info3 ${
                  click && id == "4" ? "selected" : "select"
                }`}
              >
                <div className="product-text">
                  <h1>Menu 4</h1>
                </div>
                <div className="menu-img3">
                  <img className="menu-image" src="/2.jpg" />
                </div>
                <div className="product-text2">
                  <p>Description</p>
                </div>
                <div className="product-text2">
                  <div className="bold">Menu Items</div>
                  <p>Food</p>
                  <p>Food</p>
                  <p>Food</p>
                </div>
                <div className="price">Per Person Rs.2000</div>
                <div className="product-price-btn">
                  <button type="button" id="4" onClick={(e) => handel(e)}>
                    {click && id == "4" ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddService;
