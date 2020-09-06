const express = require('express');
const cors = require('cors');

const indiatv = require('./routes/indiatv');
const news18 = require('./routes/news18');
const jansatta = require('./routes/jansatta');
const abplive = require('./routes/abplive');

const app = express();

 app.use(cors()).use(express.urlencoded({extended: 'false'})).use(express.json())
 .use('/indiatv',indiatv)
 .use('/news18',news18)
 .use('/jansatta',jansatta)
 .use('/abplive',abplive);

 app.get('/',(req, res)=>{
     res.send({
         "indiatv": [{
             "breaking-news":"/indiatv/breaking",
             "nation-news":"/indiatv/nation",
             "international-news":"/indiatv/international",
             "sports-news": "/indiatv/sports",
             "entertaiment-news":"/indiatv/entertainment"
         }],
         "abplive": [{
            "breaking-news":"/abplive/breaking",
            "nation-news":"/abplive/nation",
            "international-news":"/abplive/international",
            "sports-news": "/abplive/sports",
            "entertaiment-news":"/abplive/entertainment"
        }],
        "news18": [{
            "nation-news":"/news18/nation",
            "international-news":"/news18/international",
            "sports-news": "/news18/sports",
            "entertaiment-news":"/news18/entertainment",
            "careers-news":"/news18/careers",
        }],
        "jansatta": [{
            "breaking-news":"/jansatta/breaking",
            "nation-news":"/jansatta/nation",
            "international-news":"/jansatta/international",
            "sports-news": "/jansatta/sports",
            "entertaiment-news":"/jansatta/entertainment"
        }],


     })
 });

app.listen(process.env.PORT||4000,()=>{
    console.log('Yeah server is running at',4000);
})