import { useState,useRef } from "react"
export const FormLogin = () => {
    const [loginInput,setLoginInput]=useState({email:'',passeword:''})
    const loginRef=useRef(null);
    const passeworldRef=useRef(null);
    const handleLogin=(e:any)=>{
        e.preventDefault();
        setLoginInput({email:loginRef.current?.value,passeword:passeworldRef.current?.value})
    }
    console.log(loginInput);

  return (
    <>
    
    <form className=" flex flex-col gap-5 w-4/5 border-2 border-slate-300 p-5">
    <label>Email :</label>
        <input placeholder="mail" ref={loginRef}
        
        className="p-2 border-2 border-slate-300"/>
        <label>Passeword :</label>
        <input ref={passeworldRef} type='password'
        placeholder="password" className="p-2 border-2 border-slate-300"/>
       
       <button onClick={handleLogin}
       className="m-10 bg-blue-500 text-white py-2 ">Login In </button>
    </form>
    </>
  )
}