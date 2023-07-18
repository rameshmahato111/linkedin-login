import React from 'react'
import { Link, useParams, } from 'react-router-dom'
import items from '../Images'
console.log(items)
const CardDetail = () => {

const item = items.find((item) => item.id)
const {name, price, image} = item


  return (
    <>
      <section className='section detail'>
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2  gap-4 shdadow-2xl my-5'>
          <div>
         {name}
         {price}
         <img src={image}  />
         
          </div>
          <div className='text-center font-bold font-mono flex flex-row gap-3'>
            
              
          </div>


        </div>
        <div className='text-center '>

          <button className='bg-yellow-400 rounded text-3xl capitalize text-white mb-4 p-4'><Link to='/card'>back to card</Link></button>


        </div>




      </section>


    </>
  )
}

export default CardDetail