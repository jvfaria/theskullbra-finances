import express, { json } from 'express';
import routes from '../src/routes/index.routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.log('Skull is running on port 3334')
});