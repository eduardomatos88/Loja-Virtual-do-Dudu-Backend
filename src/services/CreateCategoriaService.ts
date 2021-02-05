import { getRepository } from 'typeorm'

import Categoria from '../models/Categoria'

interface IRequest {
  nome: string
  descricao: string
}

class CreateCategoriaService {
  async execute({ nome, descricao }: IRequest): Promise<Categoria> {
    const categoriasRepository = getRepository(Categoria)
    const existeCategoria = await categoriasRepository.findOne({ nome })
    if (existeCategoria) {
      throw new Error('Categoria já existe')
    }
    const categoria = categoriasRepository.create({ nome, descricao })
    await categoriasRepository.save(categoria)
    return categoria
  }
}

export default CreateCategoriaService
