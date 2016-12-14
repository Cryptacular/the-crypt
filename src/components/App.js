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
            <div className="cr-section">
              <Info />
            </div>
          </div>
          <div className="u-flexbox-column--third">
            <div className="cr-section">
              <Chat />
            </div>
          </div>
          <div className="u-flexbox-column--third">
            <div className="cr-section">
              <Page />
            </div>
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
