import Registry from "../models/Registry";
import {getRepository} from 'typeorm';
import { format } from 'date-fns';
 
interface RegistryRequest {
  title: string,
  value: number,
  category: string,

}

class createRegistryService {
  public async execute({ title, category, value }: RegistryRequest ): Promise<Registry> {
    const registryRepository = getRepository(Registry);
    
    if(value > 100000){
      throw new Error('Large values are not accepted!');
    }
    const parsedDate = format(new Date(), 'dd-MM-yyyy');
    const registry = registryRepository.create({
      title: title,
      category: category,
      value: value,
      created_at: new Date(),
    });
    const registrySaved = await registryRepository.save(registry);

    return registrySaved;


  }
}

export default createRegistryService;