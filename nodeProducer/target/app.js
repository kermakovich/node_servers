"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./connection/connection");
const customer_1 = require("./model/customer");
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
connection_1.connection.then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("connected");
    const customerRepository = connection.getRepository(customer_1.customer);
    app.get("/api/v1/customers/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const customer = yield customerRepository
            .findOne({ where: { internalId: req.params.id } });
        res.json({
            message: "success",
            payload: customer
        });
    }));
})).catch(error => {
    console.log(error);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map