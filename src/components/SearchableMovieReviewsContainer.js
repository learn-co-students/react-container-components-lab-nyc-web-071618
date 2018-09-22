import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  constructor(props){
    super(props)
    this.state={
      searchTerm:"",
      reviews:[]
    }
  }

  handleChange = (event)=>this.setState({searchTerm:event.target.value})
  handleSubmit = (event)=>{
    event.preventDefault();
    fetch(URL+`&query=${this.state.searchTerm}`)
      .then(resp=>resp.json())
      .then(json=>{
        this.setState({
          reviews:json.results
        })
      })
  }
  render(){
    return (
      <div className="searchable-movie-reviews">

        <form onSubmit={this.handleSubmit} >
        searchTerm:<input type="text" onChange={this.handleChange}/>
        <input type="submit" onSubmit={this.handleSubmit}/>
        </form>
        <h2>The Search Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
