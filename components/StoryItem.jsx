import Image from "next/image"


const StoryItem = ({photo,userImage,username}) => {
  return (
    <div 
        className=" w-[107px] shadow-lg group hover:bg-[rgba(0,0,0,0.2)] cursor-pointer  h-[190px] bg-gray-400
            rounded-md relative
        "
    >
        <Image src={photo}
            width={107} height={190} objectFit='contain'
            className=" absolute hover:scale-95"
        />
        <div className="absolute top-3 cursor-pointer left-3 border-4 border-[#1b74e4] rounded-full w-[35px] h-[35px] ">
            <Image src={userImage}
                width={35} height={35}
                className='flex items-center justify-center rounded-full'
            />
            <span className="absolute bottom-0 right-[-5px] rounded-full bg-green-700 w-3 h-3 border-2 border-white"></span>
        </div>
        <div className="absolute bottom-3 w-full text-white text-md flex items-center justify-center">
            <p>{username}</p>
        </div>
    </div>
  )
}

export default StoryItem