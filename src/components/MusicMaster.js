import React, {Component} from 'react'
import Artist from './Artist'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class MusicMaster extends Component {

    state = {artistQuery: '', artist: null, tracks: []};

    updateArtisQuery = event => {
        console.log("event", event.target.value);
        this.setState({artistQuery: event.target.value})
    };

    handleKeyPress = event => {
        if (event.key=== 'Enter') {
            this.searchArtist();
        }
    };

    searchArtist = () => {
        console.log("state", this.state);
        fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
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
                <input
                    onChange={this.updateArtisQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for an artist'/>
                <button onClick={this.searchArtist}>Search</button>
                <Artist artist = {this.state.artist}/>
            </div>
        )
    }
}

export default MusicMaster;