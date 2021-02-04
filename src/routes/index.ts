import { Router } from 'express'

import categoriasRoutes from './categorias.routes'
import marcasRoutes from './marcas.routes'
import produtosRoutes from './produtos.routes'
import usuariosRoutes from './usuarios.routes'

const routes = Router()

routes.use('/marcas', marcasRoutes)
routes.use('/categorias', categoriasRoutes)
routes.use('/produtos', produtosRoutes)
routes.use('/usuarios', usuariosRoutes)

export default routes
