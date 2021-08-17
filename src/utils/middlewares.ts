import { NextFunction, Request, Response } from 'express';

const errorHandler = (error: Error, _request: Request, response: Response, next: NextFunction): void => {
  if (error.message === 'CastError') {
    response.status(400).send({ error: 'malformatted id' });
  }
  if (error.message === 'ValidationError') {
    response.status(400).json({ error: error.message });
  }

  next(error);
};

const unknownEndpoint = (_request: Request, response: Response): void => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export default { errorHandler, unknownEndpoint };
