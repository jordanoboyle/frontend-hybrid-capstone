import { LogoutLink } from "./LogoutLink"
import { useContext } from "react"
import { UserContext } from "./UserContext"


export function Header() {
  const {currentUser} = useContext(UserContext)
  // console.log("from header", currentUser)

  const HeaderFormat = () => {
    const isLoggedIn = currentUser && Object.keys(currentUser).length > 0
    if (isLoggedIn) {
      return(
        <nav>
          <a href="/">Home</a> | <a href="/contributions">All Blogs, FAQs, Reviews</a> | <a href="/userprofile">{currentUser.first_name}'s Profile Page</a> | <LogoutLink />
        </nav>
      )
    } else {
      return(
        <nav>
          <a href="/">Home</a> | <a href="/contributions">All Blogs, FAQs, Reviews</a> | <a href="/signup">Signup</a> | <a href="/login">Login</a>
        </nav>
      )
    }
  }

  return (
    <header>
     <HeaderFormat/>
    </header>
  )
}

// return (
//   <header>
//     <nav>
//       <a href="/">Home</a> | <a href="/contributions">All Blogs, FAQs, Reviews</a> | <a href="/signup">Signup</a> | <a href="/login">Login</a> | <LogoutLink />
//     </nav>
//   </header>
// )