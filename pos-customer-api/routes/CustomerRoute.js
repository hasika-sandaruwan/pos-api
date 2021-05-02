const express = require('express');
const CustomerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/saveCustomer', CustomerController.saveCustomer);
router.delete('/deleteCustomer', CustomerController.deleteCustomer);
router.get('/getCustomer', CustomerController.getCustomer);
router.put('/updateCustomer', CustomerController.updateCustomer);
router.get('/getAllCustomers', CustomerController.getAllCustomers);

module.exports = router;
