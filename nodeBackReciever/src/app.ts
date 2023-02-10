import express from 'express';
import { connection } from './config/connection';
import { customer } from './model/customer';
const app = express();
const port = 3000;

//http://localhost:3000/api/v1/customers

app.use(express.json())

// app.post('/api/v1/customers', (req, res) => {
//   console.log(req.body.data);
//   res.send({'message' :'record was added to database'});
// });

connection.then(
  async connection => {
      console.log("connected")
      const customerRepository = connection.getRepository(customer);
      app.post('/api/v1/customers', async(req, res) => {
        const customer = await customerRepository.create(req.body.data)
        console.log(customer)
        const results = await customerRepository.save(customer)
        return res.send(results)  
  })  
}
).catch(error=>{
  console.log(error)
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});