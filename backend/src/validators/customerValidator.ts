import { body} from 'express-validator';

const createCustomerValidator = [
    body('username', 'Username is required').not().isEmpty(),
    body('email', 'email is not valid').not().isEmpty().isEmail(),
    body('firstname', 'firstname is required').not().isEmpty(),
    body('lastname', 'lastname is required').not().isEmpty(),
    body('password', 'password is required').not().isEmpty(),
]
export {createCustomerValidator as createCustomerValidator};

const loginValidator = [
  body('email', 'Username is required').not().isEmpty(),
]
export {loginValidator as loginValidator}