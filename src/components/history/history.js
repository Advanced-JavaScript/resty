import React from 'react';

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      saved: [],
    };

  }


  handleClick (i) {
    let url = this.props.saved[i].url;
    let options = {
      method : this.props.saved[i].method,
      headers: { 'Content-Type': 'application/json'},
      body: this.props.saved[i].method === 'GET' || this.props.saved[i].method === 'DELETE'
        ? null : JSON.stringify(this.props.body),
    };
    this.props.fetchApi(url, options);
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
                  <h3> <a>{item.url}</a>  </h3>
                </li>   
              );
            } )}
  
          </section>

        </aside>

      </>
    );
  }
}

  
export default History;