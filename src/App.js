import "./App.css";
import About from "./Components/About";
import Email from "./Components/Email";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
