import express, {  Request, Response } from "express";
// import { generateFruit } from '../services/generateFruit';
import { generateRandomGameId, calculateScore, calculateFruitPos, calculateSnakePos } from '../utils/utils';
import { State } from '../ts/types/types';

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    const h: number = parseInt(req.query.h as string)
    const w: number = parseInt(req.query.w as string)
    // const fruitPosition = generateFruit(w, h);
    const Fruit = calculateFruitPos(h, w);

    const state: State = {
        GameID: generateRandomGameId(10000).toString(),
        Width: w,
        Height: h,
        Score: calculateScore(),
        Fruit: Fruit,
        Snake: calculateSnakePos(h, w, Fruit)
    }

    let marshalledState = JSON.stringify(state)
    res.status(200).send(marshalledState);
});

export default router;
