import express from 'express';
import { connection } from './connection/connection';
import { customer } from './model/customer';
const app = express();
const port = 3001;

app.use(express.json())

connection.then(
    async connection => {
        console.log("connected")
  const customerRepository = connection.getRepository(customer);
  app.get("/api/v1/customers/:id", async(req,res) => {
    const customer = await customerRepository
                    .findOne({where: { internalId: req.params.id }})
    res.json(customer)
    })  
}
).catch(error=>{
    console.log(error)
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

