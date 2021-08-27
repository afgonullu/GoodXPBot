import express, { NextFunction, Request, Response } from 'express';
import { GlobalCommand } from '../interfaces';
import { GlobalCommandModel } from '../models';

const globalCommandRouter = express.Router();

globalCommandRouter.post('/', async (req: Request, res: Response, _next: NextFunction) => {
  const { name, response } = req.body as GlobalCommand;

  const command = new GlobalCommandModel({
    name,
    response,
  });

  await command.save();

  res.send('Command created');
});

export default globalCommandRouter;
