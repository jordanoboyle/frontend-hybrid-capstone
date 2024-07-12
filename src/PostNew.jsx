import axios from "axios";

export function PostNew(props) {

  const handlePostSubmit = (event) => {
    event.preventDefault();
    console.log("creating a new post");
    let params = new FormData (event.target);
    props.onCreateNewPost(params, () => event.target.reset())

  }
  return(
    <div>
      <h1>
        Want to write about something? We have you covered!
      </h1>
      <form onSubmit={handlePostSubmit}>
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
        </div>
        <div>
          System Select:
          <input name="system_id" type="integer" defaultValue={undefined}/>
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