import Image from "next/image";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { register } from "@/Api/user";

export default function SignUp() {

    const router = useRouter()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await register(username, email, password, confPass, 'user')
            if (response) {
                if (response.data.result.role === 'user') {
                    router.push(`/verification/${response.data.result.user_id}`)
                }
                else router.push('/admin')
            }
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="w-[30vw] mx-auto">
                <div className="flex px-5 py-8 flex-col items-start pb-4 bg-white">
                    <span className="text-2xl font-semibold">Sign Up</span>
                    <span className="text-sm pt-2">Fill out the form to create a new account.</span>
                </div>
                <div className="bg-white w-full divide-y divide-gray-200">
                    <form className="px-5 py-7" onSubmit={handleSubmit}>

                        <div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                            <input type="text" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="email" className={`${error && 'border-red-500'} outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full`} onChange={(e) => setEmail(e.target.value)}/>
                        
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input type="password" className="border outline-none rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  onChange={(e) => setPassword(e.target.value)}/>

                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                        <input type="password" className="border outline-none rounded-lg px-3 py-2 mt-1 text-sm w-full"  onChange={(e) => setConfPass(e.target.value)}/>

                        <div className={`text-sm ${error ? 'opacity-1' : 'opacity-0'} text-red-500 mt-3`}>* This email is used in another account.</div>


                        <button
                            type="submit"
                            className="mt-3 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Sign up</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <div className="px-5 py-4 font-normal text-sm rounded-lg text-gray-500 ring-inset">
                                    <span className="inline-block ml-1">Alredy have an account? <Link href={"/login"} className="text-blue-500">Login</Link></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className="inline-block ml-1">Back to Home</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
