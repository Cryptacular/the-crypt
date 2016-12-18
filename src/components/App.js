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
        <header className="cr-header">
          <h1 className="cr-header-title">Welcome to The Crypt!</h1>
        </header>
        <div className="cr-app">
          <div className="cr-app-section">
            <Info />
          </div>
          <div className="cr-app-section">
            <Chat />
          </div>
          <div className="cr-app-section">
            <Page />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
