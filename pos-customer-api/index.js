// import the framework
const express = require('express');
const mongoose = require('mongoose');

const app=express();

mongoose.connect(
    'mongodb://localhost:27017/ijsepos',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000, ()=>{
        console.log('Customer Service up and running on port 3000');
    })
}).catch(error=>{
    console.log(error)
});
