import { URLSearchParams } from 'url';
import config from '../config';
import { ITokenResponse, IUserResponse, User } from '../interfaces';
import { twitchAuthApi, twitchHelixApi } from '../lib';
import { UserModel } from '../models';

export const getUserToken = async (code: string): Promise<ITokenResponse> => {
  const qs = new URLSearchParams({
    client_id: config.TWITCH_APP_CLIENT_ID,
    client_secret: config.TWITCH_APP_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: config.TWITCH_APP_REDIRECT_URI,
  });

  const { data } = await twitchAuthApi.post<ITokenResponse>(`/token?${qs}`);

  return data;
};

export const getUser = async (accessToken: string): Promise<IUserResponse[]> => {
  const {
    data: { data },
  } = await twitchHelixApi.get<{ data: IUserResponse[] }>('/users', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': config.TWITCH_APP_CLIENT_ID,
    },
  });

  return data;
};

export const createUser = async (tokenResponse: ITokenResponse, userResponse: IUserResponse): Promise<User> => {
  const newUser = new UserModel({
    refreshToken: tokenResponse.refresh_token,
    twitchId: userResponse.id,
    twitchLogin: userResponse.login,
    twitchProfileImageUrl: userResponse.profile_image_url,
    scope: tokenResponse.scope.join(','),
  });

  await newUser.save();

  return newUser;
};

export default { createUser, getUserToken, getUser };
