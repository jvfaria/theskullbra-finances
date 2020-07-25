import express, { json } from 'express';
import app from '../src/routes/index.routes';


app.use(express.json());

app.listen(3334, () => {
  console.log('Backend is running on port 3334')
});