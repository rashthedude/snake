"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyMove_1 = require("../services/verifyMove");
const router = express_1.default.Router();
router.post('/', (req, res) => {
    // incoming JSON body -> state (GameId, Width, Height, Score, Fruit, Snake), ticks; [velX, velY]
    const checkValidMove = (0, verifyMove_1.validateMove)(req.body);
    if (checkValidMove.status == 200) {
        let marshalledState = JSON.stringify(checkValidMove.body);
        res.status(checkValidMove.status).send(marshalledState);
    }
    if (checkValidMove.status = 418) {
        res.status(checkValidMove.status).send({ "msg": "Game is over, snake went out of bounds or made an invalid move." });
    }
});
exports.default = router;
