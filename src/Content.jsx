import { useState, useEffect } from "react"
import axios from "axios"
import { PostsIndex } from "./PostIndex"


export function Content() {
  const [posts, setPosts] = useState([])


  const handleIndexPosts = () => {
    console.log("getting the posts");
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
      
    })
  }
  useEffect(handleIndexPosts, [])

  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts}/>
    </main>
  )
}