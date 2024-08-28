import { Fruit, Snake, Ticks } from '../ts/types/types';

export const generateRandomGameId = (max: number) => {
    return Math.floor(Math.random() * max);
};


export const calculateScore = () => {
    return 0;
};


export const calculateFruitPos = (min: number, max: number) => {
    const x = Math.floor(Math.random() * (max - min + 1)) + min;

    let y;
    do {
        y = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (y === x);

    return {x, y};
};

export const calculateSnakePos = (min: number, max: number, fruit: Fruit) => {
    let x;
    do {
        x = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (x == fruit['x']);

    let y;
    do {
        y = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (y === fruit['y']);

    let velX = 0;
    let velY = 0;

    return {x, y, velX, velY}
};

export const incrementScore = (score: number) => {
    return ++score;
}

export const snakeCaughtFruit = (snake: Snake, fruit: Fruit) => {
    // check if snake and fruit are in the same position
    if (snake['x'] === fruit['x'] && snake['y'] === fruit['y']) {
        return true;
    }
    return false;
};


export const isValidMove = (snake: Snake, ticks: Ticks[]) => {

    if (snake['velX'] == 0 && snake['velY'] == 0) {
        return true;
    }

    if (snake['velX'] > 0 && snake['velY'] > 0 && ticks[0]['velX'] >= 0 && ticks[0]['velY'] >= 0) {
        return true;
    }

    return false;
};


export const moveSnake = (snake: Snake, ticks: Ticks[]) => {
    // Move first using velX and velY then ticks[velX] and ticks[velY]
    let newSnakePosX = snake['x'] + snake['velX'] + ticks[0]['velX'];
    let newSnakePosY = snake['y'] + snake['velY'] + ticks[0]['velY'];
    return {
        newSnakePosX,
        newSnakePosY
    }

};

export const checkOutOfBounds = (height: number, width: number, snake: Snake) => {
    // move cannot lead to being out of bounds
    if (height > snake['y'] && width > snake['x']) {
        return true
    }

    return false;
};

