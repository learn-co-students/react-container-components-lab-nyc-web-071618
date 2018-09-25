import React from 'react';

const MovieReviews = (props) => {
  return (
    <ul className="review-list">
    {props.reviews.map((review, index) =>
      <div key={index} className="review">
      <li>{review.display_title}</li>
        <li> {review.headline}</li>
      </div>
    )}
    </ul>
  )
}

export default MovieReviews;
