import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
