const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerSalary: {
        type: Number,
        required:true
    },
    customerAddress:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);
