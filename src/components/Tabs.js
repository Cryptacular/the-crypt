import React from 'react';
import Router from 'react-router-component';
import Chat from './Chat';
import Navigation from './Navigation';
import Home from './Home';
import Page from './Page';
import Post from './Post';
import Empty from './Empty';
import './Tabs.css';

let Locations = Router.Locations;
let Location = Router.Location;
let NotFound = Router.NotFound;

class Tabs extends React.Component {
    tabs = [
        {
            title: "Page", 
            content: <Locations hash component={null}>
                         <Location path="/" handler={Home} className="cr-app-section" onChange={() => this.selectTab(0)} />
                         <Location path="/nav" handler={Navigation} className="cr-app-section" />
                         <Location path="/:pagename" handler={Page} className="cr-app-section" onChange={() => this.selectTab(0)} />
                         <Location path="/post/:pagename" handler={Post} className="cr-app-section" onChange={() => this.selectTab(0)} />
                         <NotFound handler={Empty} />
                     </Locations>
        },
        {
            title: "Chat", 
            content: <Chat className="cr-app-section" onUpdate={this.updateChatNotification.bind(this)} />
        }
    ]

    constructor() {
        super();

        var initialNotifications = {};
        for (let i = 0; i < this.tabs.length; i++) {
            initialNotifications[i] = false;
        }

        this.state = {
            selectedIndex: 0,
            notifications: initialNotifications
        };
    }

    selectTab(tabIndex) {
        let notifications = this.state.notifications;
        notifications[tabIndex] = false;

        this.setState({ 
            selectedIndex: tabIndex, 
            notifications: notifications 
        });
    }

    updateChatNotification() {
        let notifications = this.state.notifications;
        let isChatTabSelected = this.state.selectedIndex === 1; 
        notifications[1] = !isChatTabSelected;
        this.setState({
            notifications: notifications
        });
    }

    render() {
        return (
            <div className="cr-app-content">
                <div className="cr-tabs-navigation">
                    <nav className="u-js-only cr-nav-main">
                        <li><a href="/#/">Home</a></li>
                        <li><a href="/#/about">About</a></li>
                        <li><a href="/#/contact">Contact</a></li>
                    </nav>
                    
                    {[...this.tabs].map((tab, key) =>
                        <span className={"cr-tab" + ((key === this.state.selectedIndex) ? " cr-tab--active" : "")} 
                            onClick={() => this.selectTab(key)}
                            key={key}>
                                {tab.title} <span className={ this.state.notifications[key] ? "cr-tab-notification" : "" }></span>
                        </span>
                    )}
                </div>
                <div className="cr-tabs-content">
                    {[...this.tabs].map((tab, key) =>
                        <div className={"cr-tab-body" + ((key === this.state.selectedIndex) ? " cr-tab-body--active" : "")} key={key}>
                            {tab.content}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Tabs;