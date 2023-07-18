
import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>



         <div className='text-center my-5 font-serif text-indigo-500 text-xl'>Best Selling Products</div> 

        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]'>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className='shadow-2xl my-6 '>

                  <div className='overflow-hidden'>
                    <img src={product.image} alt={product.name} className='w-full hover:scale-125 ease-in-out duration-1000' />
                  </div>
                  <div className='flex justify-between my-4 py-3 mx-4 font-serif'>
                    <p className='text-center'><Link to={`/products/${product.id}`}>show more</Link></p>
                    <p className='text-center'>{product.price}</p>

                  </div>

                </div>


              </div>
            );
          })}
        </div>

 

    </>

  );
};

export default Products;