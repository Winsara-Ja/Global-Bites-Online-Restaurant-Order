import React from "react";
import "./AdminHome.css";
import { manager_list } from "../assets/assets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const AdminHome = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {currentUser.isAdmin ? (
        <>
          <NavBar />
          <div className="adhome">
          <div className="manager-list">
            {manager_list.map((manager, index) => (
              <Link
                to={`/manager/${manager.route}`}
                key={index}
                className="list-manager"
              >
                <img
                  className="manager-img"
                  src={manager.image}
                  alt="manager-flag"
                />
                <p className="manager-name">{manager.name}</p>
              </Link>
            ))}
          </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="notAthorized">Not Athorized</h1>
        </>
      )}
      
    </>
  );
};

export default AdminHome;
