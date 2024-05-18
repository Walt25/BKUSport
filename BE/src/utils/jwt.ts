import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import { TokenPayload } from '~/models/requests/User.requests'
config()
export const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) reject(error)
      resolve(token as string)
    })
  })
}

export const verifyToken = (
  token: string,
  secretOrPublicKey?: string
) => {
  const secretKey = secretOrPublicKey || process.env.JWT_SECRET as string
  // return new Promise<TokenPayload>((resolve, reject) => {
  //   jwt.verify(token, secretKey, (error, decoded) => {
  //     if (error) reject(error)
  //     resolve(decoded as TokenPayload)
  //   })
  // })

  return jwt.verify(token, secretKey) as jwt.JwtPayload
}
