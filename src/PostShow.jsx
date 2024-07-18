import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"



export function PostShow(props) {
  const [error, setError] = useState('')
  const {currentUser} = useContext(UserContext);
  const [postComments, setPostComments] = useState([])
  // console.log("USER DATA in modal", currentUser);

  const handleFavoritingPost = (event) => {
    console.log("favorite this specific post");
    const pID = event.currentTarget.getAttribute("data-value");

    console.log("from FAV BUTTON", pID, currentUser)
    axios.post("http://localhost:3000/favorite_posts.json", {user_id: currentUser.id, post_id: pID})
    .then(response => {
      console.log("Post Request Confirm", response.data)
    })
    .catch(error => {
      console.log("There was an error adding to favorites", error);
      setError("There was an error on adding to favorites. Please try again later.")
    })
  } 

  const handleGettingPostComments = () => {
    console.log("getting PostComments");
    setPostComments(props.post.post_comments);
  }
  


  //This is where you will render comments
  return(
    <div>
      <h1> {props.post.game_title} </h1>
      <p> Genre: {props.post.genre ? props.post.genre.name : "No Genre Applied"}</p>
      <p>System: {props.post.system ? props.post.system.name : "No System Applied"}</p>
      <p> {props.post.body}</p>  {/*Body text truncated for visual purposes*/}
      <p>Author: {props.post.user.first_name + " " + props.post.user.last_name}</p>
      <p> PlatonicTag: {props.post.user.username}</p>
      <button style={buttonStyle} onClick={handleFavoritingPost} data-value={props.post.id}>Add To Your Favorites</button>
      {error && (
        <div style={{color: "red"}}>
          {error}
        </div>
      )}
      <br></br>
      <button style={buttonStyle} onClick={handleGettingPostComments}>View Comments</button>
    </div>
  )
}

const buttonStyle = {
  padding: '10px 20px',
  paddingTop: "10px",
  marginTop: "10px",
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

//Ask about the concept of sending this request back to content?