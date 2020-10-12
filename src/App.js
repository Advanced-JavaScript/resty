/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import Footer from './components/footer/footer';
/**
 * @class App to use the other components
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
      results: [],
      headers:'',
    };
  }

  handleData(count, results, headers){
    this.setState({count, results, headers});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handleData = {this.handleData.bind(this)}
        />
        <Results 
          count= {this.state.count}
          results = {this.state.results}
          headers = {this.state.headers}
        />
        <Footer />
      </div>
    );

  }

}

export default App;
