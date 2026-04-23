import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to your green paradise 🌿</p>
        <button onClick={() => alert("Welcome to Paradise Nursery!")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
