


export function PostShow(props) {


  return(
    <div>
      <h1> {props.post.game_title} </h1>
      <p> Genre: {props.post.genre ? props.post.genre.name : "No Genre Applied"}</p>
      <p>System: {props.post.system ? props.post.system.name : "No System Applied"}</p>
      <p> {props.post.body}</p>  {/*Body text truncated for visual purposes*/}
      <p>Author: {props.post.user.first_name + " " + props.post.user.last_name}</p>
      <p> PlatonicTag: {props.post.user.username}</p>
    </div>
  )
}