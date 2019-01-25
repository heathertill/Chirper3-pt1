import React from 'react';
import ChirpCard from './ChirpCard';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        let posts = [
            {
                user: "Bill",
                message: "hello"
            },
            {
                user: "Sam",
                message: "howdy"
            }
        ];
        this.setState({ posts })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.state.posts.map((post, index) => {
                        return <ChirpCard key={ index } post={ post } />
                    })}
                </div>
            </div>
        )
    }
}

//this.setState({ posts, user: "", message: "" })


export default App