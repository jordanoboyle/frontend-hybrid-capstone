import axios from "axios"
import { useState } from "react";


export function PostUpdate(props) {
  const [error, setError] = useState("")

  const handlingSubmitPostUpdate = (event) => {
    event.preventDefault();
    console.log("Update article/blog post from modal")
    let params = new FormData(event.target) 
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
      console.log(response.data);

      window.location.href = "/"
    })
    .catch(error => {
      console.log('There was an error during the update.', error);
      setError("There was an error on the update. Please try again later.")
    })
  }
  console.log(props.post)

  return(
    <div>
      <h1>Update your toughts and opinios here:</h1>
      <form onSubmit={handlingSubmitPostUpdate}>
        <div>Title:<input name="title" type="text" defaultValue={props.post.title}/></div>
        <div>Game:<input name="game_title" type="text" defaultValue={props.post.game_title}/></div>
        <div>Article:<input name="body" type="text" defaultValue={props.post.body}/></div>
        <button type="submit">Update The Article</button>
      </form>
        {error && (
          <div style={{color: 'red'}}>
            {error}
          </div>
        )}
    </div>
  )
}