import "./App.css";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
