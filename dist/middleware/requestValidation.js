"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const requestSchema = joi_1.default.object({
    w: joi_1.default.string().required(),
    h: joi_1.default.string().required()
});
const validateRequest = (req, res, next) => {
    const { error } = requestSchema.validate(req.query);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    else {
        next();
    }
};
exports.default = validateRequest;
