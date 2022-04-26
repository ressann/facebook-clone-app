import {AiOutlinePlus,AiFillCaretDown} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import {CgMenuGridO} from 'react-icons/cg'
import Image from 'next/image'
import { useSession } from 'next-auth/react'



const HeaderRightSide = () => {
  const {data: sesseion } = useSession()

  return (
    <ul className='hidden sm:flex items-center gap-1'>
      <li className='lg:flex hidden items-center gap-1 p-[2px] pr-1 bg-gray-200 rounded-3xl hover:bg-gray-300 cursor-pointer'>
        <Image
          src={sesseion.user.image}
          width={29} height={29}
          objectFit='contain'
          className=' rounded-full'
        />
        <span className='text-[#1b74e4]'>{sesseion.user.name.split(' ')[0]}</span>
      </li>
      <li className='header-right-icon hidden lg:flex '><CgMenuGridO className='text-xl'/></li>
      <li className='header-right-icon flex lg:hidden'><AiOutlinePlus className='text-xl'/></li>
      <li className='header-right-icon flex '><BsMessenger className='text-xl'/></li>
      <li className='header-right-icon flex '><IoIosNotifications className='text-xl'/></li>
      <li className='header-right-icon flex '><AiFillCaretDown className='text-xl'/></li>
    </ul>
  )
}

export default HeaderRightSide