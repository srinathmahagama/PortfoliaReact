import React, {Component} from 'react';

const TITLES = [
    "a Software Engineer",
    "a Enthusiastic learner",
    "a music lover"
];

class Title extends Component {

    state = {titleIndex: 0, fadeIn: true};

    componentDidMount() {

        console.log("component has mount");
        this.animateTitle();
        this.timeOut = setTimeout(() => this.setState({fadeIn: false}), 2000)
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeOut)
    }

    animateTitle = () => {
        this.titleInterval = setInterval(() => {
                const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

                this.setState({titleIndex, fadeIn: true});

                this.timeOut = setTimeout(() => this.setState({fadeIn: false}), 2000)
            },
            4000)

    };

    render() {

        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;