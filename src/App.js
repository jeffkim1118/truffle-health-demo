import logo from "./logo.svg";
import "./App.css";
import VerticalNavbar from "./components/vertical-navbar";
import HorizontalMenubar from "./components/horizontal-menubar";
import ContentContainer from './components/contentContainer';

function App() {
  return (
    <div className="App">
      <div className="grid-line">
        <VerticalNavbar />
        <HorizontalMenubar />
        <ContentContainer/>
      </div>
      
    </div>
  );
}

export default App;
