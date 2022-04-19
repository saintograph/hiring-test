import express from 'express';
import { Express, Request, Response } from 'express';
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db.json');

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
  db.set('001', JSON.stringify([1, 2, 3]))
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});