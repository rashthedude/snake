"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOutOfBounds = exports.moveSnake = exports.isValidMove = exports.snakeCaughtFruit = exports.incrementScore = exports.calculateSnakePos = exports.calculateFruitPos = exports.calculateScore = exports.generateRandomGameId = void 0;
const generateRandomGameId = (max) => {
    return Math.floor(Math.random() * max);
};
exports.generateRandomGameId = generateRandomGameId;
const calculateScore = () => {
    return 0;
};
exports.calculateScore = calculateScore;
const calculateFruitPos = (min, max) => {
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y;
    do {
        y = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (y === x);
    return { x, y };
};
exports.calculateFruitPos = calculateFruitPos;
const calculateSnakePos = (min, max, fruit) => {
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
    return { x, y, velX, velY };
};
exports.calculateSnakePos = calculateSnakePos;
const incrementScore = (score) => {
    return ++score;
};
exports.incrementScore = incrementScore;
const snakeCaughtFruit = (snake, fruit) => {
    // check if snake and fruit are in the same position
    if (snake['x'] === fruit['x'] && snake['y'] === fruit['y']) {
        return true;
    }
    return false;
};
exports.snakeCaughtFruit = snakeCaughtFruit;
const isValidMove = (snake, ticks) => {
    if (snake['velX'] == 0 && snake['velY'] == 0) {
        return true;
    }
    if (snake['velX'] > 0 && snake['velY'] > 0 && ticks[0]['velX'] >= 0 && ticks[0]['velY'] >= 0) {
        return true;
    }
    return false;
};
exports.isValidMove = isValidMove;
const moveSnake = (snake, ticks) => {
    // Move first using velX and velY then ticks[velX] and ticks[velY]
    let newSnakePosX = snake['x'] + snake['velX'] + ticks[0]['velX'];
    let newSnakePosY = snake['y'] + snake['velY'] + ticks[0]['velY'];
    return {
        newSnakePosX,
        newSnakePosY
    };
};
exports.moveSnake = moveSnake;
const checkOutOfBounds = (height, width, snake) => {
    // move cannot lead to being out of bounds
    if (height > snake['y'] && width > snake['x']) {
        return true;
    }
    return false;
};
exports.checkOutOfBounds = checkOutOfBounds;
