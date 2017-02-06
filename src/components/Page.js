import React from 'react';
import Markdown from 'react-markdown';
import './Page.css';

let pages = {
    'about': {
        title: 'I am Nick Mertens',
        content: `Hi! Nice to meet you. That guy over there (&larr;) is me.

I'm a front end developer, email marketer, designer, illustrator and 3D animator. I like to keep busy and I enjoy being creative.

Whereas my roots lay in email marketing, my main focus is front end development. I like the balance that front end development gives between creativity and logical thinking. I'm skilled in HTML, CSS, Javascript/JQuery, SASS, Git, Django, Shopify and have worked with a bunch of CMS frameworks. I'm always learning so if you're after anything specific, let me know!

I also completed a Diploma of 3D Animation at [Media Design School](http://www.mediadesignschool.com/) with Merit and received an Industry Award for Excellence in Texturing on my final project.

So, if you need anything done that fits loosely within the above categories, or you have any questions, be sure to give me a yell through the contact details below.`
    },
    'contact': {
        title: 'Need something done? Contact me!',
        content: `Something along the lines of web development, design or illustration? Maybe even an email marketing template for Mailchimp, Campaign Monitor or one of the other many platforms out there? I'm always happy to help!

* Email: [nick@thecrypt.co.nz](mailto:nick@thecrypt.co.nz)
* Twitter: [@Cryptacular](https://twitter.com/Cryptacular)
* LinkedIn: [Connect with me](https://nz.linkedin.com/pub/nick-mertens/30/998/667)`
    }
}

class Page extends React.Component {
    doesPageExist(pageName) {
        return pages[pageName] !== undefined;
    }

    render() {
        let pageName = this.props.pagename;
        if (this.doesPageExist(pageName)) {
            let page = pages[pageName];
    
            return (
                <section className={"cr-section-page " + this.props.className}>
                    <h1>{page.title}</h1>
                    <Markdown source={page.content} />
                </section>
            )
        }

        return <span></span>
    }
}

export default Page;