import express, { Request, Response } from 'express';

const botRouter = express.Router();

botRouter.get('/join', async (_req: Request, _res: Response) => {
  console.log('bot Join');
});

export default botRouter;
