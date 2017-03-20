var express = require('express');
var app = express();

/*
app.get('/', function(req, res){
    res.send('hello world');
});
*/

app.use(express.static('./'));

app.listen(3000, function () {
    console.log('Example app listening at port 3000：');
});