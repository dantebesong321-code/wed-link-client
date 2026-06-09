
import "./App.css";
import { Routes, Route } from "react-router";
import './App.css'
import HomePage from "./pages/HomePage";
import VendorDetailPage from "./pages/VendorDetailPage";

// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
    <Navbar/>

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
  path="/vendors/:id"
  element={<VendorDetailPage />}
/>
      
      </Routes>
      
       <Footer />
    
    </>
  )
}

export default App
