var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var reallyGreat = require('./routes/really-great');
var quotes = require('./routes/quotes');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

console.log('starting up the server');



app.get('/great', reallyGreat);

//we want /quote/random will res.send randomquote
app.use('/quote', quotes);

//we want /quote/first will res.send first quote
// /quote

app.use(express.static('server/public'))

app.use('/dinosaur', function (req,res){
    res.send('roar!');
});




app.listen(port, function(){
    console.log('listening on port', port);
});