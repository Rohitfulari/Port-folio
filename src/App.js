import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";


function App() {
  return (
    <>
    
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    

    
    </>
  );
}

export default App;
