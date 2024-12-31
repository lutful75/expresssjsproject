var express = require('express');

    app=express();
    app.get('/', function(req, res){
res.send('Hello express js');
    })

    app.listen(8000, function(){
        console.log('success port 2025')
    })

