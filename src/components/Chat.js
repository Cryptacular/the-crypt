import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    render() {
        return (
            <section className={"cr-section-chat " + this.props.className}>
                <h1>Chat</h1>
            </section>
        )
    }
}

export default Chat;