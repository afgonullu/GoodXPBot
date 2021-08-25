import { get } from 'env-var';

import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: get('PORT').required().asIntPositive(),
  MONGO_DB_URI: get('MONGO_DB_URI').required().asString(),
  TWITCH_APP_CLIENT_ID: get('TWITCH_APP_CLIENT_ID').required().asString(),
  TWITCH_APP_CLIENT_SECRET: get('TWITCH_APP_CLIENT_SECRET').required().asString(),
  TWITCH_APP_REDIRECT_URI: get('TWITCH_APP_REDIRECT_URI').required().asString(),
  TWITCH_APP_OAUTH_STATE: get('TWITCH_APP_OAUTH_STATE').required().asString(),
};

export default config;
