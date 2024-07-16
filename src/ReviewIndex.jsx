import axios from "axios"


export function ReviewIndex(props) {
  const reviews = props.reviews
  console.log("these are the reviews", reviews)
  function truncateText(text, maxlength) {
    if (text.length <= maxlength) {
      return text
    } else {
      return text.substring(0, maxlength) + "..."
    }
  }  

  return(
    <div>
      <h1>Game Reviews</h1>
      {reviews.map((rev) => 
        <div key={rev.id}>
          <h2>{rev.game_title} <sub>Rating: {rev.rating}</sub></h2>
          <p>{rev.subtitle}</p>
          <p>{truncateText(rev.body, 200)}</p>
          <strong>Author: {rev.user.first_name + " " + rev.user.last_name}</strong>
          <p><button>Read Article</button></p>
          <hr/>
          
        </div>  
      )}
    </div>
  )
}