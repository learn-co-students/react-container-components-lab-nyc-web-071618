import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <h1> Checkout the reviews </h1>
         <MovieReviews reviews={this.state.reviews}  />
      </div>
    )
  }


    componentDidMount(){
      fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=6b1775ad7f5b4651a66deacf94078396')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
    }
}


export default LatestMovieReviewsContainer
