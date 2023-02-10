import { createConnection } from "typeorm";
import { customer } from "../model/customer";

export const connection = createConnection({
  type: "postgres" ,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "demo",
  entities: [customer],
  synchronize: false,
  logging: false
});