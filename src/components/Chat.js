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
        this.props.onUpdate();
        this.setState({messages: messages, loading: false});
        this.scrollChatLog();
    }

    scrollChatLog() {
        var chatLog = document.getElementById("js-chatLog");
        if (chatLog) {
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    }

    render() {
        let messages = this.state.messages;

        return (
            <section className={"cr-section-chat " + this.props.className}>
                <div className="cr-chat-content">
                    <span className="cr-chat-placeholder">{messages.length <= 0 ? "Start chatting!" : ""}</span>
                    <ul className="cr-chat-log" id="js-chatLog">
                        {[...messages].map((message, key) =>
                            <li key={key} className="cr-chatMessage-container">
                                <span className={"cr-chat-message cr-chat-message--" + message.from.id}>{message.text}</span>
                            </li>
                        )}
                    </ul>
                
                    <form onSubmit={this.handleSubmit} className="cr-chat-messagebox">
                        <input className="cr-messagebox-input" type="text" value={this.state.messageDraft} onChange={this.handleChange} />
                        <button className="cr-messagebox-submit" type="submit">{this.state.loading ? <Spinner className="cr-spinner--white cr-spinner--button" /> : "Send"}</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Chat;