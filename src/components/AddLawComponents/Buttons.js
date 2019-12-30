import React from 'react'
import {withRouter} from 'react-router-dom'

class Buttons extends React.Component{

    backHandler = (event) => {
        event.preventDefault()
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <center>
                    <button className="btn btn-primary mt-3 mb-3" onClick={this.backHandler}>Back</button>
                </center>
            </div>
        )
    }
}

export default withRouter(Buttons)