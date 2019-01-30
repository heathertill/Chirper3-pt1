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


