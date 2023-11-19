"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let CustomerModel = class CustomerModel {
};
exports.CustomerModel = CustomerModel;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], CustomerModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CustomerModel.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CustomerModel.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CustomerModel.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CustomerModel.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], CustomerModel.prototype, "password", void 0);
exports.CustomerModel = CustomerModel = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], CustomerModel);
//# sourceMappingURL=customer.js.map