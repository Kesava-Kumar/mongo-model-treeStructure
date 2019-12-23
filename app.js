const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database')
const app = express();
const categories = require('./routes/roouter');
const bodyParser = require('body-parser');
const Children = require('./routes/childrenReference/childrenroutes');
const port= 3000;

// mongodb connecttions
mongoose.Promise = global.Promise;
mongoose.connect(config.database,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', ()=>{
    console.log('database conected successfully' +config.database);
});
mongoose.connection.on('error', (err)=>{
    console.log('databse connection error' +err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', categories);
app.use('/children', Children);


app.listen(port,()=>{
    console.log('server started on port' +port);
});
