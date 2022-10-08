import { connect } from 'mongoose';

export default async function connectToDb() {
  try {
    await connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.uxbfc.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    )
      .then(() => {
        console.log('Connected to database');
      })
      .catch(err => {
        console.log('Error connecting to database: ', err);
      });
  } catch (error) {
    console.log('Error connecting to database: ', error);
  }
}
