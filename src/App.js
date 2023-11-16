import Header from "./components/Header/header";
import Hero from "./components/Hero/hero"
import './App.css';
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Routes from "./Routes/Routes";
import GetStarted from "./components/GetStarted/GetStarted";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        {/* <Routes /> */}
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;
