import React from 'react';

class Home extends React.Component {

    render() {
        this.props.onChange();
        return (
            <section className={"cr-section-info " + this.props.className}>
                <img src="/img/self-portrait-bg.jpg" alt="Nick Mertens" className="cr-info-portrait" />
                <h1>Nick Mertens</h1>
                <h2>Description</h2>
                <p>Web developer, amateur illustrator, game enthusiast, dabbler in 3D animation.</p>
                <h2>Skills</h2>
                <ul>
                    <li>Front end development (HTML, CSS, JavaScript)</li>
                    <li>Back end development (.NET, C#)</li>
                    <li>Web design, email design, app design</li>
                    <li>Mobile app development (Xamarin, multi-platform)</li>
                    <li>Email campaign templates</li>
                </ul>
            </section>
        )
    }
}

export default Home;