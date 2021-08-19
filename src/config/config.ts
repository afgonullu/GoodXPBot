import { get } from 'env-var';

import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: get('PORT').required().asIntPositive(),
  MONGO_DB_URI: get('MONGO_DB_URI').required().asString(),
};

export default config;
