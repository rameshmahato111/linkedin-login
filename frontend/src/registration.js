

import React, { useState } from 'react'

import { TypeAnimation } from 'react-type-animation';
const Registration = () => {
    const [user, SetUser] = useState({
        name: "",
        email: "",
        Tnc: "accepted",
        address: "",
        message:""



    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)

    }
    const handleChange = (e) => {
        SetUser({ ...user, [e.target.name]: e.target.value })
    }



    return (
        <>


            <div className='text-center text-3xl text-[#70543e] font-serif capitalize py-3 my-5 my-9'>
                let&apos;s join Tharu Community Today
                <div className='my-3'>
                    <span style={{ fontSize: '1em' }}>
                        <span></span>{' '}
                        <span></span>
                        <TypeAnimation
                            sequence={[
                                'To Support US',
                                5000,
                                'To Protect Our Culture',
                                1000,
                                'Protect Our Society',
                                1000,
                                'Community Development',
                                1000,
                            ]}
                            repeat={Infinity}
                        />
                    </span>
                </div>

            </div>
            <div className='mx-3'>
                <div className='max-w-[600px] mx-auto my-4 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <form className='px-4' onSubmit={handleSubmit}>
                        <div className='text-md font-serif '>
                            <label>Name</label>
                            <input type="text" name='name' placeholder='Full Name' className='w-full border-2 rounded-lg p-3 flex border-gray-300 '
                                value={user.name} onChange={handleChange} required />
                        </div>
                        <div className='text-md font-serif ' >
                            <label>Email</label>
                            <input type="email" name='email' placeholder='Email' className='w-full border-2 rounded-lg p-3 flex border-gray-300 '
                                value={user.email} onChange={handleChange} required />
                        </div>
                        <div >
                            <label className='text-md font-serif '>Address</label>
                            <input type="text" name='address' placeholder='Address' className='w-full border-2 rounded-lg p-3 flex border-gray-300 '
                                value={user.address} onChange={handleChange} required />
                        </div>
                        <div className='my-4'>


                            <input type='checkbox' value={user.Tnc} onChange={handleChange} />
                            <a href='/termsheet' className='pl-3 ' >terms and conditions</a>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea
                                className='border-2 rounded-lg p-3 border-gray-300'
                                rows='10'
                                name='message'
                                value={user.message}
                                onChange={handleChange}


                            >

                            </textarea>
                        </div>

                        <button type='submit' className='w-full p-4 text-gray-600 my-4 rounded-full bg-[#00acee] text-white mx-auto font-serif text-xl capitalize'>send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration



