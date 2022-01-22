import express from 'express';
import * as constant from './constants.js';
import {router} from "./routes.js";

const app = express();

app.use(router);

const PORT = 4000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));