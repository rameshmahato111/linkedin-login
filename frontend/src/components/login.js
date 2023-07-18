import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
const Login = () => {
    const [createUser, setCreateUser] = useState(
        {
            email:"",
            password:"",
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(createUser)
    }
    const handleChange = (e) => {
        setCreateUser({...createUser, [e.target.name]: e.target.value})

    }
   
    return (
        <> 
        <div className='mx-4 mb-6 '>
            <div className='max-w-[400px] mx-auto my-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl pb-4 lg:p-4'>
                <form  onSubmit={handleSubmit}>
                <div className='text-md mx-3'>

                    <input type='text' name='email' placeholder='Email or Phone ' className='w-full border-2 rounded-lg p-3 flex border-gray-300 '
                  value={createUser.email}
                  onChange={handleChange} 
                   />
                </div>
                <div className='text-md my-3 mx-3'>

                    <input type='password' name='password'  placeholder='password ' className='w-full border-2 rounded-lg p-3 flex border-gray-300 '
                    value={createUser.password}
                    onChange={handleChange} />
                    
                </div>

                <div className='text-md  text-blue-500'>
                    <Link to='/forgot_password'><h4 className='ml-3 font-bold hover:underline'>Forgot password?</h4></Link>
                </div>

                <div className='mt-3 bg-[#0072b1] py-5 rounded-full hover:bg-[#005b8e] mx-3'>
                    <h2 className='text-center text-white'><strong><button type='submit'>Sign in</button></strong></h2>
                </div>
                <div className='mt-3'>
                    <h2 className='text-center'><strong>or</strong></h2>
                </div>

                <div className='mt-3  py-5 border-2 border-black-900 rounded-full mx-3'>
                    <div className='text-center flex justify-center gap-5'> <FcGoogle  className='text-2xl' />Sign in with Google</div>
                </div>
                <div className='mt-3  py-5 border-2 border-black-900 rounded-full mx-3 '>
                    <div className='text-center flex justify-center gap-5 '> <BsApple className='text-2xl' />Sign in with Apple </div>
                </div>


                </form>

            </div>

            <div>
                <h4 className='text-center m-6 '>New to Linkedin? <Link to='/signin' className='text-[#0072b1] hover:bg-blue-200 rounded-full hover:underline  p-2'>Join now</Link></h4>

            
            </div> 
            
            </div>

        </>
    )
}

export default Login