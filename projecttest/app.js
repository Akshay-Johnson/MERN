const express = require('express');
const feedRoutes=require('./routes/feed');
const mongoose = require('mongoose');
const app = express();

//parsing the incoming json data
app.use(express.json());

app.use('/feed', feedRoutes);

app.listen(3000);

mongoose.connect( 'mongodb+srv://akshayjohsnon17:<Zeus12345>@cluster0.xixj92c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});