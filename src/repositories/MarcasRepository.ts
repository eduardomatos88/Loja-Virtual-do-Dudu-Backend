import { EntityRepository, Repository } from 'typeorm'

import Marca from '../models/Marca'

@EntityRepository(Marca)
class MarcasRepository extends Repository<Marca> {}

export default MarcasRepository
