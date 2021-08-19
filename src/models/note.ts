import mongoose from 'mongoose';
import { Note } from '../interfaces/note';

const noteSchema = new mongoose.Schema<Note>({
  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  date: {
    type: Date,
    required: true,
  },
  important: Boolean,
});

export default mongoose.model<Note>('NoteModel', noteSchema);
