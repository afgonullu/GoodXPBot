import axios from 'axios';

const twitchHelixApi = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
});

export default twitchHelixApi;
