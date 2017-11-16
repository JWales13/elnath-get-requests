var express = require('express')
var router = express.Router();
var quotes_data = require('../modules/quotes-data');

var routeCounter=0;

router.get('/', function(req,res){
    res.send('you can find quotes at quotes/random or quotes/first');
});

router.get('/random', function(req,res){
    routeCounter++
   console.log('this random route has been hit', routeCounter , 'times')
   var randomNumber = Math.floor(Math.random() *4)
    res.send(quotes_data[randomNumber]);
});

router.get('/first', function(req,res){
    res.send(quotes_data[0]);
});

router.get('/all', function(req,res){
    res.send(quotes_data)
});

router.post('/new', function(req,res){
    console.log('new quote works');
    console.log('req-body in a new quote post', req.body)
    quotes_data.push({quoteText: req.body.quote_to_add,
    author: req.body.author_to_add});
    
    res.sendStatus(200);
})

module.exports = router;