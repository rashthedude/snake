"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Middleware
const requestValidation_1 = __importDefault(require("./middleware/requestValidation"));
const validateBody_1 = __importDefault(require("./middleware/validateBody"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const errorHandler_2 = __importDefault(require("./middleware/errorHandler"));
// Routes
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const gameRoute_1 = __importDefault(require("./routes/gameRoute"));
const validateRoute_1 = __importDefault(require("./routes/validateRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// Routes
app.use('/', indexRoute_1.default);
app.use('/new', requestValidation_1.default, gameRoute_1.default);
app.use('/validate', validateBody_1.default, validateRoute_1.default);
// Middleware
app.use(errorHandler_1.default);
app.use(errorHandler_2.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;
