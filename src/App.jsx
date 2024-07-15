import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App;