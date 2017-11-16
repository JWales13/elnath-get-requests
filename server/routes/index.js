var express = require('express')
var router = express.Router();





router.get('/', function(req,res){
    res.send('this is the catch all');
    console.log('someone has visited')
});

module.exports = router;