import express from 'express';
import dotenv from 'dotenv';

/* app initialized */
dotenv.config();
const app = express();

/* app listening on port 5000 */
app.listen(1923, function () {
  console.log('Server is running on port' + this.address().port);
});
