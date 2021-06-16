const express = require('express');
const sequelize = require('sequelize');
const  bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const {json}=require('express');

const db = require("./models");

let app = express();
app.use(express.json());

dotenv.config();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

require("./approutes")(app);

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

var port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World with Express'));



app.listen(port, function () {
    console.log("Running Nithya on port " + port);
 });