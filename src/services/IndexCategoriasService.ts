import { getRepository } from 'typeorm'

import Categoria from '../models/Categoria'

class IndexCategoriaService {
  async execute(): Promise<Categoria[]> {
    const categoriasRepository = getRepository(Categoria)
    const categorias = await categoriasRepository.find()
    return categorias
  }
}

export default IndexCategoriaService
