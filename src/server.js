import express from "express";
import mustacheExpress from 'mustache-express';
import * as constant from "./constants.js";
import { router } from "./routes.js";

const app = express();


app.engine("mustache", mustacheExpress());
app.set('view engine', 'mustache');
app.set("views", `${constant.dirname}src/views`);


app.use(router);

const PORT = constant.PORT;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
