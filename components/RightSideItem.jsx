import Image from "next/image"
import {useSession} from 'next-auth/react'

const RightSideItem = () => {
    const {data:session}=useSession()
  return (
    <div className="flex gap-3 w-full p-1 pl-3 items-center rounded-md cursor-pointer hover:bg-gray-200">
        <span className="flex items-center justify-center relative">
            <Image 
                src={session.user.image}
                width={40} height={40} 
                className='rounded-full border-2 border-blue-500'
            />
            <span className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0"></span>
        </span>
        <p>{session.user.name}</p>
    </div>
  )
}

export default RightSideItem