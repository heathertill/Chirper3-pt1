import React from 'react'

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0}

    }

    handleLikes() {
    	this.setState((prevState) => ({
        clicks: prevState.clicks + 1
        }));
    }


    render() {
        return (
            <div className="likes d-flex">
                <img className="d-flex align-items-center pt-2" style={{ height: 22, width: 22 }} onClick={this.handleLikes.bind(this)} src="https://openclipart.org/download/135559/OCAL-Favorites-Icon-Unselected.svg" alt="placeholder" />
                <h6 className="pt-1">{this.state.clicks}</h6>
            </div>


        )
    }
}

export default Like

/////////

import React from 'react';
import Like from './Like'

const ChirpCard = (props) => {
const { user, message, likes } = props.post
    return ( 
        <div>
            <div className="card border border-secondary rounded mb-1" >
                <div className="card-body bg-white block p-0">
                    <div className="media">
                        <img className="align-self-start m-2 mr-3 border border-secondary rounded-circle" style={{height: 50, width: 50, backgroundColor: '#D6EAF8'}} src="https://openclipart.org/download/202776/pawn.svg" alt="placeholder"/>
                        <div className="media-body pt-2 pb-5">
                            <h5 className="name my-0">{user}</h5>
                            <div className="message">{message}</div>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex flex-row p-0" style={{ height: '30px' }}>
                    <div className="col-1">
                        <div>
                            <Like />
                        </div>
                    </div>
                </div>
            </div>
        </div>          
    );


}

export default ChirpCard




import React from 'react';



class ChirpCard extends React.Component {
    
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
        const { user, message } = this.props.chirp
        return ( 
            <div>
                <div className="card border border-secondary rounded mb-1" >
                    <div className="card-body bg-white block p-0">
                        <div className="media">
                            <img className="align-self-start m-2 mr-3 border border-secondary rounded-circle" style={{height: 50, width: 50, backgroundColor: '#D6EAF8'}} src="https://openclipart.org/download/202776/pawn.svg" alt="placeholder"/>
                            <div className="media-body pt-2 pb-5">
                                <h5 className="name my-0">{user}</h5>
                                <div className="message">{message}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer d-flex flex-row p-0" style={{ height: '30px' }}>
                        <div className="col-1">
                            <div className="likes d-flex">
                                <img className="d-flex align-items-center pt-2" style={{ height: 22, width: 22 }} onClick={() => this.handleLikes()} src="https://openclipart.org/download/135559/OCAL-Favorites-Icon-Unselected.svg" alt="placeholder" />
                                <h6 className="pt-1">{this.state.likes}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        );
    }
}







export default ChirpCard



