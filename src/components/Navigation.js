import React from 'react';
import Spinner from './Spinner';
import PageService from './PageService';
import PostService from './PostService';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: null,
      posts: null
    }
    this.getAllPosts();
    this.getAllPages();
  }

  render() {
    let pages = this.state.pages;
    let posts = this.state.posts;

    if (pages && posts) {
        return (
            <section className={"cr-section-nav " + this.props.className}>
                <h1>Navigation</h1>
                <h2>Pages</h2>
                <ul>
                    {[...pages].map((page, key) =>
                        <li key={key}><a href={'#/' + page.basename}>{page.title}</a></li>
                    )}
                </ul>
                <h2>Posts</h2>
                <ul>
                    {[...posts].map((post, key) =>
                        <li key={key}><a href={'#/post/' + post.basename}>{post.title}</a></li>
                    )}
                </ul>
            </section>
        )
    } else {
        return (
            <section className={"cr-section-page " + this.props.className + " cr-section--loading"}>
                <Spinner />
            </section>
        )
    }
  }

  denormalise(pages) {
    let denormalisedPages = [];

    for (var key in pages) {
        if (!pages.hasOwnProperty(key)) {
            continue;
        }

        var page = pages[key];

        denormalisedPages.push({
            title: page.title,
            basename: page.basename || key
        });
    }

    return denormalisedPages;
  }

  getAllPages() {
    PageService.getAllPages()
        .then(result => {
            return result.json().then(json => {
                if (result.ok && json !== null) {
                    let denormalisedPages = this.denormalise(json).reverse();
                    this.setState({ pages: denormalisedPages });
                } else {
                    this.setState({ pages: null });
                }
            });
        });
  }

  getAllPosts() {
    PostService.getAllPosts()
        .then(result => {
            return result.json().then(json => {
                if (result.ok && json !== null) {
                    let denormalisedPosts = this.denormalise(json).reverse();
                    this.setState({ posts: denormalisedPosts });
                } else {
                    this.setState({ posts: null });
                }
            });
        });
  }
}

export default Navigation;