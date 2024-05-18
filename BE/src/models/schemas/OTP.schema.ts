// import mongoose from "mongoose";

// const UserOTPverifycationSchema = new mongoose.Schema({
//     userId: String,
//     otp: String,
//     createAt: Date,
//     exprireAt: Date
// })

// export const UserOTPverification = mongoose.model('UserOPTVerification', UserOTPverifycationSchema)


interface UserOTPVerificationType {
    userId: string,
    otp: string,
    createAt: number,
    exprireAt: number
}

export default class UserOTPVerification {
    userId: string  
    otp: string
    createAt: number
    exprireAt: number
    constructor (userOTPVerification: UserOTPVerificationType) {
        this.userId = userOTPVerification.userId,
        this.otp = userOTPVerification.otp,
        this.createAt = userOTPVerification.createAt || Date.now(),
        this.exprireAt = userOTPVerification.exprireAt || Date.now()
    }
}