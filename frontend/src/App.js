import earphone from "./assets/earphones_a_3.webp"
import {AiFillHeart} from "react-icons/ai"
import { useState } from "react";
import earpod from "./assets/earphones_a_3.webp"
function App() {

  const [data, setData] = useState(0)
  
  const update = () => {
    setData(data+ 1)
  }
  return (
    <>
     <div className="max-w-[1200px] mx-auto md:py-6 ">
      <div className="grid lg:grid-cols-3 gap-4k md:grid-cols-4 gap-4">
        <div className="overflow-hidden">
       <h4 className="text-center uppercase text-blue-400 my-4">How we survive ?</h4>
       <img src={earphone} alt="earphone" className="bg-slate-300 shadow-2xl" />
      <div className="text-center text-3xl flex gap-3 mt-6"><h1>{data}</h1>
      <button onClick={update}  className="text-red-500"><AiFillHeart  /></button>
      </div>
       </div>
       <div>
        <p className="mt-[60px] ">
        The Tharu people are an indigenous ethnic group who has lived in the lowlands of Nepal for centuries. As per CBS 2011, the Tharu population of Nepal was censuses at 1,737,470 people. The Terai region was covered by a thick malarial jungle that kept away outsiders and guaranteed the Tharus freedom.
        </p>
       </div>
      </div>

     </div>
    
  
  


    </>
  );
}

export default App;
