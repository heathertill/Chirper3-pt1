import React from 'react'

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
                    {this.state.posts.unshift(post => {
                        return <h1>{post.user}</h1>
                    })}
                </div>
            </div>
        )
    }
}

//this.setState({ posts, user: "", message: "" })


export default App