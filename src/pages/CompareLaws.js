import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LawTexts from '../components/LawTexts'

class CompareLaws extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <LawTexts {...this.props} />
                <Footer />
            </div>
        )
    }
}

export default CompareLaws