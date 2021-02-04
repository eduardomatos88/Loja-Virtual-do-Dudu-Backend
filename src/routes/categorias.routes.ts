import { Router } from 'express'

import IndexCategoriaService from '../services/IndexCategoriasService'
import CreateCategoriaService from '../services/CreateCategoriaService'

const categoriasRoutes = Router()

categoriasRoutes.get('/', async (req, res) => {
  try {
    const indexService = new IndexCategoriaService()
    const categorias = await indexService.execute()
    return res.json(categorias)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

categoriasRoutes.post('/', async (req, res) => {
  try {
    const { nome, descricao } = req.body
    const createService = new CreateCategoriaService()
    const categoria = await createService.execute({ nome, descricao })
    return res.json(categoria)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default categoriasRoutes
