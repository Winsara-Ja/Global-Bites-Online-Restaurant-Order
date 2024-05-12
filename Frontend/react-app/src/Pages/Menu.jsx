import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Menu.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Menu = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [Quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const userID = currentUser._id;
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
        // Set all items initially
        setFilteredItems(response.data);
        setAllItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const AddToCart = async (item) => {
    const { _id, itemName, image, Description, Price } = item;

    try {
      await axios.post("http://localhost:5000/addtocart", {
        userID,
        _id,
        itemName,
        image,
        Description,
        Quantity,
        Price,
      });
      if (item.error) {
        toast.error(item.error);
      } else {
        toast.success("Item Added To The Cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (cat) => {
    // Check if the clicked category is the same as the currently selected category
    if (selectedCategory === cat) {
      // Reset the selected category to null (or any other default value)
      setSelectedCategory(null);
      // Reset filtered items to all items
      setFilteredItems(allItems);
      console.log("Displaying all items.");
    } else {
      // Set the selected category
      setSelectedCategory(cat);
      console.log("Selected category:", cat);
      // Filter items based on the selected category from all items
      const itemsInSelectedCategory = allItems.filter(
        (item) => item.category === cat
      );
      setFilteredItems(itemsInSelectedCategory);
    }
  };

  const handleSearchInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);

    // Check if search query is empty
    if (searchValue === "") {
      // If search query is empty, display all items
      setFilteredItems(allItems);
    } else {
      // Filter items based on the search query
      const filteredItemsBySearch = allItems.filter((item) =>
        item.itemName.toLowerCase().includes(searchValue)
      );
      setFilteredItems(filteredItemsBySearch);
    }
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  const filterItemsByPriceRange = () => {
    const filteredItemsByPriceRange = allItems.filter(
      (item) => item.Price >= priceRange.min && item.Price <= priceRange.max
    );
    console.log("Filtered Items:", filteredItemsByPriceRange);

    setFilteredItems(filteredItemsByPriceRange);
  };

  const handleImageClick = async(id) => {
    navigate("/singleItem/" + id)
  }

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating); // Round down the rating to the nearest integer
    const hasHalfStar = rating % 1 !== 0; // Check if there's a decimal part
  
    const stars = [];
  
    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
        stars.push(<FaStar key={i} color="gold" />);
    }
  
    // Render half-filled star if there's a decimal part and it's the first encountered
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key={filledStars} color="gold" />);
    }
  
    // Calculate the number of empty stars
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
  
    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={filledStars + i + (hasHalfStar ? 1 : 0)} color="grey" />);
    }
  
    return stars;
} 

  return (
    <>
      <Header />
      <div className="emptyspace"></div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-bar"
          />
          <div className="price-range-container">
            <label className="price-range-lable">Price Range:</label>
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceRangeChange}
              placeholder="Min"
            />
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceRangeChange}
              placeholder="Max"
            />
            <button onClick={filterItemsByPriceRange} className="filter-btn">
              Apply
            </button>
          </div>
        </div>

        <div className="explore-menu-list">
          {Array.isArray(categories) &&
            categories.map((cat, index) => (
              <div
                onClick={() => handleCategoryClick(cat)}
                key={index}
                className={`explore-menu-list-item ${
                  selectedCategory === cat ? "selected" : ""
                }`}
              >
                <p>{cat}</p>
              </div>
            ))}
        </div>
        <hr />
        <div className="menuItems">MENU ITEMS</div>
        <div className="filtered-items">
          {filteredItems.map((item, index) => (
            <div key={index} className="item">
              <div className="wrapper">
                <div className="product-info">
                  <div className="product-text">
                    <h1 onClick={() => handleImageClick(item._id)}>{item.itemName}</h1>
                    <div className='avg-rating'>{renderStars(item.averageRating)}</div>
                  </div>
                  <div className="menu-img2">
                    <img
                      src={"http://localhost:5000/" + item.image}
                      alt={item.itemName}
                      className="menu-image"
                      onClick={() => handleImageClick(item._id)}
                    />
                  </div>
                  <div className="price">Rs.{item.Price}</div>
                  {item.availability === "not-available" ? (
                    <div className="not-available-msg">
                      <p>Not Available</p>
                    </div>
                  ) : (
                    <div className="product-price-btn">
                      <button type="button" onClick={() => AddToCart(item)}>
                        Add To Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
