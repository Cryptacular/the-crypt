import React from 'react';
import './Page.css';

class Page extends React.Component {
    render() {
        return (
            <section className={"cr-section-page " + this.props.className}>
                <h1>Page</h1>
            </section>
        )
    }
}

export default Page;