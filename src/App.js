import "./App.css";
import NavComponent from "./Components/NavBar";
import Projects from "./Components/Project";
import Home from "./Components/home";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent />
      </header>
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
