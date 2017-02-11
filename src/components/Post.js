import React from 'react';
import Markdown from 'react-markdown';
import './Post.css';
import Spinner from './Spinner';

class Post extends React.Component {
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
        fetch(`https://the-crypt-1047.firebaseio.com/post/${pageName}.json`) 
            .then(result => {
                return result.json().then(json => {
                    if (result.ok && json !== null) {
                        this.setState({ page: json });
                    } else {
                        this.setState({ 
                            page: { 
                                title: 'Not Found',
                                content: 'Sorry, I couldn\'t find this post! Ya sure ya got the right URL?'
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
                <section className={"cr-section-post " + this.props.className}>
                    <h1>{this.state.page.title}</h1>
                    <img src={this.state.page.image} alt={this.state.pagename} className={"cr-post-image" + (this.state.page.image ? "" : " u-hide")} />
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

export default Post;