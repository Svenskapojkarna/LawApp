import React from 'react'
import '../styles/LawTexts.css'
import {withRouter} from 'react-router-dom'

class LawTexts extends React.Component{
    constructor(props){
        super(props)
        this.backButton = this.backButton.bind(this)
    }
    backButton(event){
        event.preventDefault()
        let path = '/laws'
        this.props.history.push(path)
    }

    render(){

        const renderText = (
            <div>
                {this.props.firstText.map((text, index) => {
                    return <p key={index}>{text}</p>
                })}
            </div>
        )

        return(
            <center>
                <div className="row">
                    <div className="column">
                        <h1>{this.props.firstCountry}</h1>
                        {renderText}
                    </div>
                    <div className="column">
                        <h1>{this.props.secondCountry}</h1>
                        <p>{this.props.secondText}</p>
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