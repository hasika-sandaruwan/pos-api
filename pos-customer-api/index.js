// import the framework
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//----------------------------
const CustomerRoute = require('./routes/CustomerRoute');
//----------------------------


const app = express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(
    'mongodb://localhost:27017/ijsepos',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(() => {
    app.listen(3000, () => {
        console.log('Customer Service up and running on port 3000');
    })
}).catch(error => {
    console.log(error)
});

app.use('/api/v1/customerRoute', CustomerRoute);
