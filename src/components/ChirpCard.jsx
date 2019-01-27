import React from 'react';

const ChirpCard = (props) => {
const { user, message } = props.post
    return ( 
        <div>
            <div className="card" >
                <div className="card-header bg-primary py-4"></div>
                <div className="card-body bg-secondary block p-0">
                    <div className="media">
                        <img className="align-self-start m-2 mr-3 bg-white rounded-circle" style={{height: 72, width: 72}} src="https://openclipart.org/download/202776/pawn.svg" alt="placeholder"/>
                        <div className="media-body pt-2 pb-5">
                            <h5 className="name text-white my-0">{user}</h5>
                            <div className="message text-white">{message}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
    );


}

export default ChirpCard



