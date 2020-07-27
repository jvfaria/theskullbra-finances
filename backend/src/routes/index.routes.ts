import registriesRoutes from './registry.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/registries', registriesRoutes);


export default routes;