import { Router } from 'express'

import IndexMarcasService from '../services/IndexMarcasService'
import CreateCategoriaService from '../services/CreateCategoriaService'

const marcasRoutes = Router()

marcasRoutes.get('/', async (req, res) => {
  try {
    const indexService = new IndexMarcasService()
    const marcas = await indexService.execute()
    return res.json(marcas)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

marcasRoutes.post('/', async (req, res) => {
  try {
    const { nome, descricao } = req.body
    const createService = new CreateCategoriaService()
    const marca = await createService.execute({ nome, descricao })
    return res.json(marca)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default marcasRoutes
