import mongoose from 'mongoose';
import config from '../config';

mongoose
  .connect(config.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error: Error) => {
    throw new Error(error.message);
  });
