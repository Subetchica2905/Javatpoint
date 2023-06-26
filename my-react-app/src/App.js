//import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (<>
    
      <div >
        <BrowserRouter>
          <Navbar/>
          <Layout/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
      </>
  );
}

export default App;
