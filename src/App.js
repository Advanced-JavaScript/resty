/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import Footer from './components/footer/footer';
import If from './components/if/if';
/**
 * @class App to use the other components
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
      results: null,
      headers:'',
    };
  }

  handleData(Count, results, headers){
    this.setState({Count, results, headers});
  }
  fetchError = () =>{
    let results = null;
    this.setState({results});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handleData = {this.handleData.bind(this)}
          fetchError = {this.fetchError}
        />
        <If condition={this.state.results}>
          <Results 
            Count= {this.state.count}
            results = {this.state.results}
            headers = {this.state.headers}
          />
        </If>
        <Footer />
      </div>
    );

  }

}

export default App;
