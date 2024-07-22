import axios from "axios";
import './index.css';
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

export function PostNew(props) {
  const {currentUser} = useContext(UserContext)
  const isLoggedIn = currentUser && Object.keys(currentUser).length > 0


  const handlePostSubmit = (event) => {
    event.preventDefault();
    console.log("creating a new post");
    let params = new FormData (event.target);
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data);
    })
    window.location.href = "/postIndex"
  }

  if (isLoggedIn) {
  return(
    <div>
      <h1 style={headerStyle}>
        Want to write about something? We have you covered!
      </h1>
      <Form onSubmit={handlePostSubmit}>
        <input name="user_id" type="hidden" value={currentUser.id}/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Article Title:</Form.Label>
          <Form.Control name="title" type="string" placeholder="Your Article Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Game Title:</Form.Label>
          <Form.Control name="game_title" type="string" placeholder="Not Required" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Genre Select:</Form.Label>
          <Form.Control 
          name="genre_id" 
          type="integer" 
          defaultValue={undefined} 
          placeholder="DROP DOWN COMING SOON"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>System Select:</Form.Label>
          <Form.Control 
          name="system_id" 
          type="integer" 
          defaultValue={undefined} 
          placeholder="DROP DOWN COMING SOON"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write Article Here</Form.Label>
          <Form.Control as="textarea" rows={10} name="body" type="text"/>
        </Form.Group>
        <Button variant="info" type="submit">Submit Article</Button>
      </Form>
    </div>
  )
} else {
  return(
    <p style={headerStyle}>We are so happy that you would like to contribute to our community blog! While we are happy to let you browse the different resources and articles provided here, we ask that you <a href="/signup">SIGNUP</a> or <a href="/login">LOGIN</a> in order to contribute. This allows us to care for our contributors and yourself in equal measure. Thank you for your understanding. </p>
  )
}
//Using promise structure or async/await in order to render this page with appropriate timing. 
}

const headerStyle = {
  fontFamily: "'Press Start 2P', cursive",
  color: '#fff',
  backgroundColor: '#000',
  padding: '20px',
  border: '5px solid #00ff00',
  borderRadius: '10px',
  textAlign: 'center',
  textTransform: 'uppercase',
  boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
  width: 'fit-content',
  margin: '20px auto',
};