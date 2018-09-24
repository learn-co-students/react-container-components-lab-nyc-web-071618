import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component{
    state={
        // searchURL:'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=',
        reviews:[],
        searchTerm:''
    }

    handleSearch = (searchTerm) => {
        
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+searchTerm+'&api-key=f98593a095b44546bf4073744b540da0').
        then(res=>res.json()).
        then(thing=>this.setState({reviews:thing.results}))
    }
    


    render(){
        return(
                <div className='searchable-movie-reviews'>
                    <form onSubmit={(e)=>this.handleSearch(this.state.searchTerm)}>
                        <input type='text' default='search here' onChange={(e)=>{this.setState({searchTerm:e.target.value})}}/>
                        <input type='submit' value='Submit'/>
                    </form>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
        )
    }

    
}

export default SearchableMovieReviewsContainer