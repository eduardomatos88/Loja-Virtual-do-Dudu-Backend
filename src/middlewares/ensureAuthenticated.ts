import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

interface ITokenPayload {
  sub: string
}

function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new Error('JWT token incorreto')
  }
  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded as ITokenPayload

    req.usuario = { id: sub }

    return next()
  } catch {
    throw new Error('JWT token incorreto')
  }
}

export default ensureAuthenticated
