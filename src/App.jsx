import { useState, useEffect } from "react";
import Splash from "./components/splash screen/Splash";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Main />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
