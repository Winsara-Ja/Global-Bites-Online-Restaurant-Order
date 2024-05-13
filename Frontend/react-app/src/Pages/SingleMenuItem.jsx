import React, { useEffect, useState } from 'react';
import './SingleMenuItem.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRate from '../components/StarRate';
import { toast } from 'react-hot-toast';
import Header from '../components/Header';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";

const SingleMenuItem = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const { id } = useParams();
  const [itemData, setItemData] = useState({
    itemId: '',
    itemName: '',
    Description: '',
    Price: '',
    category: '',
    country: '',
    image: '',
    availability: '',
    averageRating: '' // Default average rating
  });
  const userID = currentUser._id;
  const [Quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(null); // State to store the user's rating
  const [rating, setRating] = useState(null)
  const [ratingCount, setRatingCount] = useState(null)
  const email = currentUser.email

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items/' + id);
        setItemData(response.data);
        // Fetch the user's rating for the item
        const userRatingResponse = await axios.get(`http://localhost:5000/ratings/${id}/${userID}`);
        if (userRatingResponse.data.rating) {
          setUserRating(userRatingResponse.data.rating.rating); 
        }
        const ratingCountResponse = await axios.get(`http://localhost:5000/count/${id}`);
        setRatingCount(ratingCountResponse.data);
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };
    fetchData();
  }, [id]);
  
  const handleRatingChange = (value) => {
    setRating(value); // Update the user's rating state
  };

  const saveRating = async () => {
    try {
      await axios.post('http://localhost:5000/ratings', {
        itemId: id,
        rating: rating,
        userId: userID
      });
      await axios.post('http://localhost:5000/send-email', {
        recipientEmail: email, // Change this to the recipient's email
        itemName: itemData.itemName,
        userRating: rating
      });
      toast.success('Rating saved successfully');
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

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
  };

  return (
    <>
      <Header />
      <div className='container21'>
        <h1>{itemData.itemId}</h1>
        <h1>{itemData.itemName}</h1>
        <div className='avg-rating'>{renderStars(itemData.averageRating)}</div>
        <h2>({ratingCount} ratings)</h2>
        <div className='item-details'>
          <div className='item-image-container21'>
            <img src={'http://localhost:5000/' + itemData.image} alt={itemData.itemName} />
          </div>
          <div className='item-text-container'>
            <p>{itemData.Description}</p>
            <p className='price'>Price : Rs.{itemData.Price}.00</p>
            {userRating !== null ? (
              // Display user's rating if available
              <div className='rating'>
                <p>You rated this food as </p>
                <StarRate value={userRating} disabled />
              </div>
            ) : (
              // Allow user to rate the item
              <div className='rating'>
                <StarRate value={rating} onChange={handleRatingChange} />
                <button onClick={saveRating}>Save Rating</button>
              </div>
            )}
            {itemData.availability === 'not-available' ? (
              <div className='not-available-msg'>
                <p>Not Available</p>
              </div>
            ) : (
              <div className='product-price-btn'>
                <button type='button' onClick={() => AddToCart(itemData)}>
                  Add To Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMenuItem;