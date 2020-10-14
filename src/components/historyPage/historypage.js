import React from 'react';
import { Redirect } from 'react-router-dom';

class HistoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      saved: [],
    };

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
      return <Redirect to='/'/>;
    }
    catch(e){
      this.props.fetchError();
    }
  }

  handleClick (i) {
    let url = this.props.saved[i].url;
    let options = {
      method : this.props.saved[i].method,
      headers: { 'Content-Type': 'application/json'},
      body: this.props.saved[i].body ? this.props.saved[i].body : null,
    };
    this.fetchApi(url, options);
  }


  save(){
    let saved =  this.props.saved;
    this.setState({saved});
  }

  render() {
    
    return (
        
      <>
        <aside>

          <section className='saved'>
            {this.save}
            {this.props.saved.map((item,i) => {
              return(
                <li key={i} >
                  <button onClick={this.handleClick.bind(this,i)}>{item.method}</button>
                  <h3>URL: <a>{item.url}</a>  </h3>  
                  <h3>Body: {item.body || 'No Body attached'}</h3>
                </li>   
              );
            } )}
  
          </section>

        </aside>

      </>
    );
  }
}

  
export default HistoryPage;