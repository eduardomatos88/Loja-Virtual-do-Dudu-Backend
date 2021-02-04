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
    const marca = categoriasRepository.create({ nome, descricao })
    await categoriasRepository.save(marca)
    return marca
  }
}

export default CreateCategoriaService
