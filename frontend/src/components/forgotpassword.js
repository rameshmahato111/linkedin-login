import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
const ForgotPassword = () => {
      const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    // const handleChange = (e) => {
    //     setEmail({ [e.target.name]: e.traget.value})
    // }
    return (
        <>
            <div className='mx-4'>
                <div className='max-w-[400px] mx-auto my-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 mt-7 pb-3'>
                    <form  onSubmit={handleSubmit}>  
                    <div className='ml-5'>
                        <h1><strong className='text-3xl '>Forgot Password?</strong></h1>
                        <p className='text-sm'>Reset password in two quick steps</p>
                    </div>

                    <div className='text-center mt-5 mx-3'>

                        <input type='text' name='email' placeholder='Email or Phone ' className='w-full border-2 rounded-lg p-3 flex border-gray-300 ' 
                         
                      onChange={(e) => 
                        setEmail(e.target.email)
                      }
                        
                        />
                    </div>

                    <div className='mt-5 bg-[#0072b1] py-4 rounded-full hover:bg-[#005b8e] mx-3 text-center'>
                        {/* <h2 className='text-center text-white'><strong><button type='reset'>Reset Password</button></strong></h2> */}
                        <button type='submit' className=' text-white font-bold'>Reset Password</button>
                    </div>
                    <div className='text-center m-4'>

                        <Link to='/login' className=' hover:underline hover:bg-slate-200 rounded-full p-2 '>Back</Link>
                    </div>



                    </form>

                </div>
            </div>
        </>
    )
}

export default ForgotPassword