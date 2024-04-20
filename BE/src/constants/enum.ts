import e from 'express'

export enum UserVerifyStatus {
  Unverified,
  Verified,
  Banned
}

export enum TokenType {
  AccessToken,
  RefeshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}
