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

    console.log(customer);

}
const deleteCustomer = (req, resp) => {
}
const getCustomer = (req, resp) => {
}
const updateCustomer = (req, resp) => {
}
const getAllCustomers = (req, resp) => {
}

module.exports = {
    saveCustomer,
    deleteCustomer,
    getCustomer,
    updateCustomer,
    getAllCustomers
}
