import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"



export function PostShow(props) {
  const [error, setError] = useState('')
  const [commentError, setCommentError] = useState('')
  const {currentUser} = useContext(UserContext);
  const [postComments, setPostComments] = useState([])
  // console.log("USER DATA in modal", currentUser);

  const handleFavoritingPost = (event) => {
    console.log("Favorite Post");
    const pID = event.currentTarget.getAttribute("data-value");

    console.log("FAV BUTTON", pID, currentUser)
    axios.post("http://localhost:3000/favorite_posts.json", {user_id: currentUser.id, post_id: pID})
    .then(response => {
      console.log("Post Request Confirm", response.data)
    })
    .catch(error => {
      console.log("There was an error adding to favorites", error);
      setError("There was an error on adding to favorites. Please try again later.")
    })
  } 
  const handleGettingPostComments = (event) => {
    const pID = event.currentTarget.getAttribute("data-value");

    axios.get("http://localhost:3000/post_comments.json", {params: {post_id: pID}})
    .then(response => {
      console.log("COMMENTS", response.data);
      setPostComments(response.data)
    })
    
  }
  const closeCommentsSection = () => {
    setPostComments([])
  }

  const handleSubmitComment = (event) => {
    event.preventDefault();
    console.log("Submitting the comment!");
    let params = new FormData(event.target);
    // for (let [key, value] of params.entries()) {
    //   console.log(key, value)
    // }
    axios.post(`http://localhost:3000/post_comments.json`, params)
    .then(response => {
      console.log("SUCCESS", response.data);
      setPostComments([...postComments], response.data)
    })
    .catch(error => {
      console.log("There was a error submitting comment", error);
      setCommentError("There was an error on submission. Try again later.")
    })
    event.target.reset();
  }
  


  //This is where you will render comments
  return(
    <div>
      <h1> {props.post.game_title} </h1>
      <p> Genre: {props.post.genre ? props.post.genre.name : "No Genre Applied"}</p>
      <p>System: {props.post.system ? props.post.system.name : "No System Applied"}</p>
      <div style={bodyStyle}>
        <p> {props.post.body}</p>  
      </div>
      <p>Author: {props.post.user.first_name + " " + props.post.user.last_name}</p>
      <p> PlatonicTag: {props.post.user.username}</p>
      <button style={buttonStyle} onClick={handleFavoritingPost} data-value={props.post.id}>Add To Your Favorites</button>
      {error && (
        <div style={{color: "red"}}>
          {error}
        </div>
      )}
      <br></br>
      <button 
      style={buttonStyle} 
      onClick={handleGettingPostComments} data-value={props.post.id}>
        View Comments
      </button>
      <button 
      onClick={closeCommentsSection} style={buttonStyle}>
        Close Comments
      </button>
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
      <form onSubmit={handleSubmitComment}>
        <div>
          <input type="hidden" name="user_id" value={currentUser.id}/>
          <input type="hidden" name="post_id" value={props.post.id}/>
          <p>
            <label>Add Comment Here:</label>
          </p>
          <textarea name="body" type="text" style={commentAreaStyle}>  
          </textarea>
        </div>
        <button type="submit" style={buttonStyle} required>
          Submit
        </button>
      </form>
    </div>
  )
}

const bodyStyle = {
  maxHeight: '60vh', // Adjust based on your needs
  overflowY: 'auto',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '10px',
  marginTop: '10px'
};

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
  maxHeight: '40vh',
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
const commentAreaStyle = {
  maxHeight: '60vh', // Adjust based on your needs
  width: '90%',
  overflowY: 'auto',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '10px',
  marginTop: '10px'
};
//Ask about the concept of sending this request back to content?