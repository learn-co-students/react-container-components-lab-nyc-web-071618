import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;
// let filteredReviews = []

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
    .then(res=>res.json())
    .then(data=>this.setState({ reviews: data.results }))
  }

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  // filterReviews = event => {
  //   filteredReviews = this.state.reviews.filter(review => {
  //     return review.display_title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   });
  //   console.log(filtered)
  //   return filtered;
  // }

  // displayFilteredResults = event => {
  //   this.state.searchTerm !== '' ? <MovieReviews reviews={this.filterReviews} /> : null
  // }

  render() {
    // console.log(filteredReviews)
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          <input onChange={this.handleInputChange}></input>
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
