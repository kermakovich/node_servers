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
const connection_1 = require("./config/connection");
const customer_1 = require("./model/customer");
const app = (0, express_1.default)();
const port = 3000;
//http://localhost:3000/api/v1/customers
app.use(express_1.default.json());
// app.post('/api/v1/customers', (req, res) => {
//   console.log(req.body.data);
//   res.send({'message' :'record was added to database'});
// });
connection_1.connection.then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("connected");
    const customerRepository = connection.getRepository(customer_1.customer);
    app.post('/api/v1/customers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const customer = yield customerRepository.create(req.body);
        console.log(customer);
        const results = yield customerRepository.save(customer);
        console.log(results);
        return res.send(results);
    }));
})).catch(error => {
    console.log(error);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map