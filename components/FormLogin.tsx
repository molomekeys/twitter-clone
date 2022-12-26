export const FormLogin = () => {
  return (
    <>
    
    <form className=" flex flex-col gap-5 w-80 border-2 border-slate-300 p-2">
    <label>Email :</label>
        <input placeholder="mail" className="p-2 border-2 border-slate-300"/>
        <label>Passeword :</label>
        <input placeholder="password" className="p-2 border-2 border-slate-300"/>
       
       <button className="m-10 bg-blue-500 text-white py-2 ">Login In </button>
    </form>
    </>
  )
}