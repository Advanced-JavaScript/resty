/* eslint-disable no-unused-vars */
import React from 'react';
import './form.scss';
/**
 * @component Form
 * @param {*} props for the form
 */
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      url: '',
      method: '',
    };
  }

  handleChange =(e) =>  {
    let url = e.target.value;
    this.setState({url});
  }

  handleClick = (e) => {
    const prevSelected = document.querySelector('.selected-btn');
    prevSelected.classList.remove('selected-btn');
    e.target.classList.add('selected-btn');
    let method = e.target.value;
    this.setState({method});
  }

  handleSubmit = async (e) => {
    let raw = await fetch(this.state.url);
    let data = await raw.json();
    let count = data.count;
    let results = data.results;
    let headers = {};
    raw.headers.forEach( (val, key) => headers[key] = val);

    this.props.handleData(count, results, headers);
  }

  
  render() {
    return (
      <>
        <div className="method">
          <button
            value="GET" className="selected-btn" id="get-btn"
            onClick={this.handleClick}
          >
              GET
          </button>
          <button value="POST" id="post-btn" onClick={this.handleClick}>
              POST
          </button>
          <button value="PUT" id="put-btn" onClick={this.handleClick}>
              PUT
          </button>
          <button value="PATCH" id="patch-btn" onClick={this.handleClick}>
              PATCH
          </button>
          <button value="DELETE" id="delete-btn" onClick={this.handleClick}>
              DELETE
          </button>
        </div>
        <div className="form-input">
          <input
            className="textbox"
            onChange={this.handleChange}
          />
          <button value="Submit" id="submit-btn" onClick={this.handleSubmit}>
              Submit
          </button>
        </div>
      </>
    );

  }
  
}
  
export default Form;
  