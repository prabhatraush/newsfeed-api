//https://mapps.cricbuzz.com/cbzios/match/livematches
const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) =>{
    res.send('Welcome to cickbuzz api');
})


router.get('/livescore', async(req, res) =>{

    const response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/livematches')
    .catch(error => { throw error});
    if(!response) {
        res.send({message:"Invalid Url"});
    }
    //console.log(response.data);
    res.status(200).send({
        matches: response.data
    })

});

router.get('/commentary/:mid', async(req, res) =>{

    const mid = req.params.mid;
    const response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/commentary')
    .catch(error => { throw error});
    if(!response) {
        res.send({message:"Invalid Url"});
    }
    //console.log(response.data);
    res.status(200).send({
        matches: response.data
    })
});

router.get('/scorecard/:mid', async(req, res) =>{

    const mid = req.params.mid;
    const response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/scorecard')
    .catch(error => { throw error});
    if(!response) {
        res.send({message:"Invalid Url"});
    }
    //console.log(response.data);
    res.status(200).send({
        matches: response.data
    })
});

router.get('/highlights/:mid', async(req, res) =>{

    const mid = req.params.mid;
    const response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/highlights')
    .catch(error => { throw error});
    if(!response) {
        res.send({message:"Invalid Url"});
    }
    //console.log(response.data);
    res.status(200).send({
        matches: response.data
    })
});

module.exports=router;