/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import Footer from './components/footer/footer';
import If from './components/if/if';
import Help from './components/help/help';
import HistoryPage from './components/historyPage/historypage';

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
      saved: JSON.parse(localStorage.getItem('history')) || [],
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route exact path="/history">
              <HistoryPage 
                saved={this.state.saved}
                handleData = {this.handleData.bind(this)}
                fetchError = {this.fetchError}/>
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>

          </Switch>

          <Footer />
        </div>
      </BrowserRouter>

    );

  }

}

export default App;
