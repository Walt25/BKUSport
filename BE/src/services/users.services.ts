import { TokenType, UserVerifyStatus } from '~/constants/enum'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'
import { signToken } from '~/utils/jwt'
import RefreshToken from '~/models/schemas/RefreshToken.schema'

class UsersService {
  private signAccessToken({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    return signToken({
      payload: { user_id, verify, token_type: TokenType.AccessToken },
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    })
  }
  private signRefreshToken({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    return signToken({
      payload: { user_id, verify, token_type: TokenType.RefeshToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    })
  }

  private signAccessAndRefreshToken({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    return Promise.all([this.signAccessToken({ user_id, verify }), this.signRefreshToken({ user_id, verify })])
  }

  async login({ user_id, verify }: { user_id: string; verify: UserVerifyStatus }) {
    const [access_token, refresh_token] = await this.signAccessAndRefreshToken({
      user_id: user_id.toString(),
      verify: verify
    })
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ user_id: new ObjectId(user_id), token: refresh_token })
    )
    return {
      access_token,
      refresh_token
    }
  }
}

const usersService = new UsersService()
export default usersService
