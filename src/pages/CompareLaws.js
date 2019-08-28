import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LawTexts from '../components/LawTexts'

class CompareLaws extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstCountry: props.firstCountry,
            secondCountry: props.secondCountry,
            law: props.law
        }
    }
    render(){
        return(
            <div>
                <Header />
                <LawTexts {...this.state} />
                <Footer />
            </div>
        )
    }
}

export default CompareLaws