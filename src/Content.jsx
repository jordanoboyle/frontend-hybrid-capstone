import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { PostsIndex } from "./PostIndex"
import { PostShow } from "./PostShow"
import { PostNew } from "./PostNew"
import { PostUpdate } from "./PostUpdate"
import { FAQIndex } from "./FAQIndex"
import { Signup } from "./SignUp"
import { Login } from "./Login"
import { LogoutLink } from "./LogoutLink"
import { UserProfile } from "./UserProfile"
import { ModalPost } from "./ModalPost"
import { ModalPostUpdate } from "./ModalPostUpdate"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext"



export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [isPostUpdateVisible, setIsPostUpdateVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({})
  const [faqs, setFaqs] = useState([])
  const [systemData, setSystemData] = useState([])
  const [genreData, setGenreData] = useState([])

  //User Data via UserContext and useContext hook
  const {currentUser} = useContext(UserContext)
  
  console.log(currentUser)
  //## Posts Related
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
  //Delete Blog Post
  const handleDeletePost = (post_id) => {
    console.log("receiving delete request");
    axios.delete(`http://localhost:3000/posts/14.json`).then(response => {
      console.log(response.data);
      setPosts(posts.filter((post) => post.id !== post_id));
      handleClosePostUpdateModal();
    })
  }

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
    setIsPostUpdateVisible(false);
  }
  
  //##FAQ Related
  const handleIndexFAQs = () => {
    console.log("getting the FAQs");
    axios.get("http://localhost:3000/faqs.json").then(response => {
      console.log(response.data);
      setFaqs(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the faqs!", error);
    });
  }
  console.log("This is FAQ Data", faqs)
  


  //Build system data request here (prop pass)
  const getSystemData = () => {
    console.log("getting System data");
    axios.get("http://localhost:3000/systems.json")
    .then(response => {
      console.log(response.data)
      setSystemData(response.data)
    })
    .catch(error => {
      console.error("There was an error retrieving Systems data", error)
    })
  }
  // console.log("System Data Verification", systemData)

  //Build genre data request here (prop pass)
  const getGenreData = () => {
    console.log("getting genre data");
    axios.get("http://localhost:3000/genres.json")
    .then(response => {
      console.log(response.data);
      setGenreData(response.data);
    })
    .catch(error => {
      console.error("There was an error retrieving Genres data", error)
    })
  }
  // console.log("Genre Data Verification", genreData)


  
  useEffect(handleIndexPosts, []);
  useEffect(getSystemData, []);
  useEffect(getGenreData, []);
  useEffect(handleIndexFAQs, [])
 


  return (
    <main>
        <h1>The Platonic Platypus</h1>
        <a href="/post/new">NewPost</a> | <a href="/postIndex">Blog Index</a> |  <a href="/indexFaqs">FAQ Index</a>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostNew />} />
        <Route path="/postIndex" element={
          <PostsIndex posts={posts} 
          onShowPost={handleShowSinglePost} 
          onShowUpdatePost={handleShowPostUpdateModal}/> 
          } />
        <Route path="/indexFaqs" element={<FAQIndex faqs={faqs}/>} />
        <Route path="/UserProfile" element={<UserProfile user={currentUser}/>} />
        
      </Routes>
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