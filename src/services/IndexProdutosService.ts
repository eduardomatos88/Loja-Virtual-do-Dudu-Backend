import { getRepository } from 'typeorm'

import Produto from '../models/Produto'

class IndexProdutosService {
  async execute(): Promise<Produto[]> {
    const produtosRepository = getRepository(Produto)
    const produtos = await produtosRepository.find({
      relations: ['marca', 'categoria'],
    })
    return produtos
  }
}

export default IndexProdutosService
