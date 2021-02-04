import { Router } from 'express'

import CreateUsuarioService from '../services/CreateUsuarioService'

const usuariosRoutes = Router()

// usuariosRoutes.get('/', async (req, res) => {
//   try {
//     const indexService = new IndexProdutosService()
//     const marca = await indexService.execute()
//     return res.json(marca)
//   } catch (error) {
//     return res.status(400).json({ error: error.message })
//   }
// })

usuariosRoutes.post('/', async (req, res) => {
  try {
    const { nome, email, senha } = req.body
    const createService = new CreateUsuarioService()
    const usuario = await createService.execute({ nome, email, senha })
    return res.json(usuario)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default usuariosRoutes
