import React from "react";
import Main from "./Components/Main/Main";
import Nav from "./Components/Navigation/Nav";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Resume/>
    </div>
  );
}

export default App;
