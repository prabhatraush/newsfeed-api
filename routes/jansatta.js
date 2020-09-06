const router = require('express').Router();
const Parser = require('rss-parser');

const getImage = require('../utils');

const parser = new Parser({
    customFields: {
        item: [['media:thumbnail','thumbnail']],
    }
});

router.get('/', (req, res) =>{
    res.send('Welcome to JanSatta api');
})

router.get('/breaking', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});

router.get('/nation', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/national/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});

router.get('/international', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/international/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});

router.get('/sports', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/khel/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});


router.get('/entertainment', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/entertainment/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});

router.get('/economy', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.jansatta.com/business/feed/');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});


module.exports = router;
