import axios from 'axios';

export const twitchAuthBaseUrl = 'https://id.twitch.tv/oauth2';

const twitchAuthApi = axios.create({
  baseURL: twitchAuthBaseUrl,
});

export default twitchAuthApi;
