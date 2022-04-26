import StoryItem from "./StoryItem"
import Image from "next/dist/client/image"
import {AiOutlinePlus} from 'react-icons/ai'
import { useSession } from "next-auth/react"

const Story = () => {
  const {data: session}=useSession()

  const image = session.user.image

  return (
    <div className="flex gap-2 justify-center">
      <div className="w-[107px] h-[190px] min-w-[107px] min-h-[190px] rounded-md shadow-lg relative">
        <Image src={image}
          width={107} height={140} objectFit='cover'
          className=" rounded-t-md hover:scale-110"
        />
        <div className="absolute bottom-[35px] flex items-center justify-center w-full">
          <span className=" w-10 h-10 cursor-pointer bg-[#1b74e4] border-4 rounded-full
            flex items-center justify-center
          "
          ><AiOutlinePlus className="text-white text-xl"/></span>
        </div>
        <div className="w-full h-full">
          <p className=" text-center w-full pt-3">Create Story</p>
        </div>
      </div>

        <StoryItem userImage={image} photo={image} username={'Ressann La'}/>
        <StoryItem userImage={image} photo={image} username={'Ressann La'}/>
        <StoryItem userImage={image} photo={image} username={'Ressann La'}/>
        <StoryItem userImage={image} photo={image} username={'Ressann La'}/>
        <StoryItem userImage={image} photo={image} username={'Ressann La'}/>

    </div>
  )
}

export default Story