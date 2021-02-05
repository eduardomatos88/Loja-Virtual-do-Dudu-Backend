import { getRepository } from 'typeorm'

import Produto from '../models/Produto'

interface IRequest {
  nome: string
  descricao: string
  valor: number
  marca_id: string
  categoria_id: string
  numero_estoque: number
  local_saida: string
  quantidade_fotos: number
}

class CreateProdutoService {
  async execute({
    nome,
    descricao,
    valor,
    marca_id,
    categoria_id,
    numero_estoque,
    local_saida,
    quantidade_fotos,
  }: IRequest): Promise<Produto> {
    const produtoRepository = getRepository(Produto)
    const existeProduto = await produtoRepository.findOne({
      nome,
      marca_id,
      categoria_id,
    })
    if (existeProduto) {
      throw new Error('Produto já existe')
    }
    const produto = produtoRepository.create({
      nome,
      descricao,
      valor,
      marca_id,
      categoria_id,
      numero_estoque,
      local_saida,
      quantidade_fotos,
    })
    await produtoRepository.save(produto)
    return produto
  }
}

export default CreateProdutoService
