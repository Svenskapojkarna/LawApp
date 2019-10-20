import React from 'react';
import {withRouter} from 'react-router-dom'
import firebase from '../database/firebase'

class Lawlist extends React.Component{
    constructor(props){
        super(props)
        this.backClickHandler = this.backClickHandler.bind(this)
    }
    clickHandler = async(event) => {
        event.preventDefault()
        let firstText = []
        let secondText = []
        this.props.lawSelect([event.target.value])
        const firstRef = firebase.firestore().collection(this.props.firstCountry).doc(event.target.value)
        const secondRef = firebase.firestore().collection(this.props.secondCountry).doc(event.target.value)
        firstRef.get().then(doc => {
            console.log(doc.data()['law'])
        })
        this.props.firstlaw(firstText.join(' '))
        secondRef.get().then(doc => {
            secondText.push(doc.data()["law"])
        })
        this.props.secondlaw(secondText.join(' '))
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
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.clickHandler} value="private">Private Law</button>
                </div>
                <div>
                    <button className="btn btn-primary mt-3 mb-3" onClick={this.backClickHandler}>Back</button>
                </div>
            </center>
        )
    }
}

export default withRouter(Lawlist)