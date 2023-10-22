import "./App.css";
import { Route, Routes } from "react-router-dom";
import Summary from "./components/summary";
import Home from "./components/home";
import VerticalNavbar from "./components/vertical-navbar";
import HorizontalMenubar from "./components/horizontal-menubar";
import ContentContainer from "./components/contentContainer";
import { useState, useEffect } from 'react';

function App() {

  const [path, setPath] = useState();
  const [x, setx] = useState();

  useEffect(() => {
    setPath(window.location.pathname);
    if(path === '/'){
      setx('Hello, Tom')
    }else if (path === '/summary'){
      setx('Summary')
    }
  },[])

 
  return (
    <div className="App bg-gray-20 w-screen">
      <div className="absolute">
        <HorizontalMenubar x={x}/>
        <VerticalNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
