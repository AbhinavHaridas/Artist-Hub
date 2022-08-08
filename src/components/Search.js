import React, { Component } from "react";

class Search extends Component {
    state = { artistQuery: '' };

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }
    
    handleKeyPress = event => {
        if (event.key == 'Enter') {
            this.searchArtists();
        }
    }

    searchArtists = () => {
        this.props.searchArtists(this.state.artistQuery);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input
                onChange={this.updateArtistQuery} 
                onKeyPress={this.handleKeyPress}
                placeholder="Search for an Artist"
                className="searchBar"
                />
                <button onClick={this.searchArtists} className="button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        )
    }
}

export default Search;