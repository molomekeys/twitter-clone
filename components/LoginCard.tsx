import { FormLogin } from "./FormLogin"
import im from '../public/twitter-Home.png'
import Image from "next/image"
const LoginCard = () => {
  return (
  
        <div className="   w-full bg-white justify-around items-center grid grid-cols-1 md:grid-cols-2">
            <div className="hidden bg-transparent md:flex flex-col gap-10  items-center">
                <div>
               <Image  className="object-fit-cover"
               src='/twitter-Home.png' width={400} height={400} alt='logo twitter'/>
              </div>
              <h4 className="text-xl font-semibold lg:border-b-2 border-slate-300 w-full text-center pb-2">Twitter Clone</h4>
              
             
               <div className="hidden lg:flex mt-4 mx-2 py-4 px-2 justify-between w-3/5  rounded-xl  text-gray-200 gap-2  text-sm">
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with G</p>
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with F</p>
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with A</p>
                </div>
               </div>
               
           
            <div className="flex flex-col  gap-20 bg-gray-100 w-full h-full items-center justify-center">
                    <h3 className="text-3xl text-black">Welcome again</h3>
                    <FormLogin/>
            </div>
        </div>
   
  )
}
export default LoginCard