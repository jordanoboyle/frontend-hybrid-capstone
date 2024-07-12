import axios from "axios"


export function PostUpdate(props) {

  const handlingSubmitPostUpdate = () => {
    console.log("Update article/blog post from modal")
  }
  console.log(props.post)

  return(
    <div>
      <h1>Update your toughts and opinios here:</h1>
      <form>
        <div>Title:<input name="title" type="text" defaultValue={props.post.title}/></div>
        <div>Game:<input name="game_title" type="text" defaultValue={props.post.game_title}/></div>
        <div>Article:<input name="body" type="text" defaultValue={props.post.body}/></div>
      </form>
        <button onClick={handlingSubmitPostUpdate}>Update The Article</button>
    </div>
  )
}