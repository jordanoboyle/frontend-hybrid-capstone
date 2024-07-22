import axios from "axios";




export function FAQIndex(props) {
  console.log(props.faqs)


  return(
    <div>
      <h1>Frequently Asked Questions:</h1>
      {props.faqs.map((q) => 
      <div key={q.id}>
        <h1 style={{fontSize: "1em", fontWeight: "bold"}}>Question: {q.question} </h1> 
        <p>Game: {q.game_title}</p>
        <p>Genre: {q.genre.name}</p>
        <p>System: {q.system.name}</p>
        <p>Details: {q.description}</p>
        <p>Author: {q.user.first_name + " " + q.user.last_name}</p>
        <p> PlatonicTag: {q.user.username}</p>
        <button onClick={() => props.onShowFaq(q)} >See Question Detail</button>
        {/* <button>Update FAQ (author only)</button> {/*Maybe restrict this to user page?*/}
        {/* <button>Delete FAQ (author only)</button> */}
        <hr/>

      </div>
      )}
      
    </div>
  )
}