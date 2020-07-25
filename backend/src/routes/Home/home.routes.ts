import { Router, request, response } from 'express';


const homeRoutes = Router();

homeRoutes.get('/', (request, response) => {
  return response.json({message: "Home works"})
})


export default homeRoutes;