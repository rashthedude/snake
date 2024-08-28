"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { generateFruit } from '../services/generateFruit';
const utils_1 = require("../utils/utils");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const h = parseInt(req.query.h);
    const w = parseInt(req.query.w);
    // const fruitPosition = generateFruit(w, h);
    const Fruit = (0, utils_1.calculateFruitPos)(h, w);
    const state = {
        GameID: (0, utils_1.generateRandomGameId)(10000).toString(),
        Width: w,
        Height: h,
        Score: (0, utils_1.calculateScore)(),
        Fruit: Fruit,
        Snake: (0, utils_1.calculateSnakePos)(h, w, Fruit)
    };
    let marshalledState = JSON.stringify(state);
    res.status(200).send(marshalledState);
});
exports.default = router;
