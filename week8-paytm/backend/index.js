const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbconnection = require("./db");

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


const mainRouter = require('./routes/index');

app.use(express.json());

app.use('/api/v1', mainRouter);
app.get('/', (req, res) =>{
res.send('Express App')
})
app.listen(5000, () => {
  dbconnection();
  console.log(`Server is running `);
} );

