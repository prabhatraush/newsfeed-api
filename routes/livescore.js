//https://mapps.cricbuzz.com/cbzios/match/livematches
const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) =>{
    res.send('Welcome to cickbuzz api');
})


router.get('/livescore', async(req, res, next) =>{

    // const response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/livematches')
    // .catch(error => { throw error});
    // if(!response) {
    //     res.send({message:"Invalid Url"});
    // }
    // //console.log(response.data);
    // res.status(200).send({
        
    // })

    try {
        let response = await axios.get('https://mapps.ricbuzz.com/cbzios/match/livematches')
        res.send({data: response.data})
    } catch (err) {
        next(err);
    }

});

router.get('/commentary/:mid', async(req, res, next) =>{

    const mid = req.params.mid;
    try {
        let response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/commentary')
        res.send({data: response.data})
    } catch (err) {
        next(err);
    }
});

router.get('/scorecard/:mid', async(req, res, next) =>{

    const mid = req.params.mid;
    
    try {
        let response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/scorecard')
        res.send({data: response.data})
    } catch (err) {
        next(err);
    }

});

router.get('/highlights/:mid', async(req, res, next) =>{

    const mid = req.params.mid;
    try {
        let response = await axios.get('https://mapps.cricbuzz.com/cbzios/match/'+mid+'/highlights')
        res.send({data: response.data})
    } catch (err) {
        next(err);
    }
});

module.exports=router;