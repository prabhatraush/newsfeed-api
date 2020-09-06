const express = require('express');
const cors = require('cors');

const indiatv = require('./routes/indiatv');
const news18 = require('./routes/news18');
const jansatta = require('./routes/jansatta');

const app = express();

 app.use(cors()).use(express.urlencoded({extended: 'false'})).use(express.json())
 .use('/india-tv',indiatv)
 .use('/news18',news18)
 .use('/jansatta',jansatta);

app.listen(process.env.PORT||4000,()=>{
    console.log('Yeah server is running at',4000);
})