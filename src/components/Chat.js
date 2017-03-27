import React from 'react';
import './Chat.css';
import ChatService from './ChatService';
import Spinner from './Spinner';

class Chat extends React.Component {
    chatService = new ChatService(this.displayMessage.bind(this));

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            messageDraft: '',
            messages: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({messageDraft: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.sendMessage(this.state.messageDraft);
    }

    sendMessage(message) {
        this.chatService.sendMessage(message);
        this.setState({messageDraft: '', loading: true});
    }

    displayMessage(activity) {
        let messages = this.state.messages;
        messages.push(activity);
        this.setState({messages: messages, loading: false});
    }

    render() {
        let messages = this.state.messages;

        return (
            <section className={"cr-section-chat " + this.props.className}>
                <h1>Chat</h1>
                {[...messages].map((message, key) =>
                    <li key={key}>{message.text}</li>
                )}
               
               <Spinner loading={this.state.loading} />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.messageDraft} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}

export default Chat;