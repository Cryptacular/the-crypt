import React, { Component } from 'react';
import Router from 'react-router-component';
import Info from './Info';
import Chat from './Chat';
import Page from './Page';
import Empty from './Empty';
import './App.css';

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

class App extends Component {
  render() {
    return (
      <div>
        <header className="cr-header">
          <h1 className="cr-header-title">Welcome to The Crypt!</h1>
        </header>
        <div className="cr-app">
          <Info className="cr-app-section cr-app-section--small" />
          <Chat className="cr-app-section" />
          <Locations hash component={null}>
            <Location path="/:pagename" handler={Page} className="cr-app-section" />
            <NotFound handler={Empty} />
          </Locations>
        </div>
      </div>
    );
  }
}

export default App;
