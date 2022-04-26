import Image from 'next/image'
import {RiLiveFill} from 'react-icons/ri'
import {FaPhotoVideo} from 'react-icons/fa'
import {MdSentimentVerySatisfied} from 'react-icons/md'
import { useSession } from 'next-auth/react'
import {useState} from 'react'
import AddPostForm from './AddPostForm'




const AddPost = () => {
    const [showForm,setShowForm]=useState(false)

    const {data:session}=useSession()

    const image =session.user.image

    const showFormAddPost =()=>{
        setShowForm(true)
    }

  return (
    <div className='flex flex-col relative gap-3 mt-10 shadow-[0_1px_4px_0_rgba(0,0,0,0.2)] rounded-lg bg-white'>
        <form className='flex items-center gap-5 ml-5 mr-5 pt-3 border-b-[1px] border-gray-400 pb-3'>
            <Image
                src={image}
                width={40} height={40}
                className='rounded-full cursor-pointer flex-none'
            />
            <input type="text" placeholder={`Whate's on your mind, ${session.user.name.split(' ')[0]}?`}
                onClick={showFormAddPost}
                className='border-none flex-auto hover:bg-gray-200 rounded-3xl bg-gray-100 outline-none  p-2 text-gray-700 pl-5'
            />
        </form>
        <ul className='flex gap-2 items-center pb-3 ml-5 mr-5'>
            <li className='flex items-center cursor-pointer p-2 gap-2 justify-center rounded-lg hover:bg-gray-200 flex-auto'>
                <RiLiveFill className='text-red-500 text-2xl'/>
                <span className='text-gray-500'>Live Video</span>
            </li>
            <li onClick={showFormAddPost} className='flex items-center cursor-pointer p-2 gap-2 justify-center rounded-lg hover:bg-gray-200 flex-auto'>
                <FaPhotoVideo className='text-green-500 text-2xl'/>
                <span className='text-gray-500'>Photo/video</span>
            </li>
            <li className='flex items-center cursor-pointer p-2 gap-2 justify-center rounded-lg hover:bg-gray-200 flex-auto'>
                <MdSentimentVerySatisfied className='text-yellow-500 text-2xl'/>
                <span className='text-gray-500'>Feeling/activity</span>
            </li>
        </ul>

        {/* add post fomr */}
        {showForm == true &&  <AddPostForm showForm={showForm} setShowForm={setShowForm}/>}
    </div>
  )
}

export default AddPost