import React, { Component } from 'react';
import moment from 'moment';
import Info from './Info';
import Chat from './Chat';
import Page from './Page';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="cr-title">
          <h1>Welcome to The Crypt!</h1>
        </header>
        <div className="u-flexbox-container">
          <div className="u-flexbox-column--third">
            <Info />
          </div>
          <div className="u-flexbox-column--third">
            <Chat />
          </div>
          <div className="u-flexbox-column--third">
            <Page />
          </div>
        </div>
        <footer>
          <p>&copy; { moment().format('YYYY') } Nick Mertens</p>
        </footer>
      </div>
    );
  }
}

export default App;
