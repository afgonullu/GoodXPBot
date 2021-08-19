import { ICreateNote } from '../interfaces/note';
import NoteModel from '../models/note';

const createNote = async (): Promise<ICreateNote> => {
  const newNote = new NoteModel({
    content: 'hello',
    date: Date.now(),
  });

  const createdNote = await newNote.save();
  return {
    message: 'created',
    data: createdNote,
  };
};

export default { createNote };
