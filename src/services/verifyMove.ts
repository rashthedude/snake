import { snakeCaughtFruit, moveSnake, incrementScore, isValidMove, checkOutOfBounds } from "../utils/utils"
import { RequestBody } from "../ts/interfaces/requestBody";

export const validateMove = (body: RequestBody) => {
    /* Logic: 
        X and Y velocity at any given time can be -1 (left/up), 0 (no movement) or 1 (down or right). 
        180 degree turn is not permitted.
        If Snake x/y values are positive then ticks velocity cannot be negative.
        add snake velocity to x and y or substract if negative.
        then add velX and velY to Snake[x] and Snake[y] or substract if negative.
        check if fruit and snake are in the same location, if yes => score++, if no return score as is.
        check if snake is out of bounds.
    */
    let validMove = isValidMove(body.Snake, body.ticks)

    if (validMove) {
        let snakeMove = moveSnake(body.Snake, body.ticks);
        
        body.Snake['x'] = snakeMove.newSnakePosX;
        body.Snake['y'] = snakeMove.newSnakePosY;

        // check if out of bounds
        let notOutOfBound = checkOutOfBounds(body.Height, body.Width, body.Snake);
        if (notOutOfBound) {
            // check if snake reached the fruit
            let didSnakeReachFruit = snakeCaughtFruit(body.Snake, body.Fruit);
            if (didSnakeReachFruit) {
                let incrementedScore = incrementScore(body.Score);
                body.Score = incrementedScore;
                return {
                    status: 200,
                    body
                }
            } else {
                return {
                    status: 404
                }
            }
        } else {
            return {
                status: 418
            }
        }


    } else {
        return {
            status: 418
        };
    }
};