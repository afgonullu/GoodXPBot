import express, { Request, Response } from 'express';
import { URLSearchParams } from 'url';
import config from '../config/config';
import { ITokenResponse } from '../interfaces/twitchAuth';
import { IUserResponse } from '../interfaces/twitchHelix';
import twitchAuthApi, { twitchAuthBaseUrl } from '../lib/twitchAuthApi';
import twitchHelixApi from '../lib/twitchHelixApi';
import UserModel from '../models/user';

const twitchAuthRouter = express.Router();

twitchAuthRouter.get('/', (req: Request, res: Response) => {
  const scope = req.query.scope as string;

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

  const qs = new URLSearchParams({
    client_id: config.TWITCH_APP_CLIENT_ID,
    client_secret: config.TWITCH_APP_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: config.TWITCH_APP_REDIRECT_URI,
  });

  const { data: tokenResponse } = await twitchAuthApi.post<ITokenResponse>(`/token?${qs}`);

  const {
    data: { data: userResponse },
  } = await twitchHelixApi.get<{ data: IUserResponse[] }>('/users', {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
      'Client-Id': config.TWITCH_APP_CLIENT_ID,
    },
  });

  const user = new UserModel({
    refreshToken: tokenResponse.refresh_token,
    twitchId: userResponse[0].id,
    twitchLogin: userResponse[0].login,
    twitchProfileImageUrl: userResponse[0].profile_image_url,
    scope: tokenResponse.scope.join(','),
  });

  await user.save();

  res.send('Ok');
});

export default twitchAuthRouter;
