import { compare } from 'bcryptjs'
import { getRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'

import authConfig from '../config/auth'
import Usuario from '../models/Usuario'

interface IRequest {
  email: string
  senha: string
}
interface IResponse {
  usuario: Usuario
  token: string
}

class AuthenticateUsuarioService {
  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usuariosRepository = getRepository(Usuario)
    const usuario = await usuariosRepository.findOne({ where: { email } })

    if (!usuario) {
      throw new Error('Usuário ou senha incorretos')
    }

    const senhaMatched = await compare(senha, usuario.senha || '')

    if (!senhaMatched) {
      throw new Error('Usuário ou senha incorretos')
    }

    delete usuario.senha
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: usuario.id,
      expiresIn,
    })

    return { usuario, token }
  }
}

export default AuthenticateUsuarioService
