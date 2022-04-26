import {BsFacebook} from 'react-icons/bs'
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className='grid place-items-center h-screen place-content-center gap-10'>
        <BsFacebook className='text-3xl w-52 h-52 text-[#1b74e4]'/>
        <button 
          className='bg-[#1b74e4] text-white p-3 rounded-full'
          onClick={()=>signIn()}
        >Login With Your Facebook Account</button>
    </div>
  )
}

export default Login