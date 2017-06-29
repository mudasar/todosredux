import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';

import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {

    var user = firebase
      .auth()
      .currentUser;

    function renderHome() {
      if (user) {
        // User is signed in.
        return <div className="row align-center">
          <div className="large-8 medium-8 small-12 columns">
            <Header/>
            <Main/>
            <hr/>
            <Footer/>

          </div>
        </div>

      } else {
        // No user is signed in.

        return <div className="row align-center">
          <div className="large-8 medium-8 small-12 columns">
            <Main/>
          </div>
        </div>
      }
    }

    return (
      <div>
        {renderHome()}
      </div>

    );
  }
}

export default App;
