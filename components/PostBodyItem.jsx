import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {AiFillLike} from 'react-icons/ai'
import {FaCommentAlt,FaShare} from 'react-icons/fa'

const PostBodyItem = ({name,email,imagePost,post,userImage,timeStamp}) => {
    const time =null
    if(timeStamp){
        time = new Date(timeStamp.seconds*1000).toDateString()
    }
  return (
    <div className="w-full shadow-2xl rounded-md bg-white">
        <div className=" flex p-3 gap-5 items-center relative">
            <img src={userImage} alt="" 
                className="w-[40px] h-[40px] rounded-full border-2 border-blue-600"
            />
            <div>
                <p>{name}</p>
                <small>{time && time}</small>
            </div>
            <span className="absolute right-5 w-9 h-9 flex items-center cursor-pointer justify-center rounded-full hover:bg-gray-200">
                <HiOutlineDotsHorizontal 
                    className=' text-xl cursor-pointer'
                />
            </span>
        </div>
        <div className="ml-5 w-full p-3">
            <p>{post}</p>
        </div>

        {/* check if your post photo or not if post it show */}
        {imagePost && 
            <div className="w-full h-[500px] bg-gray-600">
                <img src={imagePost} alt="" 
                    className="w-full h-full object-contain"
                />
            </div>
        }
        
        <div className="w-full flex gap-2 pl-3 pr-3 justify-around mt-5 pb-2 border-t-[1px] border-gray-300 pt-2">
            <div className="btn-like">
                <AiFillLike/>
                <p>Like</p>
            </div>
            <div className="btn-comment">
                <FaCommentAlt/>
                <p>Comment</p>
            </div>
            <div className="btn-share">
                <FaShare/>
                <p>Share</p>
            </div>
        </div>
    </div>
  )
}

export default PostBodyItem