import React from 'react';
import './Page.css';

class Page extends React.Component {
    getPostContent() {
        return "fake post content"
    }

    render() {
        return (
            <section className={"cr-section-page " + this.props.className}>
                <h1>Page</h1>
                <p>{this.props.pagename}</p>
                <div>{this.getPostContent()}</div>
            </section>
        )
    }
}

export default Page;