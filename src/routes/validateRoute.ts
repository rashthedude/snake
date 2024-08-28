import express, { Request, Response } from "express";
import { validateMove } from "../services/verifyMove";

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    // incoming JSON body -> state (GameId, Width, Height, Score, Fruit, Snake), ticks; [velX, velY]
    
    const checkValidMove = validateMove(req.body);
    if (checkValidMove.status == 200) {
        let marshalledState = JSON.stringify(checkValidMove.body)
        res.status(checkValidMove.status).send(marshalledState)
    } 

    if (checkValidMove.status = 418) {
        res.status(checkValidMove.status).send({"msg": "Game is over, snake went out of bounds or made an invalid move."})
    }
    
});

export default router;