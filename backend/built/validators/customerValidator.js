"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.createCustomerValidator = void 0;
const express_validator_1 = require("express-validator");
const createCustomerValidator = [
    (0, express_validator_1.body)('username', 'Username is required').not().isEmpty(),
    (0, express_validator_1.body)('email', 'email is not valid').not().isEmpty().isEmail(),
    (0, express_validator_1.body)('firstname', 'firstname is required').not().isEmpty(),
    (0, express_validator_1.body)('lastname', 'lastname is required').not().isEmpty(),
    (0, express_validator_1.body)('password', 'password is required').not().isEmpty(),
];
exports.createCustomerValidator = createCustomerValidator;
const loginValidator = [
    //Sanitation of login
    (0, express_validator_1.check)('username', 'Username is required').trim().escape().not().isEmpty(),
    (0, express_validator_1.check)('password', 'password is required').trim().escape().not().isEmpty()
];
exports.loginValidator = loginValidator;
//# sourceMappingURL=customerValidator.js.map