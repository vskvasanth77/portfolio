import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
