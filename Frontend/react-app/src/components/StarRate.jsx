import React from 'react';
import './StarRate.css';
import { FaStar } from 'react-icons/fa';

const StarRate = ({ value, onChange }) => {
  const handleStarClick = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className='star-rating'>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type='radio'
              name='rate'
              value={currentRate}
              onClick={() => handleStarClick(currentRate)}
              style={{ display: 'none' }} // Hide the radio button
            />
            <FaStar
              className='star'
              size={20}
              color={(currentRate <= value) ? 'yellow' : 'grey'} // Update color based on value
              style={{ cursor: 'pointer' }} // Set cursor to pointer
              onClick={() => handleStarClick(currentRate)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
