import { useEffect, useState } from "react";
import axios from "axios";
import "./add service.css";
import "./MenuCatering.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

function AddService() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const userID = currentUser._id;
  const UserName = currentUser.username;
  const [id, setId] = useState();
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [headcount, setHeadcount] = useState("");
  const [request, setRequest] = useState("");
  const [click, setClick] = useState(false);
  const [cateringMenu, setCateringMenu] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cateringMenu")
      .then((cateringMenu) => setCateringMenu(cateringMenu.data))
      .catch((err) => console.log(err));
  }, [cateringMenu]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (click) {
        await axios.post("http://localhost:5000/create/catering", {
          userID,
          UserName,
          date,
          location,
          headcount,
          request,
          total,
          id,
        });
        alert("your details added now!");
      }
      if (!click) {
        alert("Please Select a Menu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handel = (e) => {
    setId(e.target.id);
    setClick(!click);
    cateringMenu.map((menu) => {
      if (menu.MenuID == e.target.id) {
        setTotal(headcount * menu.TotalPrice);
      }
    });
  };

  // const calculateTotal = (e) => {
  //   cateringMenu.map((menu) => {
  //     if(menu.MenuID == e.target.id) {
  //       setTotal(headcount * menu.TotalPrice)
  //     }
  //   })
  // }

  // calculateTotal()

  return (
    <>
      <Header />
      <div className="emptyspace"></div>
      <div className="add-service">
        <h2>Add Catering Service</h2>
        <form onSubmit={handlesubmit} className="catering-form">
          {/* <lable>Date:</lable> */}
          <p>Date</p>
          <input
            type="date"
            id="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <br></br>
          {/* <lable>Place:</lable> */}
          <p>Location</p>
          <input
            type="text"
            id="place"
            name="place"
            required
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          {/* <lable>Headcount:</lable> */}
          <p>Headcount</p>
          <input
            type="number"
            onChange={(e) => setHeadcount(e.target.value)}
            className="headcount"
            required
          />
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
          <button>Order Catering</button>
        </form>
        <br></br>
        <div className="cateringtotal">Total: {total}</div>
        <hr className="separator"></hr>
        <a href="/myCatering">
          <div className="cateringbtn">My Caterings</div>
        </a>
      </div>
      <div className="w">
        <div className="catering-menu">
          {cateringMenu.map((menu) => {
            return (
              <>
                <div className="item3">
                  <div className="wrapper3">
                    <div
                      className={`product-info3 ${
                        click && id == "1" ? "selected" : "select"
                      }`}
                    >
                      <div className="product-text">
                        <h1>Menu No: {menu.MenuID}</h1>
                      </div>
                      <div className="menu-img3">
                        <img className="menu-image" src={menu.image} />
                      </div>
                      <div className="product-text2">
                        <p>{menu.Description}</p>
                      </div>
                      <div className="product-text2">
                        <div className="bold">Menu Items</div>
                        {menu.MenuItems.map((items) => {
                          return (
                            <>
                              <p>{items.ItemName}</p>
                            </>
                          );
                        })}
                      </div>
                      <div className="price">
                        Per Person Rs.{menu.TotalPrice}
                      </div>
                      <div className="product-price-btn">
                        <button
                          type="button"
                          id={menu.MenuID}
                          onClick={(e) => handel(e)}
                        >
                          {click && id == menu.MenuID ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddService;
