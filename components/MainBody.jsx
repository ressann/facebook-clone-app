import AddPost from './AddPost'
import PostBody from './PostBody'
import Story from './Story'

const MainBody = () => {
  return (
    <div className=" flex-auto flex justify-center pt-8 bg-gray-100">
        <div className=" w-4/5 max-w-[690px] flex-col">
          {/* story */}
            <Story/>

          {/* Add Post */}
            <AddPost/>
          
          {/* Post body */}
            <PostBody/>

        </div>
    </div>
  )
}

export default MainBody