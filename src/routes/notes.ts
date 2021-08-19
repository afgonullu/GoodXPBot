import express, { Request, Response } from 'express';
import noteService from '../services/notes';

const notesRouter = express.Router();

notesRouter.post('/', async (_req: Request, res: Response) => {
  const newItem = await noteService.createNote();
  res.status(201).json(newItem);
});

export default notesRouter;
