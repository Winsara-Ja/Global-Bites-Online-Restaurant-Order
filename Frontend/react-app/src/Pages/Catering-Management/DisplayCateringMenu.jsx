import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./displayMenu.css";
import ManagerHeader from "../Managers/ManagerHeader";

const DisplayMenu = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/cateringMenu")
      .then((items) => setItems(items.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = async (id) => {
    const data = await axios.delete("http://localhost:5000/deleteMenu/" + id);

    if (data.data.success) {
      alert(data.data.message);
    }
  };
  const HandleEdit = async (id) => {
    navigate(`/updateMenu/${id}`);
  };

  const handleAddItem = () => {
    navigate("/addItems");
  };

  const filteredItems = items.filter((item) =>
    item.MenuID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ManagerHeader />
      <div className="menuItems">MANAGE MENUS</div>
      <div className="add-button-container">
        <button type="button" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by item name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>MenuID</th>
              <th>MenuItems</th>
              <th>Description</th>
              <th>Country</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id}>
                <td>{item.MenuID}</td>
                <td>
                {item.MenuItems.map((menuItems) => (
                  <p>{menuItems.ItemName}</p>
                ))}</td>
                <td>{item.Description}</td>
                <td>{item.Country}</td>
                <td>{item.TotalPrice}</td>
                <td>
                  <img
                    src={"http://localhost:5000/" + item.image}
                    alt={item.itemName}
                  />
                </td>
                <td className="button-col">
                  <button type="button" onClick={() => HandleEdit(item._id)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(item._id)}>
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

export default DisplayMenu;
