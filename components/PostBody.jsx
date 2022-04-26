import PostBodyItem from "./PostBodyItem"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import {db} from '../firebase'


export default function PostBody(){
  const [posts,setPosts]=useState()

  const getPosts =()=>{
    const colData =collection(db,'posts')
    // query collection order by timeStamp 
    const q = query(colData,orderBy("timeStamp","desc"))
    // realtime get collection data
    onSnapshot(q,(snapshot)=>{
      let post=[]
      snapshot.docs.forEach(doc=>{
        post.push({...doc.data(),id:doc.id})
      })
      setPosts(post)
    })
  }
  getPosts()
  return (
    <div className="w-full mt-10 mb-10 flex flex-col items-center justify-center gap-5">
        {posts && posts.map(({id,name,email,post,image,imagePost,timeStamp})=>(
          <PostBodyItem key={id}
            name={name}
            email={email}
            post={post}
            userImage={image}
            imagePost={imagePost}
            timeStamp={timeStamp}
          />
        ))}
    </div>
  )
}



