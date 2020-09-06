const router = require('express').Router();
const Parser = require('rss-parser');

const getImage = require('../utils');

const parser = new Parser();

router.get('/', (req, res) =>{
    res.send('Welcome to India TV api');
})

router.get('/breaking', async(req, res) =>{
    const topStories = [];
    const feed = await parser.parseURL('https://www.indiatv.in/rssnews/topstory.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        topStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: topStories
    })

});

router.get('/nation', async(req, res) =>{
    const indiaStories = [];
    const feed = await parser.parseURL('https://www.indiatv.in/rssnews/topstory-india.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        indiaStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: indiaStories
    })

});

router.get('/international', async(req, res) =>{
    const worldStories = [];
    const feed = await parser.parseURL('https://www.indiatv.in/rssnews/topstory-world.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        worldStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: worldStories
    })

});

router.get('/sports', async(req, res) =>{
    const sportsStories = [];
    const feed = await parser.parseURL('https://www.indiatv.in/rssnews/topstory-sports.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        sportsStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: sportsStories
    })

});

router.get('/entertainment', async(req, res) =>{
    const entertainmentStories = [];
    const feed = await parser.parseURL('https://www.indiatv.in/rssnews/topstory-entertainment.xml');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }

    feed.items.forEach(item => {
        item.imageUrl = getImage(item.content);
        entertainmentStories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: entertainmentStories
    })

});

module.exports = router;
