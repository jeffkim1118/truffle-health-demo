import "./App.css";
import { Route, Routes } from "react-router-dom";
import Summary from "./components/summary";
import Home from "./components/home";
import VerticalNavbar from "./components/vertical-navbar";
import HorizontalMenubar from "./components/horizontal-menubar";
import ContentContainer from "./components/contentContainer";

function App() {
  return (
    <div className="App bg-gray-200">
      <div className="absolute">
        <HorizontalMenubar />
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
