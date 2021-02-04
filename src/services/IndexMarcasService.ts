import { getRepository } from 'typeorm'

import Marca from '../models/Marca'

class IndexMarcasService {
  async execute(): Promise<Marca[]> {
    const marcasRepository = getRepository(Marca)
    const marcas = await marcasRepository.find()
    return marcas
  }
}

export default IndexMarcasService
