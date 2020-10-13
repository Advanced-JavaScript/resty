/* eslint-disable no-unused-vars */
import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import If from '../if/if';

function Results(props) {

  return(
    <If condition={props}>
      <div>
        <section className='result'>
          <h3> Count: {props.Count}</h3>
          <h3> Headers:  </h3>
          <p> <JSONPretty data ={props.headers} /></p>
          <h3> Results: </h3>
          <ul>
            {props.results.map(result => {
              return(
                <li key={result.name}> <JSONPretty data= {result}/></li>
              );
            })}
          </ul>
           
        </section>
      </div>
    </If>
  );

}

export default Results;