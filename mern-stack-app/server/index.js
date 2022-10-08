import express from 'express';
import * as dotenv from 'dotenv';
import connectMongo from './config/index.js';
/* app initialized */
dotenv.config();
connectMongo();
const app = express();

/* app listening on port 5000 */
app.listen(1923, function () {
  console.log('Server is running on port : ' + this.address().port);
});
