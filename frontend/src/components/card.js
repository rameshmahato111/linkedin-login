import React from 'react'


import {Link} from "react-router-dom"
import items from '../Images'

const Card = () => {
    return (
        <>



            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]'>
                {items.map((item ) => {
                    return (
                        <div key={item.id}  >


                            <div className='shadow-2xl my-6 '>

                                <div className='overflow-hidden'>
                                    <img src={item.image} alt={item.name}className='w-full hover:scale-125 ease-in-out duration-1000' />
                                </div>
                                <div className='flex justify-between mx-3 my-4 py-2 font-serif uppercase'>
                                   <Link to={`/card/${item.id}`}><p className='text-center '>{item.name}</p></Link> 
                                    <p className='text-center'>{item.price}</p>
                                </div>


                            </div>

                        </div>
                    )





                })}



            </div>

        </>
    )
}

export default Card