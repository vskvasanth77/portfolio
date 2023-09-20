import "./App.css";
import About from "./Components/About";
import Email from "./Components/Email";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <BallTriangle
            className="loader"
            height={100}
            width={100}
            radius={5}
            color="#d25380"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          {" "}
          <Nav />
          <Home />
          <About />
          <Skills />
          <Project />
          <Email />
          <Footer />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
