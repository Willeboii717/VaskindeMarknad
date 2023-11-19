"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runValidator = void 0;
const express_validator_1 = require("express-validator");
function runValidator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log("[server]: Post Failure,  Didn't pass validation");
        return res.status(400).send({ msg: errors });
    }
    next();
}
exports.runValidator = runValidator;
//# sourceMappingURL=validatorRunner.js.map