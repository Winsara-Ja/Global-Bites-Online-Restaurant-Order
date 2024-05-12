import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./displayMenu.css";
import ManagerHeader from "../Managers/ManagerHeader";
import { toast } from "react-hot-toast";
import { useReactToPrint } from "react-to-print";

// Wrap the DisplayMenu component with React.forwardRef
const DisplayMenu = React.forwardRef((props, ref) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItems(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("http://localhost:5000/delete/" + id);

    if (data.data.success) {
      alert(data.data.message);
    }
  };

  const HandleEdit = async (id) => {
    navigate(`/updateMenu/${id}`);
  };

  const handleAvailabilityChange = async (id, newAvailability) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/updateAvailability/${id}`,
        {
          availability: newAvailability,
        }
      );

      if (response.data.success) {
        // Update the item's availability in the UI
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === id ? { ...item, availability: newAvailability } : item
          )
        );
        toast.success("Availability updated successfully!")
      }
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  const handleAddItem = () => {
    navigate("/addItems");
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Use useRef to get a reference to the component
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    DocumentTitle: "Menu Items",
    onAfterPrint: () => alert("Details Report Successfully Download !"),
  });

  return (
    <>
      <ManagerHeader />
      <div className="menuItems">MANAGE MENU ITEMS</div>
      <div className="add-button-container">
        <h1>Add Items Here!</h1>
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
      <div className="table-container" ref={ref}>
        {/* Assign ref to the table container */}
        <table>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Item Description</th>
              <th>Item Category</th>
              <th>Item Country</th>
              <th>Item Image</th>
              <th>Item Ratings</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.Description}</td>
                <td>{item.category}</td>
                <td>{item.country}</td>
                <td>
                  <img
                    src={"http://localhost:5000/" + item.image}
                    alt={item.itemName}
                  />
                </td>
                <td>{item.averageRating}</td>
                <td>
                  <select
                    value={item.availability}
                    onChange={(e) =>
                      handleAvailabilityChange(item._id, e.target.value)
                    }
                  >
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                  </select>
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
      <div className="download-pdf-container">
        <button type="button" onClick={handlePrint}>
          Download PDF
        </button>
      </div>
    </>
  );
});

export default DisplayMenu;
