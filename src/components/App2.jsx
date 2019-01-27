import React from 'react';
import ChirpCard from './ChirpCard';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            text: "",
            name: ""
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

    handleSubmit(e) {
        e.preventDefault();
        let posts = this.state.posts;
        let newPost = {
            user: this.state.name,
            message: this.state.text
        }
        posts.unshift(newPost);
        this.setState({ posts, text: "", name: "" })
    }

    render() {
        return(
            <div className="container">
                <div className="row mt-3">
                    <form className="form-group col-md-12 p-3 border border-dark rounded" onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Your Name</label>
                    <input className="form-control" type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    <label>Your Message</label>
                    <input className="form-control" type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                    <button className="btn btn-primary m-3">Add Post</button>
                    </form>
                </div>
                
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