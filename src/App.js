import React from "react";
import GraphSection from "./components/GraphSection";
import Selection from "./components/Selection";
import './App.css';
// import Selection from "./components/Selection";

const App = (props) => {
  return (
    <div>
      <Selection />
      <GraphSection />
    </div>
  );
};

export default App;
