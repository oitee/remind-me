import { URL } from "url";

export const PORT = process.env.PORT || 4000;

export const dirname = new URL("..", import.meta.url).pathname;
