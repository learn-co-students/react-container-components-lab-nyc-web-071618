import React from 'react'
const MovieReviews = (props) => {
    console.log(props)
    return (
        <div className='review-list'>
        {props.reviews.map((review)=>{
            return <div className='review'>
                        <p>{review.display_title}</p>
                        <p>{review.summary_short}</p>
                    </div>
        })}
        </div>
    )

}

export default MovieReviews