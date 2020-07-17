import React, {Component} from 'react'
import Artist from './Artist'
import Tracks from "./Tracks";
import Search from "./Search";

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class MusicMaster extends Component {

    state = {artist: null, tracks: []};

    searchArtist = artistQuery => {
        console.log("state", this.state);
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response =>response.json())
            .then(jason=>{
                if(jason.artists.total>0){
                const artist = jason.artists.items[0];
                this.setState({artist});
                console.log('artist', artist);

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                    .then(response=>response.json())
                    .then(jason=>{
                        this.setState({tracks: jason.tracks});
                        console.log('tracks',this.state.tracks)
                    })
                }
            })
            .catch(error=>alert(error.message))
    };

    render() {
        console.log("on render", this.state);
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist = {this.state.artist}/>
                <Tracks tracks = {this.state.tracks}/>
            </div>
        )
    }
}

export default MusicMaster;