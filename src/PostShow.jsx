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
    console.log("getting PostComments", props.post.post_comments);
    setPostComments(props.post.post_comments);
    console.log("DEV TEST PROPS", postComments)
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
      <div  style={commentSection}>
      {postComments.map((comment) => 
        <div  key={comment.id}>
          <div style={soloComment}>
            <p> <img style={{width: "2em", height: "2em"}} src={comment.user.prof_image} /> || <strong>Platonic Tag: {comment.user.username}</strong></p>
            <p>{comment.body}</p>
          </div>
        </div> 
      )}
      </div>
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

const commentSection = {
  marginTop: "2em",
  maxHeight: '25vh',
  maxWidth: '90%',
  backgroundColor: '#3f3f3f',
  overflowY: 'scroll',
  borderRadius: "2em"
};

const soloComment = {
  padding: '2%',
  margin: '2%',
  backgroundColor: '#ffffff',
  color: 'black',
  borderRadius: '2em', // Optional: adds rounded corners
};
//Ask about the concept of sending this request back to content?