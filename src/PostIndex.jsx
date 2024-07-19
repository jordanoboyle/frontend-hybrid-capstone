import axios from "axios";
import { useState } from "react"
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardSubtitle, Button, CardGroup } from "react-bootstrap";

export function PostsIndex(props) {
  console.log("FROM POST INDEX", props.posts)

  function truncateText(text, maxlength) {
    if (text.length <= maxlength) {
      return text
    } else {
      return text.substring(0, maxlength) + "..."
    }
  }  


  return(
    <div>
      <h1>Articles From the Community</h1>
        <p>Click <a href="/post/new">HERE</a> to contribute to the community blog.</p>
        <br></br>
        <br></br>
        <br></br>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {props.posts.map((post) =>
            <Col key={post.id}>
              <Card style={{ width: '18rem'}} >
                  <Card.Img variant="top" src={post.image_url_one} 
                  alt='/public/DefaultImages/GameOver.jpg' 
                  style={cardImage}/>
                  <Card.Body>
                    <Card.Text>{post.id}</Card.Text> {/*for dev purposes only*/}
                    <Card.Title>{post.title}</Card.Title>
                    <CardSubtitle>Game: {post.game_title}</CardSubtitle>
                    <Card.Text>
                      {truncateText(post.body, 150)}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Author: {post.user.first_name + " " + post.user.last_name}
                    </ListGroup.Item>
                    <ListGroup.Item>PlatonicTag: {post.user.username}</ListGroup.Item>
                    <ListGroup.Item>GAME LINK HERE?</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <div className="d-grid gap-2">
                      <Button variant="primary" 
                      size="lg" 
                      onClick={() => props.onShowPost(post)}>
                        Read Article
                      </Button>
                    </div>
                  </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
    </div>
  )
}

const cardImage = {
  width: "100%",
  height: "200px", /* Adjust the height as needed */
  objectFit: "cover",

  }



function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
       {props.posts.map((post) =>
        <div key={post.id} >
          <p>{post.id}</p>  {/*for dev purposes only*/}
          <h1> {post.title} </h1>
          <div style={{display: 'flex', gap: '10px' }}>
            <img src={post.image_url_one} 
            alt='/public/DefaultImages/GameOver.jpg'
            style={{width: '300px', height: "300px" }}/> 
            <img src={post.image_url_two} 
            alt='/public/DefaultImages/GameOver.jpg'
            style={{width: '300px', height: "300px" }}/>
          </div>
          <h1> {post.game_title} </h1>
          <p> Genre: {post.genre ? post.genre.name : "No Genre Applied"}</p>
          <p>System: {post.system ? post.system.name : "No System Applied"}</p>
          <p> {truncateText(post.body, 150)}</p>  {/*Body text truncated for visual purposes*/}
          <p>Author: {post.user.first_name + " " + post.user.last_name}</p>
          <p> PlatonicTag: {post.user.username}</p>
          <p><button onClick={() => props.onShowPost(post)}> Read Article</button> </p>
          <hr/>
        </div>
      )}
    </Stack>
  );
}


// {props.posts.map((post) =>
//   <div key={post.id} >
//     <p>{post.id}</p>  {/*for dev purposes only*/}
//     <h1> {post.title} </h1>
//     <div style={{display: 'flex', gap: '10px' }}>
//       <img src={post.image_url_one} 
//       alt='/public/DefaultImages/GameOver.jpg'
//       style={{width: '300px', height: "300px" }}/> 
//       <img src={post.image_url_two} 
//       alt='/public/DefaultImages/GameOver.jpg'
//       style={{width: '300px', height: "300px" }}/>
//     </div>
//     <h1> {post.game_title} </h1>
//     <p> Genre: {post.genre ? post.genre.name : "No Genre Applied"}</p>
//     <p>System: {post.system ? post.system.name : "No System Applied"}</p>
//     <p> {truncateText(post.body, 150)}</p>  {/*Body text truncated for visual purposes*/}
//     <p>Author: {post.user.first_name + " " + post.user.last_name}</p>
//     <p> PlatonicTag: {post.user.username}</p>
//     <p><button onClick={() => props.onShowPost(post)}> Read Article</button> </p>
//     <hr/>
//   </div>
// )}