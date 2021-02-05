import { Router } from 'express'

import AuthenticateUsuarioService from '../services/AuthenticateUsuarioService'

const sessionsRoutes = Router()

sessionsRoutes.post('/', async (req, res) => {
  try {
    const { email, senha } = req.body
    const createService = new AuthenticateUsuarioService()
    const usuario = await createService.execute({ email, senha })
    return res.json(usuario)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

export default sessionsRoutes
