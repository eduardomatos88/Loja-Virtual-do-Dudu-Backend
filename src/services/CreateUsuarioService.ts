import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

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
      throw new Error('Email já cadastrado')
    }
    const hashedSenha = await hash(senha, 10)
    const usuario = usuariosRepository.create({
      nome,
      email,
      senha: hashedSenha,
    })
    await usuariosRepository.save(usuario)
    delete usuario.senha
    return usuario
  }
}

export default CreateUsuarioService
