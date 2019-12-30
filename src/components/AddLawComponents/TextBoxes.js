import React from 'react'

class TextBoxes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          firstValue: '',
          secondValue: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      render() {
        return (
            <div className='form-group'>
                <label for='first'>First Law</label>
                <textarea id='first' value={this.state.firstValue} name='firstValue' onChange={this.handleChange} />
                <label for='second'>Second Law</label>
                <textarea id='second' value={this.state.secondValue} name='secondValue' onChange={this.handleChange} />
            </div>
        );
      }
}

export default TextBoxes