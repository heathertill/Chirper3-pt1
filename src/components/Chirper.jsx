import React from 'react';
import App from './App';
import NavBar from './NavBar';

const Chirper = (props) => {
    return (
            <div className="navBar">
                <NavBar />

                <div className="container-fluid pt-5 mt-4 mx-0 pb-5 bg-light">
                    
                        
                        <App />
                
                </div>
            </div>
            
        




    )
}










export default Chirper;