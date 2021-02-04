import { getRepository } from 'typeorm'

import Marca from '../models/Marca'

interface IRequest {
  nome: string
  descricao: string
}

class CreateMarcaService {
  async execute({ nome, descricao }: IRequest): Promise<Marca> {
    const marcasRepository = getRepository(Marca)
    const existeMarca = await marcasRepository.findOne({ nome })
    if (existeMarca) {
      throw new Error('Marca já existe')
    }
    const marca = marcasRepository.create({ nome, descricao })
    await marcasRepository.save(marca)
    return marca
  }
}

export default CreateMarcaService
