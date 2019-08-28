import React from 'react';
import {withRouter} from 'react-router-dom'

class Lawlist extends React.Component{
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.backClickHandler = this.backClickHandler.bind(this)
    }
    clickHandler(event){
        event.preventDefault()
        this.props.lawSelect([event.target.value])
        let path = '/compare'
        this.props.history.push(path)
    }
    backClickHandler(event){
        event.preventDefault()
        this.props.countriesSelected("Select Country", "Select Country")
        let path = '/'
        this.props.history.push(path)
    }
    render(){
        return(
            <center>
                <div className="btn-group btn-group-lg" role="group" aria-label="Select the law you want to compare.">
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.clickHandler} value="Criminal law">Criminal Law</button>
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.clickHandler} value="Economics law">Economics law</button>
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.clickHandler} value="Road law">Road law</button>
                </div>
                <div>
                    <button className="btn btn-primary mt-3 mb-3" onClick={this.backClickHandler}>Back</button>
                </div>
            </center>
        )
    }
}

export default withRouter(Lawlist)