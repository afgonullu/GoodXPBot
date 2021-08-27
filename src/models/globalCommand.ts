import mongoose from 'mongoose';
import { GlobalCommand } from '../interfaces';

const globalCommandSchema = new mongoose.Schema<GlobalCommand>({
  name: { type: String, required: true },
  response: { type: String, required: true },
});

export default mongoose.model<GlobalCommand>('GlobalCommand', globalCommandSchema);
