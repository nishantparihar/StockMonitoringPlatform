import express, { Request, Response, NextFunction, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});