import Image from "next/image";
import logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { login, verifyEmail, verifyOTPFogotPass } from "@/Api/user";
import { useCurrentUser } from "@/contexts/userContext";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";


export const getServerSideProps = (async (context) => {
    const id = context.params?.slug?.[0];
    return { props: { id } };
}) satisfies GetServerSideProps<{}>;

export default function Verification({id}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [error, setError] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!id) {
            router.push('/register')
        }
        else {
            try {
                const response = await verifyOTPFogotPass(id, otp, password)
                console.log(id, otp, password)
                if (response.data.status === 'VERIFIED') {
                    router.push('/login')    
                }
                else setError(response.data.message)
            } catch (error) {
                setError("can not send email, please check your network")
            }
        }
        
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md rounded-lg">
                <div className="flex px-5 py-8 flex-col items-start pb-4 bg-white">
                    <span className="text-2xl font-semibold">Check your email, please!</span>
                    <span className="text-sm pt-2">Please enter the 4 digit code sent to your email</span>
                </div>
                <div className="bg-white w-full divide-y divide-gray-200">
                    <form className="px-5 pb-7" onSubmit={handleSubmit}>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">New Password</label>
                        <input type="password" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" onChange={e => setPassword(e.target.value)}/>
                        <label className="font-semibold text-sm text-gray-600 mt-2 pb-1 block">Code</label>
                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" onChange={e => setOtp(e.target.value)}/>
                        
                        <div className={`text-sm ${error !== "" ? 'opacity-1' : 'opacity-0'} text-red-500 mt-3`}>* {error}</div>
                        
                        <button
                            type="submit"
                            className="transition mt-3 duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Verify</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                    <div className="py-5">
                        <div className="px-5 flex flex-row items-center">
                            <FaRegQuestionCircle size={20}/>
                            <span className="pl-3">Didn't receive email? <span className="text-blue-500">Re-send</span></span>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap ">
                            <button 
                                onClick={() => {router.push('/signup')}}
                                className="flex flex-row items-center transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <FaArrowLeft />
                                <span className="inline-block ml-1">Back to Sign up</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
