const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const url = require('./config/db.config');
const connectDB = require('./config/db');

const cors = require('cors')

const port = = process.env.PORT || 7777;

const app = express();

app.use(bodyParser.json()); 
app.use(cors())
app.use('/api', api);
app.use('/url', url);

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/' , function(req,res){
    res.send('hello from omar' )
})

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
