import React from 'react'

const Like = (props) => {
    return (
        <div className="likes d-flex">
            <img className="d-flex align-items-center pt-2" style={{ height: 22, width: 22 }}
                onClick={props.chirpLikes.onClick}
                src="https://openclipart.org/download/135559/OCAL-Favorites-Icon-Unselected.svg"
                alt="placeholder" />
        <h6 className="pt-1">{props.chirpLikes.likes}</h6>
    </div>
        )
    }


export default Like


