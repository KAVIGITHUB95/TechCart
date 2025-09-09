
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
