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
                <img className="d-flex align-items-center pt-2" style={{ height: 20, width: 20 }} onClick={this.handleLikes.bind(this)} src="https://openclipart.org/download/135559/OCAL-Favorites-Icon-Unselected.svg" alt="placeholder" />
                <h6 className="pt-1">{this.state.clicks}</h6>
            </div>


        )
    }
}

export default Like


