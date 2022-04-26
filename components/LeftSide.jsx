import LeftSideItem from "./LeftSideItem"
import {FaUserFriends} from 'react-icons/fa'
import {MdGroups,MdOutlineOndemandVideo} from 'react-icons/md'
import {BsShop,BsFillClockFill} from 'react-icons/bs'
import Image from "next/image"
import {BiChevronDown} from 'react-icons/bi'
import { useSession } from "next-auth/react"


const LeftSide = () => {

  const {data:session}= useSession()

  return (
    <div className="hidden xl:flex flex-none w-80 p-3 h-[calc(100vh_-_56px)]
       sticky top-[56px] flex-col
      "
    >
      <div className="w-full border-b-2 pb-3">
        <div className="flex cursor-pointer items-center gap-5 p-3 w-full rounded-md hover:bg-gray-200">
          <Image
            src={session.user.image} 
            width={35} height={35}
            className='rounded-full'
          />
          <span>{session.user.name}</span>
        </div>
        <LeftSideItem Icon={FaUserFriends} title='Friends'/>
        <LeftSideItem Icon={MdGroups} title='Groups'/>
        <LeftSideItem Icon={BsShop} title='Marketplace'/>
        <LeftSideItem Icon={MdOutlineOndemandVideo} title='Watch'/>
        <LeftSideItem Icon={BsFillClockFill} title='Memories'/>
        <LeftSideItem Icon={BiChevronDown} title='See More'/>
      </div>
      <div className="pt-3">
        <LeftSideItem 
          image={session.user.image}
          title='Another'
        />
      </div>
    </div>
  )
}

export default LeftSide