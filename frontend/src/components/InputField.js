import {React, useState} from 'react'

const InputField = () => {
    // const [save, setSave] = useState("")
    const handleClick =(val) => {
       console.log(val.target.value)
    }
  return (
   <>
     <div>
        <h1>
          get input fields
        </h1>

        <input type='text' className='w-40 my-10 ml-4 bg-slate-100 outline-none border-gray-100'   />
        <button onClick={handleClick}>save</button>
     </div>
   
   </>
  )
}

export default InputField