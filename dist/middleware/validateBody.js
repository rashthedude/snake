"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const requestBodySchema = joi_1.default.object().keys({
    GameId: joi_1.default.string().required(),
    Width: joi_1.default.number().required(),
    Height: joi_1.default.number().required(),
    Score: joi_1.default.number().required(),
    Fruit: joi_1.default.object().keys({
        x: joi_1.default.number().required(),
        y: joi_1.default.number().required(),
    }),
    Snake: joi_1.default.object().keys({
        x: joi_1.default.number().required(),
        y: joi_1.default.number().required(),
        velX: joi_1.default.number().required(),
        velY: joi_1.default.number().required(),
    }),
    ticks: joi_1.default.array().items({
        velX: joi_1.default.number().required(),
        velY: joi_1.default.number().required(),
    })
});
const validateBody = (req, res, next) => {
    const { error } = requestBodySchema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
};
exports.default = validateBody;
