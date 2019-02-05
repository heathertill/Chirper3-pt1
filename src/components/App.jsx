import React from 'react';
import NavBar from './NavBar';
import Chirp from './Chirp'

const App = (props) => {
    return (
            <div className="navBar">
                <NavBar />
                <div className="container-fluid pt-5 mt-4 pb-5 " style={{height: '100vh', backgroundColor: '#E0E0E0'}}>
                    <Chirp />
                </div>
            </div>

    )
}


export default App;