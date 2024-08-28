import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const requestSchema = Joi.object({
  w: Joi.string().required(),
  h: Joi.string().required()
});

const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = requestSchema.validate(req.query);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
};

export default validateRequest;
