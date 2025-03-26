import Navbar from "./componenets/Navbar";
import Cards from "./componenets/Cards";
import Cart from "./componenets/Cart"; // Import the Cart component
import { Routes, Route } from "react-router-dom";
import Herosection from "./componenets/Herosection";
import "./aap.css"
function App() {
  return (
    <div className="appmaincontainer">
      {/* Navbar is always visible */}
      <Navbar />
     

      {/* Define routes for the application */}
      <Routes>
        <Route path="/" element={<Cards />} /> {/* Home route */}
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        {/* <Route path="/" element={<Herosection/>}/> */}
      </Routes>

        
    </div>
  );
}

export default App;
