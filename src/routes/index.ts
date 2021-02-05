import { Router } from 'express'

import categoriasRoutes from './categorias.routes'
import marcasRoutes from './marcas.routes'
import produtosRoutes from './produtos.routes'
import sessionsRoutes from './session.routes'
import usuariosRoutes from './usuarios.routes'

import rotaAutorizada from './rotaAutorizada.routes'

const routes = Router()

routes.use('/marcas', marcasRoutes)
routes.use('/categorias', categoriasRoutes)
routes.use('/produtos', produtosRoutes)
routes.use('/usuarios', usuariosRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/rotaautorizada', rotaAutorizada)

export default routes
