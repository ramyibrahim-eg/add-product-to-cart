import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Navbar from "./head/Navbar";
import ShoppingCardProvider from "./context/ShoppingCard";

const App = () => {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
};

export default App;
