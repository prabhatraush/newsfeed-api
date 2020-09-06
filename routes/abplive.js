const router = require('express').Router();
const Parser = require('rss-parser');

const parser = new Parser({
    customFields: {
        item: [['media:thumbnail','thumbnail']],
    }
});

router.get('/', (req, res) =>{
    res.send('Welcome to ABP Live api');
})

router.get('/breaking', async(req, res) =>{
    const Stories = [];
    const feed = await parser.parseURL('https://www.abplive.com/home/feed');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        console.log(item.thumbnail['$'].url);
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
    const feed = await parser.parseURL('https://www.abplive.com/news/india/feed');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        console.log(item.thumbnail['$'].url);
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
    const feed = await parser.parseURL('https://www.abplive.com/news/world/feed');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        console.log(item.thumbnail['$'].url);
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
    const feed = await parser.parseURL('https://www.abplive.com/sports/feed');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        console.log(item.thumbnail['$'].url);
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
    const feed = await parser.parseURL('https://www.abplive.com/entertainment/bollywood/feed');
    if(!feed) {
        res.status(400).send({message:"Invalid Url"});
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });

    res.status(200).send({
        heading: feed.title,
        newsFeeds: Stories
    })

});




module.exports = router;
