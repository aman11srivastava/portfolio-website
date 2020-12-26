import React from "react";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navigation/Nav";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
