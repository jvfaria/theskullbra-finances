import homeRoutes from '../routes/Home/home.routes';
import express from 'express';

const app = express();

app.use('/home', homeRoutes);


export default app;