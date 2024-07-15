import { useState, useContext } from "react"
import { UserContext, UserProvider } from "./UserContext"
import axios from "axios"




export function UserProfile (props) {

  console.log(props);

  
  
  
  return(

    <div>
      <h1>TESTING HTML From User Profile</h1>
     
      <h1>{props.user.first_name}'s Profile Page</h1>

      <img src={props.user.prof_image ? props.user.prof_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AWbvUfq0O8YxAa3LNyPTKzoR3Y7EOiAS2w&s"} />
      <p>Username: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      <h2 style={{fontSize: "1em", fontWeight: "bold"}}>Something to know about this gamer:</h2>
      <p>{props.user.about_me}</p>

    </div>
  )
}


//## Obsolete, but maybe useful for testing for a minute.
// const ShowUserData = () => {
//   const isLoggedIn = !!currentUser
//   if (isLoggedIn) {
//     return(
//       <div>
//         <p>This is the user about me below</p>
//         <p>About Me: {currentUser.about_me}</p>
//       </div>
//     )
//   } else {
//     <div>
//       <h1>No Current Login Status Available</h1>
//     </div>
//   }
// }