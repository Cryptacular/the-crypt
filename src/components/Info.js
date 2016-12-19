import React from 'react';
import './Info.css';

class Info extends React.Component {
    render() {
        return (
            <section className={"cr-section-info " + this.props.className}>
                <h1>Nick Mertens</h1>
                <img src="img/self-portrait-bg.jpg" alt="Nick Mertens" className="cr-info-portrait" />
            </section>
        )
    }
}

export default Info;