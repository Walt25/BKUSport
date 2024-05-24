import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses'
import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
import { Request, Response, NextFunction } from 'express'
import databaseService from '~/services/database.services'
import UserOTPVerification from '~/models/schemas/OTP.schema'
var nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
config()

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string
  }
})

const createSendEmailCommand = ({
  fromAddress,
  toAddresses,
  ccAddresses = [],
  body,
  subject,
  replyToAddresses = []
}: {
  fromAddress: string
  toAddresses: string | string[]
  ccAddresses?: string | string[]
  body: string
  subject: string
  replyToAddresses?: string | string[]
}) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: ccAddresses instanceof Array ? ccAddresses : [ccAddresses],
      ToAddresses: toAddresses instanceof Array ? toAddresses : [toAddresses]
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: body
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: fromAddress,
    ReplyToAddresses: replyToAddresses instanceof Array ? replyToAddresses : [replyToAddresses]
  })
}

const verifyEmailTemplate = fs.readFileSync(path.resolve('src/templates/email-verify.html'), 'utf-8')

const sendVerifyEmail = async (toAddress: string, subject: string, body: string) => {
  const sendEmailCommand = createSendEmailCommand({
    fromAddress: process.env.SES_FROM_ADDRESS as string,
    toAddresses: toAddress,
    body,
    subject
  })

  try {
    return await sesClient.send(sendEmailCommand)
  } catch (e) {
    console.error('Failed to send email.')
    return e
  }
}

export const sendVerifyRegisterEmail = (
  toAddress: string,
  email_verify_token: string,
  template: string = verifyEmailTemplate
) => {
  return sendVerifyEmail(
    toAddress,
    'Verify your email',
    template
      .replace('{{title}}', 'verify your email')
      .replace('{{content}}', 'Click the link below to verify your email address.')
      .replace('{{titleLink}}', 'verify')
      .replace('{{Link}}', `${process.env.CLIENT_URL}/verify-email?token=${email_verify_token}`)
  )
}

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
})

export const sendOTPVerificationEmail = async (email: string, _id: string) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`

    const mailOption = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: 'Verify your email',
      html: `<p>Enter ${otp} in the app to verify your email</p><p>This code exprires in 1 hour</p>`
    }

    const saltround = 10
    const hashedOTP = await bcrypt.hash(otp, saltround)

    await databaseService.otpVerification.insertOne(
      new UserOTPVerification({
        userId: _id,
        otp: hashedOTP,
        createAt: Date.now(),
        exprireAt: Date.now() + 3600000
      })
    )

    await transporter.sendMail(mailOption)
    return {
      status: 'PENDING',
      message: 'Verification OTP email sent',
      data: {
        userId: _id,
        email
      }
    }
  } catch (error: any) {
    return {
      status: 'FALSED',
      message: error.message
    }
  }
}

export const sendOTPForgotPassword = async (email: string, _id: string) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`

    const mailOption = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: 'Your reset password OTP',
      html: `<p>Enter ${otp} in the app to reset your password</p><p>This code exprires in 1 hour</p>`
    }

    const saltround = 10
    const hashedOTP = await bcrypt.hash(otp, saltround)

    await databaseService.otpVerification.insertOne(
      new UserOTPVerification({
        userId: _id,
        otp: hashedOTP,
        createAt: Date.now(),
        exprireAt: Date.now() + 3600000
      })
    )

    await transporter.sendMail(mailOption)
    return {
      status: 'PENDING',
      message: 'Forgot password OTP email sent',
      data: {
        userId: _id,
        email
      }
    }
  } catch (error: any) {
    return {
      status: 'FALSED',
      message: error.message
    }
  }
}
