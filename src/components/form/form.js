/* eslint-disable no-unused-vars */
import React from 'react';
import './form.scss';
import History from '../history/history';
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
      toBeSaved: JSON.parse(localStorage.getItem('history')) || [],
      body: null,
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

  saveToLocal = () => {
    this.state.toBeSaved.push(
      {
        method: this.state.method,
        url: this.state.url,
      });
    localStorage.setItem('history', JSON.stringify(this.state.toBeSaved));

  }

  fetchApi = async(url, options) =>{
    try{
      let raw = await fetch(url, options);
      let data = await raw.json();
      let count = data.count;
      let results = data.results;
      let headers = {};
      raw.headers.forEach( (val, key) => headers[key] = val);

      this.props.handleData(count, results, headers);

    }
    catch(e){
      this.props.fetchError();
    }
    

  }

  handleSubmit = async (e) => {
    this.saveToLocal();
    let url = this.state.url;
    let options = {
      method: this.state.method,
      headers: { 'Content-Type': 'application/json'},
      body: this.state.method === 'GET' || this.state.method === 'DELETE'
        ? null : JSON.stringify(this.state.body),
    };
    this.fetchApi(url, options);
    
  }

  updateBody =(e)=> {
    let body = e.target.value;
    this.setState({ body });
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
        <textarea onChange={this.updateBody}></textarea>
        <History saved={this.state.toBeSaved} fetchApi= {this.fetchApi} body={this.state.body}/>
      </>
    );
  } 
}
  
export default Form;
  