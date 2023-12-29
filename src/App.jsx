import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Destination from "./Components/Destination";

function App() {
  return (
    <div>
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        <div id="home">
          <Home />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="destination">
          <Destination />
        </div>
      </main>
    </div>
  );
}

export default App;
