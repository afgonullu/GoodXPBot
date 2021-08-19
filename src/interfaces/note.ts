export interface Note {
  id: string;
  content: string;
  date: string;
  important: boolean;
}

export interface ICreateNote {
  message: string;
  data: Note;
}
