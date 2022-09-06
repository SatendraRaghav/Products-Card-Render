import React from 'react'

const Rating = ({rating}) => {
  return (
    <div>{
        rating == 5 ? (
                <span className="rating">*****</span>
              ) : rating >= 4 ? (
                <span className="rating">****</span>
              ) : rating >= 3 ? (
                <span className="rating">***</span>
              ) : rating >= 2 ? (
                <span className="rating">**</span>
              ) : rating >= 1 ? (
                <span className="rating">*</span>
              ) : (
                rating < 1 ?? <span className="rating">Less than one</span>)
        }  
    </div>
  )
}

export default Rating