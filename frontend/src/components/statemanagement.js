import React, { useState } from 'react'

const Statemanagement = () => {
    const [name, setName] = useState('ramesh')
    const handleChange = () => {
        setName('Dinesh')
    }
  return (
    <>

    <div className='max-w-[600px] mx-auto bg-slate-300 rounded'>
        <div>{name}</div>
      

    </div>
    <div className='bg-red-200 rounded-full text-center my-4'>
    <button 
      type='submit'
      onClick={handleChange} >
        click
      </button>
    </div>
    
    
    
    </>
  )
}

export default Statemanagement