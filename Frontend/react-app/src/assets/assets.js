import Sri_Lanka from "./Sri_Lanka.jpg";
import Italy from "./Italy.jpg";
import Spain from "./Spain.jpg";
import South_Korea from "./South_Korea.jpg";
import Thailand from "./Thailand.jpg";
import Catering from "./catering_management.jpeg";
import Delivery from "./delivery_management.jpeg";
import Feedback from "./feedback_management.jpeg";
import Inventory from "./inventry_management.jpeg";
import Menu from "./menu.png";
import Payment from "./payment_management.jpeg";
import Offer from "./offer_management.jpeg";
import User from "./user_management.jpeg";

export const counrty_list = [
  {
    county_name: "Sri Lanka",
    counrty_img: Sri_Lanka,
    Route: "/SriLanka",
  },
  {
    county_name: "Italy",
    counrty_img: Italy,
    Route: "/Italy",
  },
  {
    county_name: "Spain",
    counrty_img: Spain,
    Route: "/Spain",
  },
  {
    county_name: "South_Korea",
    counrty_img: South_Korea,
    Route: "/SouthKorea",
  },
  {
    county_name: "Thailand",
    counrty_img: Thailand,
    Route: "/Thailand",
  },
];

export const manager_list = [
  {
    route: "details",
    name: "Catering Management",
    image: Catering,
  },
  {
    route: "deliverydashboard",
    name: "Delivery Management",
    image: Delivery,
  },
  {
    route: 3,
    name: "Feedback Management",
    image: Feedback,
  },
  {
    route: "inventory",
    name: "Inventory Management",
    image: Inventory,
  },
  {
    route: "menuDashboard",
    name: "Menu & Offer Management",
    image: Menu,
  },
  {
    route: 6,
    name: "Payment Management",
    image: Payment,
  },
  {
    route: "orderdashboard",
    name: "Order Management",
    image: Offer,
  },
  {
    route: "userdashboard",
    name: "User Management",
    image: User,
  },
];
