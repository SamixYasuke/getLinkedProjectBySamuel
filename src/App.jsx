import Home from "./Home";
import Contact from "./Contact"
import Nav from "./Components/Nav";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ()=> {
  return (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  </Router>
  );
}

export default App;