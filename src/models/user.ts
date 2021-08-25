import mongoose from 'mongoose';
import { User } from '../interfaces/user';

const userSchema = new mongoose.Schema<User>({
  twitchId: { type: String, required: true },
  twitchLogin: { type: String, required: true },
  twitchProfileImageUrl: { type: String, required: true },
  refreshToken: { type: String, required: true },
  scope: { type: String, required: true },
});

export default mongoose.model<User>('User', userSchema);
