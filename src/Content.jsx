import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { PostsIndex } from "./PostIndex"
import { PostShow } from "./PostShow"
import { PostNew } from "./PostNew"
import { PostUpdate } from "./PostUpdate"
import { FAQIndex } from "./FAQIndex"
import { FAQShow } from "./FAQShow"
import { ReviewIndex } from "./ReviewIndex"
import { ReviewShow } from "./ReviewShow"
import { Signup } from "./SignUp"
import { Login } from "./Login"
import { UserProfile } from "./UserProfile"
import { ModalPost } from "./ModalPost"
import { ModalBasic } from "./ModalBasic"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext"



export function Content() {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState({})
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);

  const [faqs, setFaqs] = useState([])
  const [currentFaq, setCurrentFaq] = useState({})
  const [isFaqShowVisible, setIsFaqShowVisible] = useState(false);

  const [reviews, setReviews] = useState([])
  const [currentReview, setCurrentReview] = useState({})
  const [isReviewShowVisible, setIsReviewShowVisible] = useState(false)

  const [systemData, setSystemData] = useState([])
  const [genreData, setGenreData] = useState([])

  

  //User Data via UserContext and useContext hook
  const {currentUser} = useContext(UserContext)
  // console.log("from CONTENT", currentUser)  //##For DEV TESTING ONLY

  //## Posts Related
  const handleIndexPosts = () => {
    console.log("getting the posts");
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log("POSTS", response.data);
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
  const handleShowSinglePost = (post) => {
    console.log("showing single post through modal");
    setIsPostShowVisible(true);
    setCurrentPost(post);
  }
  const handleClosePostShowModal = () => {
    console.log("closing modal");
    setIsPostShowVisible(false)
  }
  
  //##FAQ Related
  const handleIndexFAQs = () => {
    console.log("getting the FAQs");
    axios.get("http://localhost:3000/faqs.json").then(response => {
      console.log("FAQS", response.data);
      setFaqs(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the faqs!", error);
    });
  }
  // console.log("This is FAQ Data", faqs)
  //Faq modal read
  const handleShowSingleFaq = (faq) => {
    console.log("Showing the FAQ")
    console.log(faq)
    setIsFaqShowVisible(true);
    setCurrentFaq(faq);
  }
  const handleCloseFaqShowModal = () => {
    setIsFaqShowVisible(false)
  }

  

  //## Review Related
  const handleIndexReviews = () => {
    console.log("getting the REVIEWS");
    axios.get("http://localhost:3000/reviews.json").then(response => {
      console.log( "REVIEWS",response.data);
      setReviews(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the Reviews!", error);
    });
  }

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
  useEffect(handleIndexReviews, [])
 



  return (
    <main>
        <h1>The Platonic Platypus</h1>
        {/* <p>{currentUser && currentUser.first_name}</p> */} {/*for dev testing*/}
      <a href="/postIndex">Blog Index</a> |  <a href="/indexFaqs">FAQ Index</a>  |  <a href="indexReviews">Reviews</a>

      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostNew />} />
        <Route path="/postIndex" element={
          <PostsIndex posts={posts} 
          onShowPost={handleShowSinglePost} 
          /> 
          } />
        <Route path="/indexFaqs" element={
          <FAQIndex faqs={faqs}
          onShowFaq={handleShowSingleFaq}/>} />
        <Route path="/indexReviews" element={<ReviewIndex reviews={reviews} />} />
        <Route path="/userprofile" element={<UserProfile user={currentUser}/>} />
      </Routes>

      <ModalPost show={isPostShowVisible} onClose={handleClosePostShowModal}>
      Think about this like html content
        <PostShow post={currentPost}/>
      </ModalPost>
      <ModalBasic show={isFaqShowVisible} onClose={handleCloseFaqShowModal} >
        <FAQShow faq={currentFaq} />
      </ModalBasic>
      <ModalBasic show={isReviewShowVisible} >
          <ReviewShow />
      </ModalBasic>
      
    </main>
  )
}