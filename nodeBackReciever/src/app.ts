import express from 'express';
const app = express();
const port = 3000;

//http://localhost:3000/api/v1/customers

app.use(express.json())

app.post('/api/v1/customers', (req, res) => {
  console.log(req.body.data);
  res.send({'message' :'record was added to database'});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});