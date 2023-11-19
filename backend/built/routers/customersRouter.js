"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const router = express_1.default.Router();
//Database
const db_query_1 = require("../databaseHandler/db.query");
//Validators
const customerValidator_1 = require("../validators/customerValidator");
const validatorRunner_1 = require("../validators/validatorRunner");
//Controllers
const CustomerController_1 = require("../controllers/CustomerController");
router.get('/getUserByID/:ID', async (req, res) => {
    console.log("[server]: entering Get, GetUserByID");
    const query = "SELECT * FROM CUSTOMERS";
    const queryResult = (0, db_query_1.executeGetQuery)(query, [req.params.ID]);
    res.send(queryResult);
});
router.post('/createUser', customerValidator_1.createCustomerValidator, // determines what should be validated
validatorRunner_1.runValidator, // runs validator on body
CustomerController_1.checkIfUserExists, // Checks if users exist
async (req, res) => {
    console.log("[server]: entering Post, createCustomer");
    // Placing body in User interface
    const user = req.body;
    const query = 'INSERT INTO customers (username, email, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)';
    (0, db_query_1.executeGetQuery)(query, [user.username, user.email, user.firstname, user.lastname, user.password])
        .then((result) => {
        console.log("Result from DB: ", result);
        res.send("User created successfully"); //This is a WIP, 
    })
        .catch((error) => {
        if (error === "NO_DATA") {
            console.log(error);
            res.send("NO DATA ERROR");
        }
        else {
            console.log(error);
            res.send("UNSPECIFIED ERROR");
        }
    });
});
router.post('/loginUser', customerValidator_1.loginValidator, validatorRunner_1.runValidator, async (req, res) => {
    console.log("[server]: entering Post, loginCustomer ", req.body);
    const frontEndDataUser = req.body;
    try {
        //Query definition
        const query = 'SELECT * FROM CUSTOMERS WHERE USERNAME = ? AND PASSWORD = ?';
        //Exe Query
        const resultOfQuery = await (0, db_query_1.executeGetQuery)(query, [frontEndDataUser.username, frontEndDataUser.password]);
        //If successful find of customer, return
        if (resultOfQuery.length >= 1) {
            res.status(201).send({ msg: "Customer Authenticated" });
            console.log("[server]: Post Success, Customer Authenticated");
        }
        else {
            const resError = {
                code: 'CREDENTIALS_MISMATCHED',
                message: 'Credentials mismatch',
                status: 401,
            };
            res.status(resError.status).json({ error: resError.code, message: resError.message });
            console.log("[server]: POST Failure, Credentials mismatch");
        }
    }
    // Handle any database errors
    catch (error) {
        const resError = {
            code: 'SQL_ERROR',
            message: 'Error in database, not Authenticated',
            status: 500,
        };
        res.status(resError.status).json({ error: resError.code, message: resError.message });
        console.log("[server]: POST Failure, Database Error");
    }
});
module.exports = router;
//# sourceMappingURL=customersRouter.js.map