import React from 'react';
import ChirpCard from './ChirpCard';



class Chirper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chirps: [],
            text: "",
            name: "",
            likes: 1
        }
    }
    componentDidMount() {
        let chirps = [
            {
                user: "Bill",
                message: "hello",
                likes: 0
            },
            {
                user: "Sam",
                message: "howdy",
                likes: 0
            }
        ];
        this.setState({ chirps })
    }

    
    handleSubmit(e) {
        e.preventDefault();
        let chirps = this.state.chirps;
        let newChirp = {
            user: this.state.name,
            message: this.state.text,
            
        }
        console.log('test')
        chirps.unshift(newChirp);
        this.setState({ chirps, text: "", name: "" })
        
    }


    render() {
        return(
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-5">
                        <form className="form-group col-md-12 p-3 border border-secondary rounded" style={{backgroundColor: '#AED6F1'}} onSubmit={(e) => this.handleSubmit(e)}>
                        <label>Your Name</label>
                        <input className="form-control" type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        <label>Your Message</label>
                        <input className="form-control" type="text" rows="3" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}/>
                        <button className="btn btn-primary m-3" type="submit">Chirp</button>
                        </form>
                    </div>
                    <div className="col-7">
                        {this.state.chirps.map((chirp, index) => {
                            return <ChirpCard key={index} chirp={chirp} likes={0}/>
                        })}
                </div>

                </div>
                
            </div>
        )
    }
}




export default Chirper


///////


import React from 'react'



class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.chirp.likes
        }
    }

    handleLikes() {
        let likes = this.state.likes;
        likes++;
        this.setState({ likes })
    }


    render() {
        return (
            
            <div className="likes d-flex">
                <img className="d-flex align-items-center pt-2" style={{ height: 22, width: 22 }} onClick={() => this.handleLikes()} src="https://openclipart.org/download/135559/OCAL-Favorites-Icon-Unselected.svg" alt="placeholder" />
                <h6 className="pt-1">{this.state.likes}</h6>
            </div>


        )
    }
}

export default Like




