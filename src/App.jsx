import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Destination from "./Components/Destination";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main style={{ minHeight: "100vh" }}>
        <div id="home">
          <Home />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="destination">
          <Destination />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
