import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import '../Fonts/Font.css'
import SEO from './SEO';

export default function Auth() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const [currState, setCurrState] = useState("Login")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: currState === "Sign Up" ? formData.name : "User",
            email: formData.email,
            password: formData.password
        }
        login(userData);
        navigate("/")
    }

    const inputStyle = "w-full bg-transparent  border border-white/30 p-3 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-400"

    return (
        <div className="relative flex justify-center items-center h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/heropage.png')" }}>
            <SEO
                title={`${currState} | CryptoChain`}
                description="Login or create an account on CryptoChain to track cryptocurrency prices, manage your portfolio, and explore crypto market insights."
            />

            <div className='absolute inset-0 bg-black/60 backdrop-blur-sm'></div>
            <form onSubmit={handleSubmit} className='relative z-10 md:w-112.5 md:py-8 md:px-10 p-5 w-auto rounded-2xl bg-white/10 border border-white/20 shadow-2xl text-white'>

                <h1 className='mb-2  text-3xl text-center font-bold oswald'>{currState}</h1>
                <p className='text-center text-sm text-gray-300  mb-6 play-written'>
                    Access your personalized crypto experience
                </p>
                <div className='flex flex-col gap-4'>
                    {
                        currState === "Sign Up" && (
                            <input type="text" placeholder='Your Name' className={inputStyle} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        )
                    }
                    <input type="email" placeholder='Your Email' className={inputStyle} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    <input type="password" placeholder='Enter Password' className={inputStyle} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                </div>
                <button type='submit'
                    className='bg-linear-to-r from-amber-400 to-orange-500 mt-6 cursor-pointer text-lg font-bold w-full my-3 py-3 transition-transform duration-200 rounded-md active:scale-80'>
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                <div className='flex gap-2 text-[#8AA1AF]  items-center  text-xs mt-4'>
                    <input type="checkbox" required className='mt-1 accent-amber-400 cursor-pointer' />
                    <p className='play-written'>By Continuing, I agree to the {" "}
                        <span className='text-amber-400 cursor-pointer'>Terms of Use</span>{" "}
                        & {" "} <span className='text-amber-400 cursor-pointer'>Privacy Policy</span>
                    </p>
                </div>

                <div className='text-center mt-6 text-sm text-[#8AA1AF]'>
                    {
                        currState === "Login" ? (
                            <>
                                New here? {""}
                                <span className='text-amber-400 cursor-pointer font-medium' onClick={() => setCurrState("Sign Up")}>Create an Account</span>
                            </>
                        ) : (
                            <>
                                Already have an Account? {" "}
                                <span className='text-amber-400 cursor-pointer font-medium' onClick={() => setCurrState("Login")}>Login</span>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    )
} 
