// import React, { useState } from 'react'


// const Range = () => {


//     const [count, setCount] = useState(0)
//     const handleSubmit = () => {

//         setCount(count + 1)


//     }

//     const handleClear = () => {
//         setCount(0)
//     }
//   return (
// <>
// <div className='text-center text-3xl'>{count}</div>

// <div className='text-center text-3xl'>
//     <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3'type='button' onClick={handleSubmit}>Add</button>
// </div>
// <div className='text-center text-3xl'>
//     <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"onClick={handleClear}>Clear</button>
// </div>

// </>
//   )
// }

// export default Range


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './contact'
import Registration from './registration'
import SharedLayout from './pages/SharedLayout'
import Products from './components/Products'
import SingleProductPage from './pages/SinlgeProduct.page'
import Card from './components/card'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPassword.page'
import SignInPage from './pages/SignInPage'
import CardDetail from './pages/cardDetail'
import Statemanagement from './components/statemanagement'
import InputField from './components/InputField'
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/contact' element={<Contact />} />


                    <Route path='/registration' element={<Registration />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/forgot_password' element={<ForgotPasswordPage />} />



                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:productId' element={<SingleProductPage />} />
                    <Route path='/card' element={<Card />} />
                    <Route path='/statemanagement' element={<Statemanagement  />} />
                    <Route path='/card/:id' element={<CardDetail />} />
                    <Route path='/input' element={<InputField />} />
                    


                    <Route path='/*' element={<h2 className='text-center text-red-500 m-auto'>url not found</h2>} />

                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default Routing