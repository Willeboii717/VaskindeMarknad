"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
require("reflect-metadata");
const customerRouter = require('./routers/customersRouter');
const app = (0, express_1.default)();
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.get("/", (req, res) => {
    res.send("Hello World from /");
});
app.use('/api', customerRouter);
const port = 5000;
app.listen(port, () => {
    console.log("Server Running on port " + port);
});
//# sourceMappingURL=index.js.map