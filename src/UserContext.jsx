import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [ jwt, setJWT ]               = useState(null);

  useEffect(() => {
    const storedJWT = localStorage.getItem("jwt");
    if (storedJWT) {
      setJWT(storedJWT);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedJWT}`;

      axios.get("http://localhost:3000/user-info.json")
      .then(response => {
        setCurrentUser(response.data)
      })
      .catch(error => {
        console.log("Error fetching user info", error);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          localStorage.removeItem('jwt');
          setJWT(null);
        }
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{currentUser, jwt, setCurrentUser, setJWT}} >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider}