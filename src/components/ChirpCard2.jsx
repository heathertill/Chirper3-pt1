import React from 'react';

const ChirpCard = (props) => {
const { user, message } = props.post
    return ( 
        <div className="col-md-6">
            <div className="card m-3">
                <div className="card-body">
                    <h5 className="card-title">{user}</h5>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div>
    );


}

export default ChirpCard


