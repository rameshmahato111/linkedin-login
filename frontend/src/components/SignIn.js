import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle } from "react-icons/fc"

const SignIn = () => {
    const [register, setRegister] = useState({
        email: "",
        password: ""
    })
  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(register)
      
    }

    const handleChange= (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    }
    return (
        <>

            <div className='text-center my-5'>
                <h3 className='text-3xl'>Make the most of your professional life</h3>
            </div>
            <div className='max-w-[400px] mx-auto my-4 w-full h-auto shadow-xl shadow-gray-400 p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='text-gray-500 '>Email</label>
                        <input type='email' name='email' className='w-full border-2 border-black-400 rounded py-1' required 
                        value={register.email}
                        onChange={handleChange}/>
                    </div>

                    <div >
                        <label className='text-gray-500'>Password<span> (6 or more characters)</span></label>
                        <input type='password' name='password' className='w-full border-2 border-black-400 rounded py-1' required 
                        value={register.password}
                        onChange={handleChange}/>

                    </div>

                    <div className='my-4 mx-2'>
                        <p className='text-xs'>By clicking Agree & join, you agree to the LinkedIn <Link to='/login' className='text-[#0072b1] hover:underline'><strong>User Agreement</strong></Link>, <Link to='/login' className='text-[#0072b1] hover:underline'><strong>Privacy Policy</strong></Link>, and <Link to='/login' className='text-[#0072b1] hover:underline'><strong>Cookie Policy</strong></Link></p>
                    </div>

                    <div className='text-center bg-[#0072b1] py-3 rounded-full'>
                        <button type='submit' className='text-white'><strong>Agree<span> & </span> Join</strong></button>
                    </div>

                </form>

                <hr  className='mt-3 decoration-black'/> 
                <p className='text-center'>or</p>


                <div className='mt-3  py-5 border-2 border-black-900 rounded-full mx-3'>
                   <a href='https://www.google.com'><div className='text-center flex justify-center gap-5'> <FcGoogle  className='text-2xl' />Sign in with Google</div></a>
                </div>

                <div className='text-center my-4'>
                    <p>Already on LinkedIn?<Link to='/login'><span className='text-[#0072b1] hover:underline'><strong> Sign in</strong> </span></Link></p>
                </div>


            </div>


        </>
    )
}

export default SignIn