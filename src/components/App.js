import React, { Component } from 'react';
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
          <Info className="cr-app-section" />
          <Chat className="cr-app-section" />
          <Page className="cr-app-section" />
        </div>
      </div>
    );
  }
}

export default App;
