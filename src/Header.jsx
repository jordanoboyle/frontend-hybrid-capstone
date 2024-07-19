import { LogoutLink } from "./LogoutLink"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Header() {
  const {currentUser} = useContext(UserContext)
  // console.log("from header", currentUser)

  const HeaderFormat = () => {
    const isLoggedIn = currentUser && Object.keys(currentUser).length > 0
    if (isLoggedIn) {
      return(
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Platypus Lounge (Home)</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/userprofile">{currentUser.first_name}'s Profile Page</Nav.Link>
                <Nav.Link as={LogoutLink}> LOGOUT  </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/postIndex">Community Blog</NavDropdown.Item>
                  <NavDropdown.Item href="/indexFaqs">Community FAQs</NavDropdown.Item>
                  <NavDropdown.Item href="/indexReviews">Community Reviews</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    } else {
      return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Platypus Lounge (Home)</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/signup">SIGNUP</Nav.Link>
              <Nav.Link href="/login"> LOGIN </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/postIndex">Community Blog</NavDropdown.Item>
              <NavDropdown.Item href="/indexFaqs">Community FAQs</NavDropdown.Item>
              <NavDropdown.Item href="/indexReviews">Community Reviews</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
    }
  }

  return (
    <header>
     <HeaderFormat/>
    </header>
  )
}

