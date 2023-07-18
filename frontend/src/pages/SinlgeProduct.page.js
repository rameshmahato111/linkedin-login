import { Link, useParams } from 'react-router-dom';
import products from '../data';
import {GiBuyCard} from "react-icons/gi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiArrowBack} from "react-icons/bi"
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);           
  const { image, name, description } = product;
 
  return (
    <section className='section product'>
      <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2  gap-4 shdadow-2xl my-5'>
        <div>
          <img src={image} alt={name} className='shadow-2xl bg-grey-400'/>

          <div className='flex gap-4 my-4 font-serif justify-between text-white'>
            <button><p className='bg-yellow-400 rounded py-5 px-6 flex gap-3 ml-3' > <GiBuyCard  />BUY NOW</p> </button>
            <button><p className='bg-yellow-600 rounded py-5 px-6 flex gap-3 mr-3' > <AiOutlineShoppingCart />ADD TO CART</p> </button>

            
          </div>
        </div>
      
        <div>
          <h5 className='text-center  uppercase font-serif'>{name}</h5>
           <p className='ml-3'>{description}</p>
          </div>

      
      </div>
      <div className='text-center '>

      <button className='bg-yellow-400 rounded text-3xl capitalize text-white mb-4 p-4'><Link to='/products'> <BiArrowBack  className='text-3xl mx-auto'/>back to products</Link></button>


      </div>



     
    </section>
  );
};

export default SingleProduct;