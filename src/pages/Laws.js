import React from 'react'
import Header from '../components/Header.js'
import '../styles/bootstrap.min.css';
import Footer from '../components/Footer.js';
import '../styles/App.css'
import Lawlist from '../components/Lawlist'


function Laws(props) {
  return (
    <div>
        <Header />
        <center>
          <div className="entry-text">Select the law you want to compare.</div>
        </center>
        <Lawlist countriesSelected={props.countriesSelected} lawSelect={props.lawSelect} firstlaw={props.firstlaw} secondlaw={props.secondlaw}/>
        <Footer />
    </div>
  );
}

export default Laws