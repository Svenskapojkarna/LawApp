import React from 'react'
import '../styles/LawTexts.css'
import {withRouter} from 'react-router-dom'

class LawTexts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstLawText: '',
            secondLawText: ''
        }
        this.backButton = this.backButton.bind(this)
    }
    backButton(event){
        event.preventDefault()
        let path = '/laws'
        this.props.history.push(path)
    }
    render(){
        return(
            <center>
                <div className="row">
                    <div className="column">
                        <h1>{this.props.firstCountry}</h1>
                        First country is {this.props.firstCountry} and the law is {this.props.law}.
                    </div>
                    <div className="column">
                        <h1>{this.props.secondCountry}</h1>
                        Second country is {this.props.secondCountry} and the law is {this.props.law}.
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary mt-3 mb-3" onClick={this.backButton}>Back</button>
                </div>
            </center>
        )
    }
}

export default withRouter(LawTexts)