import React, {Component} from 'react'

class Search extends Component {

    const = {artistQuery: ''};

    updateArtisQuery = event => {
        console.log("event", event.target.value);
        this.setState({artistQuery: event.target.value})
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    };

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery)

    };

    render() {
        return (
            <div>
                <input
                    onChange={this.updateArtisQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for an artist'/>
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;