var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Home");
});

app.get('/:param1', function(req, res){
   res.send("Level1");
   console.log(req.params);
   console.log(req.params.param1);
});
app.get('/:param1/:param2', function(req, res){
   res.send("Level2");
   console.log(req.params);
   console.log(req.params.param1);
   console.log(req.params.param2);
});
app.get('/:param1/:param2/:param3', function(req, res){
   res.send("Level3");
   console.log(req.params);
   console.log(req.params.param1);
   console.log(req.params.param2);
   console.log(req.params.param3);
});
app.get('/:param1/:param2/:param3/:id', function(req, res){
   res.send("Level4");
   console.log(req.params);
   console.log(req.params.param1);
   console.log(req.params.param2);
   console.log(req.params.param3);
   console.log(req.params.id);
});

app.listen(3000);