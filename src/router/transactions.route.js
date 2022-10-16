const exrpress = require('express');
const {
    getTransactions,
    createTransactions,
    getDetailTransactions,
    deleteTransactions,
    getTransactionsByUser,
    getBookingDetail,
    confirmPaid,
} = require('../controllers/transactions.controller');
const jwtAuth = require('../middlewares/jwtAuth');
const transactionValidation = require('../validations/transaction.validation');
const runValidation = require('../middlewares/runValidation');

const router = exrpress.Router();

router
    .post('/transactions/:id', transactionValidation.post, runValidation, createTransactions)
    .get('/transactions', getTransactions)
    .get('/transactions/:id', getDetailTransactions)
    .delete('/transactions/:id', deleteTransactions)
    .get('/userTransactions', getTransactionsByUser)
    .get('/detailTransactions/:id', getBookingDetail)
    .put('/transactions/:id/paid', confirmPaid);

module.exports = router;
