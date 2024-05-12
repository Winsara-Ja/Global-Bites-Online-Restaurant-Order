import "./addItems.css";
import React, { useState } from "react";
import { ImUpload } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Item from "../../components/Inventory/Item";

const AddItems = () => {
  const [image, setImage] = useState("");
  const [items, setItems] = useState("");
  const [ShowItems, setShowItems] = useState("");
  const navigate = useNavigate();

  const handleUploadImage = async (e) => {
    const image = e.target.files[0];
    setImage(image); // Set the file object to the img state directly
  };

  const [formData, setFormData] = useState({
    MenuId: "",
    Price: "",
    Item: "",
    Description: "",
    Country: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("MenuId", formData.MenuId);
    form.append("Item", formData.Item);
    form.append("Price", formData.Price);
    form.append("Description", formData.Description);
    form.append("Country", formData.Country);
    form.append("image", image); // Append the image file

    try {
      const response = await axios.post("http://localhost:5000/createMenu", form, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure proper content type for file uploads
        },
      });
      navigate("/manageMenu");
      console.log(response);
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Menus</h2>

        <label htmlFor="itemId">Menu Id: </label>
        <input
          type="text"
          id="itemId"
          name="itemId"
          onChange={handleOnChange}
          value={formData.MenuId}
          // required
        />

        <label htmlFor="Items">Items: </label>
        <input
          type="text"
          id="items"
          name="items"
          onChange={handleOnChange}
          value={formData.Item}
          // required
        />

        <label htmlFor="Price">Price Per Person: </label>
        <input
          type="number"
          id="Price"
          name="Price"
          onChange={handleOnChange}
          value={formData.Price}
          required
        />

        <label htmlFor="Description">Description : </label>
        <textarea
          id="Description"
          name="Description"
          onChange={handleOnChange}
          value={formData.Description}
          required
        />

        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          onChange={handleOnChange}
          value={formData.Country}
        >
          <option value="">Select</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="South Korea">South Korea</option>
          <option value="Thailand">Thailand</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
        </select>

        <label htmlFor="image">
          <div className="uploadBox">
            <input
              type="file"
              id="image"
              onChange={handleUploadImage}
              required
            />
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
            ) : (
              <ImUpload />
            )}
          </div>
        </label>
        <div className="food-image-label-container">
          <label className="food-image-label">Menu image</label>
        </div>
        <div className="button-container">
          <button className="btn1">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
