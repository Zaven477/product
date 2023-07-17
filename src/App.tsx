import React from "react";
import Box from "@mui/material/Box";
import { Header } from "./components/Header";
import { ImagesProduct } from "./components/Main/Images";
import { Footer } from "./components/Footer/Footer";


const App = () => {
  return (
    <Box width="1200px" margin="0 auto">
      <Header />
      <ImagesProduct />
      <Footer />
    </Box>
  );
};

export default App;
