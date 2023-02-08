import express from 'express';
const app = express();
const port = 3000;

app.use(express.json())

app.post('/api/v1/customers', (req, res) => {
  console.log(req.body);
  res.send({'' :'record was added to database'});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});