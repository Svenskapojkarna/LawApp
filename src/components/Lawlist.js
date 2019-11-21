import React from 'react';
import {withRouter} from 'react-router-dom'
import firebase from '../database/firebase'

class Lawlist extends React.Component{
    constructor(props){
        super(props)
        this.backClickHandler = this.backClickHandler.bind(this)
    }

    clickHandler = event => {
        event.preventDefault()
        let firstText = []
        let counter = 1
        this.props.lawSelect([event.target.value])
        const firstRef = firebase.firestore().collection(this.props.firstCountry).doc(event.target.value)
        firstRef.get().then(doc => {
            while(counter <= doc.data()["length"]){
                firstText.push(doc.data()[counter]["law"])
                counter++
            }
            this.props.firstlaw(firstText)
        })
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(console.log("done"))
            }, 2000)
        })
    }

    changePage = async(event) => {
        await this.clickHandler(event)
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
                    <button type="button" className="btn btn-secondary mb-2" onClick={this.changePage} value="private">Private Law</button>
                </div>
                <div>
                    <button className="btn btn-primary mt-3 mb-3" onClick={this.backClickHandler}>Back</button>
                </div>
            </center>
        )
    }
}

export default withRouter(Lawlist)