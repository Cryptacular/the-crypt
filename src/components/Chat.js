import React from 'react';
import './Chat.css';

class Chat extends React.Component {
    getAllPages() {
        fetch(`https://the-crypt-1047.firebaseio.com/page.json`) 
            .then(result => {
                return result.json().then(json => {
                    if (result.ok && json !== null) {
                        this.setState({ page: json });
                    }
            });
        });
    }

    getAllPosts() {
        fetch(`https://the-crypt-1047.firebaseio.com/post.json`) 
            .then(result => {
                return result.json().then(json => {
                    if (result.ok && json !== null) {
                        this.setState({ page: json });
                    }
            });
        });
    }
    
    render() {

        return (
            <section className={"cr-section-chat " + this.props.className}>
                <h1>Chat</h1>
                <p>Coming soon...</p>
            </section>
        )
    }
}

export default Chat;