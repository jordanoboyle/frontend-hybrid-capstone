import axios from "axios";
import { Nav } from "react-bootstrap";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <Nav.Link href="#" onClick={handleClick}>
      Logout
    </Nav.Link>
  );
}

//When importing component links to other components using bootstrap you will need to format the link with the same RBS compenent for it to look the same. 