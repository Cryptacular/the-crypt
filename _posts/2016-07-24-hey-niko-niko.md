---
layout: post
title: "Hey Niko! Niko?"
categories:
  - work
  - scrum-master
image: "/img/blog/hey-niko-niko/feature.png"
---

Recently I’ve been doing a lot of reading about the responsibilities of a Scrum Master. As I [mentioned in my last post](https://medium.com/@Cryptacular/junior-dev-hour-the-origin-story-ebe1e75141e9#.au179wg54), I’m still pretty new at this stuff.

Falling through a myriad of rabbit holes, metaphorically speaking, and going through [this massive list of Scrum Master tasks](http://agiletrail.com/2011/11/14/42-tasks-for-a-scrum-masters-job/), I eventually ended up on [this article about Niko Niko calendars](http://agiletrail.com/2011/09/12/how-to-track-the-teams-mood-with-a-niko-niko-calendar/).

I had personally never heard about them, though I don’t doubt they’re pretty common in Agile environments. At a basic level, they’re a way for you and your team to record their daily moods.

As our team uses Slack fairly regularly for conversations, I set up a simple poll with the question at hand (“How was your day?”) and 5 options: a range of emojis from “Great!” to “Awful! I want to go home”. This is my poll stub:

```
/poll “How was your day today? Feel free to add a comment as well.” “:smile: Great!” “:slightly_smiling_face: Pretty good” “:confused: Average / confused” “:disappointed: Bad” “:anguished: Awful! I want to go home”
```

At first glance this might sound a little pointless, as you can usually tell how someone’s feeling right? Wrong. I’ve been putting this technique to use for about a week now and I’ve been very surprised by the outcomes. I won’t go into anyone’s actual feelings, as this is of course confidential, but we’ve already identified a pain point focused around an third-party vendor.

I’ve implemented the calendar a little differently to what the article describes. They suggest you print out or draw a grid with dates and let each team member write down their mood. However, I’m not so sure if this is the best approach. I understand that Scrum is all about transparency, but I believe some people just won’t express their true feelings if it’s displayed in front of everyone else.

So, instead I’ve set up a Google Sheets document with dates, team members and predefined mood options, plus some statistics on average, lowest and highest moods. It’ll be interesting to see the long-term results!

---

I’ve set up a sample (empty) doc if you’re interested in using it. [Click here to open in Google Drive](https://docs.google.com/spreadsheets/d/1xngmaHEbWhjiPp6obMxMqd-r8sqiIzv23UyUuv2M0ek/edit?usp=sharing) :)
