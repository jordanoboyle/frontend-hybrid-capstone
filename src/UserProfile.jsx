import { useState, useContext } from "react"
import { UserContext, UserProvider } from "./UserContext"
import axios from "axios"




export function UserProfile (props) {
  const [favoritePosts, setFavoritePosts] = useState([])
  const [postToRead, setPostToRead] = useState({})
  console.log("Props in UserProfile",props);

  const getUserInformation = () => {
  axios.get(`http://localhost:3000/users/${props.user.id}.json`)
  .then(response => {
    console.log(response.data);
    setFavoritePosts(response.data.favorite_posts)
  })
  .catch(error => {
    console.error("There was an error fetching the posts!", error);
  });
}


  const handleUnfavoritePost = (event) => {
    const valueId = event.currentTarget.getAttribute("data-value");
    console.log("From handleUnfavoritePost",valueId);  
    //Place Axios Request here to eliminate favorite post from the list, revert to user page (refresh)
  }

  
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
        <button onClick={getUserInformation}>Your Favorite Posts</button>
        {favoritePosts.map(fp =>
          <div key={fp.post.id}>
             <p>{fp.post.title} </p>
             <button onClick={handleUnfavoritePost} data-value={fp.id}>UnFavorite</button>
          </div>
        )}
      </div>
    </div>
  )
}


{/* <button onClick={() => setPostToRead()}>Read This Post</button> */}