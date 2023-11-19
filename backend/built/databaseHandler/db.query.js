"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeGetQuery = void 0;
const tslib_1 = require("tslib");
const db_1 = tslib_1.__importDefault(require("./db"));
function executeGetQuery(query, params = []) {
    return new Promise((resolve, reject) => {
        db_1.default.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(query, params, (queryError, results) => {
                connection.release(); //Release connection after query
                if (queryError) {
                    return reject(queryError); //If queryerror, reject
                }
                console.log(results);
                if (results && results.length > 0) { //check for length, if more than 0, db returned data, resolve
                    resolve(results.length === 1 ? results[0] : results); //if 
                }
                else {
                    console.log(typeof results, results);
                    reject("NO_DATA"); //Think Jocke fixed, will chaosTest
                }
            });
        });
    });
}
exports.executeGetQuery = executeGetQuery;
//Could be useful to look at RowDataPacket or OkPacket instead, RowDataPacket if data, OKpacket if insert... maybe
//# sourceMappingURL=db.query.js.map