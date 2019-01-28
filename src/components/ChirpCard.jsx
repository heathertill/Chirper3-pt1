import React from 'react';
import Like from './Like'

const ChirpCard = (props) => {
const { user, message } = props.post
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



