/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Footer from './components/footer/footer';
/**
 * @class App to use the other components
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      method: 'GET',
    };
  }
  updateURL(value) {
    this.setState({ url: value });
  }
  handleClick(value) {
    this.setState({ method: value });
  }
  async fetchApi(value) {
    console.log(this.state.method, this.state.url);
    this.setState({ method: '' , url: ''});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form
          value={this.state.url}
          onChange={this.updateURL.bind(this)}
          onClick={this.handleClick.bind(this)}
          handleSubmit={this.fetchApi.bind(this)}
        />
        <div>{this.state.method} Request, To the :{this.state.url}</div>
        <textarea></textarea>
        <Footer />
      </div>
    );

  }


}

export default App;
