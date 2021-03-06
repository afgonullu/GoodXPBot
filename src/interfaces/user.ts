export interface User {
  id: string;
  twitchId: string;
  twitchLogin: string;
  twitchProfileImageUrl: string;
  refreshToken: string;
  scope: string;
  botName?: string;
  botOAuth?: string;
  botRefreshToken?: string;
}
