import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <h2>STEMinist personality test</h2>
        </div>
      </header>
      <main>
        <div>
          <h3>Find out which STEMinist hero matches you!</h3>
        </div>
        <Quiz />
      </main>
      <footer>
        <div className="footer">
          <p>(c) STEMinist webapp 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
