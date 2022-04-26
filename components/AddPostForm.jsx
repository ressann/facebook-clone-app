import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoMdImages} from 'react-icons/io'
import {useRef,useState} from 'react'

import { db } from '../firebase'
import { collection,addDoc, serverTimestamp,doc,setDoc } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, uploadString } from "firebase/storage";





const AddPostForm = ({showForm,setShowForm}) => {
    const {data:session}=useSession()
    const fileRef=useRef(null)
    const [imagePost,setImagePost]=useState(null)
    const storage = getStorage();
    

    const [post,setPost]=useState("")

    const closeFormAddPost =()=>{
        setShowForm(false)
    }

    // add post 
    const handlePost =(e)=>{
        e.preventDefault()

        if(post==="") return ;

        addDoc(collection(db,'posts'),{
            post:post,
            name:session.user.name,
            email:session.user.email,
            image:session.user.image,
            timeStamp:serverTimestamp()
        }).then((data)=>{
            // Upload file and metadata to the object 'images/mountains.jpg'
            const storageRef = ref(storage, 'images/'+data.id);

            if(imagePost){
                uploadString(storageRef, imagePost, 'data_url').then((snapshot) => {
                    // download url image 
                    getDownloadURL(storageRef).then(url=>{
                        const postRef = doc(db, 'posts', data.id);
                        // add image to posts 
                        setDoc(postRef, { imagePost: url}, { merge: true }); 
                    })                              
                });
                setPost('')
                setImagePost(null)
                setShowForm(false)
                alert('Your Post has been created.')  
            }
        })
       
    }

    // check file image and read the file to imagePost
    const handleAddImage =(e)=>{
        // read file image
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload =(readerEvent)=>{
            setImagePost(readerEvent.target.result)
        }

    }

    // clear image
    const clearImage=()=>{
        setImagePost(null)
    }

  return (
    <div className='absolute bg-blue-400 text-white z-20 w-full p-3 flex flex-col gap-5'>
        <div className='flex justify-center items-center relative border-b-[1px] pb-5 border-gray-400 text-xl '>
            <h2>Create post</h2>
            <AiOutlineCloseCircle 
                onClick={closeFormAddPost}
                className='absolute z-20 right-5 text-3xl cursor-pointer hover:text-gray-200'
            /> 
        </div>
        <div className='flex items-center gap-5'>
            <Image src={session.user.image}
                width={40} height={40} 
                className='rounded-full'
            />
            <span>{session.user.name}</span>
        </div>
        <form className='flex flex-col gap-5'>
            <input type="text" placeholder={"Whate's on your mind,"+session.user.name.split(' ')[0]}
                value={post} onChange={(e)=>setPost(e.target.value)}
                className='mr-5 ml-5 p-2 rounded-md outline-none pl-5 text-gray-500'
            />
            <div className=' border-2 mr-5 ml-5 relative h-80 rounded-md p-3'>
                <img src={imagePost} alt="" 
                    className='w-full h-full rounded-md object-contain'
                />
                <AiOutlineCloseCircle
                    onClick={clearImage}
                    className='absolute z-20 cursor-pointer hover:text-gray-200 top-5 right-5 text-3xl'
                />
                <input onChange={handleAddImage} ref={fileRef} type="file" hidden />
            </div>
            <div className='flex gap-10 items-center ml-5 border-2 mr-5 p-2 rounded-md'>
                <span>Add to your post</span>
                <IoMdImages 
                    onClick={()=>fileRef.current.click()}   
                    className='text-3xl text-green-400 cursor-pointer'
                />
            </div>
            <button className='w-full rounded-md bg-green-500 p-3'
                onClick={handlePost}
            >Post</button>
        </form>
    </div>
  )
}

export default AddPostForm