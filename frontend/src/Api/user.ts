import axios, {AxiosRequestConfig} from "axios"
import { cookies } from "next/headers"

export const login = async (email: string, password: string) => {
    const res = await axios.post(`http://localhost:4000/users/login`, 
        {
            email, password
        }
    )

    return res
}

export const register = async (username: string, email: string, password: string, confirm_password: string, role: string) => {
    try {
        const res = await axios.post(`http://localhost:4000/users/register`, {
            username, email, password, confirm_password, role
        })
        if (res.data.result) {
            return res
        }
    } catch (error) {
        throw new Error("register false")
    }
}

export const verifyEmail = async (userId: string, otp: string) => {
    const res = await axios.post(`http://localhost:4000/users/verifyOTP`, {
        userId, otp
    })
    return res
}