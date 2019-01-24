import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    render() {
        return(
            <h1 className="text-primary m-5">Hello World!!</h1>
        )
    }
}




export default App