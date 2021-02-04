import { getRepository } from 'typeorm'

import Usuario from '../models/Usuario'

interface IRequest {
  nome: string
  email: string
  senha: string
}

class CreateUsuarioService {
  async execute({ nome, email, senha }: IRequest): Promise<Usuario> {
    const usuariosRepository = getRepository(Usuario)
    const existeUsuario = await usuariosRepository.findOne({ email })
    if (existeUsuario) {
      throw new Error('Usuário já existe')
    }
    const marca = usuariosRepository.create({ nome, email, senha })
    await usuariosRepository.save(marca)
    return marca
  }
}

export default CreateUsuarioService
