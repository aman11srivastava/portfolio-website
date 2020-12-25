import React from "react";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navigation/Nav";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Projects/>
    </div>
  );
}

export default App;
