import React,{Component} from 'react'

const Joke = ({joke})=>{
    const {setUp,punchLine} = joke;
    return(
        <p>{setUp} <em>{punchLine}</em></p>
    )
};

class Jokes extends Component {
    state = {joke: {}, jokes: []};


    componentDidMount() {
        fetch('https://official-joke-api-appspot.com/random_joke')
            .then(response => response.json())
            .then(jason => this.setState({joke: jason}))
            .catch(error=>alert(error.message))

    }

    fetchJokes(){
        fetch('https://official-joke-api-appspot.com/random_joke')
            .then(response => response.json())
            .then(jason => this.setState({jokes: jason}))
            .catch(error=>alert(error.message))
    }

    render() {
        const {setup, punchLine} = this.state.joke;
        return(
            <div>
                <h2>HighLighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <h2>More Jokes</h2>
                <button onClick={this.fetchJokes}>click me</button>
                {
                    this.state.jokes.map(joke=>(<joke key={joke.id} joke ={joke}/>))
                }
            </div>
        )
    }
}

export default Jokes;

