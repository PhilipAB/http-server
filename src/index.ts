import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config({ path: './process.env' });

import { exampleRouter } from './routers/exampleRouter';
import notFoundErrorHandler from './middleware/errors/NotFoundErrorHandler';
import cors from 'cors';

// resource server
const app: express.Application = express();
const port: string | number = process.env.PORT || 3000;

app.use(cors({ origin: /https:\/\//i }));

app.use('/example', exampleRouter);


app.use(notFoundErrorHandler.handleNotFoundError);

app.listen(port, () => {
    console.log('Listening on port: ', port);
});