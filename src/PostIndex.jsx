import axios from "axios";
import { useState } from "react"

export function PostsIndex(props) {
  console.log(props.posts)

  function truncateText(text, maxlength) {
    if (text.length <= maxlength) {
      return text
    } else {
      return text.substring(0, maxlength) + "..."
    }
  }  


  return(
    <div>
      <h1>Articles From the Community</h1>
        {props.posts.map((post) =>
        <div key={post.id} >
          <h1> {post.title} </h1>
          <h1> {post.game_title} </h1>
          <p> Genre: {post.genre ? post.genre.name : "No Genre Applied"}</p>
          <p>System: {post.system ? post.system.name : "No System Applied"}</p>
          <p> {truncateText(post.body, 150)}</p>  {/*Body text truncated for visual purposes*/}
          <p>Author: {post.user.first_name + " " + post.user.last_name}</p>
          <p> PlatonicTag: {post.user.username}</p>
          <button onClick={() => props.onShowPost(post)}> Read Article</button>
          <hr/>
        </div>
        
      )}
    </div>
  )
}