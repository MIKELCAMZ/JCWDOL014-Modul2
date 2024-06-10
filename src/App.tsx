import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./global/components/navbar";
import Footer from "./global/components/footer";
import BasicStatistics from "./global/components/statistik"



import Home from "./pages/home";
import Register from "./pages/register";
function App() {
  return (
    <Box>
      <Navbar />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      
    </Box>

    
  );
}

export default App;