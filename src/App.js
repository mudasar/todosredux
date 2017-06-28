import React, {Component} from 'react';

import './App.css';

import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="row align-center">
        <div className="large-8 medium-8 small-12 columns">
          <Header/>
          <Main/>
          <hr/>
          <Footer/>
        </div>
      </div>

    );
  }
}

export default App;
