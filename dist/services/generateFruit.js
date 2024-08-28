"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFruit = void 0;
const generateFruit = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.generateFruit = generateFruit;
