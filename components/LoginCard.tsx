import { FormLogin } from "./FormLogin"
import im from '../public/twitter-Home.png'
import Image from "next/image"
const LoginCard = () => {
  return (
  
        <div className=" flex  w-full bg-white justify-around items-center">
            <div className="bg-transparent flex flex-col gap-20">
                <div>
               <Image  className="object-fit-cover"
               src='/twitter-Home.png' width={400} height={400} alt='logo twitter'/>
              </div>
               <hr></hr>
               <div className="flex mt-4 mx-2 py-4 px-2 justify-between  rounded-xl  text-gray-700 gap-2">
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with G</p>
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with F</p>
                    <p className="bg-white border-slate-800 border-2 text-slate-800 rounded-xl p-2 ">Login with A</p>
                </div>
               </div>
               
           
            <div className="flex flex-col text-center gap-20">
                    <h3 className="text-3xl">Welcome again</h3>
                    <FormLogin/>
            </div>
        </div>
   
  )
}
export default LoginCard