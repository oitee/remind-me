import express from "express";
import {renderHome, goToNext, getHint, getSolution} from "./controller/route_handlers.js"

export const router = express.Router();

router.get('/', renderHome);

router.get('/next/:id', goToNext);

router.get('/hint/:id', getHint);

router.get('/solution/:id', getSolution);
