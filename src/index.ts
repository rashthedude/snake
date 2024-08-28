import express, { Express, Request, Response } from "express";

// Middleware
import validateRequest from "./middleware/requestValidation";
import validateBody from "./middleware/validateBody";
import loggerMiddleware from "./middleware/errorHandler";
import errorHandlerMiddleware from "./middleware/errorHandler";

// Routes
import indexRouter from './routes/indexRoute';
import gameRouter from './routes/gameRoute';
import validateRoute from './routes/validateRoute';

import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/new', validateRequest, gameRouter);
app.use('/validate', validateBody, validateRoute)


// Middleware
app.use(loggerMiddleware);
app.use(errorHandlerMiddleware);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;