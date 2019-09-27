import React from 'react'
import '../styles/LawTexts.css'
import {withRouter} from 'react-router-dom'
import db from '../database/firebase';

class LawTexts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstLawText: 'some law',
            secondLawText: 'some law'
        }
        this.backButton = this.backButton.bind(this)
    }
    backButton(event){
        event.preventDefault()
        let path = '/laws'
        this.props.history.push(path)
    }

    componentDidMount(){
        db.collection("finland")
            .doc('private-law')
            .get()
            .then(doc => {
                this.setState({firstLawText: doc.data()})
            });
        db.collection("germany")
            .doc('private-law')
            .get()
            .then(doc => {
                this.setState({secondLawText: doc.data()})
            });
    }

    render(){
        return(
            <center>
                <div className="row">
                    <div className="column">
                        <h1>{this.props.firstCountry}</h1>
                        First country is {this.props.firstCountry} and the law is {this.state.firstLawText}.
                    </div>
                    <div className="column">
                        <h1>{this.props.secondCountry}</h1>
                        Second country is {this.props.secondCountry} and the law is {this.state.secondLawText}.
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