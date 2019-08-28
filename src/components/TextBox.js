import React from 'react'
import {withRouter} from 'react-router-dom'

class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first: props.first,
            second: props.second,
        }
        this.onFieldChange = this.onFieldChange.bind(this)
        this.selectClickHandler = this.selectClickHandler.bind(this)
    }
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    selectClickHandler(event){
        event.preventDefault()
        this.props.countriesSelected(this.state.first, this.state.second)
        let path = '/laws'
        this.props.history.push(path)
    }
    render(){
        return(
            <div>
                <center>
                    <div className="form-group row offset-5">
                        <div className="col-xs">
                            <select className="form-control mr-2" value={this.state.first} name="first" onChange={this.onFieldChange}>
                                <option value="Select Country">Select Country</option>
                                <option value="Finland">Finland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                        <div className="col-xs">
                            <select className="form-control ml-2" value={this.state.second} name="second" onChange={this.onFieldChange}>
                                <option value="Select Country">Select Country</option>
                                <option value="Finland">Finland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 mb-3" onClick={this.selectClickHandler}>Select</button>
                    </div>
                </center>
            </div>
        )
    }
}

export default withRouter(TextBox)