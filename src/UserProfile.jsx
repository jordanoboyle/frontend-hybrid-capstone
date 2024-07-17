import { useState, useContext, useEffect } from "react"
import { UserContext, UserProvider } from "./UserContext"
import { ModalPostUpdate } from "./ModalPostUpdate"
import { PostUpdate } from "./PostUpdate"
import axios from "axios"




export function UserProfile (props) {
  const [favoritePosts, setFavoritePosts] = useState([])
  const [userPosts, setUserPosts] = useState([])
  const [postToRead, setPostToRead] = useState({})  //superflous code for now(looking to do a show modal again)
  // console.log("Props in UserProfile", props.user);
  
  const [currentPost, setCurrentPost] = useState({})
  const [isPostUpdateVisible, setIsPostUpdateVisible] = useState(false);
 

    //PostUpdate Modal form to update article
    const handleShowPostUpdateModal = (post) => {
      console.log("opening Post Update modal");
      setIsPostUpdateVisible(true);
      setCurrentPost(post);
    }
    const handleClosePostUpdateModal = () => {
      setIsPostUpdateVisible(false);
    }
  
  
  const getUserInformation = () => {
    axios.get(`http://localhost:3000/users/${props.user.id}.json`)
    .then(response => {
      console.log(response.data);
      setFavoritePosts(response.data.favorite_posts)
      setUserPosts(response.data.posts) //Pulling double duty here
    })
    .catch(error => {
      console.error("There was an error fetching the posts!", error);
    });
  }

  
  
  const handleUnfavoritePost = (event) => {
    const fpID = event.currentTarget.getAttribute("data-value");
    console.log("From handleUnfavoritePost", fpID);
    
    axios.delete(`http://localhost:3000/favorite_posts/${fpID}.json`)
    .then(response => {
      console.log(response.data);
      window.location.href = "/userprofile";
      
    })
    .catch(error => {
      console.error("There was an error during unfavorite!", error);
      alert("We could not remove your favorite tag at this time. Try again later.")
    });
  }
  
  
  useEffect(getUserInformation, [])
  
  return(

    <div>
      <h1>TESTING HTML From User Profile</h1>
      <div>
        <h1>{props.user.first_name}'s Profile Page</h1>

        <img src={props.user.prof_image ? props.user.prof_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AWbvUfq0O8YxAa3LNyPTKzoR3Y7EOiAS2w&s"} />
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <h2 style={{fontSize: "1em", fontWeight: "bold"}}>Something to know about this gamer:</h2>
        <p>{props.user.about_me}</p>
      </div>
      <hr/>
      <div>
        <h2 style={{textDecoration: "underline"}}>Favorited Blog Entries</h2>
        {favoritePosts.map(fp =>
          <div key={fp.post.id}>
             <p>{fp.post.title} </p>
             <button onClick={handleUnfavoritePost} data-value={fp.id}>Remove From Fav Catalogue</button>
             <hr></hr>
          </div>
        )}
      </div>
      <h2 style={{textDecoration: "underline"}}>Your Blog Contributions</h2>
      {userPosts.map(up =>
        <div key={up.id}>
          <h3>{up.title}</h3>
          <h4>Game: {up.game_title ? up.game_title : "N/A"}</h4>
          <h4>Genre: {up.genre ? up.genre.name : "N/A"}</h4>
          <h4>System: {up.system ? up.system.name : "N/A"}</h4>
          <button onClick={() => handleShowPostUpdateModal(up)}>Edit/Delete Post</button> 

        </div>
      )}
      <ModalPostUpdate show={isPostUpdateVisible} onClose={handleClosePostUpdateModal}>
        <PostUpdate post={currentPost}/>
      </ModalPostUpdate>
    </div>
  )
}


{/* <button onClick={() => setPostToRead()}>Read This Post</button> */}