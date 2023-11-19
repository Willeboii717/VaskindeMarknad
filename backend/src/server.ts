import express from "express";
import cors from "cors";
import "reflect-metadata"


const customerRouter  = require('./routers/customersRouter');
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors ({
  credentials:true,
  origin:["http://localhost:4200"]
}));

app.get("/", (req, res) => {
  res.send("Hello World from /");
});

app.use('/api', customerRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Server Running on port " + port);
});