"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const tslib_1 = require("tslib");
const mysql = tslib_1.__importStar(require("mysql"));
// Define your database connection details
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'vaskinde marknad',
};
// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);
// Export the connection pool
exports.default = pool;
const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(connection);
            }
        });
    });
};
exports.getConnection = getConnection;
//# sourceMappingURL=db.js.map