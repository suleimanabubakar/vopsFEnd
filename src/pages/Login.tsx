
import { useState } from 'react'
import quote from '../assets/images/quote.png'
import { Spinner } from '../components/universal/Spinner'



export function Login()  {


    var [isLoading,setLoading] = useState(false)


    const handleSubmit = () =>{
        setLoading(!isLoading)
    }


    return  (
        <div className="w-full h-screen flex  justify-center items-center  ">
              
               <div className="w-full lg:w-1/2 flex flex-col  justify-center h-full items-start p-4 lg:p-24">

                <div className="w-full w-2/3 mx-auto items-start ">
                <p className="soraFonts font-bold text-[40px] text-left  mb-12" >Welcome To MCTO.</p>



<div className="w-full    text-left leading-relaxed my-5 ">
   
   <label className="text-medium" >Email / Phone</label> 
    <input name="email"  placeholder="07XX 443 XXX" type="email" className="border-1 bg-transparent text-black font-me placeholder:text-gray-400 border border-gray-200 mt-1 focus:outline-none  py-4 px-5  w-full  mt-4 focus:border-blue-600 focus:ring-" />

   </div>


   <div className="w-full    text-left leading-relaxed my-5 ">
   
   <label className="text-medium" >Password</label> 
    <input name="password" placeholder='Enter Password'   type="email" className="border-1 bg-transparent text-black font-me placeholder:text-gray-400 border  border-gray-200 mt-1 focus:outline-none  py-4 px-5  w-full  mt-4 focus:border-blue-600 focus:ring-" />

   </div>


{
isLoading ?
    <Spinner/>
    :
<button className="w-full bg-bluish text-white py-5 my-4" onClick={handleSubmit}>
    Log In
</button>


}




                </div>

               </div>

               <div className="w-full lg:w-1/2 mr-auto h-full bg-gradient-t-r text-lg bg-bluish  text-white flex items-center">
                    <div className="w-full lg:w-4/5 mx-auto text-left leading-[60px]">

                            <div className="w-16 h-16 rounded-full bg-greenish -ml-8 flex justify-center items-center soraFonts">
                                    <img src={quote} alt="" />
                            </div>

                            <div className="w-full border-l-2 border-gray-50 border-opacity-25  py-[80px]">
                            <p className="text-[70px] soraFonts -ml-5 ">
                            Investing in <br />  delivering greatest  <br /> customer value.
                            </p>
                            </div>
                    </div> 
               </div>

        </div>
    )

}