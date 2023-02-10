"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const customer_1 = require("../model/customer");
exports.connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "demo",
    entities: [customer_1.customer],
    synchronize: false,
    logging: false
});
//# sourceMappingURL=connection.js.map