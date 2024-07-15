import { useState, useContext } from "react"
import { UserContext } from "./UserContext"



export function UserProfile (props) {
  const {currentUser} = useContext(UserContext)

  const ShowUserData = () => {
    const isLoggedIn = !!currentUser
    if (isLoggedIn) {
      return(
        <div>
          <p>This is the user about me below</p>
          <p>About Me: {currentUser.about_me}</p>
        </div>
      )
    } else {
      <div>
        <h1>No Current Login Status Available</h1>
      </div>
    }
  }
  
  return(

    <div>
      This is from userProfile
      <ShowUserData/>
    </div>
  )
}