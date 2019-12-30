import React from 'react'
import Header from '../components/Header'
import Buttons from '../components/AddLawComponents/Buttons'
import TextBoxes from '../components/AddLawComponents/TextBoxes'

class AddLaw extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <center>
                    <div className="entry-text">Here you can add new laws.</div>
                </center>
                <TextBoxes />
                <Buttons />
            </div>
        )
    }
}

export default AddLaw