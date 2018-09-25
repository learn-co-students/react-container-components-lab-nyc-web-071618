import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  handleSubmit = (event) => {
     event.preventDefault();
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=6b1775ad7f5b4651a66deacf94078396&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }

  }
  handleChange = (e) => {
    const info = e.target.value
    this.setState({
      searchTerm: info
    })
  }



  render(){
    return (
      <div className= "searchable-movie-reviews">
        <h2> Search for movies </h2>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
              <input type="submit"  />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
