import React from 'react'
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai"
import Nav from './nav'

const Footer = () => {
    return (
        <>



            <h4 className='text-center text-white-xl font-serif'>Let's Connect With ME</h4>
            <ul className='flex flex-row  gap-4 mb-4 justify-center mt-5'>
                <li><AiFillTwitterCircle className='text-3xl hover:scale-125 ease-in-out duration-1000 ' /></li>
                <li><AiFillFacebook className='text-3xl hover:scale-125 ease-in-out duration-1000' /></li>
                <li><AiFillInstagram className='text-3xl hover:scale-125 ease-in-out duration-1000' /></li>
                <li> <a href='mailto:rameshchaudhary821@gmail.com'><AiFillMail className='text-3xl hover:scale-125 ease-in-out duration-1000' /></a></li>

            </ul>
           


        </>
    )
}

export default Footer