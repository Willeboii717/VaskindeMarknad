"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfUserExists = void 0;
const db_query_1 = require("../databaseHandler/db.query");
async function checkIfUserExists(req, res, next) {
    try {
        var customer = req.body; // Adds body to customer interface
        const query = "SELECT * FROM CUSTOMERS WHERE username = ?";
        const resultOfQuery = await (0, db_query_1.executeGetQuery)(query, [customer.username]);
        if (resultOfQuery.username != null || resultOfQuery.username != undefined) {
            console.log("[server]: User already exists");
            res.status(409).json({
                error: {
                    code: 'USER_ALREADY_EXISTS',
                    message: 'User already exists',
                    status: 409,
                },
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        if (error == "NO_DATA") {
            console.log("No data");
        }
        const httperror = {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error',
            status: 500,
        };
        res.status(httperror.status).json(httperror);
    }
}
exports.checkIfUserExists = checkIfUserExists;
//# sourceMappingURL=CustomerController.js.map