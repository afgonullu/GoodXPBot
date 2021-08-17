import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config/config';
import middlewares from './utils/middlewares';

require('express-async-errors');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use(middlewares.errorHandler);

app.listen(config.PORT, () => {
  console.log(config.PORT);
  console.log(`Server running on port ${config.PORT}`);
});
