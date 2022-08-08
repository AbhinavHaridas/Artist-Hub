import React, { Component } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

const  API_ADDRESS = 'http://localhost:3000';

class App extends Component {
    state = { artist: null, tracks: [] }

    componentDidMount() {
        this.searchArtists('Kendrick Lamar');
    }

    searchArtists = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
         .then(response => response.json())
         .then(json => {
            if (json.artists.total > 0) {
                const artist = json.artists.items[0];
                this.setState({ artist });

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                 .then(response => response.json())
                 .then(json => {
                    const tracks = json.tracks;
                    this.setState({ tracks })
                 })
                 .catch(error => alert(error.message));
            }
         })
         .catch(error => alert(error.message));
    }



    render() {
        return (
            <div>
                <h2>Artist Hub</h2>
                <Search searchArtists={this.searchArtists} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        )
    }
}

export default App;