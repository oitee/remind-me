import { URL } from 'url';

export const PORT = process.env.PORT;

export const dirname = new URL('..', import.meta.url).pathname;
