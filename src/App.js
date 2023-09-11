import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
