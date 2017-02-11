import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.denormalise(this.getAllPages()),
      posts: this.denormalise(this.getAllPosts()).reverse()
    }
  }

  render() {
    let pages = this.state.pages;
    let posts = this.state.posts;
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
            basename: `${page.basename}`
        });
    }

    return denormalisedPages;
  }

  getAllPages() {
    return {
        "about" : {
            "title" : "I am Nick Mertens",
            "basename": "about"
        },
        "contact" : {
            "title" : "Need something done? Contact me!",
            "basename": "contact"
        }
    }
  }

  getAllPosts() {
    return {
      "2012-06-27-rapsberry": {
        "title": "Rapsberry",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/rapsberry/rapsberry.jpg",
        
        "preview": "He's the most badass rapper in the world of fruit and vegetable …",
        "basename": "2012-06-27-rapsberry"
        },
        "2012-07-11-homeless-man-in-arabia": {
        
        "title": "Homeless Man in Arabia",
        "categories": [
            "3D modelling",
            "texturing"
        ],
        "image": "/img/blog/homeless-man/homeless-man.jpg",
        
        "preview": "(To see the full HD clip, [click here](http://vimeo.com/45554041))\n\n…",
        "basename": "2012-07-11-homeless-man-in-arabia"
        },
        "2012-10-14-the-widow": {
        
        "title": "The Widow",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/rangda/rangda.jpg",
        
        "preview": "A painting based on the Balinese demon queen Rangda.\n\nCreated in …",
        "basename": "2012-10-14-the-widow"
        },
        "2012-12-25-elvis": {
        
        "title": "Elvis",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/elvis/elvis.jpg",
        
        "preview": "This is a drawing I did for a Christmas present for my girlfriend …",
        "basename": "2012-12-25-elvis"
        },
        "2013-01-25-first-person-shooter": {
        "title": "First Person Shooter",
        
        "categories": [
            "animation",
            "3D modelling",
            "texturing"
        ],
        "image": "/img/blog/super-city/super-city.jpg",
        
        "preview": "(To see the full HD clip, [click here](http://vimeo.com/58088005))\n\n…",
        "basename": "2013-01-25-first-person-shooter"
        },
        "2013-05-13-a-nightly-habit": {
        
        "title": "A Nightly Habit",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/nightly-habit/nightly-habit-thumbnail.jpg",
        
        "preview": "As part of testing out my new Wacom Inkling pen, I drew this little …",
        "basename": "2013-05-13-a-nightly-habit"
        },
        "2013-07-10-one-year": {
        
        "title": "One Year",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/1-year-anniversary/heart.jpg",
        
        "preview": "I drew this for my one year anniversary with my girlfriend Olivia. …",
        "basename": "2013-07-10-one-year"
        },
        "2013-12-02-showreel-2013": {
        
        "title": "Showreel 2013",
        "categories": [
            "animation",
            "illustration",
            "3D modelling",
            "texturing"
        ],
        "image": "/img/blog/showreel-2013/showreel.jpg",
        
        "preview": "(To see the full HD clip, [click here](http://vimeo.com/80710732))\n\n…",
        "basename": "2013-12-02-showreel-2013"
        },
        "2014-02-20-drawing-progress-boktai": {
        
        "title": "Drawing in Progress: Boktai",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/boktai/boktai-of-doom-v2.jpg",
        
        "preview": "A little while ago I looked through my old GBA games and started …",
        "basename": "2014-02-20-drawing-progress-boktai"
        },
        "2014-02-27-drawing-progress-boktai-update": {
        
        "title": "Drawing in Progress: Boktai (Update)",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/boktai-v1/boktai-of-doom-v3.jpg",
        
        "preview": "Slowly but surely my Doom cover-style Boktai drawing is coming along. …",
        "basename": "2014-02-27-drawing-progress-boktai-update"
        },
        "2014-03-02-animation-appreciation-stormjumper": {
        "title": "Animation Appreciation: StormJumper",
        "author": "admin",
        
        "categories": [
            "Animation Appreciation"
        ],
        "image": "/img/wp-uploads/2014/03/stormjumper.jpg",
        
        "preview": "*As a planetary storm approaches, a lone shaman manages to avoid …",
        "basename": "2014-03-02-animation-appreciation-stormjumper"
        },
        "2014-03-07-drawing-progress-boktai-update-2": {
        
        "title": "Drawing in Progress: Boktai (Update #2)",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/boktai-v2/boktai-of-doom-v5.jpg",
        
        "preview": "Another quick update: since last time I have started working on the …",
        "basename": "2014-03-07-drawing-progress-boktai-update-2"
        },
        "2014-03-14-animation-appreciation-nameless-bob-2": {
        "title": "Animation Appreciation: Nameless Bob 2",
        "author": "admin",
        
        "categories": [
            "Animation Appreciation"
        ],
        
        "preview": "This excellent bit of 2D animation is the second one in a series. …",
        "basename": "2014-03-14-animation-appreciation-nameless-bob-2"
        },
        "2014-03-14-drawing-in-progress-boktai-update-3": {
        
        "title": "Drawing in Progress: Boktai (Update #3)",
        "categories": [
            "illustration"
        ],
        "image": "/img/blog/boktai-v3/boktai-update-3.jpg",
        
        "preview": "Quick update: I masked out the background, plus I added a layout …",
        "basename": "2014-03-14-drawing-in-progress-boktai-update-3"
        },
        "2014-03-19-possession-of-silver-by-corey-leigh": {
        "title": "The Possession of Silver by Corey Leigh",
        "author": "admin",
        
        "categories": "updates",
        "image": "/img/wp-uploads/2014/03/silver-cover-web.jpg",
        
        "preview": "I'm so proud to announce that my friend Corey Leigh has written a …",
        "basename": "2014-03-19-possession-of-silver-by-corey-leigh"
        },
        "2014-03-20-drawing-progress-mashup-time": {
        "title": "Drawing in Progress: Mashup time!",
        "author": "admin",
        
        "categories": [
            "Personal Work"
        ],
        
        "preview": "As a big fan of T-shirt designs on <a href=\"http://www.teefury.com/\" …",
        "basename": "2014-03-20-drawing-progress-mashup-time"
        },
        "2014-03-22-scott-pilgrim-vs-dark-souls": {
        "title": "Scott Pilgrim vs. Dark Souls",
        "author": "admin",
        
        "categories": [
            "Illustration",
            "Vector"
        ],
        "image": "/img/wp-uploads/2014/03/final-small.jpg",
        
        "preview": "It's mashup time! As I [teased a few days …",
        "basename": "2014-03-22-scott-pilgrim-vs-dark-souls"
        },
        "2014-04-03-painting": {
        "title": "This is not a painting",
        "author": "admin",
        
        "categories": [
            "Animation Appreciation"
        ],
        "image": "/img/wp-uploads/2014/04/3d-painting.jpg",
        
        "preview": "I'm serious. Yes, it looks pretty much identical to Benczúr Gyula's …",
        "basename": "2014-04-03-painting"
        },
        "2014-04-15-planet-abes": {
        "title": "Planet of the Abes",
        "author": "admin",
        
        "categories": [
            "Illustration",
            "Vector"
        ],
        "image": "/img/wp-uploads/2014/04/planet-of-the-abes-recrop-flat-small.jpg",
        
        "preview": "<img src=\"/img/wp-uploads/2014/04/pota-poster-150x150.png\" …",
        "basename": "2014-04-15-planet-abes"
        },
        "2014-04-21-buy-t-shirts": {
        "title": "Buy my T-shirts!",
        "author": "admin",
        
        "categories": [
            "Personal Work"
        ],
        
        "preview": "Seeing as I've been working on some T-shirt designs lately, I have …",
        "basename": "2014-04-21-buy-t-shirts"
        },
        "2014-04-25-night-pandas": {
        "title": "The Night Pandas",
        "author": "admin",
        
        "categories": [
            "Illustration",
            "Vector"
        ],
        "image": "/img/wp-uploads/2014/04/night-pandas-final-small.jpg",
        
        "preview": "The Night Pandas are an illusive group of merciless pub quizzers, …",
        "basename": "2014-04-25-night-pandas"
        },
        "2014-04-26-boktai-vs-doom": {
        "title": "Boktai vs. Doom",
        "author": "admin",
        
        "categories": [
            "Illustration"
        ],
        "image": "/img/wp-uploads/2014/04/boktai-of-doom-final-small.jpg",
        
        "preview": "*Boktai of Doom* is a mash-up of the video games *Boktai: Solar Boy …",
        "basename": "2014-04-26-boktai-vs-doom"
        },
        "2014-08-28-gustavo": {
        "title": "Gustavo",
        "author": "admin",
        
        "categories": [
            "Illustration"
        ],
        "image": "/img/wp-uploads/2014/08/gustavo-small-copyright.jpg",
        
        "preview": "I'd like to present to you: Gustavo Fring from Breaking Bad. I …",
        "basename": "2014-08-28-gustavo"
        },
        "2014-08-29-gustavo-t-shirts": {
        "title": "Gustavo T-shirts!",
        "author": "admin",
        
        "categories": [
            "Personal Work"
        ],
        
        "preview": "T-shirts with my [Gustavo](/blog/illustration/2014/08/28/gustavo/) …",
        "basename": "2014-08-29-gustavo-t-shirts"
        },
        "2014-10-06-invader-ziltoid": {
        "title": "Invader Ziltoid",
        "author": "admin",
        
        "categories": [
            "Illustration",
            "Portfolio (All)",
            "Vector"
        ],
        "image": "/img/wp-uploads/2014/10/invader-ziltoid-web.jpg",
        
        "preview": "Invader Ziltoid is a mashup of the animated show Invader Zim and a …",
        "basename": "2014-10-06-invader-ziltoid"
        },
        "2014-10-07-invader-ziltoid-t-shirts-now-available": {
        "title": "Invader Ziltoid T-Shirts now available",
        "author": "admin",
        
        "categories": [
            "Personal Work"
        ],
        
        "preview": "As of today, you can get your very own [Invader Ziltoid][1] shirt! …",
        "basename": "2014-10-07-invader-ziltoid-t-shirts-now-available"
        },
        "2014-12-21-one-pissed-parrot": {
        "title": "One Pissed Parrot",
        "author": "admin",
        
        "categories": "Illustration",
        "image": "/img/wp-uploads/2014/12/parrot-512.jpg",
        
        "preview": "This is one pissed parrot. Why is he pissed? It might have something …",
        "basename": "2014-12-21-one-pissed-parrot"
        },
        "2015-09-24-aim-design-development": {
        "title": "AIM Design & Development",
        "author": "admin",
        
        "categories": [
            "Design",
            "Development",
            "Portfolio (All)",
            "Web"
        ],
        "image": "/img/wp-uploads/2015/09/assetim-cover-image.jpg",
        
        "preview": "## Website Design and Development in WordPress\n\nWorking closely with …",
        "basename": "2015-09-24-aim-design-development"
        },
        "2015-09-24-baby-bag": {
        "title": "The Baby Bag",
        "author": "admin",
        
        "categories": [
            "Development",
            "Portfolio (All)",
            "Web"
        ],
        "image": "/img/wp-uploads/2015/09/baby-bag-cover.jpg",
        
        "preview": "## Website Development\n\nThe Baby Bag is a concept created by Jessie …",
        "basename": "2015-09-24-baby-bag"
        },
        "2015-10-04-new-website": {
        
        "title": "The new website is REAL!",
        "category": "updates",
        
        "preview": "Hi everyone! If you've seen my website before, you might notice it …",
        "basename": "2015-10-04-new-website"
        },
        "2015-10-07-oceania-career-academy": {
        
        "title": "Oceania Career Academy Email Template",
        "categories": [
            "work",
            "email marketing"
        ],
        "image": "/img/blog/oca/oca-preview.jpg",
        
        "preview": "Oceania Career Academy is a career programme that's still in …",
        "basename": "2015-10-07-oceania-career-academy"
        },
        "2015-11-15-wolf-dance": {
        
        "title": "Wolf Dance",
        "categories": [
            "work",
            "illustration"
        ],
        "image": "/img/blog/wolf-dance/wolf-dance-final-1024.jpg",
        
        "preview": "This is the Wolf Dance. It is inspired by a short story that a good …",
        "basename": "2015-11-15-wolf-dance"
        },
        "2016-07-07-rocco-douglas": {
        
        "title": "Rocco Douglas",
        "categories": [
            "work",
            "logo design"
        ],
        "image": "/img/blog/rocco-douglas/rocco-douglas-logo-blackboard.png",
        
        "preview": "A few weeks ago, a good friend of mine decided to start his own …",
        "basename": "2016-07-07-rocco-douglas"
        },
        "2016-07-17-junior-dev-hour": {
        
        "title": "Junior Dev Hour: The Origin Story",
        "categories": [
            "work",
            "scrum-master",
            "agile"
        ],
        "image": "/img/blog/junior-dev-hour/feature.jpg",
        
        "preview": "I’m a Junior Software Developer Slash Scrum Master. Only two of those …",
        "basename": "2016-07-17-junior-dev-hour"
        },
        "2016-07-24-hey-niko-niko": {
        
        "title": "Hey Niko! Niko?",
        "categories": [
            "work",
            "scrum-master"
        ],
        "image": "/img/blog/hey-niko-niko/feature.png",
        
        "preview": "Recently I’ve been doing a lot of reading about the responsibilities …",
        "basename": "2016-07-24-hey-niko-niko"
        }
    }
  }
}

export default Navigation;