// Code MovieReviews Here

import React from 'react'


const Review = ({headline,link,summary_short})=>{
  return (
    <div key={summary_short} className="review">
      <a href={link.url} target="_blank"><h3>{headline}</h3></a>
      <div>{summary_short}</div>
    </div>
  )
}

const MoiveReviews = ({reviews})=>{
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

export default MoiveReviews
