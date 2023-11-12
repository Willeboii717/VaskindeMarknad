import { body, check} from 'express-validator';

const createCustomerValidator = [
    body('username', 'Username is required').not().isEmpty(),
    body('email', 'email is not valid').not().isEmpty().isEmail(),
    body('firstname', 'firstname is required').not().isEmpty(),
    body('lastname', 'lastname is required').not().isEmpty(),
    body('password', 'password is required').not().isEmpty(),
]
export {createCustomerValidator as createCustomerValidator};

const loginValidator = [
  //Sanitation of login
  check('username', 'Username is required').trim().escape().not().isEmpty(), //Should be handled with own error model, eventually
  check('password', 'password is required').trim().escape().not().isEmpty()
];
export {loginValidator as loginValidator}