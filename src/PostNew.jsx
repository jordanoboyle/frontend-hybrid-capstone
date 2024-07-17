import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export function PostNew(props) {
  const {currentUser} = useContext(UserContext)


  const handlePostSubmit = (event) => {
    event.preventDefault();
    console.log("creating a new post");
    let params = new FormData (event.target);
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data);
    })
    window.location.href = "/postIndex"
    

  }
  return(
    <div>
      <p>{currentUser.last_name}</p>
      <h1>
        Want to write about something? We have you covered!
      </h1>
      <p>(functional needs routing and more intricate work)</p>
      <form onSubmit={handlePostSubmit}>
        <input name="user_id" type="hidden" value={currentUser.id}/>
        <div>
          Article Title:
          <input name="title" type="text"/>
        </div>
        <div>
          Game Title (not required):
          <input name="game_title" type="text"/>
        </div>
        <div>
          Genre Select:
          <input name="genre_id" type="integer" defaultValue={undefined}/>
          <sub>NOT A REQUIRED FIELD</sub>
        </div>
        <div>
          System Select:
          <input name="system_id" type="integer" defaultValue={undefined}/>
          <sub>NOT A REQUIRED FIELD</sub>
        </div>
        <div>
          Write Your Article Here:
          <input name="body" type="text"/>
        </div>
        <button>Post Your Article</button>
      </form>

    </div>
  )
}