import { Router } from 'express'

import IndexProdutosService from '../services/IndexProdutosService'
import CreateProdutoService from '../services/CreateProdutoService'

const produtosRoutes = Router()

produtosRoutes.get('/', async (req, res) => {
  try {
    const indexService = new IndexProdutosService()
    const produtos = await indexService.execute()
    return res.json(produtos)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

produtosRoutes.post('/', async (req, res) => {
  try {
    const {
      nome,
      descricao,
      valor,
      marca_id,
      categoria_id,
      numero_estoque,
      local_saida,
      quantidade_fotos,
    } = req.body
    const createService = new CreateProdutoService()
    const produto = await createService.execute({
      nome,
      descricao,
      valor,
      marca_id,
      categoria_id,
      numero_estoque,
      local_saida,
      quantidade_fotos,
    })
    return res.json(produto)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default produtosRoutes
