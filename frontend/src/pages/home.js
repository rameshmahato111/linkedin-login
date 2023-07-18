import React from 'react'

import tharu1 from "../assets/fashion.jpg"
import tharu2 from "../assets/fashion1.jpg"
import tharu3 from "../assets/glass-woman.jpg"
import earbuds from "../assets/headphones_a_4.webp"



// import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai"
import Card from '../components/card'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    
  }

    ;


  return (


    <>

      <div className='max-w-[1200px] mx-auto mt-4 mb-9'>

        <Slider {...settings}>
          <div>
            <img src={tharu1} alt='img ' className='object-full w-full h-full'/>
          </div>
          <div>
            <img src={tharu2} alt='img' className='object-full w-full h-full' />
          </div>
          <div>
            <img src={tharu3} alt='img'  className='object-full w-full h-full' />
          </div>

        </Slider>
      </div>



      <div className='max-w-[1200px] mx-auto bg-black-500 my-5 grid md:grid-cols-2 justify-between gap-5 bg-gray-200'>
            <div className='pl-9 text-3xl font-serif ' > 
                <h1 className='text-yellow-500 mt-4'>Over-Ears HeadPhones.</h1>
                <p className='text-center my-3'> $999 </p>
                <h1 >experience media like never before</h1>

              <button type='button' className='mt-3 text-center bg-yellow-500 mx-4 px-3 rounded text-white'><Link to='/card'>Buy Now</Link></button>
            
                

                
            </div>

            <div className=''>
                <img src={earbuds} alt="headphones" className='object-fill h-80  w-90 full mr-9 pr-9'/>
            </div>


        </div>

      <div className=' flex gap-6 justify-center my-5 '>
        <h4>Electronic  products</h4>
        <Link to='/card'><h4>Show more</h4></Link>

      </div>

      <Card />




    </>
  )
}



export default Home