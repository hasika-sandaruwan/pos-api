const Customer = require('../model/CustomerSchema');

const saveCustomer = (req, resp) => {
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
    Customer.deleteOne({customerId: req.headers.id}).then(deleteResponse => {
        if (deleteResponse.deletedCount > 0) {
            resp.status(200).json({message: 'Deleted'});
        } else {
            resp.status(200).json({message: 'Try Again'});
        }
    }).catch(error => {
        resp.status(500).json(error)
    })
}
const getCustomer = (req, resp) => {

}

const updateCustomer = (req, resp) => {
    Customer.updateOne(
        {customerId: req.body.id},
        {
            $set: {
                customerName: req.body.name,
                customerSalary: req.body.salary,
                customerAddress: req.body.address
            }
        }
    ).then(updateResult => {

        if (updateResult.nModified > 0) {
            resp.status(200).json({message: 'updated'});
        } else {
            resp.status(200).json({message: 'try Again'});
        }

    }).catch(updateError => {
        resp.status(500).json(updateError);
    })
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
