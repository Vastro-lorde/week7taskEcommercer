const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const https = require('https');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productsRoute');

const app = express();

dotenv.config({path:"./config.env"});


// declaring port
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', userRouter);
app.use('/product', productRouter);

// creating the server using https protocol for secure connect(since we are dealing with money).
const server = https.createServer({
    key: fs.readFileSync(`${__dirname}/server.key`, 'utf8'),
    cert: fs.readFileSync(`${__dirname}/server.cert`, 'utf8')
  }, app).listen(port, (request,response)=>{
      console.log(`listening at https://localhost:${port}`);
  });