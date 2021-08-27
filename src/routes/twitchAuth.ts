import express, { Request, Response } from 'express';
import { URLSearchParams } from 'url';
import config from '../config';
import { createUser, getUser, getUserToken } from '../services/twitchAuthService';
import { twitchAuthBaseUrl } from '../lib';
import { twitchScopes } from '../utils';
import { UserModel } from '../models';

const twitchAuthRouter = express.Router();

twitchAuthRouter.get('/', (req: Request, res: Response) => {
  const scope = (req.query.scope as string) || twitchScopes.essentialScopes;

  const qs = new URLSearchParams({
    client_id: config.TWITCH_APP_CLIENT_ID,
    redirect_uri: config.TWITCH_APP_REDIRECT_URI,
    response_type: 'code',
    scope,
    state: config.TWITCH_APP_OAUTH_STATE,
  });
  res.redirect(`${twitchAuthBaseUrl}/authorize?${qs}`);
});

twitchAuthRouter.get('/callback', async (req: Request, res: Response) => {
  const code = req.query.code as string;

  if (!code) throw new Error('No code for token generation');

  const tokenResponse = await getUserToken(code);

  const userResponse = await getUser(tokenResponse.access_token);

  const user = await UserModel.findOne({ twitchId: userResponse[0].id });

  if (user) throw new Error('User already exists in db');

  const newUser = await createUser(tokenResponse, userResponse[0]);

  if (!newUser) throw new Error("Couldn't save user to the db");

  res.status(200).json(newUser);
});

export default twitchAuthRouter;
