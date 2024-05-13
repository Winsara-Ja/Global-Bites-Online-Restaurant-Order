import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home.jsx";
import { UserContextProvider } from "../context/userContext.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./Pages/Cart.jsx";
import Order from "./Pages/Order.jsx";
import AddItems from "./Pages/Menu-Management/AddItems";
import DisplayMenu from "./Pages/Menu-Management/DisplayMenu";
import EditItems from "./Pages/Menu-Management/EditItems";
import AddOffers from "./Pages/Offer-Management/AddOffers.jsx";
import DisplayOffers from "./Pages/Offer-Management/DisplayOffers.jsx";
import Offers from "./Pages/Offers.jsx";
import EditOffers from "./Pages/Offer-Management/EditOffers.jsx";
import SriLanka from "./Pages/Countries/SriLanka.jsx";
import Thailand from "./Pages/Countries/Thailand.jsx";
import SouthKorea from "./Pages/Countries/SouthKorea.jsx";
import Italy from "./Pages/Countries/Italy.jsx";
import Spain from "./Pages/Countries/Spain.jsx";
import AdminHome from "./Pages/AdminHome.jsx";
import Menu from "./Pages/Menu.jsx";
import OrderDashboard from "./Pages/Managers/OrderDashboard.jsx";
import MenuandOffer from "./Pages/Managers/MenuandOffer.jsx";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import History from "./Pages/SigninHistory";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import UserManagement from "./Pages/UserManagement";
import UserDashboard from "./Pages/Managers/UserDashboard.jsx";
import CreateFeedback from "./Pages/CreateFeedback";
import UpdateFeedback from "./Pages/UpdateFeedback";
import ContactUs from "./Pages/ContactUs";
import UsersFeedback from "./Pages/UsersFeedback.jsx";
import FeedbackList from "./Pages/feedbacklist";
import AdminFeedbackUpdate from "./Pages/AdminFeedbackUpdate";
import ManagerSignIn from "./Pages/Managers/ManagerSignin.jsx";
import AddPickup from "./components/PickUp/User/AddDelivery/AddPickup";
import UserPickups from "./components/PickUp/User/Delivery/Pickups";
import UserUpdatePickup from "./components/PickUp/User/UpdatePickup/UpdatePickup";
import UpdatePickup from "./components/PickUp/Admin/UpdatePickup/UpdatePickup";
import Pickups from "./components/PickUp/Admin/Delivery/Pickups";
import PickupHome from "./components/PickUp/Pickup-Home";
import DeliveryHome from "./components/Delivery/Delivery-Home";
import MainHome from "./components/Delivery/Main-Home";
import AddDelivery from "./components/Delivery/User/AddDelivery/AddDelivery";
import UserDelevry from "./components/Delivery/User/Delivery/Deliveries";
import UserUpdateDelivery from "./components/Delivery/User/UpdateDelivery/UpdateDelivery";
import UpdateDelivery from "./components/Delivery/Admin/UpdateDelivery/UpdateDelivery";
import Deliveries from "./components/Delivery/Admin/Delivery/Deliveries";
import DeliveryDashboard from "./Pages/Managers/DeliveryDashboard.jsx";
import AddService from "./components/addservice.jsx";
import Servicedetails from "./components/servicedetails";
import UpdateService from "./components/update_service";
import AddItem from "./components/AddItem/AddItem";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import Items from "./components/Inventory/Items";
import Item from "./components/Inventory/Item";
import AddCateringMenu from "./Pages/Catering-Management/AddCateringMenu.jsx";
import DisplayCaterngMenu from "./Pages/Catering-Management/DisplayCateringMenu.jsx";
import UpdateCateringItem from "./Pages/Catering-Management/EditCateringMenu.jsx";
import MyCatering from "./components/myCatering.jsx";
import Faq from "./components/Faq.jsx";
import SingleMenuItem from "./Pages/SingleMenuItem.jsx";
import Locationo1 from "./components/Locations/Locationo1";
import Locationo2 from "./components/Locations/Locationo2";
import Locationo3 from "./components/Locations/Locationo3";
import Locationo4 from "./components/Locations/Locationo4";
import Location5 from "./components/Locations/Location5";

//import AdminHome from "./Components/Delivery/AdminHome";
//fixed errors

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position="top-left" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/userMgmt" element={<UserManagement />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/singleItem/:id" element={<SingleMenuItem />} />
        <Route path="/manageMenu" element={<DisplayMenu />} />
        <Route path="/updateMenu/:id" element={<EditItems />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/addOffers" element={<AddOffers />} />
        <Route path="/manageOffer" element={<DisplayOffers />} />
        <Route path="/updateOffers/:id" element={<EditOffers />} />
        <Route path="/SriLanka" element={<SriLanka />}></Route>
        <Route path="/Thailand" element={<Thailand />}></Route>
        <Route path="/SouthKorea" element={<SouthKorea />}></Route>
        <Route path="/Italy" element={<Italy />}></Route>
        <Route path="/Spain" element={<Spain />}></Route>
        <Route path="/adminHome" element={<AdminHome />}></Route>
        DeliveryDashboard
        <Route path="/managersignin" element={<ManagerSignIn />}></Route>
        <Route
          path="/manager/userdashboard"
          element={<UserDashboard />}
        ></Route>
        <Route path="/manager/menuDashboard" element={<MenuandOffer />}></Route>
        <Route
          path="/manager/orderdashboard"
          element={<OrderDashboard />}
        ></Route>
        <Route
          path="/manager/deliverydashboard"
          element={<DeliveryDashboard />}
        ></Route>
        <Route path="/userfeedback" element={<UsersFeedback />}></Route>
        <Route path="/createfeedback" element={<CreateFeedback />}></Route>
        <Route path="/updatefeedback/:id" element={<UpdateFeedback />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/feedback" element={<FeedbackList />}></Route>
        <Route
          path="/Adminfbupdate/:id"
          element={<AdminFeedbackUpdate />}
        ></Route>
        <Route path="/delivery_pickup" element={<MainHome />} />
        <Route path="/pickup" element={<PickupHome />} />
        <Route path="/delivery" element={<DeliveryHome />} />
        <Route path="/add-pickup" element={<AddPickup />} />
        <Route path="/user_pickups" element={<UserPickups />} />
        <Route path="/user_pickups/update/:id" element={<UserUpdatePickup />} />
        <Route path="/add-delivery" element={<AddDelivery />} />
        <Route path="/user_deliveries" element={<UserDelevry />} />
        <Route
          path="/user_deliveries/update/:id"
          element={<UserUpdateDelivery />}
        />
        Pickup-admin
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/pickups/update/:id" element={<UpdatePickup />} />
        {/* Delivery-admin*/}
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/deleveries/update/:id" element={<UpdateDelivery />} />
        <Route path="/catering" element={<AddService />}></Route>
        <Route path="/details" element={<Servicedetails />}></Route>
        <Route path="/update_service/:id" element={<UpdateService />}></Route>
        <Route path="/addinventory" element={<AddItem />} />
        <Route path="/manager/inventory" element={<Items />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/items/update/:id" element={<UpdateItem />} />
        <Route path="/AddCateringMenu" element={<AddCateringMenu />}></Route>
        <Route
          path="/DispalyCateringMenu"
          element={<DisplayCaterngMenu />}
        ></Route>
        <Route
          path="/UpdateCateringItem"
          element={<UpdateCateringItem />}
        ></Route>
        <Route path="/myCatering" element={<MyCatering />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/location1" element={<Locationo1 />} />
        <Route path="/location2" element={<Locationo2 />} />
        <Route path="/location3" element={<Locationo3 />} />
        <Route path="/location4" element={<Locationo4 />} />
        <Route path="/location5" element={<Location5 />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
