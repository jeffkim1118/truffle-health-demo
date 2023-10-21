import "./App.css";
import VerticalNavbar from "./components/vertical-navbar";
import HorizontalMenubar from "./components/horizontal-menubar";
import ContentContainer from './components/contentContainer';
import { Route, Routes } from "react-router-dom";
import Summary from "./components/summary";

function App() {
  return (
    <div className="App bg-gray-200">
      <div className="grid-line">
        <VerticalNavbar />
        <HorizontalMenubar />
        <ContentContainer/>
      </div>

      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
