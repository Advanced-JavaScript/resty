/* eslint-disable no-unused-vars */
import React from 'react';
import './form.scss';
/**
 * @component Form
 * @param {*} props for the form
 */
function Form(props) {

  function handleChange(e) {
    props.onChange(e.target.value);
  }

  function handleSubmit(e) {
    if (e.target && e.target.value === 'Submit') {
      props.handleSubmit();
    }
  }

  function handleClick(e) {
    const prevSelected = document.querySelector('.selected-btn');
    prevSelected.classList.remove('selected-btn');
    e.target.classList.add('selected-btn');
    props.onClick(e.target.value);
  }
  
  return (
    <>
      <div className="method">
        <button
          value="GET" className="selected-btn" id="get-btn"
          onClick={handleClick}
        >
            GET
        </button>
        <button value="POST" id="post-btn" onClick={handleClick}>
            POST
        </button>
        <button value="PUT" id="put-btn" onClick={handleClick}>
            PUT
        </button>
        <button value="PATCH" id="patch-btn" onClick={handleClick}>
            PATCH
        </button>
        <button value="DELETE" id="delete-btn" onClick={handleClick}>
            DELETE
        </button>
      </div>
      <div className="form-input">
        <label>{props.label}</label>
        <input
          className="textbox"
          type={props.type}
          value={props.value}
          onChange={handleChange}
        />
        <button value="Submit" id="submit-btn" onClick={handleSubmit}>
            Submit
        </button>
      </div>
    </>
  );
}
  
export default Form;
  