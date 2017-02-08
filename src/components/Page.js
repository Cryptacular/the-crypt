import React from 'react';
import Markdown from 'react-markdown';
import './Page.css';
import Spinner from './Spinner';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null
        }
    }

    componentDidMount() {
        this.getPage(this.props.pagename);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({page: null});
        this.getPage(nextProps.pagename);
    }

    getPage(pageName) {
        fetch(`https://the-crypt-1047.firebaseio.com/page/${pageName}.json`) 
            .then(result => {
                return result.json().then(json => {
                    if (result.ok && json !== null) {
                        this.setState({ page: json });
                    } else {
                        this.setState({ 
                            page: { 
                                title: 'Not Found',
                                content: 'Sorry, I couldn\'t find this page! Ya sure ya got the right URL?'
                            } 
                        })
                    }
                });
            });
    }

    doesPageExist() {
        return this.state.page !== null;
    }

    render() {
        if (this.doesPageExist()) {
            return (
                <section className={"cr-section-page " + this.props.className}>
                    <h1>{this.state.page.title}</h1>
                    <Markdown source={this.state.page.content.replace(/\\n/g, "\n")} />
                </section>
            )
        }

        return (
            <section className={"cr-section-page " + this.props.className + " cr-section--loading"}>
                <Spinner />
            </section>
        )
    }
}

export default Page;