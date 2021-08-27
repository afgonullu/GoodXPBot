import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config';
import middlewares from './utils/middlewares';
import twitchAuthRouter from './routes/twitchAuth';
import globalCommandRouter from './routes/globalCommand';

require('express-async-errors');
require('./db/mongo');
// require('./bot/bot');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/auth/twitch', twitchAuthRouter);
app.use('/globalCommands', globalCommandRouter);

app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
