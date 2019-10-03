import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './styles/index.css';
import App from './pages/App';
import * as serviceWorker from './components/serviceWorker';
import Laws from './pages/Laws'
import CompareLaws from './pages/CompareLaws'

const state = {
    firstCountry: '',
    secondCountry: '',
    law: ''
}

function countriesSelected(first, second){
    state.firstCountry = first
    state.secondCountry = second
}

function lawSelect(law){
    state.law = law
}

function setFirstLaw(law){
    state.firstlaw = law
}

function setSecondLaw(law){
    state.secondlaw = law
}

function AppWrapper(){
    state.firstCountry = 'Select Country'
    state.secondCountry = 'Select Country'
    return <App {...state} countriesSelected={countriesSelected}/>
}

function LawsWrapper(){
    return <Laws {...state} countriesSelected={countriesSelected} lawSelect={lawSelect} firstlaw={setFirstLaw} secondlaw={setSecondLaw}/>
}

function CompareLawsWrapper(){
    return <CompareLaws {...state} />
}

function render(){
    ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={AppWrapper} />
        <Route path="/laws" component={LawsWrapper} />
        <Route path="/compare" component={CompareLawsWrapper} />
    </BrowserRouter>, 
    document.getElementById('root'));
}
render();
serviceWorker.register();
