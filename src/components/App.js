import React, { Component } from 'react';
import Router from 'react-router-component';
import Navigation from './Navigation';
import Page from './Page';
import Post from './Post';
import Empty from './Empty';
import './App.css';

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

class App extends Component {
  render() {
    return (
      <div className="cr-app-content">
        <Navigation className="cr-app-section" />
        <Locations hash component={null}>
          <Location path="/:pagename" handler={Page} className="cr-app-section" />
          <Location path="/post/:pagename" handler={Post} className="cr-app-section" />
          <NotFound handler={Empty} />
        </Locations>
      </div>
    );
  }
}

export default App;
