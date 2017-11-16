var express = require('express')
var router = express.Router();

router.get('/great', function(reg, res){
    res.send('this is a great string')
})

module.exports= router;