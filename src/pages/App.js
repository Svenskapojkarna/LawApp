import React from 'react'
import Header from '../components/Header.js'
import '../styles/bootstrap.min.css';
import Footer from '../components/Footer.js';
import TextBox from '../components/TextBox.js'

function App(props) {
  return (
    <div>
        <Header />
        <center>
          <div className="entry-text">Select the countries which laws will be compared.</div>
        </center>
        <TextBox first={props.firstCountry} second={props.secondCountry} countriesSelected={props.countriesSelected}/>
        <Footer />
    </div>
  );
}

export default App