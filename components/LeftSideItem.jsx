import Image from "next/dist/client/image"

const LeftSideItem = ({Icon,title,image}) => {
  return (
    <div className="flex cursor-pointer hover:bg-gray-200 w-full gap-5 rounded-md items-center p-3">
        {image ?
         <Image src={image}
            width={35} height={35}
            className='rounded-full'
         /> 
        : <Icon className='text-xl text-[#1b74e4]'/>}
        <span>{title}</span>
    </div>
  )
}

export default LeftSideItem