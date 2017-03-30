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
                <span className="cr-chat-placeholder">{messages.length <= 0 ? "Start chatting!" : ""}</span>
                <ul className="cr-chat-log">
                    {[...messages].map((message, key) =>
                        <li key={key} className="cr-chatMessage-container">
                            <span className={"cr-chat-message cr-chat-message--" + message.from.id}>{message.text}</span>
                        </li>
                    )}
                </ul>
               
                <Spinner loading={this.state.loading} />
                
                <div className="cr-chat-messagebox">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.messageDraft} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </section>
        )
    }
}

export default Chat;