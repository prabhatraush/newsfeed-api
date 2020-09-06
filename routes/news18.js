const router = require('express').Router();
const Parser = require('rss-parser');

const {getImage} = require('../utils');

const parser = new Parser();

router.get('/', (req, res) =>{
    res.send('Welcome to News18 api');
})

router.get('/nation', async(req, res) =>{
    const nationStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/nation/nation.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        nationStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: nationStories
    })

});

router.get('/international', async(req, res) =>{
    const nationStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/world/rest-of-world.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        nationStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: nationStories
    })

});

router.get('/sports', async(req, res) =>{
    const nationStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/sports/cricket.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        nationStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: nationStories
    })

});

router.get('/entertainment', async(req, res) =>{
    const biharStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/entertainment/entertainment.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        biharStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: biharStories
    })

});


router.get('/careers', async(req, res) =>{
    const biharStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/career/career-career.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        biharStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: biharStories
    })

});


router.get('/bihar', async(req, res) =>{
    const biharStories = [];
    const feed = await parser.parseURL('https://hindi.news18.com/rss/khabar/bihar/bihar.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        biharStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: biharStories
    })

});



module.exports = router;
