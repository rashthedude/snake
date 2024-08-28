import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


const requestBodySchema = Joi.object().keys({
    GameId: Joi.string().required(),
    Width: Joi.number().required(),
    Height: Joi.number().required(),
    Score: Joi.number().required(),
    Fruit: Joi.object().keys({
        x: Joi.number().required(),
        y: Joi.number().required(),
    }),
    Snake: Joi.object().keys({
        x: Joi.number().required(),
        y: Joi.number().required(),
        velX: Joi.number().required(),
        velY: Joi.number().required(),
    }),
    ticks: Joi.array().items({
        velX: Joi.number().required(),
        velY: Joi.number().required(),
    })
  });

const validateBody = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = requestBodySchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    next();
  }
};

export default validateBody;
