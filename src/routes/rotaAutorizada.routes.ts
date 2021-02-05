import { Router } from 'express'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const rotaAutorizada = Router()

rotaAutorizada.use(ensureAuthenticated)

rotaAutorizada.get('/', (req, res) => {
  const { id } = req.usuario
  return res.json({ ok: id })
})

export default rotaAutorizada
