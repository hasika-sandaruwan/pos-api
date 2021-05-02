const Customer = require('../model/CustomerSchema');

const saveCustomer =(req,resp)=>{
    /*
    * POST(save)--->(body)
    * GET(fetch)--->(headers)
    * PUT(update)--->(body)
    * DELETE(delete records)--->(headers)
    * */

    const customer = new Customer({
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        customerSalary: req.body.customerSalary,
        customerAddress: req.body.customerAddress
    });

    customer.save().then(result => {
        resp.status(200).json({state: true, "message": "Saved"});
    }).catch(error => {
        resp.status(500).json(error)
    });
}
const deleteCustomer = (req, resp) => {
}
const getCustomer = (req, resp) => {
}
const updateCustomer = (req, resp) => {
}
const getAllCustomers = (req, resp) => {
    Customer.find().then(result => {
        resp.status(200).json({dataSet: result});
    }).catch(error => {
        resp.status(500).json(error);
    });
}

module.exports = {
    saveCustomer,
    deleteCustomer,
    getCustomer,
    updateCustomer,
    getAllCustomers
}
