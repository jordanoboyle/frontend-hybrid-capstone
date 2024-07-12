import { useState, useEffect } from "react"
import axios from "axios"
import { PostsIndex } from "./PostIndex"
import { Modal } from "./Modal"


export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({})


  const handleIndexPosts = () => {
    console.log("getting the posts");
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the posts!", error);
    });
  }

  const handleCloseModal = () => {
    console.log("closing modal");
    setIsPostShowVisible(false)
  }
  const handleShowSinglePost = (bike) => {
    console.log("showing single post through modal");
    setIsPostShowVisible(true);
  }

  useEffect(handleIndexPosts, [])

  return (
    <main>
      <h1>The Platonic Platypus</h1>
      <PostsIndex posts={posts} onShowPost={handleShowSinglePost}/>
      <Modal show={isPostShowVisible} onClose={handleCloseModal}>
      Think about this like html content
      
      </Modal>
    </main>
  )
}