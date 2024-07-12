import { useState, useEffect } from "react"
import axios from "axios"
import { PostsIndex } from "./PostIndex"
import { PostShow } from "./PostShow"
import { PostNew } from "./PostNew"
import { PostUpdate } from "./PostUpdate"
import { ModalPost } from "./ModalPost"
import { ModalPostUpdate } from "./ModalPostUpdate"


export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [isPostUpdateVisible, setIsPostUpdateVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({})
  const [systemData, setSystemData] = useState([])
  const [genreData, setGenreData] = useState([])
  


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
  const handleDeletePost = () => {
    console.log("receiving delete request")
  }
  
  const handleCreateNewPost = (theParams, successCallback) => {
    console.log("creating new post");
    axios.post("http://localhost:3000/posts.json", theParams)
    .then(response => {
      console.log(response.data);
      setPosts([...posts, response.data]); //resets the state with the new post
      successCallback()
    })
    .catch(error => {
      console.error("There was an error in creating article", error)
    })
  }
  //Build system data request here (prop pass)

  //Build genre data request here (prop pass)

  //PostShow Modal read article
  const handleClosePostShowModal = () => {
    console.log("closing modal");
    setIsPostShowVisible(false)
  }
  const handleShowSinglePost = (post) => {
    console.log("showing single post through modal");
    setIsPostShowVisible(true);
    setCurrentPost(post);
  }
  
  //PostUpdate Modal form to update article
  const handleShowPostUpdateModal = (post) => {
    console.log("opening Post Update modal");
    setIsPostUpdateVisible(true);
    setCurrentPost(post);
  }
  const handleClosePostUpdateModal = () => {
    setIsPostUpdateVisible(false)
  }
  useEffect(handleIndexPosts, [])


  return (
    <main>
      <PostNew onCreateNewPost={handleCreateNewPost}/>
      <h1>The Platonic Platypus</h1>
      <PostsIndex posts={posts} 
      onShowPost={handleShowSinglePost} 
      onShowUpdatePost={handleShowPostUpdateModal}/>
      <ModalPost show={isPostShowVisible} onClose={handleClosePostShowModal}>
      Think about this like html content
        <PostShow post={currentPost}/>
      </ModalPost>
      <ModalPostUpdate show={isPostUpdateVisible} onClose={handleClosePostUpdateModal}>
        <PostUpdate post={currentPost} onPostDelete={handleDeletePost}/>
      </ModalPostUpdate>
    </main>
  )
}