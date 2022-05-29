const express = require('express');

const app = express();

app.get('/',(req, res)=>{
     res.send("Hello world")

});

app.listen(5000,()=> console.log('App is listing on port 5000..'));