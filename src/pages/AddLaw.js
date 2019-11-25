import React from 'react'
import Header from '../components/Header'
import Buttons from '../components/AddLawComponents/Buttons'

class AddLaw extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <center>
                    <div className="entry-text">Here you can add new laws.</div>
                </center>
                <Buttons />
            </div>
        )
    }
}

export default AddLaw