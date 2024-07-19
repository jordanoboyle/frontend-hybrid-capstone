import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

export function HomePage() {
  const navigate = useNavigate()
  return(
    <div>
      <h1>Test from the Home Page</h1>
      <h1>Welcome the Platonic Platypus Lounge</h1>
      <div>
        <h2>Visit the blog. Become a contributor or read from the thoughts of your fellow contributors.</h2>
        <Button variant="secondary" onClick={() => navigate("/postIndex")}>Blog</Button>
      </div>
      <div>
        <h2>Ask questions and find answers to other inquiries in the FAQ Section</h2>
        <button onClick={() => navigate("/indexFaqs")}>FAQs Section</button>
      </div>
      <div>
        <h2>See what our esteemed contributors through of games and systems, both new and retro.</h2>
        <button onClick={() => navigate("/indexReviews")}>Reviews</button>
      </div>
    </div>
  )
}

{/* <Button variant="secondary">Blog</Button> */}