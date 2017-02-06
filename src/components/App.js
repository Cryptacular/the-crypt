import React, { Component } from 'react';
import Router from 'react-router-component';
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
      <div className="cr-app-content">
        <Chat className="cr-app-section" />
        <Locations hash component={null}>
          <Location path="/:pagename" handler={Page} className="cr-app-section" />
          <NotFound handler={Empty} />
        </Locations>
      </div>
    );
  }
}

export default App;
