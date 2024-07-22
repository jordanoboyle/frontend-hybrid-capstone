import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

export function HomePage() {
  const navigate = useNavigate()
  return(
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <h1>Welcome to the Platonic Platypus Lounge</h1>
        <div>
          <h2>Visit the blog. Become a contributor or read from the thoughts of your fellow contributors.</h2>
          <Button variant="secondary" onClick={() => navigate("/postIndex")} style={buttonStyle}>Blog</Button>
        </div>
        <div>
          <h2>Ask questions and find answers to other inquiries in the FAQ Section</h2>
          
          <Button variant="primary" size="lg" onClick={() => navigate("/indexFaqs")} style={buttonStyle}>
            FAQs
          </Button>
        </div>
        <div>
          <h2>See what our esteemed contributors think of games and systems, both new and retro.</h2>
          <Button variant="primary" size="lg" onClick={() => navigate("/indexReviews")} style={buttonStyle} >
           Reviews
          </Button>
        </div>
        <p>Image by Raoul Stolzlechner from Pixabay</p>
      </div>
    </div>
  )
}



const outerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url(/public/DefaultImages/BGimg.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
const innerContainerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  color: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  maxWidth: '80%',
  width: '80%',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  padding: '2em 2em',
  fontSize: '3em',
  margin: '10px 0',
  borderRadius: '5px',
  width: '40%',
  cursor: 'pointer',
};
