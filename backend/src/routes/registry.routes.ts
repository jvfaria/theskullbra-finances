import { Router, request, response } from 'express';
import { getRepository } from 'typeorm';
import Registry from '../models/Registry';
import CreateRegistryService from '../services/createRegistryService';

const registriesRoutes = Router();

registriesRoutes.get('/', async (request, response) => {
  try {
    const registryRepository = getRepository(Registry);
    const registries = await registryRepository.find();

    return response.json(registries);
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

registriesRoutes.post('/', async (request, response) => {
  try {
    const { title, category, value } = request.body;
    
    const registryService = new CreateRegistryService();

    const registry = await registryService.execute({ title, category, value });

    return response.status(201).json(registry);


  } catch (error) {
    return response.status(400).json({message: error.message});
  }


})


export default registriesRoutes;